import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import IconButton from '@mui/material/IconButton';
import MailIcon from '@mui/icons-material/Mail';
import Badge from '@mui/material/Badge';
import NotificationsIcon from '@mui/icons-material/Notifications';
import AccountCircle from '@mui/icons-material/AccountCircle';
const MobileMenu = props => {
    const isMobileMenuOpen = Boolean(props.mobileMoreAnchorEl)
    return (
        <Menu
            anchorEl={props.mobileMoreAnchorEl}
            anchorOrigin={{ vertical: "top", horizontal: "right", }}
            id={props.mobileMenuId}
            keepMounted
            transformOrigin={{ vertical: "top", horizontal: "right" }}
            open={isMobileMenuOpen}
            onClose={props.onClose}>
            <MenuItem>
                <IconButton size="large" aria-label='show 4 new mails' color="inherit">
                    <Badge badgeContent={4} color="error"><MailIcon /></Badge>
                    <p>Messages</p>
                </IconButton>
            </MenuItem>
            <MenuItem>
                <IconButton size="large" aria-label='show 17 new notifications' color="inherit">
                    <Badge badgeContent={17} color="error"><NotificationsIcon /></Badge>
                    <p>Notifications</p>
                </IconButton>
            </MenuItem>
            <MenuItem>
                <IconButton
                    size="large"
                    aria-label='account of currunt user'
                    aria-haspopup="true"
                    aria-controls={props.mobileMenuId}
                    // onClick={props.onOpen} 
                    color="inherit">
                    <AccountCircle />
                    <p>Profile</p>
                </IconButton>
            </MenuItem>
            <MenuItem>
                <IconButton
                    size="large"
                    aria-label='account of currunt user'
                    aria-haspopup="true"
                    aria-controls={props.mobileMenuId}
                    // onClick={props.onOpen}
                    color="inherit">
                    <AccountCircle />
                    <p>Account</p>
                </IconButton>
            </MenuItem>

        </Menu>
    );
};
export default MobileMenu;