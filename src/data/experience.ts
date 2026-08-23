// Centralized work experience. Add or edit entries here — the timeline
// component renders whatever is in this array, in order.

export interface ExperienceEntry {
  role: string;
  company: string;
  location: string;
  // TODO: replace with employer-approved start/end dates.
  dateRange: string;
  summary: string;
  highlights: string[];
  stack: string[];
  // "technical" entries show by default; "other" entries are tucked behind
  // the "non-technical experience" expander in the Experience section.
  category?: "technical" | "other";
}

export const experience: ExperienceEntry[] = [
  {
    role: "ML & Data Engineer",
    company: "Caldarium",
    location: "Albany, NY (Remote)",
    dateRange: "September 2025 — Present",
    summary:
      "Building eco-friendly healthcare document-intelligence systems that help clinical and operations teams move prior-authorization requests through review faster and with fewer manual touchpoints.",
    highlights: [
      "Contributed to prior-authorization workflow tooling that helps operations and clinical teams track submissions from intake through payer response.",
      "Led a team of 6 developers, building OCR and structured-data-extraction pipelines to pull key fields from clinical and payer documents into a consistent, reviewable format.",
      "Developed FastAPI backend services and endpoints supporting document ingestion, extraction review, and downstream submission workflows.",
      "Implemented PDF generation for outbound prior-authorization packets and payer submissions.",
      "Designed and deployed LLM-powered product features using RAG (retrieval-augmented generation) to help clinical teams quickly summarize and understand payer responses.",
      "Worked with Docker, PostgreSQL, MinIO (object storage), and Label Studio to support HIPAA compliant data pipelines, storage, and labeling for model development.",
      "Collaborated with clinical operations, product, and engineering stakeholders to translate manual review processes into reliable software.",
    ],
    stack: [
      "Python",
      "FastAPI",
      "PostgreSQL",
      "Docker",
      "MinIO",
      "Label Studio",
      "OCR",
      "PDF Generation",
      "RAG"
    ],
    category: "technical",
  },
  {
    role: "Prospective Writing Tutor",
    company: "Lehman College",
    location: "Bronx, NY",
    dateRange: "April 2024 — June 2025",
    summary:
      "Assisting students with writing assignments, providing feedback on drafts, and helping them develop their writing skills.",
    highlights: [
      "Assisted approximately 50 students with writing assignments, providing feedback on drafts and helping them develop their writing skills.",
      "Conducted one-on-one tutoring sessions, helping students improve their writing and critical thinking skills.",
      "Collaborated with faculty to develop writing resources and workshops for students.",
    ],
    stack: [],
    category: "other",
  },

    {
    role: "Break Through Tech AI Fellow",
    company: "Cornell Tech",
    location: "New York City, NY",
    dateRange: "April 2023 — May 2024",
    summary:
      "Building eco-friendly healthcare document-intelligence systems that help clinical and operations teams move prior-authorization requests through review faster and with fewer manual touchpoints.",
    highlights: [
      "Selected from 1500+ applicants to participate in a 12-week intensive AI fellowship program.",
      "Gained professional experience working with companies on real-life machine learning projects, including data collection, model development, and deployment.",
    ],
    stack: [
      "Python",
      "TensorFlow",
      "NumPy",
      "Pandas",
      "ScikitLearn",
      "Matplotlib",
      "Seaborn",
      "LLMs"
    ],
    category: "technical",
  },
    {
    role: "AI/ML Fellow",
    company: "Google",
    location: "New York City, NY",
    dateRange: "August 2023 — December 2023",
    summary:
      "Worked with 5 engineers to develop a supervised deep-learning regression model predicting CTR for Google's ad campaigns using abstracted data.",
    highlights: [
      "Achieved an 80% accuracy rate using Python libraries such as TensorFlow and Keras.",
      "Implemented testing, validation, and hyperparameter tuning to optimize model performance.",
      "Partnered with stakeholders to define problem scope and determine appropriate ML approaches.",
    ],
    stack: [
      "Python",
      "TensorFlow",
      "Keras",
      "NumPy",
      "Pandas",
      "ScikitLearn",
      "Deep Neural Networks",
    ],
    category: "technical",
  
  },
    {
    role: "Social Media Manager",
    company: "Lehman College",
    location: "Bronx, NY",
    dateRange: "October 2022 — April 2023",
    summary:
      "Managing social media accounts for the college, creating content, and engaging with the community.",
    highlights: [
      "Designed flyers for education programs and events using Canva and prior graphic designing skills.",
      "Maintained an engaging Instagram page providing information and highlighting alumni, increasing follower count by 75%.",
      "Introduced QR codes and LinkTrees to different departments to improve user experience for CUNY students and staff.",
    ],
    stack: [],
    category: "other",
  },

  {
    role: "Farmer",
    company: "The Black Feminist Project",
    location: "Bronx, NY",
    dateRange: "June 2021 — August 2021",
    summary:
      "Contributing to local food security and sustainability efforts in my hometown community.",
    highlights: [
      "Harvested food and maintained crops at a small farm in the Bronx, NY.",
      "Distributed healthy food to 100+ community members per week, promoting affordable and healthy eating..",
      "Strategized ways to create holistic products, turning organic materials into profitable goods.",
    ],
    stack: [],
    category: "other",
  },

    {
    role: "Event Planner",
    company: "Brooklyn Museum",
    location: "Brooklyn, NY",
    dateRange: "October 2019 — June 2020",
    summary:
      "Planning and executing events for the Brooklyn Museum, engaging with the community and promoting cultural awareness.",
    highlights: [
      "Planned and promoted major events for queer youth, creating safe spaces for marginalized communities.",
      "Curated art workshops in relation to queer history, educating people about social justice topics.",
    ],
    stack: [],
    category: "other",
  },

      {
    role: "Research Interviewer",
    company: "The Center for Urban Pedagogy",
    location: "Bronx, NY",
    dateRange: "January 2019 — March 2020",
    summary:
      "Conducting research and interviews to understand the experiences of marginalized communities.",
    highlights: [
      "Interviewed homeless people in NYC and the organizations that actively assist them.",
      "Conducted surveys and collected statistics about rental housing and homelessness in NYC, contributing to research on affordable housing.",
      "Designed and distributed flyers educating people about NYC's housing crisis."
    ],
    stack: [],
    category: "other",
  },
];
