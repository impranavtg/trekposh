import React,{useContext} from 'react'
import {TreksContext} from '../../../Context/UserContext'
import Navbar from './Navbar';
import Trek from './Trek';
import Grid from '@mui/material/Grid';
import { makeStyles } from '@mui/styles';

const useStyles=makeStyles({
    gridContainer:{
        padding:"20px"

    }
})
const Treks = () => {
    const classes=useStyles();
    const {treks}=useContext(TreksContext);
  return (
    <>
    <Navbar/>
        <div className="section_1_div1" style={{textAlign:"center",padding:"15px"}}>
            <h2 className="aboutUS" style={{color:"white"}}>LATEST TREKS</h2>
            <p className="below_about" style={{color:"#00ADB5"}}>Check out our latest Treks and activities</p>
            <h2 className="underLine" style={{color:"white"}}>_____</h2>
        </div>
        <Grid container spacing={4} className={classes.gridContainer}>
    {treks===null?(<h2 style={{textAlign:"center",padding:"20px"}} >No Treks available</h2>):treks.map(singletrek=><Trek trek={singletrek} key={singletrek._id}/>)}
    </Grid>
    </>
  )
}

export default Treks