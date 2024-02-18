import React, { Component } from 'react'
import NewsItem from './NewsItem.js'
import Spinner from './Spinner.js';
import PropTypes from 'prop-types';
export class News extends Component {

  static defaultProps={
      country:"in",
      pageSize:6,
      category:'general',
  }
  static propTypes={
    country:PropTypes.string,
    pageSize:PropTypes.number,
    category:PropTypes.string,
  }

constructor(){
  super();
  this.state={
  articles:[],
  loading:false,
  page:1
  }
}

async componentDidMount(){
  this.setState({loading:true})
  let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=dd2c31dd3edb48ba8694296f8cd6945a&page=1&pageSize=${this.props.pageSize}`
  let data=await fetch(url);
  let parseddata=await data.json();
  this.setState({articles:parseddata.articles,
    loading:false
  })
}

handlePrevClick=async()=>{
  this.setState({loading:true})
  let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=dd2c31dd3edb48ba8694296f8cd6945a&page=${this.state.page-1}&pageSize=${this.props.pageSize}`
  let data=await fetch(url);
  let parseddata=await data.json();
  this.setState({articles:parseddata.articles,
    page:this.state.page-1,
    loading:false
  }); 
}

 handleNextClick=async()=>{
  this.setState({loading:true})
  let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=dd2c31dd3edb48ba8694296f8cd6945a&page=${this.state.page+1}&pageSize=${this.props.pageSize}`
  let data=await fetch(url);
  let parseddata=await data.json();
  this.setState({articles:parseddata.articles,
    page:this.state.page+1,
    loading:false
  });
 

}


  render() {
    return (

      <div className='container my4 mx12'>
        <h2 className='text-center my-3'>NewsMonkey - Top Headlines.....</h2>
        {this.state.loading&& <div className="text-center"><Spinner /></div>}
        <div className="row my4">
          {!this.state.loading&&this.state.articles?.map((ele)=>{
            return <div className="col md-4" key={ele.url} >
                <NewsItem title={ele.title} description={ele.description} imageurl={ele.urlToImage} newsurl={ele.url} />
            </div>
            
          })}
        </div>
        <div className='d-flex justify-content-between my-3'>
        <button disabled={this.state.page===1?true:false} type="button" className="btn btn-dark" onClick={this.handlePrevClick} >&larr; Previous</button>
        <button disabled={this.state.page===5?true:false} type="button" className="btn btn-dark" onClick={this.handleNextClick} >Next &rarr;</button>
        </div>
      </div>
    )
  }
}

export default News
