import SearchIcon from "@mui/icons-material/Search";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import "./CustomHeader.css";
import netflix_logo from "../images/Netflix_2015_logo.png";

function CustomHeader() {
  return (
    <header className="header">
      <div className="menu_left">
        <img className="netflix_logo" src={netflix_logo} alt=""></img>
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
  );
}

export default CustomHeader;
