import "./css/turret.css";
import ButtonTurret from "./ButtonTurret";

function Turret(props) {
const x = props.x
const y = props.y
const turretName = props.turretName
const src = require(`./assets/${turretName}.png`)

    return (
        <>
            <img id={turretName} className="turret" src={src} alt="turret"/>
            <ButtonTurret x={x} y={y} turretName={turretName}></ButtonTurret>
        </>
    )
}

export default Turret