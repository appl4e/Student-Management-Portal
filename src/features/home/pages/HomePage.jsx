import { Link } from "react-router-dom";
import { ROUTES } from "../../../common/constants/appConstants";

const cards = [
	{ title: "Student Registration", description: "Register new students and review the current roster.", to: ROUTES.students },
	{ title: "Course Enrollment", description: "Link students to courses and track enrollment activity.", to: ROUTES.enrollments },
	{ title: "Grade Submission", description: "Capture grades for each student and semester.", to: ROUTES.grades },
];

function HomePage() {
	return (
		<div className="page-shell">
			<header className="hero">
				<p className="eyebrow">Department Dashboard</p>
				<h1>Student Management System</h1>
				<p className="hero-copy">Choose one of the management modules to continue.</p>
			</header>

			<div className="dashboard-grid">
				{cards.map((card) => (
					<Link key={card.title} to={card.to} className="dashboard-card">
						<h2>{card.title}</h2>
						<p>{card.description}</p>
						<span>Open module →</span>
					</Link>
				))}
			</div>
		</div>
	);
}

export default HomePage;
