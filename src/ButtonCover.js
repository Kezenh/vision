import "./css/buttonCover.css"

function ButtonCover(props) {
    const side = props.side
    const id = `button${side}`
    const sideLetter = side.toLowerCase().split('')[0]

    function hideSide() {
        const cover  = document.getElementById(`Cover${side}`)
        const buttonCover = document.getElementById(id)
        const buttonID = document.querySelectorAll(`[id^="button${sideLetter}"]`)
        if (buttonCover.style.background === 'green' || buttonCover.style.background === '') {
            cover.style.display = 'block'
            buttonCover.style.background = 'red'
            for(let i = 0; i < buttonID.length; i++) {
                buttonID[i].style.zIndex = "-10"
            }
        } else {
            cover.style.display = 'none'
            buttonCover.style.background = 'green'
            for(let i = 0; i < buttonID.length; i++) {
                console.log(buttonID[i])
                buttonID[i].style.zIndex = "9998"
            }
        }
    }

    return (
        <div className="boxCover">
            <p className="textCover">{side} side</p>
            <div id={id} className="buttonCover" onClick={hideSide}></div>
        </div>
    )
}

export default ButtonCover