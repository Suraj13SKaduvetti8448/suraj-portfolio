import { contact } from "@/data/contact";
import DownloadButtons from "@/components/DownloadButtons";

export default function Contact() {
  return (
    <section id="contact" className="section-spacing text-gray-700 dark:text-gray-300">
      <h2 className="section-title">Contact</h2>

      <div className="space-y-3 text-gray-700 card p-6">
        <p>
          <strong>Email:</strong> {contact.email}
        </p>
        <p>
          <strong>Phone:</strong> {contact.phone}
        </p>
        <p>
          <strong>Location:</strong> {contact.location}
        </p>
      </div>

      <div className="mt-6 flex flex-wrap gap-4 card p-6">
        {contact.links.map((link) => (
          <a
            key={link.label}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 border rounded hover:bg-gray-50"
          >
            {link.label}
          </a>
        ))}
      </div>
{/* Client-side buttons */}
      <DownloadButtons />
    </section>
  );
}
