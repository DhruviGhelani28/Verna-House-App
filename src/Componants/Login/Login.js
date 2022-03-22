import React from "react";
import Button from '@mui/material/Button';

const Login = props => {
    return (
        <React.Fragment>
            <form>
                <div>
                    <label htmlFor="MailId">Enter Email Address:</label>
                    <input type="text" placeholder="xyz@abc.com"></input>
                </div>
                <div>
                    <label htmlFor="Password">Enter Password:</label>
                    <input type="text" placeholder="*****"></input>
                </div>
                <Button variant="contained">Login</Button>
                <Button variant="outlined" onClick={props.onClick}>
                    Register Here
                </Button>
            </form>
        </React.Fragment>
    );

};
export default Login;