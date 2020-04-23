import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Card, CardContent, Typography } from '@material-ui/core/';
import CountUp from 'react-countup';
import cx from 'classnames';

const useStyles = makeStyles({
    root: {
     // minWidth: 275,
        justifyContent: 'center',
    },
    card: {
        margin: '1% 1.95%',
    },
    card1: {
        borderBottom: '10px solid #0275d8',
    },
    card2: {
        borderBottom: '10px solid #5cb85c',
    },    
    card3: {
        borderBottom: '10px solid #d9534f',
    },
});

const CardComponent = ({ data: { confirmed, recovered, deaths } }) => {
  const classes = useStyles();
    return (
        <div className={classes.root}>
            <Grid container justify="center" spacing={3}>
                <Grid item component={Card} xs={12} md={3} className={cx(classes.card, classes.card1)}>
                    <Card className={classes.root}>
                        <CardContent>
                            <Typography variant={cx('overline', 'h1')} component="h2">
                                Confirmed: <CountUp start={0} end={confirmed.value} separator={','} duration={2.5} />
                            </Typography>
                            <Typography variant="subtitle1" component="h3">
                                Last update:
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item component={Card} xs={12} md={3} className={cx(classes.card, classes.card2)}>
                    <Card className={classes.root}>
                        <CardContent>
                            <Typography variant={cx('overline', 'h1')} component="h2">
                                Recovered: <CountUp start={0} end={recovered.value} separator={','} duration={2.5} />
                            </Typography>
                            <Typography variant="subtitle1" component="h3">
                                Last update:
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item component={Card} xs={12} md={3} className={cx(classes.card, classes.card3)}>
                    <Card className={classes.root}>
                        <CardContent>
                            <Typography variant={cx('overline', 'h1')} component="h2">
                                Deaths: <CountUp start={0} end={deaths.value} separator={','} duration={2.5} />
                            </Typography>
                            <Typography variant="subtitle1" component="h3">
                                Last update:
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </div>
    )
}
export default CardComponent

