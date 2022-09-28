import "../styles/Button.css"

export function Button({innerText, onPressAction}){
    return(
        <button className="button" onClick={onPressAction}>{innerText}</button>
    )
}