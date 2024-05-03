import "./UsersData.css"
import readAllUsersData from "../../../services/admins/firebaseGetAllUsers"
import { useState } from "react"
import { useEffect } from "react"

export default function UsersData() {

    const [allUsersData , setAllUsersData] = useState(null)

    useEffect(()=> {
        const allUsersData =async () => {
            setAllUsersData(await readAllUsersData()) 
        }
        allUsersData()
    })

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
                    </tr>
                    </thead>
                    <tbody>
                    {allUsersData && Object.keys(allUsersData).map((userID) => {
                        const userData = allUsersData[userID];
                        return (
                        <tr key={userData.userId}>
                            <td>{userData.userId}</td>
                            <td>{userData.firstName}</td>
                            <td>{userData.lastName}</td>
                            <td className="basketTabel">
                                {Object.keys(userData.basket).map((product) =>{
                                    return(
                                        <>
                                        <tr>
                                            <th>Product Id</th>
                                            <th>Quantity</th>
                                        </tr>
                                        <td>{userData.basket[product].PraductId}</td>
                                        <td>{userData.basket[product].inBasket}</td>
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

