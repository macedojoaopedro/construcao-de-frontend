import'./Logo.css';
function Logo(props) {
    const texto = "Logo da Aplicação";
    return (
        <img className="https://www.svgrepo.com/show/489120/school.svg" src={"https://www.svgrepo.com/show/489120/school.svg"} alt={props.texto}/>
    );
}

export default Logo;