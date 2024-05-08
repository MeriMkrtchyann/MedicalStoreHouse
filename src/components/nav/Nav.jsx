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
import firebaseUpdateBasket from "../../services/basket/firebaseUpdateBasket.js";
import { UserIcon } from "../icons/Icons.jsx";
import AboutUser from "../modals/AboutUser.jsx";

export default function Nav({setActivButtonType, email, activeUser, setActiveUser, setActiveCategory, basket, setBasket, sum, setSum, setOpen, open}){

    const [categories, setCategories] = useState([])
    const [basketModal, setBasketModal] = useState(false)
    const [basketQuantityProducts, setBasketQuantityProducts] = useState(0)
    const [aboutUserModal , setAboutUserModal] = useState(false)
    
    const openAndCloseBasketModal = () => {
        setBasketModal(!basketModal)
        if (aboutUserModal){
            setAboutUserModal(false)
        }
    }

    const openAndCloseUserModal = () => {
        setAboutUserModal(!aboutUserModal)
        if (basketModal){
            setBasketModal(false)
        }
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
                await firebaseUpdateBasket(activeUser, basket , () => {
                    console.log('Data updated successfully!!!');
                });
            }
            updateUserBasket()
        }
    }, [basket, activeUser]);

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
                        <div style={{cursor: 'pointer'}} onClick={() => openAndCloseUserModal()}>
                            <UserIcon />
                        </div>
                    </>
                : 
                    <SignIn/>
                }
                <div className="basketAndQuantityContainer" onClick={openAndCloseBasketModal}>
                    <BasketShop />
                    <span className={basketQuantityProducts ? "quantity" : "quantityZero"}>
                        {basketQuantityProducts}
                    </span>
                </div>
                <LanguageSelector background={"black"}/>
            </div>  
            {basketModal &&   
                <Basket email={email}  basket={basket} activeUser={activeUser} setActiveUser={setActiveUser} setBasket={setBasket} openAndCloseBasketModal={openAndCloseBasketModal} sum={sum} setSum={setSum} setOpen={setOpen} open={open} />
            }
            {aboutUserModal &&
                <AboutUser activeUser={activeUser} setActivButtonType={setActivButtonType} />
            }             
        </nav>
    )
}


