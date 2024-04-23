import { useEffect, useState } from "react";
import Nav from "../../components/nav/Nav"
import Main from "../../components/main/Main";
import getCategoryData from "../../services/allProducts/AllPraducts";

export default function HomePage ({activeUser,activeCategory, setActiveUser, setAboutPrductData, setActiveCategory, basket, setBasket, setSum, sum}){
    
    const [allData , setAllData] = useState({});

    useEffect(() => {
        async function fetchData() {
            const data = await getCategoryData();
            setAllData(data);
        }
        fetchData();
    }, []);

    return (
        <>
            <Nav activeUser={activeUser} setAllData={setAllData} setActiveUser={setActiveUser} setActiveCategory={setActiveCategory} basket={basket} setBasket={setBasket} sum={sum} setSum={setSum}/>
            <Main allData={allData} activeUser={activeUser } activeCategory={activeCategory} setAboutPrductData={setAboutPrductData} setBasket={setBasket} basket={basket} sum={sum} setSum={setSum}/>
        </>
    )
}

