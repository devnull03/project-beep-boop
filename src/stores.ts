import { writable } from "svelte/store";

export const page = writable<"start" | "game" | "end">("start");
export const result = writable<"win" | "lose">("win");
