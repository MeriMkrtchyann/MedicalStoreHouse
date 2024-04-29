import {Link} from "react-router-dom"
import {LogOut} from "../icons/Icons"
import "./SignIn.css"

export default function SignOut({setActiveUser, setBasket}){
    
    const clickOutUser = () => {
        setActiveUser(null)
        setBasket({})
        localStorage.removeItem("basket")
        localStorage.removeItem("activeUser")
    }
    return(
        <div className='user' onClick={()=> clickOutUser()}>
            <Link to = "/signIn">
                <LogOut />
            </Link>
        </div> 
    )  
}
