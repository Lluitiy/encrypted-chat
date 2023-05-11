import React from "react";

const AuthForm = ({ auth }) => {
	return auth === "register" ? (
		<form action="">
			<input type="text" />
			<input type="text" />
			<input type="text" />
		</form>
	) : (
		<form>
			<input type="text" />
			<input type="text" />
		</form>
	);
};

export default AuthForm;
