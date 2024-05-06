
import { History, Deliveries } from "../icons/Icons"
import UserAvatar from "../icons/avatars/UserAvatars"
import "./AboutUser.css"

export default function AboutUser({activeUser}){

    return(
        <div className="aboutModal">
                <div className="modalConteyner">
                    <div className="aboutUser">
                            {Object.keys(activeUser).map((id) =>{
                                return (
                                    <>
                                    <div>
                                        <UserAvatar key={id} userName={activeUser[id].username} />
                                    </div>
                                    <div className="userNameAndPhone">
                                        <p className="userName">{activeUser[id].firstName} </p>
                                        <p>{activeUser[id].conatct} </p>
                                    </div>
                                    </>
                                )
                            })}
                    </div>
                    <div className="deliveries">
                        <Deliveries/>
                        <span>Deliveries</span>
                    </div>
                    <div className="purchases">
                        <div className="purchasesIcon">
                            <History/>
                        </div>
                        <span>History</span>
                    </div>
                    
                </div>
        </div>
    )
}