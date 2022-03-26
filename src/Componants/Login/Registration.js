import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import { useNavigate } from "react-router-dom";
import IconButton from '@mui/material/IconButton';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import classes from './Login.module.css';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

const Registration = props => {
    const navigate = useNavigate()

    const goBackHandler = () => {
        navigate("/Login")
    }
    // let { registration } = useParams();
    return (
        <Box>
            <Card variant="outlined" sx={{ maxWidth: 700, maxHeight: 7000, borderRadius: 5, borderColor: 'primary.main', paddingTop: 1, m: 1 }} margin="10px">
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
                            '& .MuiTextField-root': { m: 1, width: '70ch' },
                            // '& .MuiButton-root': { marginRight:10 },
                        }}
                        noValidate
                        autoComplete="off"
                    >
                        <div>
                            <div>
                                <TextField
                                    required
                                    multiline
                                    fullWidth
                                    size='medium'
                                    id="outlined-textarea"
                                    label="Enter Your Email Address"
                                    placeholder="xyz@abc.com"
                                />
                            </div>
                            <div>
                                
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
                                        marginTop: 0.5,
                                        marginRight: -38.5,

                                    }}>
                                    Submit</Button>
                            </div>
                        </div>
                    </Box>
                </CardContent>
            </Card>
        </Box>
    );

};
export default Registration;