<script lang="ts">
  const links = [
    { href: '#about',  label: 'About'  },
    { href: '#events', label: 'Events' },
    { href: '#mascot', label: 'Mascot' },
    { href: '#pvp',    label: 'PvP'    }
  ];
</script>

<footer
  class="relative py-16 px-6 border-t"
  style="border-color: rgba(139,92,246,0.12);"
>
  <div class="max-w-5xl mx-auto">

    <div class="grid md:grid-cols-3 gap-10 mb-12">

      <!-- Brand -->
      <div>
        <p class="font-pixel text-purple-500 tracking-widest glow-purple mb-3" style="font-size:0.6rem;">
          ✦ TEAM MIDNIGHT WISH
        </p>
        <p class="text-sm text-slate-600 leading-relaxed">
          PokeMMO Guild · Est. Gen II<br />
          Drama-free. Always active.
        </p>
      </div>

      <!-- Nav -->
      <div>
        <p class="text-xs font-semibold text-slate-700 uppercase tracking-widest mb-4">Navigation</p>
        <div class="space-y-2">
          {#each links as link}
            <a
              href={link.href}
              class="block text-sm text-slate-600 hover:text-purple-400 transition-colors"
            >{link.label}</a>
          {/each}
        </div>
      </div>

      <!-- Discord CTA -->
      <div>
        <p class="text-xs font-semibold text-slate-700 uppercase tracking-widest mb-4">Join Us</p>
        <p class="text-sm text-slate-600 mb-5">
          Find us on Discord. That's where everything happens.
        </p>
        <a
          href="https://discord.gg/tKBbRZqG"
          target="_blank"
          rel="noreferrer"
          class="btn-gold text-sm"
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03z"/>
          </svg>
          Join Discord ↗
        </a>
      </div>

    </div>

    <!-- Bottom bar -->
    <div
      class="border-t pt-8 flex flex-col sm:flex-row items-center justify-between gap-3"
      style="border-color: rgba(139,92,246,0.08);"
    >
      <p class="text-xs text-slate-800">
        © 2026 Team Midnight Wish · Fan-made · Pokémon © Nintendo / Game Freak
      </p>
      <p class="font-pixel text-purple-900" style="font-size:0.45rem;">Built with ♥ and moonlight</p>
    </div>

  </div>
</footer>