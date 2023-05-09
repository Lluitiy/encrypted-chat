import { Link } from "react-router-dom";
import { users } from "../../data/users";

const UserChatList = () => {
	return (
		<div>
			<ul>
				{users.map((user) => (
					<li key={user.id} id={user.id}>
						<Link to={user.id}>
							<img
								src={user.avatar}
								alt={`${user.name}'s avatar`}
							/>
							<p>{user.name}</p>
						</Link>
					</li>
				))}
			</ul>
		</div>
	);
};

export default UserChatList;
