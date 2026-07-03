function StudentRegistrationForm({ form, onSubmit }) {
	const {
		register,
		formState: { errors },
	} = form;

	return (
		<form onSubmit={form.handleSubmit(onSubmit)}>
			<label>
				Student ID
				<input placeholder="2620009" {...register("studentId")} />
				{errors.studentId && <p className="error-text">{errors.studentId.message}</p>}
			</label>
			<label>
				Name
				<input placeholder="Amina Yusuf" {...register("name")} />
				{errors.name && <p className="error-text">{errors.name.message}</p>}
			</label>
			<label>
				Email
				<input placeholder="amina@example.edu" {...register("email")} />
				{errors.email && <p className="error-text">{errors.email.message}</p>}
			</label>
			<label>
				Program
				<input placeholder="Computer Science" {...register("program")} />
				{errors.program && <p className="error-text">{errors.program.message}</p>}
			</label>
			<label>
				Academic Year
				<input type="number" placeholder="2" {...register("academicYear")} />
				{errors.academicYear && <p className="error-text">{errors.academicYear.message}</p>}
			</label>
			<button type="submit">Add Student</button>
		</form>
	);
}

export default StudentRegistrationForm;
