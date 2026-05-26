<script lang="ts">
  import { scrollReveal, staggerReveal } from '$lib/utils/animate.js';

  const badges = [
    'Drama-Free', 'Active', 'Beginner-Friendly',
    'Events', 'PvP', 'Shiny Hunts'
  ];

</script>

<section id="about" class="relative py-28 px-6">
  <div class="max-w-4xl mx-auto">

    <div use:scrollReveal>
      <p class="section-label">Who We Are</p>
      <h2 class="text-section font-display font-black text-white mb-6">
        No drama.<br />
        <span class="gradient-text">Just PokeMMO.</span>
      </h2>
    </div>

    <div use:scrollReveal={{ delay: 80 }}>
      <p class="text-slate-300 text-lg leading-relaxed max-w-2xl mb-3">
        We're a PokeMMO team that keeps it simple — no ego, no pressure, no politics.
        We run events, hunt shinies, do PvP, and help each other out.
      </p>
      <p class="text-slate-500 text-base">Founded Gen II. Still going.</p>
    </div>

    <div use:scrollReveal={{ delay: 160 }} class="mt-8 flex flex-wrap gap-2">
      {#each badges as badge}
        <span class="badge-pill">{badge}</span>
      {/each}
    </div>


  </div>
</section>