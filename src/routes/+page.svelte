<script lang="ts">
  import Nav             from '$lib/components/Nav.svelte';
  import Hero            from '$lib/components/Hero.svelte';
  import About           from '$lib/components/About.svelte';
  import Events          from '$lib/components/Events.svelte';
  import UmbreonShowcase from '$lib/components/UmbreonShowcase.svelte';
  import PvPLending      from '$lib/components/PvPLending.svelte';
  import Footer          from '$lib/components/Footer.svelte';
  import StarField       from '$lib/components/StarField.svelte';
</script>

<svelte:head>
  <title>Team Midnight Wish — PokeMMO Guild</title>
</svelte:head>

<StarField />
<Nav />

<main class="relative z-10">
  <Hero />
  <About />
  <Events />
  <UmbreonShowcase />
  <PvPLending />
</main>

<Footer />