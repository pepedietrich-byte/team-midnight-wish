<script>
  import { scrollReveal } from '$lib/utils/animate.js';
  import GlowCard         from './GlowCard.svelte';
  import StarField        from './StarField.svelte';
</script>

<section id="about" class="relative bg-midnight-2 overflow-hidden py-20 md:py-28">
  <StarField count={30} goldRatio={0.06} />

  <!-- Nebula accent -->
  <div class="absolute top-0 left-0 w-2/3 h-full pointer-events-none opacity-20"
    style="background: radial-gradient(ellipse 60% 80% at -10% 50%, rgba(100,70,10,0.3) 0%, transparent 60%);"
  ></div>

  <div class="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-16 items-center">

      <!-- LEFT: Story ───────────────────────────────────────────── -->
      <div class="flex flex-col gap-8" use:scrollReveal={{ delay: 0 }}>

        <div>
          <p class="section-label mb-3">Our Story</p>
          <h2 class="font-display text-xs sm:text-sm md:text-base leading-loose">
            <span class="text-white">Forged in</span><br/>
            <span style="color:#f7d84b;">Darkness &amp;</span><br/>
            <span class="text-white">Starlight</span>
          </h2>
        </div>

        <div class="flex flex-col gap-4 text-white/55 text-sm sm:text-base leading-relaxed font-light max-w-lg">
          <p>
            Team Midnight Wish was founded by a group of trainers who believed
            the best adventures happen after dark. What started as a small
            Umbreon appreciation circle evolved into one of the game's most
            respected guilds.
          </p>
          <p>
            We specialize in <span class="text-yellow-400/90">shiny hunting</span>,
            <span class="text-blue-400/90">competitive PvP</span>, and
            <span class="text-purple-400/90">legendary raids</span> — but at our
            core, we're a community built on friendship, trust, and the shared
            love of adventure.
          </p>
          <p>
            Our mascot — Umbreon, the Moonlight Pokémon — embodies everything
            we stand for: patience, loyalty, and the quiet power that emerges
            from the shadows.
          </p>
        </div>

        <!-- Quick stats -->
        <div class="grid grid-cols-3 gap-4 mt-2">
          {#each [
            { val: '50+', label: 'Members'    },
            { val: '3yrs', label: 'Active'     },
            { val: '200+', label: 'Shinies'    },
          ] as stat}
            <GlowCard color="gold" padding="p-4">
              <span class="block font-display text-yellow-400 text-xs sm:text-sm mb-1">{stat.val}</span>
              <span class="block font-mono text-white/40 text-[9px] uppercase tracking-widest">{stat.label}</span>
            </GlowCard>
          {/each}
        </div>

        <a href="#events" class="btn-primary w-fit">View Events ►</a>
      </div>

      <!-- RIGHT: Eeveelutions group ─────────────────────────────── -->
      <div class="relative flex justify-center lg:justify-end" use:scrollReveal={{ delay: 150, direction: 'left' }}>

        <!-- Glow behind panel -->
        <div class="absolute -inset-6 pointer-events-none rounded-3xl"
          style="background: radial-gradient(ellipse, rgba(247,216,75,0.06) 0%, transparent 65%);"></div>

        <div class="relative w-full max-w-[400px] lg:max-w-[460px]">
          <!-- Glowing frame border -->
          <div class="absolute -inset-[1px] rounded-3xl opacity-40"
            style="background: linear-gradient(145deg, rgba(247,216,75,0.4), rgba(139,92,246,0.2), transparent);"
          ></div>

          <!-- Card -->
          <div class="relative rounded-3xl overflow-hidden border border-white/[0.07] backdrop-blur-sm"
            style="background: linear-gradient(145deg, rgba(15,20,38,0.9), rgba(10,14,26,0.95));"
          >
            <!-- Header strip -->
            <div class="px-6 py-4 border-b border-white/[0.06] flex items-center gap-3">
              <span class="w-2 h-2 rounded-full bg-yellow-400 animate-pulse-ring"></span>
              <span class="font-mono text-[10px] text-white/40 uppercase tracking-[0.35em]">Eevee Evolution Line</span>
            </div>

            <!-- Image -->
            <div class="p-6 flex justify-center">
              <img
                src="/assets/mascot/eeveelutions-group.png"
                alt="Pixel art group of Eeveelutions: Espeon, Umbreon, Eevee, Jolteon, Flareon, and Vaporeon"
                class="pixel w-full max-w-[320px] object-contain"
                style="image-rendering: pixelated;"
              />
            </div>

            <!-- Caption -->
            <div class="px-6 pb-5 text-center">
              <p class="font-mono text-white/30 text-[10px] uppercase tracking-[0.3em]">
                All paths of Eevee — all welcome here
              </p>
            </div>
          </div>

          <!-- Umbreon "leader" highlight dot -->
          <div class="absolute -top-2 -right-2 w-5 h-5 rounded-full bg-yellow-400 opacity-80 animate-pulse-ring"
            style="filter: drop-shadow(0 0 6px #f7d84b);"></div>
        </div>
      </div>

    </div>
  </div>
</section>