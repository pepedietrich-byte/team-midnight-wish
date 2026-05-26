export interface GameEvent {
  id:     number;
  date:   string;
  title:  string;
  type:   string;
  status: 'open' | 'soon' | 'closed';
}

export interface EventType {
  icon:  string;
  title: string;
  desc:  string;
  tag:   string;
}

export const upcomingEvents: GameEvent[] = [
  { id: 1, date: 'JUN 01', title: 'Midnight Shiny Marathon',   type: 'Shiny Hunt',  status: 'soon' },
  { id: 2, date: 'JUN 07', title: 'Dark Type Invitational',    type: 'PvP',         status: 'open' },
  { id: 3, date: 'JUN 14', title: 'Legendary Raid Night',      type: 'Raid',        status: 'open' },
  { id: 4, date: 'JUN 21', title: 'Community Catch Festival',  type: 'Catch Event', status: 'soon' },
  { id: 5, date: 'JUN 28', title: 'Umbreon Appreciation Hunt', type: 'Shiny Hunt',  status: 'soon' }
];

export const eventTypes: EventType[] = [
  { icon: '✨', title: 'Shiny Hunts',     desc: 'Community chains, theme nights, leaderboards.',  tag: 'Weekly'   },
  { icon: '⚔️', title: 'PvP Tournaments', desc: 'Brackets, ladder seasons, open matches.',        tag: 'Monthly'  },
  { icon: '🏰', title: 'Raid Nights',     desc: 'Weekly legendaries, strategy docs, loot share.', tag: 'Weekly'   },
  { icon: '🎯', title: 'Catch Events',    desc: 'Rare spawns, IV prizes, exclusive drops.',        tag: 'Rotating' }
];