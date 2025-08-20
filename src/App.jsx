import { Route, Routes } from 'react-router'
import './App.css'
import English from './components/English'
import Russian from './components/russian'
import Uzbek from './components/Uzbek'

function App() {
  
  return (
      <>
       <Routes>
        <Route path='/' element={<English/>} />
        <Route path='/russian' element={<Russian/>} />
        <Route path='/uzbek' element={<Uzbek/>} />
       </Routes>
      </>
  )
}

export default App