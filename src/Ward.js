import styled from "styled-components"
import "./css/ward.css"
import { useEffect } from 'react'

function Ward(props) {
    const x = props.x
    const y = props.y
    const id = `x:${x}y:${y}`

    let Ward = styled.div`
        width: 120px;
        height: 120px;
        top: ${y}px;
        left: ${x}px;
        position: absolute;
        `

    useEffect(() => {
        createVision()
    }, [])

    function drawLine(endX, endY) {
        const canvas = document.getElementById(id)
        const ctx = canvas.getContext('2d');
        ctx.beginPath();
        ctx.moveTo(60,60);
        ctx.lineTo(endX, endY);
        ctx.closePath()
        ctx.strokeStyle= 'green';
        ctx.lineWidth= 3;
        ctx.globalAlpha= 0.05;
        ctx.stroke();
    }

    function createVision() {
        for(let i = 0; i < 360; i++) {
            const r = 60
            const x = Math.cos((i * Math.PI) / 180.0) * r
            const y = Math.sin((i * Math.PI) / 180.0) * r
            drawLine(x + 60, y + 60)
        }
    }

    function destroyWard() {
        console.log('Je veux casser la ward')
        const ward = document.getElementById(id)
        ward.remove()
    }

    return (
        <Ward>
            <canvas className="wardCanvas" id={id} width="120" height="120"></canvas>
            <div className="wardButton" onClick={destroyWard}></div>
        </Ward>
    )
}

export default Ward