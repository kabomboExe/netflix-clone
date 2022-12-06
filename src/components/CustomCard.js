import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { useState } from "react";

function CustomCard(props) {
  const [isHovering, setIsHovering] = useState(false);

  return (
    <Card
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <CardMedia
        component="img"
        height="140"
        image={props.imgURL}
        alt={props.imgDescription}
      />
    </Card>
  );
}

export default CustomCard;
