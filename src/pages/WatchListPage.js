import { useContext, useEffect } from "react";
import { MyListContext } from "../context/MyListContext";
import "./WatchListPage.css";
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