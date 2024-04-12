import {Link} from "react-router-dom"
import {LogIn} from "../icons/Icons"
import "./SignIn.css"

export default function SignIn(){
    return(
        <div className='user'>
            <Link to = "/signIn">
                <LogIn/>
            </Link>
        </div> 
    )  
}
