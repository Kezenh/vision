import Background from './Background';
import Turret from "./Turret"
import "./css/map.css"

function Map() {
    return (
        <div className='map'>
            <Background></Background>
            <Turret x='1030' y = '265'></Turret>
        </div>
    )
}

export default Map