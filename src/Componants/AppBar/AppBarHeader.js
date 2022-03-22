import React from 'react';
import { useNavigate } from 'react-router-dom';


import Button from '@mui/material/Button';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
// import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import Badge from '@mui/material/Badge';
// import Menu from '@mui/material/Menu';
// import MenuItem from '@mui/material/MenuItem';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import MailIcon from '@mui/icons-material/Mail';
import NotificationsIcon from '@mui/icons-material/Notifications';
import AccountCircle from '@mui/icons-material/AccountCircle';
import { ButtonBase, Typography } from '@mui/material';




// const pages = ['Home', 'About', 'Login']
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

    // height: 20,
    // [theme.breakpoints.down('sm')]: {
    //     width: '100% !important', // Overrides inline-style
    //     height: 100,
    // },
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
            paddingTop: 7,
            height: 25
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

const menuId = 'primary-search-account-menu';


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
        navigate3("/Login/*")
    }

    // const [anchorEl, setAnchorEl] = React.useState(null);
    // const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

    // const isMenuOpen = Boolean(anchorEl);
    // const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

    // const handleProfileMenuOpen = (event) => {
    //     setAnchorEl(event.currentTarget);
    // };

    return (
        <Box sx={{ flexGrow: 1 }} >
            <AppBar position='sticky'>
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label='open drawer'
                        sx={{ mr: 2 }}
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
                        <Button variant="text" onClick={homeHandler}>Home</Button>
                        <Button variant="outlined" onClick={aboutHandler} bordercolor="white" color="inherit">About Us</Button>
                        <Button1 focusRipple textAlign='center'>
                            <Typography
                                component="span"
                                variant="subtitle1"
                                onClick={loginHandler}
                                color="inherit"
                                // textAlign='center'
                                sx={{
                                    position: 'relative',
                                    p: 2,
                                    pt: 0,
                                    pb: (theme) => `calc(${theme.spacing(1)} + 4px)`,
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
                            aria-label='Show 17 new notifications'
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
                            // onClick={handleProfileMenuOpen}
                            color="inherit"
                        >
                            <AccountCircle />
                        </IconButton>
                    </Box>
                </Toolbar>
            </AppBar>
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