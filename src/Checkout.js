import React from 'react'
import './Checkout.css'
import Subtotal from './Subtotal';
import CheckProduct from './CheckProduct';
import { useStateValue } from './StateProvider';
import FlipMove from 'react-flip-move';
function Checkout() {
    const [{ basket,user }, dispatch] = useStateValue();
  return (
    <div className='checkout'>
          <div className='checkout__left'>
              <div>
                  <h3>Hello , {user?.email}</h3>
                  <h2 className='checkout__title'>Your Shopping Basket</h2>
                
                  {basket.map(item => (
                    
                      <CheckProduct
                          id={item.id}
                          title={item.title}
                          image={item.image}
                          price={item.price}
                          rating = {item.rating}
                      
                      />
                      
                  ))}
                   
              </div>
              
          </div>
          
          <div className='checkout__right'>
              <Subtotal/>
          </div>

    </div>
  )
}

export default Checkout;
