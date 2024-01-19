import Background from './Background';
import Turret from "./Turret"
import "./css/map.css"

function Map() {
    return (
        <div className='map'>
            <Background></Background>
            <Turret x='none' y='none' turretName='bf'></Turret>
            <Turret x='359' y='902' turretName='bt4'></Turret>
            <Turret x='395' y='935' turretName='bb4'></Turret>
            <Turret x='318' y='758' turretName='bt3'></Turret>
            <Turret x='344' y='583' turretName='bt2'></Turret>
            <Turret x='306' y='319' turretName='bt1'></Turret>
            <Turret x='497' y='800' turretName='bm3'></Turret>
            <Turret x='595' y='718' turretName='bm2'></Turret>
            <Turret x='653' y='606' turretName='bm1'></Turret>
            <Turret x='540' y='975' turretName='bb3'></Turret>
            <Turret x='730' y='956' turretName='bb2'></Turret>
            <Turret x='984' y='986' turretName='bb1'></Turret>
            <Turret x='none' y='none' turretName='rf'></Turret>
            <Turret x='1133' y='130' turretName='rt4'></Turret>
            <Turret x='1166' y='163' turretName='rb4'></Turret>
            <Turret x='982' y='88' turretName='rt3'></Turret>
            <Turret x='801' y='107' turretName='rt2'></Turret>
            <Turret x='542' y='73' turretName='rt1'></Turret>
            <Turret x='1030' y='265' turretName='rm3'></Turret>
            <Turret x='932' y='345' turretName='rm2'></Turret>
            <Turret x='874' y='456' turretName='rm1'></Turret>
            <Turret x='1206' y='306' turretName='rb3'></Turret>
            <Turret x='1185' y='475' turretName='rb2'></Turret>
            <Turret x='1222' y='741' turretName='rb1'></Turret>
        </div>
    )
}

export default Map