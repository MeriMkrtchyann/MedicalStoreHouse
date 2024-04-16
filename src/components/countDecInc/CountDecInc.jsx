import { useState } from "react";
import { RemoveRounded } from "@mui/icons-material";
import { AddRounded } from "@mui/icons-material";


export default function CountDecInc({PraductQuantity,}){

    const [count , setCount] = useState(0)

  const countIncrease = () => {
        if (count < PraductQuantity){
        setCount(count + 1)
        }
    };

    const countDecrease = () => {
    if (count === 0) {
        setCount(0);
    } else {
        setCount(count - 1);
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