import { Search, ShoppingCartOutlined } from '@material-ui/icons'
import React from 'react'
import { Link } from 'react-router-dom'
import { auth } from './firebase'
import './Header.css'
import { useStateValue } from './StateProvider'

function Header() {

    const [{cart, user }, dispatch] = useStateValue();

    const handleAuthentication = () => {
        if(user){
            auth.signOut();
        }
    }

    return (
        <div className="header">
            
            <Link to='/'>
            <img className="header__logo" 
            src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" 
            alt="Amazon logo" />
            </Link>

            <div className="header__search">
                <input type="text" className="header__searchInput" />
                <Search className="header__searchIcon" />
            </div>

            <div className="header__nav">
                <Link to={!user && '/login'}> 
                    <div onClick={handleAuthentication} className="header__option">

                        <span className="header__optionLineOne">
                            {user ? `Hello ${user?.email}`  : 'Hello Guest'}
                        </span>

                        <span className="header__optionLineTwo">
                            {user ? 'Sign Out' : 'Sign In'}
                        </span>

                    </div>
                </Link>
                    
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
                <Link to="/checkout">
                <div className="header_optionCart">
                    <ShoppingCartOutlined className="header__cartIcon" />
                    <span className="header__optionLineCount header__cartCount">
                        {cart?.length}
                    </span>    
                    <span className="header__optionLineTwo header__cartName">
                        Cart
                    </span>    
                </div>

                </Link>

            </div>

        </div>
    )
}

export default Header
