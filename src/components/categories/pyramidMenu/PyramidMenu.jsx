import PersistentDrawerLeft from "./persistentDrawer/PersistentDrawer"
import "./PyramidMenu.css"

export default function PyramidMenu(){

    return(
        <button className="pyramidButton fa-List" >
             <PersistentDrawerLeft/>
        </button>
    )  
}