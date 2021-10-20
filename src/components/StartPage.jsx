import React from "react";
import Header from "./Header";
import Cards from "./Cards.jsx";
import MemberTable from "./MemberTable";
import AddMember from "./AddMember";
import News from "./News";
import Footer from "./Footer";
import HolidayCalendar from "./HolidayCalendar";
import { HashRouter as Router, Route } from "react-router-dom";
import { ThemeProvider, createTheme } from "@material-ui/core/styles";


const theme = createTheme({
	palette: {
		primary: {
			main: "#003A21",
		},
		secondary: {
			main: "#75AF96",
		},
	},
});

const StartPage = () => {
	return (
		<div>
			<Router>
				<ThemeProvider theme={theme}>
					<div className="content">
						<Header />
						<Route
							path="/"
							exact
							render={(props) => (
								<>
									{/* <HPCarousel /> */}
									<Cards style={{ marginTop: "20px" }} />
								</>
							)}
						/>
						<Route path="/contacts" component={AddMember} />
						<Route path="/contacts" component={MemberTable} />
						<Route path="/news" component={News} />
						<Route path="/calendar" component={HolidayCalendar} />
            <Footer />
					</div>
				</ThemeProvider>
			</Router>
		</div>
	);
};

export default StartPage;
