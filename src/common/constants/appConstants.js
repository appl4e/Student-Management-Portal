export const STORAGE_KEYS = {
	students: "student-management-students-react",
	enrollments: "student-management-enrollments-react",
	grades: "student-management-grades-react",
};

export const seedData = {
	students: [
		{ studentId: "2620001", name: "Amina Yusuf", email: "amina@example.edu", program: "Computer Science", academicYear: 2 },
		{ studentId: "2620002", name: "Daniel Mensah", email: "daniel@example.edu", program: "Business Admin", academicYear: 3 },
		{ studentId: "2620003", name: "Lina Hassan", email: "lina@example.edu", program: "Engineering", academicYear: 1 },
	],
	enrollments: [
		{ enrollmentId: "ENR-1001", studentId: "2620001", courseId: "CS101", enrollmentDate: "2026-09-10" },
		{ enrollmentId: "ENR-1002", studentId: "2620002", courseId: "BA201", enrollmentDate: "2026-09-12" },
	],
	grades: [
		{ gradeId: "GRD-2001", studentId: "2620001", courseId: "CS101", grade: 88, semester: "2026/2027-1" },
		{ gradeId: "GRD-2002", studentId: "2620002", courseId: "BA201", grade: 76, semester: "2026/2027-1" },
	],
};

export const ROUTES = {
	home: "/",
	students: "/students",
	enrollments: "/enrollments",
	grades: "/grades",
};
