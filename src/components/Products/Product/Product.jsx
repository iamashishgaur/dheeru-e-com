import "./Product.scss";
import proi from '../../../assets/products/earbuds-prod-1.webp';

const Product = () => {
    return <div className="product-card">
        <div className="thumbnail">
            <img src={proi} alt="" />
        </div>
        <div className="pro-details">
            <span className="pro-name">Headphone</span>
            <span className="pro-price">&#8377;999</span>
        </div>
    </div>;
};

export default Product;
