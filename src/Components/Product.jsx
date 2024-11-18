import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { add, remove } from "../Redux/Slices/CartSlice";
import { toast } from "react-toastify";
import ProductData from "../assets/ProductData";

const Product = ({ id, name, price, image, status }) => {
  console.log("id", id);
  const dispatch = useDispatch();
  const { cart } = useSelector((state) => state);
  // Determine if the product is already in the cart directly within the button logic
  console.log("cart", cart);
  const itemExistsInCart = cart.some((id) => id === id);
  // console.log("items",itemExistsInCart);

  // Add item to cart
  const handleAddToCart = () => {
    dispatch(add({ id, name, price, image }));
    const val = ProductData.find(item => item.id == id);
    val.status = true;
    console.log("products", ProductData);
    toast.success("Item Added to cart");
  };
  useEffect(() => {
    console.log("---->")
  }, [handleAddToCart, handleAddToCart])

  const handleRemoveFromCart = () => {
    dispatch(remove({ id }));
    toast.success("Item Removed from your cart");
  };


  return (
    <div className="product-card border-2 px-2  py-2 flex flex-col items-center w-1/4 ">
      <div className=" object-cover">
        <img className="w-[290px] h-[300px]" src={image} alt="product image" />
      </div>
      <h3 className="font-semibold">{name}</h3>
        < p > { price }</p>

      {!status ? (
        <button
          className="px-2 py-1 bg-green-500 text-white rounded-lg"
          onClick={handleAddToCart}
        >
          Add To Cart
        </button>
      ) : (
        <button
          className="px-2 py-1 bg-red-500 text-white rounded-lg"
          onClick={handleRemoveFromCart}
        >
          Remove Item
        </button>
      )}
    </div>
  );
};

export default Product;
