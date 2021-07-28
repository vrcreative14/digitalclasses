import './App.css';
import React from "react";
import { BrowserRouter as Router, Switch, Route, Link, useParams, NavLink } from 'react-router-dom';
import Card from './Card.js';
import Nav from './Nav';
export default function HeaderMenu(props){
    return(
       
     
    <div className="" style={{backgroundColor: '#F7E260'}}>          

    <div style={{display: 'flex', margin: '5px', padding:'10px 10px 30px 10px', justifyContent:'space-evenly'}}>
   
           
               
                
               
     
 


                 <NavLink to="/home" >Home</NavLink>
                 <NavLink to="/students" >Enroll</NavLink>

                 <Link  to="/teachers"> Educate </Link> 
  
                 <Link to='/blogs'> Blogs </Link>

 
    
     <Nav
          logged_in={props.logged_in}
          display_form={props.display_form}
          handle_logout={props.handle_logout}
        />
  
</div>
</div>




    )
}