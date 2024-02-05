/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import { useDispatch } from "react-redux";
import { increment, decrement } from "../../redux/Cart";
import "./button.css";

function AfterBtn({ cartCount, productId }) {
  const dispatch = useDispatch();
  return (
    <div className="flex justify-center items-center border border-zinc-800 w-max mx-auto rounded-md overflow-hidden my-3">
      <button
        className="px-2 py-1 bg-slate-700"
        onClick={() => dispatch(decrement(productId))}
      >
        -
      </button>
      <div className="cart-count px-3">{cartCount}</div>
      <button
        className="px-2 py-1 bg-slate-700"
        onClick={() => dispatch(increment(productId))}
      >
        +
      </button>
    </div>
  );
}

export default AfterBtn;
