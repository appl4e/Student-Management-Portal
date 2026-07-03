import { NavLink, Outlet } from "react-router-dom";
import { ROUTES } from "../constants/appConstants";

const navigationItems = [
	{ to: ROUTES.home, label: "Home" },
	{ to: ROUTES.students, label: "Students" },
	{ to: ROUTES.enrollments, label: "Enrollments" },
	{ to: ROUTES.grades, label: "Grades" },
];

function MainLayout() {
	return (
		<div className="app-shell">
			<nav className="top-nav" aria-label="Primary navigation">
				{navigationItems.map((item) => (
					<NavLink key={item.to} to={item.to} className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}>
						{item.label}
					</NavLink>
				))}
			</nav>
			<Outlet />
		</div>
	);
}

export default MainLayout;
