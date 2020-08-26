import React, { useEffect, useState } from "react";
import axios from "axios";

function App() {
	const [cocktails, setCocktails] = useState([]);
	const [value, setValue] = React.useState();
	const [cocktailInstructions, setCocktailInstructions] = useState();
	
	
	const thisArray = [

    		'I', 's', 'a', ' ', 'a', 'b', ' ', 'h', 'c',

    		'i', 'p', 'd', 'p', 'o', 'e', 'p', 'o', 'f',

    		't', 'a', 'g', 'm', 'u', 'h', 's', ' ', 'i',

    		'a', ' ', 'j', 'h', 'i', 'k', 'p', 'p', 'l',

    		'o', 'p', 'm', 'o', 't', 'n', 'a', 'm', 'o',

    		'u', 's', 'p', ' ', 'o', 'q', 'r', ' ', 'r',

    		'j', 'u', 's', 's', 't', 't', ' ', 'a', 'u',

    		' ', 'r', 'v', 'e', 'a', 'w', 'l', 'l', 'x',

    		'y', ' ', 'y', 'c', 'o', 'z', 'o', 'l', 'a',

    		' ', 'o', 'b', 'p', 'o', 'c', 't', 'a', 'd',

    		'm', 'u', 'e', 's', '?', 'f', ' ', '-', 'g',

    		' ', 'M', 'h', 'i', 't', 'i', 'c', 'h', 'j',

    		' ', 'H', 'k', 'e', 'd', 'l', 'b', 'e', 'm',

    		'r', 'g', 'n'

	]


	let everyThirdIndexRemoved = thisArray.filter(
		(letter, i) => (i + 1) % 3 !== 0
	);

	useEffect(() => {
		const fetchData = async () => {
			const fetchedCocktails = await axios(
				"https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita"
			);
			setCocktails(fetchedCocktails.data.drinks);
		};
		fetchData();
	}, []);

	const showInstructions = () => {
		let selectedDrink = cocktails.filter(
			(cocktail) => cocktail.strDrink === value
		);
		setCocktailInstructions(selectedDrink[0].strInstructions);
	};

	return (
		<div className="App">
			<h1>1.</h1>
			<p>cocktail app</p>
			<select
				name="drinks"
				id="drinks"
				onChange={(e) => {
					setValue(e.currentTarget.value);
					let instructions = cocktails.filter(
						(cocktail) => cocktail.idDrink === e.currentTarget.value
					);
					setCocktailInstructions(instructions);
				}}
			>
				{cocktails.map((cocktail) => (
					<option key={cocktail.idDrink} value={cocktail.strDrink}>
						{cocktail.strDrink}
					</option>
				))}
			</select>
			<button onClick={showInstructions}>instructions</button>
			<p>{cocktailInstructions}</p>
			<h1>2.</h1>
			<span>{everyThirdIndexRemoved}</span>
		</div>
	);
}

export default App;
