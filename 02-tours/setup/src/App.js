import React, { useState, useEffect } from "react";
import Loading from "./Loading";
import Tours from "./Tours";
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = "https://course-api.com/react-tours-project";
function App() {
	const [loading, setLoading] = useState(true);
	const [tour, setTour] = useState([]);

	if (loading) {
		return <Loading />;
	}

	const fetchTours = async () => {
		setLoading(true);
		try {
			const respose = await fetch(url);
			const tour = await respose.json();
			setTour(tour);
			setLoading(false);
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<main>
			<Tours />
		</main>
	);
}

export default App;
