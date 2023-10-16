
import './Feedback.css';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import Footer from './Footer';

export default function () {
  const[username,setUsername]=useState('');
  const[email,setEmail]=useState('');
  const[about,setAbout]=useState('');
  const[improvement,setImprovement]=useState('');
  const[rating,setRating]=useState('');
  const[comment,setCommnet]=useState('');
  const navigate=useNavigate();

    const details={username,email,about,improvement,rating,comment}
     
    const formHolder =(e) =>{
      e.preventDefault();
   
  if(email.length===0 && username.length===0 && about.length===0 )
  {
    alert("Enter All the fields")
  }
  else
  {
    axios.post("http://localhost:8080/auth/postFeedback",details);
    navigate("/loginbtn")
  }
     
  }

  return (
    <div>
      <Link to='/que'><div className="continue-btn">BACK</div></Link>
       <div className='feedfull'>
         
           <div className='feedform'>
            <form onSubmit={formHolder}>
            <div className="rectangle4">
    <div className="heading4">FEEDBACK FORM</div>
    </div><br/><br/><br/><br/>
              
              <label>1. Name</label>
              <input type='text' placeholder='Enter your UserName' value={username} onChange={(e)=>setUsername(e.target.value)}required/><br/>
              
              <label>2. Email</label>
              <input type='email' placeholder='Enter your Email Address' value={email} onChange={(e)=>setEmail(e.target.value)} required/><br/>
              
              {/*<div className='check'>
               <input type='checkbox' className='checkinput'/>
                 <label className='checklabel'>1</label>
              </div>
              <div className='check'>
               <input type='checkbox' className='checkinput'/>
                 <label className='checklabel'>2</label>
              </div>
              <div className='check'>
               <input type='checkbox' className='checkinput'/>
                 <label className='checklabel'>3</label>
              </div>
              <div className='check'>
               <input type='checkbox' className='checkinput'/>
                 <label className='checklabel'>4</label>
              </div>
              <div className='check'>
               <input type='checkbox' className='checkinput'/>
                 <label className='checklabel'>5</label>
  </div>*/}

              <label>3. What do you like most about our website?</label>
               <div className='textinput'>
              <textarea type="text" name="" required="required" value={about} placeholder='Type your Message....' onChange={(e)=>setAbout(e.target.value)}></textarea>
              </div>

              <label>4. What improvements or changes would you suggest to make our website more user-friendly or helpful?</label>
               <div className='textinput'>
              <textarea type="text" name="" required="required" value={improvement} placeholder='Type your Message....' onChange={(e)=>setImprovement(e.target.value)}></textarea>
              </div>
                
                {/*<label>6. Would you recommend our website to others?</label>
                <div className='check'>
               <input type='checkbox' className='checkinput'/>
                 <label className='checklabel'>Yes</label>
              </div>
              <div className='check'>
               <input type='checkbox' className='checkinput'/>
                 <label className='checklabel'>No</label>
              </div>
              <div className='check'>
               <input type='checkbox' className='checkinput'/>
                 <label className='checklabel'>May be</label>
               </div>*/}

              <label>5. On a scale of 1 to 5, how would you rate your overall experience with our website, with 1 being very dissatisfied and 5 being very satisfied?</label>
              <input type='text' placeholder='Enter Rating' value={rating} onChange={(e)=>setRating(e.target.value)} required/><br/>

              <label>6. Do you have any additional comments or suggestions for us?</label>
              <div className='textinput'>
              <textarea type="text" name="" required="required" value={comment} placeholder='Type your Message....' onChange={(e)=>setCommnet(e.target.value)}></textarea>
              
              </div>
            <div className='buttonform'>
              <input type='submit'/>
           </div>
              </form>
            </div>
       </div><br/><Footer/>
    </div>
  )
}