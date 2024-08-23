const root = document.getElementById("root");

/* componentes da aplicacao */

function Cabecalho() {
    const header = document.createElement("header");
    return header;
}

function Principal() {
    const main = document.createElement("main");
    return main;
}

function Rodape() {
    const footer = document.createElement("footer");
    return footer;
}

function Botao(nome) {
    const button = document.createElement("input");
    button.setAttribute("type", "submit");
    button.setAttribute("value", nome);
    return button;
}


function Input(id, tipo, rotulo){
    const label = document.createElement("label");
    label.setAttribute("for", id);
    label.innerText = rotulo;
    const input = document.createElement("input");
    input.setAttribute("type", tipo);
    input.setAttribute("id", id);
    input.setAttribute("name", id);
    const grupo = document.createElement("div");
    grupo.append(label, input);
    return grupo;
}

function Link(texto, rota) {
    const link = document.createElement("a");
    link.setAttribute("href", rota);
    link.innerText = texto;
    return link;
}

function Titulo(texto) {
    const titulo = document.createElement("h1");
    titulo.innerText = texto;
    return titulo;
}

function Imagem(origem, texto) {
    const img = document.createElement("img");
    img.setAttribute("src", origem);
    img.setAttribute("alt", texto);
    return img;
}

function FormLogin() {
    const button = Botao("Entrar");
    const email = Input("email", "email", "E-mail");
    const senha = Input("senha", "password", "Senha");

    const form = document.createElement("form");
    form.setAttribute("action", "");
    form.setAttribute("method", "post");
    form.append(email, senha, button);
    return form;
}

/* paginas da aplicacao */

function Perfil() {
    root.append(Cabecalho());
    root.append(Principal());
}

function Home() {
    root.append(Cabecalho());
    root.append(Principal());
}

function Login() {
  const logo = Imagem("", "Logo da Aplicação");
  const titulo = Titulo("Aluno Online");
  const link = Link("Esqueceu a senha?", "/esqueceu-senha");
  const form = FormLogin();
  const main = Principal();
  main.append(titulo, form, link);
  const rodape = Rodape();
  root.append(main, rodape);
}

Login();