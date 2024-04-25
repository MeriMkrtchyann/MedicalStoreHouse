import CountDecInc from "../countDecInc/CountDecInc"
import "./Basket.css"

export default function Basket({basket, setBasket, sum, setSum}){
    
    const bye = () => {
        setSum(0)
        setBasket({})
    }

    const deleteAll = () => {
        setSum(0)
        setBasket({})
        Object.keys(basket).map((product) => {basket[product].inBasket = 0})
    }

    // const deleteProduct = (product) => {
    //     setBasket(basket.filter(value=> value!== product))
    //     setSum(sum - (+product.PraductPrice) * (+product.inBasket) )
    //     product.inBasket = 0
    // }

    return(
        <div className="basketModal">
                <div className="modalConteyner">
                <div style={{display: 'flex', justifyContent: 'space-between'}}>
                    <span>Ձեր զամբյուղը</span>
                    <span onClick={()=> deleteAll()} style={{cursor: "pointer"}}>Ջնջել բոլորը</span>
                </div>
                    {basket && 
                        Object.keys(basket).map((product) => {
                            const aboutProduct = basket[product]
                           return( 
                            <div key={product} className="basketProduct">
                                <div className="basketProductImage">
                                    <img src={aboutProduct.PraductImage}/>
                                </div>
                                <div className="basketProductName">
                                    <p>{aboutProduct.PraductId}</p>
                                </div>
                                <div className="basketProductPrice">
                                    {/* <div className="deleteButton" onClick={() => deleteProduct(product)}>
                                        <spanc lassName="deleteButton">&times;</spanc>
                                    </div> */}
                                    <div>
                                        <CountDecInc product={product} PraductQuantity={aboutProduct.PraductQuantity} praductPrice={aboutProduct.PraductPrice}  sum={sum} setSum={setSum}/>
                                    </div>
                                    <div className="basketPrice">{product.PraductPrice}դր</div>
                                </div>
                            </div>)
                        })
                    }
                    <div className="allPrice">
                        <p>Ընդհանուր</p>
                        <p>{sum}դր</p>
                        <div onClick={()=> bye()} style={{cursor: "pointer"}}> Գնել</div>
                    </div>
                </div>
            </div>
    )
}