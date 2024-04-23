import {Link} from "react-router-dom"
import "./Logo.css"

export default function Logo({setActiveCategory}){
    return(
        <div className="logo" onClick={()=> setActiveCategory(null)}>
            <Link to = "/">
                <img src ={process.env.PUBLIC_URL + "img/medical.png"} alt="logo"/> 
            </Link>
        </div>
    )  
}
