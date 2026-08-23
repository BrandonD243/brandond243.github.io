// Centralized education & certifications.

export interface EducationEntry {
  credential: string;
  institution: string;
  dateRange: string;
  note?: string;
  // Path under /public/certificates/. See public/certificates/README.txt.
  certificateUrl?: string;
}

export const education: EducationEntry[] = [
  {
    credential: "B.S. in Computer Science",
    institution: "Lehman College",
    dateRange: "August 2021 - May 2025",
    //note: "TODO: add honors, relevant coursework, or GPA if desired.",
    certificateUrl: "/certificates/lehman-college-degree.jpg",
  },
  {
    credential: "Break Through Tech AI Program Certificate",
    institution: "Cornell Tech",
    dateRange: "April 2023 - May 2024",
    certificateUrl: "/certificates/break-through-tech-ai.png",
  },
  {
    credential: "Data Analytics Certificate",
    institution: "COOP",
    dateRange: "July 2025 - December 2025",
    certificateUrl: "/certificates/data-analytics-coop.png",
  },
];
