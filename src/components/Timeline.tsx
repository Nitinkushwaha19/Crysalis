import * as React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import { Card, CardMedia, CardContent, Typography, useMediaQuery, Box } from '@mui/material';

export default function OppositeContentTimeline() {
  const isSmallScreen = useMediaQuery('(max-width:600px)');  // Check if the screen width is small

  return (
    <Timeline position="alternate" sx={{ margin: '10rem' }}>
      <TimelineItem>
        <TimelineOppositeContent color="text.secondary">
          09:30 am
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Card
            sx={{
              display: 'flex',
              width: '100%',
              height: isSmallScreen ? 'auto' : '300px',
              flexDirection: isSmallScreen ? 'column' : 'row',
              borderRadius: '8px',
              boxShadow: 3
            }}
          >
            <CardMedia
              component="img"
              sx={{
                width: isSmallScreen ? '100%' : '50%',
                height: '100%',
                objectFit: 'cover',
              }}
              image="https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&q=80"
              alt="Eat"
            />
            <CardContent
              sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',  // Vertically center the content
                alignItems: 'center',  // Horizontally center the content
                textAlign: 'center', // Center the text inside the content
                padding: '10px',
                height: '100%' // Ensure it takes full height of the card
              }}
            >
              <Typography variant="h6" component="div">
                Eat
              </Typography>
              <Typography variant="body2" color="text.secondary">
                It's time to have a healthy meal and refuel.
              </Typography>
            </CardContent>
          </Card>
        </TimelineContent>
      </TimelineItem>

      <TimelineItem>
        <TimelineOppositeContent color="text.secondary">
          10:00 am
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Card
            sx={{
              display: 'flex',
              width: '100%',
              height: isSmallScreen ? 'auto' : '300px',
              flexDirection: isSmallScreen ? 'column' : 'row',
              borderRadius: '8px',
              boxShadow: 3
            }}
          >
            <CardMedia
              component="img"
              sx={{
                width: isSmallScreen ? '100%' : '50%',
                height: '100%',
                objectFit: 'cover',
              }}
              image="https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&q=80"
              alt="Code"
            />
            <CardContent
              sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',  // Vertically center the content
                alignItems: 'center',  // Horizontally center the content
                textAlign: 'center', // Center the text inside the content
                padding: '10px',
                height: '100%' // Ensure it takes full height of the card
              }}
            >
              <Typography variant="h6" component="div">
                Code
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Time to dive into some coding and work on projects.
              </Typography>
            </CardContent>
          </Card>
        </TimelineContent>
      </TimelineItem>

      <TimelineItem>
        <TimelineOppositeContent color="text.secondary">
          12:00 am
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Card
            sx={{
              display: 'flex',
              width: '100%',
              height: isSmallScreen ? 'auto' : '300px',
              flexDirection: isSmallScreen ? 'column' : 'row',
              borderRadius: '8px',
              boxShadow: 3
            }}
          >
            <CardMedia
              component="img"
              sx={{
                width: isSmallScreen ? '100%' : '50%',
                height: '100%',
                objectFit: 'cover',
              }}
              image="https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&q=80"
              alt="Sleep"
            />
            <CardContent
              sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',  // Vertically center the content
                alignItems: 'center',  // Horizontally center the content
                textAlign: 'center', // Center the text inside the content
                padding: '10px',
                height: '100%' // Ensure it takes full height of the card
              }}
            >
              <Typography variant="h6" component="div">
                Sleep
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Rest is important for a healthy mind and body.
              </Typography>
            </CardContent>
          </Card>
        </TimelineContent>
      </TimelineItem>

      <TimelineItem>
        <TimelineOppositeContent color="text.secondary">
          9:00 am
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Card
            sx={{
              display: 'flex',
              width: '100%',
              height: isSmallScreen ? 'auto' : '300px',
              flexDirection: isSmallScreen ? 'column' : 'row',
              borderRadius: '8px',
              boxShadow: 3
            }}
          >
            <CardMedia
              component="img"
              sx={{
                width: isSmallScreen ? '100%' : '50%',
                height: '100%',
                objectFit: 'cover',
              }}
              image="https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&q=80"
              alt="Repeat"
            />
            <CardContent
              sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',  // Vertically center the content
                alignItems: 'center',  // Horizontally center the content
                textAlign: 'center', // Center the text inside the content
                padding: '10px',
                height: '100%' // Ensure it takes full height of the card
              }}
            >
              <Typography variant="h6" component="div">
                Repeat
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Time to repeat the cycle and stay productive!
              </Typography>
            </CardContent>
          </Card>
        </TimelineContent>
      </TimelineItem>
    </Timeline>
  );
}
