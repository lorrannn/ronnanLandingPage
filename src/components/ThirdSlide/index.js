import "./styles.css"

import chile01 from "./../../assets/img/chile.jpg"
import chile02 from "./../../assets/img/chile2.jpg"
import chile03 from "./../../assets/img/chile3.jpg"

export const ThirdSlide = ()=>{
    return (<>
    <div id="thirdSlideContainer">
        <h3 id="thirdSlideTitle"> Viagem ao Chile </h3>
        <div id="photoComponentContainer">
            <figure>
                <img src={chile01} width="250px"></img>
                
            </figure>
        </div>
    </div>
    </>)
}