import React from 'react';
import cat1 from'../../../assets/category/cat-1.jpg'

import "./Category.scss";
const Category = () => {
    return <div className="shop-by-categery">
        <div className="categeries">
            <div className="categery">
                <img src={cat1} alt=""/>
            </div>
            <div className="categery">
                <img src={cat1} alt=""/>
            </div>
            <div className="categery">
                <img src={cat1} alt=""/>
            </div>
            <div className="categery">
                <img src={cat1} alt=""/>
            </div>
        </div>
    </div>;
};

export default Category;
