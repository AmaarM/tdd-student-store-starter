import HeroImg from "./hero-img.jpg"
import "./Hero.css"

export default function Hero(){
    return(
        <div className="hero">
            <p className="intro">Welcome!</p>
            <img className="hero-img" src={HeroImg} width={300} height={300}></img>
            <p className="intro-1">Where all you're shopping needs are met!</p>
        </div>
    )

}