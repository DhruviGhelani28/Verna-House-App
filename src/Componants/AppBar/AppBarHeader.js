import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { styled, alpha } from '@mui/material/styles';

// import AppBar from '@mui/material/AppBar';
import MuiAppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import Badge from '@mui/material/Badge';

import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import MailIcon from '@mui/icons-material/Mail';
import NotificationsIcon from '@mui/icons-material/Notifications';
import AccountCircle from '@mui/icons-material/AccountCircle';
import ButtonBase from '@mui/material/ButtonBase';
import MoreIcon from '@mui/icons-material/MoreVert';

import MainMenu from './MainMenu';
import RenderMenu from './RenderMenu';
import MobileMenu from './MobileMenu';

// const pages = ['Home', 'About', 'Login']
const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open, drawerwidth }) => ({
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
        marginLeft: drawerwidth,
        width: `calc(100% - ${drawerwidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    }),
}));

const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(3),
        width: 'auto',
    },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));

const StyledInputBased = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
            width: '20ch',
        },
    },
}));

const Button1 = styled(ButtonBase)(({ theme }) => ({
    position: 'relative',
    '&:hover, &.Mui-focusVisible': {
        zIndex: 1,

        '& .MuiImageBackdrop-root': {
            opacity: 0.15,
        },
        '& .MuiImageMarked-root': {
            opacity: 0,
        },
        '& .MuiTypography-root': {
            border: '1px solid currentColor',
            borderRadius: '10px',
            paddingTop: 8,
            height: 40
        },
    },
}));

const ImageMarked = styled('span')(({ theme }) => ({
    height: 2,
    width: 18,
    backgroundColor: theme.palette.common.white,
    position: 'absolute',
    bottom: 10,
    left: 'calc(50% - 9px)',
    transition: theme.transitions.create('opacity'),
}));

const mainMenuId = 'default-show-all-modules';
const menuId = 'primary-search-account-menu';
const mobileMenuId = 'primary-search-account-menu-mobile';
// const drawerwidth = 240;
const AppBarHeader = props => {

    const navigate1 = useNavigate()
    const navigate2 = useNavigate()
    const navigate3 = useNavigate()

    const homeHandler = () => {
        navigate1("/")
    }
    const aboutHandler = () => {
        navigate2("/About")
    }
    const loginHandler = () => {
        navigate3("/Login")
    }

    const [anchorEl, setAnchorEl] = useState(null)
    const [mainMenuEl, setMainMenuEl] = useState(null)
    const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState(null)

    const openProfileMenuHandler = (event) => {
        setAnchorEl(event.currentTarget)
    }
    const closeMenuHandler = () => {
        setAnchorEl(null)
        closeMobileMenuHandler()
    }
    const openMobileMenuHandler = (event) => {
        setMobileMoreAnchorEl(event.currentTarget)
    }
    const closeMobileMenuHandler = () => {
        setMobileMoreAnchorEl(null)
    }
    const openMainMenuHandler = (event) => {
        setMainMenuEl(event.currentTarget)
    }
    const closeMainMenuHandler = () => {
        setMainMenuEl(null)
    }


    return (
        <Box sx={{ flexGrow: 1, display: 'flex' }} >
            <AppBar position='sticky' open={props.open} drawerwidth={props.drawerwidth} >
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label='open drawer'
                        sx={{
                            marginRight: 3,
                            ...(props.open && { display: 'none' }),
                        }}
                        aria-haspopup="true"
                        onClick={props.onOpen}
                    >
                        <MenuIcon />
                    </IconButton>

                    <Search>
                        <SearchIconWrapper>
                            <SearchIcon />
                        </SearchIconWrapper>
                        <StyledInputBased
                            placeholder="Search....."
                            inputpprops={{ 'aria-label': 'search' }} />
                    </Search>
                    <Box>
                        <Button1 focusRipple textalign='center'>
                            <Typography
                                component="span"
                                variant="button"
                                onClick={homeHandler}
                                color="inherit"

                                sx={{
                                    position: 'relative',
                                    p: 2,
                                    pt: 0,
                                    pb: (theme) => `calc(${theme.spacing(2)} + 4px)`,
                                }}
                            >
                                Home
                                <ImageMarked className="MuiImageMarked-root" />
                            </Typography>
                        </Button1>
                        <Button1 focusRipple textalign='center'>
                            <Typography
                                component="span"
                                variant="button"
                                onClick={aboutHandler}
                                color="inherit"

                                sx={{
                                    position: 'relative',
                                    p: 2,
                                    pt: 0,
                                    pb: (theme) => `calc(${theme.spacing(2)} + 4px)`,
                                }} >
                                About Us
                                <ImageMarked className="MuiImageMarked-root" />
                            </Typography>
                        </Button1>
                        <Button1 focusRipple textalign='center'>
                            <Typography
                                component="span"
                                variant="button"
                                onClick={loginHandler}
                                color="inherit"

                                sx={{
                                    position: 'relative',
                                    p: 2,
                                    pt: 0,
                                    pb: (theme) => `calc(${theme.spacing(2)} + 4px)`,
                                }} >
                                Login
                                <ImageMarked className="MuiImageMarked-root" />
                            </Typography>
                        </Button1>
                    </Box>

                    <Box sx={{ flexGrow: 1 }} />
                    <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                        <IconButton
                            size="large"
                            aria-label="show 4 new mails"
                            color="inherit">
                            <Badge badgeContent={4} color="error">
                                <MailIcon />
                            </Badge>
                        </IconButton>
                        <IconButton
                            size="large"
                            aria-label='show 17 new notifications'
                            color="inherit">
                            <Badge badgeContent={17} color="error">
                                <NotificationsIcon />
                            </Badge>
                        </IconButton>
                        <IconButton
                            size="large"
                            edge="end"
                            aria-label="account of current user"
                            aria-controls={menuId}
                            aria-haspopup="true"
                            onClick={openProfileMenuHandler}
                            color="inherit"
                        >
                            <AccountCircle />
                        </IconButton>
                    </Box>
                    <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                            size="large"
                            edge="end"
                            aria-label="show more"
                            aria-controls={mobileMenuId}
                            aria-haspopup='true'
                            onClick={openMobileMenuHandler}
                            color="inherit">
                            <MoreIcon />
                        </IconButton>
                    </Box>
                </Toolbar>
            </AppBar>
            <MainMenu mainMenuEl={mainMenuEl} mainMenuId={mainMenuId} onClose={closeMainMenuHandler}></MainMenu>
            <MobileMenu mobileMoreAnchorEl={mobileMoreAnchorEl} mobileMenuId={mobileMenuId} onClose={closeMobileMenuHandler} onOpen={openProfileMenuHandler}></MobileMenu>
            <RenderMenu anchorEl={anchorEl} menuId={menuId} onClose={closeMenuHandler}></RenderMenu>
        </Box >
    );
};
export default AppBarHeader;

/*

<Box sx={{ display: { xs: 'block', md: 'none' } }}>
                        <Menu
                            id="menu-appbar"
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}>
                            {pages.map((page) => (
                                <MenuItem key={page} >
                                    <Typography textAlign="center">{page}</Typography>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>

                   

*/