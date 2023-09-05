import React, { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import Loader from "./components/Loader";
import UserInfo from "./components/UserInfo";

type Props = {};

const App = (props: Props) => {
	const [loading, setLoading] = useState(true);

	const handleFetchUser = async () => {
		setLoading(true);
		const { data } = await axios.get("https://randomuser.me/api");
		const result = data.results[0];
		localStorage.setItem(
			"name",
			`${result?.name?.title} ${result?.name?.first} ${result?.name?.last}`
		);
		localStorage.setItem("email", result.email);
		setLoading(false);
	};

	useEffect(() => {
		handleFetchUser();
	}, []);

	if (loading) {
		return (
			<div className="App">
				<Loader />
			</div>
		);
	}

	return (
		<div className="App">
			<UserInfo
				handleFetchUser={handleFetchUser}
			/>
		</div>
	);
};

export default App;
