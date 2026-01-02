import { about } from "@/data/about";

export default function About() {
  return (
    <section id="about" className="section-spacing text-gray-700 dark:text-gray-300">
      <h2 className="section-title">About</h2>

      <p className="max-w-4xl text-gray-700 leading-relaxed">
        {about.summary}
      </p>

      <div className="mt-12 grid md:grid-cols-2 gap-10 card p-6">
        {/* Education */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Education</h3>
          <div className="space-y-4">
            {about.education.map((edu) => (
              <div key={edu.degree}>
                <p className="font-medium">{edu.degree}</p>
                <p className="text-sm text-gray-600">
                  {edu.institution} • {edu.period}
                </p>
                {edu.score && (
                  <p className="text-sm text-gray-500">{edu.score}</p>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Soft Skills */}
        <div className="card p-6">
          <h3 className="text-xl font-semibold mb-4">Soft Skills</h3>
          <div className="flex flex-wrap gap-3">
            {about.softSkills.map((skill) => (
              <span
                key={skill}
                className="px-4 py-2 text-sm border rounded-full bg-white"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
