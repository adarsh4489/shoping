import React from 'react'
import data from "../assets/ProductData"
import Product from '../Components/Product'

const Home = () => {
  return (
    <div className=' w-full flex flex-col'>
      <h2 className='mx-auto text-3xl font-semibold underline my-4'>Our Products</h2>
     <div className='products-wrapper w-full  flex flex-wrap '>
        {data.map((item) => (
         
            <Product
              key={item.id}
              name={item.name}
              price={item.price}
              image={item.image}
            />
        
        ))
        }
     </div>
    </div>
  )
}

export default Home
