import './App.css'
import {Routes,Route} from 'react-router'
import Main from './components/Main'

function App() {
  return (
    <>
    <Routes>
      <Route path='/' element=<Main/> />
    </Routes>
      
    </>
  )
}

export default App
