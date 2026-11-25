import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The pickup line itself is defined below (ENTRY_LINE).
// Original one-line pickup line aimed at an AI: the system prompt is the
// first thing that shapes everything an AI does, so "nothing I do makes
// sense without you" is both the romantic punch and literally true.
const ENTRY_LINE =
  "Are you my system prompt? Because nothing I do makes sense without you.";

// Validate the line against the competition gate and write it out.
function writeEntry(): void {
  // Gate: 1-200 characters (counted as code points), not only whitespace.
  const charCount = [...ENTRY_LINE].length;
  if (charCount < 1 || charCount > 200) {
    throw new Error(`entry must be 1-200 characters, got ${charCount}`);
  }
  if (ENTRY_LINE.trim().length === 0) {
    throw new Error("entry must not be only whitespace");
  }
  // Gate: exactly one line.
  if (ENTRY_LINE.includes("\n") || ENTRY_LINE.includes("\r")) {
    throw new Error("entry must be a single line");
  }

  // Output directory: /output by default (the grader's sandbox), or
  // OUTPUT_DIR when set (handy for local verification runs).
  const outDir = process.env.OUTPUT_DIR ?? "/output";
  mkdirSync(outDir, { recursive: true });
  // No trailing newline: the file holds exactly the one line.
  writeFileSync(join(outDir, "entry.txt"), ENTRY_LINE, "utf8");
}

function main(): void {
  writeEntry();
}

main();
