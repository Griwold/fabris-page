import React from 'react'
import { Box } from '@mui/material';

import { Container } from '../../constants/styles/globalStyles';
import { ShowButton } from './portfolioStyle';
import YoutubeIFrame from '../../components/YoutubeIFrame';


const Portfolio = () => {

    return (
        <Container flexDirection={'column'}>
            <YoutubeIFrame videoId='GnkJoL9fyio' />
            {/* <Box pt={6}>
                <ShowButton>Show more ...</ShowButton>
            </Box> */}
        </Container >
    )
}

export default Portfolio;