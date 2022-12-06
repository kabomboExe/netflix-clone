import SearchIcon from "@mui/icons-material/Search";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import "./CustomHeader.css";
import netflix_logo from "../images/Netflix_2015_logo.png";
import { useState } from "react";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

function CustomHeader() {
  const [color, setColor] = useState(true);
  const [anchorEl, setanchorEl] = useState(null);
  const open = Boolean(anchorEl);

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
            <MenuItem>Home</MenuItem>
            <MenuItem>TV Shows</MenuItem>
            <MenuItem>Movies</MenuItem>
            <MenuItem>Recently Added</MenuItem>
            <MenuItem>My List</MenuItem>
          </Menu>
          <button className="menu_item">Home</button>
          <button className="menu_item">TV Shows</button>
          <button className="menu_item">Movies</button>
          <button className="menu_item">Recently Added</button>
          <button className="menu_item">My List</button>
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
    </div>
  );
}

export default CustomHeader;
