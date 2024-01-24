import "./css/cover.css";

function Cover(props) {
    const side = props.side
    const id = `Cover${side}`
    const src = require(`./assets/${side.toLowerCase()}Cover.png`)

    return (
        <img id={id} className="cover" src={src} alt="cover"/>
    )
}

export default Cover