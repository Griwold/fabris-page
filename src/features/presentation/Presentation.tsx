import React from 'react';
import { Button, Stack } from '@mui/material';

import { Container } from '../../constants/styles/globalStyles';
import { NameTitle, SubTitle, PortfolioButton, ContactButton } from './presentationStyle';

const Presentation = () => (
        <Container flexDirection={'column'} gap={4}>
            <NameTitle> Fabrizio Sanchez </NameTitle>
            <SubTitle> Animador de pitos </SubTitle>
            <Stack direction={'row'} gap={2}>
            <PortfolioButton> Portfolio </PortfolioButton>
            <ContactButton> Contact me</ContactButton>
            </Stack>
        </Container>
);

export default Presentation;