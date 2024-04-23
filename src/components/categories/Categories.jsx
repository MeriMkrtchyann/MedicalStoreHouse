import {Link} from "react-router-dom"
import "./Categories.css"

export default function Categories({categories, setActiveCategory}){

    const handleOnClick = (category) => setActiveCategory(category);

    return(
        <div className="categories">
                {categories && Object.keys(categories).map((key) => {
                    const innerObject = categories[key];
                    return(
                    <div    
                        key={innerObject.categoryId}
                        className="category"
                        onClick={() => handleOnClick(innerObject.categoryName)} 
                    >
                        <Link to = {"/"}>{innerObject.categoryName}</Link>
                    </div>
                    )
                })}
                
        </div>
    )  
}
