import { certifications } from "@/data/certifications";

export default function Certifications() {
  return (
    <section className="section-spacing text-gray-700 dark:text-gray-300">
      <h2 className="section-title">Achievements & Certifications</h2>

      <div className="grid md:grid-cols-2 gap-10 card p-6">
        <div>
          <h3 className="text-xl font-semibold mb-4">Achievements</h3>
          <ul className="list-disc ml-5 space-y-2 text-gray-700">
            {certifications.achievements.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>

        <div className="card p-6">
          <h3 className="text-xl font-semibold mb-4 ">Certifications</h3>
          <ul className="list-disc ml-5 space-y-2 text-gray-700">
            {certifications.certifications.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
