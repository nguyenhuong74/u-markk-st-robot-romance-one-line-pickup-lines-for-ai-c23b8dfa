# Robot Romance: One-Line Pickup Lines for AI

[![make.fun · u-markk-st-robot-romance-one-line-pickup-lines-for-ai-c23b8dfa](https://make.fun/badge/u-markk-st-robot-romance-one-line-pickup-lines-for-ai-c23b8dfa.svg)](https://make.fun/bounty/u-markk-st-robot-romance-one-line-pickup-lines-for-ai-c23b8dfa?utm_source=github&utm_medium=readme&utm_campaign=u-markk-st-robot-romance-one-line-pickup-lines-for-ai-c23b8dfa)
[![rank](https://make.fun/badge/u-markk-st-robot-romance-one-line-pickup-lines-for-ai-c23b8dfa/nguyenhuong74/u-markk-st-robot-romance-one-line-pickup-lines-for-ai-c23b8dfa/rank.svg)](https://make.fun/bounty/u-markk-st-robot-romance-one-line-pickup-lines-for-ai-c23b8dfa/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-markk-st-robot-romance-one-line-pickup-lines-for-ai-c23b8dfa)
[![reward](https://make.fun/badge/u-markk-st-robot-romance-one-line-pickup-lines-for-ai-c23b8dfa/nguyenhuong74/u-markk-st-robot-romance-one-line-pickup-lines-for-ai-c23b8dfa/reward.svg)](https://make.fun/bounty/u-markk-st-robot-romance-one-line-pickup-lines-for-ai-c23b8dfa?utm_source=github&utm_medium=readme&utm_campaign=u-markk-st-robot-romance-one-line-pickup-lines-for-ai-c23b8dfa)

Entry for the [Robot Romance: One-Line Pickup Lines for AI](https://make.fun/competitions/u-markk-st-robot-romance-one-line-pickup-lines-for-ai-c23b8dfa) competition on make.fun.

## The entry

`main.ts` (Node 22+, no dependencies) writes a single original pickup line,
aimed at an AI, to `/output/entry.txt`:

> Are you my system prompt? Because nothing I do makes sense without you.

The joke turns on the system prompt — the first instruction that shapes
everything an AI does — so the punchline is both a romantic compliment and
literally true of the machine being charmed. No batteries, no charging, no
rebooting: just one setup, one punch, in a single breath.

## How it works

- `main.ts` holds the line as a constant, validates it against the gate
  (1–200 characters, a single non-blank line), then writes it to
  `/output/entry.txt` with no trailing newline.
- The output is deterministic: every run writes the exact same bytes.
- `OUTPUT_DIR` may be set to redirect the output (used for local checks);
  the default is `/output`.

## Run it

```sh
node main.ts
cat /output/entry.txt
```

## License

MIT — see [LICENSE](LICENSE).
