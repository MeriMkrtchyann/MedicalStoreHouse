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

export default function Nav({activeUser, setActiveUser, setActiveCategory, basket, setBasket, sum, setSum}){

    const [categories, setCategories] = useState([])
    const [basketModal, setBasketModal] = useState(false)
    
    const openAndCloseModal = () => {
        setBasketModal(!basketModal)
    }

    useEffect(() => {
        const fetchCategories = async () => {
            setCategories(await readCategoresData());
        };
    
        fetchCategories();
    }, []);

    return(
        <nav className='nav'>
            <div className='container'>
                <PyramidMenu categories={categories} setActiveCategory={setActiveCategory}/>
                <Logo/>  
            </div>
            <div className="conteyner-categories-list-user">
                <Categories categories={categories} setActiveCategory={setActiveCategory}/>
                <LanguageSelector background={"black"}/>
                <div onClick={openAndCloseModal}>
                    <BasketShop />
                </div>
                
                {activeUser ?
                    <>
                    {console.log(activeUser)}
                        <SignOut setActiveUser={setActiveUser} />
                        {Object.keys(activeUser).map((id) =>
                         <UserAvatar key={id} userName={activeUser[id].username} />
                        )}
                    </>
                : 
                    <SignIn/>
                }
            </div>  
            {basketModal &&
                <Basket basket={basket} setBasket={setBasket} openAndCloseModal={openAndCloseModal} sum={sum} setSum={setSum}/>
            }       
        </nav>
    )
}
