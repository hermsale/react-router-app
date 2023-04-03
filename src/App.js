
import './App.css';
import {HashRouter, Routes, Route} from 'react-router-dom'
import { HomePage } from './HomePage';
import { BlogPage } from './BlogPage';
import { ProfilePage } from './ProfilePage';
import { Menu } from './Menu';
import {BlogPost} from './BlogPost';

function App() {
  return (
    <>
    {/* // este HashRouter funciona como un provider, asi como lo era el React Context  */}
    <HashRouter>
      <Menu />

      <Routes>
        {/* esta es la parte de nuestra pagina que será dinamica */}
        <Route path='/' element={<HomePage/>}/>

        <Route path='/blog' element={<BlogPage/>}>
           <Route path='/blog/:slug' element={<BlogPost/>}/>
        </Route>

        <Route path='/profile' element={<ProfilePage/>}/>
        {/* cuando no funcione algo ira a esta ruta  */}
        <Route path='*' element={<p>Not Found</p>}/>
      </Routes>
    </HashRouter>
    </>
  );
}

export default App;
