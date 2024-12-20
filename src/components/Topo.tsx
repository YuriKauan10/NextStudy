
const teste = {
  display:'flex',
  alignItens: 'center',
  justifyContent: 'center',
  color: '#00f',
  backgroundColor: '#eee',
  fontSize:'20px'
}


export default function Topo(){
    const idade = 18
    
    return (
      <div style = {teste}>
        <div className="flex flex-col justify-center items-center">
        <h1 style = {{color: '#f00',backgroundColor: '#bbb'}}>Meu nome é: </h1>
        <div className="subtitulo">Programador</div>
        <div>{idade}</div> 
        </div>
      </div>
    )
  }
