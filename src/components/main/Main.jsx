import { useNavigate } from "react-router-dom";
import { FaCartShopping } from "../icons/Icons"
import basektButton from "../../services/basket/basektButton.js"
import "./Main.css"

export default function Main({allData ,activeUser, setAboutPrductData, setBasket, basket,sum, setSum}){

    const navigate = useNavigate()

    const aboutPrduct = (data) => {
        setAboutPrductData(data)
        navigate("/aboutProduct")
    }

    const clickBasektButton = (product) => {
        activeUser ? basektButton(product,  setBasket, basket,sum, setSum) : navigate("/signIn")
        
    }

    return(
        <div className="main">
            <div className="mainContainer">
                <div className="title">
                    <h1>All Product</h1>
                </div>
                <div className="productsConteyner">
                {Object.keys(allData).map((value)=>{
                    const data = allData[value].Products
                    return(
                        <>
                            {Object.keys(data).map((value)=>{
                                return(
                                    <div className="product"  >
                                        <div className="img" onClick={() => aboutPrduct(data[value])}>
                                            <img src={data[value].PraductImage} alt="img" />
                                        </div>
                                        <span>{data[value].PraductId}</span>
                                        <div className="ProductPriceAndCard">
                                            <div className="price">
                                                <span> {data[value].PraductPrice} դր </span>
                                            </div>
                                           <div className="cartShopping" onClick={() => clickBasektButton(data[value])}>
                                                <FaCartShopping/>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })}
                        </>
                    )
                })}
                </div>
            </div>
            
        </div>
        
    )    
}