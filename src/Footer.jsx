import React, { Component } from 'react';
import { BottomNavigation, BottomNavigationAction } from '@material-ui/core';
import RestoreIcon from '@material-ui/icons/Restore';
import TodayIcon from '@material-ui/icons/Today';
import SettingsIcon from '@material-ui/icons/Settings';

export default class Footer extends Component {

    handleSelectionChange = (event, newValue) => {
        console.log(newValue);
        this.props.onChange(newValue);
    }

    render() {

        return (
            <BottomNavigation showLabels value={this.props.value} onChange={this.handleSelectionChange}>
                <BottomNavigationAction label="Heute" icon={<TodayIcon />} value="/" />
                <BottomNavigationAction label="Woche" icon={<RestoreIcon />} value="/week" />
                <BottomNavigationAction label="Monat" icon={<RestoreIcon />} value="/month" />
                <BottomNavigationAction label="Einstellungen" icon={<SettingsIcon />} value="/settings" />
            </BottomNavigation>
        );
    }

}