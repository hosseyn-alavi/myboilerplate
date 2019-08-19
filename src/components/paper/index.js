import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles(theme => {
  return ({
      root: {
        padding: theme.spacing(3, 2),
      }
    })
});


export default function PaperSheet(props) {
  
  const classes = useStyles();

  return (
    <div style={{ boxShadow:"0px 0px 110px -20px"}}>
      <Paper className={classes.root} style={props.cStyle}>
       {props.children}
      </Paper>
    </div>
  );
}

