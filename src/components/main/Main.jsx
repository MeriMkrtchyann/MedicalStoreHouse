import { useNavigate } from "react-router-dom";
import { FaCartShopping } from "../icons/Icons"
import basektButton from "../../services/basket/basektButton.js"
import "./Main.css"

export default function Main({allData , activeCategory, activeUser, setAboutPrductData, setBasket, basket,sum, setSum}){

    const navigate = useNavigate()

    const aboutProduct = (data) => {
        setAboutPrductData(data)
        navigate("/aboutProduct")
    }

    const clickBasketButton = (product) => {
        activeUser ? basektButton(product,  setBasket, basket,sum, setSum) : navigate("/signIn")
    }

    return(
        <div className="main">
            <div className="mainContainer">
                <div className="title">
                    <h1>{ activeCategory ? `${activeCategory}` : `All Product`}</h1>
                </div>
                <div className="productsConteyner">
                    {Object.keys(allData).map((value) => {
                            const data = allData[value];
                            if (data.categoryName === activeCategory) {
                                const products = data.Products;
                                    return (
                                    <>
                                        {Object.keys(products).map((productValue) => {
                                        const product = products[productValue];
                                        return (
                                            <div className="product" key={product.PraductId}>
                                            <div className="img" onClick={() => aboutProduct(product)}>
                                                <img src={product.PraductImage} alt="img" />
                                            </div>
                                            <span>{product.PraductId}</span>
                                            <div className="ProductPriceAndCard">
                                                <div className="price">
                                                <span>{product.PraductPrice} դր</span>
                                                </div>
                                                <div className="cartShopping" onClick={() => clickBasketButton(product)}>
                                                <FaCartShopping />
                                                </div>
                                            </div>
                                            </div>
                                        );
                                        })}
                                    </>
                                    );
                            }else if (!activeCategory){
                                const products = data.Products;
                                return (
                                    <>
                                        {Object.keys(products).map((productValue) => {
                                        const product = products[productValue];
                                        return (
                                            <div className="product" key={product.PraductId}>
                                            <div className="img" onClick={() => aboutProduct(product)}>
                                                <img src={product.PraductImage} alt="img" />
                                            </div>
                                            <span>{product.PraductId}</span>
                                            <div className="ProductPriceAndCard">
                                                <div className="price">
                                                <span>{product.PraductPrice} դր</span>
                                                </div>
                                                <div className="cartShopping" onClick={() => clickBasketButton(product)}>
                                                <FaCartShopping />
                                                </div>
                                            </div>
                                            </div>
                                        );
                                        })}
                                    </>
                                    );
                            }
                            
                       
                    })}
                </div>
            </div>
        </div>
                            
    )    
}