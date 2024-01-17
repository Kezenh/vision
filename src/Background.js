import background from "../src/assets/background.png";
import "./css/background.css"

function Background(){
    return (
        <img className="background" src={background} alt="background" />
    )
}

export default Background