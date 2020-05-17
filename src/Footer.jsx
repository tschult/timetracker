import React from 'react';
import { BottomNavigation, BottomNavigationAction } from '@material-ui/core';
import RestoreIcon from '@material-ui/icons/Restore';
import TodayIcon from '@material-ui/icons/Today';
import SettingsIcon from '@material-ui/icons/Settings';
import { Link, useLocation } from 'react-router-dom';

const Footer = () => {

    const location = useLocation()

    return (
        <BottomNavigation showLabels value={location.pathname} >
            <BottomNavigationAction label="Heute" icon={<TodayIcon />} value="/" component={Link} to="/" />
            <BottomNavigationAction label="Woche" icon={<RestoreIcon />} value="/week" />
            <BottomNavigationAction label="Monat" icon={<RestoreIcon />} value="/month" />
            <BottomNavigationAction label="Einstellungen" icon={<SettingsIcon />} value="/settings" component={Link} to="/settings" />
        </BottomNavigation>
    );
}

export default Footer;
