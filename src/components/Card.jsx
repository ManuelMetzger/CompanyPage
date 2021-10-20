import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";

const useStyles = makeStyles({
	root: {
		maxWidth: 400,
		minHeight: 400,
		display: "flex",
		flexDirection: "column",
		justifyContent: "space-between",
	},
	media: {
		height: 200,
	}
});

export default function MediaCard({ cardContent }) {
	const classes = useStyles();
	return (
		<Card className={classes.root}>
			<CardActionArea>
				<CardMedia
					className={classes.media}
					image={cardContent.imgSrc}
					title={cardContent.imgTitle}
				/>
				<CardContent>
					<Typography gutterBottom variant="h5" component="h2">
						{cardContent.cardTitle}
					</Typography>
					<Typography variant="body2" color="textSecondary" component="p">
						{cardContent.cardText}
					</Typography>
				</CardContent>
			</CardActionArea>
			<CardActions >
				<Button size="small" color="primary" component={Link} to="/news">
					Share
				</Button>
				<Button size="small" color="primary" component={Link} to="/news">
					Learn More
				</Button>
			</CardActions>
		</Card>
	);
}
