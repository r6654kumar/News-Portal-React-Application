import React, { useState,useEffect } from 'react'
import NewsItem from './NewsItem'
import axios from 'axios';
import Spinner from './Spinner'
import PropTypes from 'prop-types'
import CategoryButton from './CategoryButton'
const News = (props)=>{
    const [articles,setArticles]=useState([])
    const [loading,setLoading]=useState(true)
    const [page,setPage]=useState(1)
    const [totalResults,setTotalResults]=useState(0)
   const updateNews= async()=>{
        const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`
        setLoading(true);
        let data = await axios.get(url);
        let parsedData = await data.data;
        console.log(parsedData);
        setArticles(parsedData.articles)
        setTotalResults(parsedData.totalResults)
        setLoading(false)
    }
    useEffect(()=>{
        updateNews();
    },[])

    const handleNextClick = async () => {
        setPage(page+1);
        updateNews();

    }
    const handlePreviousClick = async () => {
        setPage(page-1);
        updateNews();

    }
        return (
            <div className="container my-3">
                <CategoryButton></CategoryButton>
                <div className="row  my-5">
                    {loading && <Spinner />}
                    {!loading && articles.map((element) => {
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
                        <button type="button" disabled={page <= 1} className="btn btn-success" onClick={handlePreviousClick}> &larr; Previous</button>
                        <button type="button" disabled={page + 1 > Math.ceil(totalResults / props.pageSize)} className="btn btn-success" onClick={handleNextClick}>Next &rarr;</button>

                    </div>
                </div>
            </div>
        )
    }


News.defaultProps = {
    country: 'in',
    pageSize: 6,
    category:"general"
}
News. propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string
}
export default News