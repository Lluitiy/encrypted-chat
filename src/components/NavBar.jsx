import { NavLink } from "react-router-dom";
import { navbar } from "../data/navbar";

import styles from "../styles/Header.module.scss";

const NavBar = () => {
	return (
		<nav className={styles.nav}>
			{navbar.map((tab) => (
				<NavLink key={tab.id} to={tab.link} className={styles.navlink}>
					{tab.title}
				</NavLink>
			))}
		</nav>
	);
};

export default NavBar;
