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
        const newSum = sum + (+product.PraductPrice * product.inBasket)
        setSum(newSum)
        localStorage.setItem("basketSum", JSON.stringify({sum : newSum}));
}