export const eventTypes = [
  {
    id:          'shiny',
    icon:        '✨',
    color:       'gold',
    title:       'Shiny Hunts',
    description: 'Coordinated community chains, weekly themed hunts, and leaderboards for the dedicated hunter.',
    tags:        ['Chain Bonuses', 'Theme Nights', 'Leaderboard'],
    sprite:      'mew',
  },
  {
    id:          'pvp',
    icon:        '⚔️',
    color:       'blue',
    title:       'PvP Tournaments',
    description: 'Single-elimination brackets, ladder seasons, and open exhibition matches for all skill tiers.',
    tags:        ['Bracket Play', 'Ladder Seasons', 'Prize Pool'],
    sprite:      'lugia',
  },
  {
    id:          'raid',
    icon:        '🏰',
    color:       'purple',
    title:       'Raid Nights',
    description: 'Weekly legendary raids with coordinated strategy docs, loot-share agreements, and coaching.',
    tags:        ['Legendaries', 'Loot Share', 'Strategy Docs'],
    sprite:      null,
  },
  {
    id:          'catch',
    icon:        '🎯',
    color:       'green',
    title:       'Catch Events',
    description: 'Limited-time themed catches with prizes for rarity, perfect IVs, and unique move-sets.',
    tags:        ['Rare Spawns', 'IV Prizes', 'Exclusive Drops'],
    sprite:      'mew',
  },
];

export const upcomingEvents = [
  { date: 'JUN 01', title: 'Midnight Shiny Marathon',   type: 'Shiny Hunt',   status: 'soon' },
  { date: 'JUN 07', title: 'Dark Type Invitational',    type: 'PvP',          status: 'open' },
  { date: 'JUN 14', title: 'Legendary Raid Night',      type: 'Raid',         status: 'open' },
  { date: 'JUN 21', title: 'Community Catch Festival',  type: 'Catch Event',  status: 'soon' },
  { date: 'JUN 28', title: 'Umbreon Appreciation Hunt', type: 'Shiny Hunt',   status: 'soon' },
];