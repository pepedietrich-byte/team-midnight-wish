<script>
  import { onMount } from 'svelte';
  import { menuOpen, activeSection } from '$lib/stores/navigation.js';

  let scrolled = false;

  const links = [
    { label: 'About',  href: '#about'    },
    { label: 'Events', href: '#events'   },
    { label: 'Mascot', href: '#showcase' },
    { label: 'Values', href: '#values'   },
    { label: 'PvP',    href: '#pvp'      },
  ];

  onMount(() => {
    const onScroll = () => { scrolled = window.scrollY > 56; };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  });

  function close() { menuOpen.set(false); }
</script>

<!-- ── Navbar ──────────────────────────────────────────────────── -->
<nav
  class="
    fixed top-0 inset-x-0 z-50
    transition-all duration-500
    {scrolled
      ? 'bg-midnight-2/85 backdrop-blur-xl border-b border-yellow-400/[0.08] shadow-[0_4px_40px_rgba(0,0,0,0.7)]'
      : 'bg-transparent'}
  "
>
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16 md:h-[72px]">

    <!-- Logo -->
    <a href="/" class="flex items-center gap-3 select-none group" on:click={close}>
      <div class="relative w-9 h-9 flex-shrink-0">
        <img
          src="/assets/sprites/umbreon-sprite.png"
          alt="Umbreon"
          class="w-full h-full pixel object-contain animate-float group-hover:glow-gold transition-all"
          style="image-rendering: pixelated; mix-blend-mode: screen; filter: drop-shadow(0 0 6px rgba(247,216,75,0.6));"
        />
      </div>
      <div class="flex flex-col leading-tight">
        <span class="font-display text-[7px] text-yellow-400/60 tracking-[0.45em]">TEAM</span>
        <span class="font-display text-[9px] text-gold-gradient tracking-wider"
          style="background: linear-gradient(90deg,#f7d84b,#ffe87a,#f7d84b); -webkit-background-clip:text; -webkit-text-fill-color:transparent;"
        >MIDNIGHT WISH</span>
      </div>
    </a>

    <!-- Desktop links -->
    <div class="hidden md:flex items-center gap-7">
      {#each links as { label, href }}
        <a
          {href}
          class="
            font-mono text-[10px] uppercase tracking-[0.3em]
            text-white/50 hover:text-yellow-400
            transition-colors duration-200
            hover:drop-shadow-[0_0_8px_rgba(247,216,75,0.7)]
          "
        >{label}</a>
      {/each}
    </div>

    <!-- Desktop CTA -->
    <a href="#pvp" class="hidden md:inline-flex btn-outline py-2 px-4 text-[9px]">
      Join Us ►
    </a>

    <!-- Hamburger -->
    <button
      class="md:hidden flex flex-col justify-center gap-[5px] w-8 h-8 p-1"
      on:click={() => menuOpen.update(v => !v)}
      aria-label="Toggle menu"
    >
      {#each [0, 1, 2] as i}
        <span
          class="block h-[2px] bg-yellow-400 rounded-full transition-all duration-300 origin-center"
          class:w-6={true}
          style="
            transform: {$menuOpen
              ? i === 0 ? 'rotate(45deg) translateY(7px)'
              : i === 1 ? 'scaleX(0)'
              : 'rotate(-45deg) translateY(-7px)'
              : 'none'
            };
            opacity: {$menuOpen && i === 1 ? 0 : 1};
          "
        ></span>
      {/each}
    </button>
  </div>

  <!-- Mobile drawer -->
  {#if $menuOpen}
    <div class="md:hidden bg-midnight-2/95 backdrop-blur-2xl border-b border-yellow-400/10 px-5 py-5">
      <div class="flex flex-col gap-1">
        {#each links as { label, href }}
          <a
            {href}
            class="py-3 px-2 font-mono text-xs uppercase tracking-widest text-white/60
                   hover:text-yellow-400 border-b border-white/[0.05] transition-colors"
            on:click={close}
          >{label}</a>
        {/each}
        <a href="#pvp" class="btn-primary mt-4 text-[9px]" on:click={close}>Join Team ►</a>
      </div>
    </div>
  {/if}
</nav>