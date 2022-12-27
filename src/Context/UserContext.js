import React, { createContext, useState,useEffect} from 'react';

export const TreksContext=createContext({treks:null,images:null,articles:null});


const UserContext = ({children}) => {
  const [treks,setTreks]=useState([])
  const [images,setImages]=useState([])
  const [articles,setArticles]=useState([])


  const getTreks=async()=>{
    const response=await fetch('https://trekposh.onrender.com/api/treks/get-treks',{
      method:'GET',
      headers:{
        'Content-Type':'application/json',
      }
    })
    const json=await response.json();
    setTreks(json.treks);
  }

  const getImages=async()=>{
    const response=await fetch('https://trekposh.onrender.com/api/images/get-images',{
      method:'GET',
      headers:{
        'Content-Type':'application/json',
      }
    })
    const json=await response.json();
    setImages(json.images);
  }

  const getArticles=async()=>{
    const response=await fetch('https://trekposh.onrender.com/api/articles/get-articles',{
      method:'GET',
      headers:{
        'Content-Type':'application/json',
      }
    })
    const json=await response.json();
    setArticles(json.articles);
  }


  useEffect(() => {
    getTreks();
    getImages();
    getArticles();
    // eslint-disable-next-line
  }, [])
  return (
    <TreksContext.Provider value={{treks,images,articles}}>
    {children}
    </TreksContext.Provider>
  )
}

export default UserContext