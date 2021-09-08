import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Grid,
  Typography,
  Link
} from '@material-ui/core';
import styled from 'styled-components';


const useStyles = makeStyles({
  wrapper: {
    paddingTop: '5em'
  },
  item: {
    margin: '2em 1em 2em 1em',
  }

});

const Footer = styled.footer `
  display: flex;
  flex-flow: row nowrap;
`

const LabelBottomNavigation: React.FC = () => {
  const classes = useStyles();

  return (
    <Grid
      container
      direction='row'
      justifyContent='center'
      alignItems='center'
    >

      <Footer>
        
        <Typography variant='h6' color='secondary' className={classes.item} component={Link} href='mailto: chengyangli723@gmail.com'>
          Email
        </Typography>

        <Typography variant='h6' color='secondary' className={classes.item} component={Link} href='https://github.com/chengyangliii'>
          GitHub
        </Typography>

        <Typography variant='h6' color='secondary' className={classes.item} component={Link} href='https://www.linkedin.com/in/chengyang-allan-li'>
          LinkedIn
        </Typography>

      </Footer>
    </Grid>
  );
}

export default LabelBottomNavigation