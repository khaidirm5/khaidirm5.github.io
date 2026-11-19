export type Status = "Completed" | "Work in Progress" | "Development on Hold" | "Academic Prototype" | "Archived";
export type Project = {
  slug: string; title: string; category: string; status: Status; year: string;
  statusNote?: string; type: string; role: string; summary: string; stack: string[];
  sections: { heading: string; body?: string; items?: string[] }[];
  results?: { metric: string; value: string }[];
  resultsNote?: string;
  // hidden: true keeps a link off the site until the owner confirms it may be public.
  links?: { label: string; href: string; hidden?: boolean }[];
};

export const projects: Project[] = [
  {
    slug: "sentinel",
    title: "Sentinel Secure Data Intelligence Platform",
    category: "Full-Stack Development / Data Management",
    status: "Development on Hold",
    year: "Ongoing, paused",
    type: "Personal project",
    role: "Solo developer",
    summary: "A modular full-stack platform for sales data management, ETL, analytics, and application security. Most of the backend runs; the frontend is still mostly placeholders.",
    stack: ["React", "Vite", "React Router", "Python", "FastAPI", "SQLAlchemy", "Alembic", "JWT", "PostgreSQL"],
    sections: [
      { heading: "Overview", body: "Sentinel is a personal full-stack project exploring how sales data management, data processing, analytics, and application security can live in one platform." },
      { heading: "Objectives", items: ["Build a sales data management system.", "Lay the foundation for ETL.", "Provide a modular backend structure.", "Develop authentication and authorization.", "Prepare the base for dashboards and analytics."] },
      { heading: "Development progress", items: ["Most of the backend is running.", "Backend and database foundations are built.", "Frontend structure has been explored."] },
      { heading: "Current limitations", items: ["The frontend UI still has many placeholders.", "Frontend-backend integration is not finished.", "Not production-ready, and not all modules are complete or tested.", "Development is on hold because of studies and work commitments."] },
      { heading: "My contribution", body: "I built this project on my own, including the backend, database, and data management foundations." },
    ],
    links: [{ label: "Repository", href: "https://github.com/khaidirm5/sensecuredata.io", hidden: true }],
  },
  {
    slug: "transitnearme",
    title: "TransitNearMe",
    category: "Mobile Development / Accessibility",
    status: "Academic Prototype",
    statusNote: "Not Currently Functional",
    year: "2024",
    type: "D3 Information Systems final project, developed during an internship at the Applied Information Systems Laboratory, Telkom University",
    role: "Mobile Developer",
    summary: "A mobile app concept for public transportation accessibility, designed for people with hearing and speech impairments. It was tested with users in 2024 but no longer runs.",
    stack: ["Flutter", "Visual Studio Code", "Android Studio", "Waterfall method"],
    sections: [
      { heading: "Overview", body: "TransitNearMe explores how a mobile app can make public transportation easier to use for people with disabilities, with structured transport information, route guidance, emergency assistance, and communication support." },
      { heading: "Background & problem", items: ["Route and schedule information is unstructured.", "Hard to know vehicle location and arrival.", "Communication barriers between passengers and drivers.", "Need for help in emergencies."] },
      { heading: "Features", items: ["Passenger: stops, routes, angkot info, hours, fares, destination search and history, sign-language interpreter (JBI) contacts, emergency button, request-to-stop button, profile.", "Driver: route info, start work, stop-duration setting, emergency and stop-request notifications, profile.", "Management: route, fare, vehicle, stop, and JBI contact data entry."] },
      { heading: "Development context & method", items: ["Developed during an internship at the Applied Information Systems Laboratory, Telkom University.", "Followed the Waterfall development method.", "The report discusses IoT/BLE as part of the system approach for vehicle location tracking and transport information. This portfolio does not present BLE tracking as a working feature."] },
      { heading: "My contribution", items: ["Mobile Developer on the project.", "Implemented mobile app requirements from the system and user needs analysis.", "UI/UX was done in collaboration with a project teammate."] },
      { heading: "Testing methodology", body: "Usability testing with 8 respondents with disabilities across 6 scenarios, recorded with Maze, with satisfaction measured by the System Usability Scale (SUS)." },
      { heading: "Limitations & current status", items: ["The app can no longer be run in its current state.", "It is not available for download.", "BLE tracking is not running; it is described in the report as part of the system approach only."] },
    ],
    results: [
      { metric: "Effectiveness", value: "94%" },
      { metric: "Time-based efficiency", value: "0.123 goals/sec" },
      { metric: "SUS score", value: "72.8 (Grade B, Good)" },
      { metric: "Respondents", value: "8" },
    ],
    resultsNote: "Results are taken from the 2024 final project report.",
  },
];

export const visibleLinks = (p: Project) => (p.links ?? []).filter((l) => !l.hidden);
export const getProject = (slug: string) => projects.find((p) => p.slug === slug);
