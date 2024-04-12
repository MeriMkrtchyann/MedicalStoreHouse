import {Link} from "react-router-dom"
import { useState } from "react";
import "./Categories.css"

export default function Categories(){

    const [activeCategory, setActiveCategory] = useState(null);

    const handleMouseOver = (primary) => setActiveCategory(primary);
    const handleMouseOut = () => setActiveCategory(null);

    const categories = [
        { primary: 'Components'},
        { primary: 'Peripherals'},
        { primary: 'Accessories' },
        { primary: 'Components'},
        { primary: 'Security Systems'},
        { primary: 'Networking' },
        { primary: 'Tools' },
      ];

    return(
        <div className="categories">
                {categories.map(({ primary, subcategories }, index) => 
                    <div    
                        key={primary}
                        className="category"
                        onMouseOver={() => handleMouseOver(primary)} 
                        onMouseOut={handleMouseOut}
                    >
                        <Link to = {"/"+primary }>{primary}</Link>
                        <div className="categoriHotDishes">
                        {activeCategory === primary && (
                            <div className="subcategory-list">
                                {subcategories && subcategories.map((subcategory) => (
                                    <div key={subcategory}>
                                        <Link to={`/category/${subcategory}`}>{subcategory}</Link>
                                    </div>
                                ))}
                            </div>
                        )}
                        </div>
                    </div>
                )}
        </div>
    )  
}