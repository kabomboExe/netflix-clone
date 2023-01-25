import SearchIcon from "@mui/icons-material/Search";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import "./CustomHeader.css";
import netflix_logo from "../images/Netflix_2015_logo.png";
import { useEffect, useState } from "react";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { Link } from 'react-router-dom';
import ReactPlayer from "react-player";
import CustomVideoCard from "./CustomVideoCard";
import { backgroundVideos } from "../data/backgroundVideos";

function CustomHeader() {
  const [color, setColor] = useState(true);
  const [anchorEl, setanchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const [backgroundVideo, setBackgroundVideo] = useState({});
  
  useEffect(()=>{
    const videos = backgroundVideos;
    setBackgroundVideo(videos[Math.floor(Math.random() * videos.length)]);
  },[]);

  const changeColor = () => {
    if (window.scrollY <= 0) {
      setColor(true);
    } else {
      setColor(false);
    }
  };
  window.addEventListener("scroll", changeColor, true);

  const dropdownMenuHandler = (event) => {
    setanchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setanchorEl(null);
  };

  return (
    <div>
      <header className={color ? "header" : "header header_scrolled"}>
        <div className="menu_left">
          <img className="netflix_logo" src={netflix_logo} alt=""></img>
          <button className="menu_item_dropdown" onClick={dropdownMenuHandler}>
            <ArrowDropDownIcon />
          </button>
          <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
            <MenuItem> <Link className="menu_item" to="/">Home</Link></MenuItem>
            <MenuItem><Link className="menu_item" to="/watchlist">Watch List</Link></MenuItem>
          </Menu>
          <Link className="menu_item" to="/">Home</Link>
          <Link className="menu_item" to="/watchlist">My List</Link>
        </div>

        <div className="menu_right">
          <button className="menu_item">
            <SearchIcon />
          </button>
          <button className="menu_item">
            <NotificationsOutlinedIcon />
          </button>
          <button className="menu_item">
            <AccountBoxIcon />
          </button>
        </div>
      </header>
      <div className="container_video">
        <ReactPlayer
          playing={true}
          width="100%"
          height="100%"
          muted={true}
          loop={true}
          url={backgroundVideo.url}
          className="video"
        ></ReactPlayer>
        <div className="video_overlay">
          <CustomVideoCard videoInfo={backgroundVideo}></CustomVideoCard>
        </div>
      </div>
    </div>
  );
}

export default CustomHeader;
