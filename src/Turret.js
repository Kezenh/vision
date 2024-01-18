import "./css/turret.css";
import Button from "./Button";

function Turret(props) {
const x = props.x
const y = props.y
const turretName = props.turretName
const src = require(`./assets/${turretName}.png`)

    return (
        <>
            <img id={turretName} className="turret" src={src} alt="turret"/>
            <Button x={x} y={y} turretName={turretName}></Button>
        </>
    )
}

export default Turret