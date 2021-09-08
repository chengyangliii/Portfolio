import React from 'react';
import { ExperienceInterface } from '../../App';
import { Typography } from "@material-ui/core";
import { 
  Timeline, 
  TimelineItem, 
  TimelineSeparator, 
  TimelineConnector, 
  TimelineContent,
  TimelineDot
} from '@material-ui/lab';
import AccountBalanceIcon from '@material-ui/icons/AccountBalance';
import LaptopMacIcon from '@material-ui/icons/LaptopMac';
import {
  makeStyles,
  styled
} from "@material-ui/core/styles";

const Icon = styled(TimelineDot)({
})

const useStyles = makeStyles((theme) => ({

  timelineContentRight: {
    textAlign: 'left'
  },
  })
)

const Wrapper = styled(Typography)({
  textAlign: 'center',
  paddingTop: '5em',
  margin: '0 64px'
})

const Position = styled(Typography)({
})

const Period = styled(Typography)({
})

const Company = styled(Typography)({
  padding: '0 0 1em'
})

const Experience: React.FC<ExperienceInterface> = ({experience}) => {

  const classes = useStyles()

  const renderList = (): JSX.Element[] => {
    return experience.map(exper => {
      return (
        exper.academic ? 
        <TimelineItem style={{minHeight: "100px"}}>
          <TimelineSeparator>
            <Icon color="primary">
              <AccountBalanceIcon fontSize="large"/>
            </Icon>
          </TimelineSeparator>
          <TimelineContent>
            <Typography variant="h5" color="secondary">
              {exper.position}
            </Typography>
            <Typography variant="h6" color="secondary">
              {exper.period}
            </Typography>
            <Typography >
              {exper.company}
            </Typography>           
            {/* <Typography>
              Last two years GPA 3.86 / 4.0
            </Typography> */}
          </TimelineContent>
        </TimelineItem>
        :
        <TimelineItem style={{minHeight: "100px", padding: "8px 0 8px 0"}}>
          <TimelineSeparator>
            <Icon color="primary">
              <LaptopMacIcon fontSize="large" />
            </Icon>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent className={classes.timelineContentRight}>
            <Position variant="h5" color="secondary">
              {exper.position}
            </Position>
            <Period variant="h6" color="secondary">
              {exper.period}
            </Period>
            <Company>
              {exper.company}
            </Company>           
          </TimelineContent>
        </TimelineItem>
      )
    })
  }

  return (
    <>
      <Wrapper>
        <Typography variant='h4' color='primary'>Professional Experiences</Typography>
        <Timeline align={window.innerWidth > 960 ? "alternate" : "left"}>
          {renderList()}
        </Timeline>
        
    </Wrapper> 
    </>
  );
}

export default Experience