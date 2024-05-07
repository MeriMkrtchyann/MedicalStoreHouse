import CountDecInc from "../countDecInc/CountDecInc"
import "./Basket.css"
import removeBasket from "../../services/basket/firebaseDeleteBasket";
import removeElementFromBasket from "../../services/basket/firebaseRemoveElementFromBasket";
import { useState } from "react";
import ConfirmByeProduct from "../modals/ConfirmByePoroduct";

export default function Basket({email, basket, activeUser, setBasket, sum, setSum, setOpen, open}){

    const [quantity , setQuantity] = useState(0)
    const [productImage , setProductImage] = useState([])

    const bye = () => {
        setOpen(true)
        setQuantity(Object.keys(basket).length)
        const imageArray = Object.keys(basket).map((value) => basket[value].PraductImage )
        setProductImage(imageArray)
    }

    const deleteAll = async () => {
        setSum(0)
        localStorage.setItem("basketSum", JSON.stringify({sum : 0}));
        setBasket({})
        localStorage.setItem("basket", JSON.stringify(null));
        await removeBasket(activeUser)
    }

    const deleteProduct =async (product) => {
        let filteredBasket = Object.keys(basket)
            .filter(key => key !== product)
            .reduce((obj, key) => {
                obj[key] = basket[key];
                return obj;
            }, {});
        let newSum = Object.keys(filteredBasket)
            .map((value) => filteredBasket[value].PraductPrice * filteredBasket[value].inBasket)
            .reduce((acc, value) => acc + value, 0);
        setSum(newSum)
        localStorage.setItem("basketSum", JSON.stringify({sum : newSum}));
        await removeElementFromBasket(activeUser, product)
        setBasket(filteredBasket)
        localStorage.setItem("basket", JSON.stringify(filteredBasket));
    }

    return(
        <div className="basketModal">
                <div className="modalConteyner">
                <div style={{display: 'flex', justifyContent: 'space-between'}}>
                    <span>Ձեր զամբյուղը</span>
                    <span onClick={()=> deleteAll()} style={{cursor: "pointer"}}>Ջնջել բոլորը</span>
                </div>
                    {basket && 
                        Object.keys(basket).map((product) => {
                            const aboutProduct = basket[product]
                           return( 
                            <div key={product} className="basketProduct">
                                <div className="basketProductImage">
                                    <img src={aboutProduct.PraductImage}/>
                                </div>
                                <div className="basketProductName">
                                    <p>{aboutProduct.PraductId}</p>
                                </div>
                                <div className="basketProductPrice">
                                    <div className="deleteButton" onClick={() => deleteProduct(product)}>
                                        <spanc lassName="deleteButton">&times;</spanc>
                                    </div>
                                    <div>
                                        <CountDecInc setBasket={setBasket} email={email} basket={basket}  activeUser={activeUser} product={aboutProduct} praductQuantity={aboutProduct.PraductQuantity} praductPrice={aboutProduct.PraductPrice}  sum={sum} setSum={setSum}/>
                                    </div>
                                    <div className="basketPrice">{aboutProduct.PraductPrice}դր</div>
                                </div>
                            </div>)
                        })
                    }
                    <div className="allPrice">
                        <p>Ընդհանուր</p>
                        <p>{sum}դր</p>
                        <div onClick={()=> bye()} style={{cursor: "pointer"}}> Գնել</div>
                    </div>
                    {open && 
                        <ConfirmByeProduct open={open} setOpen={setOpen} quantity={quantity} sum={sum} productImage={productImage} setBasket = {setBasket} setSum = {setSum} activeUser={activeUser} basket={basket}/>
                    }
                </div>
            </div>
    )
}