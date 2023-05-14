import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";

import { emailOpt, nameOpt, passwordOpt, birthdayOpt } from "../../data/inputs";
import { register as reg } from "../../redux/auth/auth-operations";
import { login } from "../../redux/auth/auth-operations";

import Input from "./Input";
import styles from "../../styles/Forms/AuthForm.module.scss";

const AuthForm = ({ auth }) => {
	const defaultValues =
		auth === "register"
			? {
					name: "",
					email: "",
					password: "",
					birthday: "",
			  }
			: {
					email: "",
					password: "",
			  };

	const dispatch = useDispatch();

	const {
		register,
		handleSubmit,
		watch,
		formState: { errors, isValid },
	} = useForm({ mode: "onBlur", defaultValues: defaultValues });
	const onSubmit = ({ email, password, name, birthday }) => {
		let res =
			auth === "register"
				? {
						name,
						email,
						password,
						birthday,
				  }
				: {
						email,
						password,
				  };
		console.log(res);
		dispatch(auth === "register" ? reg(res) : login(res))
			.unwrap()
			.then((res) => {
				const { name } = res.user;
				return toast.success(`Welcome, ${name} !`);
			})
			.catch((e) => {
				const errorMessage =
					e.status === 409
						? "This email is already in use"
						: "Oops, something went wrong... Try again, please";
				return toast.error(errorMessage);
			});
	};
	return auth === "register" ? (
		<form className={styles} onSubmit={handleSubmit(onSubmit)}>
			<Input settings={nameOpt} register={register} errors={errors} />
			<Input settings={emailOpt} register={register} errors={errors} />
			<Input settings={passwordOpt} register={register} errors={errors} />
			<Input settings={birthdayOpt} register={register} errors={errors} />

			<button className={styles} type="submit">
				Register
			</button>
		</form>
	) : (
		<form className={styles} onSubmit={handleSubmit(onSubmit)}>
			<Input settings={emailOpt} register={register} errors={errors} />
			<Input settings={passwordOpt} register={register} errors={errors} />
			<button className={styles} type="submit">
				Login
			</button>
		</form>
	);
};

export default AuthForm;
