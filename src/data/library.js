const games = new Map();

games.set('csgo', {
    id: '1',
    name: 'Counter-Strike: Global Offensive',
    img: 'https://cdn.cloudflare.steamstatic.com/steam/apps/730/header.jpg?t=1668125812',
    hoursplayed: '1600 hrs on record',
    lastplayed: 'last played on 7 Jan',
    description:
        'Counter-Strike: Global Offensive (CS:GO) is a 2012 multiplayer tactical first-person shooter developed by Valve.',
    price: 'Free to play',
    tags: 'Shooter, Action, Multiplayer',
});

games.set('dota2', {
    id: '2',
    name: 'DOTA 2',
    img: 'https://cdn.cloudflare.steamstatic.com/steam/apps/570/header.jpg?t=1674071345',
    hoursplayed: '1000 hrs on record',
    lastplayed: 'last played yesterday',
    description:
        'Dota 2 is a 2013 multiplayer online battle arena video game by Valve. The game is a sequel to Defense of the Ancients, a community-created mod for Blizzard Entertainment Warcraft III: Reign of Chaos.',
    price: 'Free to play',
    tags: 'MOBA, Action, Multiplayer',
});

games.set('trackmania', {
    id: '3',
    name: 'Track Mania',
    img: 'https://cdn.cloudflare.steamstatic.com/steam/apps/2225070/header.jpg?t=1674586264',
    hoursplayed: '352 hrs on record',
    lastplayed: 'last played on 23 Dec 2022',
    description:
        'Trackmania is a vehicular soccer video game developed and published by Psyonix.',
    price: 'Free to play',
    tags: 'Cars, Multiplayer, 3D',
});

games.set('gta5', {
    id: '4',
    name: 'Grand Theft Auto 5',
    img: 'https://cdn.cloudflare.steamstatic.com/steam/apps/271590/header.jpg?t=1671485100',
    hoursplayed: '100 hrs on record',
    lastplayed: 'last played on 05 Jun 2021',
    description:
        'Grand Theft Auto V is a 2013 action-adventure game developed by Rockstar North and published by Rockstar Games.',
    price: '29,99$',
    discount: '14,99$',
    tags: 'Action, Third-Person, Adventure',
});

games.set('eldenring', {
    id: '5',
    name: 'Elden Ring',
    img: 'https://cdn.cloudflare.steamstatic.com/steam/apps/1245620/header.jpg?t=1672223247',
    hoursplayed: '23 hrs on record',
    lastplayed: 'last played Today',
    description:
        'Elden Ring is a 2022 action role-playing game developed by FromSoftware and published by Bandai Namco Entertainment.',
    price: '59,99$',
    discount: '38,99$',
    tags: 'Action, Third-Person, Adventure, CO-OP',
});

games.set('fifa23', {
    id: '6',
    name: 'FIFA 23',
    img: 'https://cdn.cloudflare.steamstatic.com/steam/apps/1811260/header.jpg?t=1672758344',
    hoursplayed: '111 hrs on record',
    lastplayed: 'last played on Friday',
    description:
        'FIFA 23 is a football video game published by Electronic Arts.',
    price: '29,99$',
    discount: '23,99$',
    tags: 'Simulation, Football, Casual',
});

games.set('rainbow', {
    id: '7',
    name: 'Rainbow Six Siege',
    img: 'https://cdn.cloudflare.steamstatic.com/steam/apps/359550/header.jpg?t=1671482386',
    hoursplayed: '1.5 hrs on record',
    lastplayed: 'last played on 14 Feb 2022',
    description:
        'Tom Clancy Rainbow Six Siege is an online tactical shooter video game developed by Ubisoft Montreal and published by Ubisoft.',
    price: '19,99$',
    tags: 'Shooter, Action, Multiplayer',
});

games.set('nfs', {
    id: '8',
    name: 'Need For Speed: Unbound',
    img: 'https://cdn.cloudflare.steamstatic.com/steam/apps/1846380/header.jpg?t=1673368466',
    hoursplayed: 'never played',
    lastplayed: 'last played never',
    description:
        'Need for Speed Unbound (stylised as NFS Unbound) is a 2022 racing video game developed by Criterion Games and published by Electronic Arts.',
    price: '29,99$',
    tags: 'Cars, Action, Multiplayer, CO-OP',
});

games.set('ets2', {
    id: '9',
    name: 'Euro Truck Simulator 2',
    img: 'https://cdn.cloudflare.steamstatic.com/steam/apps/227300/header.jpg?t=1668166019',
    hoursplayed: 'never played',
    lastplayed: 'last played never',
    description:
        'Euro Truck Simulator (known as Big Rig Europe in North America) is a 2008 truck simulation game developed and published by SCS Software, set in Europe.',
    price: '4,99$',
    tags: 'Simulation, Casual, Multiplayer',
});

export default games;
