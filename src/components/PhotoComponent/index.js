import "./styles.css"

export const PhotoComponent = (props) => {
    return (
        <>
            <div id="photoComponentContainer">
                <img id="photo" src={props.image}></img>
                <h5>{props.title}</h5>
                <p>{props.description}</p>
            </div>
        </>
    )
}