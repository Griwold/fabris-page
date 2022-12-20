import React from 'react';
import { Stack } from '@mui/material';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { ContainerSocial } from './socialsStyle';

const Socials = () => {

    const openInstagram = () => window.open('https://www.instagram.com/fabrii.s22/', '_blank');
    const openYoutube = () => window.open('https://www.youtube.com/@fabrisanchez286', '_blank');
    const openLinkedin= () => window.open('https://www.linkedin.com/in/fabri-sanchez-1a1842228/', '_blank');

    return (
        <ContainerSocial>
            <Stack gap={1} direction='column'>
                <LinkedInIcon onClick={openLinkedin} sx={{ cursor: 'pointer', color: 'gray' }} fontSize='medium' />
                <YouTubeIcon onClick={openYoutube} sx={{ cursor: 'pointer', color: 'gray' }} fontSize='medium' />
                <InstagramIcon onClick={openInstagram} sx={{ cursor: 'pointer', color: 'gray' }} fontSize='medium'/>
            </Stack>
        </ContainerSocial>
    )
}

export default Socials;