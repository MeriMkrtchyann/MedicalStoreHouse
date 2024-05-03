import { useEffect, useState } from "react";
import { RemoveRounded } from "@mui/icons-material";
import { AddRounded } from "@mui/icons-material";
import updateUserData from "../../services/basket/firebaseUpdateBasket";
import readUserData from "../../services/users/firebaseGet";

export default function CountDecInc({setBasket ,activeUser,basket, product, praductQuantity, praductPrice=0, sum=0, setSum=()=>{}}){

    const [count , setCount] = useState(product.inBasket)

    useEffect(()=>{
        setCount(product.inBasket)
    },[product])

    useEffect(() => {
        async function updateProductCount() {
            if (activeUser) {
                basket[product.PraductId].inBasket = count
                await updateUserData(activeUser, basket , () => {
                    console.log('Data updated successfully!!!');
                });
                const activUserEmail = Object.keys(activeUser).map(value => activeUser[value].email)
                const updateUserAllData = await readUserData(activUserEmail[0])
                let updateUserBasket =Object.keys(updateUserAllData).map((value)=> updateUserAllData[value].basket)
                setBasket(updateUserBasket[0])
            }
        }
        updateProductCount()
      }, [count]);

    const countIncrease = () => {
        if (count < praductQuantity){
            setCount(count + 1)
            const newSum = sum + +praductPrice
            setSum(newSum)
            localStorage.setItem("basketSum", JSON.stringify(newSum));
        }
    };

    const countDecrease = () => {
    if (count <= 1) {
        setCount(1);
        product.inBasket=1
        } else {
            setCount(count - 1);
            const newSum = sum - praductPrice
            setSum(newSum)
            localStorage.setItem("basketSum", JSON.stringify({sum : newSum}));
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