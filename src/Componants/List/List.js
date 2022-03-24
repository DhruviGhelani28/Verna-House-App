

import React from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
// import MessageIcon from '@mui/icons-material/Message';
// import InboxIcon from '@mui/icons-material/MoveToInbox';
// import MailIcon from '@mui/icons-material/Mail';
// import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import PeopleIcon from '@mui/icons-material/People';
import GroupIcon from '@mui/icons-material/Group';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import CategoryIcon from '@mui/icons-material/Category';
import MonochromePhotosIcon from '@mui/icons-material/MonochromePhotos';
import SegmentIcon from '@mui/icons-material/Segment';

import GroupsIcon from '@mui/icons-material/Groups';
import SettingsIcon from '@mui/icons-material/Settings';
import WcIcon from '@mui/icons-material/Wc';
// import { useState } from 'react';
import { Link } from 'react-router-dom';
const List = props => {

    // const supplierHandler = () => {

    // }







    // const funHandler = [supplierHandler]
    const iconlist = [<SegmentIcon />, <GroupsIcon />, <PeopleIcon />, <GroupIcon />, <PeopleAltIcon />, <CategoryIcon />, <MonochromePhotosIcon />, <WcIcon />, <SettingsIcon />]
    const list1 = ['Departments', 'Suppliers', 'Customers', 'Workers', 'Agencies', 'Items', 'Photos/Posters', 'Models', 'Settings']
    const list = list1.map((value, index) => {
        return (
            <ListItemButton
                key={value}
                sx={{
                    minHeight: 40,
                    justifyContent: props.open ? 'initial' : 'revert',
                    px: 2.5,
                }}
            // onClick={ }
            >
                <ListItemIcon
                    sx={{
                        minWidth: 0,
                        mr: props.open ? 3 : 'auto',
                        justifyContent: 'center',
                    }}>
                    {iconlist[index]}
                </ListItemIcon>
                <Link to={`/${value}`}>
                    <ListItemText primary={value} sx={{ opacity: props.open ? 1 : 0 }} />
                </Link>
            </ListItemButton>
        );

    })
    return (
        <React.Fragment>
            {list}
        </React.Fragment>
    );
};
export default List;