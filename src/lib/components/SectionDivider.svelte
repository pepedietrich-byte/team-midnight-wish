<script>
  /** Flip vertically for bottom-of-section use */
  export let flip = false;
</script>

<div
  class="relative w-full h-12 overflow-hidden pointer-events-none select-none"
  class:scale-y-[-1]={flip}
  aria-hidden="true"
>
  <!-- Rings GIF strip at very low opacity -->
  <img
    src="/assets/mascot/umbreon-rings.gif"
    alt=""
    class="absolute inset-0 w-full h-full object-cover opacity-[0.07]"
    style="mix-blend-mode: screen;"
  />
  <!-- Gold shimmer line -->
  <div class="absolute top-1/2 left-0 right-0 h-px -translate-y-1/2"
    style="background: linear-gradient(90deg, transparent 0%, rgba(247,216,75,0.25) 30%, rgba(247,216,75,0.5) 50%, rgba(247,216,75,0.25) 70%, transparent 100%);"
  ></div>
  <!-- Top/bottom fades -->
  <div class="absolute inset-x-0 top-0    h-6  bg-gradient-to-b  from-midnight to-transparent"></div>
  <div class="absolute inset-x-0 bottom-0 h-6  bg-gradient-to-t  from-midnight to-transparent"></div>
</div>