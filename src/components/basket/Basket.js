import CountDecInc from "../countDecInc/CountDecInc"
import "./Basket.css"

export default function Basket({basket,openAndCloseModal,sum , setSum}){

    return(
        <div className="basketModal">
                <div className="modalConteyner">
                    <span>Ձեր զամբյուղը</span>
                    <span onClick={openAndCloseModal} className="closeButton">&times;</span>
                    {basket && 
                        basket.map((product) => {
                           return( 
                            <div className="basketProduct">
                                <div className="basketProductImage">
                                    <img src={product.PraductImage}/>
                                </div>
                                <div className="basketProductName">
                                    <p>{product.PraductId}</p>
                                </div>
                                <div className="basketProductPrice">
                                    <div className="basketPrice">{product.PraductPrice}դր</div>
                                    <CountDecInc PraductQuantity={product.PraductQuantity} praductPrice={product.PraductPrice}  sum={sum} setSum={setSum}/>
                                </div>
                            </div>)
                        })
                    }
                    <div className="allPrice">
                        <p>Ընդհանուր</p>
                        <p>{sum}դր</p>
                    </div>
                    
                </div>
            </div>
    )
}