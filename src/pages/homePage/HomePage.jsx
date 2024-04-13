import { useEffect, useState } from "react";
import Nav from "../../components/nav/Nav"
import Main from "../../components/main/Main";
import getCategoryData from "../../services/allProducts/AllPraducts";

export default function HomePage ({activeUser, setActiveUser}){

    const [activeCategory, setActiveCategory] = useState(null);
    const [allData , setAllData] = useState(null);

    useEffect(()=>{
       const data = async () => await getCategoryData()
       setAllData(data)
    },[])

    return (
        <>
            <Nav activeUser={activeUser} setActiveUser={setActiveUser} setActiveCategory={setActiveCategory}/>
            <Main allData={allData}/>
        </>
    )
}

