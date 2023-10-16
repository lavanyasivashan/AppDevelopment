import{BrowserRouter,Routes,Route} from 'react-router-dom';
import React from 'react';
import Login from './login';
import Register from './register';
import NavBar from './layout/NavBar';
import Footer from './layout/Footer';
import Cities from './layout/Cities';
import Sidebar from './layout/Sidebar';
import Home from './layout/Home';
import Contact from './layout/Contact';
import Services from './layout/Services';
import About from './layout/About';
import Solution from './layout/Solution';
import Feedback from './layout/Feedback';
import Youtube from './layout/Youtube';
import PrivacyPolicy from './layout/PrivacyPolicy'

import Faq from './layout/Faq';
import BillingStatus from './layout/BillingStatus';


function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/loginbtn" element={<NavBar/>}/>
        <Route path="/footer" element={<Footer/>}/>
        <Route path="/que" element={<Sidebar/>}/>
      <Route path="/product" element={<Home/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/service' element={<Services/>}/>
      <Route path="/cities" element={<Cities/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/soln" element={<Solution/>}/>
      <Route path="/vid" element={<Youtube/>}/>
      <Route path="/feed" element={<Feedback/>}/>
      <Route path="/privacy" element={<PrivacyPolicy/>}/>
      <Route path="/a" element={<Faq/>}/>
      <Route path="/b" element={<BillingStatus/>}/>
      </Routes>
     
    
    </BrowserRouter>
  </div>
  );
}

export default App;