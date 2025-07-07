import "./styles.css"
import { PhotoComponent } from "../PhotoComponent"
import { useRef, useEffect } from "react"

export const CarouselComponent = (props) => {
    const carouselRef = useRef(null);
    
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

            indexRef.current = (indexRef.current + 1) % props.images.length;

            container.scrollTo({
                left: itemWidth * indexRef.current,
                behavior: "smooth",
            });
        }, 3000);

        return () => clearInterval(interval);
    }, []);


    return (
        <div id="photoCarousel" ref={carouselRef}>
            {props.images.map((element, index) => {
                return (
                    <PhotoComponent
                        key={index}
                        image={element.image}
                        title={element.imageTitle}
                        description={element.imageDescription} />
                )
            })}
        </div>)
}