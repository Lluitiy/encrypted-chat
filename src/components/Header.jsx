import NavBar from "./NavBar";

import styles from "../styles/Header.module.scss";

const Header = () => {
	return (
		<header className={styles.main}>
			<NavBar />
		</header>
	);
};

export default Header;
