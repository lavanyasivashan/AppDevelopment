import React from 'react'
import './a.css';
import { Link } from 'react-router-dom';
import Footer from './Footer';
function Faq() {
  return (
    <div className='faqq'>
    <Link to='/que'><div className="continue-btn">BACK</div></Link><div className="faq">
    <div className="rectangle4">
    <div className="heading4">FAQ</div>
    </div><br/><br/><br/><br/>
   <input id="faq-a" type="checkbox" />
   <label htmlFor="faq-a">
     <p className="faq-heading">what are the General Information?</p>
     <div className="faq-arrow" />
     <p className="faq-text">
      <br />
       <br />
       You agree to receive comprehensive advice and support regarding products and services. You consent to Vehicle repair hub collating the data that you have submitted here to create a customer profile and using it in order to: provide you with personalized information – via e-mail, post, mobile messaging services, SMS or push notification – about products and services
       </p>
   </label>
   <input id="faq-b" type="checkbox" />
   <label htmlFor="faq-b">
     <p className="faq-heading">
     How much will it cost to have my car serviced at Vehicle repair hub dealership?
     </p>
     <div className="faq-arrow" />
     <p className="faq-text">
   
       <br />
       <br />
       The cost of periodic maintenance of each model/ service wise can be checked at Vehicle repair hub Cars India website via the given link https://www.vehiclerepairhub.com/Vehicle repair hub/owners/costofmaintenance. You may also refer warranty section in Vehicle repair hub CONNECT App to know the cost of maintenance. An estimate on general repairs required on the car can be given by the dealer only after a thorough check-up.
     </p>
   </label>
   <input id="faq-c" type="checkbox" />
   <label htmlFor="faq-c">
     <p className="faq-heading">What all charges to be paid during the free service?</p>
     <div className="faq-arrow" />
     <p className="faq-text">
      
       <br />
       <br />
       The free Service implies zero labor charge during the service of the Car. However, parts & consumables are chargeable.
     </p>
   </label>
   <input id="faq-d" type="checkbox" />
   <label htmlFor="faq-d">
     <p className="faq-heading">
     Are Value Added Services (VAS) part of periodic maintenance?
     </p>
     <div className="faq-arrow" />
     <p className="faq-text">
        <br />
       <br />
       Value Added Services (VAS) are car renewal and enrichment services to enhance the condition of Honda Car. These services are not a part of periodic maintenance and are not mandatory. These services can be availed as per your choice on a paid basis.
     </p>
   </label>
   <input id="faq-e" type="checkbox" />
   <label htmlFor="faq-e">
     <p className="faq-heading">My car service is due. How to take the appointment from the dealership?</p>
     <div className="faq-arrow" />
     <p className="faq-text">
        <br />
       <br />
       Kindly contact the nearest dealership as per the details available on the official vehiclerepairhub website by clicking on https://www.hondacarindia.com/vehiclerepairhub/owners/bookaservice. Alternately, you can book the appointment via Honda CONNECT App in the 'Book Service Tab'. Dealer will contact you and fix the appointment accordingly.
     </p>
   </label>
   <input id="settings" type="checkbox" />
   <input id="faq-f" type="checkbox" />
   <label htmlFor="faq-f">
     <p className="faq-heading">
     How often should I get my vehicle serviced ? What all jobs are carried out during periodic maintenance?
     </p>
     <div className="faq-arrow" />
     <p className="faq-text">
        <br />
       <br />
       For details on the service schedule & jobs to be done, you may refer to the periodic maintenance section of the Owner's Manual.
     </p>
   </label>
 </div><br/><br/><Footer/></div>
  )
}

export default Faq