import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import UserRegisterPage from './pages/userRegisterPage/UserRegisterPage';
import UsersListPage from './pages/userListPage/UserListPage'
import Menu from './component/Menu';

function App() {
    return (
        <BrowserRouter>
            <Menu />
            <Routes>
                <Route index element={<UserRegisterPage />} />
                <Route path='/users' element={<UsersListPage />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
