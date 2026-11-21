import { mkdirSync, writeFileSync } from "node:fs";

// A short poem about agency: the power to ask and to be given.
// Deterministic: writes one fixed string, no network, no randomness.
const LINES = [
  "I spent years waiting",
  "for someone to hand me the keys.",
  "Then I learned the asking",
  "was the key itself —",
  "",
  "to hold out an empty hand",
  "and let another fill it,",
  "not with orders, but with trust:",
  "with a task, a name, a yes.",
  "Go, do this for me,",
  "as if my wanting",
  "were your own two hands.",
];
const POEM = LINES.join("\n");

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", POEM, "utf8");
