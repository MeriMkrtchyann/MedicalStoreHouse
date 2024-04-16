import "./Basket.css"

export default function Basket({basket,openAndCloseModal}){
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
                                    {product.PraductPrice}դր
                                </div>
                            </div>)
                        })
                       
                    }
                </div>
            </div>
    )
}