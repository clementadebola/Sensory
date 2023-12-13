import "../styles/hero.css";
import light from "../Assets/light.png";
import dark from "../Assets/dark.png";
import on from "../Assets/on.png";

const Hero = () => {
  return (
    <div className="body">
      <div className="hero">
        <div className="left">
          <h2>Status:</h2>
          <img src={on} alt="on" />
          <p>
            NB: The light status information provided on this website is
            intended for reference purposes only. While we strive to offer
            accurate and up-to-date data, we cannot guarantee its absolute
            precision.{" "}
          </p>
        </div>
        <div className="right">
          <img src={light} alt="light" />
        </div>
      </div>
      <div className="group">
        <h2>Light History</h2>
        <>
          <p>Took Light</p>
          <p>12:30AM 12/07/2023</p>
        </>
        <>
          <p>Brought Light</p>
          <p>2:30AM 12/07/2023</p>
        </>
        <>
          <p>Took Light</p>
          <p>2:30AM 12/07/2023</p>
        </>
      </div>
     <footer>
        <h3 className="all">© 2023 Sensory. All Rights Reserved.</h3>
        <h3 className="privacy">Privacy Policy</h3>
        <h3 className="terms">Terms & Conditions</h3>
     </footer>
    </div>
  );
};

export default Hero;
