import React from "react";
import FullCalendar from "@fullcalendar/react"; // must go before plugins
import dayGridPlugin from "@fullcalendar/daygrid"; // a plugin!
import timeGridPlugin from "@fullcalendar/timegrid";
import listPlugin from "@fullcalendar/list";
import interactionPlugin from "@fullcalendar/interaction";

const HolidayCalendar = () => {
	const handleClick = (e) => {
		console.log(e.dateStr);
	};

	const handleEventClick = (info) => {
		info.jsEvent.preventDefault(); // don't let the browser navigate

		if (info.event.url) {
			window.open(info.event.url);
		}
	};

	return (
		<div style={{ margin: "50px auto 20px auto", width: "90%" }}>
			<FullCalendar
				plugins={[dayGridPlugin, timeGridPlugin, listPlugin, interactionPlugin]}
				locale="en"
				timeZone="Germany/Berlin"
				firstDay="1"
				initialView="dayGridMonth"
				headerToolbar={{
					left: "prev,next today",
					center: "title",
					right: "dayGridMonth,timeGridWeek,listWeek",
				}}
				contentHeight="600px"
				droppable={true}
				selectable={true}
				events={[
					{ title: "event 1", date: "2021-07-01" },
					{ title: "event 2", date: "2021-07-02" },
					{ title: "event 3", date: "2021-08-02" },
					{ title: "event 4", date: "2021-08-03" },
					{
						title: "In-house audit",
						date: "2021-10-01",
						backgroundColor: "green",
						borderColor:"green",
						start: "2021-10-01T08:45+01:00",
						end: "2021-10-01T12:45+01:00"
					},
					{
						title: "Swiss biotech day, Basel",
						date: "2021-10-02",
						url: "https://swissbiotechday.ch/",
					},
					{
						title: "Deutsche Biotechnologietage, Stuttgart",
						date: "2021-10-02",
						url: "https://www.biotechnologietage.de/de/",
					},
					{
						title: "Meeting management board",
						date: "2021-11-03",
						backgroundColor: "green",
						borderColor:"green"
					},
					{
						title: "BVMA symposium, München",
						date: "2021-11-26",
						url: "https://www.bvma.de/news-events/detail/29-bvma-symposium-am-26-november-in-muenchen/",
					},
				]}
				dateClick={handleClick}
				eventClick={handleEventClick}
			/>
		</div>
	);
};

export default HolidayCalendar;
