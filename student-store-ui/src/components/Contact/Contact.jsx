import "./Contact.css"
import image from "./img_lights.jpg"

export default function Contact(){
    return(
        <div className="contact-wrapper">
            <h2 className="contact-title">Contact Us</h2>
            <div className="contact">
                <div className="contact-desc">
                    <h4 className="desc">Email:  code@path.org</h4>
                    <h4 className="desc">Phone:  1-800-CODE</h4>
                    <h4 className="desc">Address: 123 Real Street, San Francisco, CA</h4>
                </div>
                <div className="contact-img">
                    <img src={image} alt="Cool Picture" width={370} height={370} className="image"></img>
                </div>
            </div>
        </div>
    ) 
}