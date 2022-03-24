import { CollectionsOutlined } from "@mui/icons-material";
import { useEffect, useState } from "react";

const useFetch = (url)=>{
    
    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true); 
    const [error, setError] = useState(null);   

    useEffect(()=>{

        const abortCont = new AbortController();

        fetch(url, {signal: abortCont.signal})        
            .then(res=>{
                if(!res.ok){
                    throw Error("Could not fetch the data for that resource");
                }
                return res.json();
            })
            .then(result=>{
                console.log(result.articles);
                setData(result.articles);
                setIsPending(false)
                setError(null)
            })
            .catch(err=>{
                if(err.name === "AbortError"){
                    console.log("fetch abvorted");
                }else{
                    setIsPending(false);
                    setError(err.message);
                }
                
            })
            return ()=> abortCont.abort();
        // empty dependency array
    },[url]);
    return {data, isPending, error}
}

export default useFetch;