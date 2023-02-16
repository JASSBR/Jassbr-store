import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { createBrowserRouter, RouterProvider, Route } from 'react-router-dom';
import Footer from './Components/Footer/Footer';

import Home from './Components/Home/Home';
import Products from './Components/Products/Products';
import Product from './Components/Product/Product';

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
