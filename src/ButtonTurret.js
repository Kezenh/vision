import styled from "styled-components";

function ButtonTurret(props) {
    const x = props.x
    const y = props.y
    const turretName = props.turretName
    const id = `button${turretName}`
    let ButtonTurret
    if (x !== 'none' && y !== 'none') {
        ButtonTurret = styled.div`
        width: 25px;
        height: 25px;
        background-color: green;
        z-index: 9998;
        position: absolute;
        border-radius: 50%;
        top: ${y}px;
        left: ${x}px; 
        `
    } else {
        ButtonTurret = styled.div`
        display: none;
        `
    }

    function click() {
        const turretNumber = turretName.substring(2, 3)
        const clickedButton = document.getElementById(`button${turretName}`)

        if (clickedButton.style.backgroundColor === 'green' || clickedButton.style.backgroundColor === '') {
            if (turretNumber < 4) {
                for (let i = 1; i <= turretNumber; i++) {
                    const currentId = turretName.substring(0, 2) + i
                    const button = document.getElementById(`button${currentId}`)
                    const turret = document.getElementById(currentId)
                    button.style.backgroundColor = 'red'
                    turret.style.display = 'none'
                }
            } else {
                const button = document.getElementById(`button${turretName}`)
                const turret = document.getElementById(turretName)
                const side = turretName.substring(0, 1)
                const t3 = [document.getElementById(`button${side}b3`), document.getElementById(`button${side}m3`), document.getElementById(`button${side}t3`)]
                if (t3[0].style.backgroundColor === 'red' || t3[1].style.backgroundColor === 'red' || t3[2].style.backgroundColor === 'red') {
                    button.style.backgroundColor = 'red'
                    turret.style.display = 'none'
                } else {
                    alert('Il faut casser une T3 pour casser une T4 !')
                } 
            }
        } else {
            if (turretNumber < 4) {
                for (let i = turretNumber; i <= 3; i++) {
                    const currentId = turretName.substring(0, 2) + i
                    const button = document.getElementById(`button${currentId}`)
                    const turret = document.getElementById(currentId)
                    const side = turretName.substring(0, 1)
                    const t3 = [document.getElementById(`button${side}b3`), document.getElementById(`button${side}m3`), document.getElementById(`button${side}t3`)]
                    button.style.backgroundColor = 'green'
                    turret.style.display = 'block'
                    if ((t3[0].style.backgroundColor === 'green' || t3[0].style.backgroundColor === '') && (t3[1].style.backgroundColor === 'green' || t3[1].style.backgroundColor === '') && (t3[2].style.backgroundColor === 'green' || t3[2].style.backgroundColor === '')) {
                        const t4 = [`${side}b4`, `${side}t4`]
                        for (let i = 0; i < 2; i++) {
                            document.getElementById(`button${t4[i]}`).style.backgroundColor = 'green'
                            document.getElementById(t4[i]).style.display = 'block'
                        }
                    }
                }
            } else {
                const button = document.getElementById(`button${turretName}`)
                const turret = document.getElementById(turretName)
                button.style.backgroundColor = 'green'
                turret.style.display = 'block'
            }
        }
    }

    return (
        <ButtonTurret id={id} onClick={click}></ButtonTurret>
    )
}

export default ButtonTurret