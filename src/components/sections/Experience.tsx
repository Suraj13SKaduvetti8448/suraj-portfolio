import { experience } from "@/data/experience";

export default function Experience() {
  return (
    <section id="experience" className="section-spacing text-gray-700 dark:text-gray-300">
      <h2 className="section-title">Experience</h2>

      <div className="space-y-10 card p-6">
        {experience.map((exp) => (
          <div key={exp.role} className="border-l-4 pl-6">
            <h3 className="text-xl font-semibold">
              {exp.role} — {exp.company}
            </h3>

            <p className="text-sm text-gray-500 mt-1">{exp.period}</p>

            <p className="mt-3 text-sm text-gray-600">
              Tech: {exp.stack.join(", ")}
            </p>

            <ul className="mt-4 list-disc ml-5 space-y-2 text-gray-700">
              {exp.description.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
