import { useEffect, useState } from "react";
import { RemoveRounded } from "@mui/icons-material";
import { AddRounded } from "@mui/icons-material";

export default function CountDecInc({product,PraductQuantity, praductPrice=0, sum=0, setSum=()=>{}}){

    const [count , setCount] = useState(product.inBasket)

    useEffect(()=>{
        setCount(product.inBasket)
    },[product])

    const countIncrease = () => {
        if (count < PraductQuantity){
            setCount(count + 1)
            setSum(sum + +praductPrice)
            product.inBasket = count + 1
        }
    };

    const countDecrease = () => {
    if (count <= 1) {
        setCount(1);
        product.inBasket=1
        } else {
            setCount(count - 1);
            setSum(sum - praductPrice)
            product.inBasket = count - 1
        }
    };

    return(
        <div className="add">
              <RemoveRounded onClick={countDecrease} className="btn-add" /> 
              <p>{product.inBasket}</p>
              <AddRounded onClick={countIncrease} className="btn-add" />
        </div>
    )
}