import React, { Component } from 'react';
import { observer } from 'mobx-react'
//import DevTools from 'mobx-react-devtools';
//import logo from './logo.svg';
//import './App.css';
import LienzoContainer from './containers/Lienzo';

class App extends Component {
  render() {
    return (
      <div>
      <LienzoContainer>
      
      </LienzoContainer>
      </div>
    );
  }
}

export default observer(App);
