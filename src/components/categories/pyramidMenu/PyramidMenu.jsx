import PersistentDrawerLeft from "./persistentDrawer/PersistentDrawer"
import "./PyramidMenu.css"

export default function PyramidMenu({categories}){

    return(
        <button className="pyramidButton fa-List" >
             <PersistentDrawerLeft categories={categories}/>
        </button>
    )  
}