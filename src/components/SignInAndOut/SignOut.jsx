import {Link} from "react-router-dom"
import {LogOut} from "../icons/Icons"
import "./SignIn.css"

export default function SignOut({setActiveUser}){
    
    return(
        <div className='user' onClick={()=> setActiveUser(null)}>
            <Link to = "/signIn">
                <LogOut />
            </Link>
        </div> 
    )  
}
