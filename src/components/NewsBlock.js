import React,{Component} from 'react';
import {Link, withRouter} from 'react-router-dom';

class NewsBlock extends Component{
    state = {
       data:[],
       newsLimit:8,
       page:0
    }
    componentDidMount(){
        this.getLastNews();
    }
    getLastNews = ()=>{
        var url = `http://localhost:3001/newslink/${this.state.newsLimit}/${this.state.page}`;
        fetch(url)
        .then(response=>response.json())
        .then(data=>
            this.setState(()=>{
                return {data}
            })
        );
    }
    render(){
        return(
            <div className="NewsBlockComp">
                <h2>Новостной блог</h2>
                {this.state.data.map((item, index) => 
                    <div className="news_comp_item">
                         <img src={item.img}/>
                         <Link to={`/pageinews/${item.cpulink}`}><p>{item.title}</p></Link>
                    </div>
                )}
            </div>
        );
    };
}
export default NewsBlock;