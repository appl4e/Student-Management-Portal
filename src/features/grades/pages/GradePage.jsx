import { yupResolver } from "@hookform/resolvers/yup";
import { useMemo } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { useTableState } from "../../../common/hooks/useTableState";
import DataTable from "../../../common/ui/DataTable";
import { useAppContext } from "../../../context/AppContext";
import GradeForm from "../components/GradeForm";

function GradePage() {
	const { data, toast, addGrade } = useAppContext();
	const schema = yup.object({
		gradeId: yup.string().required("Grade ID is required"),
		studentId: yup.string().required("Student ID is required"),
		courseId: yup.string().required("Course ID is required"),
		grade: yup.number().typeError("Grade is required").required().min(0).max(100, "Grade must be between 0 and 100"),
		semester: yup.string().required("Semester is required"),
	});

	const form = useForm({ resolver: yupResolver(schema), mode: "onSubmit" });
	const table = useTableState(data.grades, "gradeId", "asc");

	const columns = useMemo(
		() => [
			{ key: "gradeId", label: "Grade ID" },
			{ key: "studentId", label: "Student ID" },
			{ key: "courseId", label: "Course ID" },
			{ key: "grade", label: "Grade" },
			{ key: "semester", label: "Semester" },
		],
		[],
	);

	const onSubmit = (values) => {
		addGrade(values);
		form.reset();
	};

	return (
		<div className="page-shell">
			<header className="page-header">
				<div>
					<p className="eyebrow">Module</p>
					<h1>Grade Submission</h1>
				</div>
				<p className="page-description">Submit and review grades by semester.</p>
			</header>

			<div className="page-grid">
				<section className="card">
					<h2>Submit Grade</h2>
					<GradeForm form={form} onSubmit={onSubmit} />
				</section>

				<section className="card">
					<h2>Grade List</h2>
					<DataTable
						columns={columns}
						rows={table.visibleRows}
						search={table.search}
						onSearchChange={table.setSearch}
						sortConfig={table.sortConfig}
						onSortChange={(key) => table.setSortConfig((prev) => ({ key, direction: prev.key === key && prev.direction === "asc" ? "desc" : "asc" }))}
						emptyMessage="No grades found."
					/>
				</section>
			</div>
			{toast ? <div className="toast show">{toast}</div> : null}
		</div>
	);
}

export default GradePage;
