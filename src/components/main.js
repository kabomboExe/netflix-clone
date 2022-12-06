import "./Main.css";
import ReactPlayer from "react-player";
import { useEffect, useState } from "react";

import CustomCard from "./CustomCard";
import testLogo from "../images/test/window0.png";
import testLogo2 from "../images/test/window1.png";
import CustomSwiper from "./CustomSwiper";
import CustomHeader from "./CustomHeader";

function Main() {
  const [backgroundVideo, setBackgroundVideo] = useState("");

  const videos = [
    "https://vimeo.com/384025132",
    "https://vimeo.com/175708185",
    "https://vimeo.com/312793948",
    "https://vimeo.com/443349692",
    "https://vimeo.com/619166305",
    "https://vimeo.com/371339543",
  ];

  useEffect(() => {
    setBackgroundVideo(videos[Math.floor(Math.random() * videos.length)]);
  }, []);

  return (
    <div className="container" onScroll={() => {console.log("scrollign")}}>
      <CustomHeader></CustomHeader>
      <ReactPlayer
        playing={true}
        width="100%"
        height="100%"
        muted={true}
        loop={true}
        url={backgroundVideo}
        className="video"
      ></ReactPlayer>
      <div className="video_overlay">
        <div className="video_infos">hello test</div>
      </div>
      <CustomSwiper topic="Erste Reihe">
        <CustomCard imgURL={testLogo} imgDescription="yehaw" />
        <CustomCard imgURL={testLogo2} imgDescription="yehaw" />
        <CustomCard imgURL={testLogo} imgDescription="yehaw" />
        <CustomCard imgURL={testLogo} imgDescription="yehaw" />
        <CustomCard imgURL={testLogo} imgDescription="yehaw" />
        <CustomCard imgURL={testLogo} imgDescription="yehaw" />
        <CustomCard imgURL={testLogo} imgDescription="yehaw" />
        <CustomCard imgURL={testLogo} imgDescription="yehaw" />
      </CustomSwiper>
    </div>
  );
}

export default Main;
