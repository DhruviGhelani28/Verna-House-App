import React from "react";
import { BrowserRouter as Router, Link, Routes, Route, useNavigate } from "react-router-dom";
import Login from './Login';
import Registration from "./Registration";
import Button from '@mui/material/Button';

const LoginRegistration = props => {
    // let match = useMatch();
    const navigate = useNavigate()
    const registrationHandler = () => {
        navigate("/Registration")
    }
    return (
        <React.Fragment>

            <h2 align="center">Login Here</h2>
            <Routes>
                <Route path="/" element={<Login onClick={registrationHandler}/>} exact />
                <Route path="/Registration" element={<Registration />} exact />
            </Routes>

            

        </React.Fragment>

    );

};
export default LoginRegistration;