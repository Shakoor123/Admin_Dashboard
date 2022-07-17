import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from './pages/home/Home';
import List from './pages/list/List';
import Login from './pages/login/Login';
import New from './pages/new/New';
import Single from './pages/single/Single';
import './style/dark.scss'
function App() {
  return (
    <div className="app dark">
       <BrowserRouter>
    <Routes>
      <Route path={'/'} element={<Home/>} />
      <Route path={'/list'} element={<List/>} />
      <Route path={'/login'} element={<Login/>} />
      <Route path={'/new'} element={<New/>} />
      <Route path={'/single'} element={<Single/>} />
    </Routes>
  </BrowserRouter>
    </div>
  );
}

export default App;
