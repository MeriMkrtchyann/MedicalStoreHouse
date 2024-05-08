import { useEffect } from "react";
import Nav from "../../components/nav/Nav";
import "./DeliverisPage.css"
import PrintProducts from "../../components/deliversAndHistory/PrintProducts";

export default function DeliveriesPage ({activeUser, orders, setOrders, setAllData, email, setActiveUser, setActiveCategory, basket, setBasket, setSum, sum, setOpen, open}) {

    let deliveris = []
    console.log(activeUser)

    useEffect(() => {
        setOrders(orders)
    },[orders])

    if (activeUser){
        const activeUserEmail = Object.keys(activeUser).map((id) => activeUser[id].Orders);
        const ordersArray = Object.keys(activeUserEmail[0]).map((id) => activeUserEmail[0][id]);
        for (let i = 0 ; i < ordersArray.length ; i++){
            Object.keys(ordersArray[i]).map((id) => orders.push(ordersArray[i][id]))
            deliveris = orders.filter((order) => !order.ordered)
        }
    }

    return (
        <>
            <Nav email={email}  activeUser={activeUser} setAllData={setAllData} setActiveUser={setActiveUser} setActiveCategory={setActiveCategory} basket={basket} setBasket={setBasket} sum={sum} setSum={setSum} setOpen={setOpen} open={open}/>
            <PrintProducts products={deliveris} title={"Deliveris"}/>
        </>
        
      )

    
    
    
}