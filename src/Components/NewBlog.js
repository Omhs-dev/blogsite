import { useState } from "react"
import { useNavigate } from "react-router-dom"

const NewBlog = () => {
    const [title, setTitle] = useState('');
    const [article, setArticle] = useState('')
    const [author, setAuthor] = useState('')
    const [isLoading, setIsloading] = useState(false)
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        
        const blog = { title, article, author};
        setIsloading(true);
        fetch('http://localhost:8000/blogs', {
            method : 'POST',
            headers : { "Content-Type" : "application/json" },
            body : JSON.stringify(blog)
        }).then(() => {
            setIsloading(false);
            navigate('/');
        })
    }

    return (
        <div className="newblog">
            <form className="articleform" onSubmit={handleSubmit}>
                <label>Title</label>
                <input type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />

                <label>Article</label>
                <textarea 
                    value={article}
                    onChange={(e) => setArticle(e.target.value)}
                    name="" 
                    id="" 
                    cols="30" 
                    rows="10"
                ></textarea>

                <select 
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}
                >
                    <option value="omar">Omar</option>
                    <option value="malik">Malik</option>
                </select>
                { !isLoading && <button className="btnadd" onClick="">Add Blog</button> }
                { isLoading && <button className="btnadd" disabled onClick="">Adding...</button> }
            </form>
            <div>
                <h3>{title}</h3>
                <p>{article}</p>
                <p>{author}</p>
            </div>
        </div>
    )
}

export default NewBlog