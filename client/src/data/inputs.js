export const emailOpt = {
	name: "email",
	type: "email",
	placeholder: "Email",
	required: true,
	requiredMessage: "Email is required",
	pattern:
		/^(?=.{10,63}$)(([0-9A-Za-z]{1}[-0-9A-z.]{1,}[0-9A-Za-z]{1})@([-A-Za-z]{1,}\.){1,2}[-A-Za-z]{2,})$/i,

	patternMessage: "Invalid email address",
};
export const passwordOpt = {
	name: "password",
	type: "password",
	placeholder: "Password",
	required: true,
	requiredMessage: "Password is required",
	pattern: /^(?=.{8,32}$)([0-9A-Za-z])*$/i,
	patternMessage: "Min 8 max 32 symbols, no spaces",
};
export const nameOpt = {
	name: "name",
	type: "text",
	placeholder: "Name",
	required: true,
	requiredMessage: "Enter your name, please",
	pattern: /^([A-Za-z]+\s)*[A-Za-z]{2,32}$/i,
	patternMessage: "Latins only min 2, max 32 ",
};
export const birthdayOpt = {
	label: "Date of Birth",
	name: "birthday",
	type: "text",
	placeholder: "Date of birth",
	required: true,
	requiredMessage: "Enter the date of birth",
	pattern:
		/^\s*(3[01]|[12][0-9]|0?[1-9])\.(1[012]|0?[1-9])\.((?:19|20)\d{2})\s*$/,
	patternMessage: "Should be in such format dd.mm.yyyy",
};
