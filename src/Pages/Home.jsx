import React, { useEffect } from "react";
import data from "../assets/ProductData";
import Product from "../Components/Product";
import Cart from "./Cart";

const Home = () => {
  console.log("data",data);
  useEffect(()=>{
  console.log("=---->")
  },[Cart])

  return (
    <div className=" w-full flex flex-col">
      <h2 className="mx-auto text-3xl font-semibold underline my-4">
        Our Products
      </h2>
      <div className="products-wrapper w-full  flex flex-wrap ">
{data.map((item) => (
          <Product
            id={item?.id}
            name={item.name}
            price={item.price}
            image={item.image}
            status={item.status}
          />
        ))}
      </div>
    </div>
  );
};
export default Home;