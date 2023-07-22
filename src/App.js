import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import NewBlog from "./Components/NewBlog";
import BlogDetail from "./Components/BlogDetail";
import NotFound from "./Components/404";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" exact element={ <Home /> } />
          <Route path="/newblog" element={ <NewBlog /> } />
          <Route path="/blogs/:id" element={ <BlogDetail /> } />
          <Route path="*" element={ <NotFound /> } />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
