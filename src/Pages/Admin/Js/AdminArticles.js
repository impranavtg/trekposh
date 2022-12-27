import React,{useState,useContext} from 'react'
import {AdContext} from '../../../Context/AdminContext'
import Navbar from './Navbar';
import AdArticle from './AdArticle';
import { Grid,Dialog,DialogTitle,DialogContent,Box,TextField,DialogActions,Button } from '@mui/material';
import { makeStyles } from '@mui/styles';
import PostAddIcon from '@mui/icons-material/PostAdd';

const useStyles=makeStyles({
    gridContainer:{
        padding:"20px"
    }
})
const AdminArticles = () => {
    const classes=useStyles();
    const {articles,addArticle}=useContext(AdContext);
    const [article,setArticle]=useState({title:"",description:""})
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
      };
    
      const handleClose = () => {
        setOpen(false);
      };
     
  
      const handleSubmit=(e)=>{
          e.preventDefault();
          addArticle(article.title,article.description);
          setArticle({title:"",description:""});
      }
  
      const onChange=(e)=>{
          setArticle({...article,[e.target.name]:e.target.value})
      }
  
  return (
    <>
    <Navbar/>
    <div className="section_1_div1" style={{display:"flex",justifyContent:"space-between",alignItems:"center",padding:"15px",color:"white"}}>
            <h2 className="aboutUS" style={{color:"white"}}>LATEST ARTICLES</h2>
            <PostAddIcon onClick={()=>{handleClickOpen();}} style={{cursor:"pointer"}}/>
        </div>

        <Grid container spacing={4} className={classes.gridContainer}>
    {articles===null?(<h1>nothing</h1>):articles.map(singlearticle=><AdArticle articles={singlearticle} key={singlearticle._id}/>)}
    </Grid>

    <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Add Article</DialogTitle>
        <DialogContent>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              inputProps={{minLength :3}}
              fullWidth
              id="title"
              label="Title"
              name="title"
              autoComplete="title"
              autoFocus
              value={article.title}
              onChange={onChange}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              multiline={true}
              rows={10}    
              name="description"
              label="Description"
              type="text"
              id="description"
              autoComplete="description"
              value={article.description}
              onChange={onChange}
            />

            <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleClose} disabled={article.title.length<3 || article.description.length<5} type="submit">Done</Button>
        </DialogActions>
          </Box>
        </DialogContent>
        
      </Dialog>
    </>
  )
}

export default AdminArticles