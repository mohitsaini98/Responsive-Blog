import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Blog from './pages/Blog'
import SingleBlog from './pages/SingleBlog'
import Login from "./components/admin/Login";
import Register from "./components/admin/Register";
import AddBlog from "./pages/admin/AddBlog";
import ListBlog from "./pages/admin/ListBlog";
import Comments from "./pages/admin/Comments";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/blogs' element={<Blog />} />
        <Route path='/blog/:id' element={<SingleBlog />} />

        {/* Admin */}
        <Route path='/admin/addblog' element={<AddBlog />} />
        <Route path='/admin/listblog' element={<ListBlog />} />
        <Route path='/admin/comments' element={<Comments />} />

        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
      </Routes>
    </div>
  );
};

export default App;
