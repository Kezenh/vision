import Background from './Background';
import Turret from "./Turret"
import "./css/map.css"

function Map() {
    return (
        <div className='map'>
            <Background></Background>
            <Turret></Turret>
        </div>
    )
}

export default Map