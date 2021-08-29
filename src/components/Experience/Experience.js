import React from 'react';
import { SectionWrapper } from "../Utilities/SectionWrapper";
import Timeline from "./TimeLine";
import styled from 'styled-components';

const Wrapper = styled.div `
  margin: 0 64px;
`

export default function Experience() {
  return (
    <SectionWrapper title="Professional Experiences">
      <Wrapper>
        <Timeline />
      </Wrapper>
    </SectionWrapper>
  );
}
