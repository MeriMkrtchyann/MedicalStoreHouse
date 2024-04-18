import { useState } from "react";
import { RemoveRounded } from "@mui/icons-material";
import { AddRounded } from "@mui/icons-material";


export default function CountDecInc({PraductQuantity, praductPrice=0, sum, setSum, }){

    const [count , setCount] = useState(1)

    const countIncrease = () => {
        if (count < PraductQuantity){
            setCount(count + 1)
            setSum(sum + +praductPrice)
        }
    };

    const countDecrease = () => {
    if (count <= 1) {
        setCount(1);
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