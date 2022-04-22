import React from "react";

import Game from './Game';

import styles from "./GamesList.module.css";

const GamesList = () => {
	return (
		<div className={styles['games-list']}>
			<Game />
			<Game />

		</div>
	);
};

export default GamesList;
