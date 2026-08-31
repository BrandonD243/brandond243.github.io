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
        "A tool that connects payer policy documents to the specific criteria used in prior-authorization decisions, so evidence of patient care is accurate, justifiable, and visible.",
      problem:
        "Prior-authorization reviewers often need to justify a decision by citing the exact payer policy that applies. Policies are long, inconsistently formatted PDFs, and finding the right clause by hand is slow and error-prone.",
      myRole:
        "Sole builder, end to end — designed and implemented the clinical concept registry and payer policy model, the LLM-based extraction pipeline, the deterministic clause-evaluation logic, and the FastAPI service with its PDF and email output adapters.",
      approach:
        "Parse payer policy documents into structured, searchable sections, then match relevant policy language to the criteria being evaluated for a given request, so the supporting evidence is presented alongside the decision rather than buried in a separate document.",
      architecture:
        "Payer policy documents are ingested directly from payer websites and run through a retrieval-augmented pipeline — chunked, embedded, and indexed — so the specific policy language behind a clause is pulled from the source document rather than hand-transcribed. That retrieved language is modeled as YAML per payer and CPT code — approval clauses, exclusion clauses, and decision logic (e.g. \"any one clause satisfies approval\" vs. \"all clauses required\") — each clause naming the clinical concepts it depends on and linked back to the retrieved source passage. Incoming patient documents are split into sections and sent to an LLM (gpt-4o-mini) that extracts concept mentions as exact text spans with a confidence score and certainty level; every returned span is then re-checked against that concept's own keyword indicators before being accepted, filtering out unsupported or hallucinated matches. A clause evaluator matches the validated concept mentions against each clause's required and exclusion concepts under its AND/OR logic to mark clauses satisfied, partial, or unsatisfied, and a coverage/PA-required check combines with those clause results into a single covered/not-covered decision. That decision, plus the retrieved clause text and evidence spans, is returned through a FastAPI service and can be rendered into a submission-ready PDF packet or routed to email delivery. A separate compiler stage can flatten the per-payer YAML into static JSON knowledge graphs for faster lookup without changing how policies are authored.",
      technologies: [
        "Python",
        "FastAPI",
        "Retrieval-Augmented Generation (RAG)",
        "OpenAI API (gpt-4o-mini)",
        "YAML-based policy & concept modeling",
        "pypdf / reportlab (PDF generation)",
      ],
      decisions: [
        "Retrieved payer policy language directly from source (payer websites) through a RAG layer instead of relying on hand-transcribed clauses, so each clause stays traceable to the exact source passage and is less likely to drift out of sync when a payer updates its policy.",
        "Kept the approve/deny decision entirely rule-based (AND/OR clause logic over required and exclusion concepts) and used the LLM only to phrase the human-readable rationale afterward — the summarization prompt is handed the already-determined decision and told to align to it, with a non-LLM fallback if the API call fails or returns unparseable output, so the model can affect wording but never the outcome.",
        "Added a re-validation guardrail on every LLM-extracted concept: the returned text span must match that concept's own positive/therapy/duration keyword indicators before it's accepted, rather than trusting the model's structured output directly.",
        "Kept payer policy modeled as plain per-payer, per-CPT YAML instead of in code, so adding a new payer or procedure code is a data change, not a code change.",
      ],
      challenges:
        "Payer requirements change constantly, and hand-maintained policy YAML couldn't keep up on its own — that gap is what drove the move to RAG, so clause language stays grounded in the payer's current source document instead of a stale transcription. Running the LLM extraction as a single call against a whole document also created high latency and let details get lost; splitting extraction into multiple smaller calls (one per document section) fixed both problems at once, cutting latency and improving accuracy by giving the model less to track per call. Just as important was hearing directly from the reviewers who'd actually use this — their day-to-day friction points shaped which parts of the workflow were worth building first.",
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
        "A document-processing pipeline that takes scanned or exported healthcare documents and extracts the structured fields — patient, procedure, and policy details — needed downstream, using OCR combined with layout-aware parsing.",
      problem:
        "Clinical and payer documents arrive as scans or exports with inconsistent layouts. Useful information is trapped in image or unstructured text form, which blocks any automated downstream processing.",
      myRole:
        "Built the OCR extraction, field-parsing, and schema-validation pipeline on top of a Docker-based MinIO/PostgreSQL/Label Studio project scaffold — owned the parsing logic, the confidence-based review routing, and the structured-output validation end to end.",
      approach:
        "Combine OCR with layout- and rule-based parsing to extract key fields, then route low-confidence extractions to a labeling and review step so the pipeline improves over time rather than failing silently.",
      architecture:
        "Incoming documents land in MinIO object storage. An OCR stage (pytesseract) extracts raw text from scanned or image-based pages, while documents that already carry a native text layer skip straight to text extraction (pdfplumber) — so the same downstream parser handles both scanned and computer-generated documents without paying OCR's accuracy and speed cost where it isn't needed. A rule-based field parser pulls the key fields (identifiers, dates, patient details, line items) out of the extracted text into a structured JSON payload, which is then checked against a JSON Schema before it's allowed to persist. Any document that fails schema validation, or whose extraction confidence falls below threshold, is routed into Label Studio for a human to review and correct rather than silently persisting a guessed or incomplete record. Reviewed and validated records are written to PostgreSQL as the structured output downstream services consume. The whole stack — Postgres, MinIO, Label Studio, and a helper container for running the bootstrap/export scripts — is defined in Docker Compose so the same environment reproduces locally and for review data.",
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
        "Split text extraction from field parsing: use a document's native text layer when available and fall back to OCR only for scanned/image-based pages, rather than running every document through OCR regardless of whether it needs it.",
        "Used JSON Schema validation as a hard gate before persistence — a parsed document has to pass schema validation to count as structured output; anything that fails, or that falls below the extraction confidence threshold, is routed to Label Studio for a human to fix instead of being pushed downstream as-is.",
        "Kept the Docker Compose scaffold (Postgres, MinIO, Label Studio, helper container) as the actual deployment target, so pipeline changes can be tested against the same environment the review data lives in rather than a separate local setup.",
        "Chose Tesseract as the OCR engine after benchmarking it against alternatives on our own document set, rather than picking one on reputation alone — it also runs fully self-hosted, so scans never leave the environment for a third-party cloud OCR API, which mattered as much for HIPAA exposure as for raw accuracy.",
        "De-identified PHI with reversible synthetic substitution instead of one-way hashing, so a human reviewer in Label Studio still sees a realistic-looking name or date to visually verify and correct against, with the original value restored only when output is returned to the source. The trade-off: hashing would have had no attack surface to protect since it can't be reversed, while the synthetic-to-real mapping is itself a sensitive asset that now has to be tightly access-controlled and audited.",
      ],
      challenges:
        "Two things stood out. First, picking an OCR engine wasn't a reputation call — it took actually benchmarking candidates against our own scanned document set and comparing accuracy before landing on Tesseract, which had the added benefit of running self-hosted instead of sending scans to a third-party cloud OCR API. Second, staying HIPAA-compliant meant deciding how to protect PHI that's inevitably visible during OCR debugging and human review. Hashing was the easy option, but a hash can't be visually reviewed or corrected — a reviewer needs something that looks like a real name or date of birth to judge whether the parser got it right. We abstracted real fields into synthetic, realistic-looking values for anything a person or downstream process would see, and restored the original data only when output was returned to the source system. That trade-off cuts both ways: unlike an irreversible hash, the synthetic-to-real mapping is itself a sensitive asset that has to be tightly access-controlled and audited, since anyone who can read it can reverse the substitution.",
      hasDiagramPlaceholder: true,
      diagramUrl: "/projects/healthcare-ocr-architecture.svg",
    },
  },
];

export function getProjectBySlug(slug: string) {
  return projects.find((p) => p.slug === slug);
}
