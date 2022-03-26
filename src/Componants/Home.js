import React from "react";
import AppBarHeader from "./AppBar/AppBarHeader";
import Drawer from "./Drawer/Drawer";
import DrawerHeader from "./Drawer/DrawerHeader";
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import { styled, useTheme } from '@mui/material/styles';
import Registration from "./Login/Registration";
// import Login from "./Login/Login";
import Suppliers from "./Suppliers/Suppliers";
import { Route, Routes } from 'react-router-dom';
// import Typography from '@mui/material/Typography';
import Agencies from "./Agencies/Agencies";
import LoginRegistration from './Login/LoginRegistration';
import About from './AppBar/About';
import Departments from './Departments/Departments';
import Customers from './Customers/Customers';
import Workers from './Workers/Workers';
import Items from './Items/Items';
import PhotosPosters from './Photos_Posters/PhotosPosters';
import Models from './Models/Models';
import Messages from './Messages/Messages';
import Notifications from './Notifications/Notifications';
import Settings from "./Settings/Settings";
import ChangePassword from "./Login/ChangePassword";

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
        flexGrow: 1,
        padding: theme.spacing(3),
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        marginLeft: "20px",
        ...(open && {
            transition: theme.transitions.create('margin', {
                easing: theme.transitions.easing.easeOut,
                duration: theme.transitions.duration.enteringScreen,
            }),
            marginLeft: 0,
        }),
    }),
);
const Home = () => {

    const drawerWidth = 200;
    const theme = useTheme();
    const [open, setOpen] = React.useState(false);

    const handleDrawerOpen = () => {
        setOpen(true);
    };
    const handleDrawerClose = () => {
        setOpen(false);
    };

    // const [isLoggedIn, setIsLoggedIn] = useState(true)
    return (
        <React.Fragment>
            <Box sx={{ display: 'flex' }} >
                <CssBaseline />
                <AppBarHeader drawerwidth={drawerWidth} open={open} onOpen={handleDrawerOpen} />
                <Drawer drawerwidth={drawerWidth} open={open} theme={theme} onClose={handleDrawerClose}></Drawer>
                <Main >

                    <DrawerHeader />
                    <Routes>
                        <Route path="/About" element={<About />} exact />

                        <Route path="/Login" element={<LoginRegistration />} />
                        <Route path="/Registration" element={<Registration />} />

                        <Route path="/Departments" element={<Departments />} exact />
                        <Route path="/Suppliers" element={<Suppliers />} exact />
                        <Route path="/Customers" element={<Customers />} exact />
                        <Route path="/Workers" element={<Workers />} exact />
                        <Route path="/Agencies" element={<Agencies drawerwidth={drawerWidth} open={open} />} exact />
                        <Route path="/Items" element={<Items />} exact />
                        <Route path="/PhotosPosters" element={<PhotosPosters />} />
                        <Route path="/Models" element={<Models />} exact />
                        <Route path="/Messages" element={<Messages />} exact />
                        <Route path="/Notifications" element={<Notifications />} exact />
                        <Route path="/Settings" element={<Settings />} exact />
                        <Route path="/ChangePassword" element={<ChangePassword />} exact />
                    </Routes>
                </Main>
            </Box>
        </React.Fragment >

    );
};
export default Home;