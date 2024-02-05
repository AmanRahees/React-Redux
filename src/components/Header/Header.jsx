/* eslint-disable no-unused-vars */
import React from "react";
import { ShoppingCart } from "lucide-react";
import { useSelector } from "react-redux";
import "./header.css";

function Header() {
  const { cartList } = useSelector((state) => state.cart);
  return (
    <header>
      <div className="container">
        <h1 className="">SPARKY</h1>
        <button className="relative">
          <ShoppingCart size={30} />
          <small className="absolute -top-2 -right-2 bg-teal-700 w-4 h-4 rounded-full text-[10px]">
            {cartList.length}
          </small>
        </button>
      </div>
    </header>
  );
}

export default Header;
