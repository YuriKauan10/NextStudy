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

const teste = {
  display:'flex',
  alignItens: 'center',
  justifyContent: 'center',
  color: '#00f',
  backgroundColor: '#eee',
  fontSize:'20px'
}

function Topo(){
  const idade = 18
  
  return (
    <div style = {teste}>
      <div className="flex flex-col justify-center items-center">
      <h1 style = {{color: '#f00',backgroundColor: '#bbb'}}>Meu nome é: </h1>
      <div className="subtitulo">Programador</div>
      <div>{idade}</div> 
      </div>
      <div className="text-3xl">{nome + ' ' + sobrenome}</div>
    </div>
  )
}

export default function Home() {
  return (
    <main>
      <div>
        <Topo/>
      </div>
      </main>
    )
}
