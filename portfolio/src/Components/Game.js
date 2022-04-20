import React, { useState } from "react";

import Card from "../UI/Card";
import GameContents from "./GameContents";

import styles from "./Game.module.css";

const Game = () => {
	const [isSelected, setIsSelected] = useState(false);

	const clickHandler = (event) => {
        console.log("clkicked");
		setIsSelected((prev) => {
			return !prev;
		});
	};

	let contents = <h1>Logo</h1>;

	if (isSelected)
	{
		contents = <GameContents />;
	}

	return (
		<Card className={`${styles.game} ${isSelected && styles.selected}`} onClick={clickHandler}>
			{contents}
		</Card>
	);
};

export default Game;
