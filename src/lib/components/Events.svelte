<script>
  import { scrollReveal } from '$lib/utils/animate.js';
  import GlowCard         from './GlowCard.svelte';
  import StarField        from './StarField.svelte';
  import { eventTypes, upcomingEvents } from '$lib/data/events.js';

  const colorMap = {
    gold:   { badge:'bg-yellow-400/15 text-yellow-400 border-yellow-400/20', dot:'bg-yellow-400' },
    blue:   { badge:'bg-blue-400/15   text-blue-400   border-blue-400/20',   dot:'bg-blue-400'   },
    purple: { badge:'bg-purple-400/15 text-purple-400 border-purple-400/20', dot:'bg-purple-400' },
    green:  { badge:'bg-green-400/15  text-green-400  border-green-400/20',  dot:'bg-green-400'  },
  };

  const glowCard = { gold:'gold', blue:'blue', purple:'purple', green:'default' };
  const statusStyle = {
    soon: 'text-yellow-400 bg-yellow-400/10 border-yellow-400/20',
    open: 'text-green-400  bg-green-400/10  border-green-400/20',
  };
</script>

<section id="events" class="relative bg-midnight overflow-hidden py-20 md:py-28">
  <StarField count={35} goldRatio={0.07} />

  <!-- Purple nebula top-right -->
  <div class="absolute top-0 right-0 w-1/2 h-2/3 pointer-events-none opacity-15"
    style="background: radial-gradient(ellipse 60% 70% at 100% 0%, rgba(100,40,200,0.35) 0%, transparent 65%);"
  ></div>

  <div class="section-wrap relative z-10">

    <!-- Heading -->
    <div class="flex flex-col gap-3 mb-14 text-center" use:scrollReveal>
      <p class="section-label">What We Do</p>
      <h2 class="font-display text-xs sm:text-sm md:text-base leading-loose">
        <span class="text-gold-gradient" style="background: linear-gradient(90deg,#f7d84b,#ffe87a,#f7d84b); -webkit-background-clip:text; -webkit-text-fill-color:transparent;">Guild Events</span>
      </h2>
      <p class="text-white/45 text-sm max-w-lg mx-auto leading-relaxed">
        From weekly shiny chains to competitive brackets — there's always something happening in Team Midnight Wish.
      </p>
    </div>

    <!-- Event cards grid -->
    <div class="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-16">
      {#each eventTypes as evt, i}
        <div use:scrollReveal={{ delay: i * 80 }}>
          <GlowCard color={glowCard[evt.color]} padding="p-0" className="h-full">
            <div class="p-6 flex flex-col gap-4 h-full">

              <!-- Icon + title row -->
              <div class="flex items-start gap-4">
                <div class="text-3xl flex-shrink-0 w-10 h-10 flex items-center justify-center">{evt.icon}</div>
                <div>
                  <h3 class="font-display text-[10px] sm:text-xs text-white mb-1">{evt.title}</h3>
                  <p class="text-white/45 text-xs leading-relaxed">{evt.description}</p>
                </div>
              </div>

              <!-- Feature tags -->
              <div class="flex flex-wrap gap-2 mt-auto pt-2">
                {#each evt.tags as tag}
                  <span class="font-mono text-[9px] px-2 py-1 rounded-full border {colorMap[evt.color]?.badge || colorMap.gold.badge} uppercase tracking-wider">
                    {tag}
                  </span>
                {/each}
              </div>
            </div>
          </GlowCard>
        </div>
      {/each}
    </div>

    <!-- Floating sprites row (decorative, desktop only) -->
    <div class="hidden lg:flex justify-around items-center mb-12 pointer-events-none select-none" aria-hidden="true">
      <img src="/assets/sprites/mew-sprite.png" alt=""
        class="pixel w-20 h-20 opacity-45 animate-float"
        style="image-rendering:pixelated; animation-delay:0s; filter: drop-shadow(0 0 6px rgba(255,182,193,0.5));"
      />
      <img src="/assets/sprites/lugia-sprite.png" alt=""
        class="pixel w-28 h-28 opacity-35 animate-float-slow"
        style="image-rendering:pixelated; animation-delay:1s; filter: drop-shadow(0 0 8px rgba(139,92,246,0.5));"
      />
      <img src="/assets/sprites/umbreon-shiny.png" alt=""
        class="pixel w-24 h-24 opacity-50 animate-float"
        style="image-rendering:pixelated; animation-delay:0.5s; filter: drop-shadow(0 0 10px rgba(59,158,255,0.7));"
      />
      <img src="/assets/sprites/mew-sprite.png" alt=""
        class="pixel w-16 h-16 opacity-35 animate-float-slow"
        style="image-rendering:pixelated; animation-delay:2s; filter: drop-shadow(0 0 5px rgba(255,182,193,0.4)); transform: scaleX(-1);"
      />
    </div>

    <!-- Upcoming events list -->
    <div use:scrollReveal={{ delay: 200 }}>
      <GlowCard color="default" padding="p-0">
        <div class="px-6 py-4 border-b border-white/[0.06] flex items-center justify-between">
          <div class="flex items-center gap-2">
            <span class="w-1.5 h-1.5 rounded-full bg-yellow-400 animate-pulse"></span>
            <span class="font-mono text-[10px] text-white/40 uppercase tracking-[0.35em]">Upcoming Events</span>
          </div>
          <a href="#" class="font-mono text-[9px] text-yellow-400/60 hover:text-yellow-400 transition-colors uppercase tracking-wider">
            View All →
          </a>
        </div>

        <div class="divide-y divide-white/[0.04]">
          {#each upcomingEvents as evt}
            <div class="flex items-center gap-4 px-6 py-4 hover:bg-white/[0.02] transition-colors group">
              <span class="font-mono text-[9px] text-yellow-400/60 w-16 flex-shrink-0">{evt.date}</span>
              <span class="font-body text-sm text-white/70 group-hover:text-white/90 transition-colors flex-1">{evt.title}</span>
              <span class="font-mono text-[9px] text-white/30 hidden sm:block">{evt.type}</span>
              <span class="font-mono text-[9px] px-2.5 py-1 rounded-full border {statusStyle[evt.status] || statusStyle.soon} uppercase tracking-wider flex-shrink-0">
                {evt.status}
              </span>
            </div>
          {/each}
        </div>

        <div class="px-6 py-4 border-t border-white/[0.06] flex justify-center">
          <a href="#pvp" class="btn-primary text-[9px] py-2.5">Join a Discord Event ►</a>
        </div>
      </GlowCard>
    </div>

  </div>
</section>