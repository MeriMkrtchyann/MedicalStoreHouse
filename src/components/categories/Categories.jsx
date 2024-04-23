import {Link} from "react-router-dom"
import "./Categories.css"

export default function Categories({categories, setActiveCategory}){


    const handleMouseOver = (primary) => setActiveCategory(primary);
    // const handleMouseOut = () => setActiveCategory(null);

    return(
        <div className="categories">
                {categories && Object.keys(categories).map((key) => {
                    const innerObject = categories[key];
                    return(
                    <div    
                        key={innerObject.categoryId}
                        className="category"
                        onMouseOver={() => handleMouseOver(innerObject.categoryName)} 
                        // onMouseOut={handleMouseOut}
                    >
                        <Link to = {"/"}>{innerObject.categoryName}</Link>
                    </div>
                    )
                })}
                
        </div>
    )  
}
