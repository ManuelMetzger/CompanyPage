import { AppBar, Container, Toolbar, Typography } from "@material-ui/core";

export default function Footer() {
	return (
		<AppBar
			position="static"
			color="primary"
			style={{ position: "fixed", marginTop: "calc(5% + 60px)", bottom: 0 }}
		>
			<Container maxWidth="md">
				<Toolbar>
					<Typography variant="body1" color="white">
						Logo created by{" "}
						<a
							style={{ color: "grey" }}
							href="https://www.designevo.com/"
							title="Free Online Logo Maker"
						>
							DesignEvo logo maker
						</a>
					</Typography>
				</Toolbar>
			</Container>
		</AppBar>
	);
}
