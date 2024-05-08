export default function basektButton (product,  setBasket, basket, sum, setSum ){

    product.inBasket = 1
    let newSum = sum

    let myBasket = {}
    if (!basket){
        myBasket =  {[product.PraductId] : product}
    }else if (!basket.hasOwnProperty(product.PraductId)){
            myBasket =  {
                ...basket , 
                [product.PraductId] : product
            }
    }else {
        return
    }
        
    localStorage.setItem("basket", JSON.stringify(myBasket));
    localStorage.setItem("basketSum", JSON.stringify({sum : newSum}));
    newSum += (+product.PraductPrice * product.inBasket)
    setSum(newSum)
    setBasket(myBasket)
}
       
