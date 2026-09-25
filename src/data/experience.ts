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
    role: "AI Product Engineer",
    company: "Caldarium",
    location: "Albany, NY (Remote)",
    dateRange: "September 2025 — Present",
    summary:
      "Building eco-friendly healthcare document-intelligence systems that help clinical and operations teams move prior-authorization requests through review faster and with fewer manual touchpoints.",
    highlights: [
      "Designing and deploying an AI-native prior-authorization product to partner hospitals using RAG and agentic workflows on clinical documentation, projected to decrease manual workflow and patient denial rates by 45%.",
      "Making technical tradeoffs between prompting, retrieval, and system design approaches to optimize output quality.",
      "Developed FastAPI backend services and endpoints supporting document ingestion, extraction review, and downstream submission workflows.",
      "Architecting cloud infrastructure on Azure to support end-to-end data pipelines and handle API management at scale.",
      "Designed and deployed LLM-powered product features using RAG (retrieval-augmented generation) to help clinical teams quickly summarize and understand payer responses.",
      "Worked with Docker, PostgreSQL, MinIO (object storage), and Label Studio to support HIPAA compliant data pipelines, storage, and labeling for model development.",
      "Connecting with investors and hospital teams at local events to raise money and iterate product based on feedback."
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
      "A 13-month Break Through Tech AI Fellowship combining a 12-week machine learning foundations curriculum with real-world applied placements, including an AI/ML Engineer role at Google.",
    highlights: [
      "Selected from 1,500+ applicants for the fellowship, which opened with a 12-week intensive machine learning foundations curriculum.",
      "Gained professional experience working with companies on real-life machine learning projects, including data collection, model development, and deployment.",
      "Fellowship placements included an AI/ML Engineer role at Google and an applied machine learning project with the New York Botanical Garden (NYBG).",
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
    role: "AI/ML Engineer",
    company: "Google",
    location: "New York City, NY",
    dateRange: "August 2023 — December 2023",
    summary:
      "Worked with 5 engineers to develop a supervised deep-learning regression model using a convolutional neural network (CNN) architecture and Scikit-Learn-based analysis, built with TensorFlow and Keras — predicting CTR for Google's ad campaigns using abstracted data.",
    highlights: [
      "Locally trained, tested, and validated a predictive model on Google’s user data, projected to increase revenue by 14%.",
      "Achieved an 80% accuracy rate using Python libraries including TensorFlow, Keras, and Scikit-Learn.",
      "Fine-tuned hyperparameters and engineered model features to increase initial model accuracy from 75% to 80%.",
      "Presented findings to stakeholders at Google regarding how data was handled during the process and next steps."
    ],
    stack: [
      "Python",
      "TensorFlow",
      "Keras",
      "NumPy",
      "Pandas",
      "ScikitLearn",
      "CNN",
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