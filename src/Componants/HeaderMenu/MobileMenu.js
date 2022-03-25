import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import IconButton from '@mui/material/IconButton';
import MailIcon from '@mui/icons-material/Mail';
import Badge from '@mui/material/Badge';
import NotificationsIcon from '@mui/icons-material/Notifications';
import AccountCircle from '@mui/icons-material/AccountCircle';
import Typography from '@mui/material/Typography';
import ButtonBase from '@mui/material/ButtonBase';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';


const MobileMenu = props => {
    const isMobileMenuOpen = Boolean(props.mobileMoreAnchorEl)
    return (
        <Menu
            sx={{ width: 200, height: 300 }}
            anchorEl={props.mobileMoreAnchorEl}
            anchorOrigin={{ vertical: "bottom", horizontal: "right"}}
            id={props.mobileMenuId}
            keepMounted
            transformOrigin={{ vertical: "top", horizontal: "right" }}
            open={isMobileMenuOpen}
            onClose={props.onClose}>

            <MenuItem sx={{ height: 10 }}>
                    <Typography
                        component="span"
                        variant="button"
                        onClick={props.aboutHandler}
                        color="inherit">
                        About Us
                    </Typography>
            </MenuItem>
            <MenuItem sx={{ height: 10 }}>
                    <Typography
                        component="span"
                        variant="button"
                        onClick={props.loginHandler}
                        color="inherit">
                        Login
                    </Typography>
            </MenuItem>
            <MenuItem sx={{ height: 10 }}>
                <IconButton size="large" aria-label='show 4 new mails' color="inherit">
                    <Badge badgeContent={4} color="error"><MailIcon /></Badge></IconButton>
                    <Typography
                        component="span"
                        variant="button"
                        // onClick={props.loginHandler}
                        color="inherit">
                        Messages
                    </Typography>
            </MenuItem>
            <MenuItem sx={{ height: 10 }}>
                <IconButton size="large" aria-label='show 17 new notifications' color="inherit">
                    <Badge badgeContent={17} color="error"><NotificationsIcon /></Badge>
                    <h6>Notifications</h6>
                </IconButton>
            </MenuItem>
            <MenuItem sx={{ height: 10 }}>
                <IconButton
                    size="large"
                    aria-label='account of currunt user'
                    aria-haspopup="true"
                    aria-controls={props.mobileMenuId}
                    // onClick={props.onOpen} 
                    color="inherit">
                    <AccountCircle />
                    <h6>Profile</h6>
                </IconButton>
            </MenuItem>
            <MenuItem sx={{ height: 10 }}>
                <IconButton
                    size="large"
                    aria-label='account of currunt user'
                    aria-haspopup="true"
                    aria-controls={props.mobileMenuId}
                    // onClick={props.onOpen}
                    color="inherit">
                    <AccountCircle />
                    <h6>Account</h6>
                </IconButton>
            </MenuItem>

        </Menu>
    );
};
export default MobileMenu;