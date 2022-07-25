import { writable } from "svelte/store";

export const page = writable<"start" | "game" | "end">("game");
