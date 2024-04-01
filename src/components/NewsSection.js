import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import InfiniteScroll from 'react-infinite-scroll-component';

import News from './News';
import Loading from './Loading';
// import { UserContext } from './ContextCreator';

// import Search from './Search';

export default function NewsSection(props) {
    // const country = useContext(UserContext);

    const [page, setPage] = useState(1);
    // const [pageSize, setPageSize] = useState(0);
    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(false);
    const [totalResults, setTotalResults] = useState(0);
    // const [search, setSearch] = useState(false);

    const newsUpdater = async () => {
        document.title = `${capitalizer()} - NeuzUp`;
        let url = `https://newsapi.org/v2/top-headlines?${props.country}&category=${props.category}&apiKey=${props.api_key}&page=${page}&pagesize=${props.pageSize}`;
        if(props.country.includes('q=')){url = url.split('&page')[0]}
        console.log(url);
        setLoading(true);
        let fetchedData = await fetch(url);
        props.setProgress(40);
        let data = await fetchedData.json();
        props.setProgress(80);
        // let noPages = Math.ceil(data.totalResults / props.pageSize);
        setLoading(false);
        setArticles(data.articles);
        setTotalResults(data.totalResults);
        // setPageSize(noPages);
        props.setProgress(100);
        console.log(data);
        console.log(url);
        console.log(props.country)
    }

    useEffect(() => {
        newsUpdater();
        setPage(page + 1);
        // eslint-disable-next-line
    }, [props.country]);


    function capitalizer() {
        return props.category.charAt(0).toUpperCase() + props.category.slice(1);
    }


    const fetchMore = async () => {
        let url = `https://newsapi.org/v2/top-headlines?${props.country}&category=${props.category}&apiKey=${props.api_key}&page=${page}&pagesize=${props.pageSize}`;
        let fetchedData = await fetch(url);
        let data = await fetchedData.json();
        setArticles(articles.concat(data.articles));
        setPage(page + 1);
    }

    // function searchInvoker() {
    //     setSearch(true);
    // }

    return (
        <>
            <div className='text-center my-5'>
                <h1>Top {capitalizer()} Category Headlines</h1>
                <hr className='mx-4' />
            </div>

            {loading && <Loading />}

            <InfiniteScroll
                dataLength={articles.length} //This is important field to render the next data
                next={fetchMore}
                hasMore={articles.length !== totalResults}
                loader={<Loading />}>
                <div className='container'>

                    <div className='row my-2'>

                        {articles.map((article) => {
                            return (
                                <div className='col-md-3 my-3' key={article.url}>
                                    <News description={article.description}
                                        imageUrl={article.urlToImage === null ? require('../images/1.jpg') : article.urlToImage} title={article.title} url={article.url} author={article.author} time={article.publishedAt} source={article.source.name} />
                                </div>

                            );
                        })}
                    </div>
                </div>
            </InfiniteScroll>
        </>
    );
}

NewsSection.defaultProps = {
    country: "in",
    category: "general",
    pageSize: 10,
};