import React from 'react'
import { Route, Routes } from 'react-router'
import Home from './pages/Home'
import Page1 from './pages/Page1'
import Page2 from './pages/Page2'
import Page3 from './pages/Page3'
import Page4 from './pages/Page4'
import Page5 from './pages/Page5'
import Page6 from './pages/Page6'
import Page7 from './pages/Page7'

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/slide1' element={<Page1 />} />
      <Route path='/slide2' element={<Page2 />} />
      <Route path='/slide3' element={<Page3 />} />
      <Route path='/slide4' element={<Page4 />} />
      <Route path='/slide5' element={<Page5 />} />
      <Route path='/slide6' element={<Page6 />} />
      <Route path='/slide7' element={<Page7 />} />
    </Routes>
  )
}

export default App
