import React, {useState,useContext} from 'react'
import {FaBars, FaTimes} from 'react-icons/fa'
import '../Css/Navbar.css'
import { Link } from 'react-router-dom'
import { AdContext } from '../../../Context/AdminContext'
import {useNavigate} from 'react-router-dom' 
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Button from '@mui/material/Button';
import { Typography,Grid } from '@mui/material'
import CloseIcon from '@mui/icons-material/Close';


const Navbar = () => {
    let navigate=useNavigate();
const {notify}=useContext(AdContext);
const { addAdmin } = useContext(AdContext);
const [admin, setAdmin] = useState({name:"", email: "", password: "" });
const [click, setClick] = useState(false)
const handleClick = () => setClick(!click)
const handleLogout=()=>{
    notify("You have been successfully logged out",true);
    localStorage.removeItem('token');
    navigate("/trekposh-admin/login")
}

const [open, setOpen] = useState(false);

const handleClickOpen = () => {
  setOpen(true);
};

const handleClose = () => {
  setOpen(false);
};

function isValidEmail(email) {
  return /\S+@\S+\.\S+/.test(email);
}

const handleSubmit = (e) => {
  e.preventDefault();
  addAdmin(admin.name,admin.email, admin.password);
  setAdmin({name:"", email: "", password: "" });
  
};

const onChange = (e) => {
  setAdmin({ ...admin, [e.target.name]: e.target.value });
};
    return (
        <>
        <div className='header'>
            <div className='container'>
                <Link to="/trekposh-admin" className='logo'>Trek<span className='primary'>posh</span></Link>
                <ul className={click ? 'nav-menu active' : 'nav-menu not-active'}>
                 <li>
                        <Link to="/trekposh-admin/admin-treks" className="navs">Treks</Link>
                    </li> 
                    <li>
                        <Link to='/trekposh-admin/admin-articles'  className="navs">Articles</Link>
                    </li>
                     <li>
                        <Link to='/trekposh-admin/admin-gallary'  className="navs">Gallery</Link>
                    </li>
                    <li>
                        <Typography onClick={()=>{handleClickOpen();}} className="navs">Create Admin</Typography>
                    </li>
                    <li>
                    <div>
                    <button className='btn' onClick={handleLogout}>Logout</button>
                    </div>
                    </li>
       </ul>
               
                <div className='hamburger' onClick={handleClick}>
                    {click ? (<FaTimes size={20} style={{color: '#FFFFFF'}}/>) : (<FaBars size={20} style={{color: '#FFFFFF'}} />)}
                </div>
            </div>
        </div>

        <Dialog open={open} onClose={handleClose}>
        <Grid  style={{padding:"10px",display:"flex",justifyContent:"space-between",alignItems:"center"}}>
        <DialogTitle>Create Admin</DialogTitle>
        <CloseIcon className="cross" onClick={handleClose}/>
        </Grid>
        <DialogContent>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} >
                <TextField
                  autoComplete="given-name"
                  name="name"
                  required
                  fullWidth
                  id="name"
                  label="Name"
                  autoFocus
                  value={admin.name}
                 onChange={onChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  type="email"
                  autoComplete="email"
                  value={admin.email}
                  onChange={onChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                  value={admin.password}
                  onChange={onChange}
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              onClick={handleClose}
              disabled={ admin.name.length<3 || !isValidEmail(admin.email) || admin.password.length<6}
            >
              Sign Up
            </Button>
          </Box>
        {/* </Box> */}
            {/* <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleClose} type="submit">Done</Button>
        </DialogActions>
          </Box>*/}
        </DialogContent> 
        
      </Dialog>
        </>
    )
}

export default Navbar
