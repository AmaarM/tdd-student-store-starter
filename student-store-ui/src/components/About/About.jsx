import "./About.css"
import AboutLogo from "./aboutlogo.svg"
export default function About(){
    return(
        <div className="about">
            <h3 className="about-title">About</h3>
            <div className="about-content">
                <p className="about-desc">
                The codepath student store offers great products at great prices from a great team and for a great cause.
                We've searched far and wide for items that perk the interests of even the most eccentric students and decided to offer them all here in one place.
                All proceeds go towards bringing high quality CS education to college students around the country.
                </p>
                <img src={AboutLogo} className="about-logo"></img>
            </div>
        </div>
    )
}