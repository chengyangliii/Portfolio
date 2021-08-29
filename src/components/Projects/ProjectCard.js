import React from "react";
import {Typography} from "@material-ui/core";
import styled from 'styled-components';

const PostImg = styled.img `
  src: ${props => props.image};
  alt: 'Error';
  width: 50%;
  height: 300px;
`
const Post = styled.section `
  display: flex;
  flex-flow: row nowrap;
  text-align: left;
  margin-bottom: 24px;
`

const PostContent = styled.div `
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-evenly;
  background-color: #022754;
  padding: 0 20px;
` 


export default function ProjectCard(props) {

  return (
    <Post>
      
      <PostContent>
        <Typography variant="h6">
          {props.projectName}
        </Typography>

        <Typography style={{marginTop: "6px"}}>
          {props.intro }
        </Typography>
      </PostContent>

      <PostImg src={props.image} />
      
    </Post>
  );
}
