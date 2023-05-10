import { uid } from "uid";

export const users = [
	{
		name: "Igor",
		msgs: [{ text: "Hi", id: uid() }],
		avatar: "",
		id: uid(),
	},
	{
		name: "Pasha",
		msgs: [{ text: "Hello", id: uid() }],
		avatar: "",
		id: uid(),
	},
	{
		name: "Masha",
		msgs: [{ text: "Privet", id: uid() }],
		avatar: "",
		id: uid(),
	},
];
