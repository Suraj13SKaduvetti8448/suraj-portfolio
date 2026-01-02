import { projects } from "@/data/projects";

export default function Projects() {
  return (
    <section id="projects" className="section-spacing text-gray-700 dark:text-gray-300">
      <h2 className="section-title">Projects</h2>

      <h3 className="text-xl font-semibold mb-6">Featured Projects</h3>
      <div className="space-y-8 card p-6">
        {projects.featured.map((project) => (
          <div key={project.title} className="border p-6 rounded-lg">
            <h4 className="text-lg font-semibold">{project.title}</h4>
            <p className="text-sm text-gray-500">
              {project.category} • {project.status} • {project.ownership}
            </p>
            <p className="mt-3 text-gray-700">{project.description}</p>
            <p className="mt-2 text-sm">
              <strong>Role:</strong> {project.role}
            </p>
            <p className="mt-2 text-sm">
              <strong>Tech:</strong> {project.tech.join(", ")}
            </p>
          </div>
        ))}
      </div>

      <h3 className="text-xl font-semibold mt-14 mb-6">Research Projects</h3>
      <div className="space-y-8 card p-6">
        {projects.research.map((research) => (
          <div key={research.title} className="border p-6 rounded-lg bg-gray-50">
            <h4 className="text-lg font-semibold">{research.title}</h4>
            <p className="text-sm text-gray-500">
              {research.type} • {research.status}
            </p>
            <p className="mt-3 text-gray-700">
              {research.description}
            </p>
            <p className="mt-2 text-sm">
              <strong>Tech:</strong> {research.tech.join(", ")}
            </p>
          </div>
        ))}
      </div>


      <h3 className="text-xl font-semibold mt-14 mb-6">
        Professional & Internship Work
      </h3>
      <ul className="space-y-4 card p-6">
        {projects.professional.map((proj) => (
          <li key={proj.title} className="border p-4 rounded">
            <strong>{proj.title}</strong> — {proj.organization}
            <p className="text-sm text-gray-600">{proj.role}</p>
          </li>
        ))}
      </ul>

      <h3 className="text-xl font-semibold mt-14 mb-4">
        Additional Technical Contributions
      </h3>
      <ul className="list-disc ml-5 text-gray-700 card p-6">
        {projects.additional.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </section>
  );
}
