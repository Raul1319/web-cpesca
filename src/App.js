
import './App.css';
import Navbar from './components/Navbar';
import { Route, Routes } from 'react-router-dom';
import Singnup from './pages/Singnup';
import Login from './pages/Login';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Error from './pages/Error';
import Profile from './pages/Profile';
import Private from './components/Private';
import ProfileEdit from './pages/ProfileEdit';
import Products from './pages/Products';
import CommentCreate from "./pages/CommentCreate"
import CommentEdit from "./pages/CommentEdit"


function App() {
  return (
    <div className="App">

      

      <Navbar />

      <Routes>
       
       <Route path='/' element={ <Home />}/>
       <Route path="/signup" element={<Singnup />}/>
       <Route path="/login" element={ <Login />}/>
       <Route path="/:profileId/edit" element={ <ProfileEdit />}/>
       <Route path="/createComments/:id" element={<CommentCreate />} />
       <Route path="/productId/comments" element={<CommentEdit />} />
       <Route path="/:productsId/list" element={<Products />} />
       
       
      {/*Rutas privadas */}

       <Route path="/profile" element={ <Private><Profile /> </Private>}/>


       {/* Posibles errores*/}

       <Route path='/error' element={ <Error />}/>
       <Route path='*' element={ <NotFound />}/>



      </Routes>
      
    </div>
  );
}

export default App;
