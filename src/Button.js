import styled from "styled-components";
import {useState, useEffect} from 'react';

function Button(props) {
    const x = props.x
    const y = props.y
    const Button = styled.div`
    width: 25px;
    height: 25px;
    background-color: green;
    z-index: 2;
    position: absolute;
    border-radius: 50%;
    top: ${y}px;
    left: ${x}px; 
    `
    let clicked = false

    function Click() {
        clicked = !clicked
        const button = document.getElementById("button")
        const turret = document.getElementById("turret")

        if (clicked) {
            button.style.backgroundColor = 'red'
            turret.style.display = 'none'
        } else {
            button.style.backgroundColor = 'green'
            turret.style.display = 'block'
        }
        
    }

    return (
        <Button id='button' onClick={() => Click()}></Button>
    )
}

export default Button