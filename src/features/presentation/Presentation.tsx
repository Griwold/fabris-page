import React from 'react';
import { Stack } from '@mui/material';
import images from '../../constants/images/index';

import { Container } from '../../constants/styles/globalStyles';
import { NameTitle, SubTitle, PortfolioButton, ContactButton } from './presentationStyle';

const Presentation = () => (
    <Container >
        <img src={images.home3} style={{ position: 'absolute', right: '10vw', bottom: '15%', zIndex: 1 }} />
        <Stack gap={4} alignItems="center" pr={'20%'} sx={{ zIndex: 9999 }}>
            <NameTitle> Fabrizio Sanchez </NameTitle>
            <SubTitle> {`${'Diseño y animación digital'}`.toUpperCase()} </SubTitle>
            <Stack direction={'row'} gap={2}>
                <PortfolioButton> Portfolio </PortfolioButton>
                <ContactButton> Contact me</ContactButton>
            </Stack>
        </Stack>
    </Container>
);

export default Presentation;