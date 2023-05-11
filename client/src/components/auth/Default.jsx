import React from "react";
import NavigateBtn from "./NavigateBtn";

const Default = () => {
	return (
		<div>
			<p>Welcome to the new way of secured tommunications</p>
			<p>In order to start chatting please registrate</p>
			<NavigateBtn page="register" />
			<NavigateBtn page="login" />
		</div>
	);
};

export default Default;
