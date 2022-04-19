import React, { useState } from "react";

import Card from "../UI/Card";

import styles from "./Game.module.css";

const Game = () => {
	const [isSelected, setIsSelected] = useState(false);

	const clickHandler = (event) => {
        console.log("clkicked");
		setIsSelected((prev) => {
			return !prev;
		});
	};

	return (
		<Card className={`${styles.game} ${isSelected && styles.selected}`} onClick={clickHandler}>
			<h2> TEste </h2>
		</Card>
	);
};

export default Game;
