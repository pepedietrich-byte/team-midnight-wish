<script lang="ts">
  import { scrollReveal, staggerReveal } from '$lib/utils/animate.js';
  import { upcomingEvents, eventTypes }  from '$lib/data/events.js';

  const statusStyle: Record<string, string> = {
    open:   'color:#34d399; background:rgba(16,185,129,0.1);  border-color:rgba(16,185,129,0.25)',
    soon:   'color:#fbbf24; background:rgba(251,191,36,0.1);  border-color:rgba(251,191,36,0.25)',
    closed: 'color:#94a3b8; background:rgba(148,163,184,0.08); border-color:rgba(148,163,184,0.15)'
  };
</script>

<section id="events" class="relative py-28 px-6">
  <div class="max-w-6xl mx-auto">

    <!-- Header -->
    <div use:scrollReveal class="mb-16">
      <p class="section-label">Guild Events</p>
      <h2 class="text-section font-display font-black text-white mb-3">
        Something is always<br />
        <span class="gradient-text">happening.</span>
      </h2>
    </div>

    <!-- Event type cards -->
    <div
      use:staggerReveal={{ delay: 0, step: 70 }}
      class="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-20"
    >
      {#each eventTypes as et}
        <div class="card-glass p-6 transition-all duration-300 hover:-translate-y-1 group">
          <div class="text-3xl mb-4">{et.icon}</div>
          <span
            class="inline-block text-xs font-semibold px-2 py-0.5 rounded-full mb-3"
            style="background:rgba(124,58,237,0.15); color:#a78bfa; border:1px solid rgba(139,92,246,0.2); font-size:0.6rem;"
          >{et.tag}</span>
          <h3 class="font-display font-bold text-white text-base mb-2 group-hover:text-purple-300 transition-colors">
            {et.title}
          </h3>
          <p class="text-sm text-slate-500 leading-relaxed">{et.desc}</p>
        </div>
      {/each}
    </div>

    <!-- Upcoming events list -->
    <div use:scrollReveal>
      <div class="flex items-center justify-between mb-6">
        <h3 class="font-display font-bold text-white text-xl">Upcoming Events</h3>
        <a
          href="https://discord.gg/tKBbRZqG"
          target="_blank"
          rel="noreferrer"
          class="text-xs text-purple-500 hover:text-purple-300 transition-colors tracking-wide"
        >View all on Discord →</a>
      </div>

      <div class="divide-y" style="border-color: rgba(139,92,246,0.1);">
        {#each upcomingEvents as event}
          <div class="flex items-center gap-6 py-5 px-3 -mx-3 group hover:bg-white/[0.02] rounded-lg transition-colors cursor-default">

            <div class="w-16 text-center flex-shrink-0">
              <p class="font-pixel text-purple-600 leading-relaxed" style="font-size:0.55rem;">{event.date}</p>
            </div>

            <div class="flex-1 min-w-0">
              <p class="font-semibold text-white text-sm group-hover:text-purple-200 transition-colors truncate">{event.title}</p>
              <p class="text-xs text-slate-600 mt-0.5">{event.type}</p>
            </div>

            <span
              class="text-xs font-semibold px-3 py-1 rounded-full border flex-shrink-0"
              style="font-size:0.65rem; {statusStyle[event.status] ?? statusStyle.closed}"
            >{event.status}</span>

          </div>
        {/each}
      </div>

      <div class="mt-8">
        <a
          href="https://discord.gg/tKBbRZqG"
          target="_blank"
          rel="noreferrer"
          class="btn-outline text-sm"
        >Join a Discord Event ►</a>
      </div>
    </div>

  </div>
</section>