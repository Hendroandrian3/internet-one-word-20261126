// The Internet in One Word — one word, written to /output/entry.txt.
// The word is a fixed string: the program is deterministic by construction.
import { mkdirSync, writeFileSync } from "node:fs";

const WORD = "brainrot";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", WORD, "utf8");
console.log(`wrote /output/entry.txt (${WORD.length} characters)`);
