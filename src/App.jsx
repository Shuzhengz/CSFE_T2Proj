import { useState } from 'react'
import { Majors } from './majors-categories'
import {CategorySearch} from './category-search-page'
import './styles.css'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';


function App() {

  return (
  
    <Router>
      <div>
        <div className='temp-navigation'>h</div>

        {/* put the navigation bar outside of routes */}
        <Routes>
          <Route exact path='/'>
            
            {/* put the home screen here */}
            </Route>
          <Route exact path='/majors' element={<Majors/>}></Route>
          <Route path='/majors/computerscience' element={<CategorySearch/>}></Route>

        </Routes>
      </div>
    </Router>
  );
}

export default App
