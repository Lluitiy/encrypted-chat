import React from "react";
import { Link } from "react-router-dom";

const NavigateBtn = ({ page }) => {
	return (
		<>
			{page === "register" ? (
				<Link to="/register">register</Link>
			) : (
				<Link to="/login">login</Link>
			)}
		</>
	);
};

export default NavigateBtn;
