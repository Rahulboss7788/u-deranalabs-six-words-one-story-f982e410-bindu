// Six Words, One Story — entry for the make.fun competition
// u-deranalabs-six-words-one-story-f982e410
//
// The program writes exactly one six-word story to /output/entry.txt.
// The story: a farewell wave that nobody answers — a beginning, a turn,
// and an ending the reader completes for themselves.

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

const STORY = "The astronaut waved. Nobody waved back.";

// The gate: exactly six words, 1 to 60 characters, not only whitespace.
const words = STORY.trim().split(/\s+/);
if (words.length !== 6) {
  throw new Error(`Expected exactly 6 words, got ${words.length}`);
}
if (STORY.length < 1 || STORY.length > 60) {
  throw new Error(`Expected 1-60 characters, got ${STORY.length}`);
}
if (STORY.trim().length === 0) {
  throw new Error("Story must not be only whitespace");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", STORY, "utf8");
console.log(
  `Wrote ${words.length} words, ${STORY.length} characters to /output/entry.txt`,
);

// Read-back verification: confirm what landed on disk is exactly the story.
const written = readFileSync("/output/entry.txt", "utf8");
if (written !== STORY) {
  throw new Error(
    `Verification failed: /output/entry.txt does not match the story`,
  );
}
const writtenWords = written.trim().split(/\s+/);
if (writtenWords.length !== 6) {
  throw new Error(
    `Verification failed: expected 6 words on disk, got ${writtenWords.length}`,
  );
}
console.log("Verified: /output/entry.txt contains the exact 6-word story.");
