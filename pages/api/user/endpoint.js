import db from "@/schema/connect-db";
import Users from "@/schema/user-schema";
import { authOptions } from "../auth/[...nextauth]";
import { getServerSession } from "next-auth";

export default async function endPoint (req, res){
    
    const session = await getServerSession(req, res, authOptions);

    if(req.method === 'GET' && session){
         
        let userStats;
        let newUserId;
        const createUser = async () => {
            await db.sync()
            .then(() => {
                try {
                    const create = Users.create({
                        name: session.user.name,
                        email: session.user.email,
                        picture: session.user.image
                    }, 
                    {
                        returning: ['id'],
                        raw: true
                    })
                    
                    userStats = true;
                    newUserId = create;

                } catch (error) {
                    console.log(error);
                    userStats = false;
                }
            })
        };

        let isNewUser;
        let oldUserId;
        const checkUser = async () => {
            try {
                await db.sync()
                .then(async () => {

                    const response = await Users.findOne({
                        where: {
                            email: session.user.email
                        },
                        attributes: ['id'],
                        raw: true,
                    })
                    if(response){
                        console.log(response)
                        isNewUser = false;
                        oldUserId = response;
                    } else {
                        isNewUser = true;
                    }
                })
                
            } catch (error) {
                //PRECISO PERSONALIZAR ESTE ERRO
                console.log(error);
            }
        }

        await checkUser()
        .then(async() => {
            if(isNewUser){
                await createUser()
                .then(() => {
                    if(userStats){
                        res.json({
                            formRequest: 'created',
                            formError: [''],
                            id: newUserId,
                        })
                    } else {
                        res.json({
                            formRequest: 'error',
                            formError: ['Desculpe, ouve um erro em nosso sistema, por favor tente novamente.']
                        })
                    }
                })
            } else {
                res.json({
                    formRequest: 'error',
                    formError: ['O usuário já existe'],
                    id: oldUserId
                });
            }
        })
        

    } else {
        res.json('usuario não logado')
    }
}