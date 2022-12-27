import React, {useEffect} from 'react'
import './App.css';
import Land from "./Pages/Landing/Js/Land";
import {Routes,Route,useLocation,useNavigate} from "react-router-dom";
import UserTrek from './Pages/Landing/Js/UserTrek';
import UserArticles from './Pages/Landing/Js/UserArticles';
import Login from './Pages/Admin/Js/Login';
import Dashboard from './Pages/Admin/Js/Dashboard';
import ADG from './Pages/Admin/Js/ADG';
import ADT from './Pages/Admin/Js/ADT';
import ADA from './Pages/Admin/Js/ADA';
import { ToastContainer } from 'react-toastify';
 const App=()=> {



  let navigate=useNavigate()
  const location = useLocation();
  useEffect(() => {
      if((location.pathname==='/trekposh-admin' || location.pathname==='/trekposh-admin/admin-treks' || location.pathname==='/trekposh-admin/admin-gallary' || location.pathname==='/trekposh-admin/admin-articles')  && localStorage.getItem('token')===null){
          navigate('/trekposh-admin/login');
      }
  }, [location.pathname])

  return (
    <>
     <ToastContainer
      position="top-right"
      autoClose={1500}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      />
    <Routes>
    <Route exact path="/" element={<Land/>} />       
          <Route exact path="/treks" element={<UserTrek/>} />
          <Route exact path="/articles" element={<UserArticles/>} />
          {/* <Route exact path="/trekposh-admin/*" element={<AdminPage/>} /> */}
          <Route exact path="/trekposh-admin/login" element={<Login/>} />
          {localStorage.getItem('token') && 
          <>
         <Route exact path="/trekposh-admin" element={<Dashboard/>} />
         <Route exact path="/trekposh-admin/admin-treks" element={<ADT/>} />
         <Route exact path="/trekposh-admin/admin-gallary" element={<ADG/>} />
         <Route exact path="/trekposh-admin/admin-articles" element={<ADA/>} />
         </>
          }
    </Routes>
    </>
  );
}
export default App;
