import { NavLink } from "react-router-dom";
import { navbar } from "../data/navbar";

import styles from "../styles/Header.module.scss";

const NavBar = () => {
	return (
		<nav className={styles.nav}>
			<ul className={styles.navList}>
				{navbar.map((tab) => (
					<li key={tab.id}>
						<NavLink
							to={tab.link}
							className={({ isActive }) => isActiveLink(isActive)}
						>
							{tab.title}
						</NavLink>
					</li>
				))}
			</ul>
			<NavLink className={styles.navlink} to={"/"}>
				Log Out
			</NavLink>
		</nav>
	);
};

export default NavBar;

function isActiveLink(isActive) {
	return isActive ? `${styles.active}` : `${styles.navlink}`;
}
