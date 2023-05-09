import { Link } from "react-router-dom";
import { users } from "../../data/users";

import styles from "../../styles/UserChatList.module.scss";

const UserChatList = () => {
	return (
		<div className="container">
			<ul>
				{users.map((user) => (
					<li key={user.id} id={user.id} className={styles.user}>
						<Link to={user.id} className={styles.userMsg}>
							<img
								className={styles.userAvatar}
								src={user.avatar}
								alt={`${user.name}'s avatar`}
							/>
							<div className={styles.userData}>
								<p className={styles.userName}>{user.name}</p>
								<p className={styles.userMsg}>
									{user.msgs.reverse()[0]?.text}
								</p>
							</div>
						</Link>
					</li>
				))}
			</ul>
		</div>
	);
};

export default UserChatList;
