<script>
  /** color: 'gold' | 'blue' | 'purple' | 'default' */
  export let color   = 'default';
  export let hover   = true;
  export let padding = 'p-6';
  export let className = '';

  const map = {
    gold:    { base: 'border-yellow-400/15 bg-yellow-400/[0.03]', h: 'hover:border-yellow-400/40 hover:shadow-[0_0_30px_rgba(247,216,75,0.12)]' },
    blue:    { base: 'border-blue-400/15   bg-blue-400/[0.03]',   h: 'hover:border-blue-400/40   hover:shadow-[0_0_30px_rgba(59,158,255,0.12)]' },
    purple:  { base: 'border-purple-400/15 bg-purple-400/[0.03]', h: 'hover:border-purple-400/40 hover:shadow-[0_0_30px_rgba(139,92,246,0.12)]' },
    default: { base: 'border-white/8       bg-white/[0.03]',      h: 'hover:border-white/15      hover:shadow-[0_0_20px_rgba(255,255,255,0.05)]' },
  };

  $: c = map[color] ?? map.default;
</script>

<div
  class="
    relative rounded-2xl backdrop-blur-md border overflow-hidden
    transition-all duration-300
    {c.base}
    {hover ? c.h : ''}
    {padding}
    {className}
  "
>
  <slot />
</div>