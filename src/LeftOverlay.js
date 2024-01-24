import "./css/leftOverlay.css"
import ButtonCover from "./ButtonCover"

function LeftOverlay() {

    return (
        <div className="leftOverlay">
            <ButtonCover side='Blue'></ButtonCover>
            <ButtonCover side='Red'></ButtonCover>
        </div>
    )
}

export default LeftOverlay