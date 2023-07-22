import BlogList from "./BlogList";
import useFetch from "./useFetch";

const Home = () => {
    const { blogs, isLoading, error } = useFetch("http://localhost:8000/blogs")

    return (
        <div className="blog">
            {/* <button onClick={handleFilter}>Filter</button> */}
            {error && <div>{error}</div>}
            {isLoading && <h3>Loading...</h3>}
            {blogs && <BlogList blogs={blogs} title={"All blogs"} />}
        </div>
    )
}

export default Home