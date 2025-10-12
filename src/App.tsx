import './App.css'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import { Provider } from './Context'

function App() {
  return (
    <Provider>
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
    </Provider>
  )
}

export default App
