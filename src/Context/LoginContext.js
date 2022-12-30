import React, { createContext} from 'react';
import {useNavigate} from 'react-router-dom'
import { toast } from 'react-toastify';

export const AuthContext=createContext({login:()=>null});

const LoginContext = ({children}) => {

  let navigate=useNavigate();

  const notify = (message,success) => {
    if(success){
      toast.success("📃 "+message);
    }
    else{
      toast.error("📃 "+message);
    }
  }


  const login=async(email,password)=>{
    const response=await fetch('https://vast-cyan-hermit-crab-gear.cyclic.app/api/auth/login',{
      method:'POST',
      headers:{
        'Content-Type':'application/json',
      },
      body:JSON.stringify({email,password})
    })
    const json=await response.json();
    if(json.success===true){
      localStorage.setItem('token',json.token);
      navigate("/trekposh-admin")
    }
    notify(json.Status,json.success);
  }


  return (
    <AuthContext.Provider value={{login}}>
    {children}
    </AuthContext.Provider>
  )
}

export default LoginContext