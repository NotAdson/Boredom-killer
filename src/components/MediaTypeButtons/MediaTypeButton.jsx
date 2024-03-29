import "./MediaTypeButton.css"

export default function MediaTypeButton({imagePath, handleFunction}){

    return (
        <img src={imagePath} className="logo" alt="Logo" onClick={handleFunction} />
    )
}