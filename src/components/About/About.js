import React from 'react';
import lcy from '../../lcy.jpeg'
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import { 
  styled
 } from "@material-ui/core/styles";
import { Typography, Grid, Avatar, Link } from '@material-ui/core';

const Introduction = styled(Typography)({
    padding: '5em 0 0',
    fontSize: '2.3rem',
    lineHeight: '1.5',
    fontWeight: '100',
    fontFamily: 'Poppins, sans-serif'
})

const Photo = styled(Avatar)({
    width: '400px',
    height: '400px',
    variant: 'square',
    alt: 'Image'
})

const GithubIcon = styled(GitHubIcon)({
    fontSize: 90,
    paddingBottom: '8px',
    marginTop: '80px',
    marginRight: '80px',
})

const LinkedinIcon = styled(LinkedInIcon)({
    fontSize: 100,
    marginTop: '80px'
})

export default function About() {

  return (
    <Grid
      container
      direction='row'
      justifyContent='center'
      alignItems='center'
    >
        <Grid item xl={3} lg={4} md={4} sm={12} space={2}>
            <Introduction color='secondary'>
                I am <strong>Chengyang Li</strong>,<br/>
                a fouth year computer science student <br/>
                and a full-stack developer.
                <br/>
                <Link href="https://github.com/chengyangliii">
                    <GithubIcon color='primary'/>
                </Link>
                <Link href="https://www.linkedin.com/in/chengyang-allan-li">
                    <LinkedinIcon color='primary'/>
                </Link>
            </Introduction>
        </Grid>
        <Grid item xl={3} lg={4} md={4} sm={12} space={2}>
            <Photo src={lcy}/>
        </Grid>
    </Grid>
    
  );
}

