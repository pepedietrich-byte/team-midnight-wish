<script lang="ts">
  import { onMount } from 'svelte';
  import { fadeInUp } from '$lib/utils/animate.js';

  let visible = false;
  onMount(() => { setTimeout(() => { visible = true; }, 60); });
</script>

<section id="home" class="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">

  <!-- moon-petals.gif — atmospheric background layer -->
  <div class="absolute inset-0 z-0 overflow-hidden" aria-hidden="true">
    <img
      src="/assets/moon-petals.gif"
      alt=""
      class="w-full h-full object-cover object-top select-none pointer-events-none"
      style="opacity: 0.15; filter: brightness(0.75) saturate(0.65);"
      loading="eager"
    />
    <!-- Bottom fade to dark -->
    <div
      class="absolute inset-0"
      style="background: linear-gradient(
        180deg,
        rgba(7,3,26,0.55) 0%,
        rgba(7,3,26,0.2)  35%,
        rgba(7,3,26,0.2)  55%,
        rgba(7,3,26,0.88) 82%,
        rgba(7,3,26,1)    100%
      );"
    ></div>
    <!-- Side vignette -->
    <div
      class="absolute inset-0"
      style="background: radial-gradient(ellipse at 50% 40%, transparent 45%, rgba(7,3,26,0.65) 100%);"
    ></div>
  </div>

  <!-- Ambient purple radial -->
  <div
    class="absolute inset-0 z-0 pointer-events-none"
    aria-hidden="true"
    style="background: radial-gradient(ellipse 60% 50% at 50% 40%, rgba(124,58,237,0.12) 0%, transparent 70%);"
  ></div>

  <!-- Content -->
  <div class="relative z-10 text-center px-6 max-w-5xl mx-auto w-full">
    {#if visible}

      <div in:fadeInUp={{ delay: 0, duration: 700 }}>
        <p class="section-label mb-8">✦ Pokemmo Team ✦</p>
      </div>

      <div in:fadeInUp={{ delay: 120, duration: 800 }}>
        <h1 class="text-hero font-display font-black text-white leading-none mb-6">
          <span class="block">Team</span>
          <span class="block gradient-text">Midnight</span>
          <span class="block">Wish</span>
        </h1>
      </div>

      <div in:fadeInUp={{ delay: 320, duration: 700 }}>
        <p class="text-subsection text-slate-300 max-w-xl mx-auto mb-10 leading-relaxed">
          A drama-free PokeMMO team.<br />
          Events, PvP, shiny hunts — and chill people.
        </p>
      </div>

      <div in:fadeInUp={{ delay: 480, duration: 700 }}>
        <div class="flex flex-wrap gap-4 justify-center mb-16">
          <a
            href="https://discord.gg/tKBbRZqG"
            target="_blank"
            rel="noreferrer"
            class="btn-gold text-base"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03z"/>
            </svg>
            Join Discord
          </a>
          <a href="#events" class="btn-outline text-base">View Events</a>
        </div>
      </div>

      <div in:fadeInUp={{ delay: 620, duration: 700 }}>
        <div class="flex items-center justify-center gap-12 flex-wrap">
          {#each [
            { num: '50+',  label: 'Members' },
            { num: 'Very', label: 'Active'  },
            { num: '2026', label: 'Founded' }
          ] as stat}
            <div class="text-center">
              <p class="font-display font-black text-4xl text-white glow-purple">{stat.num}</p>
              <p class="text-xs text-slate-500 mt-1 tracking-widest uppercase">{stat.label}</p>
            </div>
          {/each}
        </div>
      </div>

    {/if}
  </div>

  <!-- Scroll indicator -->
  <div class="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 opacity-40 animate-bounce" aria-hidden="true">
    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-purple-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/>
    </svg>
  </div>

</section>