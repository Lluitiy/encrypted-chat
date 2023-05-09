import { useState } from "react";
import { useForm } from "react-hook-form";
import { uid } from "uid";

import { users } from "../data/users";
import { encrypterRot13 } from "../utils/encrypterRot13";

import Form from "../components/chat/Form";
import Meassages from "../components/chat/Meassages";
import UserChatList from "../components/chat/UserChatList";

const ChatPage = () => {
	const { handleSubmit, register, reset } = useForm();
	const [messages, setMessages] = useState([]);
	console.log(users);
	const onSubmit = (data) => {
		setMessages((all) => [
			...all,
			{ text: encrypterRot13(data.encrypt), id: uid() },
		]);
		reset();
	};

	return (
		<div className="section">
			<div className="container">
				<div className="chatScreen">
					<UserChatList />
					<div className="chat">
						<Meassages allMessages={messages} />
						<Form
							onSubmit={onSubmit}
							handleSubmit={handleSubmit}
							register={register}
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ChatPage;
