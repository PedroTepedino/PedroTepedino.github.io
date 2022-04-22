import React from "react";

import Card from "../UI/Card";

import styles from "./GameDescription.module.css";

const GameDescription = () => {
	return (
		<Card className={styles["game-description"]}>
			<h1>Description</h1>
			<ul>
				<li>Item description!!!</li>
				<li>Item description!!!</li>
				<li>Item description!!!</li>
				<li>Item description!!!</li>
				<li>Item description!!!</li>
				<li>Item description!!!</li>
				<li>Item description!!!</li>
				<li>Item description!!!</li>
				<li>Item description!!!</li>
				<li>Item description!!!</li>
				<li>Item description!!!</li>
			</ul>
		</Card>
	);
};

export default GameDescription;
