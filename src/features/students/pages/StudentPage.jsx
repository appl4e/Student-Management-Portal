import { yupResolver } from "@hookform/resolvers/yup";
import { useMemo } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { useTableState } from "../../../common/hooks/useTableState";
import DataTable from "../../../common/ui/DataTable";
import { useAppContext } from "../../../context/AppContext";
import StudentRegistrationForm from "../components/StudentRegistrationForm";

function StudentPage() {
	const { data, toast, addStudent } = useAppContext();
	const currentYearPrefix = new Date().getFullYear().toString().slice(-2);
	const schema = yup.object({
		studentId: yup
			.string()
			.required("Student ID is required")
			.matches(new RegExp(`^${currentYearPrefix}[12]\\d{4}$`), {
				message: `Use format ${currentYearPrefix}20009 with shift 1 or 2`,
			}),
		name: yup.string().required("Name is required"),
		email: yup.string().required("Email is required").email("Enter a valid email"),
		program: yup.string().required("Program is required"),
		academicYear: yup.number().typeError("Academic year is required").required().min(1).max(8),
	});

	const form = useForm({ resolver: yupResolver(schema), mode: "onSubmit" });
	const table = useTableState(data.students, "studentId", "desc");

	const columns = useMemo(
		() => [
			{ key: "studentId", label: "Student ID" },
			{ key: "name", label: "Name" },
			{ key: "email", label: "Email" },
			{ key: "program", label: "Program" },
			{ key: "academicYear", label: "Academic Year" },
		],
		[],
	);

	const onSubmit = (values) => {
		addStudent(values);
		form.reset();
	};

	return (
		<div className="page-shell">
			<header className="page-header">
				<div>
					<p className="eyebrow">Module</p>
					<h1>Student Registration</h1>
				</div>
				<p className="page-description">Add students and review the latest roster.</p>
			</header>

			<div className="page-grid">
				<section className="card">
					<h2>Create Student</h2>
					<StudentRegistrationForm form={form} onSubmit={onSubmit} />
				</section>

				<section className="card">
					<h2>Student List</h2>
					<DataTable
						columns={columns}
						rows={table.visibleRows}
						search={table.search}
						onSearchChange={table.setSearch}
						sortConfig={table.sortConfig}
						onSortChange={(key) => table.setSortConfig((prev) => ({ key, direction: prev.key === key && prev.direction === "asc" ? "desc" : "asc" }))}
						emptyMessage="No students found."
					/>
				</section>
			</div>
			{toast ? <div className="toast show">{toast}</div> : null}
		</div>
	);
}

export default StudentPage;
