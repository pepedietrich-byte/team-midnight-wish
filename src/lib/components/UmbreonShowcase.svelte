<script lang="ts">
  import { scrollReveal, staggerReveal } from '$lib/utils/animate.js';

  const stats = [
    { label: 'Type',   value: 'Dark'      },
    { label: 'Gen',    value: 'II'        },
    { label: 'Evolve', value: 'Moonlight' },
    { label: 'HP',     value: '95'        },
    { label: 'DEF',    value: '110'       },
    { label: 'SP.DEF', value: '130'       }
  ];
</script>

<section id="mascot" class="relative py-28 px-6 overflow-hidden">

  <!-- comet-bg.gif — mix-blend-mode: screen makes black transparent -->
  <div class="absolute inset-0 z-0 pointer-events-none select-none hidden md:block" aria-hidden="true">
    <img
      src="/assets/comet-bg.gif"
      alt=""
      class="w-full h-full object-cover"
      style="opacity: 0.22; mix-blend-mode: screen; filter: hue-rotate(10deg);"
      loading="lazy"
    />
  </div>

  <!-- Ambient glow -->
  <div
    class="absolute inset-0 z-0 pointer-events-none"
    aria-hidden="true"
    style="background: radial-gradient(ellipse 70% 60% at 50% 50%, rgba(124,58,237,0.1) 0%, transparent 70%);"
  ></div>

  <div class="relative z-10 max-w-6xl mx-auto">
    <div class="grid md:grid-cols-2 gap-16 items-center">

      <!-- SVG Umbreon -->
      <div use:scrollReveal class="flex justify-center order-2 md:order-1">
        <div
          class="relative w-72 h-72 flex items-center justify-center rounded-full animate-float"
          style="
            background: radial-gradient(circle at 50% 55%, rgba(124,58,237,0.25) 0%, rgba(7,3,26,0.9) 65%);
            border: 1px solid rgba(139,92,246,0.3);
            box-shadow:
              0 0 60px  rgba(124,58,237,0.25),
              0 0 120px rgba(124,58,237,0.1),
              inset 0 0 40px rgba(7,3,26,0.8);
          "
        >
          <svg viewBox="0 0 100 100" class="w-48 h-48" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <!-- Body -->
            <ellipse cx="50" cy="63" rx="27" ry="20" fill="#0e0720"/>
            <circle  cx="50" cy="38" r="20"           fill="#0e0720"/>
            <!-- Rings -->
            <ellipse cx="50" cy="57" rx="14" ry="3.5" fill="none" stroke="#fbbf24" stroke-width="2.2" opacity="0.9"/>
            <ellipse cx="50" cy="68" rx="10" ry="2"   fill="none" stroke="#fbbf24" stroke-width="1.6" opacity="0.7"/>
            <!-- Ears -->
            <polygon points="33,23 26,5 38,18" fill="#0e0720"/>
            <polygon points="67,23 74,5 62,18" fill="#0e0720"/>
            <circle cx="33" cy="17" r="2.8" fill="#fbbf24" opacity="0.9"/>
            <circle cx="67" cy="17" r="2.8" fill="#fbbf24" opacity="0.9"/>
            <!-- Eyes -->
            <circle cx="42" cy="36" r="5"   fill="#cc1133"/>
            <circle cx="58" cy="36" r="5"   fill="#cc1133"/>
            <circle cx="42" cy="36" r="2.2" fill="#0e0720"/>
            <circle cx="58" cy="36" r="2.2" fill="#0e0720"/>
            <!-- Forehead dot -->
            <circle cx="50" cy="26" r="4" fill="#fbbf24" opacity="0.85"/>
            <!-- Legs -->
            <rect x="33" y="79" width="10" height="14" rx="5" fill="#0e0720"/>
            <rect x="57" y="79" width="10" height="14" rx="5" fill="#0e0720"/>
            <!-- Tail -->
            <path d="M74 65 Q96 52 90 70 Q84 84 74 75" fill="#0e0720" stroke="#fbbf24" stroke-width="1.4" opacity="0.7"/>
          </svg>
          <!-- Outer glow ring -->
          <div
            class="absolute inset-0 rounded-full pointer-events-none animate-glow-pulse"
            style="border: 1px solid rgba(139,92,246,0.25);"
          ></div>
        </div>
      </div>

      <!-- Text -->
      <div class="order-1 md:order-2">

        <div use:scrollReveal>
          <p class="section-label">Team Mascot</p>
          <h2 class="text-section font-display font-black text-white mb-4">
            Umbreon —<br />
            <span class="gradient-text">The Moonlight</span><br />
            Pokémon
          </h2>
        </div>

        <div use:scrollReveal={{ delay: 80 }}>
          <p class="text-slate-300 text-base leading-relaxed mb-2">
            Patient. Loyal. Built for the long game.
          </p>
          <p class="text-slate-500 text-sm leading-relaxed mb-8">
            That's the energy we bring to every hunt and battle.
          </p>
        </div>

        <!-- Stat grid -->
        <div
          use:staggerReveal={{ delay: 140, step: 50 }}
          class="grid grid-cols-3 gap-3"
        >
          {#each stats as stat}
            <div
              class="card-glass px-3 py-3 text-center"
              style="border-color: rgba(251,191,36,0.12);"
            >
              <p class="text-slate-600 uppercase tracking-widest mb-1" style="font-size:0.6rem;">{stat.label}</p>
              <p class="font-display font-bold text-yellow-400 text-sm">{stat.value}</p>
            </div>
          {/each}
        </div>

        <!-- Dex quote -->
        <div use:scrollReveal={{ delay: 300 }} class="mt-8">
          <blockquote
            class="text-sm text-slate-600 italic border-l-2 pl-4 leading-relaxed"
            style="border-color: rgba(251,191,36,0.3);"
          >
            "When darkness falls, the rings on Umbreon's body begin to glow."
            <cite class="not-italic text-slate-700 text-xs mt-1 block">— Pokédex, Gold Version</cite>
          </blockquote>
        </div>

      </div>
    </div>
  </div>
</section>