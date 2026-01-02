import { profile } from "@/data/profile";
// import ThemeToggle from "../ThemeToggle";

export default function Hero() {
  return (
    <section className="section-spacing text-gray-700 dark:text-gray-300">
      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
        
        {/* Left content */}
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-bold section-title">
            {profile.name}
          </h1>

          <p className="mt-4 text-lg text-muted">
            {profile.roles.join(" • ")}
          </p>

          <p className="mt-6 text-muted leading-relaxed">
            {profile.summary}
          </p>
        </div>

        {/* Right button
        <div className="md:self-start">
          <ThemeToggle />
        </div> */}

      </div>
    </section>
  );
}
