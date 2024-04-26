import { useEffect, useState } from "react";
import { RemoveRounded } from "@mui/icons-material";
import { AddRounded } from "@mui/icons-material";
import updateUserData from "../../services/users/firebaseUpdate";

export default function CountDecInc({activeUser,basket, product, praductQuantity, praductPrice=0, sum=0, setSum=()=>{}}){

    const [count , setCount] = useState(product.inBasket)

    useEffect(()=>{
        setCount(product.inBasket)
    },[product])
    console.log(product)

    useEffect(() => {
        async function updateProductCount() {
          if (activeUser) {
            basket[product.PraductName].inBasket = count
            await updateUserData(activeUser, basket , () => {
              console.log('Data updated successfully!!!');
            });
           }
        }
        updateProductCount()
      }, [count]);

    const countIncrease = () => {
        if (count < praductQuantity){
            setCount(count + 1)
            setSum(sum + +praductPrice)
            console.log(product.inBasket)
        }
    };

    const countDecrease = () => {
    if (count <= 1) {
        setCount(1);
        product.inBasket=1
        } else {
            setCount(count - 1);
            setSum(sum - praductPrice)
        }
    };

    return(
        <div className="add">
              <RemoveRounded onClick={countDecrease} className="btn-add" /> 
              <p>{count}</p>
              <AddRounded onClick={countIncrease} className="btn-add" />
        </div>
    )
}