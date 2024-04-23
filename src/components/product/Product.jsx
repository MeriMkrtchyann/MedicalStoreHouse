import React, { useState } from "react";
import Info from "./Info";
import Nav from "../nav/Nav"

export default function Product({product, activeUser, setActiveUser, setActiveCategory,  basket, setBasket, sum, setSum}){

    const [count, setCount] = useState(0);

    return(
        <div>
            <Nav activeUser={activeUser} setActiveUser={setActiveUser} setActiveCategory={setActiveCategory} basket={basket} setBasket={setBasket} sum={sum} setSum={setSum}/>
            <div className="Main-hero">
                <section className="flexHero">
                <Info
                    activeUser={activeUser}
                    count={count}
                    product={product}
                    setBasket={setBasket} 
                    basket={basket} 
                    sum={sum} 
                    setSum={setSum}
                    setCount={(word) => setCount(word)}
                />
                </section>
            </div>
        </div>
    )
}


