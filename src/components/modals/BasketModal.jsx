import { useState } from "react";
import BasketShop from "../basketShop/BasketShop";


export default function BasketModal(){

    const [basketModal, setBasketModal] = useState(false)

    const openAndCloseModal = () => {
        setBasketModal(!basketModal)
    }
    return(
        <>
           <div onClick={openAndCloseModal}>
                <BasketShop/>
            </div>
            {basketModal && 
                <div className="basketModal">
                    <div className="modalContent">
                        <span onClick={openAndCloseModal} className="closeButton">&times;</span>
                        <p>Здесь может быть </p>
                    </div>
                </div>
            }
        </>
    )
}