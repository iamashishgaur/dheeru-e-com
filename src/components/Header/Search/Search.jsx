import "./Search.scss";
import prod from "../../../assets/products/earbuds-prod-1.webp";

import { MdClose } from "react-icons/md";

const Search = ({ setshowSearch }) => {
  return (
    <div className="search-modal">
      <div className="form-field">
        <input type="text" autoFocus placeholder="Search for Product" />
        <MdClose onClick={() => setshowSearch(false)} />
      </div>
      <div className="search-reault-content">
        <div className="search-results">
          <div className="search-result-items">
            <div className="img-container">
              <img src={prod} alt="" />
            </div>
            <div className="prod-details">
              <span className="name">Product name</span>
              <span className="desc">Product name</span> 
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
