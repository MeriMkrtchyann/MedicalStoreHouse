import { useNavigate } from "react-router-dom";
import { FaCartShopping } from "../icons/Icons";
import basektButton from "../../services/basket/basektButton.js";

export default function RenderProducts ({products, activeUser, setAboutPrductData, setBasket, basket, sum, setSum}) {
    const navigate = useNavigate();
    const aboutProduct = (data) => {
        setAboutPrductData(data);
        navigate("/aboutProduct");
    };

    const clickBasketButton = (product) => {
        activeUser ? basektButton(product, setBasket, basket, sum, setSum) : navigate("/signIn");
    };

    return Object.keys(products).map((productValue) => {
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
    });
};