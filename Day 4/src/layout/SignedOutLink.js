import React from 'react'
import { NavLink } from 'react-router-dom';
const SignedOutLink=()=>{
    return(
        <ul className='right'>
         <li><NavLink to='/que'>Dashboard</NavLink></li>
             <li><NavLink to='/footer' className='btn btn-floating pink lighten-1'>Us</NavLink></li>
            <li><NavLink to='/'>LogOut</NavLink></li>
     
        </ul>
           
     
    )
}
export default SignedOutLink;