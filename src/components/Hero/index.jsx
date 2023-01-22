import "./hero.css";
import ReactLogo from "../../assets/react.svg";
const Hero = () => {
  let Pic =
    "https://627128da8450d40b00ec1b81--anasikhlas.netlify.app/static/media/pic.022190e0.jpg";
  return (
    <div className="hero-container">
      <section className="hero-bio-section">
        <p>
          Hi There,
          <br />
          I'M SYED ANAS <br /> IKHLAS
          <br />
          <div className="tag-line hero-tag-line">
            I am a self-taught full-stack web developer who is pursuing a
            bachelor's degree in computer science. I am also a Google Certified
            Data Analyst. I mostly use front-end technologies in my work. I love
            exploring new technologies and finding solutions to challenges.
          </div>
        </p>
      </section>
      <section className="hero-pic-section">
        <div
          style={{ backgroundImage: `url(${ReactLogo})` }}
          className="logo-effect"
          data-src={Pic}
        ></div>
        <img src={Pic} className="hero-pic" />
      </section>
    </div>
  );
};

export default Hero;
