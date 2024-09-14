import Icone from './Icone';
import InputPesquisar from './InputPesquisar';
import Titulo from './Titulo';
import "./Cabecalho.css";

function Cabecalho(props) {
    return (
        <header>
        <div>
          <Icone imagem="https://static.dicionariodesimbolos.com.br/upload/60/81/conheca-o-significado-do-escudo-do-vasco-da-gama-5_xl.png" texto="Logo do Aplicação" />
          <Titulo texto="Aluno Online" />
        </div>
        <div> 
          <InputPesquisar />
          <Icone imagem="" texto="Icone Pesquisar" />
        </div>
     </header>
     
    );
  }

  export default Cabecalho;