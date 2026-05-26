<script lang="ts">
  import { mobileMenuOpen } from '$lib/stores/navigation.js';

  const links = [
    { href: '#about',  label: 'About'  },
    { href: '#events', label: 'Events' },
    { href: '#mascot', label: 'Mascot' },
    { href: '#pvp',    label: 'PvP'    }
  ];

  const toggle = () => mobileMenuOpen.update((v) => !v);
  const close  = () => mobileMenuOpen.set(false);
</script>

<nav
  class="fixed top-0 left-0 right-0 z-50"
  style="background: rgba(7,3,26,0.85); backdrop-filter: blur(16px); border-bottom: 1px solid rgba(139,92,246,0.15);"
>
  <div class="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">

    <!-- Logo -->
    <a href="#home" class="flex items-center gap-2 group">
      <span class="font-pixel text-purple-500 group-hover:text-purple-300 transition-colors"
            style="font-size: 0.55rem; letter-spacing: 0.2em;">
        ✦ TMW
      </span>
    </a>

    <!-- Desktop links -->
    <div class="hidden md:flex items-center gap-8">
      {#each links as link}
        <a
          href={link.href}
          class="text-sm text-slate-400 hover:text-white transition-colors duration-200 font-medium tracking-wide"
        >{link.label}</a>
      {/each}
    </div>

    <!-- Discord CTA -->
    <a
      href="https://discord.gg/tKBbRZqG"
      target="_blank"
      rel="noreferrer"
      class="hidden md:inline-flex items-center gap-2 text-sm font-semibold px-5 py-2 rounded-full transition-all duration-200"
      style="background: rgba(124,58,237,0.25); border: 1px solid rgba(139,92,246,0.4); color: #c4b5fd;"
    >
      <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03z"/>
      </svg>
      Join Discord
    </a>

    <!-- Mobile hamburger -->
    <button
      on:click={toggle}
      class="md:hidden p-2 text-slate-400 hover:text-white transition-colors"
      aria-label="Toggle menu"
    >
      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>
      </svg>
    </button>
  </div>

  <!-- Mobile menu -->
  {#if $mobileMenuOpen}
    <div
      class="md:hidden px-6 pb-5 pt-2 border-t"
      style="border-color: rgba(139,92,246,0.1);"
    >
      {#each links as link}
        <a
          href={link.href}
          on:click={close}
          class="block py-3 text-sm text-slate-400 hover:text-purple-300 transition-colors border-b"
          style="border-color: rgba(139,92,246,0.08);"
        >{link.label}</a>
      {/each}
      <a
        href="https://discord.gg/tKBbRZqG"
        target="_blank"
        rel="noreferrer"
        class="block mt-4 text-center text-sm font-semibold py-3 rounded-full"
        style="background: rgba(124,58,237,0.3); border: 1px solid rgba(139,92,246,0.4); color: #c4b5fd;"
      >Join Discord</a>
    </div>
  {/if}
</nav>