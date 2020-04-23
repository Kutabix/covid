import React, { useState, useEffect } from 'react'
import { Grid, FormControl, Select, MenuItem, FormHelperText, InputLabel } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    root: {
        justifyContent: 'center'
    }
});

const CountryForm = () => {
    const [specificValue, setSpecificValue] = useState('');
    const [fetchedData, setFetchedData] = useState(undefined)
    const handleSelectChange = async event => {
        setSpecificValue(event.target.value);
        try {
            const data = await (await fetch('https://covid19.mathdro.id/api/countries/poland')).json()
            console.log(data);
        }
        catch(error) {
            console.log(error);
        }
    }
    return (
        <div className={useStyles().root}>
            <Grid container justify="center" spacing={3}>
                <Grid item component={FormControl} xs={12} md={10}>
                    <FormControl>
                        <InputLabel>Country</InputLabel>
                        <Select value={specificValue} onChange={handleSelectChange}>
                        <MenuItem value="World">
                            <em>World</em>
                        </MenuItem>
                        <MenuItem value={"Poland"}>Poland</MenuItem>
                        </Select>
                        <FormHelperText>Select name of your country</FormHelperText>
                    </FormControl>
                </Grid>
            </Grid>
        </div>

    );
}


export default CountryForm