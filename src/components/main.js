import './main.css';
import netflix_logo from '../images/Netflix_2015_logo.png';
import ReactPlayer from 'react-player';

function Main() {
  return (
    <div className='container'>         
      <header className="header">
        <img className='netflix_logo' src={netflix_logo} alt=""></img>
        <button className='menu_item'>Home</button>
        <button className='menu_item'>TV Shows</button>
        <button className='menu_item'>Movies</button>
        <button className='menu_item'>Recently Added</button>
        <button className='menu_item'>My List</button>
      </header>
      <ReactPlayer playing={true} width='100%' height="100%" muted={true} loop={true} url="https://vimeo.com/384025132" className="video"></ReactPlayer>
      <div className='video_overlay'></div>
    </div>
  );
}

export default Main;
