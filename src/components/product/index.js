import CompareArrowsOutlinedIcon from "@mui/icons-material/CompareArrowsOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import RemoveRedEyeOutlinedIcon from "@mui/icons-material/RemoveRedEyeOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { Button } from "@mui/material";
import Rating from "@mui/material/Rating";
import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./style.css";

import { MyContext } from "../../App";

const Product = ({ item }) => {
  const [productData, setProductData] = useState();
  const [isAdded, setIsadded] = useState(false);

  const context = useContext(MyContext);

  useEffect(() => {
    setProductData(item);
  }, [item]);

  const setProductCat = () => {
    sessionStorage.setItem("parentCat", productData.categoryName);
    sessionStorage.setItem("subCatName", productData.subCategoryName);
  };

  const addToCart = (item) => {
    context.addToCart(item);
    setIsadded(true);
  };

  return (
    <div className="productThumb" onClick={setProductCat}>
      {/* {props.tag !== null && props.tag !== undefined && (
        <span className={`badge ${props.tag}`}>{props.tag}</span>
      )} */}

      {productData !== undefined && (
        <>
          <Link to={`/product/${productData.id}`}>
            <div className="imgWrapper">
              <div className="p-4 wrapper mb-3">
                <img
                  src={
                    "https://www.jiomart.com/images/product/original/491187309/good-life-whole-moong-500-g-product-images-o491187309-p491187309-0-202308311426.jpg" +
                    "?im=Resize=(420,420)"
                  }
                  className="w-100"
                />
              </div>

              <div className="overlay transition">
                <ul className="list list-inline mb-0">
                  <li className="list-inline-item">
                    <a className="cursor" tooltip="Add to Wishlist">
                      <FavoriteBorderOutlinedIcon />
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a className="cursor" tooltip="Compare">
                      <CompareArrowsOutlinedIcon />
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a className="cursor" tooltip="Quick View">
                      <RemoveRedEyeOutlinedIcon />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </Link>

          <div className="info">
            <span className="d-block catName">{productData.brand}</span>
            <h4 className="title">
              <Link>{productData.productName.substr(0, 50) + "..."}</Link>
            </h4>
            <Rating
              name="half-rating-read"
              value={parseFloat(item.flatRate)}
              precision={item.flatRate}
              readOnly
            />
            <span className="brand d-block text-g">
              By <Link className="text-g">{productData.brand}</Link>
            </span>

            <div className="d-flex align-items-center mt-3">
              <div className="d-flex align-items-center w-100">
                <span className="price text-g font-weight-bold">
                  Rs {productData.price}
                </span>{" "}
                <span className="oldPrice ml-auto">
                  Rs {productData.oldPrice}
                </span>
              </div>
            </div>

            <Button
              className="w-100 transition mt-3"
              onClick={() => addToCart(productData)}
            >
              <ShoppingCartOutlinedIcon />
              {isAdded === true ? "Added" : "Add"}
            </Button>
          </div>
        </>
      )}
    </div>
  );
};

export default Product;
