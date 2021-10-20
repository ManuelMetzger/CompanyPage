import React from "react";
import { Typography, Paper, Grid } from "@material-ui/core";
import img1 from "../assets/img/pexels-mikhail-nilov-6930902.jpg";

const News = () => {
	return (
		<div>
			<Typography
				variant="h3"
				style={{ margin: "20px 0px", textAlign: "center" }}
			>
				News and updates
			</Typography>
			<Paper
				elevation={3}
				style={{
					minHeight: "500",
					width: "80%",
					padding: "10px",
					margin: "30px auto",
				}}
			>
				<Typography variant="h5" style={{ marginBottom: "10px", textAlign: "center" }}>
					This is an example Article
				</Typography>
				<Grid container spacing={2}>
					<Grid item xs={3} sm={4}>
						<img src={img1} alt="folders" style={{ width: "50%" }} />
					</Grid>
					<Grid item xs={9} sm={8}>
						<p>
							Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
							nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
							erat, sed diam voluptua. At vero eos et accusam et justo duo
							dolores et ea rebum. Stet clita kasd gubergren, no sea takimata
							sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit
							amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
							invidunt ut labore et dolore magna aliquyam erat, sed diam
							voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
							Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum
							dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing
							elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore
							magna aliquyam erat, sed diam voluptua. At vero eos et accusam et
							justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
							takimata sanctus est Lorem ipsum dolor sit amet. Duis autem vel
							eum iriure dolor in hendrerit in vulputate velit esse molestie
							consequat, vel illum dolore eu feugiat nulla facilisis at vero
							eros et accumsan et iusto odio dignissim qui blandit praesent
							luptatum zzril delenit augue duis dolore te feugait nulla
							facilisi. Lorem ipsum dolor sit amet, consectetuer adipiscing
							elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore
							magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis
							nostrud exerci tation ullamcorper suscipit lobortis nisl ut
							aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor
							in hendrerit in vulputate velit esse molestie consequat, vel illum
							dolore eu feugiat nulla facilisis at vero eros et accumsan et
							iusto odio dignissim qui blandit praesent luptatum zzril delenit
							augue duis dolore te feugait nulla facilisi. Nam liber tempor cum
							soluta nobis eleifend option congue nihil imperdiet doming id quod
							mazim placerat facer
						</p>
					</Grid>
				</Grid>
			</Paper>
		</div>
	);
};

export default News;
