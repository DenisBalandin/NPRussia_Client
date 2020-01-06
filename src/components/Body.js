import React,{Component} from 'react';
import {BrowserRouter as Router,Route, Link} from 'react-router-dom';
import News from "./News";
import Home from "./Home";
import ItemPage from './ItemPage';
import NewsPage from './NewsPage';
import Contacts from './Contacts';
import About from './About';

class Body extends Component{
    render(){
        return(
            <div>
                <Route exact path="/about"  component={About}/>
                <Route exact path="/news"  component={News}/>
                <Route exact path="/contacts"  component={Contacts}/>
                <Route exact path="/"  component={Home}/>
                <Route exact path="/pageitem/:itemid" component={ItemPage} />
                <Route exact path="/pageinews/:itemid" component={NewsPage} />
            </div>
        );
    }
}
export default Body;