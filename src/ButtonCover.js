import "./css/buttonCover.css"

function ButtonCover(props) {
    const side = props.side//.toLowerCase()
    const id = `button${side}`

    function click() {
        const cover  = document.getElementById(`Cover${side}`)
        const buttonCover = document.getElementById(id)
        if (buttonCover.style.background === 'green' || buttonCover.style.background === '') {
            cover.style.display = 'block'
            buttonCover.style.background = 'red'
        } else {
            cover.style.display = 'none'
            buttonCover.style.background = 'green'
        }
    }

    return (
        <div className="boxCover">
            <p className="textCover">{side} side</p>
            <div id={id} className="buttonCover" onClick={click}></div>
        </div>
    )
}

export default ButtonCover