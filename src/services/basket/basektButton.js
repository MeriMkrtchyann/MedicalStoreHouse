
export default function basektButton (product,  setBasket, basket, sum, setSum ){
    product.inBasket = 1
    if (basket){
        setBasket([...basket ,product])
    }else {
        setBasket([product])
    }
    setSum(sum + (+product.PraductPrice * product.inBasket))
}