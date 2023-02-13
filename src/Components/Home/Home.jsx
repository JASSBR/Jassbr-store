import React from 'react'
import Slider from '../Slider/Slider';
import FeaturedProducts from '../FeaturedProducts/FeaturedProducts';
import Categories from '../Categories/Categories';
import './Home.scss';
import Contact from '../Contact/Contact';

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