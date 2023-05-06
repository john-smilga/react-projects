import React from "react";
import App from "./App";

const List = ({ people }) => {
	return (
		<>
			{people.map((person) => {
				const { id, name, age, image } = person;
				return (
					<article key={id} className="person">
						<img src={image} alt="" />
						<div>
							<h4>{name}</h4>
							<p>{age} years</p>
						</div>
					</article>
				);
			})}
		</>
	);
};

export default List;
