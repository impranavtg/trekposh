import React,{useContext} from 'react';
import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import CardMedia from '@mui/material/CardMedia';
import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';
import Grid from '@mui/material/Grid';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Button from '@mui/material/Button';
import {AdContext} from '../../../Context/AdminContext'

export default function AdImage({images}) {

    const {updateImage,image,setImage,editImage,deleteImage}=useContext(AdContext);

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const onChange=(e)=>{
    setImage({...image,[e.target.name]:e.target.value})
}
const handleSubmit=(e)=>{
    editImage(image.id,image.image)
    e.preventDefault();
}
  return (
    // maxWidth: 345
    <>
    <Grid item xs={12} sm={6} md={4}>
    <Card sx={{ minHeight:300 }}>
      <CardMedia
        component="img"
        height="300px"
        width="100%"
        src={`https://drive.google.com/uc?id=${images?.image}`}
        alt="Trek Image"
      />
      <CardActions disableSpacing>
      <IconButton aria-label="edit" onClick={()=>{handleClickOpen();updateImage(images)}}>
          <EditIcon />
        </IconButton>
        <IconButton aria-label="delete" onClick={()=>{deleteImage(images._id)}}>
          <DeleteIcon />
        </IconButton>
      </CardActions>
    </Card>
    </Grid>
    <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Edit Image</DialogTitle>
        <DialogContent>
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

  );
}