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

export default function AdTrek({treks}) {

    const {updateTrek,trek,setTrek,editTrek,deleteTrek}=useContext(AdContext);

  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  const date=new Date(treks.date)

  var edate = new Date(trek.date);
  var edateString = new Date(edate.getTime() - (edate.getTimezoneOffset() * 60000 ))
                    .toISOString()
                    .split("T")[0];

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const onChange=(e)=>{
    setTrek({...trek,[e.target.name]:e.target.value})
}
const handleSubmit=(e)=>{
    editTrek(trek.id,trek.title,trek.image,trek.date,trek.description,trek.fullDesc)
    e.preventDefault();
}
  return (
    <>
    <Grid item xs={12} sm={6} md={4}>
    <Card sx={{ minHeight:400 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: blue[500] }} aria-label="treks">
            TP
          </Avatar>
        }
  
        title={treks?.title}
        subheader={date.toLocaleDateString('en-GB', {
  day: 'numeric', month: 'short', year: 'numeric'
}).replace(/ /g, '-')}

       onClick={handleExpandClick}
      />
      <CardMedia
        onClick={handleExpandClick}
        component="img"
        height="194"
        src={`https://drive.google.com/uc?id=${treks?.image}`}
        alt="Trek Image"
      />
      <CardContent onClick={handleExpandClick}>
        <Typography variant="body2" color="text.secondary">
          {treks?.description}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
      <IconButton aria-label="edit" onClick={()=>{handleClickOpen();updateTrek(treks)}}>
          <EditIcon />
        </IconButton>
        <IconButton aria-label="delete" onClick={()=>{deleteTrek(treks._id)}}>
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
          <Typography paragraph>More Info:</Typography>
          <Typography paragraph>
            {treks?.fullDesc}
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
    </Grid>
    <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Edit Trek</DialogTitle>
        <DialogContent>
          {/* <DialogContentText>
            To subscribe to this website, please enter your email address here. We
            will send updates occasionally.
          </DialogContentText> */}
          {/* <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Email Address"
            type="email"
            fullWidth
            variant="standard"
          /> */}
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
              value={trek.title}
              onChange={onChange}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="image"
              label="Image"
              type="text"
              id="image"
              autoComplete="image"
              value={trek.image}
              onChange={onChange}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="date"
              type="date"
              id="date"
              autoComplete="date"
              value={edateString}
              onChange={onChange}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              multiline={true}
              rows={3} 
              name="description"
              label="Description"
              type="text"
              id="description"
              autoComplete="description"
              value={trek.description}
              onChange={onChange}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="fullDesc"
              multiline={true}
              rows={7} 
              label="Full Description"
              type="text"
              id="fullDesc"
              autoComplete="fullDesc"
              value={trek.fullDesc}
              onChange={onChange}/>
            {/* <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              
            >
              Sign In
            </Button> */}
            <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleClose} disabled={trek.title.length<3 || trek.description.length<3 || trek.fullDesc.length<3 || trek.image.length<1} type="submit">Done</Button>
        </DialogActions>
          </Box>
        </DialogContent>
        
      </Dialog>
    </>

  );
}