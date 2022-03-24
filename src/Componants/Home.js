import React from "react";
import AppBarHeader from "./AppBar/AppBarHeader";
import Drawer from "./Drawer/Drawer";
import DrawerHeader from "./Drawer/DrawerHeader";
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import { useTheme } from '@mui/material/styles';
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


const Home = () => {

    const drawerWidth = 210;
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
                <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
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

                    </Routes>
                </Box>
            </Box>
        </React.Fragment >

    );
};
export default Home;