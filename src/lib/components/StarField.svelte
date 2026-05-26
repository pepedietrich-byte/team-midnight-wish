<script lang="ts">
  import { onMount } from 'svelte';

  let canvas: HTMLCanvasElement;

  onMount(() => {
    const ctx = canvas.getContext('2d')!;

    const resize = () => {
      canvas.width  = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();

    const stars = Array.from({ length: 130 }, () => ({
      x:     Math.random() * canvas.width,
      y:     Math.random() * canvas.height,
      r:     Math.random() * 1.2 + 0.3,
      phase: Math.random() * Math.PI * 2,
      speed: 0.006 + Math.random() * 0.008
    }));

    let raf: number;

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      stars.forEach((s) => {
        s.phase += s.speed;
        const op = 0.12 + Math.sin(s.phase) * 0.38;
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255,255,255,${Math.max(0, op)})`;
        ctx.fill();
      });
      raf = requestAnimationFrame(draw);
    };

    draw();
    window.addEventListener('resize', resize);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('resize', resize);
    };
  });
</script>

<canvas
  bind:this={canvas}
  class="fixed inset-0 pointer-events-none"
  style="z-index:1;"
  aria-hidden="true"
></canvas>
