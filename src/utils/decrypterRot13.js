export function decrypterRot13(message) {
	const input = message.split("");
	const alphabet =
		"nopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmNOPQRSTUVWXYZABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLM";
	const chifer = [];

	let char = "";
	let charIdx = null;

	for (let i = 0; i < input.length; i += 1) {
		char = input[i];

		if (alphabet.indexOf(char) > -1) {
			charIdx = alphabet.indexOf(char) + 13;
			chifer.push(alphabet[charIdx]);
		} else {
			chifer.push(char);
		}
	}
	return chifer.join("");
}
