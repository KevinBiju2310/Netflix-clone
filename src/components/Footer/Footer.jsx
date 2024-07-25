import "./Footer.css";
import facebook_icon from "../../assets/facebook_icon.png";
import instagram_icon from "../../assets/instagram_icon.png";
import youtube_icon from "../../assets/youtube_icon.png";
import twitter_icon from "../../assets/twitter_icon.png";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-icons">
        <img src={facebook_icon} alt="" />
        <img src={instagram_icon} alt="" />
        <img src={youtube_icon} alt="" />
        <img src={twitter_icon} alt="" />
      </div>
      <ul>
        <li>About</li>
        <li>Media</li>
        <li>Accounts</li>
        <li>Privay</li>
        <li>Terms and Conditions</li>
        <li>Help</li>
        <li>Instructions</li>
      </ul>
      <p className="copyright-text">Copyright</p>
    </div>
  );
};

export default Footer;