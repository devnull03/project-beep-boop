<script lang="ts">
  import type { Writable } from "svelte/store";
  import Button from "$lib/components/button.svelte";
  import { onMount } from "svelte";
  import Tile from "../components/tile.svelte";

  export let page: Writable<"start" | "game" | "end">;
  export let result: Writable<"win" | "lose">;

  let lastTile: HTMLDivElement;
  let firstTile: HTMLDivElement;

  let points = 0;

  let doit = false;
  let speed = 2;

  // const tiles = [
  //   [0, 1, 0, 1, 1, 0, 0, 1, 0, 0, 1, 1, 0, 0, 0, 0, 1],
  //   [1, 0, 0, 1, 1, 1, 0, 0, 1, 0, 0, 1, 0, 1, 1, 0, 0],
  //   [0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 1, 0, 1, 0, 1],
  //   [1, 1, 0, 0, 1, 0, 0, 1, 1, 1, 0, 0, 0, 1, 0, 1, 0],
  // ];

  const generateRandomTiles = (size: number = 20): number[][] => {
    const list = [];
    let sublist = [];

    const choises = [0, 1, 0, 0];
    for (let j = 0; j < 4; j++) {
      sublist = [];
      for (let i = 0; i < size; i++) {
        sublist.push(choises[Math.floor(Math.random() * choises.length)]);
      }
      list.push(sublist);
    }
    return list;
  };
  const tiles = generateRandomTiles(100);

  $: {
    if (lastTile) lastTile.scrollIntoView();
  }

  const repeatOften = (): void => {
    if (doit) {
      window.scrollBy({
        top: -speed,
        left: 0,
      });
      console.log("hm");
    }
    requestAnimationFrame(repeatOften);
  };
  onMount(() => {
    requestAnimationFrame(repeatOften);
  });

  const debugKeys = (e: KeyboardEvent) => {
    console.log(e.key);
    if (e.key === "k") {
      doit = !doit;
    } else if (e.key === "j") {
      if (lastTile) lastTile.scrollIntoView();
    } else if (e.key === "h") {
      speed += 2;
    } else if (e.key === "l") {
      speed -= 2;
    }
  };
</script>

<svelte:window on:keypress={debugKeys} />

<div
  class="flex flex-row w-screen overflow-scroll scroll-smooth"
  on:touchmove={(e) => e.preventDefault()}
  on:wheel={(e) => e.preventDefault()}
>
  {#each tiles as row}
    <div class="flex flex-col w-1/4">
      {#each row as tile, index}
        {#if index == row.length - 1}
          <Tile
            tapable={Boolean(tile)}
            bind:_this={lastTile}
            bind:pointsCounter={points}
          />
        {:else if index == 0}
          <Tile
            tapable={Boolean(tile)}
            bind:_this={firstTile}
            bind:pointsCounter={points}
          />
        {:else}
          <Tile tapable={Boolean(tile)} bind:pointsCounter={points} />
        {/if}
      {/each}
    </div>
  {/each}
</div>
<div class="py-14" />

<div
  class="fixed w-screen py-8 bottom-0 flex flex-row justify-evenly items-center bg-[#00b0f0] text-white text-3xl z-10"
>
  <Button
    on:click={() =>
      setTimeout(() => {
        $page = "start";
      }, 500)}
    text="Back"
  />
  <div>
    Your score: {points}
  </div>
  <Button
    on:click={() =>
      setTimeout(() => {
        $page = "end";
        $result = "lose";
      }, 500)}
    text="End"
  />
</div>
