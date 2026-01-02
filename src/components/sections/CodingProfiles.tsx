import { codingProfiles } from "@/data/codingProfiles";

export default function CodingProfiles() {
  return (
    <section className="section-spacing text-gray-700 dark:text-gray-300">
      <h2 className="section-title">Problem Solving & Coding Profiles</h2>

      <div className="grid md:grid-cols-3 gap-6 card p-6">
        {codingProfiles.map((profile) => (
          <a
            key={profile.platform}
            href={profile.link}
            target="_blank"
            rel="noopener noreferrer"
            className="border rounded-lg p-6 hover:shadow-md transition"
          >
            <h3 className="text-lg font-semibold">{profile.platform}</h3>
            <p className="text-sm text-gray-500 mt-1">
              @{profile.username}
            </p>
            <p className="mt-3 text-sm text-gray-600">
              Focus: {profile.focus}
            </p>
          </a>
        ))}
      </div>
    </section>
  );
}
