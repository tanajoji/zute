import './App.css';
import {Routes, Route} from 'react-router-dom'
import Login from './components/login/Login';
import MainRoutes from './MainRoutes';

function App() {

  if(! localStorage.getItem('token')){
    return (
      <div className="App">
        <Login />
      </div>
    )
  }

  return (
    <div className="App" data-testid="App">
      <Routes>        
        <Route path='/login' element={<Login />} />
        <Route path='*' element={<MainRoutes />} />        
      </Routes>
    </div>
  )
}

export default App;
