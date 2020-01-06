import React,{Component} from 'react';
import {BrowserRouter as Router,Route, Link} from 'react-router-dom';

class Heder extends Component{
    render(){
        return(
            <div>
                <div id="bgHeder">
                <div className="heder">
                    <div className="logo">Непутевая Россия</div>
                        {/* <div className="search">
                            <input type="text" name="search" value=''></input>
                            <input type="button"></input>
                        </div> */}
                    </div>
                </div>
                <div id="bgMenu">
                    <div className="menu">
                        <div>
                            <Link to="/">
                                <div>Главное</div>
                            </Link>
                            <Link to="/news">
                                <div>Новости</div>
                            </Link>
                            <Link to="/contacts">
                                <div>Контакты</div>
                            </Link>
                            <Link to="/about">
                                <div>О блоге</div>
                            </Link>
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}
export default Heder;