<script>
  import StarField from './StarField.svelte';

  const year = new Date().getFullYear();

  const navLinks = [
    { label: 'About',   href: '#about'    },
    { label: 'Events',  href: '#events'   },
    { label: 'Mascot',  href: '#showcase' },
    { label: 'Values',  href: '#values'   },
    { label: 'PvP',     href: '#pvp'      },
  ];

  const socials = [
    { label: 'Discord', href: 'https://discord.gg/', icon: '💬' },
    { label: 'Twitter', href: 'https://twitter.com/', icon: '🐦' },
    { label: 'Reddit',  href: 'https://reddit.com/',  icon: '🔴' },
  ];
</script>

<footer class="relative overflow-hidden bg-midnight border-t border-white/[0.04]">
  <StarField count={25} goldRatio={0.1} />

  <!-- Rings GIF strip at very top of footer -->
  <div class="absolute top-0 inset-x-0 h-16 pointer-events-none z-0" aria-hidden="true">
    <img
      src="/assets/mascot/umbreon-rings.gif"
      alt=""
      class="w-full h-full object-cover opacity-[0.08]"
      style="mix-blend-mode: screen;"
    />
    <div class="absolute inset-0" style="background: linear-gradient(to bottom, transparent 0%, #050810 100%);"></div>
  </div>

  <!-- Main footer content -->
  <div class="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
    <div class="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">

      <!-- Brand column -->
      <div class="flex flex-col gap-5">
        <div class="flex items-center gap-3">
          <img
            src="/assets/sprites/umbreon-sprite.png"
            alt="Umbreon"
            class="pixel w-10 h-10 object-contain"
            style="image-rendering:pixelated; mix-blend-mode:screen; filter:drop-shadow(0 0 8px rgba(247,216,75,0.7));"
          />
          <div class="flex flex-col">
            <span class="font-display text-[7px] text-yellow-400/50 tracking-[0.45em]">TEAM</span>
            <span class="font-display text-[9px]"
              style="color:#f7d84b; text-shadow:0 0 10px rgba(247,216,75,0.4);"
            >MIDNIGHT WISH</span>
          </div>
        </div>

        <p class="text-white/38 text-xs sm:text-sm leading-relaxed max-w-xs">
          An elite Pokémon MMO guild. We hunt, battle, and explore — bonded by
          darkness and the glow of Umbreon's rings.
        </p>

        <!-- Socials -->
        <div class="flex items-center gap-4">
          {#each socials as s}
            <a
              href={s.href}
              target="_blank"
              rel="noreferrer noopener"
              class="w-9 h-9 rounded-lg bg-white/[0.04] border border-white/[0.07] flex items-center justify-center
                     hover:bg-yellow-400/10 hover:border-yellow-400/30 transition-all duration-200 text-sm"
              aria-label={s.label}
            >{s.icon}</a>
          {/each}
        </div>
      </div>

      <!-- Nav links column -->
      <div class="flex flex-col gap-3">
        <p class="font-mono text-[9px] text-white/30 uppercase tracking-[0.4em] mb-1">Navigation</p>
        {#each navLinks as link}
          <a
            href={link.href}
            class="font-mono text-xs text-white/45 hover:text-yellow-400 transition-colors duration-200 w-fit uppercase tracking-wider"
          >{link.label}</a>
        {/each}
      </div>

      <!-- Eeveelutions mini group column -->
      <div class="flex flex-col gap-4">
        <p class="font-mono text-[9px] text-white/30 uppercase tracking-[0.4em] mb-1">The Team</p>
        <div class="relative w-full max-w-[200px] rounded-2xl overflow-hidden border border-white/[0.06]"
          style="background: rgba(10,14,26,0.8);"
        >
          <img
            src="/assets/mascot/eeveelutions-group.png"
            alt="All Eeveelutions — the spirit of Team Midnight Wish"
            class="pixel w-full object-contain p-3"
            style="image-rendering: pixelated;"
          />
        </div>
        <p class="font-mono text-[9px] text-white/25 italic leading-relaxed max-w-[200px]">
          Every evolution, every trainer — welcome.
        </p>
      </div>
    </div>

    <!-- Divider -->
    <div class="h-px w-full mb-8"
      style="background: linear-gradient(90deg, transparent, rgba(247,216,75,0.2), transparent);"
    ></div>

    <!-- Bottom bar -->
    <div class="flex flex-col sm:flex-row items-center justify-between gap-4">
      <p class="font-mono text-[9px] text-white/22 text-center sm:text-left">
        © {year} Team Midnight Wish. Fan-made guild site. Pokémon © Nintendo / Game Freak.
      </p>
      <p class="font-mono text-[9px] text-yellow-400/25 text-center">
        Built with ♥ and moonlight
      </p>
    </div>
  </div>
</footer>