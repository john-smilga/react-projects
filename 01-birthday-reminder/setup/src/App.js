import React, { useState } from "react";
import data from "./data";
import List from "./List";

// const [people, people] = useState[0];
function App() {
	const [people, setPeople] = useState(data);

	// function clearBirthdays(params) {
	// 	setPeople = [];
	// }
	return (
		<section className="container">
			<h2>{people.length} birthdays today</h2>
			<List people={people} />
			<button onClick={() => setPeople([])}>Clear All</button>
		</section>
	);
}

export default App;
