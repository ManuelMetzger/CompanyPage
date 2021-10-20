import React from "react";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import { AddCircle, DeleteForever } from "@material-ui/icons";

const AddMember = () => {
	const [open, setOpen] = React.useState(false);

	const handleClickOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};

	return (
		<div>
			<ButtonGroup>
			<Button
				variant="contained"
				startIcon={<AddCircle />}
				style={{ marginTop: "20px", color: "white" }}
				color="primary"
				onClick={handleClickOpen}
			>
				Add New Employee
			</Button>
			<Button
				variant="contained"
				startIcon={<DeleteForever />}
				style={{ marginTop: "20px", color: "white" }}
				color="secondary"
			>
				Delete Employee from List
			</Button>
			</ButtonGroup>
			<Dialog
				open={open}
				onClose={handleClose}
				aria-labelledby="form-dialog-title"
			>
				<DialogTitle id="form-dialog-title">ADD NEW EMPLOYEE</DialogTitle>
				<DialogContent>
					<DialogContentText>
						Please enter all required data for the new company member.
					</DialogContentText>
					<TextField
						variant="outlined"
						autoFocus
						margin="dense"
						id="firstName"
						label="First Name"
						type="text"
						fullWidth
					/>
					<TextField
						variant="outlined"
						margin="dense"
						id="lastName"
						label="Last Name"
						type="text"
						fullWidth
					/>
					<TextField
						variant="outlined"
						margin="dense"
						id="office"
						label="Office / Location"
						type="text"
						fullWidth
					/>
					<TextField
						variant="outlined"
						margin="dense"
						id="department"
						label="Department"
						type="text"
						fullWidth
					/>
					<TextField
						variant="outlined"
						margin="dense"
						id="email"
						label="Email"
						type="email"
						fullWidth
					/>
					<TextField
						variant="outlined"
						margin="dense"
						id="phone"
						label="Phone"
						type="phone"
						fullWidth
					/>
					<TextField
						variant="outlined"
						margin="dense"
						id="mobile"
						label="Mobile"
						type="phone"
						fullWidth
					/>
				</DialogContent>
				<DialogActions>
					<ButtonGroup variant="contained">
						<Button onClick={handleClose} color="secondary">
							Cancel
						</Button>
						<Button onClick={handleClose} color="primary">
							Submit
						</Button>
					</ButtonGroup>
				</DialogActions>
			</Dialog>
		</div>
	);
};

export default AddMember;
