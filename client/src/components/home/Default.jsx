import NavigateBtn from "../auth/NavigateBtn";

import { useRef, useState } from "react";
import { useEffect } from "react";
import { binaryCanvas } from "../../utils/functions/binaryCanvas";

import styles from "../../styles/Home/Default.module.scss";
import { useMediaQuery } from "react-responsive";

const Default = () => {
	const ref = useRef(null);
	const isMobile = useMediaQuery({ query: "(max-width: 320px)" });

	const interval = isMobile ? 50 : 100;
	const [windowSize, setWindowSize] = useState({
		width: window.innerWidth,
		height: window.innerHeight,
	});

	useEffect(() => {
		function handleResize() {
			setWindowSize({
				width: window.innerWidth,
				height: window.innerHeight,
			});
		}

		window.addEventListener("resize", handleResize);
		binaryCanvas(ref, windowSize, interval);

		return () => window.removeEventListener("resize", handleResize);
	}, [windowSize]);

	return (
		<>
			<div className="container">
				<div className={styles.wrapper}>
					<p>Welcome to the new way of secured communications</p>
					<p>In order to start chatting please registrate</p>
					<div className={styles.btnWrapper}>
						<NavigateBtn page="register" />
						<NavigateBtn page="login" />
					</div>
				</div>
			</div>
			{/* <div className="sphereLight" />
			<div className="sphereDark" /> */}

			<canvas className="canvas" ref={ref} />
		</>
	);
};

export default Default;
