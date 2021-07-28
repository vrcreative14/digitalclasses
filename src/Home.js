
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
            activeItem: 'web development',
            activeContent : '',
        }
    }
    getCourses = (topic) => {
        
        switch (topic.toLowerCase()) {
            case "web development":
                return {
                  'Django':"django-339744_640.png",
                  
                  'PHP':"code-1839406_640.jpg",
                  'Node.js':"node-js-736399_640.png",
                  '.NET Framework':"development-4536630_640.png"
                }             
            
            case "machine learning":
               // return ['Data Science', 'Deep Learning', 'Natural Learning Process']
               return {
                'Data Science':"Machine_Learning_01s.jpg",
                'Deep Learning':"Machine_Learning_01s.jpg",
                'Natural Learning Process':"Machine_Learning_01s.jpg",
                
                
              }
            case "school":
                //return ['Class 5-8', 'Class 9-10', 'Class 11-12']
                return {
                  'Class 5-8':"primary_students_01s.jpg",
                  'Class 9-10':"primary_students_01s.jpg",
                  'Class 11-12':"senior_student_01s.jpg",
                }
                break;
            case "graduation":
                //return ['Engineering', 'Humanities', 'Medicine']
                return {
                  'Engineering':"embedded_01sq.jpg",
                  'Humanities':"",
                  'Medicine':"medicines_pharma_01s.jpg",
                }
                break;
            case "blockchain":
                //return ['Introduction & History','Application of blockchain','Understanding Cryptocurrency']
                return {
                  'Introduction & History':"https://storage.googleapis.com/vicinity-solutions.appspot.com/django-339744_640.png",
                  'Application of blockchain':"https://storage.googleapis.com/vicinity-solutions.appspot.com/django-339744_640.png",
                  'Understanding Cryptocurrency':"https://storage.googleapis.com/vicinity-solutions.appspot.com/django-339744_640.png",                 
                }
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
      <br/>
      <Divider horizontal>Popular Courses</Divider>
            <div className="" style={{display:"flex", flexDirection:"column"}}>
              
               <div className="card-container" image_url="">
                    <Card name="Web Development" 
                    image_url="https://storage.googleapis.com/vicinity-solutions.appspot.com/development-4536630_640.png"/>
                    <Card name="Devops"
                    image_url = "https://upload.wikimedia.org/wikipedia/commons/0/05/Devops-toolchain.svg" />
                    <Card name="Machine Learning & Robotics"
                    image_url="https://upload.wikimedia.org/wikipedia/commons/8/81/Artificial_Intelligence_%26_AI_%26_Machine_Learning_-_30212411048.jpg" />
                    <Card name="Embedded Electronics"
                    image_url="https://storage.googleapis.com/vicinity-solutions.appspot.com/embedded_01sq.jpg"/>
              </div>
              <Divider horizontal>Career Counseling</Divider>
              <div className="card-container " style={{display:'flex', flexDirection:'column'}}>
              <div className="animated-card">
                
                    <Card image_url="https://storage.googleapis.com/vicinity-solutions.appspot.com/Machine_Learning_01s.jpg"/>
                    <p className="animated-card-right">
                    <h3>Growth in AI technology in Covid era</h3>
                    Today, AI technologies and tools play a key role in every aspect of the COVID-19 crisis response:

                    understanding the virus and accelerating medical research on drugs and treatments

                    detecting and diagnosing the virus, and predicting its evolution

                    assisting in preventing or slowing the virus' spread through surveillance and contact tracing
                    </p>
                  </div>
                  
                  <div className="animated-card" style={{display: 'flex'}}>
                    <Card 
                    image_url="https://storage.googleapis.com/vicinity-solutions.appspot.com/programming_kids_01sq.jpg" />
                    <p className="animated-card-right">
                    <h3>Is teaching Kids from Junior classes a merit</h3>
                    Language teaches children how to communicate and teaches logical thinking. Language also strengthens both verbal and and written skills.  Children should be exposed to different languages at an early age. It helps them to understand the world around them better. Coding has a language all its own.  Every letter in the Alphabet has a special formula of 0’s and 1’s that represent it. These 0’s and 1’s give the technology around us directions on how to perform.  What better way for our children to understand why and how the technology around them operates than by learning to code and speaking to the technology around them.
                    </p>
                  </div>
                   
                  <div className="animated-card">
                    <Card image_url="https://storage.googleapis.com/vicinity-solutions.appspot.com/Machine_Learning_01s.jpg"/>
                    <p className="animated-card-right">
                    <h3>Importance of mathematics in Data Science</h3>
                    Now a days, virtually everything has a quantity attached to it – be it campaign effectiveness, operational efficiency, human resource productivity, financial management, sales forecasts and so on. In fact, factors or variables which are not quantifiable measured become very different to track for the business. Hence, basic statistics and mathematics form an integral part of data science.

                    Now, mathematics and statistics are not the same; and the relevance of each of these in data science is different. The subsequent section would focus on the key difference between the two concepts; and drill-down on the implication & role of statistics in data science.
                    </p>
                  </div>
               
                  <div className="animated-card">
                    <Card image_url="https://upload.wikimedia.org/wikipedia/commons/a/a9/Virion_morphology_of_murine_coronavirus_%28gen._Betacoronavirus%29.png"/>
                    <p className="animated-card-right">
                    <h3>Future of virology</h3>
                    Virology, as a programme, is typically not offered at the undergraduate level, but students can pursue microbiology at the UG level as it is being taught as one of the sub-topics of microbiology. Alternatively, students can also pursue biotechnology or MBBS at the UG level if they are interested in virology. At this level, students can get various jobs, such as research assistants or technical assistants in laboratories, microbiologists, etc.
                    </p>
                  </div>
              </div>
            </div>
            </>
        )
    }
}