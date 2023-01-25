import { useContext, useEffect, useState } from "react";
import { MyListContext } from "../context/MyListContext";
import "./WatchListPage.css";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CustomCard from "../components/CustomCard";
function WatchListPage() {
    const [watchList, setWatchList] = useContext(MyListContext);
    useEffect(() => {
        console.log(watchList);
    }, []);

    return <div className="my-list-container">
    
            {watchList ? watchList.map(item => <div className="card-container"><CustomCard key={item.id} media={item}></CustomCard></div>) : <div>scheiße</div>}
        
    </div>
}

export default WatchListPage;