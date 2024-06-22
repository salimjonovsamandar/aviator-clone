const casino: Casino[] = [
  {
    name: "Majestic 1win",
    provider: "Spinomenal",
    image: "./majestic.avif",
    icon: "./spinomenal.svg"
  },
  {
    name: "CrashX",
    provider: "Turbo Games",
    image: "/crash.avif",
    icon: "/turbo.svg"
  },
  {
    name: "Hot Cash: Hold...",
    provider: "Netgame",
    image: "/hot.avif",
    icon: "/netgame.svg"
  },
  {
    name: "Money Hive 50...",
    provider: "Netgame",
    image: "/money.avif",
    icon: "/netgame.svg"
  },
  {
    name: "Coin Win: Hold...",
    provider: "Gamzix",
    image: "/coinwin.avif",
    icon: "/gamzix.svg"
  },
  {
    name: "1win - Baba Yaga",
    provider: "Spinomenal",
    image: "/baba.avif",
    icon: "/spinomenal.svg"
  },
  {
    name: "1win Pipe",
    provider: "Mancala Gaming",
    image: "/pipe.avif",
    icon: "/mancala.svg"
  },
  {
    name: "Joker Stoker",
    provider: "Endorphina",
    image: "/joker.avif",
    icon: "/endorphina.svg"
  },
  {
    name: "Big Win x25",
    provider: "Mascot Gaming",
    image: "/big.avif",
    icon: "/mascot.svg"
  },
  {
    name: "Sun Crown",
    provider: "AmigoGaming",
    image: "/sun.avif",
    icon: "/amigogaming.svg"
  },
  {
    name: "Burning Slots...",
    provider: "BF Games",
    image: "/burning.avif",
    icon: "/bfgames.svg"
  },
  {
    name: "J Mania Golden...",
    provider: "Rubyplay",
    image: "/jmania.avif",
    icon: "/rubyplay.svg"
  }
];

const livegames: LiveGame[] = [
  {
    name: "Crazy Time",
    provider: "Evolution",
    image: "/crazytime.avif",
    icon: "/evolution.svg"
  },
  {
    name: "1win Russian",
    provider: "Pragmatic",
    image: "/winrussian.avif",
    icon: "/pragmatic.svg"
  },
  {
    name: "1win Auto Meg...",
    provider: "Pragmatic",
    image: "/roulette.avif",
    icon: "/pragmatic.svg"
  },
  {
    name: "1win Blackjack",
    provider: "Evolution",
    image: "/blacjack.avif",
    icon: "/evolution.svg"
  },
  {
    name: "Stock Market",
    provider: "Evolution",
    image: "/stockmarket.avif",
    icon: "/evolution.svg"
  },
  {
    name: "Speed Roulette",
    provider: "Ezugi",
    image: "/speedroulette.avif",
    icon: "/ezugi.svg"
  },
  {
    name: "Infinite Blackjack",
    provider: "Evolution",
    image: "/infinite.avif",
    icon: "/evolution.svg"
  },
  {
    name: "Ultimate Roulette",
    provider: "Ezugi",
    image: "/ultimate.avif",
    icon: "/ezugi.svg"
  },
  {
    name: "Roulette",
    provider: "TVBet",
    image: "/roulette.avif",
    icon: "/tvbet.svg"
  },
  {
    name: "Unlimited...",
    provider: "Ezugi",
    image: "/blackjack.avif",
    icon: "/ezugi.svg"
  },
  {
    name: "Funky Time",
    provider: "Evolution",
    image: "/funkytime.avif",
    icon: "/evolution.svg"
  },
  {
    name: "Crazy Pachinko",
    provider: "Evolution",
    image: "/crazypachinko.avif",
    icon: "/evolution.svg"
  }
];

const wingames: WinGame[] = [
  {
    name: "Lucky Jet",
    provider: "1win Games",
    image: "/luckyjet.avif",
    icon: "/wingames.svg"
  },
  {
    name: "Spins Queen",
    provider: "Spinomenal",
    image: "/spinsqueen.avif",
    icon: "/spinomenal.svg"
  },
  {
    name: "Rocket Queen",
    provider: "1win Games",
    image: "/rocketqueen.avif",
    icon: "/wingames.svg"
  },
  {
    name: "Mines",
    provider: "1win Games",
    image: "/mines.avif",
    icon: "/wingames.svg"
  }
];

const card: Card[] = [
  {
    name: "TVBET",
    provider: "Live Games 24/7",
    image: "/tvbet.png"
  },
  {
    name: "Casino",
    provider: "Over 3000 games",
    image: "/casino.png"
  },
  {
    name: "Live games",
    provider: "Live dealers",
    image: "/livegames.png"
  },
  {
    name: "Pocer",
    provider: "free tournaments",
    image: "/poker.png"
  }
];

interface Casino {
  name: string;
  provider: string;
  image: string;
  icon: string;
}

interface LiveGame {
  name: string;
  provider: string;
  image: string;
  icon: string;
}

interface WinGame {
  name: string;
  provider: string;
  image: string;
  icon: string;
}

interface Card {
  name: string;
  provider: string;
  image: string;
}