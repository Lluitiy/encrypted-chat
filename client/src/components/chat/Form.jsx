const Form = ({ onSubmit, handleSubmit, register }) => {
	return (
		<>
			<form onSubmit={handleSubmit(onSubmit)}>
				<input {...register("encrypt")} />
				<input type="submit" />
			</form>
		</>
	);
};

export default Form;
