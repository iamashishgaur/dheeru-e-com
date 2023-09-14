import "./Products.scss";
import Product from './Product/Product'

const Products = ({innerPage,headingText}) => {
    return <div className="product-container">
        {!innerPage && <div className="section-header">{headingText}</div>}
            <div className="products">
                <Product/>
                <Product/>
                <Product/>
                <Product/>
                <Product/>
                <Product/>
                <Product/>
                <Product/>
            </div>
    </div>;
};

export default Products;
