import React from 'react'
import './Products.css'
import { useStateValue } from './StateProvider'
function Products({ id,title, image, price, rating }) {
  const [{ basket,user }, dispatch] = useStateValue();
  console.log("this is the basket item", basket);
  const addToBasket = () => {
    //dispatch the item into data layer
    dispatch({
      type: 'ADD_TO_BASKET',
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
      },
    });
  };
  return (
    <div className='products'>
        <div className='product__info'>
              <p>{title}</p>   
              <p className='product__price'>
                  <small>$</small>
                  <strong>{price}</strong>
              </p> 
              <div className='product__rating'>
                  {Array(rating).fill().map((_, i) =>(
                      <p>⭐️</p>
                  ))}
                  
                  
              </div>
    
          </div>
          <img  src={image} alt='' />
          
          <button onClick={addToBasket}>Add to cart</button>
    </div>
  )
}

export default Products
