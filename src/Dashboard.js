import React from 'react';
import { Redirect } from 'react-router';
import LoginForm from './LoginForm';


//const isLoggedIn = this.props.logged_in

export default class Dashboard extends React.Component {
    
    constructor(props){
        super(props);
    }

 render(){
     let content;
    //  if(this.props.user.user_type === 'teacher'){
         content = <div>
             <h3>Your uploaded tutorials</h3>
         </div>
    //  }
    //  else{
         content = <div>
             <div>
               <h3>Your Ongoing Tutorials</h3>
             </div>
             <div>
                 <h3>Your Assignments</h3>
             </div>
         </div>
    //  }
     if (this.props.logged_in)
     return(
        
             content
       
     );
     else{
     return(
      <Redirect to="/login"></Redirect>
     );
     }
 }
    
}