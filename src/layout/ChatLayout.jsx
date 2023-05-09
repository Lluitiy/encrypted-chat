import { useMediaQuery } from "react-responsive";
import { Outlet, useParams } from "react-router-dom";

import UserChatList from "../components/chat/UserChatList";

const ChatLayout = () => {
	const params = useParams();
	const isTablet = useMediaQuery({ query: "(min-width: 768px)" });

	return (
		<div className="userChatLayout">
			{isTablet ? (
				<UserChatList />
			) : !params.id ? (
				<UserChatList />
			) : (
				<></>
			)}
			<Outlet />
		</div>
	);
};

export default ChatLayout;
