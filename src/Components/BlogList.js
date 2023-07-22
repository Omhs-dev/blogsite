import { Link } from "react-router-dom"

const BlogList = ({ blogs, title }) => {
    // const blogs = props.blogs;
    // const title = props.title;
    return (
        <div>
            <h2>{title}</h2>
            {blogs.map((blog) =>
                <div className="blog-preview" key={blog.id}>
                    <Link to={`/blogs/${blog.id}`}>
                        <h1>{blog.author}</h1>
                        <h3>{blog.title}</h3>
                        <p>{blog.article}</p>
                        {/* <button>Delete</button> */}
                    </Link>
                </div>
            )}
        </div>
    )
}

export default BlogList