import React from 'react'
import './Subtotal.css'
import CurrencyFormat from 'react-currency-format';
import { useStateValue } from './StateProvider';
import { getBasketTotal } from './reducer';
import { Link } from 'react-router-dom';


function Subtotal() {
    const [{ basket, user }, dispatch] = useStateValue();
    
    return (
        
        <div className='subtotal'>
            <CurrencyFormat
                renderText={(value) => (
                    <>
                        <p>
                            Subtotal({basket.length} items):
                            <strong>{value}</strong>
                        </p>
                        <small className='subtotal__gift'>
                            <input type='checkbox' />This order contains a gift
                        </small>
                    </>
                )}
                decimalScale={2}
                value={getBasketTotal(basket)}
                displayType = {"text"}
                thousandSeparator = {true}
                prefix = {"$"}
            />
            <Link to={!user ? '/login' : '/payment'}>
                <form action="/create-checkout-session" method="POST">
                <button>Proceed to Checkout</button>
                </form>
            
            </Link>
          
        </div>
  )
}

export default Subtotal
