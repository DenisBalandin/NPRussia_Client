import React,{Component} from 'react';
import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser';
import NewsBlock from './NewsBlock';
import axios from 'axios'


class NewsPage extends Component{
    state = { 
        data: []
    };
    componentDidMount() {
     this.getFetch();
    }
    getFetch = ()=>{
        const itemid = this.props.match.params.itemid; 
        axios.get(`http://localhost:3001/newslink/${itemid}`)
        .then((response) => {
          this.setState({data: response.data})
        });
    }
    render(){
        return(
        <div id="page_item_content">
            <div className="page_content">
                <h1>{this.state.data.name}</h1>
                <div className="page_item_text">
                <img src={this.state.data.img}/>
                { ReactHtmlParser(this.state.data.text) }
                </div>
            </div>
            <NewsBlock/>
        </div>
        );
    }
}
export default NewsPage;