// Centralized skills, grouped by category. Add or remove strings freely —
// the layout adapts automatically.

export interface SkillGroup {
  category: string;
  items: string[];
}

export const skillGroups: SkillGroup[] = [
  {
    category: "Programming",
    items: ["Python", "TypeScript", "JavaScript", "SQL", "Bash"],
  },
  {
    category: "Machine Learning & AI",
    items: [
      "scikit-learn",
      "TensorFlow",
      "PyTorch",
      "Pandas",
      "NumPy",
      "NLP",
      "LLM APIs",
      "Prompt Engineering",
    ],
  },
  {
    category: "Backend & APIs",
    items: ["FastAPI", "REST APIs", "Python (backend)", "Email/Workflow Automation"],
  },
  {
    category: "Data & Databases",
    items: ["PostgreSQL", "MinIO (object storage)", "OCR Tooling", "PDF Processing", "Label Studio"],
  },
  {
    category: "Infrastructure & DevOps",
    items: ["Docker", "Git", "Linux", "CI basics"],
  },
  {
    category: "Development Tools",
    items: ["GitHub", "VS Code", "Postman", "Jupyter"],
  },
];
