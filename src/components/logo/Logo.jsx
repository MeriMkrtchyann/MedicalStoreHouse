import {Link} from "react-router-dom"
import "./Logo.css"

export default function Logo(){
    return(
        <div className="logo">
            <Link to = "/">
                <img src ={process.env.PUBLIC_URL + "img/medical.png"} alt="logo"/> 
            </Link>
        </div>
    )  
}
