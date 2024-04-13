import "./Main.css"

export default function Main({allData}){
    return(
        <div className="main">
            <div className="productsConteyner">
                {Object.keys(allData).map((value)=>{
                    const data = allData[value].Products
                    return(
                        <>
                            {Object.keys(data).map((value)=>{
                            console.log(data[value].PraductId)
                                return(
                                    <div className="product">
                                        <img src={data[value].PraductImage} alt="img" />
                                        <span>{data[value].PraductId}</span>
                                        <div className="ProductPrice">
                                            <span> {data[value].PraductPrice} </span>
                                            {/* <img src={""} alt="Shopping Cart" /> */}
                                        </div>
                                    </div>
                                )
                            })}
                        </>
                    )
                })}
            </div>
        </div>
        
    )    
}