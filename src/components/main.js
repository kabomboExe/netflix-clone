import "./Main.css";
import ReactPlayer from "react-player";
import { useEffect, useState } from "react";

import CustomCard from "./CustomCard";
import testLogo from "../images/test/window0.png";
import testLogo2 from "../images/test/window1.png";
import CustomSwiper from "./CustomSwiper";
import CustomHeader from "./CustomHeader";
import CustomVideoCard from "./CustomVideoCard";
import FetchMovies from "../api/FetchMovies";

function Main() {
  const [backgroundVideo, setBackgroundVideo] = useState("");
  
  const videos = [
    {
      title: "Narcos",
      url: "https://vimeo.com/384025132",
      info: "This dark gangster drama series is based on the true story of Colombia's notoriously violent and influential drug cartels."
    },
    {
      title: "Stranger Things",
      url: "https://vimeo.com/175708185",
      info: "When a young boy disappears, his mother, a police chief and his friends must confront terrifying supernatural forces in order to get him back."
    },
    {
      title: "Sex Education",
      url: "https://vimeo.com/312793948",
      info: "A teenage sex therapist mom teams up with a high school classmate to set up an unofficial sex therapy clinic at school."
    },
    {
      title: "Money Heist",
      url: "https://vimeo.com/443349692",
      info: "An unusual group of robbers attempt to carry out the most perfect robbery in Spanish history - stealing 2.4 billion euros from the Royal Mint of Spain."
    },
    {
      title: "Squid Game",
      url: "https://vimeo.com/619166305",
      info: "Hundreds of cash-strapped players accept a strange invitation to compete in children's games. Inside, a tempting prize awaits with deadly high stakes. A survival game that has a whopping 45.6 billion-won prize at stake."
    },
    {
      title: "The Witcher",
      url: "https://vimeo.com/371339543",
      info: "Geralt of Rivia, a lone monster hunter, struggles to find his place in a world where humans often prove more evil than the beasts."
    },
  ];

  useEffect(() => {
    setBackgroundVideo(videos[Math.floor(Math.random() * videos.length)]);
    FetchMovies();
  }, []);

  return (
    <div>
      <div className="container_video">
        <CustomHeader></CustomHeader>
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
