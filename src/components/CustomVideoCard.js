import "./CustomVideoCard.css";
import PlayArrowRoundedIcon from '@mui/icons-material/PlayArrowRounded';
import AddIcon from '@mui/icons-material/Add';
import { useContext } from "react";
import { MyListContext } from "../context/MyListContext";

function CustomVideoCard(props) {
  const myList = useContext(MyListContext);

  function showList(){
    console.log(myList);
  }
  return (
    <div className="video_card_container">
      <h1>{props.videoInfo.title}</h1>
      <p>{props.videoInfo.info}</p>
      <div className="buttons">
        <button className="play-button" onClick={() => alert('Just a dummy page!')}><PlayArrowRoundedIcon/>Play</button>
        <button className="add-button" onClick={() => alert('Just a dummy! You can only add media from the swiper and search')}><AddIcon/>My List</button>
      </div>
    </div>
  );
}

export default CustomVideoCard;
