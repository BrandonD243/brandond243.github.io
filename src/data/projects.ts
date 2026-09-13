// Centralized project data. Every project card on the homepage and every
// case-study page is generated from this array — add a project here and it
// appears in both places automatically. Fields marked TODO are placeholders:
// fill them in with real, approved content rather than invented results.

export interface ProjectLink {
  label: string;
  url: string;
}

export interface CaseStudySection {
  heading: string;
  body: string[]; // one string per paragraph
}

export interface Project {
  slug: string;
  title: string;
  outcome: string; // one-sentence outcome shown on the card
  tags: string[];
  status: "case-study" | "in-progress";
  links: ProjectLink[]; // GitHub / live demo — omit if not available
  caseStudy: {
    overview: string;
    problem: string;
    myRole: string;
    approach: string;
    architecture: string;
    technologies: string[];
    decisions: string[];
    results?: string; // clearly marked as placeholder when unknown; omit to hide the section entirely
    challenges: string;
    hasDiagramPlaceholder: boolean;
    diagramUrl?: string; // path under /public — overrides the placeholder box when set
    screenshotUrl?: string; // path under /public — overrides the screenshot placeholder box when set
  };
}

export const projects: Project[] = [
  {
    slug: "payer-policy-evidence-engine",
    title: "Payer-Policy Evidence Engine",
    outcome:
      "Surfaces the specific payer-policy language behind a coverage decision so reviewers don't have to search PDFs by hand.",
    tags: ["Python", "FastAPI", "RAG", "LLM Extraction", "YAML Policy Modeling", "PDF Generation"],
    status: "case-study",
    links: [
      { label: "GitHub", url: "https://github.com/BrandonD243/payer-policy-evidence-engine" },
    ],
    caseStudy: {
      overview:
        "A tool that connects payer policy documents to the specific criteria used in prior-authorization decisions, so that the rework cycle and manual burden is tremendously reduced.",
      problem:
        "Revenue cycle operation teams often need to justify a decision by citing the exact payer policy that applies, but the correct documentation isn't always correctly provided, leading to expensive resubmissions on the clinical team's side.",
      myRole:
        "Designed and implemented the clinical concept registry and payer policy model, the LLM-based extraction pipeline, the clause-evaluation logic, and the FastAPI service with its PDF and email output adapters.",
      approach:
        "Parse payer policy documents into structured sections, and then match relevant policy language to the criteria so it can be later supplemented as direct evidence",
      architecture:
        "Payer policy documents are ingested directly from payer websites and run through a RAG pipeline so the specific policy language behind a clause is directly sourced from the document. Then, the retrieved language is modeled as YAML files for each payer unique payer and CPT code matching for easy readability. They're categorized as approval clauses, exclusion clauses, and decision logic. Each clause naming the clinical concepts it depends on and linked is linked back directly to the source. Incoming patient documents are split into sections and sent to an LLM that extracts concept mentions as exact text cited with a confidence score and certainty level. Every portion is then re-checked against that concept's own keyword indicators before being accepted, filtering out unsupported or hallucinated matches. A clause evaluator matches the validated concept mentions against each clause's required and exclusion concepts using AND/OR logic to mark clauses satisfied, partial, or unsatisfied, and a coverage/PA-required check combines with those clause results into a single covered/not-covered decision. That decision, plus the retrieved clause text and evidence spans, is returned through a FastAPI service and can be rendered into a submission-ready PDF packet or routed to email delivery. A separate compiler stage can flatten the per-payer YAML into static JSON knowledge graphs for faster lookup without changing how policies are authored.",
      technologies: [
        "Python",
        "FastAPI",
        "Retrieval-Augmented Generation (RAG)",
        "OpenAI API (gpt-4o-mini)",
        "YAML-based policy & concept modeling",
        "pypdf / reportlab (PDF generation)",
      ],
      decisions: [
        "Retrieved payer policy language directly from payer websites through a RAG layer to keep clauses traceable to the exact source passage and prevent drifting.",
        "Kept the approve/deny decision entirely rule-based (AND/OR clause logic over required and exclusion concepts) and used the LLM only to phrase the human-readable rationale afterward. Summarization only happens after the rule-based decision is made so the LLM can only impact the wording without the outcome.",
        "Added a re-validation guardrail on every LLM-extracted concept. The returned text from the document must match that concept's own keyword indicators before it's accepted to prevent model hallucinations.",
        "Kept payer policy modeled as plain per-payer, per-CPT YAML instead of in code, so adding a new payer or procedure code is seamless and doesn't require major changes in the coding logic.",
      ],
      challenges:
        "Payer requirements change 1-2 times a year, all at different times, and hand-maintained policy YAML couldn't keep up on its own. The move to RAG addresses this by keeping clause language grounded in the payer's current source document instead of a stale transcription. Running the LLM extraction as a single call against a whole document also created high latency and let details get lost; splitting extraction into multiple smaller calls fixed both problems at once, cutting latency and improving accuracy by giving the model less to track per call. Listening to the complaints of people who perform these workflows shaped which parts of the workflow were worth building first.",
      hasDiagramPlaceholder: true,
      diagramUrl: "/projects/payer-policy-architecture.svg",
      screenshotUrl: "/projects/payer-policy-evidence-engine.jpeg",
    },
  },
  {
    slug: "healthcare-document-parsing-ocr-pipeline",
    title: "Healthcare Document Parsing & OCR Pipeline",
    outcome:
      "Turns scanned clinical and payer documents into structured, reviewable fields instead of flat images or raw text.",
    tags: ["OCR", "Python", "Label Studio", "Data Pipelines"],
    status: "case-study",
    links: [
      { label: "GitHub", url: "https://github.com/BrandonD243/clinical-reasoning-engine" },
    ],
    caseStudy: {
      overview:
        "A document-processing pipeline that takes scanned or exported healthcare documents and extracts the structured fields needed downstream, using OCR combined with layout-aware parsing.",
      problem:
        "Clinical and payer documents arrive as scans or exports with inconsistent layouts. Useful information is trapped in image or unstructured text form, which blocks any automated downstream processing.",
      myRole:
        "Built the OCR extraction, field-parsing, and schema-validation pipeline on top of a Docker-based MinIO/PostgreSQL/Label Studio project scaffold, implemented parsing logic, confidence-based review routing, and the structured-output validation.",
      approach:
        "Combine OCR with layout and rule-based parsing to extract key fields, then route low-confidence extractions to a labeling and review step so the pipeline improves over time rather than failing silently.",
      architecture:
        "Incoming documents land in MinIO object storage to resemble a HIPAA compliant storage with protected security. An OCR stage (pytesseract) extracts raw text from scanned or image-based pages, while documents that already carry a native text layer skip straight to text extraction (pdfplumber) — so the same downstream parser handles both scanned and computer-generated documents without paying OCR's accuracy and speed cost where it isn't needed. A rule-based field parser pulls the key fields (identifiers, dates, patient details, line items) out of the extracted text into a structured JSON payload, which is then checked against a JSON Schema before it's allowed to persist. Any document that fails schema validation, or whose extraction confidence falls below threshold, is routed into Label Studio for a human to review and correct rather than silently persisting a guessed or incomplete record. Reviewed and validated records are written to PostgreSQL as the structured output downstream services consume. The whole stack — Postgres, MinIO, Label Studio, and a helper container for running the bootstrap/export scripts — is defined in Docker Compose so the same environment reproduces locally and for review data.",
      technologies: [
        "Python",
        "pytesseract (OCR)",
        "pdfplumber",
        "Label Studio",
        "PostgreSQL",
        "MinIO",
        "Docker Compose",
        "JSON Schema validation",
      ],
      decisions: [
        "Split text extraction from field parsing by using a document's native text layer when available and fall back to OCR only for scanned/image-based pages, rather than running every document through OCR regardless of whether it needs it.",
        "A parsed document has to pass schema validation to count as structured output and anything that falls below the extraction confidence threshold is routed to Label Studio for quality assurance control.",
        "Kept the Docker Compose scaffold (Postgres, MinIO, Label Studio, helper container) as the actual deployment target, so pipeline changes can be tested against the same environment the review data lives in rather than a separate local setup.",
        "Chose Tesseract as the OCR engine after benchmarking it against alternatives on our own document set, rather than picking one on reputation alone.",
        "De-identified PHI with reversible synthetic substitution instead of one-way hashing, so a human reviewer in Label Studio still sees a realistic-looking name or date to visually verify and correct against, with the original value restored only when output is returned to the source. A trade-off was that hashing would have had no attack surface to protect since it can't be reversed, while the synthetic-to-real mapping is itself a sensitive asset that now has to be tightly access-controlled and audited.",
      ],
      challenges:
        "Picking an OCR engine involved lots of benchmarking to determine which would provide the most accurate output, and because we decided to use OCR locally, we didn't have to send scans to a third-party OCR. HIPAA-compliance was also a challenge, because we had to find a way to encrypt or abstract PHI. Hashing was the easy option, but a hash can't be visually reviewed or corrected — a reviewer needs something that looks like a real name or date of birth to judge whether the parser got it right. We abstracted real fields into synthetic, realistic-looking values for anything a person or downstream process would see, and restored the original data only when output was returned to the source system. That trade-off cuts both ways: unlike an irreversible hash, the synthetic-to-real mapping is itself a sensitive asset that has to be tightly access-controlled and audited, since anyone who can read it can reverse the substitution.",
      hasDiagramPlaceholder: true,
      diagramUrl: "/projects/healthcare-ocr-architecture.svg",
      screenshotUrl: "/projects/document-parsing-ocr.jpeg",
    },
  },
];

export function getProjectBySlug(slug: string) {
  return projects.find((p) => p.slug === slug);
}
