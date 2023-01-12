import React, { useState } from "react";
import TileList from "./TileList";

import Nav from "./Nav";

import hogs from "../porkers_data";
// console.log(hogs)

function App() {
	// console.log(hogs)
	const [isClickedGreasy, setIsClickedGreasy] = useState(false)
	const [isClickedSort, setIsClickedSort] = useState('')
	const [isClicked, setIsClicked] = useState(false);


	const filteredHogs = hogs.filter((hog) => {
		if (!isClickedGreasy) {
			return true;
		} else {
			return hog.greased === true;
		}
	}).sort((hog1, hog2) => {
		if (isClickedSort === "weight") {
			return hog1.weight - hog2.weight;
		}
		else if (isClickedSort === "name") {
			return hog1.name.localeCompare(hog2.name);
		}
	})


	const hidePig = hogs.filter((hog) => (
		setIsClicked(!isClicked ? hogs.image : null)

	))



	return (
		<div className="App">
			<Nav />
			<button onClick={(e) => setIsClickedGreasy(!isClickedGreasy)}>Click for Greased Hogs</button>
			<button onClick={(e) => setIsClickedSort("weight")} >Sort Hogs By Weight</button>
			<button onClick={(e) => setIsClickedSort("name")}>Sort Hogs By Name</button>
			<TileList hidePig={hidePig} hogs={filteredHogs} />

		</div>
	);
}

export default App;
