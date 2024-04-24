import { useState } from "react"

export default function Blue() {
    const [color, setColor] = useState("white");
    const [font, setFont] = useState("Arial");

    const handleColor = (event) => {
        setColor(event.target.value)
    }
    const handleFont = (event) => {
        setFont(event.target.value)
    }

    return (
        <div className="blue">
            <div>
                <section>
                    <h3>Font</h3>
                    <button value="Courier" onClick={handleFont}>Courier</button>
                    <button value="Comic Sans MS" onClick={handleFont}>Comic Sans MS</button>
                    <button value="Arial" onClick={handleFont}>Arial</button>
                </section>
                <section>
                    <h3>Color</h3>
                    <button value="forestgreen" onClick={handleColor}>Green</button>
                    <button value="black" onClick={handleColor}>Black</button>
                    <button value="white" onClick={handleColor}>White</button>
                </section>
                <h1 style={{ color: color, fontFamily: font }} >Blue</h1>
            </div>
        </div>
    )
}