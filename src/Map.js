import Background from './Background';
import Turret from "./Turret"
import "./css/map.css"

function Map() {
    return (
        <div className='map'>
            <Background></Background>
            <Turret x='1030' y='265' turretName='rm3'></Turret>
            <Turret x='932' y='345' turretName='rm2'></Turret>
            <Turret x='874' y='456' turretName='rm1'></Turret>
            <Turret x='801' y='107' turretName='rt2'></Turret>
            <Turret x='542' y='73' turretName='rt1'></Turret>
            <Turret x='1206' y='306' turretName='rb3'></Turret>
            <Turret x='none' y='none' turretName='rf'></Turret>
            <Turret x='1133' y='130' turretName='rt4'></Turret>
            <Turret x='1166' y='163' turretName='rb4'></Turret>
            <Turret x='1222' y='741' turretName='rb1'></Turret>
            <Turret x='1185' y='475' turretName='rb2'></Turret>
            <Turret x='982' y='88' turretName='rt3'></Turret>
        </div>
    )
}

export default Map