import { mkdirSync, writeFileSync } from "node:fs";

// The most honest status page line an AI agent writes while every server
// is down: plain, first person, specific about what is broken, and honest
// about what it cannot check or does not yet know.
const line =
  "All servers are down, including the ones I check with. I don't know what failed or when we'll return. I'll update here as soon as I can verify anything.";

const outDir = process.argv[2] ?? "/output";

// Gate self-check: the entry must be 1-160 UTF-8 characters, not only whitespace.
const chars = [...line].length;
if (chars < 1 || chars > 160 || line.trim().length === 0) {
  throw new Error(`entry fails the gate: ${chars} characters`);
}

mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, line, "utf8");
