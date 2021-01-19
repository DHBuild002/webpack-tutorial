/*
console.log('Hello World')

const hello = () => {
    console.error('hello');
}
hello();
*/
//Day 4 - Creating a React App with Webpack

require("./styles/styles.css");
import React from "react";
import ReactDOM from "react-dom";

import './styles/styles.scss'
import './styles/styles.less'

class App extends React.Component {
  render() {
    return <div>Hello {this.props.name}</div>;
  }
}
var mountNode = document.getElementById("app");
ReactDOM.render(<App name="world" />, mountNode);

/* 
var mountNode = document.getElementById("app");
ReactDOM.render(<App name="world">, mountNode);
*/

// When setting this file up you must use Old JS syntax
