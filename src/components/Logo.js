import React from 'react'
import logo from '../images/covid19.jpg'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
    logoImgDiv: {
        textAlign: 'center',
    }
}));

const Logo = () => {
    const classes = useStyles();
    return (           
        <div className={classes.logoImgDiv}>
            <img src={logo} alt="COVID-19" />
        </div>
    );
}

export default Logo