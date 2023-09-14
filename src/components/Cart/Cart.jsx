import { MdClose } from "react-icons/md";
import { BsCartX } from "react-icons/bs";
import CartItem from './CartItem/CartItem'

import "./Cart.scss";
const Cart = ({setShowCart}) => {
  return (
    <div className="cart-pannel">
      <div className="opac-layer"></div>
      <div className="cart-content">
        <div className="cart-header">
          <span className="heading"> Shopping Cart</span>
          <span className="close-btn" onClick={()=> setShowCart(false)}>
            <MdClose />
            <span className="text">Close</span>
          </span>
        </div>
        {/* <div className="empty-cart">
            <BsCartX/>
            <span>No product In The Cart</span>
            <button className="return-btn">Return To Shop</button>
        </div> */}



        <>
        <CartItem/>
        <div className="cart-footer">
            <div className="subtotal">
                <span className="text">Subtotal</span>
                <span className="text total">&#8377;999</span>
            </div>
            <div className="button">
                <div className="checkout-btn">Checkout</div>
            </div>
        </div>
        </>
      </div>
    </div>
  );
};

export default Cart;
