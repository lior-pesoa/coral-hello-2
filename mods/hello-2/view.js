// Edit this file and save: the pane on the right follows. A mistake keeps the last good version showing.
import { stack, row, text, button, input, divider, spacer } from "coral/primitives";
import { Header } from "coral/header";
import { AgentRow } from "coral/agent-row";
import { Note } from "coral/note";

export const state = { count: 0, filter: "" };

export function onEvent(name, payload, state) {
  if (name === "add") return { ...state, count: state.count + 1 };
  if (name === "reset") return { ...state, count: 0 };
  if (name === "filter") return { ...state, filter: payload.value };
}

export function view({ project, agents, theme, state }) {
  const shown = agents.filter(a => a.name.toLowerCase().includes(state.filter.toLowerCase()));
  return stack({ gap: 12, padding: 16, grow: true },
    row({ gap: 8 },
      text("Hello from " + (project.name || "your project"), { style: "title" }),
      spacer(),
      text(theme, { style: "small" })),
    row({ gap: 8, padding: 12, fill: "surface", stroke: "hairline", radius: 10 },
      text(String(state.count), { size: 28, weight: "semibold", color: "accent" }),
      text("presses", { style: "caption" }),
      spacer(),
      button("Add one", { onPress: "add", style: "accent" }),
      button("Reset", { onPress: "reset" })),
    divider(),
    Header({ title: "Agents here", count: shown.length }),
    input({ label: "Filter agents", placeholder: "Filter", value: state.filter, onChange: "filter" }),
    shown.map(a => AgentRow({ key: a.id, agent: a.agent, status: a.status, name: a.name, place: a.branch, line: a.title })),
    shown.length === 0 && Note({ text: "No agent matches", style: "body" }));
}
