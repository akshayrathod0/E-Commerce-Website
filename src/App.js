import './App.css';
import { Routes, Route } from 'react-router-dom';
import HomePage from './Components/HomePage';
import Register from './Components/Register';
import Login from './Components/Login';
import Footer from './Components/Footer';
import Navbar from './Components/Navbar';
import Mens from './Components/Mens';
import Cart from './Components/Cart';
import Womens from './Components/Womens';
import Kids from './Components/Kids';
import Electronics from './Components/Electronics'
// import SingleProfuctPage from './Components/SingleProductPage';
import SingleProductPage from './Components/SingleProductPage';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />
        <Route path='/mens' element={<Mens />} />
        <Route path='/womens' element={<Womens />} />
        <Route path='/kids' element={<Kids />} />
        <Route path='/electronics' element={<Electronics />} />
        {/* <Route path='single-product/:id' element={<SingleProductPage/>} /> */}
        <Route path='/single-product/:id' element={<SingleProductPage/>} />
        <Route path='/cart' element={<Cart/>} />
        {/* <Route /> */}
      </Routes>
      <Footer />
    </div>
  );
}

export default App;