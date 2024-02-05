/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState, useMemo } from "react";
import { useSelector } from "react-redux";
import products from "../../api/products.json";
import AfterCart from "../CartButtons/AfterBtn";
import BeforeCart from "../CartButtons/BeforeBtn";
import "./product.css";

function ProductList() {
  const { cartList } = useSelector((state) => state.cart);
  return (
    <section className="container">
      {products.map((product, index) => (
        <div className="product-container" key={index}>
          <img src={product.image} alt="" />
          <div className="p-3">
            <h3 className="text-lg font-bold">{product.title}</h3>
            <CartButtons product={product} cartList={cartList} />
          </div>
        </div>
      ))}
    </section>
  );
}

export default ProductList;

function CartButtons({ product, cartList }) {
  const cartCount = useMemo(() => {
    return cartList?.find((item) => item?.id === product.id)?.count;
  }, [cartList, product]);
  return (
    <>
      {cartCount > 0 ? (
        <AfterCart productId={product.id} cartCount={cartCount} />
      ) : (
        <BeforeCart product={product} />
      )}
    </>
  );
}
