import imgSrc from "./codePathLogo.png"
import "./Logo.css"
export default function Logo(){
    return(
        <div className="logo">
            <a href="/"> <img src={imgSrc} alt="nothing" className="" width={60} height={60}></img></a>
        </div>
    )
}