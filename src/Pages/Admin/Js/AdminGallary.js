import React,{useContext,useState} from 'react'
import Navbar from './Navbar'
import { AdContext } from '../../../Context/AdminContext';
import { Grid,Dialog,DialogTitle,DialogContent,Box,TextField,DialogActions,Button } from '@mui/material';
import { makeStyles } from '@mui/styles';
import AdImage from './AdImage';
import AddAPhotoIcon from '@mui/icons-material/AddAPhoto';

const useStyles=makeStyles({
    gridContainer:{
        padding:"20px"
    }
})
const AdminGallary = () => {
    const classes=useStyles();
    const {images,addImage}=useContext(AdContext);
    const [image,setImage]=useState({image:""})
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };
   

    const handleSubmit=(e)=>{
        e.preventDefault();
        addImage(image.image);
        setImage({image:""});
    }

    const onChange=(e)=>{
        setImage({...image,[e.target.name]:e.target.value})
    }

  return (
    <>
    <Navbar/>
    <div className="section_1_div1" style={{display:"flex",justifyContent:"space-between",alignItems:"center",padding:"15px",color:"white"}}>
            <h2 className="aboutUS" >GALLARY IMAGES</h2>
            <AddAPhotoIcon onClick={()=>{handleClickOpen();}} style={{cursor:"pointer"}}/>
        </div>
        <Grid container spacing={4} className={classes.gridContainer}>
    {images===null?(<h2 className="aboutUS" style={{color:"white"}}>No Images available</h2>):images.map(singleimage=><AdImage images={singleimage} key={singleimage._id}/>)}
    </Grid>

    <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Add Image</DialogTitle>
        <DialogContent >
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
            autoFocus
            margin="dense"
            required
            fullWidth
            name="image"
            label="Image"
            type="text"
            id="image"
            autoComplete="image"
            value={image.image}
            onChange={onChange}
            variant="standard"
          />
            <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleClose} disabled={image.image.length<1} type="submit">Done</Button>
        </DialogActions>
          </Box>
        </DialogContent>
        
      </Dialog>
    </>
  )
}

export default AdminGallary