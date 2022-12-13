import { styled, Typography, Button } from "@mui/material";

export const NameTitle = styled(Typography)({
    color: 'white', 
    fontSize: 70, 
    fontFamily: 'revert'
}) as typeof Typography;

export const SubTitle = styled(Typography)({
    color: 'white', 
    fontSize: 18, 
    fontFamily: 'revert'
}) as typeof Typography;

export const PortfolioButton = styled(Button)({
    backgroundColor: '#FFF',
    color: '#121212',
    borderRadius: 50,
    width: 120,
    fontSize: '0.75rem',
    fontWeight: 'bold',
    textTransform: 'capitalize',

    ':hover': {
        backgroundColor: '#FFF',
    }
}) as typeof Button;

export const ContactButton = styled(Button)({
    backgroundColor: '#121212',
    color: '#FFF',
    borderRadius: 50,
    width: 120,
    fontSize: '0.75rem',
    fontWeight: 'bold',
    textTransform: 'capitalize',

    ':hover': {
        backgroundColor: '#121212',
    }
}) as typeof Button;

