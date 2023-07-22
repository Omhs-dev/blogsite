import { useParams, useNavigate } from "react-router-dom";
import useFetch from "./useFetch";

const BlogDetail = () => {
    const { id } = useParams();
    const {blogs : blog, isLoading, error} = useFetch('http://localhost:8000/blogs/' + id);
    const navigate = useNavigate();

    const handleClick = () => {
        fetch('http://localhost:8000/blogs/' + blog.id, {
            method : "DELETE"
        }).then(() => {
            navigate('/');
        })
    }
    return (
        <div className="blogdetail">
            {error && <h2>{error}</h2>}
            <h2>Blog - {id}</h2>
            {isLoading && <h3>Loading...</h3>}
            {blog && 
                (<article>
                    <h2>{blog.title}</h2>
                    <h3>{blog.author}</h3>
                    <p>{blog.article}</p>
                    <button onClick={handleClick}>Delete</button>
                </article>)
            }
        </div>
    )
}

export default BlogDetail