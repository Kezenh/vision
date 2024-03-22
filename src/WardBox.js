import { useState } from 'react';
import "./css/wardBox.css"
import Ward from './Ward';

function WardBox() {

    const [wardList, setWardList] = useState([])

    function putWard(e) {
        setWardList(wardList.concat(<Ward key={wardList.length} x={e.pageX} y={e.pageY}></Ward>))
    }

    return (
            <div className="wardBox" id="wardBox" onMouseDown={putWard}>
                {wardList}
            </div>
    )
}

export default WardBox