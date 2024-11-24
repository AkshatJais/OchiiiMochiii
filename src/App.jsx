import React from 'react'
import Header from './components/Header'
import Page1 from './pages/Page1'
import Page2 from './pages/Page2'
import Page3 from './pages/Page3'
import Page4 from './pages/Page4'
import Page5 from './pages/Page5'
import Page4Text from './pages/Page4Text'
import Page9 from './pages/Page9'

// import Fontscheck from './pages/Fontscheck'




const App = () => {
  return (
    <div>
      <Header/>
      <Page1/>
      <Page2/>
      <Page3/>
      <Page4/>
      <Page4Text/>
      <Page5/>
      <Page9/>
      {/* <Fontscheck/> */}
    
    </div>
  )
}

export default App