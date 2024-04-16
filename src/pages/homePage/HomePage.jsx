import { useEffect, useState } from "react";
import Nav from "../../components/nav/Nav"
import Main from "../../components/main/Main";
import getCategoryData from "../../services/allProducts/AllPraducts";

export default function HomePage ({activeUser, setActiveUser, setAboutPrductData, setActiveCategory}){
    
    const [allData , setAllData] = useState({});
    const [basket, setBasket] = useState([]);
    const [sum , setSum] = useState(0);

    useEffect(() => {
        async function fetchData() {
            const data = await getCategoryData();
            setAllData(data);
        }
        fetchData();
    }, []);

    return (
        <>
            <Nav activeUser={activeUser} setActiveUser={setActiveUser} setActiveCategory={setActiveCategory} basket={basket} setBasket={setBasket} sum={sum} setSum={setSum}/>
            <Main allData={allData} setAboutPrductData={setAboutPrductData} setBasket={setBasket} basket={basket} sum={sum} setSum={setSum}/>
        </>
    )
}

