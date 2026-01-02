"use client";

export default function DownloadButtons() {
  return (
    <div className="mt-6 flex flex-wrap gap-4">
      <button
        onClick={() => window.open("/portfolio-print")}
        className="px-4 py-2 border rounded hover:bg-gray-50"
      >
        Download Portfolio
      </button>

      <button
        onClick={() => window.open("/resume-print")}
        className="px-4 py-2 border rounded hover:bg-gray-50"
      >
        Download Resume
      </button>
    </div>
  );
}
