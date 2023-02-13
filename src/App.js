import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { createBrowserRouter, RouterProvider, Route } from 'react-router-dom';
import Footer from './Components/Footer/Footer';

import Home from './Components/Home/Home';
import Products from './Components/Products/Products';

const router = createBrowserRouter([
  {
    path:'/',
    element:<> 
      <Navbar/>
      <Home/>
      <Footer/> </>
  },
  {
    path:'/products',
    element:<> 
    <Navbar/>
    <Products/>
    <Footer/> </>

  },
  {
    path:'/categories',
    element:<span>categories</span>
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
