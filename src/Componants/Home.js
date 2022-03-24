import React from "react";
import AppBarHeader from "./AppBar/AppBarHeader";
// import MainHeader from "./MainHeader";
import Drawer from "./AppBar/Drawer";
import DrawerHeader from "./AppBar/DrawerHeader";
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import { useTheme } from '@mui/material/styles';

const Home = () => {

    const drawerWidth = 240;
    const theme = useTheme();
    const [open, setOpen] = React.useState(false);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    return (
        <React.Fragment>
            <CssBaseline />
            <AppBarHeader drawerwidth={drawerWidth} open={open} onOpen={handleDrawerOpen}  />
            <Drawer drawerwidth={drawerWidth} open={open} theme={theme} onClose={handleDrawerClose}></Drawer>
            <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
                <DrawerHeader />
            </Box>
        </React.Fragment>

    );
};
export default Home;