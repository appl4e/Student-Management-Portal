import { yupResolver } from "@hookform/resolvers/yup";
import { useMemo } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { useTableState } from "../../../common/hooks/useTableState";
import DataTable from "../../../common/ui/DataTable";
import { useAppContext } from "../../../context/AppContext";
import EnrollmentForm from "../components/EnrollmentForm";

function EnrollmentPage() {
	const { data, toast, addEnrollment } = useAppContext();
	const schema = yup.object({
		enrollmentId: yup.string().required("Enrollment ID is required"),
		studentId: yup.string().required("Student ID is required"),
		courseId: yup.string().required("Course ID is required"),
		enrollmentDate: yup.string().required("Enrollment date is required"),
	});

	const form = useForm({ resolver: yupResolver(schema), mode: "onSubmit" });
	const table = useTableState(data.enrollments, "enrollmentId", "asc");

	const columns = useMemo(
		() => [
			{ key: "enrollmentId", label: "Enrollment ID" },
			{ key: "studentId", label: "Student ID" },
			{ key: "courseId", label: "Course ID" },
			{ key: "enrollmentDate", label: "Enrollment Date" },
		],
		[],
	);

	const onSubmit = (values) => {
		addEnrollment(values);
		form.reset();
	};

	return (
		<div className="page-shell">
			<header className="page-header">
				<div>
					<p className="eyebrow">Module</p>
					<h1>Course Enrollment</h1>
				</div>
				<p className="page-description">Track course enrollments for every student.</p>
			</header>

			<div className="page-grid">
				<section className="card">
					<h2>Create Enrollment</h2>
					<EnrollmentForm form={form} onSubmit={onSubmit} />
				</section>

				<section className="card">
					<h2>Enrollment List</h2>
					<DataTable
						columns={columns}
						rows={table.visibleRows}
						search={table.search}
						onSearchChange={table.setSearch}
						sortConfig={table.sortConfig}
						onSortChange={(key) => table.setSortConfig((prev) => ({ key, direction: prev.key === key && prev.direction === "asc" ? "desc" : "asc" }))}
						emptyMessage="No enrollments found."
					/>
				</section>
			</div>
			{toast ? <div className="toast show">{toast}</div> : null}
		</div>
	);
}

export default EnrollmentPage;
