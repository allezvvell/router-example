import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <h1>Home Page</h1>
      <Link to='/about'>go to About</Link><br/>
      <Link to='/products'>go to products</Link><br/>
      <Link to='/detail'>go to datails</Link><br/>
    </div>
  )
}

export default Home
