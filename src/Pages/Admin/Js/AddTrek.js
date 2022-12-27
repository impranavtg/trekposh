import React,{useState,useContext} from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import QueueIcon from '@mui/icons-material/Queue';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import {AdContext} from '../../../Context/AdminContext'


const theme = createTheme();

export default function AddTrek() {
    const {addTrek}=useContext(AdContext);
    const [trek,setTrek]=useState({title:"",image:"",date:"",description:"",fullDesc:""})

    const handleSubmit=(e)=>{
        e.preventDefault();
        addTrek(trek.title,trek.image,trek.date,trek.description,trek.fullDesc);
        setTrek({title:"",image:"",date:"",description:"",fullDesc:""});
    }

    const onChange=(e)=>{
        setTrek({...trek,[e.target.name]:e.target.value})
    }

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: '#303841' }}>
            <QueueIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Add Trek
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="title"
                  name="title"
                  required
                  fullWidth
                  id="title"
                  label="Title"
                  onChange={onChange}
                  value={trek.title}
                  minLength={3}
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="image"
                  label="Image"
                  name="image"
                  autoComplete="image"
                  onChange={onChange}
                  value={trek.image}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  type="date"
                  id="date"
                  name="date"
                  autoComplete="date"
                  onChange={onChange}
                  value={trek.date}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  multiline={true}
                  rows={3} 
                  id="description"
                  label="Description"
                  name="description"
                  autoComplete="description"
                  minLength={3}
                  onChange={onChange}
                  value={trek.description}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  multiline={true}
                  rows={10} 
                  name="fullDesc"
                  label="Full Description"
                  id="fullDesc"
                  autoComplete="fullDesc"
                  minLength={3}
                  onChange={onChange}
                  value={trek.fullDesc}
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              disabled={trek.title.length<3 || trek.description.length<3 || trek.fullDesc.length<3 || trek.image.length<1}
              sx={{ mt: 3, mb: 2 }}
            >
            Add Trek
            </Button>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}