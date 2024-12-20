// import { Geist, Geist_Mono } from "next/font/google";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });
// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });
const nome = 'Yuri'
const sobrenome = 'Kauan'


function Topo(){
  const idade = 18

  return (
    <div className = ' justify-between items-center bg-zinc-300 h-20'>
      <div className="flex flex-col justify-center items-center">
      <h1>Meu nome é: </h1>
      <div className="text-3xl">{nome + ' ' + sobrenome}</div>
      <div>{idade}</div> 
      </div>
      <div className="subtitulo">Programador</div>
    </div>
  )
}

export default function Home() {
  return (
    <main>
        <Topo/>
      </main>
    )
}
