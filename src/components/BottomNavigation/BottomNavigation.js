import React from 'react';
import { makeStyles, styled } from '@material-ui/core/styles';
import {
  BottomNavigation,
  BottomNavigationAction,
  Grid,
  // Link
} from '@material-ui/core';
import EmailIcon from '@material-ui/icons/Email';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

const useStyles = makeStyles({
  root: {
    width: 500,
    paddingTop: '3em',
    paddingBottom: '2em'
  },
  icon: {
    fontSize: '100px'
  }
});

const Icon = styled(BottomNavigationAction)({
  fontSize: '100px',
})

export default function LabelBottomNavigation() {
  const classes = useStyles();
  const [value, setValue] = React.useState('GitHub');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Grid
      container
      direction='row'
      justifyContent='center'
      alignItems='center'
    >
      <BottomNavigation value={value} onChange={handleChange} className={classes.root}>
       
        
        <Icon label="GitHub" value="GitHub" icon={<GitHubIcon />}/>
        
        <Icon label="Email" value="Email" icon={<EmailIcon />}/>
        <Icon label="LinkedIn" value="LinkedIn" icon={<LinkedInIcon />}/>

      </BottomNavigation>
    </Grid>
  );
}