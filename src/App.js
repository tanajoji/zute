import './App.css';
import {NavLink, Routes, Route} from 'react-router-dom'

function App() {
  return (
    <div className="App" data-testid="App">
      <nav data-testid="Nav">
        <h1>ZUTE</h1>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/products">Products</NavLink>
        <button>Login</button>
      </nav>
      <Routes>
        <Route path='/' element={<h4 className='error'>Home</h4>}/>
        <Route path='/about' element={<h4 className='error'>About</h4>}/>
        <Route path='/products' element={<h4 className='error'>Products</h4>} />

        {/* Wildcard route - handle unavailable routes */}
        <Route path='*' element={<h4 className='error'>Route Not Found</h4>}/>
      </Routes>
    </div>
  )
}

export default App;
