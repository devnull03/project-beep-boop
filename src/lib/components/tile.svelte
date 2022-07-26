<script lang="ts">
  import { onMount } from "svelte";
  import { beep, scream, boop, sus } from "../assets/index";

  export let tapable: boolean = false;
  export let _this: HTMLDivElement | null = null;
  export let pointsCounter: number;

  let audio: HTMLAudioElement;
  $: tapped = false;
  const sounds = [boop, beep, boop, beep, boop, beep, boop, beep, sus];
  const randomSound = () => sounds[Math.floor(Math.random() * sounds.length)];

  onMount(() => {
    audio = new Audio(randomSound());
  });

  const clickHandler = () => {
    if (tapable) {
      if (!tapped) pointsCounter += 1;
      tapped = true;
      audio.play();
    }
  };
</script>

<div
  bind:this={_this}
  on:click={clickHandler}
  class={` h-48 w-full border-x border-l-sky-300 ${
    tapable ? (tapped ? " bg-gray-500" : "bg-[#4472c4]") : ""
  } `}
/>
