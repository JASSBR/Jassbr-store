import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { createBrowserRouter, RouterProvider, Route } from 'react-router-dom';
import Footer from './Components/Footer/Footer';

import Home from './pages/Home/Home';
import Products from './pages/Products/Products';
import Product from './pages/Product/Product';

const router = createBrowserRouter([
  {
    path:'/',
    element:<> 
      <Navbar/>
      <Home/>
      <Footer/> </>
  },
  {
    path:'/products/:id',
    element:<> 
    <Navbar/>
    <Products/>
    <Footer/> </>

  },
  {
    path:'/product/:id',
    element:<><Navbar/>
    <Product/>
    <Footer/> </>
  },
])

function App() {
  return (
    <div >
      <RouterProvider router={router} />
      
    </div>
  );
}

export default App;
