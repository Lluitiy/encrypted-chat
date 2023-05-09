import Logo from "./Logo";
import NavBar from "./NavBar";

import styles from "../styles/Header.module.scss";

const Header = () => {
	return (
		<header className={styles.main}>
			<Logo />
			<NavBar />
		</header>
	);
};

export default Header;
