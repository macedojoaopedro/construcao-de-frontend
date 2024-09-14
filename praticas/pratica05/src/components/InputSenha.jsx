import "./Input.css";

function InputSenha(props) {
    return (
     <>
       <label htmlFor="senha">Senha</label>
       <input type="password" id="senha" name="senha" required />
     </>
    );
  }

  export default InputSenha;