import React from 'react';

import styles from "./Header.module.css"

const Header = () => {

	return (
		<div className={styles.Header}>
			<input className={styles.Input}/>
			<input className={styles.Input}/>
			<button className={styles.Button}>Login</button>
		</div>
	);
};

export default Header;