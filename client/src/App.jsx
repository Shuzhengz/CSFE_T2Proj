import { useState } from 'react'
import { Majors } from './majors-categories'
import {CategorySearch} from './category-search-page'
import './styles.css'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';


function App() {
  console.log('hi')
  return (
  
    <Router>
      <div>
        <h1>hi</h1>
        <div className='temp-navigation'>h</div>

        {/* put the navigation bar outside of routes */}
        <Routes>
          <Route path='/'>
            
            {/* put the home screen here (this is for other groups) */}
            </Route>
          <Route path='/majors' element={<Majors/>}/>
          <Route path='/majors/computerscience' element={<CategorySearch/>}/>

        </Routes>
      </div>
    </Router>
  );
}

export default App
