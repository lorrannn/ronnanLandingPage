import "./styles.css"

export const PhotoComponent = (props) => {
    return (
        <>
            <div id="photoComponentContainer">
                <img id="photo" src={props.image} width="100%"></img>
                <h4>{props.title}</h4>
                <p>{props.description}</p>
            </div>
        </>
    )
}