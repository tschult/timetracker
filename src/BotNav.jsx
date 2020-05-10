import React from 'react';
import { BottomNavigation, BottomNavigationAction } from '@material-ui/core';
import RestoreIcon from '@material-ui/icons/Restore';
import TodayIcon from '@material-ui/icons/Today';
import SettingsIcon from '@material-ui/icons/Settings';

const BotNav = () => {
    return <BottomNavigation showLabels> 
        <BottomNavigationAction label="Heute" icon={<TodayIcon/>} />
        <BottomNavigationAction label="Monat" icon={<RestoreIcon/>} />
        <BottomNavigationAction label="Einstellungen" icon={<SettingsIcon/>} />
    </BottomNavigation>
};

export default BotNav;