import React from 'react'

import {FilterProvider} from './context/filterContext'
import Header from './components/Header'
import Description from './components/Description'
import Tags from './components/Tags'
import Cards from './components/Cards'
import Footer from './components/Footer'

function App() {
  return (
    <FilterProvider>
      <Header />
      <Description />
      <Tags />
      <Cards />
      <Footer />
    </FilterProvider>
  )
}

export default App
