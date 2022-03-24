import { Link} from 'react-router-dom'

// not used here the used state
import { useEffect, useState } from "react";
import BlogList from "./BlogList";
import useFetch from "./useFetch";

const News = () => {
    const{data,isPending,error} = useFetch("https://newsapi.org/v2/everything?q=apple&from=2022-03-20&to=2022-03-20&sortBy=popularity&apiKey=9a4a9efa240f430cb6e75d3c37e20344")
    
    
    return ( 
        <div className="News-feed">
            <div className="container">
                {error && <div style={{background: "red", color:"#ffffff", borderRadius:"10px", padding:"5px 10px"}}>{error}</div>}
                {isPending && <div style={{background: "#ffffff", color:"#000000", borderRadius:"10px", padding:"5px 10px"}}><h4>Loading...</h4></div>}
                { data && <BlogList  articles={data}/>}

            </div>
        </div>
        
        
     );
}
// https://newsapi.org/v2/everything?q=bitcoin&apiKey=9a4a9efa240f430cb6e75d3c37e20344
export default News;