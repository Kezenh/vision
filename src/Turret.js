import turret from "../src/assets/turret.png";
import "./css/turret.css"
import Button from "./Button";

function Turret(props) {
const x = props.x
const y = props.y

    return (
        <>
            <img id="turret" className="turret" src={turret} alt="turret"/>
            <Button x={x} y={y}></Button>
        </>
    )
}

export default Turret