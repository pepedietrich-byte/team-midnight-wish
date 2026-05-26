<script lang="ts">
  import { scrollReveal } from '$lib/utils/animate.js';

  const badges = [
    { icon: '⭐', label: '5×31 IVs'        },
    { icon: '🎒', label: 'Items Included'  },
    { icon: '💪', label: 'EV Trained'      },
    { icon: '⚡', label: 'Moves Ready'     }
  ];

  const steps = [
    { n: '01', text: 'Open a ticket in #pvp-lending on Discord.'   },
    { n: '02', text: 'Browse available Mons — IVs, moves, items.'  },
    { n: '03', text: 'Borrow the team. Battle. Climb the ladder.'  },
    { n: '04', text: 'Return after your session. Leave a rating.'  }
  ];
</script>

<section id="pvp" class="relative py-28 px-6 overflow-hidden">

  <!-- comet-bg.gif background layer -->
  <div class="absolute inset-0 z-0 pointer-events-none select-none hidden md:block" aria-hidden="true">
    <img
      src="/assets/comet-bg.gif"
      alt=""
      class="w-full h-full object-cover"
      style="opacity: 0.18; mix-blend-mode: screen; filter: hue-rotate(-20deg) brightness(0.85);"
      loading="lazy"
    />
  </div>

  <!-- Ambient glow -->
  <div
    class="absolute inset-0 z-0 pointer-events-none"
    aria-hidden="true"
    style="background: radial-gradient(ellipse 65% 50% at 50% 50%, rgba(124,58,237,0.12) 0%, transparent 70%);"
  ></div>

  <div class="relative z-10 max-w-5xl mx-auto">

    <!-- Section header -->
    <div use:scrollReveal class="text-center mb-14">
      <p class="section-label">Service</p>
      <h2 class="text-section font-display font-black text-white">
        PvP Mons<br />
        <span class="gradient-text">Lending</span>
      </h2>
    </div>

    <!-- Premium card -->
    <div use:scrollReveal={{ delay: 80 }}>
      <div
        class="relative rounded-3xl p-8 md:p-12 overflow-hidden animate-glow-pulse"
        style="
          background: rgba(255,255,255,0.025);
          border: 1px solid rgba(139,92,246,0.35);
          box-shadow:
            0 0 0 1px rgba(139,92,246,0.08),
            0 0 50px  rgba(124,58,237,0.18),
            0 0 100px rgba(124,58,237,0.08),
            inset 0 1px 0 rgba(255,255,255,0.04);
          backdrop-filter: blur(12px);
        "
      >
        <!-- Top-edge highlight -->
        <div
          class="absolute top-0 left-10 right-10 h-px pointer-events-none"
          aria-hidden="true"
          style="background: linear-gradient(90deg, transparent, rgba(139,92,246,0.5), transparent);"
        ></div>

        <!-- Mew — floating foreground, white bg dissolved by radial vignette -->
        <div
          class="absolute bottom-0 right-8 lg:right-16 pointer-events-none select-none hidden lg:block animate-float"
          style="width: 140px; z-index: 30; bottom: -30px;"
          aria-hidden="true"
        >
          <div style="position: relative;">
            <img
              src="/assets/mew-sprite.png"
              alt=""
              style="width: 140px; image-rendering: pixelated; opacity: 0.88; display: block;"
              loading="lazy"
            />
            <!-- Radial vignette dissolves white bg -->
            <div style="
              position: absolute;
              inset: -16px;
              background: radial-gradient(
                circle at 50% 52%,
                transparent                  28%,
                rgba(7,3,26,0.88)            58%,
                rgba(7,3,26,0.99)            74%
              );
              pointer-events: none;
            "></div>
          </div>
        </div>

        <!-- Card content -->
        <div class="relative z-40 max-w-xl">

          <span
            class="inline-block font-semibold tracking-widest px-3 py-1 rounded-full mb-6"
            style="font-size:0.6rem; background:rgba(251,191,36,0.12); color:#fbbf24; border:1px solid rgba(251,191,36,0.25);"
          >PVP SERVICE</span>

          <h3
            class="font-display font-black text-white mb-4"
            style="font-size: clamp(1.6rem, 4vw, 2.4rem); line-height: 1.1;"
          >
            Battle-ready Pokémon.<br />Borrow a team.
          </h3>

          <p class="text-slate-300 text-base leading-relaxed mb-8">
            5×31 IVs, full movesets, items, EV spreads — all ready.
            No cost. No stress. Just climb the ladder.
          </p>

          <!-- Feature badges -->
          <div class="flex flex-wrap gap-2 mb-10">
            {#each badges as b}
              <span
                class="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-semibold"
                style="background:rgba(251,191,36,0.08); border:1px solid rgba(251,191,36,0.22); color:#fcd34d;"
              >
                {b.icon} {b.label}
              </span>
            {/each}
          </div>

          <a
            href="https://discord.gg/tKBbRZqG"
            target="_blank"
            rel="noreferrer"
            class="btn-gold text-base"
          >⚔ Open a Ticket</a>

        </div>
      </div>
    </div>

    <!-- How it works -->
    <div use:scrollReveal={{ delay: 160 }} class="mt-16">
      <h3 class="text-center text-sm font-semibold text-slate-600 uppercase tracking-widest mb-8">How It Works</h3>
      <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {#each steps as step, i}
          <div class="card-glass p-5 relative" style="border-color: rgba(139,92,246,0.15);">
            <p class="font-pixel mb-4 leading-none" style="font-size:0.5rem; color:rgba(124,58,237,0.5);">{step.n}</p>
            <p class="text-sm text-slate-400 leading-relaxed">{step.text}</p>
            {#if i < steps.length - 1}
              <div
                class="hidden lg:block absolute top-1/2 -right-2 w-4 h-px"
                style="background: rgba(139,92,246,0.3);"
                aria-hidden="true"
              ></div>
            {/if}
          </div>
        {/each}
      </div>
    </div>

  </div>
</section>