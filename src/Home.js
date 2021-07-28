
import React from 'react';
import './App.css';
import logo from './logo.svg';
import Card from './Card.js';
import Courses from './Courses.js'
import { Divider, Grid, Menu, Segment } from 'semantic-ui-react';
export default class Home extends React.Component {
    constructor(props){
        super(props);
        this.setContent = this.setContent.bind(this);
        this.state = { 
            activeItem: 'school',
            activeContent : '',
        }
    }
    getCourses = (topic) => {
        
        switch (topic.toLowerCase()) {
            case "web development":
                return ['Django','Ruby on Rails','PHP','Node.js','.NET Framework']                 
               
            case "machine learning":
                return ['Data Science', 'Deep Learning', 'Natural Learning Process']
            case "school":
                return ['Class 5-8', 'Class 9-10', 'Class 11-12']
                break;
            case "graduation":
                return ['Engineering', 'Humanities', 'Medicine']
                break;
            case "blockchain":
                return ['Introduction & History','Application of blockchain','Understanding Cryptocurrency']
            default:
                break;
        }
    }
    handleItemClick = (e, { name }) => {
        debugger
        this.setState({ activeItem: name })
        this.setContent(name)
    }
    componentDidMount(){
//var element = document.getElementById("watchme");
// this.addEventListener("animationstart", listener, false);
// this.addEventListener("animationend", listener, false);
// this.addEventListener("animationiteration", listener, false);
// this.className = "slidein";
let e = ""
fetch('https://jsonplaceholder.typicode.com/todos/1')
.then(response => response.json())
.then((json) => {
    console.log(json)
    debugger
     e = (json)
    console.log('e = '+ e['userId'] + e['title'])
})
this.setContent(this.state.activeItem)
}

    componentWillUnmount(){
        
    }
    setContent = (data) => {
        let courses = this.getCourses(data)
        this.setState({
             activeContent : <Courses item={data} courses={courses}/>
            });           
    }
    render (){
        
        const { activeItem } = this.state
        return(
            <>
            <Grid>
        <Grid.Column width={4}>
            <br/>
            <br/>
          <Menu fluid vertical tabular>
            <Menu.Item
              name='school'
              active={activeItem === 'school'}
              onClick={this.handleItemClick}
            />
            <Menu.Item
              name='graduation'
              active={activeItem === 'graduation'}
              onClick={this.handleItemClick}
            />
            <Menu.Item
              name='web development'
              active={activeItem === 'web development'}
              onClick={this.handleItemClick}
            />
            <Menu.Item
              name='blockchain'
              active={activeItem === 'blockchain'}
              onClick={this.handleItemClick}
            />
            <Menu.Item
              name='Machine Learning'
              active={activeItem === 'Machine Learning'}
              onClick={this.handleItemClick}
            />
          </Menu>
        </Grid.Column>

        <Grid.Column stretched width={12}>
            <br/>
            <Divider horizontal>Tutorials</Divider>
          <Segment>
         
            <br/>          
           {this.state.activeContent}
          </Segment>
        </Grid.Column>
      </Grid>
            <div className="" style={{display:"flex", flexDirection:"column"}}>
              
               <div className="card-container" image_url="">
                    <Card name="Web Development" 
                    />
                    <Card name="Devops"
                    image_url = "https://upload.wikimedia.org/wikipedia/commons/0/05/Devops-toolchain.svg" />
                    <Card name="Machine Learning & Robotics"
                    image_url="https://upload.wikimedia.org/wikipedia/commons/8/81/Artificial_Intelligence_%26_AI_%26_Machine_Learning_-_30212411048.jpg" />
                    <Card name="Embedded Electronics"
                    image_url="https://storage.googleapis.com/vicinity-solutions.appspot.com/embedded_01sq.jpg"/>
              </div>
              <Divider horizontal>Career Counseling</Divider>
              <div className="card-container " style={{display:'flex', flexDirection:'column'}}>
                  <div className="animated-card" style={{display: 'flex'}}>
                    <Card 
                    image_url="https://storage.googleapis.com/vicinity-solutions.appspot.com/programming_kids_01sq.jpg" />
                    <p className="animated-card-right">
                    Language teaches children how to communicate and teaches logical thinking. Language also strengthens both verbal and and written skills.  Children should be exposed to different languages at an early age. It helps them to understand the world around them better. Coding has a language all its own.  Every letter in the Alphabet has a special formula of 0’s and 1’s that represent it. These 0’s and 1’s give the technology around us directions on how to perform.  What better way for our children to understand why and how the technology around them operates than by learning to code and speaking to the technology around them.
                    </p>
                  </div>
                   
                  <div className="animated-card">
                    <Card />
                    <p className="animated-card-right">vgcvg</p>
                  </div>
                  <div className="animated-card">
                    <Card />
                    <p className="animated-card-right">Kya bhai</p>
                  </div>
                  <div className="animated-card">
                    <Card />
                    <p className="animated-card-right">vgcvg</p>
                  </div>
              </div>
            </div>
            </>
        )
    }
}