import React from 'react'
import { action,originals,trending,horror,romance } from './urls';
import './App.css'
import NavBar from './Components/NavBar/NavBar';
import Banner from './Components/Banner/Banner';
import RowPost from './Components/RowPost/RowPost';

const App = () => {
  return (
    <div className='App'>
     <NavBar/>
     <Banner/>
     <RowPost url={originals} title='Netflix Originals'/>
     <RowPost url={trending} title='Trending Now' isSmall />
     <RowPost url={action} title='Action' isSmall />
     <RowPost url={romance} title='Romance' isSmall />
     <RowPost url={horror} title='Horror' isSmall />

    </div>
  )
}

export default App
