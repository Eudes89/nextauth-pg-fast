import Image from "next/image";
import { Inter } from "next/font/google";
import LoginBtn from "../components/login-btn";
import { useSession } from "next-auth/react";
import { useState, useEffect } from "react";

const inter = Inter({ subsets: ["latin"] });


export default function Home() {
  
  const [userId, setUserId] = useState(0)
  const {data: session} = useSession();
  
  // Função responsavel por administrar o usuario no banco de dados
  async function userInfoActions(){
    
    const request = await fetch('http://localhost:3000/api/user/endpoint', {
      method: "GET"
    })

    const response = await request.json()

    if(response.id){
      setUserId(response.id.id)
    }
    
  }
  
  // Usado para cadastrar ou buscar cliente cadastrado no DB
  useEffect(() => {
    userInfoActions()
  },[userId])

  return (
    <main
      className=""
    >
      <LoginBtn />
    </main>
  );
}
