import React from 'react'
import Todo from './components/Todo'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './components/Home'

function App() {

  return (
    <>

    <BrowserRouter>
     <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/todo' element={<Todo/>}></Route>
     </Routes>
    
    
    </BrowserRouter>
    
    </>
  )
}

export default App