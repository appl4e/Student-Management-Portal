function GradeForm({ form, onSubmit }) {
	const {
		register,
		formState: { errors },
	} = form;

	return (
		<form onSubmit={form.handleSubmit(onSubmit)}>
			<label>
				Grade ID
				<input placeholder="GRD-2001" {...register("gradeId")} />
				{errors.gradeId && <p className="error-text">{errors.gradeId.message}</p>}
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
				Grade
				<input type="number" placeholder="85" {...register("grade")} />
				{errors.grade && <p className="error-text">{errors.grade.message}</p>}
			</label>
			<label>
				Semester
				<input placeholder="2026/2027-1" {...register("semester")} />
				{errors.semester && <p className="error-text">{errors.semester.message}</p>}
			</label>
			<button type="submit">Submit Grade</button>
		</form>
	);
}

export default GradeForm;
