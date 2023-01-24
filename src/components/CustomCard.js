import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import { useState } from "react";
import "./CustomCard.css";
import CustomModal from "./CustomModal";

function CustomCard(props) {
  const [isClicked, setIsClicked] = useState(false);

  const openModalHandler = () => {
    setIsClicked(true);
  };

  const closeModalHandler = () => {
    setIsClicked(false);
  };

  return (
    <div>
      <Card className="card" onClick={openModalHandler}>
        <CardMedia
          className="card-media"
          component="img"
          height="300"
          image={props.media.img_path}
          alt={props.media.title}
        />
      </Card>

      {isClicked && (
        <CustomModal
          media={props.media}
          isOpen={true}
          closeModal={closeModalHandler}
        ></CustomModal>
      )}
    </div>
  );
}

export default CustomCard;
