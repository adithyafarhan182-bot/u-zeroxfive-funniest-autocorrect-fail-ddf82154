// A work email where autocorrect turns "annual" into "anal", followed by the
// sender's panicked all-caps correction. The correction is the realism engine:
// real autocorrect fails look exactly like this — a mortifying slip plus a
// frantic follow-up — while the slip itself lands on first read.
// No trailing newline: the gate counts characters, and the file must stay a
// single line of 1-199 chars, not only whitespace.
import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "Hi team, please find attached our anal report for Q3. I meant annual, ANNUAL.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
