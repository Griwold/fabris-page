import React from 'react';
import { Box, Stack } from '@mui/material';
import { BrowserView, MobileView } from 'react-device-detect';

import { Container } from '../../constants/styles/globalStyles';
import { SubTitle, Title, SubTitleMobile } from './aboutStyle';

const About = () => {
  return (
    <>
      <BrowserView>
        <Container >
          <Stack direction={'column'} width={'60%'} alignItems={'center'} height={'100vh'} paddingTop={10}>
            <Title>
              About me
            </Title>
            <SubTitle mt={20} >
              I'm a junior versatile video editor and 3D animator.
              I'm passionate about what I do and I'm an ambitious person who wants to grow in his professional career. I'm a quick learner. I love learning new things that will improve the quality and the efficiency of my work. I’m in my last year of university so my experience is based on university and personal works.
              I believe in the importance of teamwork so I always try to lend a helping hand to whoever needs it, hence my colleagues often compliment me for being an attentive, positive, proactive and patient leader.
              I'm a social person, I enjoy meeting and connecting with people, so I'm open to hear and talk about work offers.
            </SubTitle>
          </Stack>
        </Container>
      </BrowserView>

      <MobileView>
        <Container >
          <Stack direction={'column'} width={'80%'} alignItems={'center'} height={'100vh'}>
            <SubTitleMobile >
              I'm a junior versatile video editor and 3D animator.
              I'm passionate about what I do and I'm an ambitious person who wants to grow in his professional career. I'm a quick learner. I love learning new things that will improve the quality and the efficiency of my work. I’m in my last year of university so my experience is based on university and personal works.
              I believe in the importance of teamwork so I always try to lend a helping hand to whoever needs it, hence my colleagues often compliment me for being an attentive, positive, proactive and patient leader.
              I'm a social person, I enjoy meeting and connecting with people, so I'm open to hear and talk about work offers.
            </SubTitleMobile>
          </Stack>
        </Container>
      </MobileView>
    </>
  )
}

export default About;