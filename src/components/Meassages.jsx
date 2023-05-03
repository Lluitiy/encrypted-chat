import { useState } from "react";

import { decrypterRot13 } from "../utils/decrypterRot13";

const Meassages = ({ allMessages }) => {
	const decrypt = (message) => decrypterRot13(message);
	const [ids, setIds] = useState([]);

	const isEncrypt = (e) => {
		const currentId = e.target.id;
		if (ids.includes(currentId)) {
			return setIds(ids.filter((id) => id !== currentId));
		}
		setIds((prev) => [...prev, currentId]);
		return;
	};
	return (
		<>
			{allMessages.map((message) => {
				return (
					<div key={message.id}>
						<p>
							{ids.includes(message.id)
								? decrypt(message.text)
								: message.text}
						</p>

						<button id={message.id} onClick={(e) => isEncrypt(e)}>
							{ids.includes(message.id) ? "Encrypt" : "Decrypt"}
						</button>
					</div>
				);
			})}
		</>
	);
};

export default Meassages;
