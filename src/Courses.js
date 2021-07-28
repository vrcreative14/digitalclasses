import React from 'react';
import Card from './Card.js';

class Courses extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            courses : []
        }
    }
    
    render(){
    debugger;
   
    return(
        <div className="card-container" image_url="">
       {
       this.props.courses.map( (i,index)  => (
                 <Card name={i} key={index} />
         )
        )
       }
        </div>
    );
   
        {/* <Card name={this.props.item} 
        image_url="https://storage.googleapis.com/vicinity-solutions.appspot.com/development-4536630_640.png" />
        <Card name={this.props.item}
        image_url = "https://upload.wikimedia.org/wikipedia/commons/0/05/Devops-toolchain.svg" />
        <Card name={this.props.item}
        image_url="https://upload.wikimedia.org/wikipedia/commons/8/81/Artificial_Intelligence_%26_AI_%26_Machine_Learning_-_30212411048.jpg" />
        <Card name={this.props.item}
        image_url="https://storage.googleapis.com/vicinity-solutions.appspot.com/embedded_01sq.jpg"/> */}
  
    }
}

export default Courses
 