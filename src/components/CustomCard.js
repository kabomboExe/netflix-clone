import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import { useState } from "react";
import "./CustomCard.css";

function CustomCard(props) {
  const [isHovering, setIsHovering] = useState(false);

  return (
    <Card
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <CardMedia className="card-media"
        component="img"
        height="300"
        image={props.imgURL}
        alt={props.imgTitle}
      />
    </Card>
  );
}

export default CustomCard;
