<script lang="ts">
  export let text = "";
  export let className = "";
</script>

<button
  on:click
  class=" btn flex flex-wrap items-center justify-center bg-[#4472c4] text-white p-5 rounded-md cursor-pointer shadow-md {className}"
>
  {text}
</button>

<style>
  .btn {
    transition: transform 300ms, box-shadow 300ms;
  }
  .btn:active {
    transform: scale(0.95);
    @apply shadow-sm;
  }
</style>
