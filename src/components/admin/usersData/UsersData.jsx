import "./UsersData.css"
import readAllUsersData from "../../../services/admins/firebaseGetAllUsers"
import { useState } from "react"
import { useEffect } from "react"
import {OrderConfirm} from "../../icons/adminPageIcons/adminPageIcons"

export default function UsersData() {

    const [allUsersData , setAllUsersData] = useState(null)

    useEffect(()=> {
        const allUsersData =async () => {
            setAllUsersData(await readAllUsersData()) 
        }
        allUsersData()
    },[])

    return(
        <div className="usersDataContainer" >
            {allUsersData && 
                <table className="usersDataTabel">
                    <thead>
                    <tr>
                        <th>User Id</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>In Basket</th>
                        <th>Orders</th>
                    </tr>
                    </thead>
                    <tbody>
                    {allUsersData && Object.keys(allUsersData).map((userID) => {
                        const userData = allUsersData[userID];
                        return (
                        <tr >
                            <td>{userData.userId}</td>
                            <td>{userData.firstName}</td>
                            <td>{userData.lastName}</td>
                            <td className="basketTabel">
                                {userData.basket && 
                                    Object.keys(userData.basket).map((product) => {
                                        return (
                                            <>
                                            <tr>
                                                <td style={{ fontWeight: "bold" }}>Product Id</td>
                                                <td style={{ fontWeight: "bold" }}>Quantity</td>
                                            </tr>
                                            <tr>
                                                <td>{userData.basket[product].PraductId}</td>
                                                <td>{userData.basket[product].inBasket}</td>
                                            </tr>
                                            </>
                                        )
                                    })
                                }
                            </td>
                            <td className="ordersTabel">
                                {userData.Orders && 
                                    Object.keys(userData.Orders).map((orderId) =>{
                                        const id = userData.Orders[orderId]
                                        return(
                                            <>
                                            <tr key={orderId}>
                                                <td colSpan="3" style={{ fontWeight: "bold" }}>{orderId}</td>
                                            </tr>
                                            {Object.keys(id).map((praduct) => {
                                                return (
                                                    <>
                                                    <tr>
                                                        <td style={{ fontWeight: "bold" }}>Product Id</td>
                                                        <td style={{ fontWeight: "bold" }}>Quantity</td>
                                                        <td style={{ fontWeight: "bold" }}>Orderd</td>
                                                    </tr>
                                                    <tr>
                                                        <td>{praduct}</td>
                                                        <td>{id[praduct].inBasket}</td>
                                                        <td>{id[praduct].ordered ? <OrderConfirm color={"green"}/> : <OrderConfirm color={"red"}/>}</td>
                                                    </tr>
                                                    </>
                                                )
                                            })}
                                            </>
                                        )
                                        
                                })}
                            </td>
                        </tr>
                        );
                    })}
                    </tbody>
                </table>
            }
        </div>
    )
}

