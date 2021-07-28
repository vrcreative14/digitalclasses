import logo from './logo.svg';
import './App.css';
import HeaderMenu from './HeaderMenu.js';
import Card from './Card.js';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import Home from './Home.js';
import React,{Component} from 'react';
import LoginForm from './LoginForm.js'
import SignupForm from './SignupForm.js'
import Nav  from './Nav';
import Signin from './Signin';
import Dashboard from './Dashboard.js';


class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      displayed_form : '',
      logged_in : localStorage.getItem('token') ? true : false,
      username : '',
      password:''
    };
  }

  componentDidMount(){
    this.setState({ logged_in : localStorage.getItem('token') ? true : false });
    debugger
    if (this.state.logged_in){
      fetch('http://127.0.0.1:8000/accounts/current_user/',{
        headers:{
          Authorization : `JWT${localStorage.getItem('token')}`
        }
      })
      .then(res => res.json())
      .then(json => {
        this.setState({ username:json.username });
      });
    }
  }
  componentWillUnmount(){
    this.setState({ logged_in : localStorage.getItem('token') ? true : false });
   
  }
  

  handle_login = (e, data) => {
    debugger
    
    fetch('http://127.0.0.1:8000/token-auth/',{
      method:'POST',
      headers:{
        'Content-Type':'application/json'
      },
      body: JSON.stringify(data)
    })
    .then(res => res.json())
    .then(json => {
      localStorage.setItem('token', json.token);
      debugger
      this.setState({
        logged_in: true,
        displayed_form: '',
        username: json.user.email
      }); 
     
    });
  }

  handle_change = e => {
    debugger
    const name = e.target.name;
    const value = e.target.value;
    this.setState(prevstate => {
      const newState = { ...prevstate };
      newState[name] = value;
      return newState;
    });
  };

  handle_signup = (e, data) => {
    e.preventDefault();
    fetch('http://127.0.0.1:8000/accounts/users/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
      .then(res => res.json())
      .then(json => {
        debugger
        localStorage.setItem('token', json.token);
        this.setState({
          logged_in: true,
          displayed_form: '',
          username: json.username
        });
      });
  };

  handle_logout = () => {
    localStorage.removeItem('token');
    this.setState({ logged_in: false, username: '' });
  };

  display_form = form => {
    this.setState({
      displayed_form: form
    });
  };
  
render(){
  let form;
  switch(this.state.displayed_form){
    case 'login':
      form = <LoginForm handle_login={this.handle_login} logged_in={this.state.logged_in}/>
      break;
    case 'signup':
      form = <SignupForm handle_signup={this.handle_signup} logged_in={this.state.logged_in} />
      break;
    default:
      form = null;
  }
  return (
    <div className="App">
    <Router>
     <HeaderMenu logged_in={this.state.logged_in}
       display_form={this.display_form}
       handle_logout = {this.handle_logout} />
            {/* <h3>
          {this.state.logged_in
            ? `Hello, ${this.state.username}`
            : 'Please Log In'}
            </h3> */}
      <Switch>
        <Route exact path={"/students"}>
           <Card name="student"/> 
        </Route>
        <Route exact path={"/teachers"}>
           <Card name="teacher"/> 
        </Route>
        <Route exact path={"/home"}>
          <Home/>
        </Route>
        <Route exact path={"/jobs"}>
          <Home/>
        </Route>
        <Route exact path={"/dashboard"}>
          <Dashboard logged_in = {this.state.logged_in}/>
        </Route>
       
        <Route exact path={"/login"}>
          {/* <Signin handle_login={this.handle_login} handle_change={this.handle_change} /> */}
          <LoginForm 
        logged_in = {this.state.logged_in}
        handle_login = {this.handle_login}  
        /> 
        
        </Route>
        <Route exact path={"/signup"}>
          {/* <Signin handle_login={this.handle_login} handle_change={this.handle_change} /> */}
          <SignupForm 
        handle_signup={this.handle_signup} 
        logged_in={this.state.logged_in} 
        /> 
        
        </Route>
        <Route exact path={"/"}>
          <Home/>
        </Route>
      </Switch>
    </Router>
</div>  
);
}
}

export default App;
