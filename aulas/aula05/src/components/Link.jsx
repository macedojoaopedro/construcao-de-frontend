function Link(props) {
    const aoClicar = (e) => {
        e.preventDefault();
        props.navegaPara(e.target.getAttribute("href"));
    }
    
    return (
        <a href="" onClick={(e) => {}}>{props.texto}</a>
    )
}

export default Link;