import RelatedProduct from "./RelatedProducts/RelatedProducts";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaPinterest,
  FaCartPlus,
} from "react-icons/fa";
import prod from "../../assets/products/earbuds-prod-2.webp";

import "./SingleProduct.scss";
const SingleProduct = () => {
  return (
    <div className="singal-product-container">
      <div className="layout">
        <div className="singal-product-page">
          <div className="left">
            <img src={prod} alt="" />
          </div>
          <div className="right">
            <span className="name">Product Name</span>
            <span className="price">Price</span>
            <span className="discription">Discription</span>

            <div className="cart-button">
              <div className="quantity-button">
                <span>-</span>
                <span>5</span>
                <span>+</span>
              </div>
              <button className="add-to-cart-btn">
                <FaCartPlus size={20} />
                ADD TO CART
              </button>
            </div>

            <span className="devider" />
            <div className="info-items">
              <span className="text-bold">
                Category : <span>HeadPhone</span>
              </span>
              <span className="text-bold">
                Share :
                <span className="social-icons">
                  <FaFacebookF size={16} />
                  <FaTwitter size={16} />
                  <FaInstagram size={16} />
                  <FaLinkedinIn size={16} />
                  <FaPinterest size={16} />
                </span>
              </span>
            </div>
          </div>
        </div>
        <RelatedProduct />
      </div>
    </div>
  );
};

export default SingleProduct;
