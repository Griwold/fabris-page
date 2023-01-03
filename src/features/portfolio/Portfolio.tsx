import React from 'react'
import YouTube, { YouTubeProps } from 'react-youtube';
import { Button, Box } from '@mui/material';

import { Container } from '../../constants/styles/globalStyles';
import { ShowButton } from './portfolioStyle';


const Portfolio = () => {

    const opts: YouTubeProps['opts'] = {
        height: '720',
        width: '1280',
    };

    return (
        <Container flexDirection={'column'}>
            <YouTube videoId={'GnkJoL9fyio'} opts={opts} />
            {/* <Box pt={6}>
                <ShowButton>Show more ...</ShowButton>
            </Box> */}
        </Container>
    )
}

export default Portfolio;