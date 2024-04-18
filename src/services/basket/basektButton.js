
export default function basektButton (product,  setBasket, basket,sum, setSum ){
    console.log(product)
    if (basket){
        setBasket([...basket ,product])
    }else {
        setBasket([product])
        
    }
    setSum(sum + (+product.PraductPrice))
}