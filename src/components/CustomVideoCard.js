import "./CustomVideoCard.css";
import PlayArrowRoundedIcon from '@mui/icons-material/PlayArrowRounded';
import AddIcon from '@mui/icons-material/Add';

function CustomVideoCard(props) {
  return (
    <div className="video_card_container">
      <h1>{props.videoInfo.title}</h1>
      <p>{props.videoInfo.info}</p>
      <div className="buttons">
        <button className="play-button"><PlayArrowRoundedIcon/>Play</button>
        <button className="add-button"><AddIcon/>My List</button>
      </div>
    </div>
  );
}

export default CustomVideoCard;
