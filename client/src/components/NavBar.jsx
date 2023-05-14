import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { isLogin } from "../redux/auth/auth-selectors";

import { logout } from "../redux/auth/auth-operations";
import { navbar } from "../data/navbar";

import styles from "../styles/Header.module.scss";

const NavBar = () => {
	const dispatch = useDispatch();
	const isAuth = useSelector(isLogin);
	console.log("isLogin", isAuth);
	return (
		<nav className={styles.nav}>
			<ul className={styles.navList}>
				{isAuth ? (
					navbar.map((tab) => (
						<li key={tab.id}>
							<NavLink
								to={tab.link}
								className={({ isActive }) =>
									isActiveLink(isActive)
								}
							>
								{tab.title}
							</NavLink>
						</li>
					))
				) : (
					<li>
						<NavLink
							to={navbar[0].link}
							className={({ isActive }) => isActiveLink(isActive)}
						>
							{navbar[0].title}
						</NavLink>
					</li>
				)}
			</ul>
			{isAuth ? (
				<NavLink
					onClick={() => dispatch(logout())}
					className={styles.navlink}
				>
					Log Out
				</NavLink>
			) : (
				<>
					<div>
						<NavLink
							to="/login"
							className={({ isActive }) => isActiveLink(isActive)}
						>
							Sign In
						</NavLink>
						/
						<NavLink
							to="/register"
							className={({ isActive }) => isActiveLink(isActive)}
						>
							Registrate
						</NavLink>
					</div>
				</>
			)}
		</nav>
	);
};

export default NavBar;

function isActiveLink(isActive) {
	return isActive ? `${styles.active}` : `${styles.navlink}`;
}
