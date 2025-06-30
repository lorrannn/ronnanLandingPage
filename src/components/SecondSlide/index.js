import "./styles.css"
import picture from "../../assets/img/ronnan3.jpg"

export const SecondSlide = () => {
    return (
        <>
            <div id="secondSlideContainer">
                <div id="secondSlideTextContainer">
                    <h2>Olá, sou o Ronnan.</h2>
                    <div id="secondSlideFirstParagraph">
                        <p>Trabalho com roteiros de viagem e turismo,</p>
                        <p>e me especializo em entregar experiências</p>
                        <p>marcantes para sua vida.</p>
                    </div>
                    <div id="secondSlideSecondParagraph">
                        <p>Já viajei por muitos lugares, fazendo sempre questão</p>
                        <p>de capturar cada momento por onde passo.</p>
                    </div>
                </div>
                <img src={picture} id="secondSlidePicture"></img>
            </div>
        </>)
}