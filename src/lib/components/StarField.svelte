<script>
  import { onMount } from 'svelte';

  export let count      = 50;
  export let goldRatio  = 0.08;
  export let className  = '';

  let stars = [];

  onMount(() => {
    stars = Array.from({ length: count }, (_, i) => ({
      id:       i,
      x:        Math.random() * 100,
      y:        Math.random() * 100,
      size:     Math.random() < 0.18 ? 2 : 1,
      isGold:   Math.random() < goldRatio,
      dur:      2.5 + Math.random() * 5,
      delay:    Math.random() * 6,
      baseOpacity: 0.2 + Math.random() * 0.8,
    }));
  });
</script>

<div
  class="absolute inset-0 pointer-events-none overflow-hidden {className}"
  aria-hidden="true"
>
  {#each stars as s (s.id)}
    <span
      class="absolute rounded-full {s.isGold ? 'bg-yellow-300' : 'bg-white'}"
      style="
        width:  {s.size}px;
        height: {s.size}px;
        left:   {s.x}%;
        top:    {s.y}%;
        opacity:{s.baseOpacity};
        animation: twinkle {s.dur}s ease-in-out infinite {s.delay}s;
      "
    ></span>
  {/each}
</div>