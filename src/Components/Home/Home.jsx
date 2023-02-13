import React from 'react'
import Slider from '../Slider/Slider';
import FeaturedProducts from '../FeaturedProducts/FeaturedProducts';
import Categories from '../Categories/Categories';
import './Home.scss';

function Home() {
  return (
    <div className='home'>
      <Slider/>
      <FeaturedProducts type='Featured'/> 
      <Categories/>
      <FeaturedProducts type='Trending'/> 
    </div>
  )
}

export default Home