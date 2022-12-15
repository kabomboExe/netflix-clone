import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import { useState, useRef, useEffect } from "react";
import "./CustomCard.css";
import CustomModal from "./CustomModal";

function CustomCard(props) {
  const [isHovering, setIsHovering] = useState(false);
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);
  const cardRef = useRef(0);

  const getCardSize = () => {
    const newWidth = cardRef.current.clientWidth;
    setWidth(newWidth);

    const newHeight = cardRef.current.clientHeight;
    setHeight(newHeight);

  };

  const closeHoveringHandler = () =>{
    setIsHovering(false);
  }

  useEffect(() => {
    getCardSize();
  }, [isHovering]);

  return (
    <div>
      <Card
        ref={cardRef}
        className="card"
        onMouseEnter={() => setIsHovering(true)}
      >
        <CardMedia
          className="card-media"
          component="img"
          height="300"
          image={props.media.img_path}
          alt={props.media.title}
        />
      </Card>
      

      {isHovering && <CustomModal closeHovering={closeHoveringHandler} isOpen={isHovering} media={props.media} cardWidth={width} cardHeight={height}></CustomModal>}
    </div>
  );
}

export default CustomCard;
