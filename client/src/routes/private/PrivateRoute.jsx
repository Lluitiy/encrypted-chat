import { Navigate } from "react-router-dom";
import { useAuth } from "../../utils/hooks/useAuth";

export const PrivateRoute = ({ children, redirect }) => {
	const isLogin = useAuth();

	return <>{isLogin ? children : <Navigate to={redirect} />}</>;
};
