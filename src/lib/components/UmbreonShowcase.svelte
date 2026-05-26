<script>
  import { scrollReveal } from '$lib/utils/animate.js';
  import StarField        from './StarField.svelte';

  const stats = [
    { label: 'Type',       value: 'Dark'       },
    { label: 'Gen',        value: 'II'          },
    { label: 'Evolution',  value: 'Moonlight'   },
    { label: 'Base HP',    value: '95'          },
    { label: 'Base Def',   value: '110'         },
    { label: 'Sp. Def',    value: '130'         },
  ];
</script>

<section id="showcase" class="relative overflow-hidden py-0" style="background:#060a16;">

  <!-- ── Full-bleed rings GIF background ───────────────────────── -->
  <div class="absolute inset-0 z-0" aria-hidden="true">
    <img
      src="/assets/mascot/umbreon-rings.gif"
      alt=""
      class="w-full h-full object-cover opacity-[0.28]"
      style="mix-blend-mode: screen;"
    />
  </div>

  <!-- ── Eye GIF — left side, very subtle ──────────────────────── -->
  <div class="absolute left-0 top-0 bottom-0 w-[40rem] z-0 hidden md:block" aria-hidden="true">
    <img
      src="/assets/mascot/umbreon-eye.gif"
      alt=""
      class="w-full h-full object-cover opacity-[0.12]"
      style="mix-blend-mode: screen; object-position: right center;"
    />
  </div>

  <!-- ── Dark overlay for readability ─────────────────────────── -->
  <div class="absolute inset-0 z-[1]"
    style="background: linear-gradient(to right, rgba(6,10,22,0.88) 0%, rgba(6,10,22,0.5) 50%, rgba(6,10,22,0.3) 100%);"
  ></div>

  <!-- Stars -->
  <StarField count={45} goldRatio={0.12} className="z-[2]" />

  <!-- Gold nebula top-center -->
  <div class="absolute top-0 inset-x-0 h-1/2 z-[2] pointer-events-none"
    style="background: radial-gradient(ellipse 50% 40% at 50% 0%, rgba(247,216,75,0.06) 0%, transparent 60%);"
  ></div>

  <!-- ── Content ──────────────────────────────────────────────── -->
  <div class="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">

      <!-- LEFT: Info ─────────────────────────────────────────────── -->
      <div class="flex flex-col gap-8" use:scrollReveal>

        <div>
          <p class="section-label mb-3">Team Mascot</p>
          <h2 class="font-display text-xs sm:text-sm md:text-base leading-loose">
            <span class="text-white">Umbreon —</span><br/>
            <span style="color:#f7d84b; text-shadow: 0 0 20px rgba(247,216,75,0.4);">The Moonlight</span><br/>
            <span class="text-white">Pokémon</span>
          </h2>
        </div>

        <p class="text-white/50 text-sm sm:text-base leading-relaxed max-w-lg font-light">
          When the moon rises, Umbreon's golden rings begin to glow — a beacon
          in the darkness. Patient, loyal, and nearly indestructible in battle,
          Umbreon is the perfect symbol for what we stand for as a guild.
        </p>

        <!-- Pokédex-style stat grid -->
        <div class="grid grid-cols-2 sm:grid-cols-3 gap-3">
          {#each stats as s, i}
            <div
              class="rounded-xl border border-yellow-400/15 bg-yellow-400/[0.03] px-4 py-3"
              use:scrollReveal={{ delay: 80 + i * 60 }}
            >
              <span class="block font-mono text-yellow-400/50 text-[9px] uppercase tracking-widest mb-1">{s.label}</span>
              <span class="block font-display text-white text-[10px]">{s.value}</span>
            </div>
          {/each}
        </div>

        <!-- Flavour quote -->
        <blockquote class="border-l-2 border-yellow-400/40 pl-4 text-white/38 text-xs italic leading-relaxed">
          "When darkness falls, the rings on Umbreon's body begin to glow,
          striking fear into the hearts of anyone nearby."
          <footer class="mt-2 font-mono text-[9px] text-yellow-400/40 not-italic">— Pokédex, Gold Version</footer>
        </blockquote>

        <a href="#values" class="btn-outline w-fit">Our Values ►</a>
      </div>

      <!-- RIGHT: Cosmic image (re-used, different treatment) ─────── -->
      <div
        class="relative flex justify-center lg:justify-end"
        use:scrollReveal={{ delay: 200, direction: 'left' }}
      >
        <!-- Halo ring glow -->
        <div class="absolute -inset-8 rounded-full pointer-events-none"
          style="background: radial-gradient(ellipse, rgba(247,216,75,0.1) 0%, transparent 60%);"></div>

        <div class="relative w-full max-w-[340px] lg:max-w-[400px]">
          <!-- Subtle border -->
          <div class="absolute -inset-[1px] rounded-[2rem] opacity-50"
            style="background: linear-gradient(160deg, rgba(247,216,75,0.4), rgba(139,92,246,0.15), transparent);"
          ></div>

          <div class="relative rounded-[2rem] overflow-hidden"
            style="box-shadow: 0 0 80px rgba(247,216,75,0.12), 0 0 160px rgba(80,30,160,0.15);"
          >
            <img
              src="/assets/sprites/mew-sprite.png"
              alt="Mew sprite"
              class="w-full h-full"
              style="min-height:460px; object-fit: contain; object-position: center center;"
              loading="lazy"
            />
            <!-- Bottom fade -->
            <div class="absolute bottom-0 inset-x-0 h-32 pointer-events-none"
              style="background: linear-gradient(to top, rgba(6,10,22,0.7), transparent);"
            ></div>
          </div>

          <!-- Floating ring sprites on the sides -->
          <div
            class="absolute -right-6 top-[20%] w-14 h-14 hidden lg:block"
            aria-hidden="true"
          >
            <img
              src="/assets/sprites/umbreon-sprite.png"
              alt=""
              class="pixel w-full h-full object-contain animate-float"
              style="image-rendering:pixelated; mix-blend-mode:screen; filter:drop-shadow(0 0 8px rgba(247,216,75,0.8)); animation-delay:1s;"
            />
          </div>
        </div>
      </div>

    </div>
  </div>
</section>