import FavoriteRoundedIcon from "@mui/icons-material/FavoriteRounded";
import "./CustomFooter.css";
function CustomFooter() {
    return <footer className="footer">
        Made with{" "}
        <FavoriteRoundedIcon
            sx={{ color: "#ff0000", paddingLeft: 0.5, paddingRight: 0.5 }}
        />{" "}
        by Kai F.
    </footer>;
}

export default CustomFooter;