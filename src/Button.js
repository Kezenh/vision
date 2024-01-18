import styled from "styled-components";

function Button(props) {
    const x = props.x
    const y = props.y
    const turretName = props.turretName
    const id = `button${turretName}`
    let Button
    if (x != 'none' && y != 'none') {
        Button = styled.div`
        width: 25px;
        height: 25px;
        background-color: green;
        z-index: 2;
        position: absolute;
        border-radius: 50%;
        top: ${y}px;
        left: ${x}px; 
        `
    } else {
        Button = styled.div`
        display: none;
        `
    }
    let clicked = false

    function Click() {
        clicked = !clicked
        const button = document.getElementById(id)
        const turret = document.getElementById(turretName)

        if (clicked) {
            button.style.backgroundColor = 'red'
            turret.style.display = 'none'
        } else {
            button.style.backgroundColor = 'green'
            turret.style.display = 'block'
        }
    }

    return (
        <Button id={id} onClick={() => Click()}></Button>
    )
}

export default Button