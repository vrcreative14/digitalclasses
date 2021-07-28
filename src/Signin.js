import React, { useState } from 'react';
import { Button, Form, Message } from 'semantic-ui-react';
import LoginForm from './LoginForm';

function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(";");
    for (var i = 0; i < ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) == " ") {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
}

const Getid = () => {
    debugger
console.log('Logging in')
const csrftoken = getCookie("csrftoken");
let body = {
    "email":'vrcreative14@gmail.com',
    "pft":'123456'
}
fetch('http://127.0.0.1:8000/api/get/id/',{
    method: 'GET',
    headers:{
        'Content-Type':'application/json',
        "X-CSRFToken": csrftoken,
        "Accept-Encoding": "gzip,deflate,br",
    },
    mode: 'cors',
    // body:JSON.stringify(body)
})
.then(response => response.json())
.then((json) => {
    console.log(json)
})
}

const Login = () => {
    debugger
console.log('Logging in')
const csrftoken = getCookie("csrftoken");
let body = {
    "email":'vrcreative14@gmail.com',
    "pft":'123456'
}
fetch('http://127.0.0.1:8000/api/login/',{
    method: 'POST',
    headers:{
        'Content-Type':'application/json',
        "X-CSRFToken": csrftoken,
        "Accept-Encoding": "gzip,deflate,br",
    },
    mode: 'cors',
    body:JSON.stringify(body)
})
.then(response => response.json())
.then((json) => {
    console.log(json)
})
}

 class Signin extends React.Component {
            constructor(props){
                super(props);
               
            }
    render(){
        return (
            <></>
        );
    
            }
}

export default Signin