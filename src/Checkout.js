import React from 'react'
import './Checkout.css'
import CheckoutProduct from './CheckoutProduct'
import { useStateValue } from './StateProvider'
import Subtotal from './Subtotal'


function Checkout() {

    const [{cart}, dispatch] = useStateValue();
    
     function numberWithCommas (x) {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }

    return (
        <div className="checkout">
            <div className="checkout__left">
                <img 
                className="checkout__ad"
                src="https://images-eu.ssl-images-amazon.com/images/G/31/img19/MAI/Sweepstakes/Nov/MEDH_SWM_1500x200.jpg" alt="" />

                <div>
                    <div className="checkout__mainDetails">
                    <h2 className="checkout__title">
                        Shopping Cart
                    </h2>
                    <p className="checkout__price">Price</p>
                    </div>

                    {cart.map(item => (

                    <CheckoutProduct 
                        id={item.id}
                        title={item.title}
                        image={item.image}
                        price={numberWithCommas(item.price)}
                    />
                    ))}


                </div>
            </div>

            <div className="checkout__right">
                <Subtotal />
            </div>
        </div>
    )
}

export default Checkout
