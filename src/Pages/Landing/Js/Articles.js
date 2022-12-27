import React,{useContext} from 'react'
import {TreksContext} from '../../../Context/UserContext'
import Navbar from './Navbar';
import Article from './Article';
import Grid from '@mui/material/Grid';
import { makeStyles } from '@mui/styles';

const useStyles=makeStyles({
    gridContainer:{
        padding:"20px"
    }
})
const Articles = () => {
    const classes=useStyles();
        const {articles}=useContext(TreksContext);
  return (
    <>
    <Navbar/>
        <div className="section_1_div1" style={{textAlign:"center",padding:"15px"}}>
            <h2 className="aboutUS" style={{color:"white"}}>LATEST ARTICLES</h2>
            <p className="below_about" style={{color:"#00ADB5"}}>Check out our Treks Experience</p>
            <h2 className="underLine" style={{color:"white"}}>_____</h2>
        </div>
        <Grid container spacing={4} className={classes.gridContainer}>
    {articles===null?(<h2 style={{textAlign:"center",padding:"20px"}}>No Articles available</h2>):articles.map(singlearticle=><Article article={singlearticle} key={singlearticle._id}/>)}
    </Grid>

    </>
  )
}

export default Articles