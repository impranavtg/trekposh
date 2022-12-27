import React,{useContext} from 'react'
import {AdContext} from '../../../Context/AdminContext'
import Navbar from './Navbar';
import AdTrek from './AdTrek';
import Grid from '@mui/material/Grid';
import { makeStyles } from '@mui/styles';

const useStyles=makeStyles({
    gridContainer:{
        padding:"20px"
    }
})
const AdminTreks = () => {
    const classes=useStyles();
    const {treks}=useContext(AdContext);
  return (
    <>
    <Navbar/>
    <div className="section_1_div1" style={{textAlign:"center",padding:"15px"}}>
            <h2 className="aboutUS" style={{color:"white"}}>LATEST TREKS</h2>
        </div>

        <Grid container spacing={4} className={classes.gridContainer}>
    {treks===null?(<h1>nothing</h1>):treks.map(singletrek=><AdTrek treks={singletrek} key={singletrek._id}/>)}
    </Grid>

    </>
  )
}

export default AdminTreks