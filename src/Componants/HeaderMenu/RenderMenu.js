import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

const RenderMenu = (props) => {
    
    const isMenuOpen = Boolean(props.anchorEl)
    
    return (
        <Menu
            anchorEl={props.anchorEl}
            anchorOrigin={{ vertical: 'bottom', horizontal: 'right', }}
            id={props.menuId}
            keepMounted
            transformOrigin={{ vertical :'top', horizontal:'right',}}
            open={isMenuOpen}
            onClose={props.onClose}>
            <MenuItem onClick={props.onClose}>Profile</MenuItem>
            <MenuItem onClick={props.onClose}>My Account</MenuItem>
        </Menu>
    

    );

};
export default RenderMenu;