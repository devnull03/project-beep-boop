<script lang="ts">
  import type { Writable } from "svelte/store";
  import Button from "$lib/components/button.svelte";
  import { Star } from "../assets/index";

  export let page: Writable<"start" | "game" | "end">;

  const clickHandler = () => {
    setTimeout(() => {
      $page = "game";
    }, 500);
  };
</script>

<div class="h-screen w-screen flex flex-col items-center justify-center pb-40">
  <div class="" id="title">
    <Star class="fixed top-16 left-16" size={50} />
    <Star class="fixed top-20 right-16" size={50} />
    <Star class="fixed top-60 left-20" size={50} />
    <Star class="fixed top-[14rem] right-20" size={50} />
    <div class="text-[#002060] text-5xl font-bold pb-72">
      <p class="-rotate-12">Beep</p>
      <p class="pl-24">oR</p>
      <p class="pl-24">Boop</p>
    </div>
  </div>
  <div class="text-2xl">
    <Button className="px-10" on:click={clickHandler} text="P L A Y !" />
  </div>
</div>
