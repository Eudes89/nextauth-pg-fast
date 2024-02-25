import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
// import GithubProvider from "next-auth/providers/github";
// import PostgresAdapter from "../node_modules/@auth/pg-adapter/index";
// import { Pool } from "pg";

import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions = {
  pages: {
    // signIn: "/authUser/signin"
  },
  providers: [
    CredentialsProvider({
      name: 'credentials',
      // credentials: {},
      async authorize(credentials, req){

        //CRIPTOGRAFAR OS DADOS E ENVIAR PARA UMA API OU RESOLVER AQUI
        // credentials.email e credentials.password conterão os dados.
        // const datas = {
        //   userEmail: credentials.userEmail,
        //   userPassword: credentials.userPassword
        // }
        
        // const res = await fetch('http://localhost:3000/api/checkuser', {
        //   method: 'POST',
        //   body: JSON.stringify(credentials),
        //   headers: { "Content-Type": "application/json" },
        // })

        // const user = await res.json();
        // console.log('[nexthauth].js USER ===== ')
        // console.log(user);

        // if(res.ok && user){
        //   return user;
        // }else {
        //   return null
        // }
        
      }
    }),
    GoogleProvider({
      name: 'google',
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  secret: process.env.NEXTHAUTH_SECRET,
  session: {
    strategy: "jwt",
  },

  
}

export default NextAuth(authOptions)
