import { profile } from "@/data/profile";
import { skills } from "@/data/skills";
import { experience } from "@/data/experience";
import { about } from "@/data/about";

export default function ResumePrint() {
  return (
    <main className="p-6 text-black bg-white text-xs leading-tight">
      {/* Header */}
      <header className="mb-3">
        <h1 className="text-xl font-bold">{profile.name}</h1>
        <p>{profile.location} | {profile.email}</p>
      </header>

      {/* Summary */}
      <section className="mb-3">
        <h2 className="font-semibold">Professional Summary</h2>
        <p>{profile.summary}</p>
      </section>

      {/* Skills */}
      <section className="mb-3">
        <h2 className="font-semibold">Technical Skills</h2>
        <p><strong>Languages:</strong> {skills.programming.join(", ")}</p>
        <p><strong>Web & Backend:</strong> {skills.web.join(", ")}</p>
        <p><strong>Cloud & DevOps:</strong> {skills.cloudDevOps.join(", ")}</p>
        <p><strong>AI & ML:</strong> AI-Assisted Development, Prompt Engineering, ML Fundamentals</p>
      </section>

      {/* Experience */}
      <section className="mb-3">
        <h2 className="font-semibold">Experience</h2>
        {experience.map((exp) => (
          <p key={exp.role}>
            <strong>{exp.role}</strong>, {exp.company} ({exp.period})
          </p>
        ))}
      </section>

      {/* Projects (Selected) */}
      <section className="mb-3">
        <h2 className="font-semibold">Key Projects</h2>
        <p>
          <strong>Homework Management System</strong> — Full-stack Laravel application with role-based access.
        </p>
        <p>
          <strong>Fashion Recommendation System</strong> — ML-based recommender using AI techniques.
        </p>
        <p>
          <strong>EduBlog Platform</strong> — Ongoing Next.js & TypeScript educational platform.
        </p>
      </section>

      {/* Education */}
      <section className="mb-3">
        <h2 className="font-semibold">Education</h2>
        {about.education.map((edu) => (
          <p key={edu.degree}>
            <strong>{edu.degree}</strong>, {edu.institution}
          </p>
        ))}
      </section>

      {/* Soft Skills */}
      <section className="mb-3">
        <h2 className="font-semibold">Soft Skills</h2>
        <p>{about.softSkills.join(", ")}</p>
      </section>

      {/* Declaration */}
      <section className="mt-4">
        <h2 className="font-semibold">Declaration</h2>
        <p>
          I hereby declare that the information provided above is true and correct
          to the best of my knowledge and belief.
        </p>
      </section>
    </main>
  );
}
