import React from "react";
import Refresh from "../Icons/Refresh";

type Props = {
	handleFetchUser: () => {};
};

const UserInfo = ({ handleFetchUser }: Props) => {
	return (
		<div className="user-info">
			<div className="group">
				<label htmlFor="name">Name</label>
				<div>{localStorage.getItem("name")}</div>
			</div>
			<div className="group">
				<label htmlFor="email">Email</label>
				<div>{localStorage.getItem("email")}</div>
			</div>
			{/* <button className="refresh-btn" onClick={handleFetchUser}>
				<Refresh/>
				&nbsp;
				Refresh
			</button> */}
		</div>
	);
};

export default UserInfo;
