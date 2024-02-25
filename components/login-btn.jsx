import { useSession, signIn, signOut } from "next-auth/react";
import Image from "next/image";

export default function LoginBtn() {
  const { data: session } = useSession();

  const handleGoogleAuth = async () => {
    
    // callbackurl com u minusculo redireciona para a api do google.
    // callbackUrl com U maiusculo redireciona o usuário depois de logado.

    await signIn('google', {
        callbackurl: 'https://eadev.vercel.app/api/auth/callback/google',
        // callbackurl: 'http://localhost:3000/api/auth/callback/google',
        callbackUrl: '/'
    })
    
  }

  if (session) {
    

    
    return (
      <>
        <div className="inline-flex">

          <Image 
            src={session.user.image}
            alt="Imagem do usuário"
            width={50}
            height={50}
          />

          <p className="text-black ml-2">
            {session.user.name}
          </p>

        </div>

        <button className="bg-green-600 px-2 py-1 text-white"
        onClick={() => signOut()}
        >
          Sair
        </button>
      </>
    )
  }
  return (
    <>
      Not signed in <br />
      <button className="bg-blue-600 text-white px-2 rounded-lg ml-2 py-2
      font-bold"
      onClick={handleGoogleAuth}>Sign in</button>
    </>
  )
}