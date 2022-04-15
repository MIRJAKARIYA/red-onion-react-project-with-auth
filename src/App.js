import { Routes,Route } from 'react-router-dom';
import './App.css';
import Cart from './components/Cart/Cart';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import RequiredProducts from './components/RequiredProducts/RequiredProducts';
function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/cart' element={<Cart></Cart>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='/home' element={<Home></Home>}>
          <Route path=':productType' element={<RequiredProducts></RequiredProducts>}></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
