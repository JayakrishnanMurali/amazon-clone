import React from 'react'
import './CheckoutProduct.css'
import { useStateValue } from './StateProvider';

function CheckoutProduct( {id, image, title, price} ) {

    const [{cart}, dispatch] = useStateValue();

    const removeFromCart = () => {
        dispatch ({
            type: 'REMOVE_FROM_CART',
            id: id,
        })
    }

    return (
        <div className="checkoutProduct">

            <img 
            className="checkoutProduct__image"
            src={image} 
            alt="" />

            <div className="checkoutProduct__info">
                <div className="checkoutProduct__mainDetails">
                    <h2 className="checkoutProduct__title">{title}</h2>
                    <h2 className="checkoutProduct__price"><span className="checkoutProduct__rupee">₹</span>{price}</h2>
                </div>
                <p className="checkoutProduct__inStock"><span>In Stock</span></p>
                <p className="checkoutProduct__freeShipping">Eligible for FREE Shipping</p>

                <img 
                src="https://m.media-amazon.com/images/G/31/marketing/fba/fba-badge_18px._CB485936079_.png" 
                alt="" 
                 />

                <small className="checkoutProduct__gift">
                    <input type="checkbox" /> This will be 
                    a gift 
                    <a href="/checkout" className="checkoutProduct__learnMoreLink">Learn more</a>
                </small>

                <button onClick={removeFromCart}>Remove from Cart</button>
            </div>
        </div>
    )
}

export default CheckoutProduct
