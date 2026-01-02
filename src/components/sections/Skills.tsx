import { skills } from "@/data/skills";

const SkillBlock = ({ title, items }: { title: string; items: string[] }) => (
  <div className="mb-10">
    <h3 className="text-xl font-semibold mb-3">{title}</h3>
    <div className="flex flex-wrap gap-3">
      {items.map((skill) => (
        <span
          key={skill}
          className="px-4 py-2 text-sm border rounded-full bg-gray-50 card p-6"
        >
          {skill}
        </span>
      ))}
    </div>
  </div>
);

export default function Skills() {
  return (
    <section id="skills" className="section-spacing text-gray-700 dark:text-gray-300">
      <h2 className="section-title">Skills</h2>

      <SkillBlock title="Programming Languages" items={skills.programming} />
      <SkillBlock title="Web & Backend Development" items={skills.web} />
      <SkillBlock title="Cloud & DevOps" items={skills.cloudDevOps} />
      <SkillBlock title="Artificial Intelligence and Data Science" items={skills.aiMlData} />
      <SkillBlock title="AI-Assisted Development" items={skills.aiAssistedDev} />
      <SkillBlock title="Blockchains & Cryptography" items={skills.blockchainCrypto} />
      <SkillBlock title="Cybersecurity & SOC" items={skills.cybersecurity} />
      <SkillBlock title="IoT & Embedded Systems" items={skills.iotEmbedded} />
    </section>
  );
}
