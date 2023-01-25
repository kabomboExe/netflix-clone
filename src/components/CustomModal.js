import "./CustomModal.css";
import Modal from "@mui/material/Modal";
import PlayArrowRoundedIcon from "@mui/icons-material/PlayArrowRounded";
import AddIcon from "@mui/icons-material/Add";
import { MyListContext } from "../context/MyListContext";
import { useContext } from "react";
import RemoveIcon from "@mui/icons-material/Remove";

function CustomModal(props) {
  const [myList, setMyList] = useContext(MyListContext);

  const mediaInMyList = myList.find((listItem) => {
    return listItem.id === props.media.id;
  });

  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  const dateString = new Date(props.media.release_date).toLocaleDateString(
    "en-US",
    options
  );

  function closeHandler() {
    props.closeModal();
  }

  function addToMyListHandler() {
    if (!mediaInMyList) {
      setMyList([...myList, props.media]);
    }
  }

  function removeFromMyListHandler() {
    setMyList(
      myList.filter((item) => {
        return item !== props.media;
      })
    );
  }

  return (
    <Modal open={props.isOpen} onClose={closeHandler}>
      <div className="modal">
        <div className="modal-media-specs">
          <p className="modal-header">{props.media.title}</p>
          <p className="modal-date">Release Date: {dateString}</p>
          <p className="modal-rating">Rating: {props.media.vote_average}/10</p>
          <p className="modal-description">{props.media.overview}</p>
          <div className="modal-buttons">
            <button className="modal-play-button">
              <PlayArrowRoundedIcon />
              Play
            </button>
            {mediaInMyList ? (
              <button
                className="modal-remove-button"
                onClick={removeFromMyListHandler}
              >
                <RemoveIcon />
                My List
              </button>
            ) : (
              <button className="modal-add-button" onClick={addToMyListHandler}>
                <AddIcon />
                My List
              </button>
            )}
          </div>
        </div>

        <img
          src={props.media.img_path}
          alt={props.media.title}
          className="modal-img"
        ></img>
      </div>
    </Modal>
  );
}

export default CustomModal;
