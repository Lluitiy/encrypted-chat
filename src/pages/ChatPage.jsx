import { useState } from "react";
import { useForm } from "react-hook-form";
import { uid } from "uid";

import { encrypterRot13 } from "../utils/encrypterRot13";

import Form from "../components/Form";
import Meassages from "../components/Meassages";

const ChatPage = () => {
	const { handleSubmit, register, reset } = useForm();
	const [messages, setMessages] = useState([]);

	const onSubmit = (data) => {
		setMessages((all) => [
			...all,
			{ text: encrypterRot13(data.encrypt), id: uid() },
		]);
		reset();
	};

	return (
		<>
			<Meassages allMessages={messages} />
			<Form
				onSubmit={onSubmit}
				handleSubmit={handleSubmit}
				register={register}
			/>
		</>
	);
};

export default ChatPage;
