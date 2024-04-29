export default function basektButton (product,  setBasket, basket, sum, setSum ){
    product.inBasket = 1
    let myBasket = {}
        if (basket){
            myBasket =  {
                ...basket , 
                [product.PraductId] : product
            }
            setBasket(myBasket)
        }else {
            myBasket =  {[product.PraductId] : product}
            setBasket(myBasket)
        }
        localStorage.setItem("basket", JSON.stringify(myBasket));
        setSum(sum + (+product.PraductPrice * product.inBasket))
}