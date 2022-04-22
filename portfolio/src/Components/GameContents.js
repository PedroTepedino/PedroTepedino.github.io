import React from 'react';

import styles from './GameContents.module.css';
import GameDescription from './GameDescription';

const GameContents = () => {
    return <div className={styles['game-contents']}>
        <GameDescription /> 
        <iframe src="https://store.steampowered.com/widget/1101170/" frameborder="0" width="646" height="190"></iframe>
    </div>
};

export default GameContents;