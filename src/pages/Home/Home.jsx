import "./Home.css";
import Navbar from "../../components/Navbar/Navbar";
import hero_banner from "../../assets/hero_banner.jpg";
import hero_caption from "../../assets/hero_title.png";
import play_icon from "../../assets/play_icon.png";
import info_icon from "../../assets/info_icon.png";
import Titlecards from "../../components/Titlecards/Titlecards";
import Footer from "../../components/Footer/Footer";

const Home = () => {
  return (
    <div className="home">
      <Navbar />
      <div className="hero">
        <img src={hero_banner} alt="" className="banner-img" />
        <div className="hero-caption">
          <img src={hero_caption} alt="" className="caption-img" />
          <p>
            Good Movie Good Movie Good Movie Good Movie Good Movie Good Movie
            Good Movie Good Movie Good Movie Good Movie
          </p>
          <div className="hero-btns">
            <button className="btn">
              <img src={play_icon} alt="" />
              Play
            </button>
            <button className="btn dark-btn">
              <img src={info_icon} alt="" />
              More Info
            </button>
          </div>
          <Titlecards />
        </div>
      </div>
      <div className="more-cards">
      <Titlecards title={"Only on Netflix"} category={"popular"}/>
      <Titlecards title={"Upcoming"} category={"top_rated"}/>
      <Titlecards title={"Mostly Played"} category={"upcoming"}/>
      <Titlecards title={"Top pics for you"} category={"now_playing"}/>
      </div>
      <Footer />
    </div>
  );
};

export default Home;