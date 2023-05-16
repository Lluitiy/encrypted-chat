/* eslint-disable no-mixed-spaces-and-tabs */
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";

import {
	emailOpt,
	nameOpt,
	passwordOpt,
	birthdayOpt,
	nickNameOpt,
} from "../../data/inputs";

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
					nickName: "",
			  }
			: {
					email: "",
					password: "",
			  };

	const dispatch = useDispatch();

	const {
		register,
		handleSubmit,

		formState: { errors },
	} = useForm({ mode: "onBlur", defaultValues: defaultValues });
	const onSubmit = ({ email, password, name, birthday, nickName }) => {
		let res =
			auth === "register"
				? {
						name,
						email,
						password,
						birthday,
						nickName,
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
		<div className="section">
			<div className="container">
				<form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
					<Input
						settings={nameOpt}
						register={register}
						errors={errors}
					/>
					<Input
						settings={nickNameOpt}
						register={register}
						errors={errors}
					/>
					<Input
						settings={emailOpt}
						register={register}
						errors={errors}
					/>
					<Input
						settings={passwordOpt}
						register={register}
						errors={errors}
					/>
					<Input
						settings={birthdayOpt}
						register={register}
						errors={errors}
					/>

					<button className={styles} type="submit">
						Register
					</button>
				</form>
			</div>
		</div>
	) : (
		<div className="section">
			<div className="container">
				<form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
					<Input
						settings={emailOpt}
						register={register}
						errors={errors}
					/>
					<Input
						settings={passwordOpt}
						register={register}
						errors={errors}
					/>
					<button className={styles} type="submit">
						Login
					</button>
				</form>
			</div>
		</div>
	);
};

export default AuthForm;
