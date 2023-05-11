import { Outlet } from "react-router-dom";
import Default from "../components/auth/Default";
import Header from "../components/header";

const AuthPage = () => {
	return (
		<>
			<Header />
			<Default />
			<Outlet />
		</>
	);
};

export default AuthPage;
