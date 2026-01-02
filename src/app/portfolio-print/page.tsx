import { profile } from "@/data/profile";
import { skills } from "@/data/skills";
import { experience } from "@/data/experience";
import { projects } from "@/data/projects";
import { about } from "@/data/about";

export default function PortfolioPrint() {
  return (
    <main className="p-10 text-black bg-white text-sm leading-relaxed">
      {/* Header */}
      <header className="mb-8">
        <h1 className="text-3xl font-bold">{profile.name}</h1>
        <p>{profile.location}</p>
        <p>{profile.email}</p>
      </header>

      {/* Summary */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">Professional Summary</h2>
        <p>{profile.summary}</p>
      </section>

      {/* Education */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">Education</h2>
        {about.education.map((edu) => (
          <p key={edu.degree}>
            <strong>{edu.degree}</strong>, {edu.institution} ({edu.period})
            {edu.score ? ` — ${edu.score}` : ""}
          </p>
        ))}
      </section>

      {/* Skills */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">Technical Skills</h2>
        <p><strong>Programming:</strong> {skills.programming.join(", ")}</p>
        <p><strong>Web & Backend:</strong> {skills.web.join(", ")}</p>
        <p><strong>Cloud & DevOps:</strong> {skills.cloudDevOps.join(", ")}</p>
        <p><strong>AI-Assisted Development:</strong> {skills.aiAssistedDev.join(", ")}</p>
        <p><strong>Cybersecurity:</strong> {skills.cybersecurity.join(", ")}</p>
        <p><strong>IoT & Embedded:</strong> {skills.iotEmbedded.join(", ")}</p>
      </section>

      {/* Experience */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">Experience</h2>
        {experience.map((exp) => (
          <div key={exp.role} className="mb-4">
            <p>
              <strong>{exp.role}</strong> — {exp.company} ({exp.period})
            </p>
            <ul className="list-disc ml-5">
              {exp.description.map((d) => (
                <li key={d}>{d}</li>
              ))}
            </ul>
          </div>
        ))}
      </section>

      {/* Projects */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">Projects</h2>

        {projects.featured.map((p) => (
          <p key={p.title} className="mb-2">
            <strong>{p.title}</strong> — {p.category}. {p.description}
          </p>
        ))}

        <h3 className="font-semibold mt-4">Research Work</h3>
        {projects.research.map((r) => (
          <p key={r.title} className="mb-2">
            <strong>{r.title}</strong> ({r.type}) — {r.description}
          </p>
        ))}

        <h3 className="font-semibold mt-4">Professional Contributions</h3>
        {projects.professional.map((p) => (
          <p key={p.title}>
            <strong>{p.title}</strong> — {p.organization}. {p.role}
          </p>
        ))}
      </section>

      {/* Soft Skills */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">Soft Skills</h2>
        <p>{about.softSkills.join(", ")}</p>
      </section>
    </main>
  );
}
