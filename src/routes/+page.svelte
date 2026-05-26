<script>
  import Hero             from '$lib/components/Hero.svelte';
  import About            from '$lib/components/About.svelte';
  import Events           from '$lib/components/Events.svelte';
  import UmbreonShowcase  from '$lib/components/UmbreonShowcase.svelte';
  import CommunityValues  from '$lib/components/CommunityValues.svelte';
  import PvPLending       from '$lib/components/PvPLending.svelte';
  import Footer           from '$lib/components/Footer.svelte';
  import SectionDivider   from '$lib/components/SectionDivider.svelte';
</script>

<svelte:head>
  <title>Team Midnight Wish — Pokémon MMO Guild</title>
</svelte:head>

<main>
  <Hero />
  <SectionDivider />
  <About />
  <SectionDivider flip />
  <Events />
  <UmbreonShowcase />
  <CommunityValues />
  <PvPLending />
  <Footer />
</main>