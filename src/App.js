import React from 'react';
import Hero from './sections/hero/Hero.js';
import './App.css';
import CoffeeTypes from './sections/coffee-types/coffee-types.js'
import OurHistory from './sections/our-history/our-history.js'
import Fresh from './sections/fresh-beans/fresh-beans.js'
import Shop from './sections/coffe-shop/coffee-shop.js'
import Blog from './sections/latest-blog/blog.js'



const App = () => {
  return (
    <div>
      <Hero></Hero>
      <CoffeeTypes></CoffeeTypes>
      <OurHistory></OurHistory>
      <Fresh></Fresh>
      <Shop></Shop>
      <Blog></Blog>
    </div>

  );
};
export default App;
