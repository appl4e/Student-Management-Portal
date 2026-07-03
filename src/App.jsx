import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { ROUTES } from "./common/constants/appConstants";
import MainLayout from "./common/layout/MainLayout";
import { AppProvider } from "./context/AppContext";
import EnrollmentPage from "./features/enrollments/pages/EnrollmentPage";
import GradePage from "./features/grades/pages/GradePage";
import HomePage from "./features/home/pages/HomePage";
import StudentPage from "./features/students/pages/StudentPage";

function App() {
	return (
		<AppProvider>
			<BrowserRouter>
				<Routes>
					<Route element={<MainLayout />}>
						<Route path={ROUTES.home} element={<HomePage />} />
						<Route path={ROUTES.students} element={<StudentPage />} />
						<Route path={ROUTES.enrollments} element={<EnrollmentPage />} />
						<Route path={ROUTES.grades} element={<GradePage />} />
					</Route>
					<Route path="*" element={<Navigate to={ROUTES.home} replace />} />
				</Routes>
			</BrowserRouter>
		</AppProvider>
	);
}

export default App;
