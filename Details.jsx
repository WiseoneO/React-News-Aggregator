import { useParams } from "react-router-dom";

const Details = ()=> {
    const { id } =useParams()


    return ( 
        <div className="container">
            <h2>Blog Details - {id}</h2>
        </div>
     );
}
 
export default Details;