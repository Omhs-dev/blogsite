import { useState, useEffect } from "react"

const useFetch = (url) => {
    const [blogs, setBlogs] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        setTimeout(() => {
            fetch(url)
                .then(res => {
                    if(!res.ok){
                        throw Error("Not able to connect to server")
                    }
                    return res.json();
                })
                .then((data) => {
                    setBlogs(data);
                    setIsLoading(false);
                })
                .catch(err => {
                    console.log(err.message);
                    setIsLoading(false);
                    setError(err.message)
                })
                        
        }, 1000)
    }, [url])

    return { blogs, isLoading, error }
}

export default useFetch