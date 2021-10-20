import React from "react";
import { useState } from "react";
import {
	AppBar,
	Toolbar,
	IconButton,
	Typography,
	Menu,
	MenuItem,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import banner from "../assets/img/banner.png";
import { Link } from "react-router-dom";

const Header = () => {
	const [anchorEl, setAnchorEl] = useState(null);

	const handleClick = (event) => {
		setAnchorEl(event.currentTarget);
	};

	const handleClose = () => {
		setAnchorEl(null);
	};

	const handleCloseExt = (url) => {
		if (url !== "") {
			window.open(url);
		}
		setAnchorEl(null);
	};

	return (
		<AppBar
			position="sticky"
			style={{ width: "100%"}}
			color="primary"
		>
			<Toolbar>
				<img
					src={banner}
					alt="EXAMPLE"
					width="100"
					height="100"
					style={{
						backgroundColor: "white",
						marginRight: "10px",
						padding: "10px",
					}}
				/>
				<Typography
					variant="h6"
					component={Link}
					to="/"
					style={{
						color: "white",
						textDecoration: "none",
					}}
				>
					Company Home
				</Typography>
				<IconButton
					edge="start"
					color="inherit"
					aria-label="menu"
					aria-controls="main-menu"
					style={{ marginLeft: "auto" }}
					onClick={handleClick}
				>
					<MenuIcon />
				</IconButton>
				<Menu
					id="simple-menu"
					anchorEl={anchorEl}
					keepMounted
					open={Boolean(anchorEl)}
					onClose={handleClose}
				>
					<MenuItem component={Link} to="/" onClick={handleClose}>
						HOME
					</MenuItem>
					<MenuItem component={Link} to="/news" onClick={handleClose}>
						News
					</MenuItem>
					<MenuItem component={Link} to="/contacts" onClick={handleClose}>
						Employee List
					</MenuItem>
					<MenuItem component={Link} to="/calendar" onClick={handleClose}>
						Calendar
					</MenuItem>
					<MenuItem
						onClick={() => handleCloseExt("https://fullcalendar.io/demos")}
					>
						FULLCALENDAR.IO
					</MenuItem>
					<MenuItem
						onClick={() =>
							handleCloseExt(
								"https://demos.creative-tim.com/material-dashboard-react/?_ga=2.236756801.1178920170.1633081751-1018000466.1633081751#/admin/dashboard"
							)
						}
					>
						Dashboard Demo
					</MenuItem>
				</Menu>
			</Toolbar>
		</AppBar>
	);
};

export default Header;
