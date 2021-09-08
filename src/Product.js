import React from 'react'
import './Product.css'
import { useStateValue } from './StateProvider'

function Product({id,title,image,price,rating }) {

    const [{ cart }, dispatch] = useStateValue();

    const addToCart = () => {
        dispatch({
            type: 'ADD_TO_CART',
            item: {
                id: id,
                title: title,
                image: image,
                price: price,
                rating: rating,
            },
        })
    }

    function numberWithCommas (x) {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }

    return (
        <div className="product">

            <img 
            src={image}
            alt="" />

            <div className="product__info">
                <p>{title}</p>

                <div className="product__rating">
                    {Array(rating).fill().map((_,i) => (
                        <p>⭐</p>    
                    ))}
                  
                </div>

                <p className="product__price">
                    <small>₹</small>
                    <strong>{numberWithCommas(price)}</strong>
                </p>
            </div>

            <button 
            onClick={addToCart}
            className="product__cartBtn" >
                Add to Cart
            </button>
        
        </div>
    )
}

export default Product
