import HeroImg from "./hero-img.jpg"

export default function Hero(){
    return(
        <div className="hero">
            <p className="intro">Welcome to the Shop!</p>
            <img className="hero-img" src={HeroImg} width={60} height={60}></img>
        </div>
    )

}