# Hello

A small starter pane: a greeting, a press counter and a filterable list of the agents in this project. It shows the basics of a view: state, events, an input and Coral's own rows.

## Where it shows

- One pane in the right-hand side (`slots: ["pane"]`), named "Hello". Plain `view.js`, API 1, no data, no commands, no network.

## What it shows, top to bottom

1. **Title row.** "Hello from <project name>" in the title style; when the project has no name, "Hello from your project". On the far right, the current theme name (light or dark) in small text.
2. **Counter card.** A row on the surface fill with a hairline stroke, radius 10, padding 12:
   - the count as a big number (size 28, semibold, accent color), then "presses" as a caption;
   - pushed to the right: an accent button "Add one" and a plain button "Reset".
3. A divider.
4. **"Agents here" header** with the count of agents currently shown.
5. **Filter input** labelled "Filter agents", placeholder "Filter".
6. **One agent row per agent** in the project (Coral's `AgentRow`): the agent's kind, status, name, its branch as the place and its title as the line.
7. When no agent matches the filter: a note "No agent matches" in body style.

Spacing: the whole pane is a vertical stack, gap 12, padding 16, filling the pane's height. Rows use gap 8.

## State and behaviour

- State starts as `{ count: 0, filter: "" }`.
- "Add one" adds 1 to the count. "Reset" sets it back to 0.
- Typing in the filter keeps only agents whose name contains the text, ignoring case. An empty filter shows every agent. The header count follows the filtered list.
- Nothing is saved anywhere else: the count and filter live in the pane's own state.

## States to check

- No agents in the project: header shows 0, the note shows.
- Several agents, filter matching some: only those rows, header count matches.
- Light and dark theme: the theme name on the right changes with it.
