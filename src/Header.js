import { Search, ShoppingCartOutlined } from '@material-ui/icons'
import React from 'react'
import './Header.css'

function Header() {
    return (
        <div className="header">
            
            <img className="header__logo" 
            src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" 
            alt="Amazon logo" />

            <div className="header__search">
                <input type="text" className="header__searchInput" />
                <Search className="header__searchIcon" />
            </div>

            <div className="header__nav">
                <div className="header__option">

                    <span className="header__optionLineOne">
                        Hello Guest
                    </span>

                    <span className="header__optionLineTwo">
                        Sign In
                    </span>

                </div>
                    
                <div className="header__option">
                     
                    <span className="header__optionLineOne">
                        Returns
                    </span>

                    <span className="header__optionLineTwo">
                        & Orders
                    </span>

                </div>

                <div className="header__option">
                     
                    <span className="header__optionLineOne">
                        Your
                    </span>

                    <span className="header__optionLineTwo">
                        Prime
                    </span>

                </div>

                <div className="header_optionCart">
                    <ShoppingCartOutlined className="header__cartIcon" />
                    <span className="header__optionLineCount header__cartCount">
                        0
                    </span>    
                    <span className="header__optionLineTwo header__cartName">
                        Cart
                    </span>    
                </div>

            </div>

        </div>
    )
}

export default Header
