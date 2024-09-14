import Conteudo from "../components/Conteudo";
import InputEmail from "../components/InputEmail";
import InputSenha from "../components/InputSenha";
import Link from "../components/Link";
import Rodape from "../components/Rodape";
import Titulo from "../components/Titulo";
import Botao from "../components/botao";
import Icone from "../components/icone";
import "./Login.css";

function Login() {
    return (
     <>
     <Conteudo estilo = "login-container">
        <Icone imagem="" texto="Logo da Aplicação"/>
        <Titulo texto="Aluno Online" />
        <InputEmail />
        <InputSenha />
        <Botao texto="Entrar"/>
        <Link texto="Esqueceu a Senha?" />

     </Conteudo>
        <Rodape texto="Copyright (C) 2024" />

     </>
    );
  }

  export default Login;