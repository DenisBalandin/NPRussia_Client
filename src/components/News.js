import React,{Component} from 'react';
import {Link, withRouter} from 'react-router-dom';
import InfiniteScroll from "react-infinite-scroll-component";
import axios from "axios";
import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser';

class News extends Component{
    state = { 
      data: [],
      pageNumber: 0,
      items: 6,
      hasMore: true
    };
    componentDidMount() {
      this.fetchData();
    }
    fetchData = () => {
      axios
        .get(
          `http://localhost:3001/newslink/${this.state.items}/${this.state.pageNumber}`
        )
        .then(res =>
          this.setState({
            data: [...this.state.data, ...res.data],
            pageNumber: this.state.pageNumber + 1
          })
        );
    };
    itemRow = (item)=>{
      return(
       <>
        <Link to={`/pageinews/${item.cpulink}`}>
              <img src={item.img}/>
            </Link> 
            <Link to={`/pageinews/${item.cpulink}`}>
              <h2 className="title_name">{item.title}</h2>
            </Link>
            <div className="date_item">
              {item.date}
            </div>
            <div className="item_text">
            { ReactHtmlParser(item.title_desc) }
            </div>
        </>
      )
    }
    render(){
      return (
        <div>
            <InfiniteScroll
              dataLength={this.state.data.length} 
              next={this.fetchData}
              hasMore={this.state.hasMore}
              loader={<h4></h4>}>
            </InfiniteScroll>
            <div id="news_block">
              {this.state.data.slice(0,6).map((item, index) => 
                    <div className="news_item">
                    {this.itemRow(item)}
                    </div>
                )}
            </div>
            <div id="subscription_bg">
              <div class="subscription">
                    <img src="/icon_sabs.png"/>
                    <div class="subs">НЕ ПРОПУСКАЙТЕ НОВЫЕ СТАТЬИ, ПОДПИСЫВАЙТЕСЬ НА РАССЫЛКУ</div>
                    <form  method="post">
                    <input type="hidden" name="_token" value="4lMLupqBqUT2dUKecKMUY3hEGequkWqBpPQpuYKb"/>
                          <input class="subs_text" type="text" name="subs" value="@электронная почта"/>
                          <input class="subs_button" type="submit" value="ПОДПИСАТЬСЯ"/>
                    </form>
              </div>
            </div>
            <div id="news_block">
              {this.state.data.slice(6,this.state.data.length).map((item, index) => 
                  <div className="news_item">
                    {this.itemRow(item)}
                  </div>
                )}
            </div>
          </div>
        );
    }
}
export default News;