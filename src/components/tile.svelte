<script lang="ts">
  import { onMount } from "svelte";

  import boop from "../assets/boop.mp3";

  export let tapable: boolean = false;
  export let _this: HTMLDivElement | null = null;
  let audio: HTMLAudioElement;
  $: tapped = false;

  onMount(() => {
    audio = new Audio(boop);
  });

  const clickHandler = () => {
    if (tapable) {
      tapped = true;
      audio.play();
    }
  };
</script>

<div
  bind:this={_this}
  on:click={clickHandler}
  class={` h-48 w-full border border-l-sky-300 ${
    tapable ? (tapped ? " bg-gray-500" : "bg-green-500") : ""
  } `}
/>
