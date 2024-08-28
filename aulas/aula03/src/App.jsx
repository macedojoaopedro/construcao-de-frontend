import Titulo from '.;components/Titulo';

function Titulo() {
  return (
    <h1>Ola</h1>
  );
}

function App(){
  return (
    <div>
      {console.log("Vegetti é foda")}
      <Titulo />
      <p>Minha aplicação</p>
  </div>
  );
}

export default App;