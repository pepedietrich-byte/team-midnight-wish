<script>
  import { onMount } from 'svelte';
  import StarField   from './StarField.svelte';

  let textReady  = false;
  let imageReady = false;

  onMount(() => {
    setTimeout(() => { textReady  = true; }, 80);
    setTimeout(() => { imageReady = true; }, 400);
  });
</script>

<section id="hero" class="relative min-h-screen flex items-center overflow-hidden" style="background:#050810;">

  <!-- ── Layer 0: Deep space gradient ──────────────────────────── -->
  <div class="absolute inset-0 z-0"
    style="background: radial-gradient(ellipse 80% 80% at 70% 40%, rgba(60,20,120,0.25) 0%, transparent 60%),
                       radial-gradient(ellipse 60% 60% at 20% 80%, rgba(100,70,10,0.12) 0%, transparent 55%),
                       #050810;"
  ></div>

  <!-- ── Layer 1: Cosmic background (atmospheric, screen blend) ─── -->
  <div class="absolute inset-0 z-[1]" aria-hidden="true">
    <img
      src="/assets/mascot/umbreon-cosmic.jpg"
      alt=""
      class="w-full h-full object-cover opacity-[0.18]"
      style="mix-blend-mode: screen;"
    />
  </div>

  <!-- ── Layer 2: Eye GIF (barely visible, bottom-right) ────────── -->
  <div class="absolute bottom-0 right-0 w-[36rem] h-[36rem] z-[1] hidden xl:block" aria-hidden="true">
    <img
      src="/assets/mascot/umbreon-eye.gif"
      alt=""
      class="w-full h-full object-cover opacity-[0.045]"
      style="mix-blend-mode: screen; object-position: center;"
    />
  </div>

  <!-- ── Stars ──────────────────────────────────────────────────── -->
  <StarField count={65} goldRatio={0.09} className="z-[2]" />

  <!-- ── Content grid ───────────────────────────────────────────── -->
  <div class="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-24 pb-20">
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-8 items-center min-h-[82vh]">

      <!-- LEFT: Copy ─────────────────────────────────────────────── -->
      <div
        class="flex flex-col gap-7 transition-all duration-1000 ease-out"
        style="opacity:{textReady?1:0}; transform:{textReady?'none':'translateY(38px)'};"
      >
        <!-- Live badge -->
        <div class="flex items-center gap-2.5 w-fit">
          <span class="relative flex h-2 w-2">
            <span class="animate-ping absolute inset-0 rounded-full bg-yellow-400 opacity-70"></span>
            <span class="relative rounded-full h-2 w-2 bg-yellow-400"></span>
          </span>
          <span class="font-mono text-[10px] text-yellow-400/65 uppercase tracking-[0.38em]">Guild Active</span>
        </div>

        <!-- Headline -->
        <div class="flex flex-col">
          <p class="font-mono text-[9px] text-white/30 uppercase tracking-[0.65em] mb-3">Welcome to</p>
          <h1 class="font-display leading-[1.8]">
            <span
              class="block text-[clamp(1.1rem,4vw,2rem)]"
              style="color:#f7d84b; text-shadow: 0 0 28px rgba(247,216,75,0.45), 0 0 56px rgba(247,216,75,0.18);"
            >Team</span>
            <span
              class="block text-[clamp(1.6rem,6vw,3.2rem)] -mt-1"
              style="color:#f7d84b; text-shadow: 0 0 40px rgba(247,216,75,0.5), 0 0 80px rgba(247,216,75,0.2);"
            >Midnight</span>
            <span
              class="block text-[clamp(1.4rem,5vw,2.8rem)] text-white/88 -mt-1"
            >Wish</span>
          </h1>
        </div>

        <!-- Tagline -->
        <p class="text-white/52 text-sm sm:text-base leading-relaxed max-w-[440px] font-light">
          An elite Pokémon MMO guild forged in <span class="text-white/75 font-normal">darkness</span> and
          <span class="text-yellow-400 font-medium">starlight</span>. We hunt shinies,
          battle in PvP, raid legendaries — and we do it
          <span class="text-yellow-400 font-semibold">together</span>.
        </p>

        <!-- Stats row -->
        <div class="flex items-center gap-8">
          {#each [['50+','Members'],['24/7','Active'],['Gen II','Founded']] as [val, label]}
            <div class="flex flex-col gap-1">
              <span class="font-display text-yellow-400 text-sm sm:text-base">{val}</span>
              <span class="font-mono text-white/32 text-[9px] uppercase tracking-widest">{label}</span>
            </div>
            {#if label !== 'Founded'}
              <div class="w-px h-7 bg-white/10"></div>
            {/if}
          {/each}
        </div>

        <!-- CTAs -->
        <div class="flex flex-col sm:flex-row gap-3">
          <a href="#about" class="btn-primary">► Enter the Night</a>
          <a href="#pvp"   class="btn-outline">⚔ PvP Lending</a>
        </div>

        <!-- Scroll hint -->
        <div class="hidden sm:flex items-center gap-3 pt-2">
          <div class="flex flex-col gap-1.5">
            {#each [0, 0.18, 0.36] as d}
              <span class="block w-1 h-1 rounded-full bg-yellow-400/35 animate-bounce" style="animation-delay:{d}s;"></span>
            {/each}
          </div>
          <span class="font-mono text-white/22 text-[9px] uppercase tracking-[0.35em]">Scroll to explore</span>
        </div>
      </div>

      <!-- RIGHT: Cosmic art ──────────────────────────────────────── -->
      <div
        class="relative flex justify-center lg:justify-end transition-all duration-1000 ease-out"
        style="opacity:{imageReady?1:0}; transform:{imageReady?'none':'translateY(24px) scale(0.97)'};"
      >
        <!-- Glow auras behind image -->
        <div class="absolute -inset-10 rounded-full pointer-events-none"
          style="background: radial-gradient(ellipse, rgba(100,40,200,0.18) 0%, transparent 65%);"></div>
        <div class="absolute -inset-6 rounded-3xl pointer-events-none"
          style="background: radial-gradient(ellipse, rgba(247,216,75,0.06) 0%, transparent 60%);"></div>

        <!-- Image container -->
        <div class="relative w-full max-w-[360px] sm:max-w-[420px] lg:max-w-[520px] xl:max-w-[600px]">

          <!-- Gradient border effect -->
          <div class="absolute -inset-[1px] rounded-3xl"
            style="background: linear-gradient(160deg, rgba(247,216,75,0.3), rgba(139,92,246,0.15), rgba(59,158,255,0.15)); blur: 1px;"
          ></div>

          <!-- Main image -->
          <div class="relative rounded-3xl overflow-hidden"
            style="box-shadow: 0 0 70px rgba(80,30,160,0.35), 0 0 140px rgba(40,20,80,0.25);"
          >
            <div class="relative flex items-center justify-center min-h-[520px]">
              <!-- Blue halo -->
              <div class="absolute -inset-10 pointer-events-none rounded-full"
                style="background: radial-gradient(ellipse, rgba(59,158,255,0.12) 0%, transparent 60%);"></div>
              <div class="absolute -inset-4 rounded-full border border-blue-400/20 animate-pulse-blue"></div>
              <div class="absolute -inset-8 rounded-full border border-blue-400/10"
                style="animation: pulse-blue 3s ease-in-out infinite 0.5s;"></div>

              <img
                src="/assets/mascot/eeveelutions-group.png"
                alt="Pixel art group of Eeveelutions — the Eevee family of Team Midnight Wish"
                class="pixel relative z-10 w-full h-auto object-contain"
                style="
                  image-rendering: pixelated;
                  filter: drop-shadow(0 0 20px rgba(59,158,255,0.7)) drop-shadow(0 0 40px rgba(59,158,255,0.3));
                  animation: float 6s ease-in-out infinite;
                "
                loading="eager"
              />
            </div>
            <!-- Left dissolve into dark bg -->
            <div class="absolute inset-0 pointer-events-none"
              style="background: linear-gradient(100deg, #050810 0%, rgba(5,8,16,0.3) 30%, transparent 55%);"
            ></div>
            <!-- Bottom fade -->
            <div class="absolute bottom-0 inset-x-0 h-24 pointer-events-none"
              style="background: linear-gradient(to top, rgba(5,8,16,0.6), transparent);"
            ></div>
          </div>

          <!-- Floating orbital particles -->
          {#each [
            { top:'12%', side:'-right-2', color:'#f7d84b', s:6, d:'0s',   w:'w-2',   h:'h-2'   },
            { top:'32%', side:'-right-4', color:'#f7d84b', s:8, d:'1s',   w:'w-1',   h:'h-1'   },
            { top:'58%', side:'-right-1', color:'#f7d84b', s:5, d:'2s',   w:'w-2.5', h:'h-2.5' },
            { top:'20%', side:'-left-3',  color:'#8b5cf6', s:7, d:'0.5s', w:'w-1.5', h:'h-1.5' },
            { top:'48%', side:'-left-2',  color:'#3b9eff', s:6, d:'1.5s', w:'w-1',   h:'h-1'   },
          ] as p}
            <span
              class="absolute rounded-full {p.w} {p.h} {p.side}"
              style="
                top:{p.top};
                background:{p.color};
                opacity:0.65;
                animation: float {p.s}s ease-in-out infinite {p.d};
                filter: drop-shadow(0 0 4px {p.color});
              "
            ></span>
          {/each}
        </div>
      </div>

    </div>
  </div>

  <!-- Bottom section fade -->
  <div class="absolute bottom-0 inset-x-0 h-28 pointer-events-none z-20"
    style="background: linear-gradient(to top, #050810, transparent);"
  ></div>

</section>