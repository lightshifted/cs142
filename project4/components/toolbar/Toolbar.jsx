import * as React from "react";
import { Link, HashRouter, Route } from 'react-router-dom';
// importing material UI components
import { IconButton, Menu, MenuItem, AppBar, Toolbar, Typography } from '@material-ui/core';
import MenuIcon from "@mui/icons-material/Menu";

import States from '../states/States';
import Example from '../example/Example';


class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            anchorEl: null
        };
    }

    handleMenuClick = (event) => {
        this.setState({ anchorEl: event.currentTarget });
    };

    handleMenuClose = () => {
        this.setState({ anchorEl: null });
    };

    render() {
        const { anchorEl } = this.state;

        return (
            <HashRouter>
                <AppBar position="static">
                    <Toolbar>
                        <IconButton
                            size="medium"
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            aria-controls="menu"
                            aria-haspopup="true"
                            onClick={this.handleMenuClick}
                            sx={{ mr: 2}}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Typography variant="h6" component="div" sx={{ flexGrow: 1}}>
                            CS142: Web Applications
                        </Typography>
                    </Toolbar>
                </AppBar>
                <Menu
                    id="menu"
                    anchorEl={anchorEl}
                    open={Boolean(anchorEl)}
                    onClose={this.handleMenuClose}
                    >   <MenuItem component={Link} to="/about" onClick={this.handleMenuClose}>About</MenuItem>
                        <MenuItem component={Link} to="/states" onClick={this.handleMenuClose}>States</MenuItem>
                        <MenuItem component={Link} to="/example" onClick={this.handleMenuClose}>Example</MenuItem>
                </Menu>
                <Route path="/states" component={States} />
                <Route path="/example" component={Example} />
            </HashRouter>
        );
    }
}

export default Header;