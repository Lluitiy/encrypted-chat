import { useState } from "react";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import { uid } from "uid";

import { users } from "../../data/users";
import { encrypterRot13 } from "../../utils/encrypterRot13";

import Meassages from "./Meassages";
import Form from "./Form";

const SpecificChat = () => {
	const { id } = useParams();

	const { handleSubmit, register, reset } = useForm();
	const [messages, setMessages] = useState([]);

	const onSubmit = (data) => {
		setMessages((all) => [
			...all,
			{ text: encrypterRot13(data.encrypt), id: uid() },
		]);
		reset();
	};

	const { msgs } = users.filter((user) => user.id === id)[0];

	return (
		<div className='chat'>
			<Meassages allMessages={msgs} />
			<Form
				onSubmit={onSubmit}
				handleSubmit={handleSubmit}
				register={register}
			/>
		</div>
	);
};

export default SpecificChat;
