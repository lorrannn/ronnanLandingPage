import { ContactButton } from "../ContactButton"
import "./styles.css"

export const FirstSlide = () => {
    return (
        <div id="firstSlideContainer">
            <div id="backgroundContainer">
                <div id="backgroundImage"></div>
                <div id="backgroundImageOverlay"></div>
            </div>
            <div id="firstSlideTextContainer">
                <div id="clientName">
                    <h1>Ronnan</h1>
                    <h1>Teixeira</h1>
                </div>
                <div id="clientDescriptionContainer">
                    <div id="invisibleDiv">
                    </div>
                    <div>
                        <p>Turismólogo</p>
                        <p>e Apaixonado por Viver</p>
                        <ContactButton/>
                    </div>
                </div>
            </div>
        </div>
    )
}