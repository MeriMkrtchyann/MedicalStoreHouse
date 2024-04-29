import Logo from "../logo/Logo";
import Categories from '../categories/Categories';
import PyramidMenu from "../categories/pyramidMenu/PyramidMenu";
import SignIn from "../SignInAndOut/SignIn";
import "./Nav.css"
import LanguageSelector from "../languageSelector/LanguageSelector";
import BasketShop from "../basketShop/BasketShop";
import SignOut from "../SignInAndOut/SignOut";
import UserAvatar from "../icons/avatars/UserAvatars";
import readCategoresData from "../../services/categories/firebaseGetCategories.js"
import { useState, useEffect } from "react";
import Basket from "../basket/Basket.js";
import updateUserData from "../../services/users/firebaseUpdate.js";

export default function Nav({email, activeUser, setActiveUser, setActiveCategory, basket, setBasket, sum, setSum}){

    const [categories, setCategories] = useState([])
    const [basketModal, setBasketModal] = useState(false)
    const [basketQuantityProducts, setBasketQuantityProducts] = useState(0)
    
    const openAndCloseModal = () => {
        setBasketModal(!basketModal)
    }

    useEffect(() => {
        const fetchCategories = async () => {
            setCategories(await readCategoresData());
        };
        fetchCategories();
    }, []);

    useEffect(() => {
        if (basket){
            let basketLength = Object.keys(basket)
            setBasketQuantityProducts(basketLength.length)
             async function updateUserBasket () {
                await updateUserData(activeUser, basket , () => {
                    console.log('Data updated successfully!!!');
                });
            }
            updateUserBasket()
        }
    }, [basket]);

    return(
        <nav className='nav'>
            <div className='container'>
                <PyramidMenu categories={categories} setActiveCategory={setActiveCategory}/>
                <Logo setActiveCategory={setActiveCategory}/>  
            </div>
            <div className="conteyner-categories-list-user">
                <Categories categories={categories} setActiveCategory={setActiveCategory}/>
                {activeUser ?
                    <>
                        <SignOut setActiveUser={setActiveUser} setBasket={setBasket} />
                        {Object.keys(activeUser).map((id) =>
                          <UserAvatar key={id} userName={activeUser[id].username} />
                        )}
                    </>
                : 
                    <SignIn/>
                }
                <div className="basketAndQuantityContainer" onClick={openAndCloseModal}>
                    <BasketShop />
                    <span className={basketQuantityProducts ? "quantity" : "quantityZero"}>
                        {basketQuantityProducts}
                    </span>
                </div>
                <LanguageSelector background={"black"}/>
            </div>  
            {basketModal &&
                <Basket email={email}  basket={basket} activeUser={activeUser} setActiveUser={setActiveUser} setBasket={setBasket} openAndCloseModal={openAndCloseModal} sum={sum} setSum={setSum} />
            }             
        </nav>
    )
}

