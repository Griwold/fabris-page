import { Grid, styled, Button } from '@mui/material'

export const CustomGridItem = styled(Grid)({
    display: 'flex',
    justifyContent: 'center',
    alignItem: 'center'
}) as typeof Grid

export const ShowButton = styled(Button)({
    backgroundColor: '#121212',
    color: 'gray',
    borderRadius: 50,
    width: 200,
    fontSize: '1rem',
    fontWeight: 'bold',
    textTransform: 'capitalize',

    ':hover': {
        backgroundColor: '#121212',
        border: '1px solid',
        borderColor: '#262424',
    }
}) as typeof Button;