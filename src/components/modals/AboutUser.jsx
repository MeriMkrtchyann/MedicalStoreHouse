
import { useNavigate } from "react-router-dom"
import { History, Deliveries } from "../icons/Icons"
import UserAvatar from "../icons/avatars/UserAvatars"
import "./AboutUser.css"

export default function AboutUser({activeUser, setActivButtonType}){

    const navigate = useNavigate()
    
    const handleDeliveries = () => {
        console.log("barev")
        setActivButtonType("deliveries")
        navigate("/deliveriesOrFilter")
    }

    const handleHistory = () => {
        console.log("barev")
        setActivButtonType("history")
        navigate("/deliveriesOrFilter")
    }

    return(
        <div className="aboutModal">
                <div className="modalConteyner">
                    <div className="aboutUser">
                    {Object.values(activeUser).map((user) => (
                        <div key={user.id}>
                        <div>
                            <UserAvatar userName={user.username} />
                        </div>
                        <div className="userNameAndPhone">
                            <p className="userName">{user.firstName}</p>
                            <p>{user.contact}</p>
                        </div>
                        </div>
                    ))}
                    </div>
                    <div className="deliveries" onClick={() => handleDeliveries()}>
                        <Deliveries />
                        <span>Deliveries</span>
                    </div>
                    <div className="purchases" onClick={() => handleHistory()}>
                        <div className="purchasesIcon">
                            <History />
                        </div>
                            <span>History</span>
                    </div>
                    
                </div>
        </div>
    )
}