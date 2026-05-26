<script>
  export let src;
  export let alt         = '';
  export let size        = 'md';   // sm | md | lg | xl | '2xl'
  export let float       = false;
  export let floatDelay  = '0s';
  export let glow        = 'none'; // gold | blue | purple | none
  export let blendScreen = false;  // true for dark-bg sprites (umbreon-sprite)
  export let className   = '';
  export let opacity     = 1;

  const sizes = { sm:'w-10 h-10', md:'w-20 h-20', lg:'w-28 h-28', xl:'w-40 h-40', '2xl':'w-56 h-56' };
  const glows = {
    gold:   'drop-shadow(0 0 10px rgba(247,216,75,0.85))',
    blue:   'drop-shadow(0 0 10px rgba(59,158,255,0.85))',
    purple: 'drop-shadow(0 0 10px rgba(139,92,246,0.85))',
    none:   'none',
  };

  $: filterVal  = glows[glow] ?? 'none';
  $: blendStyle = blendScreen ? 'mix-blend-mode: screen;' : '';
  $: sizeClass  = sizes[size] ?? sizes.md;
</script>

<img
  {src}
  alt={alt || undefined}
  aria-hidden={!alt || undefined}
  class="
    pixel object-contain select-none
    {sizeClass}
    {float ? 'animate-float' : ''}
    {className}
  "
  style="
    image-rendering: pixelated;
    filter: {filterVal};
    opacity: {opacity};
    {blendStyle}
    animation-delay: {floatDelay};
  "
/>