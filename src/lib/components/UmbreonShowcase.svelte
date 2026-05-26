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
          <img
            src="/assets/sprites/umbreon-shiny.png"
            alt="Shiny Umbreon mascot"
            class="w-48 h-48 object-contain"
            loading="lazy"
          />
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