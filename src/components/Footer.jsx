import {
	AppBar,
	Container,
	Grid,
	Toolbar,
	Typography,
} from "@material-ui/core";

export default function Footer() {
	return (
		<AppBar
			position="static"
			color="primary"
			style={{
				position: "fixed",
				marginTop: "calc(5% + 60px)",
				bottom: 0,
				width: "100%",
			}}
		>
			<Toolbar>
				<Grid container columns="2" justify="center" spacing="4">
					<Grid item justify="center">
						<Typography md={6} variant="caption" color="white">
							Logo created by{" "}
							<a
								style={{ color: "grey" }}
								href="https://www.designevo.com/"
								title="Free Online Logo Maker"
							>
								DesignEvo logo maker
							</a>
						</Typography>
					</Grid>
					<Grid item md={6} style={{textAlign: "right"}}>
						<Typography variant="button" color="white">
							<div>&copy; 2021 - MMDS Styling Division</div>
						</Typography>
					</Grid>
				</Grid>
			</Toolbar>
		</AppBar>
	);
}
