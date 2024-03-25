import styled from "styled-components"
import { useEffect } from 'react'
import obstacles from "./obstacles"
import "./css/ward.css"

function Ward(props) {

    class Bullet {
        constructor(startX, startY, endX, endY) {
            this.startX = startX
            this.startY = startY
            this.endX = endX
            this.endY = endY
            this.x = startX
            this.y = startY
            this.speed = 60
            this.travel = 0
        }

        move() {
            const length = Math.hypot((this.endX - this.startX), (this.endY - this.startY))
            const angle =  Math.atan((this.endY - this.startY) / (this.endX - this.startX))
            if (this.startX > this.endX) {
                this.x = this.x - (Math.cos(angle) * length/this.speed)
                this.y = this.y - (Math.sin(angle) * length/this.speed)
            } else {
                this.x = this.x + (Math.cos(angle) * length/this.speed)
                this.y = this.y + (Math.sin(angle) * length/this.speed)
            }
            this.travel++
        }
    }
    
    const x = props.x
    const y = props.y
    const id = `x:${x}y:${y}`
    const wardID = `ward${id}`
    const canvasID = `canvas${id}`
    let Ward = styled.div`
        border-radius: 50%;
        background-color: purple;
        width: 20px;
        height: 20px;
        left: ${x - 10}px;
        top: ${y - 10}px;
        position: absolute;
        z-index: 10000;
        `

    let Canvas = styled.canvas`
        position: absolute;
        z-index: 600;
        left: ${x - 60}px;
        top: ${y - 60}px;
        `

    function createVision() {
        for(let i = 0; i < 360; i += 2) {
            const r = 60
            const endX = Math.cos((i * Math.PI) / 180.0) * r
            const endY = Math.sin((i * Math.PI) / 180.0) * r
            const bullet = new Bullet(x, y, x + endX, y + endY)
            const bulletStartingBush = startingBush()
            
            function drawVisionLine() {
                let stop = false
                for (let i = 0; i < obstacles.length; i++) {
                    if(hasToStop(obstacles[i])) {
                        stop = true
                    }
                }
                if(!stop) {
                    bullet.move()
                    drawVisionLine()
                } else {
                    const canvas = document.getElementById(canvasID)
                    const ctx = canvas.getContext("2d")
                    ctx.strokeStyle = "green"
                    ctx.globalAlpha = 0.3
                    ctx.beginPath()
                    ctx.moveTo(60, 60)
                    ctx.lineTo(bullet.x - x + 60, bullet.y - y + 60)
                    ctx.stroke()
                    ctx.closePath()
                }
            }
        
            function hasToStop(obstacle) {
                if ((bullet.x >= obstacle.x && bullet.x <= (obstacle.x + obstacle.width) && bullet.y >= obstacle.y && bullet.y <= (obstacle.y + obstacle.height) && obstacle.bush !== bulletStartingBush) || (bullet.travel === bullet.speed)) {
                    return true
                }
                return false
            }

            function startingBush() {
                let bush = false
                for (let i = 0; i < obstacles.length; i++) {
                    if (bullet.startX >= obstacles[i].x && bullet.startX <= (obstacles[i].x + obstacles[i].width) && (bullet.startY >= obstacles[i].y && bullet.startY <= (obstacles[i].y + obstacles[i].height))) {
                        bush = obstacles[i].bush
                    }
                }
                return bush
            }
            drawVisionLine()
        }
    }

    function destroyWard(e) {
        e.stopPropagation()

        const ward = document.getElementById(wardID)
        const canvas = document.getElementById(canvasID)
        ward.remove()
        canvas.remove()
    } 

    useEffect(() => {
        createVision()
    })

    return (
        <>
            <Ward id={wardID} onMouseDown={destroyWard}></Ward>
            <Canvas width="120" height="120" id={canvasID}></Canvas>
        </>
    )
}

export default Ward