import React, { createContext, useState,useEffect} from 'react';
import { toast } from 'react-toastify';

export const AdContext=createContext(null);

const AdminContext = ({children}) => {
  const [treks,setTreks]=useState([])
  const [images,setImages]=useState([])
  const [articles,setArticles]=useState([])
  const [trek,setTrek]=useState({id:"",title:"",image:"",date:Date.now(),description:"",fullDesc:""})

  const updateTrek=(currentTrek)=>{
    setTrek({id:currentTrek._id,title:currentTrek.title,image:currentTrek.image,date:currentTrek.date,description:currentTrek.description,fullDesc:currentTrek.fullDesc});
  }

  const [image,setImage]=useState({id:"",image:""})
  const updateImage=(currentImage)=>{
    setImage({id:currentImage._id,image:currentImage.image});
  }

  const [article,setArticle]=useState({id:"",title:"",description:""})
  const updateArticle=(currentArticle)=>{
    setArticle({id:currentArticle._id,title:currentArticle.title,description:currentArticle.description});
  }

  const notify = (message,success) => {
    if(success){
      toast.success("📃 "+message);
    }
    else{
      toast.error("📃 "+message);
    }
  }
  const getTreks=async()=>{
    const response=await fetch('https://vast-cyan-hermit-crab-gear.cyclic.app/api/treks/get-treks',{
      method:'GET',
      headers:{
        'Content-Type':'application/json',
      }
    })
    const json=await response.json();
    setTreks(json.treks);
  }

  const getImages=async()=>{
    const response=await fetch('https://vast-cyan-hermit-crab-gear.cyclic.app/api/images/get-images',{
      method:'GET',
      headers:{
        'Content-Type':'application/json',
      }
    })
    const json=await response.json();
    setImages(json.images);
  }

  const getArticles=async()=>{
    const response=await fetch('https://vast-cyan-hermit-crab-gear.cyclic.app/api/articles/get-articles',{
      method:'GET',
      headers:{
        'Content-Type':'application/json',
      }
    })
    const json=await response.json();
    setArticles(json.articles);
  }


  const addTrek=async(title,image,date,description,fullDesc)=>{
    const response=await fetch('https://vast-cyan-hermit-crab-gear.cyclic.app/api/treks/addtrek',{
      method:'POST',
      headers:{
        'Content-Type':'application/json',
        'authToken':localStorage.getItem('token')
      },
      body:JSON.stringify({title,image,date,description,fullDesc})
    })
    const json= await response.json();
    setTreks(treks.concat(json.savedTrek));
    notify(json.Status,json.success);
  }

  const addImage=async(image)=>{
    const response=await fetch('https://vast-cyan-hermit-crab-gear.cyclic.app/api/images/addimage',{
      method:'POST',
      headers:{
        'Content-Type':'application/json',
        'authToken':localStorage.getItem('token')
      },
      body:JSON.stringify({image})
    })
    const json= await response.json();
    setImages(images.concat(json.savedImage));
    notify(json.Status,json.success);
  }

  const addAdmin=async(name,email,password)=>{
    const response=await fetch('https://vast-cyan-hermit-crab-gear.cyclic.app/api/auth/createuser',{
      method:'POST',
      headers:{
        'Content-Type':'application/json',
        'authToken':localStorage.getItem('token')
      },
      body:JSON.stringify({name,email,password})
    })
    const json=await response.json();
    notify(json.Status,json.success);
  }

  const addArticle=async(title,description)=>{
    const response=await fetch('https://vast-cyan-hermit-crab-gear.cyclic.app/api/articles/addArticle',{
      method:'POST',
      headers:{
        'Content-Type':'application/json',
        'authToken':localStorage.getItem('token')
      },
      body:JSON.stringify({title,description})
    })
    const json= await response.json();
    setArticles(articles.concat(json.savedArticle));
    notify(json.Status,json.success);
  }

  const editTrek=async(id,title,image,date,description,fullDesc)=>{
    const response=await fetch(`https://vast-cyan-hermit-crab-gear.cyclic.app/api/treks/update-trek/${id}`,{
      method:'PUT',
      headers:{
        'Content-Type':'application/json',
        'authToken':localStorage.getItem('token')
      },
      body:JSON.stringify({title,image,date,description,fullDesc})
    })
    const json= await response.json();
    if(json.success===true){
    let newTreks=JSON.parse(JSON.stringify(treks));
    for (let index = 0; index < treks.length; index++) {
      if(newTreks[index]._id===id){
        newTreks[index].title=title;
        newTreks[index].image=image;
        newTreks[index].date=date;
        newTreks[index].description=description;
        newTreks[index].fullDesc=fullDesc;
        break;
      }
    }
    const func=async(newTreks)=> setTreks(newTreks);
    await func(newTreks);
  }
  notify(json.Status,json.success);
  }

  const editImage=async(id,image)=>{
    const response=await fetch(`https://vast-cyan-hermit-crab-gear.cyclic.app/api/images/update-image/${id}`,{
      method:'PUT',
      headers:{
        'Content-Type':'application/json',
        'authToken':localStorage.getItem('token')
      },
      body:JSON.stringify({image})
    })
    const json= await response.json();
    if(json.success===true){
    let newImages=JSON.parse(JSON.stringify(images));
    for (let index = 0; index < images.length; index++) {
      if(newImages[index]._id===id){
        newImages[index].image=image;
        break;
      }
    }
    const func=async(newImages)=>setImages(newImages);
    await func(newImages);
  }
  notify(json.Status,json.success);
  }

  const editArticle=async(id,title,description)=>{
    const response=await fetch(`https://vast-cyan-hermit-crab-gear.cyclic.app/api/articles/update-article/${id}`,{
      method:'PUT',
      headers:{
        'Content-Type':'application/json',
        'authToken':localStorage.getItem('token')
      },
      body:JSON.stringify({title,description})
    })
    const json= await response.json();
    if(json.success===true){
    let newArticles=JSON.parse(JSON.stringify(articles));
    for (let index = 0; index < articles.length; index++) {
      if(newArticles[index]._id===id){
        newArticles[index].title=title;
        newArticles[index].description=description;
        break;
      }
    }
    const func=async(newArticles)=>setArticles(newArticles);
    await func(newArticles);
  }
  notify(json.Status,json.success);
  }

  const deleteTrek=async(id)=>{
    const response=await fetch(`https://vast-cyan-hermit-crab-gear.cyclic.app/api/treks/deletetrek/${id}`,{
      method:'DELETE',
      headers:{
        'authToken':localStorage.getItem('token')
      }
    })
    const json=await response.json();
    if(json.success===true){
    const newTreks=treks.filter((trek)=>trek._id!==id);
    const func=async(newTreks)=>setTreks(newTreks);
    await func(newTreks);
    }
    notify(json.Status,json.success);
  }

  const deleteImage=async(id)=>{
    const response=await fetch(`https://vast-cyan-hermit-crab-gear.cyclic.app/api/images/deleteimage/${id}`,{
      method:'DELETE',
      headers:{
        'authToken':localStorage.getItem('token')
      }
    })
    const json=await response.json();
    if(json.success===true){
    const newImages=images.filter((image)=>image._id!==id);
    const func=async(newImages)=>setImages(newImages);
    await func(newImages);
    }
     notify(json.Status,json.success);
  }

  const deleteArticle=async(id)=>{
    const response=await fetch(`https://vast-cyan-hermit-crab-gear.cyclic.app/api/articles//deletearticle/${id}`,{
      method:'DELETE',
      headers:{
        'authToken':localStorage.getItem('token')
      }
    })
    const json=await response.json();
    if(json.success===true){
    const newArticles=articles.filter((article)=>article._id!==id);
    const func=async(newArticles)=>setArticles(newArticles);
    await func(newArticles);
    }
    notify(json.Status,json.success);
  }

  useEffect(() => {
    getTreks();
    getImages();
    getArticles();
    // eslint-disable-next-line
  }, [])
  return (
    <AdContext.Provider value={{treks,getTreks,updateTrek,trek,setTrek,editTrek,deleteTrek,notify,addTrek,getImages,images,image,setImage,editImage,addImage,deleteImage,updateImage,addAdmin,articles,article,setArticle,editArticle,addArticle,deleteArticle,updateArticle}}>
    {children}
    </AdContext.Provider>
  )
}

export default AdminContext