import React from 'react';
import PropTypes from 'prop-types';
import { Button, Form, Message } from 'semantic-ui-react';
import { Link, Redirect } from 'react-router-dom';
import Dashboard from './Dashboard';



class LoginForm extends React.Component {
  
  constructor(props){
      super(props);
      this.state = {
          isLoading : false,
          logged_in : localStorage.getItem('token') ? true : false,
          username: '',
          password: ''
      }
  }

  componentDidMount(){
      debugger
      this.setState({ logged_in : localStorage.getItem('token') ? true : false });
        
      }
      
    componentWillUnmount(){
      this.setState({ logged_in : localStorage.getItem('token') ? true : false });
        if (this.state.logged_in){
          
            return(
                <Redirect to="/dashboard"
                logged_in={true} />
            );
        }

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
  render() {    
    let content;
    debugger
    if(this.props.logged_in){
       
       content = <Redirect to="/dashboard" user = {this.props.user}/>
    }
    else{
      content =  <div>
      <Form onSubmit={e => this.props.handle_login(e, this.state)}>
          
      <h3>Log In</h3>
      <Form.Field inline>
          <label htmlFor="username">Username</label>
          <input
          type="text"
          name="username"
          value = {this.state.username}
          onChange = {this.handle_change}
          />
      </Form.Field>

      <Form.Field inline>
              <label htmlFor="password">Password</label>
              <input
              type="password"
              name="password"
              value={this.state.password}
              onChange={this.handle_change}
              />
              <Button type="submit" className="ui button blue" 
              loading = {this.state.isLoading} primary> Login  </Button>
      </Form.Field>        
    </Form>
    <Link >Signup</Link>
    </div>
    }
    const Login = (e, data) => {
        debugger
        this.setState({
            isLoading : true
          })
        this.props.handle_login(e, data)
      }

    return (

   content
    );
  }
}

export default LoginForm;

LoginForm.propTypes = {
  handle_login: PropTypes.func.isRequired
};