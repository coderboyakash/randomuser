import React, { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import Loader from "./components/Loader";
import UserInfo from "./components/UserInfo";
import Refresh from "./Icons/Refresh";

type Props = {};

const App = (props: Props) => {
	const [error, setError] = useState(false);
	const [loading, setLoading] = useState(true);

	const handleFetchUser = async () => {
		setError(false)
		setLoading(true);
		try {
			const { data } = await axios.get("https://randomuser.me/api");
			const { results } = data;
			localStorage.setItem(
				"name",
				`${results[0]?.name?.title} ${results[0]?.name?.first} ${results[0]?.name?.last}`
			);
			localStorage.setItem("email", results[0].email);
		} catch (error) {
			setError(true)
		}
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
			{!error && <UserInfo 
				handleFetchUser={handleFetchUser} 
			/>}
			{error && <div className="error-text">Something went wrong please try again!</div>}
			<button className="refresh-btn" onClick={handleFetchUser}>
				<Refresh/>
				&nbsp;
				Refresh
			</button>
		</div>
	);
};

export default App;
