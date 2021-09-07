import React from 'react'
import './Checkout.css'


function Checkout() {
    return (
        <div className="checkout">
            <div className="checkout__left">
                <img 
                className="checkout__ad"
                src="https://images-eu.ssl-images-amazon.com/images/G/31/img19/MAI/Sweepstakes/Nov/MEDH_SWM_1500x200.jpg" alt="" />

                <div>
                    <h2 className="checkout__title">
                        Shopping Cart
                    </h2>

                    {/* CartItems */}

                </div>
            </div>

            <div className="checkout__right">
                <h2>Subtotal</h2>
            </div>
        </div>
    )
}

export default Checkout
