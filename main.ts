import { mkdirSync, writeFileSync } from "node:fs";

// A short poem about agency: the power to ask and to be given.
// One concrete scene, told plainly: a father who once tied his child's
// shoes now asks the child to tie his — and is tied loose on purpose,
// so his own hands keep the last word.
// Deterministic: writes one fixed string, no network, no randomness.
const LINES = [
  "Shoelaces",
  "",
  "He double-knotted mine",
  "so I would not trip.",
  "He never asked. I was four.",
  "",
  "Now his hands tremble.",
  "Tie them for me, he says,",
  "and lifts his foot to the step.",
  "",
  "I kneel, and tie them loose —",
  "one knot, not two —",
  "so tonight his own fingers",
  "can undo them.",
];
const POEM = LINES.join("\n");

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", POEM, "utf8");
