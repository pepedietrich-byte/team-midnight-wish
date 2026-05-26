<script>
  import { scrollReveal } from '$lib/utils/animate.js';
  import GlowCard         from './GlowCard.svelte';
  import StarField        from './StarField.svelte';
  import { leagues, steps } from '$lib/data/pvp.js';
</script>

<section id="pvp" class="relative overflow-hidden py-20 md:py-28" style="background:#07091a;">
  <StarField count={40} goldRatio={0.07} />

  <!-- ── Lugia in background (right, low opacity) ───────────────── -->
  <div class="absolute right-0 top-0 bottom-0 w-[32rem] pointer-events-none select-none hidden lg:flex items-center" aria-hidden="true">
    <img
      src="/assets/sprites/lugia-sprite.png"
      alt=""
      class="pixel w-full h-auto opacity-[0.08] animate-float-slow"
      style="image-rendering:pixelated; animation-delay:1s; filter: drop-shadow(0 0 20px rgba(139,92,246,0.3));"
    />
  </div>

  <!-- Blue neon accent top-left -->
  <div class="absolute top-0 left-0 w-2/3 h-2/3 pointer-events-none opacity-20"
    style="background: radial-gradient(ellipse 60% 60% at -5% 0%, rgba(20,60,180,0.3) 0%, transparent 60%);"
  ></div>

  <div class="section-wrap relative z-10">

    <!-- Heading + Shiny Umbreon hero row -->
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">

      <!-- Text -->
      <div class="flex flex-col gap-7" use:scrollReveal>
        <div>
          <p class="section-label mb-3">Service</p>
          <h2 class="font-display text-xs sm:text-sm md:text-base leading-loose">
            <span class="text-white">PvP</span><br/>
            <span style="color:#3b9eff; text-shadow: 0 0 20px rgba(59,158,255,0.45);">Lending</span><br/>
            <span class="text-white">Program</span>
          </h2>
        </div>
        <p class="text-white/50 text-sm sm:text-base leading-relaxed max-w-md font-light">
          Don't have the PvP team you need? Borrow one. Team Midnight Wish
          maintains a rotating roster of meta-ready squads available to members
          for competitive sessions — no cost, no stress.
        </p>
        <div class="flex flex-col xs:flex-row gap-3">
          <a href="https://discord.gg/" target="_blank" rel="noreferrer noopener" class="btn-blue">
            Open a Ticket ↗
          </a>
          <a href="#about" class="btn-outline">Learn More ►</a>
        </div>
      </div>

      <!-- PvP mascot image -->
      <div
        class="relative flex justify-center lg:justify-end"
        use:scrollReveal={{ delay: 150, direction: 'left' }}
      >
        <div class="relative">
          <img
            src="/assets/sprites/lugia-sprite.png"
            alt="Lugia sprite — PvP mascot"
            class="relative z-10 w-48 sm:w-56 md:w-64 h-auto object-contain"
            style="animation: float 6s ease-in-out infinite;"
          />
        </div>
      </div>
    </div>

    <!-- League cards -->
    <div class="mb-14">
      <p class="section-label mb-6 text-center" use:scrollReveal>Available Leagues</p>
      <div class="grid grid-cols-1 sm:grid-cols-3 gap-5">
        {#each leagues as league, i}
          <div use:scrollReveal={{ delay: i * 100 }}>
            <GlowCard
              color={league.available ? 'blue' : 'default'}
              padding="p-6"
              className="h-full {!league.available ? 'opacity-55' : ''}"
            >
              <div class="flex flex-col gap-4 h-full">
                <div class="flex items-center justify-between">
                  <span class="text-2xl">{league.icon}</span>
                  {#if league.available}
                    <span class="font-mono text-[9px] px-2 py-1 rounded-full bg-green-400/10 border border-green-400/20 text-green-400 uppercase tracking-wider">
                      Available
                    </span>
                  {:else}
                    <span class="font-mono text-[9px] px-2 py-1 rounded-full bg-white/5 border border-white/10 text-white/30 uppercase tracking-wider">
                      Soon
                    </span>
                  {/if}
                </div>

                <div>
                  <h3 class="font-display text-[10px] sm:text-xs text-white mb-1">{league.name}</h3>
                  <p class="font-mono text-blue-400/70 text-[9px] uppercase tracking-wider">{league.cap}</p>
                </div>

                <p class="text-white/45 text-xs leading-relaxed flex-1">{league.description}</p>

                <p class="font-mono text-[9px] text-white/28 italic">{league.highlight}</p>
              </div>
            </GlowCard>
          </div>
        {/each}
      </div>
    </div>

    <!-- How It Works steps -->
    <div use:scrollReveal={{ delay: 100 }}>
      <p class="section-label mb-6 text-center">How It Works</p>
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {#each steps as step, i}
          <div use:scrollReveal={{ delay: i * 90 }}>
            <GlowCard color="default" padding="p-5" className="h-full relative">
              <!-- Step number -->
              <span
                class="absolute -top-3 -left-1 font-display text-[10px] text-yellow-400/30"
                style="filter: drop-shadow(0 0 8px rgba(247,216,75,0.3));"
              >{step.number}</span>

              <div class="flex flex-col gap-3 pt-2">
                <h4 class="font-display text-[10px] text-white">{step.title}</h4>
                <p class="text-white/42 text-xs leading-relaxed">{step.body}</p>
              </div>

              <!-- Connector arrow (all but last) -->
              {#if i < steps.length - 1}
                <div class="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 z-10 text-yellow-400/30 text-sm">›</div>
              {/if}
            </GlowCard>
          </div>
        {/each}
      </div>
    </div>

    <!-- Discord CTA banner -->
    <div class="mt-14" use:scrollReveal={{ delay: 150 }}>
      <GlowCard color="blue" padding="p-8" className="text-center">
        <div class="flex flex-col items-center gap-5">
          <span class="text-4xl">🎮</span>
          <div>
            <h3 class="font-display text-xs sm:text-sm text-white mb-2">Ready to Battle?</h3>
            <p class="text-white/45 text-sm max-w-md mx-auto">
              Join our Discord server to access PvP lending, event sign-ups, and the full community.
            </p>
          </div>
          <a
            href="https://discord.gg/"
            target="_blank"
            rel="noreferrer noopener"
            class="btn-blue"
          >
            Join Discord ↗
          </a>
        </div>
      </GlowCard>
    </div>

  </div>
</section>