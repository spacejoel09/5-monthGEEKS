import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import UserRegisterPage from './pages/userRegisterPage/UserRegisterPage';
import UsersListPage from './pages/userListPage/UserListPage'
import Menu from './component/Menu';
import PostsPage from "./pages/postPage/PostsPage";

function App() {
    return (
        <div className="App">
            <PostsPage/>
        </div>
    );
}

export default App;
