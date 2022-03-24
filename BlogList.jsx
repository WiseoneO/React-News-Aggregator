import { Link} from 'react-router-dom'

const BlogList  = ({articles}) => {
    // const blogs = props.blogs;
    // const title = props.title;
   
    return ( 
        <div className="flex">
                {articles.map(article =>(
                    <div className="flex-box mt-3" key={article.id}>
                        <h4>{article.title.substring(0,30)}...</h4>
                        <p>{article.description.substring(0,80)}...</p>
                        <a href={article.url} className="read">Read more</a>
                    </div>
                ))}
        </div>

     );
}
 
export default BlogList ;