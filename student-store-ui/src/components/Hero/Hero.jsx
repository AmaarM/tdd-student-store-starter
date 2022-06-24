import HeroImg from "./hero-img.jpg";
import "./Hero.css";

export default function Hero() {
  return (
    <div className="hero">
        <h1 className="intro">Welcome!</h1>
        <img className="hero-img" src={HeroImg} width={300} height={300}></img>
        <h1 className="intro-1">Where all you're shopping needs are met!</h1>
    </div>
  );
}
