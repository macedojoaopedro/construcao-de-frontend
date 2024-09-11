import Link from "./Link";

function Menu(props) {
    const opcoes = [
        {texto: "Home", rota: "/home"},
        {texto: "Perfil", rota: "/Perfil"},
        {texto: "Sair", rota: "/Login"}
    ];
    return (
        <nav>
            <ul>
                {opcoes.map((opcao, index) => (
                    <li key={index}>
                        <Link navagaPara ={props.navegaPara}  rota={opcao.rota} texto={opcao.texto} />
                    </li>
                ))}
            </ul>
        </nav>
    );
}

export default Menu;