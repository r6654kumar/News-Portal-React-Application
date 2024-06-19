import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
    constructor() {
        super();
        console.log("Hello I am a constructor");
        this.state = {
            articles: [],
            loading: false
        }
    }
    async componentDidMount(){
        let url="https://newsapi.org/v2/top-headlines?country=in&apiKey=527270c2589c4957850b4bf25c8cef15"
        let data= await fetch(url);
        let parsedData= await data.json();
        this.setState({articles:parsedData.articles})
    }
    render() {
        return (
            <div className="container my-3">
                <div className="row">
                    {this.state.articles.map((element) => {
                        return (
                            <div key={element.url} className="col-md-4">
                                <NewsItem title={element.title?element.title:""} description={element.description?element.description:""}
                                    imageUrl={element.urlToImage?element.urlToImage:"https://static.vecteezy.com/system/resources/thumbnails/004/216/831/original/3d-world-news-background-loop-free-video.jpg"}
                                    newsUrl={element.url}
                                ></NewsItem>
                            </div>
                        )
                    })}
                </div>
            </div>
        )
    }
}

export default News