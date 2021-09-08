import React from 'react'
import CurrencyFormat from 'react-currency-format'
import { getCartTotal } from './reducer';
import { useStateValue } from './StateProvider';
import './Subtotal.css'


function Subtotal() {

    const [{cart}, dispatch] = useStateValue();

    return (
        <div className="subtotal">
            <CurrencyFormat 
                renderText={(value) =>(
                    <>
                        <p>
                            Subtotal ({cart.length} <br /> items)):
                            <strong> {value} </strong>
                        </p>
                        <small className="subtotal__gift">
                            <input type="checkbox" /> This order 
                            contains a gift
                        </small>

                         <button>Proceed to Buy</button>

                    </>
                )}
                decimalScale={2}
                value={getCartTotal(cart)}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"₹"}
            />
        </div>
    )
}

export default Subtotal
