
import React from 'react';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import { useNavigate, Link } from "react-router-dom";
import IconButton from '@mui/material/IconButton';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import classes from '../Login.module.css';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Select from '@mui/material/Select';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import MenuItem from '@mui/material/MenuItem';

const Rolls = [
    {
        value: 'Supplier',
        label: 'Supplier',
    },
    {
        value: 'Customer',
        label: 'Customer',
    },
    {
        value: 'Agency',
        label: 'Agency',
    },
    {
        value: 'Worker',
        label: 'Worker',
    },
];

const Registration = props => {
    const navigate = useNavigate()

    const goBackHandler = () => {
        navigate("/Login")
    }
    // let { registration } = useParams();

    const [values, setValues] = React.useState({
        name: '',
        email: '',
        username: '',
        password: '',
        confirm: '',
        // weight: '',
        // weightRange: '',
        showPassword: false,
    });

    const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
    };

    const handleClickShowPassword = () => {
        setValues({
            ...values,
            showPassword: !values.showPassword,
        });
    };

    const submitHandler = (e) => {
        e.preventDefault()
        // dispatch()
    }

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    const [roll, setRoll] = React.useState(null);

    const rollChangeHandler = (event) => {
        setRoll(event.target.value);
    };


    return (
        <Container align="center">
            <Card variant="outlined" sx={{ maxWidth: 500, maxHeight: 8000, borderRadius: 5, borderColor: 'primary.main', paddingTop: 1, m: 1 }} margin="10px">
                <CardActions>
                    <IconButton sx={{ marginLeft: 1, }} onClick={goBackHandler}>
                        <ChevronLeftIcon />
                    </IconButton>
                </CardActions>
                <CardContent>
                    <Typography variant="h4" component='div' fontSize='26px' className={classes.registration}>Register Here</Typography>
                    <Box
                        component="form"
                        sx={{
                            marginTop: 5,
                            marginLeft: 0,
                            '& .MuiTextField-root': { m: 1, width: '40ch' },
                        }}
                        noValidate
                        autoComplete="off"
                        onSubmit={submitHandler}
                    >
                        <div>
                            
                            <TextField
                                required
                                multiline
                                size='medium'
                                id="first-name"
                                label="Enter Your Name"
                                placeholder="xyz abc"
                            />
                            <TextField
                                required
                                multiline
                                size='medium'
                                id="email-id"
                                label="Enter Your Email Address"
                                placeholder="xyz@abc.com"
                            />
                            <TextField
                                required
                                multiline
                                size='medium'
                                id="username"
                                label="Enter Your UserName"
                                placeholder="xyz_abc123"
                            />
                            <FormControl required sx={{ m: 1, width: '40ch' }} variant="outlined" autoComplete="current-password">
                                <InputLabel htmlFor="outlined-adornment-password">Enter New Password</InputLabel>
                                <OutlinedInput
                                    label="Enter New Password"
                                    placeholder='*******'
                                    id="new-password"
                                    type={values.showPassword ? 'text' : 'password'}
                                    value={values.password}
                                    onChange={handleChange('password')}
                                    endAdornment={
                                        <InputAdornment position="end">
                                            <IconButton
                                                aria-label="toggle password visibility"
                                                onClick={handleClickShowPassword}
                                                onMouseDown={handleMouseDownPassword}
                                                edge="end"
                                            >
                                                {values.showPassword ? <VisibilityOff /> : <Visibility />}
                                            </IconButton>
                                        </InputAdornment>
                                    }

                                />
                            </FormControl>
                            <FormControl required sx={{ m: 1, width: '40ch' }} variant="outlined" >
                                <InputLabel htmlFor="outlined-adornment-password">Enter Confirm Password</InputLabel>
                                <OutlinedInput
                                    label="Enter Confirm Password"
                                    placeholder='*******'
                                    id="confirm-password"
                                    type={values.showPassword ? 'text' : 'password'}
                                    value={values.password}
                                    onChange={handleChange('password')}
                                    endAdornment={
                                        <InputAdornment position="end">
                                            <IconButton
                                                aria-label="toggle password visibility"
                                                onClick={handleClickShowPassword}
                                                onMouseDown={handleMouseDownPassword}
                                                edge="end"
                                            >
                                                {values.showPassword ? <VisibilityOff /> : <Visibility />}
                                            </IconButton>
                                        </InputAdornment>
                                    }
                                />
                            </FormControl>
                            <FormControl required sx={{ m: 1, width: '40ch' }} >
                                <InputLabel id="roll-id">Roll</InputLabel>
                                <Select
                                    sx={{ textAlign: 'left' }}
                                    labelId="demo-simple-select-label"
                                    id="select-roll"
                                    label="Roll"
                                    value={roll}
                                    onChange={rollChangeHandler}
                                >
                                    {Rolls.map((option) => (
                                        <MenuItem key={option.value} value={option.value}>
                                            {option.label}
                                        </MenuItem>
                                    ))}
                                </Select>
                                <FormHelperText>Please select your roll in system.</FormHelperText>
                            </FormControl>
                            
                            <div className={classes.button}>
                                <Button
                                    variant="contained"
                                    onClick={props.onClick}
                                    sx={{
                                        marginTop: 0.5,
                                        marginRight: -34,
                                    }}>
                                    Sign Up</Button>
                            </div>
                            <div className={classes.register}>
                                <Typography variant="body1" sx={{ marginTop: 0.5, marginLeft: -13.5 }}>
                                    Do You Have An Account?
                                    <Link to={"/Login"}> Sign In  </Link>
                                </Typography>
                                <Typography variant="body1" sx={{ marginTop: 0.5, marginLeft: -27 }}>
                                    <Link to={"/Registration"}>Forgot Password?
                                    </Link>
                                </Typography>
                            </div>
                        </div>
                    </Box>
                </CardContent>
            </Card>
        </Container>
    );

};
export default Registration;