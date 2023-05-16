// import { useEffect } from "react";
// import { useForm } from "react-hook-form";
// import { useDispatch } from "react-redux";
// import {  updateUserData } from "redux/user/user-operations";
// import { createFormData } from "shared/functions/createFormData";

import styles from "../../styles/profile/User.module.scss";

const User = ({ user }) => {
	return (
		<div className="section">
			<div className="container">
				<div className={styles.user}>
					<img
						src={user.avatarURL}
						alt="user avatar"
						width={100}
						height={100}
					/>
					<p>{user.nickName}</p>
				</div>
			</div>
		</div>
	);
};

export default User;
