import React from "react";
import Tile from "./Tile";

function TileList({ hogs, hidePig }) {

    const tileList = hogs.map(hog => (
        <>
            <Tile
                key={hog.name}
                name={hog.name}
                specialty={hog.specialty}
                greased={hog.greased}
                weight={hog.weight}
                highestMedal={hog["highest medal achieved"]}
                image={hog.image}
            />
            <button onClick={hidePig}>Hide Pig </button>

        </>
    ))

    return (
        <ul>
            {tileList}
        </ul>
    )
}

export default TileList

