import { useState } from 'react';
import "./css/wardBox.css"
import Ward from './Ward.js';
import obstacles from './obstacles';

function WardBox() {

    const [wardList, setWardList] = useState([])

    function putWard(e) {
        function isInsideAWall() {
            for (let i = 0; i < obstacles.length; i++) {
                if ((e.pageX >= obstacles[i].x && e.pageX <= (obstacles[i].x + obstacles[i].width) && e.pageY >= obstacles[i].y && e.pageY <= (obstacles[i].y + obstacles[i].height)) && obstacles[i].bush === undefined) {
                    return true
                }
            }
            return false
        }

        if(!isInsideAWall()) {
            setWardList(wardList.concat(<Ward key={wardList.length} x={e.pageX} y={e.pageY}></Ward>))
        }
    }

    return (
            <>
                <div className="wardBox" id="wardBox" onMouseDown={putWard}>
                    {wardList}
                </div>
            </>
    )
}

export default WardBox