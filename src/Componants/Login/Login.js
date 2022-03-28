import React from "react";
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Badge from '@mui/material/Badge';
import Avatar from '@mui/material/Avatar';
// import { Container } from "@mui/material";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import AccountCircle from '@mui/icons-material/AccountCircle';
import key from "../../images/key.png";
import classes from '../Login.module.css';
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom';
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
    const navigate = useNavigate()

    const changePasswordHandler = () => {
        navigate("/ChangePassword")
    }

    return (
        <div>
            <Card variant="outlined" sx={{ maxWidth: 550, maxHeight: 4000, borderRadius: 5, borderColor: 'primary.main', paddingTop: 1, marginTop: 3, margin: "center" }} margin="10px">
                <CardContent>
                    <h2 >Sign In Here</h2>
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

                    <Box
                        component="form"
                        sx={{
                            marginTop: 5,

                            '& .MuiTextField-root': { m: 1, width: '40ch' },
                            // '& .MuiButton-root': { marginRight:10 },
                        }}
                        noValidate
                        autoComplete="off"
                    >
                        <div>
                            <div>
                                <AccountCircle sx={{ color: 'action.active', mr: 1, my: 0.5, position: 'relative', marginTop: 3, marginRight: -0.3 }} />
                                <TextField
                                    required
                                    multiline
                                    id="outlined-textarea"
                                    label="Enter Your Email Address"
                                    placeholder="xyz@abc.com"
                                />
                            </div>
                            <div>
                                <img width="23" src={key} className={classes.marginTop} alt="key"></img>
                                <TextField
                                    required
                                    id="outlined-password-input"
                                    label="Enter Password"
                                    type="password"
                                    placeholder="*******"
                                    autoComplete="current-password"
                                />
                            </div>
                            <div className={classes.button}>
                                <Button
                                    variant="contained"
                                    onClick={props.onClick}
                                    sx={{
                                        marginTop: 0.5 ,
                                        marginRight: -38.5,
                                        
                                    }}>
                                    Sign In</Button>
                            </div>
                            <div className={classes.register}>
                                <Typography variant="body1" sx={{ marginTop: 0.5, marginLeft: -9 }}>
                                    Don't You Have An Account?
                                    <Link to={"/Registration"}> Sign Up  </Link>
                                </Typography>
                                <Typography variant="body1" sx={{ marginTop: 0.5, marginLeft:-26 }}>
                                    <Link to={"/Registration"}>Forgot Password?
                                    </Link>
                                </Typography>
                            </div>
                        </div>
                    </Box>

                </CardContent>
                <CardActions>
                    <Button size="small" onClick={changePasswordHandler}>Change Password</Button>
                </CardActions>
            </Card>
        </div>

    );

};
export default Login;