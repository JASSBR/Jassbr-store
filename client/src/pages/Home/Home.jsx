import React from 'react'
import Slider from '../../Components/Slider/Slider';
import FeaturedProducts from '../../Components/FeaturedProducts/FeaturedProducts';
import Categories from '../../Components/Categories/Categories';
import './Home.scss';
import Contact from '../../Components/Contact/Contact';

function Home() {
  return (
    <div className='home'>
      <Slider/>
      <FeaturedProducts type='Featured'/> 
      <Categories/>
      <FeaturedProducts type='Trending'/> 
      <Contact/>
    </div>
  )
}

export default Home