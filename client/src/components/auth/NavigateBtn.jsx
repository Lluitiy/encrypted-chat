import { Link } from "react-router-dom";

const NavigateBtn = ({ page }) => {
	return (
		<>
			{page === "register" ? (
				<Link to="/register" className="button">
					register
				</Link>
			) : (
				<Link to="/login" className="button">
					login
				</Link>
			)}
		</>
	);
};

export default NavigateBtn;
