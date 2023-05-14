import styles from "../../styles/Forms/ValidationError.module.scss";

export const ValidationError = ({ children, customStyle = {} }) => {
	return (
		<p className={styles.error} style={customStyle}>
			{children}
		</p>
	);
};
