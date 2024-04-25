import "./Main.css";
import RenderProduct from "../product/RenderProduct.jsx";

export default function Main({ allData, activeCategory, activeUser, setAboutPrductData, setBasket, basket, sum, setSum }) {
    return (
        <div className="main">
            <div className="mainContainer">
                <div className="title">
                    <h1>{activeCategory ? `${activeCategory}` : `All Product`}</h1>
                </div>
                <div className="productsConteyner">
                    {Object.keys(allData).map((categoryKey) => {
                        const categoryData = allData[categoryKey];
                        if (categoryData.categoryName === activeCategory || !activeCategory) {
                           return (
                                <RenderProduct 
                                    products={categoryData.Products}
                                    activeUser={activeUser}
                                    setAboutPrductData={setAboutPrductData} 
                                    setBasket={setBasket}
                                    basket={basket} 
                                    sum={sum} 
                                    setSum={setSum}
                                />
                           )
                        }
                        return null;
                    })}
                </div>
            </div>
        </div>
    );
}
