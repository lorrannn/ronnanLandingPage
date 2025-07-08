import { CarouselComponent } from '../CarouselComponent';
import './styles.css';

import verao01 from "./../../assets/img/veraoRetrato.jpg"
import verao02 from "./../../assets/img/veraoRetrato2.jpg"
import verao03 from "./../../assets/img/veraoRetrato3.jpg"
import verao04 from "./../../assets/img/veraoPaisagem3.jpg"

const images = [
    {
        image: verao01,
        imageTitle: "Alegria Gelada",
        imageDescription: "Aquele sonho de criança de ter um amigo nevado."
    },
    {
        image: verao02,
        imageTitle: "Horizonte Branco",
        imageDescription: "Uma montanha inteira coberta por neve."
    },
    {
        image: verao03,
        imageTitle: "Horizonte Branco",
        imageDescription: "Uma montanha inteira coberta por neve."
    }
    
]

export const FourthSlide = () => {
    return (
        <>
            <div id='fourthSlideContainer'>
                <h3 id="fourthSlideTitle">Verão é Vida</h3>
                <CarouselComponent images={images}/>
                <div id='paisagemContainer'>
                    <img width="100%" src={verao04}></img>
                    
                    <h4>Cenas de Verão</h4>
                    <p>Vastas terras verdes vazias</p>
                </div>
            </div>
        </>
    )
}

