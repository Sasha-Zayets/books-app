import React from 'react';
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";
import {
	useStyles,
} from './styles';

const Header = () => {
	const classes = useStyles();

	return (
		<AppBar position="static" color="default" elevation={0} className={classes.appBar}>
			<Toolbar className={classes.toolbar}>
				<Typography variant="h6" color="inherit" noWrap className={classes.toolbarTitle}>
					<Link to="/" className={classes.linkTitle}>
						Company name
					</Link>
				</Typography>
				<nav>
					<Link to="/random-recipe" className={classes.link}>
						Random Recipe
					</Link>
				</nav>
			</Toolbar>
		</AppBar>
	);
};

export default Header;
