import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Slider from '@material-ui/core/Slider';
import VolumeDown from '@material-ui/icons/VolumeDown';
import VolumeUp from '@material-ui/icons/VolumeUp';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Avatar from '@material-ui/core/Avatar';
import Divider from '@material-ui/core/Divider'; //Commit 7
import Link from '@material-ui/core/Link'; //Commit 10

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    height: '100%'
  },
  paper: {
    width: '150px',
    height: 'max-content',
    margin: 'auto',
    padding: theme.spacing(4)
  },
  text: {
    margin: 'auto'
  }
}));

function App() {
  const classes = useStyles();
  const [value, setValue] = React.useState(30);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <Paper elevation={5} className={classes.paper}>
      <Avatar alt="python">Py</Avatar> {/*Commit 4*/}
      <Button variant="contained" color="secondary"> {/*Commit 1,3*/}
          Нажми на эту кнопку {/*Commit 1,3*/}
        </Button> {/*Commit 1*/}
        <Typography id="discrete-slider" color="primary" gutterBottom>
          Увеличить громкость {/*Commit 5*/}
      </Typography>
        <Grid container spacing={2}>
          <Grid item>
            <VolumeDown />
          </Grid>
          <Grid item xs>
            <Slider value={value} onChange={handleChange} aria-labelledby="continuous-slider" />
          </Grid>
          <Grid item>
            <VolumeUp />
          </Grid>
        </Grid>
        <Avatar className={classes.orange}></Avatar> {/*Commit 1,4*/}
      </Paper>
      <Divider /> {/*Commit 7*/}
      <Button color="primary" variant="contained" fullWidth="true"> {/*Commit 8,9*/}
          Сюда не нажимай {/*Commit 8*/}
      </Button> {/*Commit 8*/}
      <Divider /> {/*Commit 9*/}
      <form className={classes.container} noValidate> {/*Commit 5*/}
      <TextField //Commit 5
        id="date" //Commit 5
        label="Текущая дата" //Commit 5,6
        type="date" //Commit 5
        defaultValue="2021-05-27" //Commit 5,6
        className={classes.textField} //Commit 5
        InputLabelProps={{ //Commit 5
          shrink: true, //Commit 5
        }} //Commit 5
      /> {/*Commit 5*/}
    </form> {/*Commit 5*/}
      <TextField id="standard-basic" label="Имя" /> {/*Commit 2*/}
      <Link href="#"> {/*Commit 10*/}
        Link {/*Commit 10*/}
    </Link> {/*Commit 10*/}
    </div>
  );
}

export default App;