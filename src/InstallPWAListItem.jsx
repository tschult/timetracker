import React, { useEffect, useState } from "react";
import { ListItem, ListItemText, ListItemIcon } from "@material-ui/core";
import GetAppIcon from '@material-ui/icons/GetApp';

const InstallPWAListItem = () => {
    const [supportsPWA, setSupportsPWA] = useState(false);
    const [promptInstall, setPromptInstall] = useState(null);

    useEffect(() => {
        const handler = e => {
          e.preventDefault();
          setSupportsPWA(true);
          setPromptInstall(e);
        };
        window.addEventListener("beforeinstallprompt", handler);
    
        return () => window.removeEventListener("transitionend", handler);
      }, []);


    const handleClick = () => {
        if (!promptInstall){
            return;
        }
        promptInstall.prompt();
    }

    if (!supportsPWA){
        return null;
    }

    return (
        <ListItem button onclick={handleClick}>
            <ListItemIcon>
                <GetAppIcon />
            </ListItemIcon>
            <ListItemText>Install</ListItemText>
        </ListItem>
    )

}

export default InstallPWAListItem;