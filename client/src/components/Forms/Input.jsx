import styles from "../../styles/Forms/Input.module.scss";
import { ValidationError } from "./ValidationError";

const Input = ({ settings, register, errors }) => {
	const {
		name,
		type,
		placeholder,
		required,
		requiredMessage,
		pattern = null,
		patternMessage = null,
	} = settings;
	return (
		<div className={styles.inputWrapper}>
			<input
				id={name}
				className={styles.input}
				type={type}
				placeholder={placeholder}
				// ref={inputRef}
				{...register(name, {
					required: {
						value: required,
						message: requiredMessage,
					},
					pattern: pattern && {
						value: pattern,
						message: patternMessage,
					},
				})}
			/>

			<label className={styles.label} htmlFor={name}>
				{placeholder}
			</label>
			{errors[name] && (
				<ValidationError>{errors[name]?.message}</ValidationError>
			)}
		</div>
	);
};

export default Input;
