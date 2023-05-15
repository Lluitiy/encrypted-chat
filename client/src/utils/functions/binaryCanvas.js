export const binaryCanvas = (ref, windowSize, interval) => {
	const ctx = ref.current.getContext("2d");
	ref.current.height = windowSize?.height;
	ref.current.width = windowSize?.width;
	const matrix =
		"01101000 01100001 01110011 01100001 01101110 01100001 01101110 00100000 01100001 01110011 01110100 01100101 01101000 01101000 01100001 01110011 01100001 01101110 00100000 01110000 01100001 01110010 01100001 01110011 01110100 01100101 01101000 01101000 01100001 01110011 01100001 01101110 00100000 01110000 01100001 01110010 01100001 01110011 01110100 01100101 01101000 01101000 01100001 01110011 01100001 01101110 00100000 01110000 01100001 01110010 01101000".split(
			""
		);

	let font_size = 10;
	let columns = 1000;
	const drops = [];

	for (let x = 0; x < columns; x++) drops[x] = 1;

	function draw() {
		ctx.fillStyle = "rgba(0, 0, 0, 0.04)";
		ctx.fillRect(0, 0, ref.current?.width, ref.current?.height);

		ctx.fillStyle = "#0F0";
		ctx.font = font_size + "px arial";

		for (let i = 0; i < drops.length; i++) {
			let text = matrix[i];

			ctx.fillText(text, i * font_size, drops[i] * font_size);

			if (
				drops[i] * font_size > ref.current?.height &&
				Math.random() > 0.975
			)
				drops[i] = 0;

			drops[i]++;
		}
	}

	setInterval(draw, interval);
};
