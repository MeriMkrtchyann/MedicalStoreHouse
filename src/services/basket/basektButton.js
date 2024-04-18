
export default function basektButton (product,  setBasket, basket,sum, setSum ){
    if (basket){
        setBasket([...basket ,product])
    }else {
        setBasket([product])
    }
    product.inBasket = 1
    setSum(sum + (+product.PraductPrice))
}