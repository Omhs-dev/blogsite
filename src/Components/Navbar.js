// import "../index.css"
import { Link } from "react-router-dom"

const Navbar = () => {
    return (
        <div>
            <div className="navbar">
                <h2>Blog</h2>
                <div>
                    <Link to="/">Home</Link>
                    <Link to="/newblog">New Blog</Link>
                </div>
            </div>
        </div>
    )
}

export default Navbar