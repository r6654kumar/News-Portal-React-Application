import React, { Component } from 'react'
import NewsItem from './NewsItem'
import axios from 'axios';
import Spinner from './Spinner'
import PropTypes from 'prop-types'
import CategoryButton from './CategoryButton'
export class News extends Component {
    static defaultProps = {
        country: 'in',
        pageSize: 6,
        category:"general"
    }
    static propTypes = {
        country: PropTypes.string,
        pageSize: PropTypes.number,
        category: PropTypes.string
    }

    constructor() {
        super();
        console.log("Hello I am a constructor");
        this.state = {
            articles: [],
            loading: false,
            page: 1
        }
    }
    async componentDidMount() {
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=527270c2589c4957850b4bf25c8cef15&page=1&pageSize=${this.props.pageSize}`
        this.setState({ loading: true })
        let data = await axios.get(url);
        let parsedData = await data.data;
        console.log(parsedData)
        this.setState({
            articles: parsedData.articles,
            totalResults: parsedData.totalResults,
            loading: false
        })
    }
    handleNextClick = async () => {
        if (!(this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize))) {  //checking if that page to which we are going to becomes greater than the total number of pages
            let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=527270c2589c4957850b4bf25c8cef15&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`
            this.setState({ loading: true })
            let data = await axios.get(url);
            let parsedData = await data.data;
            console.log(parsedData)
            this.setState({
                page: this.state.page + 1,
                articles: parsedData.articles,
                loading: false
            })
        }

    }
    handlePreviousClick = async () => {
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=527270c2589c4957850b4bf25c8cef15&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`
        let data = await axios.get(url);
        this.setState({ loading: true })
        let parsedData = await data.data;
        console.log(parsedData)
        this.setState({
            page: this.state.page - 1,
            articles: parsedData.articles,
            loading: false
        })
    }
    render() {
        return (
            <div className="container my-3">
                <CategoryButton></CategoryButton>
                <div className="row  my-5">
                    {this.state.loading && <Spinner />}
                    {!this.state.loading && this.state.articles.map((element) => {
                        return (
                            <div key={element.url} className="col-md-4">
                                <NewsItem title={element.title ? element.title : ""} description={element.description ? element.description : ""}
                                    imageUrl={element.urlToImage ? element.urlToImage : "https://static.vecteezy.com/system/resources/thumbnails/004/216/831/original/3d-world-news-background-loop-free-video.jpg"}
                                    newsUrl={element.url}
                                ></NewsItem>
                            </div>
                        )
                    })}
                    <div className="container my-5 d-flex justify-content-between">
                        <button type="button" disabled={this.state.page <= 1} className="btn btn-success" onClick={this.handlePreviousClick}> &larr; Previous</button>
                        <button type="button" disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize)} className="btn btn-success" onClick={this.handleNextClick}>Next &rarr;</button>

                    </div>
                </div>
            </div>
        )
    }
}

export default News