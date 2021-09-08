import React from 'react'
import './Home.css'
import Product from './Product'

function Home() {

    

    return (
        <div className="home">
            <div className="home__container">
                <img 
                className="home__image"
                src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" 
                alt="Home Banner" />
            

                <div className="home__row">
                    <Product 
                    id="1872789"
                    title='Dell 14 (2021) i3-1125G4 2in1 Touch Screen Laptop'
                    price={46690}
                    image="https://m.media-amazon.com/images/I/71hFNVZKcoS._AC_UL480_FMwebp_QL65_.jpg"
                    rating={4}
                    />

                    <Product 
                    id="187269989"
                    title='Redmi 9 | 2.3GHz Mediatek Helio G35 Octa core Processor'
                    price={14799}
                    image="https://images-eu.ssl-images-amazon.com/images/I/41sGASjc4-L.jpg"
                    rating={5}
                    />
                    
                </div>

                <div className="home__row">
                    <Product 
                    id="18753429989"
                    title="Fastrack | Casual Analog Black Dial Men's Watch"
                    price={1499}
                    image="https://m.media-amazon.com/images/I/71ZGKYk9PpL._AC_UL480_FMwebp_QL65_.jpg"
                    rating={5}
                    />

                    <Product 
                    id="18726353329989"
                    title="Adidas | Men's Lite Racer 2.0 Running Shoe"
                    price={1828}
                    image="https://m.media-amazon.com/images/I/71uhJwOzxtL._AC_UL480_FMwebp_QL65_.jpg"
                    rating={5}
                    />

                    <Product 
                    id="1872699809759"
                    title="Nature's Nectar Raw Organic Honey 400g"
                    price={465}
                    image="https://images-eu.ssl-images-amazon.com/images/I/41pFtJdAXFS._AC_SX184_.jpg"
                    rating={3}
                    />
                </div>

                <div className="home__row">
                    <Product 
                    id="1872699232289"
                    title='Samsung 34-inch (86.40cm) Curved Monitor'
                    price={69999}
                    image="https://m.media-amazon.com/images/I/81TjRLHaz1L._AC_UY327_FMwebp_QL65_.jpg"
                    rating={4}
                    />
                </div>

            </div>

        </div>
    )
}

export default Home
