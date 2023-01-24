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

  return (

      <Modal open={isOpen} onClose={closeHandler} className="modal-container">
        <div className="modal">
          {props.media.title}
        
        </div>
      </Modal>

  );
}

export default CustomModal;
