import "./Player.css";
import back_arrow_icon from "../../assets/back_arrow_icon.png";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const Player = () => {
  const navigate = useNavigate();
  const {id} = useParams();
  const [apiData, setApiData] = useState({
    name: "",
    key: "",
    published_at: "",
    typeof: "",
  }); 

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmOTdmN2FhYTYwZTE3MWExZGNkZGU5MjkyYTRlM2YwYSIsIm5iZiI6MTcyMTkyMTY0My42ODU4NjksInN1YiI6IjY2YTI2Zjg0NGU5ZTkwMWIxNmNhN2UzNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.h6qhAHKbmXIz-DRNbaOpDLQCNirVfP5xs2tMoUxqHps",
    },
  };

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`,
      options
    )
      .then((response) => response.json())
      .then((response) => setApiData(response.results[0]))
      .catch((err) => console.error(err));
  }, []);
  return (
    <div className="player">
      <img src={back_arrow_icon} alt="" onClick={()=>{navigate(-2)}}/>
      <iframe
        src={`https://www.youtube.com/embed/${apiData.key}`}
        width="90%"
        height="90%"
        title="trailer"
        frameBorder="0"
        allowFullScreen
      ></iframe>
      <div className="player-info">
        <p>{apiData.published_at.slice(0,10)}</p>
        <p>{apiData.name}</p>
        <p>{apiData.type}</p>
      </div>
    </div>
  );
};

export default Player;
