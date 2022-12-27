import React,{useContext} from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { blue } from '@mui/material/colors';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
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
import TextareaAutosize from '@mui/base/TextareaAutosize';

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function AdArticle({articles}) {

    const {updateArticle,article,setArticle,editArticle,deleteArticle}=useContext(AdContext);
  const [expanded, setExpanded] = React.useState(false);
  const [open, setOpen] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  const date=new Date(articles.date)
              const handleClickOpen = () => {
                        setOpen(true);
                      };

  const handleClose = () => {
    setOpen(false);
  };

  const onChange=(e)=>{
    setArticle({...article,[e.target.name]:e.target.value})
}
const handleSubmit=(e)=>{
    editArticle(article.id,article.title,article.description)
    e.preventDefault();
}
  return (
    <>
    <Grid item xs={12}>
    <Card  style={{boxShadow:" rgba(255, 255, 255, 0.4) 5px 5px, rgba(255, 255, 255, 0.3) 10px 10px"}}>
      <Grid onClick={handleExpandClick} container style={{padding:"20px",display:"flex",justifyContent:"space-between",alignItems:"center"}}>
       <Typography style={{fontSize:"1.5rem",fontWeight:700,color:"#FF5722"}}>{articles?.title} </Typography>
   <Typography style={{fontSize:"1rem",fontWeight:600}}>{date.toLocaleDateString('en-GB', {
  day: 'numeric', month: 'short', year: 'numeric'
}).replace(/ /g, '-')}</Typography>
</Grid>
      <CardActions disableSpacing>
      <IconButton aria-label="edit" onClick={()=>{handleClickOpen();updateArticle(articles)}}>
          <EditIcon />
        </IconButton>
        <IconButton aria-label="delete" onClick={()=>{deleteArticle(articles._id)}}>
          <DeleteIcon />
        </IconButton>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph style={{color:"black",fontWeight:500}}>
            {articles?.description}
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
    </Grid>

    <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Edit Article</DialogTitle>
        <DialogContent>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
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
  );
}