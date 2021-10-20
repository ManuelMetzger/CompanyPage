import * as React from "react";
import { DataGrid } from "@material-ui/data-grid";
import { useState } from "react";

const columns = [
	{
		field: "id",
		headerName: "ID",
		width: 100,
		editable: false,
		type: "number",
		options: { display: false },
	},
	{ field: "firstName", headerName: "First name", width: 150, editable: true },
	{ field: "lastName", headerName: "Last name", width: 150, editable: true },
	{ field: "initials", headerName: "Initials", width: 150, editable: true },
	{
		field: "office",
		headerName: "Office / Location",
		width: 180,
		editable: true,
	},
	{ field: "department", headerName: "Department", width: 200, editable: true },
	{
		field: "email",
		headerName: "Email",
		width: 250,
		editable: true,
		type: "email",
	},
	{ field: "phone", headerName: "Phone", width: 200, editable: true },
	{ field: "mobile", headerName: "Mobile", width: 200, editable: true },
];

let rows = [];

export default function DataGridDemo() {
	const [contacts, setContacts] = useState([
		{
			id: 1,
			firstName: "Max",
			lastName: "Mustermann",
			initials: "MMU",
			office: "Munich",
			department: "Sales",
			email: "max.mustermann@example.com",
			phone: "+49 89 123 456 789",
			mobile: "+49 151 123 456 789",
		},
		{
			id: 2,
			firstName: "Susi",
			lastName: "Sonne",
			initials: "SSO",
			office: "Hamburg",
			department: "Marketing",
			email: "susi.sonne@example.com",
			phone: "+49 89 123 456 789",
			mobile: "+49 151 123 456 789",
		},
		{
			id: 3,
			firstName: "Peter",
			lastName: "Petersson",
			initials: "PPE",
			office: "Kopenhagen",
			department: "Management",
			email: "peter.petersson@example.com",
			phone: "+45 12 345 678 90",
			mobile: "+45 162 123 456 789",
		},
		{
			id: 4,
			firstName: "Mark",
			lastName: "Mayer",
			initials: "MMA",
			office: "Berlin",
			department: "Marketing",
			email: "mark.mayer@example.com",
			phone: "+49 89 123 456 789",
			mobile: "+49 151 123 456 789",
		},
		{
			id: 5,
			firstName: "Piet",
			lastName: "Smiet",
			initials: "PSM",
			office: "Antwerpen",
			department: "Customer relations",
			email: "piet.smiet@example.com",
			phone: "+31 12 345 678 90",
			mobile: "+31 162 123 456 789",
		},
		{
			id: 6,
			firstName: "Morgan",
			lastName: "Connor",
			initials: "MCO",
			office: "Antwerpen",
			department: "Customer relations",
			email: "morgan.connor@example.com",
			phone: "+31 12 345 678 90",
			mobile: "+31 162 123 456 789",
		},
		{
			id: 7,
			firstName: "Abigail",
			lastName: "Burgess",
			initials: "ABU",
			office: "Paris",
			department: "Sales",
			email: "abigail.burgess@example.com",
			phone: "+33 12 345 678 90",
			mobile: "+33 113 123 456 789",
		},
		{
			id: 8,
			firstName: "Yu Jie",
			lastName: "Pai",
			initials: "YJP",
			office: "Orsted",
			department: "Marketing",
			email: "yu.pai@example.com",
			phone: "+45 12 345 678 90",
			mobile: "+45 113 123 456 789",
		},
		{
			id: 9,
			firstName: "Aurore",
			lastName: " Bourgeois",
			initials: "ABO",
			office: "Kukulinna",
			department: "Marketing",
			email: "aurore.bourgeois@example.com",
			phone: "+372 12 345 678 90",
			mobile: "+372 113 123 456 789",
		},
		{
			id: 10,
			firstName: "Rebecca",
			lastName: "Petersen",
			initials: "RPE",
			office: "Reinaldes",
			department: "Customer relations",
			email: "rebecca.petersen@example.com",
			phone: "+351 12 345 678 90",
			mobile: "+351 113 123 456 789",
		},
		{
			id: 11,
			firstName: "Melania",
			lastName: "Kryukova",
			initials: "MKR",
			office: "Weimar",
			department: "Management",
			email: "melania.kryukova@example.com",
			phone: "+49 12 345 678 90",
			mobile: "+49 113 123 456 789",
		},
		{
			id: 12,
			firstName: "Vladlen",
			lastName: "Anisimov",
			initials: "VAN",
			office: "Basedow",
			department: "Marketing",
			email: "vladlen.anisimov@example.com",
			phone: "+49 12 345 678 90",
			mobile: "+49 113 123 456 789",
		},
	]);

	rows = contacts;
	return (
		<div
			style={{
				height: "600px",
				width: "90%",
				marginLeft: "auto",
				marginRight: "auto",
				marginTop: "20px",
			}}
		>
			<DataGrid
				rows={rows}
				columns={columns}
				pageSize={8}
				checkboxSelection
				disableSelectionOnClick
			/>
		</div>
	);
}
