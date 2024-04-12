import Logo from "../logo/Logo";
import Categories from '../categories/Categories';
import PyramidMenu from "../categories/pyramidMenu/PyramidMenu";
import SignIn from "../SignInAndOut/SignIn";
import "./Nav.css"
import LanguageSelector from "../languageSelector/LanguageSelector";
import BasketShop from "../basketShop/BasketShop";
import SignOut from "../SignInAndOut/SignOut";
import UserAvatar from "../icons/avatars/UserAvatars";

export default function Nav({activeUser, setActiveUser}){
    return(
        <nav className='nav'>
            <div className='container'>
                <PyramidMenu/>
                <Logo/>  
            </div>
            <div className="conteyner-categories-list-user">
                <Categories/>
                <LanguageSelector background={"black"}/>
                <BasketShop/>
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
        </nav>
    )
}