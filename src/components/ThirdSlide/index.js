import "./styles.css"
import { PhotoComponent } from "../PhotoComponent"

import chile01 from "./../../assets/img/chile.jpg"
import chile02 from "./../../assets/img/chile2.jpg"
import chile03 from "./../../assets/img/chile3.jpg"
import { useRef, useState, useEffect } from "react"


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

    const carouselRef = useRef(null);
    const [index, setIndex] = useState(0);
    const indexRef = useRef(0);

    useEffect(() => {
        const interval = setInterval(() => {
            const container = carouselRef.current;
            if (!container) return;

            const isScrollable = container.scrollWidth > container.clientWidth;
            if (!isScrollable) return;

            const items = container.children;
            if (!items.length) return;

            const itemWidth = items[0].offsetWidth + 16; // largura + gap (1rem ≈ 16px)

            indexRef.current = (indexRef.current + 1) % images.length;

            container.scrollTo({
                left: itemWidth * indexRef.current,
                behavior: "smooth",
            });
        }, 3000);

        return () => clearInterval(interval);
    }, []);


    return (<>
        <div id="thirdSlideContainer">
            <h3 id="thirdSlideTitle"> Viagem ao Chile </h3>
            <div id="photoCarousel" ref={carouselRef}>
                {images.map((element, index) => {
                    return (
                        <PhotoComponent
                            key={index}
                            image={element.image}
                            title={element.imageTitle}
                            description={element.imageDescription} />
                    )
                })}
            </div>
        </div>
    </>)
}