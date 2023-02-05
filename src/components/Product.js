import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import './Product.css'

const Product=() => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  useEffect(() => {
    setLoading(true);
    axios({
      method: "GET",
      url:"https://fakestoreapi.com/products"
    }).then(res => {
      console.log(res.data)
      setData(res.data)
    }).catch(e => console.log(e))
    .finally(()=>setLoading(false))
  },[])
  return (
    <div className='product__container'>
      {loading && (<div>{" "}<h2>Loading.....</h2></div>)}
      {data.map((product) => (
        <div key={product.id} className='card'>
          <div><img src={product.image} alt='#'/></div>
          <div className='card__description'>
            <h6>{product.title}</h6>
            <h6>{`Price: ${product.price}`}</h6>
            <h6>{`Category: ${product.category}`}</h6>
          </div>
        </div>
      ))}
      <p>Products here</p>
    </div>
  );
}

export default Product
