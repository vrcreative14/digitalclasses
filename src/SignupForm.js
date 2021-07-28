import React from 'react';
import PropTypes from 'prop-types';
import {Button, Form} from 'semantic-ui-react';
import { Redirect } from 'react-router-dom';


class SignupForm extends React.Component {
  state = {
    username: '',
    password: ''
  };

  handle_change = e => {
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
    if(this.props.logged_in){
    content = <div>
      <h3>You are currently logged in, logout from this account to Signup </h3>
    </div>
    }
    else{
      content = <div>
        <br/>
         <Form onSubmit={e => this.props.handle_signup(e, this.state)}>
           <br/>
        <h2>Sign Up </h2>
        <Form.Field inline>
        <label htmlFor="username">Username</label>
        <input
          type="text"
          name="username"
          value={this.state.username}
          onChange={this.handle_change}
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
        </Form.Field>
        <Button type="submit" className="ui blue button" >Register</Button>
      </Form>
    </div>
    }
    
    return (
     content
    );
  }
}

export default SignupForm;

SignupForm.propTypes = {
  handle_signup: PropTypes.func.isRequired
};