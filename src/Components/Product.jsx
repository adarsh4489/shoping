import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { add, remove } from '../Redux/Slices/CartSlice';

const Product = ({ id, name, price, image }) => {
  const dispatch = useDispatch();
  const { cart } = useSelector((state) => state);

  // Determine if the product is already in the cart directly within the button logic
  const itemExistsInCart = cart.some((item) => item.id === id);

  // Add item to cart
  const handleAddToCart = () => {
    dispatch(add({ id, name, price, image }));
  };

  // Remove item from cart
  const handleRemoveFromCart = () => {
    dispatch(remove({ id }));
  };

  return (
    <div className="product-card border-2 px-2 py-2 flex flex-col items-center">
      <div className="px-2 py-2 object-cover">
        <img className="" src={image} alt="product image" />
      </div>
      <h3 className="font-semibold">{name}</h3>
      <p>{price}</p>

      {/* Conditionally render buttons based on whether the product is in the cart */}
      {!itemExistsInCart ? (
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
