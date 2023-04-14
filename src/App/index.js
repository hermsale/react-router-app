
import './App.css';
import {HashRouter, Routes, Route} from 'react-router-dom'
import { HomePage } from '../HomePage';
import { BlogPage } from '../BlogPage';
import { ProfilePage } from '../ProfilePage';
import { Menu } from '../Menu';
import {BlogPost} from '../BlogPost';
import { LoginPage } from '../LoginPage';
import { LogoutPage } from '../LogOut';
import { ProtectedRoute } from "./auth";
import { AuthProvider } from './auth';

function App() {
  return (
    <>
    {/* // este HashRouter funciona como un provider, asi como lo era el React Context  */}
    <HashRouter>
      <AuthProvider>
          <Menu />

          <Routes>
            {/* esta es la parte de nuestra pagina que será dinamica */}
            <Route path='/' element={<HomePage/>}/>

            <Route path='/blog' element={<BlogPage/>}>
              <Route path='/blog/:slug' element={<BlogPost/>}/>
            </Route>

            <Route path='/login' element={<LoginPage/>}/>

            <Route path='/logout' element={
              <ProtectedRoute>
                <LogoutPage/>
              </ProtectedRoute>
              }
            />

            <Route path='/profile' element={
              <ProtectedRoute>
                <ProfilePage/>
              </ProtectedRoute>
              }
            />

            {/* cuando no funcione algo ira a esta ruta  */}
            <Route path='*' element={<p>Not Found</p>}/>
          </Routes>
      </AuthProvider>
    </HashRouter>
    </>
  );
}

export default App;
