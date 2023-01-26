import { useContext } from "react";
import { MyListContext } from "../context/MyListContext";
import "./WatchListPage.css";
import CustomCard from "../components/CustomCard";

function WatchListPage() {
    const [watchList, setWatchList] = useContext(MyListContext);


    return <div className="container">
        <h2>My Watchlist</h2>
        <hr></hr>
        <div className="my-list">
            {watchList ? watchList.map(item => <div className="card-container"><CustomCard key={item.id} media={item}></CustomCard></div>) : <div>scheiße</div>}
        </div></div>
}

export default WatchListPage;