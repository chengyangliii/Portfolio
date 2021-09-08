import React from 'react';
import { Typography } from "@material-ui/core";
import { Divider } from '@material-ui/core';
import styled from 'styled-components';
import { projectsInterface } from '../../App';
 
const PostWrapper = styled.div `
  margin: 1em 0 5em 0;
  width: 600px;
  margin-left: calc((100% - 600px) / 2);
  text-align: center;
  padding-top: 4em;
`
const Wrapper = styled.div `
  padding-bottom: 3em;
`
const PostImg = styled.img `
  alt: 'Image not found';
  width: 200px;
  margin: 10px;
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
const Link = styled.a `
  text-decoration:none;
`
const Transition = styled.div `
  ${Link}:hover & {
    transform: scale(1.1, 1.1);
  }
`

const Projects: React.FC<projectsInterface> = ({projects}) => {

  const renderList = (): JSX.Element[] => {
    return projects.map(project => {
      return (
        <Link href={project.githubLink}>
          <Transition>
            <Post>
              <PostContent>
                <Typography variant="h5" color='primary'>
                  {project.title}
                </Typography>
                <Typography color='secondary' style={{marginTop: "6px"}}>
                  {project.desc}
                </Typography>
              </PostContent>
              <PostImg src={project.image} />
            </Post>
          </Transition>
        </Link>
      )
    })
  }

  return (
    <>
      <PostWrapper>
        <Wrapper>
          <Typography variant='h4' color='primary'>Projects</Typography>
        </Wrapper>
        {renderList()}
      </PostWrapper>
      <Divider/>   
    </>
  );
}

export default Projects