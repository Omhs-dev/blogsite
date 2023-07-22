import { Link } from "react-router-dom"

const notFound = () => {
    return (
        <div style={{
            color : 'red',
            textAlign: 'center'
            }}>
            <h1>404</h1>
            <Link to={'/'}>Go back to home</Link>
        </div>
    )
}

export default notFound