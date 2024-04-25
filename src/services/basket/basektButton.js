export default function basektButton (product,  setBasket, basket, sum, setSum, activeUser ){
    product.inBasket = 1
    // if(!basket.includes(product)){
        if (basket){
            setBasket(
                {
                    ...basket , 
                    [product.PraductName] : product
                })
        }else {
            setBasket({
                [product.PraductName] : product
            })
        }
        setSum(sum + (+product.PraductPrice * product.inBasket))
    // }
}