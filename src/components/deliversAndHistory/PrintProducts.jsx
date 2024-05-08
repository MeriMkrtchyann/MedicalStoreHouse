export default function PrintProducts({products, title, color }) {
    return (
        <div className="deliveriespRroductsConteyner">
            <div className="title"> <h1>{title}</h1> </div>
            <div className="deliveriesProductConteyner" > 
                {products && products.map((product) => {
                    return(
                        <div key={products[product]} className="deliveriesproduct" style={{ border: `2px solid ${color}`}}>
                            <div className="deliveriesProductImage">
                                <img src={`${product.PraductImage}`}></img>
                            </div>
                            <div className="deliveriesproductId">
                                <p>{product.PraductId}</p>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}