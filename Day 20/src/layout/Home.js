import React from 'react';
import Product from './Product'; // Adjust the path as needed
import Cart from './Cart'; // Adjust the path as needed
import { Link } from 'react-router-dom';
import './Home.css';
import Footer from './Footer';



const Home = () => {
  const products = [
    { id: 1, name: 'BASIC CAR SERVICE', description:'1 year maintenance service,Free Pick & Drop Once,50% discount on Wheel Alignment & Balancing Labor,One Complimentary car wash ,Insurance renewal benefit Worth INR 1 000', price: 100.0 },
    
    { id: 2, name: 'PREMIUM CAR SERVICE', description: 'Savings of up to 25%, 5th-year maintenance-free, 5 years of Servicing at the Cost of 4, Replacement of wear and tear parts', price: 200.0 },
    
  ];

  return (
    <div className='e'>
     <Link to='/que'><div className="continue-btn">BACK</div></Link>
     <h1>
    <div className="rectangle4">
    <div className="heading4">PRODUCT LIST</div>
    </div></h1><br/>
      {products.map((product) => (
        <Product key={product.id} product={product} />
      ))}
      <Cart /><br/><br/><br/><br/>
    <Footer/>
    </div>
  );
};

export default Home;