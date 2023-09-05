import React from "react";

type Props = {};

const UserInfo = (props: Props) => {
	const user = JSON.parse(localStorage.getItem("user") as string);
	return (
		<div className="user-info">
			<div className="profile-pic">
				<img style={{ width: '100px' }} src={user?.picture?.large} alt="" />
			</div>
			<div className="group">
				<label htmlFor="name">Name</label>
				<div>{`${user?.name?.title} ${user?.name?.first} ${user?.name?.last}`}</div>
			</div>
			<div className="group">
				<label htmlFor="email">Email</label>
				<div>{user?.email}</div>
			</div>
			<div className="group">
				<label htmlFor="address">Address</label>
				<div>
					{`${user?.location?.street?.number} ${user?.location?.street?.name} ${user?.location?.city} ${user?.location?.state}  ${user?.location?.country}  ${user?.location?.postcode}`}
				</div>
			</div>
		</div>
	);
};

export default UserInfo;
