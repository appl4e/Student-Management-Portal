function EnrollmentForm({ form, onSubmit }) {
	const {
		register,
		formState: { errors },
	} = form;

	return (
		<form onSubmit={form.handleSubmit(onSubmit)}>
			<label>
				Enrollment ID
				<input placeholder="ENR-1001" {...register("enrollmentId")} />
				{errors.enrollmentId && <p className="error-text">{errors.enrollmentId.message}</p>}
			</label>
			<label>
				Student ID
				<input placeholder="2620009" {...register("studentId")} />
				{errors.studentId && <p className="error-text">{errors.studentId.message}</p>}
			</label>
			<label>
				Course ID
				<input placeholder="CS101" {...register("courseId")} />
				{errors.courseId && <p className="error-text">{errors.courseId.message}</p>}
			</label>
			<label>
				Enrollment Date
				<input type="date" {...register("enrollmentDate")} />
				{errors.enrollmentDate && <p className="error-text">{errors.enrollmentDate.message}</p>}
			</label>
			<button type="submit">Enroll Student</button>
		</form>
	);
}

export default EnrollmentForm;
