import './App.css';
import Home from './Pages/Home'
import Cart from './Pages/Cart'
import Login from './Pages/Login'
import Wishlist from './Pages/Wishlist'
import Boy from './Pages/Boy'
import Girl from './Pages/Girl'
import Book from './Pages/Book'
import School from './Pages/School'


import PageNotFound from './Pages/PageNotFound'


import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (

    <BrowserRouter>
    <Routes>
      <Route path="/" element={ <Home/>}/>
      <Route path="/cart" element={ <Cart/>}/>
      <Route path="/login" element={ <Login/>}/>
      <Route path="/wishlist" element={ <Wishlist/>}/>
      <Route path="/shop/girl" element={ <Girl/>}/>
      <Route path="/shop/boy" element={ <Boy/>}/>
      <Route path="/shop/books" element={ <Book/>}/>
      <Route path="/school" element={ <School/>}/>
      <Route path="/shop/books" element={ <Book/>}/>
      <Route path="*" element={<PageNotFound />} />
    </Routes>
    </BrowserRouter>
    
  );
}

export default App;
