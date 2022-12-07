import './CustomVideoCard.css';

function CustomVideoCard (props) {

    return(
        <div className="video_card_container">
            <h1>{props.videoInfo.title}</h1>
            <p>{props.videoInfo.info}</p>
        </div>
    );
}

export default CustomVideoCard;