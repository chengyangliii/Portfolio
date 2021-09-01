import React from "react";
import {
  Typography
} from "@material-ui/core";
import styled from 'styled-components';

const PostImg = styled.img `
  src: ${props => props.image};
  alt: 'Image lost';
  width: 250px;
`
const Post = styled.section `
  display: flex;
  flex-flow: row nowrap;
  text-align: left;
`

const PostContent = styled.div `
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-evenly;
  padding: 20px;
  ${'' /* box-shadow: 12px 12px 2px 1px */}
  ${'' /* background-color: #090f0a */}
` 


export default function ProjectCard(props) {

  return (
    <Post>
      
      <PostContent>
        <Typography variant="h5" color='primary'>
          {props.projectName}
        </Typography>

        <Typography color='secondary' style={{marginTop: "6px"}}>
          {props.intro }
        </Typography>
       
      </PostContent>

      <PostImg src={props.image} width='100%' />
      
    </Post>
  );
}
