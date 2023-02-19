import * as React from "react";

// importing material UI components
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

class Header extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <AppBar position="static">
                <Toolbar>
                    {/* <IconButton
                     size="large"
                     edge="start"
                     color="inherit"
                     aria-label="menu"
                     sx={{ mr: 2 }}
                    >
                     <MenuIcon />
                    </IconButton> */}
                    <Typography variant="h6"
                     component="div" sx={{ flexGrow: 1}}>
                        CS142: Web Applications Header
                    </Typography>
                    <Button color="inherit">About</Button>
                </Toolbar>
            </AppBar>
        );
    }
}

export default Header;