<script lang="ts">
  import type { Writable } from "svelte/store";
  import Button from "$lib/components/button.svelte";
  import { Skull, Star } from "../assets/index";

  export let page: Writable<"start" | "game" | "end">;
  export let result: Writable<"win" | "lose">;

  const clickHandler_exit = () => {
    setTimeout(() => {
      $page = "start";
    }, 500);
  };
  const clickHandler_play = () => {
    setTimeout(() => {
      $page = "game";
    }, 500);
  };
</script>

{#if $result == "win"}
  <div
    class="h-screen w-screen flex flex-col items-center justify-center pb-40"
  >
    <div class="" id="title">
      <Star class="fixed top-16 left-16" size={50} />
      <Star class="fixed top-20 right-16" size={50} />
      <Star class="fixed top-60 left-20" size={50} />
      <Star class="fixed top-[14rem] right-20" size={50} />
      <div class="text-[#002060] text-5xl font-bold pb-72">
        <p class="-rotate-12">YOU WIN!</p>
      </div>
    </div>
    <div class="text-2xl">
      <Button className="px-10" on:click={clickHandler_play} text="PLAY AGAIN!" />
    </div>
  </div>
{:else}
  <div
    class="h-screen w-screen bg-[#be0606] flex flex-col items-center justify-center"
  >
    <div class="flex flex-col items-center justify-center pb-56" id="title">
      <div class="text-5xl font-semibold">YOU DIED</div>
      <Skull />
    </div>
    <div class="text-2xl flex flex-row gap-10">
      <Button className="px-10" on:click={clickHandler_exit} text="EXIT" />
      <Button className="px-10" on:click={clickHandler_play} text="PLAY" />
    </div>
  </div>
{/if}
