import { Grid } from "@material-ui/core";
import React from "react";
import MediaCard from "./Card";
import img1 from "../assets/img/pexels-fauxels-3183197.jpg";
import img2 from "../assets/img/pexels-cowomen-2041627.jpg";
import img3 from "../assets/img/pexels-marc-mueller-380769.jpg";

const Cards = () => {
	const cardContents = [
		{
			cardID: 1,
			imgSrc: img1,
			imgTitle: "Company day 2021",
			cardTitle: "Company day 2021",
			cardText:
				"This year's Company day will be taking place virtually (Teams). Please join into the discussion on the future course of our team!",
		},
		{
			cardID: 2,
			imgSrc: img2,
			imgTitle: "NewColleagues",
			cardTitle: "New experts on Board - June 2021",
			cardText: "A very warm welcome to new team-members this month!",
		},
		{
			cardID: 3,
			imgSrc: img3,
			imgTitle: "NewOffices",
			cardTitle: "Our office in XY is modernized",
			cardText: "Placeholder text is going in here!",
		},
	];

	return (
		<Grid container style={{marginTop: 20}} justify="center" spacing={4}>
			{cardContents.map((cardContent) => (
				<Grid item key={cardContent.cardID}>
					<MediaCard cardContent={cardContent} />
				</Grid>
			))}
		</Grid>
	);
};

export default Cards;
