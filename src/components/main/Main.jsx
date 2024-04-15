import { useNavigate } from "react-router-dom";
import { FaCartShopping } from "../icons/Icons"
import "./Main.css"

export default function Main({allData , setAboutPrductData}){

    const navigate = useNavigate()

    const aboutPrduct = (data) => {
        setAboutPrductData(data)
        navigate("/aboutProduct")
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
                                    <div className="product" onClick={() => aboutPrduct(data[value])} >
                                        <div className="img">
                                            <img src={data[value].PraductImage} alt="img" />
                                        </div>
                                        <span>{data[value].PraductId}</span>
                                        <div className="ProductPriceAndCard">
                                            <div className="price">
                                                <span> {data[value].PraductPrice} դր </span>
                                            </div>
                                           <div className="cartShopping">
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