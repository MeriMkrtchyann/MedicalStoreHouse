import { useEffect, useState } from "react";
import Nav from "../../components/nav/Nav";
import "./DeliverisPage.css"
import PrintProducts from "../../components/deliversAndHistory/PrintProducts";

export default function DeliveriesPage ({activButtonType, setActivButtonType, activeUser, setAllData, email, setActiveUser, setActiveCategory, basket, setBasket, setSum, sum, setOpen, open}) {

    const [data , setDeliversOrStoryData] = useState([])
    const [orders , setOrders] = useState([])
    const [title , setTitle] = useState("")
    const [color , setColor] = useState("")

    useEffect(() => {
        if (activeUser){
            const activeUserEmail = Object.keys(activeUser).map((id) => activeUser[id].Orders);
            const ordersArray = Object.keys(activeUserEmail[0]).map((id) => activeUserEmail[0][id]);
            let ordersData = [];
            for (let i = 0 ; i < ordersArray.length ; i++){
                Object.keys(ordersArray[i]).map((id) => ordersData.push(ordersArray[i][id]))
            } 
            setOrders(ordersData)
        }
    },[activeUser])

    useEffect(() => {
        if (activButtonType === "deliveries") {
            let deliveries = orders.filter((order) => !order.ordered);
            setDeliversOrStoryData(deliveries);
            setTitle("Deliveries")
            setColor("red")
        } else {
            let history = orders.filter((order) => order.ordered);
            setDeliversOrStoryData(history);
            setTitle("History")
            setColor("green")
        }
    }, [activButtonType, orders]);

    return (
        <>
            <Nav setActivButtonType={setActivButtonType} email={email}  activeUser={activeUser} setAllData={setAllData} setActiveUser={setActiveUser} setActiveCategory={setActiveCategory} basket={basket} setBasket={setBasket} sum={sum} setSum={setSum} setOpen={setOpen} open={open}/>
            <PrintProducts products={data} title={title} color = {color}/>
        </> 
    )

    
    
    
}