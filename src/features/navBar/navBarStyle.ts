import { styled, Box, Typography, TypographyProps } from '@mui/material';

export const NavBarContainer = styled(Box)({
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems:'center',
    height: 50, 
    width: '100%', 
    backgroundColor: 'transparent', 
    position: 'absolute',
}) as typeof Box;

interface StyledTypographyProps extends TypographyProps {
    isClicked?: boolean;
}

export const Navtitle = styled(Typography)<StyledTypographyProps>(({ isClicked }) => ({
    color: isClicked ? 'pink' : '#FFF', 
    fontSize: 14, 
    fontFamily: 'revert',
    textDecoration: 'pink',
    ':hover': {
        cursor: 'pointer',
        color: 'gray'
    }
}));