import {Link} from "react-router-dom"
import {LogOut} from "../icons/Icons"
import "./SignIn.css"

export default function SignOut({setActiveUser, setAdmin}){
    
    const clickOutUser = () => {
        setActiveUser(null)
        setAdmin(null)
        localStorage.removeItem("activeUser");
    }
    return(
        <div className='user' onClick={()=> clickOutUser()}>
            <Link to = "/signIn">
                <LogOut />
            </Link>
        </div> 
    )  
}
