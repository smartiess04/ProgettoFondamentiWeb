import { useState } from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import './App.css'


import RefreshPage from './pages/refreshpage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path= "/" element={<RefreshPage/>}/>

     </Routes>
    </BrowserRouter>
  
      
    </>
  )
}

export default App
