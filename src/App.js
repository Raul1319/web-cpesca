import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import { Route, Routes } from 'react-router-dom';
import Singnup from './pages/Singnup';
import Login from './pages/Login';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Error from './pages/Error';

function App() {
  return (
    <div className="App">

      <Navbar />

      <Routes>
       
       <Route path='/' element={ <Home />}/>
       <Route path="/signup" element={<Singnup />}/>
       <Route path="/login" element={ <Login />}/>


       {/* Posibles errores*/}

       <Route path='/error' element={ <Error />}/>
       <Route path='*' element={ <NotFound />}/>



      </Routes>
      
    </div>
  );
}

export default App;
