import { Navigate } from "react-router-dom";
import { useAuth } from "../../utils/hooks/useAuth";

export const PublicRoute = ({
	children,
	restricted = false,
	redirect = "/",
}) => {
	const isLogin = useAuth();
	const shouldRedirect = isLogin && restricted;

	return shouldRedirect ? <Navigate to={redirect} /> : children;
};
