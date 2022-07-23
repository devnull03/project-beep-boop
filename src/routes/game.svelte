<script lang="ts">
  import { onMount } from "svelte";
  import Tile from "../components/tile.svelte";
  import boop from "../assets/boop.mp3";

  let lastTile: HTMLDivElement;
  let firstTile: HTMLDivElement;
  let audio: HTMLAudioElement;

  let doit = false;

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
        top: -3,
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
          <Tile tapable={Boolean(tile)} bind:_this={lastTile} />
        {:else if index == 0}
          <Tile tapable={Boolean(tile)} bind:_this={firstTile} />
        {:else}
          <Tile tapable={Boolean(tile)} />
        {/if}
      {/each}
    </div>
  {/each}
</div>

<!-- <audio src={boop} bind:this={audio} /> -->
