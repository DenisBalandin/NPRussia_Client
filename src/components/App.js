import React,{Component} from 'react';
import Header from './Header';
import Footer from './Footer';
import Body from './Body';
import {BrowserRouter as Router,Route, Link} from 'react-router-dom';

class App extends Component{
  render(){
    return (
      <Router>
          <Header/>
          <Body/>
          <Footer/>
      </Router>
    )
  }
};

export default App;
