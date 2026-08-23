Drop these files here, named exactly:

  lehman-college-degree.jpg
  break-through-tech-ai.png
  data-analytics-coop.png

Each entry's `certificateUrl` in src/data/education.ts already points
at these filenames, so the "View Certificate" link on each card will
work the moment the files are added — no code changes needed. To add
another certificate or use a different filename, update
`certificateUrl` in education.ts to match.
