import React, { useState } from "react";
import Info from "./Info";
import Nav from "../nav/Nav"

export default function Product({aboutProduct, activeUser, setActiveUser, setActiveCategory}){
    const [cart, setCart] = useState(false);
    const [bgimage, setBgimage] = useState(null);
    const [count, setCount] = useState(0);
    const [open, setOpen] = useState(false);

    console.log(aboutProduct)
    return(
        <div>
            <Nav activeUser={activeUser} setActiveUser={setActiveUser} setActiveCategory={setActiveCategory}/>
            <div className="Main-hero">
                <section className="flexHero">
                <Info
                    count={count}
                    aboutProduct={aboutProduct}
                    setCount={(word) => setCount(word)}
                />
                </section>
            </div>
        </div>
    )
}


