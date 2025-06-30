import "./styles.css"
import { PhotoComponent } from "../PhotoComponent"

import chile01 from "./../../assets/img/chile.jpg"
import chile02 from "./../../assets/img/chile2.jpg"
import chile03 from "./../../assets/img/chile3.jpg"

const images = [
    {
        image: chile01,
        imageTitle: "Alegria Gelada",
        imageDescription: "Aquele sonho de criança de ter um amigo nevado."
    },
    {
        image: chile02,
        imageTitle: "Horizonte Branco",
        imageDescription: "Uma montanha inteira coberta por neve."
    },
    {
        image: chile03,
        imageTitle: "Céu Revigorante",
        imageDescription: "Quando a paz interior vem de fora"
    }
]

export const ThirdSlide = () => {
    return (<>
        <div id="thirdSlideContainer">
            <h3 id="thirdSlideTitle"> Viagem ao Chile </h3>
            <div id="photoCarousel">
                {images.map(element => {
                    return (
                        <PhotoComponent 
                            image={element.image} 
                            title={element.imageTitle}
                            description={element.imageDescription}/> 
                    )
                })}
            </div>

        </div>
    </>)
}