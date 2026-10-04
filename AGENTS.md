# Repository boundaries

- Maintain only public journal names, public feed URLs, provenance and explicit verification states.
- Never add user data, secrets, runtime telemetry, abstracts or article text.
- data/feeds.json is canonical. Run npm run build and npm test after editing it.
- Do not hand-edit generated dist files or docs/CATALOG.md.
- Candidate count, campaign progress and currently verified count are different metrics.
- Never mark an entry active without documented current XML and journal-identity evidence.
- Keep README.md, README.zh-CN.md and README.ja.md factually aligned.

