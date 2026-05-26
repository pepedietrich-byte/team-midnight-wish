<script>
  import { scrollReveal } from '$lib/utils/animate.js';
  import GlowCard         from './GlowCard.svelte';
  import StarField        from './StarField.svelte';
  import { values }       from '$lib/data/values.js';

  const cardColor = { gold:'gold', blue:'blue', purple:'purple', green:'default' };
  const iconGlow  = {
    gold:   'filter: drop-shadow(0 0 6px rgba(247,216,75,0.6));',
    blue:   'filter: drop-shadow(0 0 6px rgba(59,158,255,0.6));',
    purple: 'filter: drop-shadow(0 0 6px rgba(139,92,246,0.6));',
    green:  'filter: drop-shadow(0 0 6px rgba(74,222,128,0.6));',
  };
</script>

<section id="values" class="relative bg-midnight-3 overflow-hidden py-20 md:py-28">
  <StarField count={28} goldRatio={0.08} />

  <!-- Background ring glow accent -->
  <div class="absolute bottom-0 right-0 w-1/2 h-1/2 pointer-events-none opacity-10 hidden lg:block" aria-hidden="true">
    <img
      src="/assets/mascot/umbreon-rings.gif"
      alt=""
      class="w-full h-full object-cover"
      style="mix-blend-mode: screen;"
    />
  </div>

  <!-- Mew floating sprite (decorative) -->
  <div class="absolute bottom-12 right-6 w-20 h-20 pointer-events-none select-none hidden xl:block opacity-30 animate-float-slow" aria-hidden="true">
    <img
      src="/assets/sprites/mew-sprite.png"
      alt=""
      class="pixel w-full h-full object-contain"
      style="image-rendering:pixelated; animation-delay:2s; filter: drop-shadow(0 0 8px rgba(255,182,193,0.4));"
    />
  </div>

  <div class="section-wrap relative z-10">

    <!-- Heading -->
    <div class="text-center mb-14" use:scrollReveal>
      <p class="section-label mb-3">What We Believe</p>
      <h2 class="font-display text-xs sm:text-sm md:text-base leading-loose">
        <span class="text-white">Community</span>
        <span style="color:#f7d84b;"> Values</span>
      </h2>
      <p class="text-white/40 text-sm max-w-md mx-auto mt-4 leading-relaxed">
        Six pillars that define who we are and how we play — together.
      </p>
    </div>

    <!-- Values grid -->
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
      {#each values as val, i}
        <div use:scrollReveal={{ delay: i * 70, direction: 'up' }}>
          <GlowCard color={cardColor[val.color] ?? 'default'} padding="p-6" className="h-full group">
            <div class="flex flex-col gap-4 h-full">

              <!-- Icon -->
              <span
                class="text-3xl w-12 h-12 flex items-center justify-center rounded-xl bg-white/[0.03] border border-white/[0.06] group-hover:scale-110 transition-transform duration-300"
                style="{iconGlow[val.color] || ''}"
              >{val.icon}</span>

              <!-- Title -->
              <h3 class="font-display text-[10px] sm:text-xs text-white">{val.title}</h3>

              <!-- Description -->
              <p class="text-white/45 text-xs sm:text-sm leading-relaxed flex-1">{val.description}</p>

              <!-- Bottom accent line -->
              <div class="h-px w-8 rounded-full mt-auto
                {val.color === 'gold'   ? 'bg-yellow-400/50' :
                 val.color === 'blue'   ? 'bg-blue-400/50'   :
                 val.color === 'purple' ? 'bg-purple-400/50' :
                                         'bg-green-400/50'}
              "></div>
            </div>
          </GlowCard>
        </div>
      {/each}
    </div>

    <!-- Bottom CTA -->
    <div class="flex justify-center mt-14" use:scrollReveal={{ delay: 200 }}>
      <a href="#pvp" class="btn-primary">Ready to Join? ►</a>
    </div>

  </div>
</section>