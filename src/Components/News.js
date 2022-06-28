import React, { useState, useEffect } from 'react'
import Loader from './Loader';
import Newsitem from './Newsitem'
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";

const News = (props) => {
    const [articles, setArticles] = useState([])
    const [page, setPage] = useState(1)
    const [loading, setLoading] = useState(true)
    const [totalResults, settotalResults] = useState(0)

    const updateNews = async () => {
        props.setProgress(20);
        const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=4db155e4f2c94c8db8625c69778b47d8&page=${page}&pageSize=${props.totalNewsPerPage}`;
        setLoading(true)
        let data = await fetch(url);
        let parseData = await data.json();
        setArticles(parseData.articles);
        settotalResults(parseData.totalResults);
        setLoading(false);
        props.setProgress(100);
    }

    useEffect(() => {
        updateNews();
        // eslint-disable-next-line
    }, [])

    const fetchMoreData = async () => {
        const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=4db155e4f2c94c8db8625c69778b47d8&page=${page + 1}&pageSize=${props.totalNewsPerPage}`;
        setPage(page + 1)
        let data = await fetch(url);
        let parseData = await data.json();
        setArticles(articles.concat(parseData.articles));
        settotalResults(parseData.totalResults);
    }

    const capitalizeFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    return (
        <>
            <h1 className='text-center my-4 heading'>Top {capitalizeFirstLetter(props.category)} Headlines</h1>
            {loading && <Loader />}
            <InfiniteScroll
                dataLength={articles.length}
                next={fetchMoreData}
                hasMore={articles.length !== totalResults}
                loader={<Loader />}
            >
                <div className="container">
                    <div className='row'>
                        {!loading && articles.map((element) => {
                            return <div className='col-md-4 my-2' key={element.url}>
                                <Newsitem title={element.title} description={element.description} imgUrl={element.urlToImage} url={element.url} date={element.publishedAt} source={element.source.name} />
                            </div>

                        })}
                    </div>
                </div>
            </InfiniteScroll>
        </>
    )
}
News.defaultProps = {
    totalNewsPerPage: 9,
    country: 'in',
    category: 'general'
}
News.propTypes = {
    totalNewsPerPage: PropTypes.number,
    country: PropTypes.string,
    category: PropTypes.string
}
export default News
