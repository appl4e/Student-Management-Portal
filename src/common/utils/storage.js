import { STORAGE_KEYS, seedData } from "../constants/appConstants";

export function getInitialData() {
	try {
		const storedStudents = JSON.parse(localStorage.getItem(STORAGE_KEYS.students));
		const storedEnrollments = JSON.parse(localStorage.getItem(STORAGE_KEYS.enrollments));
		const storedGrades = JSON.parse(localStorage.getItem(STORAGE_KEYS.grades));

		if (storedStudents && storedEnrollments && storedGrades) {
			return {
				students: storedStudents,
				enrollments: storedEnrollments,
				grades: storedGrades,
			};
		}
	} catch {
		// fall back to seed data
	}

	persistData(seedData);
	return seedData;
}

export function persistData(data) {
	localStorage.setItem(STORAGE_KEYS.students, JSON.stringify(data.students));
	localStorage.setItem(STORAGE_KEYS.enrollments, JSON.stringify(data.enrollments));
	localStorage.setItem(STORAGE_KEYS.grades, JSON.stringify(data.grades));
}
