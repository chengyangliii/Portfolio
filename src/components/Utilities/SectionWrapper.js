import React from 'react';
import {Typography} from "@material-ui/core";
import styled from 'styled-components';

const Wrapper = styled.div `
  text-align: center;
  padding-top: 5em;
`

export function SectionWrapper(props) {
  return (
    <Wrapper>
      <Typography variant='h4' color='primary' style={{fontWeight: '900'}}>{props.title}</Typography>
      {props.children}
    </Wrapper>
  );
}