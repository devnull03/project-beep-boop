<script lang="ts">
  import Game from "$lib/pages/game.svelte";
  import Start from "$lib/pages/start.svelte";
  import End from "$lib/pages/end.svelte";
  import { page } from "../stores";
</script>

{#if $page === "game"}
  <Game {page} />
{/if}
{#if $page === "start"}
  <Start {page} />
{/if}
{#if $page === "end"}
  <End {page} />
{/if}
