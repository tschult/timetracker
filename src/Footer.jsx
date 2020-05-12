import React, { Component } from 'react';
import { BottomNavigation, BottomNavigationAction } from '@material-ui/core';
import RestoreIcon from '@material-ui/icons/Restore';
import TodayIcon from '@material-ui/icons/Today';
import SettingsIcon from '@material-ui/icons/Settings';
import { Link, withRouter } from 'react-router-dom';

 class Footer extends Component {

    handleSelectionChange = (event, newValue) => {
        console.log(newValue);
        this.props.onChange(newValue);
    }

    render() {

        const { location } = this.props;
        console.log(location);

        return (
            <BottomNavigation showLabels value={location.pathname} >
                <BottomNavigationAction label="Heute" icon={<TodayIcon />} value="/" component={Link} to="/" />
                <BottomNavigationAction label="Woche" icon={<RestoreIcon />} value="/week" />
                <BottomNavigationAction label="Monat" icon={<RestoreIcon />} value="/month" />
                <BottomNavigationAction label="Einstellungen" icon={<SettingsIcon />} value="/settings" component={Link} to="/settings" />
            </BottomNavigation>
        );
    }

}

const FooterWithRouter = withRouter(Footer);
export default FooterWithRouter;