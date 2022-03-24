import React from "react";
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Badge from '@mui/material/Badge';
import Avatar from '@mui/material/Avatar';
import { Container } from "@mui/material";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const bull = (
    <Box
        component="span"
        sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
    >
        •
    </Box>
);


const StyledBadge = styled(Badge)(({ theme }) => ({
    '& .MuiBadge-badge': {
        backgroundColor: '#44b700',
        color: '#44b700',
        boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
        '&::after': {
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            borderRadius: '50%',
            animation: 'ripple 1.2s infinite ease-in-out',
            border: '1px solid currentColor',
            content: '""',
        },
    },
    '@keyframes ripple': {
        '0%': {
            transform: 'scale(.8)',
            opacity: 1,
        },
        '100%': {
            transform: 'scale(2.4)',
            opacity: 0,
        },
    },
}));


const Login = props => {
    return (
        <React.Fragment>
            <Card variant="outlined" sx={{ maxWidth: 450, maxHeight: 4000, borderRadius: 5, borderColor: 'primary.main', paddingTop: 1 }} >
                <CardContent>
                    <h2 >Login Here</h2>
                    <StyledBadge
                        overlap="circular"
                        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                        variant="dot"

                    >
                        <Avatar
                            alt="Remy Sharp"
                            src="/static/images/avatar/1.jpg"
                            sx={{ width: 56, height: 56 }}
                            position='sticky'
                        /></StyledBadge>
                    <form>
                        <div paddingTop="10px">
                            <label htmlFor="MailId">Enter Email Address:</label>
                            <input type="text" placeholder="xyz@abc.com"></input>
                        </div>
                        <div>
                            <label htmlFor="Password">Enter Password:</label>
                            <input type="text" placeholder="*****"></input>
                        </div>
                        <Button variant="contained" onClick={props.onClick}>Login</Button>
                        <Button variant="outlined" onClick={props.onRegisterClick}>
                            Register Here
                        </Button>
                    </form>
                </CardContent>
                <CardActions>
                    <Button size="small">Learn More</Button>
                </CardActions>

            </Card>


        </React.Fragment>
    );

};
export default Login;