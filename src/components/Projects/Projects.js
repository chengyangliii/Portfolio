import React from 'react';
import ProjectCard from "./ProjectCard";
import { SectionWrapper } from "../Utilities/SectionWrapper";
import { Divider } from '@material-ui/core';
import burgerImage from "../../lcy.jpeg";
import styled from 'styled-components';
 

const PostWrapper = styled.div `
  margin: 2em 0 5em 0;
  width: 600px;
  margin-left: calc((100% - 600px) / 2);
`

export default function Projects() {
  return (
    <SectionWrapper title="Projects">
      <PostWrapper>
        <ProjectCard 
          image={burgerImage}
          imgTitle="Exam System Web App" 
          projectName="Exam System Web App"
          intro="Implemented a RESTful backend with Node.js, 
          Express Built frontend with React, React Hooks Managed 
          states with Redux, React-Redux Stored data in MongoBD 
          Atlas Styled UI by Bootstrap, Materialize, React-Bootstrap 
          Used PassportJS, Google OAuth for authentication Deployed 
          on AWS Elastic BeanStalk Configured AWS code pipeline for 
          continuous integration"
          websiteLink="#"
          githubLink="#"
        />
      </PostWrapper>
      <Divider/>   
    </SectionWrapper>
  );
}
