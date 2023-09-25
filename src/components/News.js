import React, {useEffect,useState} from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import InfiniteScroll from "react-infinite-scroll-component";
import PropTypes from 'prop-types';


const News=(props)=> {

const [articles, setArticles] = useState([]);
const [loading, setLoading] = useState(false);
const [page, setPage] = useState(1);
const [totalResults, setTotalResults] = useState(0)
  
   
 document.title = `NewsMonkey - ${   props.category[0].toUpperCase() + props.category.slice(1) }`;
 
 const updateNews=async()=> {
    props.progress(0);
    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=1&pageSize=${props.ps}`
    setLoading(true);
    let data = await fetch(url);
    props.progress(30);
    let parsedData = await data.json();
    props.progress(70);
     setArticles(parsedData.articles);
    setTotalResults(parsedData.totalResults);
    setLoading(false);
    props.progress(100);
  }

  useEffect(() => {
   updateNews();
  },[])
  

  const fetchData=async()=>{
    setPage(page+1);
    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page+1}&pageSize=${props.ps}`;
    let data = await fetch(url);
    let parsedData = await data.json();
   setArticles(articles.concat(parsedData.articles));
    setTotalResults(parsedData.totalResults);
  }

 
    return (
      <div className="container my-4">
        <h1 className="text-center" style={{ marginBottom: "30px" , marginTop:"90px"}}>
          NewsMonkey -Top{" "}
          {props.category[0].toUpperCase() + props.category.slice(1)}{" "}
          Headlines
        </h1>
        {loading &&<Spinner/>}
        <div className="row">
          {articles.map((element) => {
            return (
              <div className="col-md-4" key={element.url}>
                <NewsItem
                  title={element.title.slice(0, 40)}
                  description={
                    element.description ? element.description.slice(0, 88) : ""
                  }
                  imageUrl={element.urlToImage}
                  newsUrl={element.url}
                  publishedAt={element.publishedAt}
                  author={element.author}
                  source={element.source.name}
                />
              </div>
            );
          })}
        </div>
        <InfiniteScroll
          dataLength={articles.length} //This is important field to render the next data
          next={fetchData}
          hasMore={articles.length<totalResults}
          loader={<h4><Spinner style={{marginBottom:"30px"}}/></h4>}
        ></InfiniteScroll>
      </div>
    );
 
  }
  News.propTypes={
    country: PropTypes.string,
    ps: PropTypes.number,
    category: PropTypes.string
  }
News.defaultProps={
  country:'in',
  ps:8,
  category:'general'
}
export default News;
