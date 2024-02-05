/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/Cart";

function BeforeBtn({ product }) {
  const dispatch = useDispatch();
  return (
    <div className="before-cart w-max mx-auto my-3">
      <button
        className="add-cart-button bg-teal-700 px-3 py-1 rounded-md"
        onClick={() => dispatch(addToCart(product))}
      >
        Add to Cart
      </button>
    </div>
  );
}

export default BeforeBtn;
