import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { getInitialData, persistData } from "../common/utils/storage";

const AppContext = createContext(null);

export function AppProvider({ children }) {
	const [data, setData] = useState(() => getInitialData());
	const [toast, setToast] = useState("");

	useEffect(() => {
		persistData(data);
	}, [data]);

	useEffect(() => {
		if (!toast) return;
		const timer = window.setTimeout(() => setToast(""), 2200);
		return () => window.clearTimeout(timer);
	}, [toast]);

	const value = useMemo(
		() => ({
			data,
			toast,
			setToast,
			addStudent: (student) => {
				setData((prev) => ({ ...prev, students: [student, ...prev.students] }));
				setToast("Student added successfully.");
			},
			addEnrollment: (enrollment) => {
				setData((prev) => ({ ...prev, enrollments: [enrollment, ...prev.enrollments] }));
				setToast("Enrollment recorded.");
			},
			addGrade: (grade) => {
				setData((prev) => ({ ...prev, grades: [grade, ...prev.grades] }));
				setToast("Grade submitted.");
			},
		}),
		[data, toast],
	);

	return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

export function useAppContext() {
	const context = useContext(AppContext);
	if (!context) {
		throw new Error("useAppContext must be used within an AppProvider");
	}
	return context;
}
