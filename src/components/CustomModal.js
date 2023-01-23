import { useEffect, useState } from "react";
import "./CustomModal.css";
import Modal from "@mui/material/Modal";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";

function CustomModal(props) {
  const [isOpen, setIsOpen] = useState(false);
  
  useEffect(() =>{
    setIsOpen(props.isOpen);
  },[]);
  
  function closeHandler() {
    setIsOpen(false);
  }
  const style = {
    
    color: "#FFF",
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: props.cardWidth,
    height: props.cardHeight,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

  return (
    <div className="modal-container">
      <Modal open={isOpen} onClose={closeHandler}>
        <div style={style}>
          {props.media.title}
        <Card >
          <CardMedia height={props.media.cardHeight} component="img" image={props.media.img_path}></CardMedia>
        </Card>
        </div>
      </Modal>
    </div>
  );
}

export default CustomModal;
