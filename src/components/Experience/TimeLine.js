import React from 'react';
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

const Position = styled(Typography)({
})

const Period = styled(Typography)({
})

const Company = styled(Typography)({
  padding: '0 0 1em'
})

export default function ExperienceTimeline() {

  const classes = useStyles()

  return (
    <Timeline align={window.innerWidth > 960 ? "alternate" : "left"}>
      <TimelineItem style={{minHeight: "100px", padding: "8px 0 8px 0"}}>
        <TimelineSeparator>
          <Icon color="primary">
            <LaptopMacIcon fontSize="large" />
          </Icon>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent className={classes.timelineContentRight}>
          <Position variant="h5" color="secondary">
            Full Stack Developer
          </Position>
          <Period variant="h6" color="secondary">
            May 2021 - Aug 2021
          </Period>
          <Company>
            Elections Canada, Gatineau, QC
          </Company>           
          </TimelineContent>
      </TimelineItem>

      <TimelineItem style={{minHeight: "100px", padding: "8px 0 8px 0"}}>
        <TimelineSeparator>
          <Icon color="primary">
            <LaptopMacIcon fontSize="large" />
          </Icon>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Typography variant="h5" color="secondary">
            Web Developer
          </Typography>
          <Typography variant="h6" color="secondary">
            Sep 2020 - Dec 2020
          </Typography>
          <Typography>
            University of Ottawa, Ottawa, ON
          </Typography> 
        </TimelineContent>
      </TimelineItem>

      <TimelineItem style={{minHeight: "100px", padding: "8px 0 8px 0"}} >
        <TimelineSeparator>
          <Icon color="primary">
            <LaptopMacIcon fontSize="large"/>
          </Icon>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent className={classes.timelineContentRight}>
          <Typography variant="h5" color="secondary">
            Software Developer
          </Typography>
          <Typography variant="h6" color="secondary">
            Jan 2020 - Apr 2020
          </Typography>
          <Typography  >
            House of Commons, Ottawa, ON
          </Typography>           
        </TimelineContent>
      </TimelineItem>

      <TimelineItem style={{minHeight: "100px"}}>
        <TimelineSeparator>
          <Icon color="primary">
            <AccountBalanceIcon fontSize="large"/>
          </Icon>
        </TimelineSeparator>
        <TimelineContent>
          <Typography variant="h5" color="secondary">
            Computer Science
          </Typography>
          <Typography variant="h6" color="secondary">
            Sep 2017 - Dec 2021
          </Typography>
          <Typography >
            University of Ottawa, Ottawa, ON
          </Typography>           
          <Typography>
            Last two years GPA 3.86 / 4.0
          </Typography>
        </TimelineContent>
      </TimelineItem>
    </Timeline>
  );
}
