/* ══════════════════════════════════════════════
   SuggestaFlix – script.js
   ══════════════════════════════════════════════ */

// ════════════════════════════════════════════
// DATA — Add your own movies & series here!
//
// Each entry needs:
//   id        → unique number
//   title     → movie/series name
//   category  → array from the CATEGORIES list
//   rating    → your score out of 10
//   poster    → image URL (TMDB or any direct image link)
//   ott       → platform name (e.g. "Netflix")
//   ottUrl    → platform link
//   desc      → short description (shown on hover)
// ════════════════════════════════════════════

const CATEGORIES = [
  "All", "Action", "Suspense", "Thriller", "Mystery","Crime","Horror",
  "Sci-Fi", "Comedy", "Rom-Com", "Marvel", "DC", "Animated", "Documentary",
];

const CAT_EMOJI = {
  "All":     "🎬",
  "Action":  "💥",
  "Suspense":"😰",
  "Thriller":"🔪",
  "Mystery": "🕵️",
  "Crime":   "🚓",
  "Horror":  "👻",
  "Sci-Fi":  "🚀",
  "Comedy":  "😂",
  "Rom-Com": "💕",
  "Marvel":  "⚡",
  "DC":      "🦇",
  "Animated": "🎨",
  "Documentary": "📚",
};

const MOVIES = [
  {
    id: 1,
    title: "Avengers: Endgame",
    category: ["Action", "Marvel"],
    rating: 9.5,
    poster: "https://image.tmdb.org/t/p/w500/or06FN3Dka5tukK1e9sl16pB3iy.jpg",
    ott: "Disney+ Hotstar",
    ottUrl: "https://www.hotstar.com/in/movies/avengers-endgame/1260013556?search_query=endgame",
    desc: "After Thanos wipes out half the universe, the Avengers must assemble one last time to undo his actions in this epic, emotional finale of the Infinity Saga."
  },
  {
    id: 2,
    title: "Inception",
    category: ["Sci-Fi", "Thriller"],
    rating: 9.3,
    poster: "https://image.tmdb.org/t/p/w500/9gk7adHYeDvHkCSEqAvQNLV5Uge.jpg",
    ott: "Amazon Prime",
    ottUrl: "https://www.primevideo.com/detail/Inception/0OY5MW9WUP61HENZJ0E9ONAFGV",
    desc: "A thief who steals corporate secrets through dream-sharing technology is given a chance to have his criminal record erased if he can successfully implant an idea into a CEO's mind."
  },
  {
    id: 3,
    title: "The Dark Knight",
    category: ["Action", "Thriller", "DC"],
    rating: 9.7,
    poster: "https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg",
    ott: "Amazon Prime",
    ottUrl: "https://www.primevideo.com/detail/The-Dark-Knight/0QSTXR0EXWWYI4D3UGMLFM4A0Q",
    desc: "Batman raises the stakes in his war on crime. With the help of Lt. Jim Gordon and DA Harvey Dent, Batman sets out to dismantle the remaining criminal organizations that plague Gotham."
  },
  {
    id: 4,
    title: "Interstellar",
    category: ["Sci-Fi", "Suspense"],
    rating: 9.4,
    poster: "https://image.tmdb.org/t/p/w500/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg",
    ott: "Amazon Prime",
    ottUrl: "https://www.primevideo.com/detail/Interstellar/0PUNMGZEWOMYFKR1XIGOLTL2YM",
    desc: "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival as Earth faces an environmental catastrophe."
  },
  {
    id: 5,
    title: "Spider-Man : No Way Home",
    category: ["Sci-Fi", "Action", "Marvel"],
    rating: 8.4,
    poster: "https://image.tmdb.org/t/p/w500/1g0dhYtq4irTY1GPXvft6k4YLjm.jpg",
    ott: "Amazon Prime",
    ottUrl: "https://www.primevideo.com/detail/Spider-Man-No-Way-Home/0K2K4N25VGA0GOABHNZ2AXJPF7",
    desc: "Peter Parker's life and reputation are turned upside down when his identity is revealed. Desperate for help, he turns to Doctor Strange, but when a spell goes wrong, dangerous foes from other universes start to appear."
  },
  {
    id: 6,
    title: "Shutter Island",
    category: ["Mystery", "Thriller", "Suspense"],
    rating: 8.9,
    poster: "https://i.pinimg.com/736x/dd/01/93/dd01936b004822b82dbcb8cbd7685ad5.jpg",
    ott: "Amazon Prime",
    ottUrl: "https://www.primevideo.com/detail/Shutter-Island/0O2PTYZIO373XRM80BFH7PMODL",
    desc: "World War II soldier-turned-U.S. Marshal Teddy Daniels investigates the disappearance of a patient from Ashecliffe Hospital on a remote island — and nothing is as it seems."
  },
  {
    id: 7,
    title: "Guardians of the Galaxy",
    category: ["Action", "Comedy", "Marvel"],
    rating: 8.8,
    poster: "https://i.pinimg.com/736x/d1/3a/1d/d13a1dff2a96008177b39b82d1a54ed7.jpg",
    ott: "Disney+ Hotstar",
    ottUrl: "https://www.hotstar.com/in/movies/guardians-of-the-galaxy/1260018294?search_query=gu",
    desc: "A group of intergalactic criminals must pull together to stop a fanatical warrior with plans to purge the universe. One of Marvel's most fun and quotable films."
  },
  {
    id: 8,
    title: "No Strings Attached",
    category: ["Rom-Com"],
    rating: 8.2,
    poster: "https://i.pinimg.com/736x/93/b0/fd/93b0fd91b6a8f1631d46c01eda935eac.jpg",
    ott: "Amazon Prime",
    ottUrl: "https://www.primevideo.com/detail/No-Strings-Attached/0RQUV5SQGWRG6HYFOAJGR6ASQ5",
    desc: "Two people try to maintain a strictly physical relationship, but discover that they want something more. A charming, funny take on the 'friends with benefits' trope."
  },
  {
    id: 9,
    title: "Catch Me If You Can",
    category: [ "Mystery", "Suspense"],
    rating: 7.6,
    poster: "https://i.pinimg.com/1200x/ef/08/7e/ef087e9a03aa21dc80764f1051d26ca5.jpg",
    ott: "Amazon Prime",
    ottUrl: "https://www.primevideo.com/detail/Catch-Me-If-You-Can/0Q3BWPTK7PPA3EIRG8LVUTMBY9",
    desc: "The true story of Frank Abagnale Jr., who, before his 19th birthday, successfully conned millions of dollars' worth of checks as a Pan Am pilot, doctor, and legal prosecutor — all while being pursued by an FBI agent."
  },
  {
    id: 10,
    title: "Doctor Strange in the Multiverse of Madness",
    category: ["Action", "Sci-Fi", "Marvel"],
    rating: 7.9,
    poster: "https://image.tmdb.org/t/p/w500/9Gtg2DzBhmYamXBS1hKAhiwbBKS.jpg",
    ott: "Disney+ Hotstar",
    ottUrl: "https://www.hotstar.com/in/movies/doctor-strange-in-the-multiverse-of-madness/1260103761?search_query=dr+strange+mu",
    desc: "Doctor Strange teams with a mysterious teenager who can travel between multiverses to face a dangerous threat — directed with wild horror-infused energy by Sam Raimi."
  },
  {
    id: 11,
    title: "Spider-Man: Into the Spider-Verse",
    category: ["Marvel", "Action", "Animated"],
    rating: 9.2,
    poster: "https://i.pinimg.com/1200x/21/89/fb/2189fb54b11e3594ec2ec20e9e72670d.jpg",
    ott: "Netflix",
    ottUrl: "https://www.netflix.com/in/title/81002747",
    desc: "Teenager Miles Morales becomes the Spider-Man of his universe and crosses the Multiverse to meet alternate versions of himself."
  },
  {
    id: 12,
    title: "Spider-Man: Across the Spider-Verse",
    category: ["Marvel", "Action", "Animated"],
    rating: 8.7,
    poster: "https://i.pinimg.com/736x/46/7d/94/467d9422c34a27a813e84d4da80a0cb1.jpg",
    ott: "Netflix",
    ottUrl: "https://www.netflix.com/in/title/81594921",
    desc: "Miles Morales catapults across the Multiverse, where he encounters a team of Spider-People charged with protecting its very existence. But when the heroes clash on how to handle a new threat, Miles must redefine what it means to be a hero and forge his own path."
  },
  {
    id: 13,
    title: "Fight Club",
    category: ["Mystery", "Thriller", "Suspense"],
    rating: 8.9,
    poster: "https://i.pinimg.com/736x/5d/23/e8/5d23e8cea42ba4a5513f6ab32f0b40c7.jpg",
    ott: "Netflix",
    ottUrl: "https://www.netflix.com/in/title/26004747",
    desc: "An insomniac office worker and a devil-may-care soap maker form an underground fight club that evolves into something much, much more. A dark, stylish critique of consumerist culture with a mind-bending twist."
  },
  {
    id: 14,
    title: "Agent Sai Srinivasa Athreya",
    category: ["Mystery", "Thriller", "Suspense"],
    rating: 8.1,
    poster: "https://i.pinimg.com/736x/cc/47/dd/cc47dd89bf60121483e14b764fd38c96.jpg",
    ott: "Amazon Prime",
    ottUrl: "https://www.primevideo.com/detail/Agent-Sai-Srinivasa-Athreya/0PQHTNL47NU88A3P7S2DYWN1AU",
    desc: "A brilliant detective with a knack for solving mysteries in his hometown of Nellore, India, finds himself entangled in a complex case that tests his skills and challenges his beliefs."
  },
  {
    id: 15,
    title: "SE7EN",
    category: ["Mystery", "Thriller", "Suspense"],
    rating: 8.5,
    poster: "https://i.pinimg.com/736x/32/ea/90/32ea902c1f6edc7f945f0101fb149bd1.jpg",
    ott: "Amazon Prime",
    ottUrl: "https://www.primevideo.com/detail/Seven-1995/0KEKSUA04N2G90A8JKW6FO725I",
    desc: "Two detectives investigate a series of murders that are connected to a seven-step plan."
  },
  {
    id: 16,
    title: "Phata Poster Nikla Hero",
    category: ["Action", "Comedy"],
    rating: 8.0,
    poster: "https://i.pinimg.com/1200x/55/48/70/55487048c2cfbaece4dd0874c9d7ac8a.jpg",
    ott: "Zee5",
    ottUrl: "https://www.zee5.com/movies/details/phata-poster-nikhla-hero/0-0-movie_68960886",
    desc: "Vishwas Rao is raised by his mother who wants him to become a police officer while he wants to become an actor."
  },
  {
    id: 17,
    title: "Andhadhun",
    category: ["Mystery", "Thriller", "Suspense"],
    rating: 9.0,
    poster: "https://i.pinimg.com/736x/99/f7/3d/99f73d2b7b089d2dadde2fed74bd19b6.jpg",
    ott: "Amazon Prime",
    ottUrl: "https://www.primevideo.com/detail/Andhadhun/0I9XWO2UA8XJ2YVJR3PJZVSTQU",
    desc: "A blind pianist becomes embroiled in a series of bizarre crimes after witnessing a murder."
  },
  {
    id: 18,
    title: 'Jab We Met',
    category: ["Rom-Com"],
    rating: 8.5,
    poster: "https://i.pinimg.com/1200x/4e/9e/38/4e9e38fa1d00d734239d334a2c10f3ad.jpg",
    ott: "Amazon Prime",
    ottUrl: "https://www.primevideo.com/detail/Jab-We-Met/0IZIGS3J12SA8YI4UQQT2OS4WY",
    desc: "A story of two people who meet by chance and fall in love, but face challenges in their relationship."
  },
  {
    id: 19,
    title: 'Batman v Superman: Dawn of Justice',
    category: ["Action", "Sci-Fi", "DC"],
    rating: 8.5,
    poster: "https://i.pinimg.com/1200x/85/85/c2/8585c2c3d3a4f5bc903de1840f62f1bb.jpg",
    ott: "Amazon Prime",
    ottUrl: "https://www.primevideo.com/detail/Batman-v-Superman-Dawn-of-Justice/0PHV9KGO4HDXWXYYGYJU9EVOQ5",
    desc: "Batman is manipulated by Lex Luthor to fear Superman. Superman's existence is meanwhile dividing the world. The heroes clash and force the neutral Wonder Woman to reemerge."
  },
  {
    id: 20,
    title: 'Do Deewane Sheher Mein',
    category: ["Rom-Com"],
    rating: 8.5,
    poster: "https://i.pinimg.com/736x/2e/da/b1/2edab1eefe18370a42e53c2063b406ae.jpg",
    ott: "Netflix",
    ottUrl: "https://www.netflix.com/in/title/82168832",
    desc: "Set up for a potential arranged marriage, two young adults burdened by social pressures and self-doubt begin to find love and acceptance in each other."
  },
  {
    id: 21,
    title: 'Ra-one',
    category: ["Action", "Sci-Fi"],
    rating: 8.5,
    poster: "https://i.pinimg.com/1200x/b4/6f/3d/b46f3d8e25513357a183a1766d0bb0ec.jpg",
    ott: "Youtube",
    ottUrl: "https://www.youtube.com/watch?v=eh3M5-IbRn8&t=0s",
    desc: "A game designer creates an unbeatable villain for his son's video game, but when the character comes to life, he must team up with his son and the game's hero to stop him from wreaking havoc on the real world."
  },
  {
    id: 22,
    title: 'Mumbai Mafia: Police vs The Underworld',
    category: ["Action", "Documentary"],
    rating: 7.1,
    poster: "https://imgs.search.brave.com/E8jk_1nh3AHYnijgfyY4aPoQCUKsYZlBpgC33NRrENQ/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL00v/TVY1Qk1USTBOamhp/WkRRdFlqVmlaQzAw/T1RrMExXSTJPVGN0/WXpnM00ySmtZVGM1/TVRZNFhrRXlYa0Zx/Y0djQC5qcGc",
    ott: "Netflix",
    ottUrl: "https://www.netflix.com/in/title/81384842",
    desc: "In 1990s Mumbai, a crime boss and his network wield unchecked power over the city - until the rise of 'encounter cops' who brazenly kill their targets."
  },
  {
    id: 23,
    title: 'American Psycho',
    category: ["Crime", "Thriller", "Suspense"],
    rating: 7.5,
    poster: "https://i.pinimg.com/1200x/98/ae/ac/98aeac137d2ac8ab2d7264b16a444aee.jpg",
    ott: "Netflix",
    ottUrl: "https://www.netflix.com/in/title/60000861",
    desc: "A wealthy New York City investment banking executive, Patrick Bateman, hides his alternate psychopathic ego from his co-workers and friends as he delves deeper into his violent, hedonistic fantasies."
  },
  {
    id: 24,
    title: "The Devil's Advocate",
    category: ["Thriller", "Suspense", "Mystery"],
    rating: 7.7,
    poster: "https://i.pinimg.com/1200x/ad/30/93/ad30931a33e509d1e32ad4fd114dfeb7.jpg",
    ott: "Amazon Prime",
    ottUrl: "https://www.primevideo.com/detail/The-Devils-Advocate/0U43X4HH2Q1YGFIM6H9S4YEMBU",
    desc: "An exceptionally adept Florida lawyer is offered a job at a high-end New York City law firm with a high-end boss - the biggest opportunity of his career to date."
  },
  {
    id: 25,
    title: 'Ted',
    category: ["Comedy", "Animated"],
    rating: 6.9,
    poster: "https://i.pinimg.com/1200x/4f/13/e2/4f13e272ac86204a92450e8fee4844f2.jpg",
    ott: "Amazon Prime",
    ottUrl: "https://www.primevideo.com/detail/0JC7Q52H579GVV0GBNBJWVJIMT",
    desc: "John Bennett, a man whose childhood wish of bringing his teddy bear to life came true, now must decide between keeping the relationship with the bear, Ted or his girlfriend, Lori."
  },
  {
    id: 26,
    title: 'Ted 2',
    category: ["Comedy", "Animated"],
    rating: 6.9,
    poster: "https://i.pinimg.com/736x/59/01/6e/59016e95b44206c81f50df1001fa9c9d.jpg",
    ott: "Amazon Prime",
    ottUrl: "https://www.primevideo.com/detail/Ted-2/0OSAJS3JUR5028LFOVNXDCENFB",
    desc: "Newlywed couple Ted and Tami-Lynn want to have a baby, but in order to qualify to be a parent, Ted will have to prove he's a person in a court of law."
  },
  {
    id: 27,
    title: 'Tumbbad',
    category: ["Horror", "Thriller", "Suspense"],
    rating: 8.2,
    poster: "https://i.pinimg.com/736x/01/c2/3b/01c23b5a87dd497d517b313e58dbca4f.jpg",
    ott: "Amazon Prime",
    ottUrl: "https://www.primevideo.com/detail/amzn1.dv.gti.4cb3965f-e34d-3f49-a60c-acc2bc1f9065",
    desc: "A mythological story about a goddess who created the entire universe. The plot revolves around the consequences when humans build a temple for her first-born."
  },
  {
    id: 28,
    title: "Incidious",
    category: ["Horror", "Suspense"],
    rating: 7.0,
    poster: "https://i.pinimg.com/736x/38/11/69/3811698624d9a3e8ee6664d72d93b02c.jpg",
    ott: "Amazon Prime",
    ottUrl: "https://www.primevideo.com/detail/0JGH6G03OD9MLOE18O2F6WFZ1J",
    desc: "A family looks to prevent evil spirits from trapping their comatose child in a realm called The Further."
  },
{
    id: 29,
    title: "Triangle",
    category: ["Mystery", "Suspense"],
    rating: 9.0,
    poster: "https://i.pinimg.com/736x/a9/27/eb/a927ebd1def53de1f121d4214e6192ad.jpg",
    ott: "Amazon Prime",
    ottUrl: "https://www.primevideo.com/detail/Triangle/0NJV158H2Y9NWDP5HL3629GM7A",
    desc: "Five friends set sail and their yacht is overturned by a strange and sudden storm. A mysterious ship arrives to rescue them, and what happens next cannot be explained."
  },
    {
    id: 30,
    title: "10 Things I Hate About You",
    category: ["Rom-Com"],
    rating: 8.0,
    poster: "https://i.pinimg.com/736x/6a/78/7d/6a787da792a0ab6ce25b7259798039fe.jpg",
    ott: "Disney+Hotstar",
    ottUrl: "https://www.hotstar.com/in/movies/10-things-i-hate-about-you/1260018201?search_query=10+thinga+i+hate",
    desc: "A high-school boy, Cameron, cannot date Bianca until her anti-social older sister, Kat, has a boyfriend. So, Cameron pays a mysterious boy, Patrick, to charm Kat."
  },
    {
    id: 31,
    title: "How to Lose a Guy in 10 Days",
    category: ["Rom-Com"],
    rating: 8.0,
    poster: "https://i.pinimg.com/736x/cc/e6/9b/cce69b3307db7cb43085a156c7947312.jpg",
    ott: "Amazon Prime",
    ottUrl: "https://www.primevideo.com/detail/How-to-Lose-a-Guy-in-10-Days/0I16TO14VR6ABPT1SH1DZPW4HW",
    desc: "An advertising executive and ladies' man, to win a big campaign, bets that he can make a woman fall in love with him in 10 days."
  },
  {
    id: 32,
    title: "Govinda Naam Mera",
    category: ["Rom-Com", "Suspense"],
    rating: 7.9,
    poster: "https://i.pinimg.com/1200x/76/0e/00/760e002a56643bfe86f1d27abfc57a8f.jpg",
    ott: "Disney+Hotstar",
    ottUrl: "https://www.hotstar.com/in/movies/govinda-naam-mera/1260125572",
    desc: "The very charming Govinda Waghmare juggles his time and love between his wife Mrs. Waghmare and his girlfriend in this dose of chaos, confusion, and laughter."
  },
  {
    id: 33,
    title: "Main Hoon Dandadhikari",
    category: ["Thriller", "Suspense"],
    rating: 8.4,
    poster: "https://i.pinimg.com/736x/2f/7f/49/2f7f49c192d084e4f0383135067976fd.jpg",
    ott: "You Tube",
    ottUrl: "https://www.youtube.com/watch?v=4-SCanh-a5E",
    desc: "A sub-inspector sets out in pursuit of a mysterious serial killer who targets teen school girls and murders them brutally."
  },
  {
    id: 34,
    title: "The Shawshank Redemption",
    category: ["Thriller", "Action"],
    rating: 9.4,
    poster: "https://i.pinimg.com/1200x/08/6f/fe/086ffeccab22baa2b4d49ab8787f9b90.jpg",
    ott: "Amazon Prime",
    ottUrl: "https://www.primevideo.com/detail/The-Shawshank-Redemption/0H3BD1NXV10WDK34UPWWVK4NNS",
    desc: "A wrongfully convicted banker forms a close friendship with a hardened convict over a quarter century while retaining his humanity through simple acts of compassion."
  },
  {
    id: 35,
    title: "Jerry Maguire",
    category: ["Rom-Com"],
    rating: 8.4,
    poster: "https://i.pinimg.com/1200x/6e/2f/a4/6e2fa4671b3ad13aa44041ccc5495c36.jpg",
    ott: "Amazon Prime",
    ottUrl: "https://www.primevideo.com/detail/amzn1.dv.gti.14ad0071-4e1e-602c-a153-cdda4871c43e",
    desc: "When a sports agent has a moral epiphany and is fired for expressing it, he decides to put his new philosophy to the test as an independent agent with the only athlete who stays with him and his former colleague."
  },
  {
    id: 36,
    title: "The Adam's Project",
    category: ["Sci-Fi", "Comedy"],
    rating: 8.6,
    poster: "https://i.pinimg.com/736x/7c/37/1f/7c371f852940091598658bf4e32c4b6b.jpg",
    ott: "Netflix",
    ottUrl: "https://www.netflix.com/in/title/81309354",
    desc: "After accidentally crash-landing in 2022, time-traveling fighter pilot Adam Reed teams up with his 12-year-old self for a mission to save the future."
  },
  {
    id: 37,
    title: "Free Guy",
    category: ["Sci-Fi", "Comedy"],
    rating: 8.9,
    poster: "https://i.pinimg.com/1200x/0f/58/a5/0f58a5481594909400681ac58be23bc0.jpg",
    ott: "Disney+Hotstar",
    ottUrl: "https://www.hotstar.com/in/movies/free-guy/1260071301?search_query=free+guy",
    desc: "When Guy, a bank teller, learns that he is a non-player character in a bloodthirsty, open-world video game, he goes on to become the hero of the story and takes the responsibility of saving the world."
  },
  {
    id: 38,
    title: "Senna",
    category: ["Documentary"],
    rating: 7.6,
    poster: "https://i.pinimg.com/1200x/e3/ca/ce/e3cace46f35913b0747d350390fdf1c4.jpg",
    ott: "Disney+Hotstar",
    ottUrl: "https://www.hotstar.com/in/movies/senna/1271437972?search_query=senna",
    desc: "A documentary on Brazilian Formula One racing driver Ayrton Senna, who won the F1 world championship three times before his death at age 34."
  },
  {
    id: 39,
    title: "The Secret Life of Pets",
    category: ["Animated"],
    rating: 8.5,
    poster: "https://i.pinimg.com/1200x/b5/8f/ec/b58fec9d34ac2121f34e598e82b25865.jpg",
    ott: "Amazon Prime",
    ottUrl: "https://www.primevideo.com/detail/0J070MHCQCD2MA7RXUBRBPIRKN/ref=atv_dp_amz_c_TS8274d9_1_2?jic=16%7CCgNhbGwSA2FsbA%3D%3D",
    desc: "A documentary on Brazilian Formula One racing driver Ayrton Senna, who won the F1 world championship three times before his death at age 34."
  },
  {
    id: 40,
    title: "The Secret Life of Pets 2",
    category: ["Animated"],
    rating: 8.6,
    poster: "https://i.pinimg.com/1200x/2f/0f/74/2f0f7469689912d796ea48bb4c3ce02b.jpg",
    ott: "Amazon Prime",
    ottUrl: "https://www.primevideo.com/detail/0H7L1DDZBEC1ID7KHVTHB8F0JK/ref=atv_dp_amz_c_TS8274d9_1_1?jic=16%7CCgNhbGwSA2FsbA%3D%3D",
    desc: "A documentary on Brazilian Formula One racing driver Ayrton Senna, who won the F1 world championship three times before his death at age 34."
  },
  {
    id: 41,
    title: "Hi Nanna",
    category: ["Rom-Com",],
    rating: 8.6,
    poster: "https://i.pinimg.com/736x/b6/71/48/b6714847bbb3e8fecbea6fc7e4e2f085.jpg",
    ott: "Netflix",
    ottUrl: "https://www.netflix.com/in/title/81753408?source=imdb&fromWatch=true",
    desc: "A single father begins to narrate the story of the missing mother to his child and nothing remains the same."
  },
  {
    id: 42,
    title: "Lucky Baskhar",
    category: ["Thriller","Crime"],
    rating: 8.6,
    poster: "https://i.pinimg.com/736x/d9/b0/47/d9b047c49b005f8b9de9642f88f5f59d.jpg",
    ott: "Netflix",
    ottUrl: "https://www.netflix.com/in/title/81902035?source=imdb&fromWatch=true",
    desc: "A cash-strapped cashier working at a bank embarks on a risky investment scheme and soon gets drawn into the murky world of money laundering."
  },
];

const SERIES = [
  {
    id: 101,
    title: "Breaking Bad",
    category: ["Thriller", "Suspense", "Mystery"],
    rating: 9.9,
    poster: "https://image.tmdb.org/t/p/w500/ggFHVNu6YYI5L9pCfOacjizRGt.jpg",
    ott: "Netflix",
    ottUrl: "https://www.netflix.com/in/title/70143836",
    desc: "A high school chemistry teacher diagnosed with terminal lung cancer teams with a former student to build a meth empire to secure his family's future. Widely regarded as the greatest TV show ever made."
  },
  {
    id: 102,
    title: "Stranger Things",
    category: ["Sci-Fi", "Mystery", "Suspense"],
    rating: 9.2,
    poster: "https://image.tmdb.org/t/p/w500/x2LSRK2Cm7MZhjluni1msVJ3wDF.jpg",
    ott: "Netflix",
    ottUrl: "https://www.netflix.com/in/title/80057281",
    desc: "When a young boy vanishes, a small town uncovers a mystery involving secret experiments, terrifying supernatural forces, and one strange little girl. Peak 80s nostalgia."
  },
  {
    id: 103,
    title: "Loki",
    category: ["Action", "Sci-Fi", "Marvel"],
    rating: 8.7,
    poster: "https://image.tmdb.org/t/p/w500/kEl2t3OhXc3Zb9FBh1AuYzRTgZp.jpg",
    ott: "Disney+ Hotstar",
    ottUrl: "https://www.hotstar.com/in/shows/loki/1260063451?search_query=loki",
    desc: "The mercurial villain Loki resumes his role as the God of Mischief in a new series that takes place after the events of Avengers: Endgame — mind-bending multiverse chaos ensues."
  },
  {
    id: 104,
    title: "The Witcher",
    category: ["Action", "Thriller", "Sci-Fi"],
    rating: 8.5,
    poster: "https://image.tmdb.org/t/p/w500/7vjaCdMw15FEbXyLQTVa04URsPm.jpg",
    ott: "Netflix",
    ottUrl: "https://www.netflix.com/in/title/80189685",
    desc: "Geralt of Rivia, a solitary monster hunter, struggles to find his place in a world where people often prove more wicked than beasts."
  },
  {
    id: 105,
    title: "Game of Thrones",
    category: ["Fantasy", "Suspense"],
    rating: 9.3,
    poster: "https://image.tmdb.org/t/p/w500/u3bZgnGQ9T01sWNhyveQz0wH0Hl.jpg",
    ott: "Amazon Prime",
    ottUrl: "https://www.primevideo.com/detail/Game-of-Thrones/0NZG3AUJEXFXKKDLKRB7KAI0S2",
    desc: "Nine noble families wage war against each other in order to gain control over the mythical land of Westeros, while an ancient enemy returns after being dormant for millennia."
  },
  {
    id: 106,
    title: "Dark",
    category: ["Sci-Fi", "Mystery", "Thriller", "Suspense"],
    rating: 9.6,
    poster: "https://i.pinimg.com/1200x/02/f6/9c/02f69ce21ff6686ff567aecbc119ce60.jpg",
    ott: "Netflix",
    ottUrl: "https://www.netflix.com/in/title/80100172",
    desc: "A family saga with a supernatural twist set in a German town, where the disappearance of two young children exposes the double lives and fractured relationships among four families across time."
  },
  {
    id: 107,
    title: "Money Heist",
    category: ["Action", "Crime", "Thriller"],
    rating: 9.1,
    poster: "https://i.pinimg.com/1200x/7c/99/53/7c995367709297b5535ae522d05eb9a5.jpg",
    ott: "Netflix",
    ottUrl: "https://netflix.com",
    desc: "Money Heist follows a mysterious mastermind, the Professor, who recruits skilled criminals to execute daring heists on Spain's Royal Mint and Bank, blending intense action, strategy, and emotional drama with unexpected twists."
  },
  {
    id: 108,
    title: "WandaVision",
    category: ["Sci-Fi", "Mystery", "Marvel"],
    rating: 8.8,
    poster: "https://i.pinimg.com/webp85/1200x/fe/7e/4d/fe7e4d9268929f58a85af2960f1d1d66.webp",
    ott: "Disney+ Hotstar",
    ottUrl: "https://www.hotstar.com",
    desc: "Wanda Maximoff and Vision lead a perfect suburban life — but slowly realize everything is not as it seems in their idyllic world. A love letter to classic TV wrapped in Marvel mystery."
  },
  {
    id: 109,
    title: "Peaky Blinders",
    category: ["Action", "Thriller", "Suspense"],
    rating: 9.4,
    poster: "https://i.pinimg.com/736x/6c/9b/dd/6c9bddfd0635a798cc47f2935a3e8f47.jpg",
    ott: "Netflix",
    ottUrl: "https://www.netflix.com/in/title/80002479",
    desc: "A gangster family epic set in Birmingham, England in 1919, centering on the Peaky Blinders gang and their ambitions. Cillian Murphy is electric as Tommy Shelby."
  },
  {
    id: 110,
    title: "Only Murders in the Building",
    category: ["Mystery", "Comedy", "Suspense"],
    rating: 8.6,
    poster: "https://i.pinimg.com/1200x/89/eb/06/89eb06c052afe01e630af58e28b99c88.jpg",
    ott: "Disney+ Hotstar",
    ottUrl: "https://www.hotstar.com/in/shows/only-murders-in-the-building/1260067362?search_query=only",
    desc: "Three strangers obsessed with true crime podcasts suddenly find themselves wrapped up in one in their exclusive Manhattan apartment building. Charming, clever, and funny."
  },
  {
    id: 111,
    title: "Arrested Development",
    category: ["Comedy", "Brainrot"],
    rating: 8.9,
    poster: "https://i.pinimg.com/736x/7c/10/40/7c1040f09d52a64f1a8419fed1b1f0e9.jpg",
    ott: "Disney+ Hotstar",
    ottUrl: "https://www.hotstar.com/in/shows/arrested-development/11952",
    desc: "A wealthy family loses everything, and the one son tries to keep them together. The densest, most rewatchable comedy ever made — every frame has a joke."
  },
  {
    id: 112,
    title: "The Boys",
    category: ["Action", "Thriller", "Comedy"],
    rating: 9.5,
    poster: "https://i.pinimg.com/236x/48/78/b4/4878b4cc2c7f80bf7a4f63b626179683.jpg",
    ott: "Amazon Prime",
    ottUrl: "https://www.primevideo.com/detail/The-Boys/0S1FYJ3LY9KTL9C7WFFAGA9F6F",
    desc: "A group of vigilantes set out to expose the truth about corrupt superheroes who abuse their powers. Brutally satirical, ultra-violent, and surprisingly moving."
  },
  {
    id: 113,
    title: "Moonknight",
    category: ["Action", "Thriller", "Marvel"],
    rating: 9.5,
    poster: "https://i.pinimg.com/1200x/d6/a0/8c/d6a08c0a69168f336fd7c15503ee29cb.jpg",
    ott: "Disney+ Hotstar",
    ottUrl: "https://www.hotstar.com/in/shows/moon-knight/1260089681?search_query=moonknight",
    desc: "Steven Grant discovers he's been granted the powers of an Egyptian moon god. But he soon finds out that these newfound powers can be both a blessing and a curse to his troubled life."
  },
  {
    id: 114,
    title: "Friends",
    category: ["Sitcom", "Comedy","Rom-Com"],
    rating: 9.5,
    poster: "https://i.pinimg.com/236x/a1/00/e5/a100e5df66ce1cd264a786239e6d8e7a.jpg",
    ott: "Netflix",
    ottUrl: "https://www.netflix.com/in/title/70153404",
    desc: "Six friends navigate the ups and downs of life and love in New York City. The ultimate comfort watch with iconic characters and endless quotability."
  },
  {
    id: 115,
    title: "The Big Bang Theory",
    category: ["Sitcom", "Comedy","Rom-Com"],
    rating: 9.5,
    poster: "https://i.pinimg.com/736x/10/c9/bb/10c9bbac5724382a026ed567a1cdafac.jpg",
    ott: "Netflix",
    ottUrl: "https://www.netflix.com/in/title/70143830",
    desc: "A group of socially awkward scientists befriend and romanticize their new neighbor, a beautiful aspiring actress."
  },
  {
    id: 116,
    title: "Brooklyn Nine-Nine",
    category: ["Sitcom", "Comedy","Rom-Com"],
    rating: 9.5,
    poster: "https://i.pinimg.com/webp85/736x/52/1d/27/521d271fb4b41a5e19a30de376361a30.webp",
    ott: "Netflix",
    ottUrl: "https://www.netflix.com/in/title/70281562",
    desc: "A comedy series about a group of detectives in Brooklyn, New York, who solve cases while dealing with their personal lives."
  },
  {
    id: 117,
    title: "How I Met Your Mother",
    category: ["Sitcom", "Comedy","Rom-Com"],
    rating: 9.5,
    poster: "https://i.pinimg.com/1200x/25/ec/11/25ec1180e11c91095469c23b483b9e6b.jpg",
    ott: "Disney+ Hotstar",
    ottUrl: "https://www.hotstar.com/in/shows/how-i-met-your-mother/8323?search_query=how+i+met",
    desc: "A father recounts to his children the journey he and his four best friends took leading up to him meeting their mother."
  },
  {
    id: 118,
    title: "Girl Meets World",
    category: ["Sitcom", "Comedy","Rom-Com"],
    rating: 9.5,
    poster: "https://i.pinimg.com/736x/21/0a/54/210a540307b386fb05ef5c8d91b82ba8.jpg",
    ott: "Amazon Prime",
    ottUrl: "https://www.primevideo.com/detail/Girl-Meets-World/0P35CFUMTTSQTH14CY7C11N6Z1",
    desc: "Cory and Topanga Matthews are married and have two children. Their daughter Riley faces life lessons through her family, friends, and school — where her father is her history teacher."
  },
  {
    id: 119,
    title: "2 Broke Girls",
    category: ["Sitcom", "Comedy"],
    rating: 9.5,
    poster: "https://i.pinimg.com/webp85/736x/1e/fa/de/1efade9668c3dd326250aa468af3d5c7.webp",
    ott: "Amazon Prime",
    ottUrl: "https://www.primevideo.com/detail/2-Broke-Girls/0GHCD8KIRXF1ZFI4VX8D2N0AG0",
    desc: "Two young women waitressing at a greasy spoon diner strike up an unlikely friendship in the hopes of launching a successful business - if only they can raise the cash."
  },
  {
    id: 120,
    title: "Modern Family",
    category: ["Sitcom", "Comedy","Rom-Com"],
    rating: 9.5,
    poster: "https://i.pinimg.com/736x/fb/81/f6/fb81f6f8f494cd74fce33550263aa793.jpg",
    ott: "Disney+ Hotstar",
    ottUrl: "https://www.hotstar.com/in/shows/modern-family/8549",
    desc: "Three different, but related, families face trials and tribulations in their own uniquely comedic ways."
  },
  {
    id: 121,
    title: "Cobra Kai",
    category: ["Action", "Comedy"],
    rating: 9.5,
    poster: "https://i.pinimg.com/736x/72/0f/b1/720fb150949aee3faf734391e265c946.jpg",
    ott: "Netflix",
    ottUrl: "https://www.netflix.com/in/title/81002370",
    desc: "Decades after their 1984 All Valley Karate Tournament bout, Johnny Lawrence seeks redemption by reopening the Cobra Kai karate dojo, reigniting his rivalry with a now-successful Daniel LaRusso."
  },
  {
    id: 122,
    title: "Indian Predator: The Diary of a Serial Killer",
    category: ["Crime", "Documentary"],
    rating: 6.8,
    poster: "https://imgs.search.brave.com/-wCapEYG_RCxZ0kwat96mTZq3xku-xY5Y8NT5KFDobU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMwLnNyY2RuLmNv/bS93b3JkcHJlc3Mv/d3AtY29udGVudC91/cGxvYWRzLzIwMjQv/MDUvaW5kaWFuLXBy/ZWRhdG9yXy10aGUt/ZGlhcnktb2YtYS1z/ZXJpYWwta2lsbGVy/X3Bvc3Rlci5qcGc_/cT01MCZmaXQ9Y29u/dGFpbiZ3PTQ4MCZk/cHI9MS41",
    ott: "Netflix",
    ottUrl: "https://www.netflix.com/in/title/81002370",
    desc: "A riveting docuseries investigating the chilling crimes of one of India's most notorious serial killers."
  },
  {
    id: 123,
    title: "Indian Predator: The Butcher of Delhi",
    category: ["Crime", "Documentary"],
    rating: 6.8,
    poster: "https://i.pinimg.com/736x/0f/3a/68/0f3a689e2128bb290c2b931740f19c15.jpg",
    ott: "Netflix",
    ottUrl: "https://www.netflix.com/in/title/81252894",
    desc: "A series of mutilated bodies and taunting notes left outside a Delhi jail sends police hunting for a seasoned killer with a grudge against the system."
  },
  {
    id: 124,
    title: "From",
    category: ["Suspense", "Mystery","Horror"],
    rating: 7.8,
    poster: "https://i.pinimg.com/736x/bc/d7/bb/bcd7bb40c77b41f7bc8d6cfa4babfce1.jpg",
    ott: "Amazon Prime",
    ottUrl: "https://www.primevideo.com/detail/FROM/0NUSIUYWST5Y50I5UZSLNW196V",
    desc: "A town with a hidden secret experiences strange occurrences that intensify at night. Mysterious forces disrupt everyday routines as residents try to preserve stability and community while attempting to comprehend their surroundings."
  },
  {
    id: 125,
    title: "All Of Us Are Dead",
    category: ["Action","Horror"],
    rating: 8.8,
    poster: "https://i.pinimg.com/736x/39/c3/b1/39c3b1cc464e03f967b9818c3b888633.jpg",
    ott: "Netflix",
    ottUrl: "https://www.netflix.com/in/title/81237994",
    desc: "A high school becomes ground zero for a zombie virus outbreak. Trapped students must fight their way out or turn into one of the rabid infected."
  },
  {
    id: 126,
    title: "What If...",
    category: ["Marvel","Animated"],
    rating: 7.4,
    poster: "https://i.pinimg.com/736x/4b/cb/c5/4bcbc5b4ea3df587fc4f172aff4ff6ac.jpg",
    ott: "Disney+ Hotstar",
    ottUrl: "https://www.hotstar.com/in/shows/what-if/1260066057?search_query=what+if",
    desc: "Exploring pivotal moments from the Marvel Cinematic Universe and turning them on their head, leading the audience into uncharted territory"
  },
  {
    id: 127,
    title: "Marvel Zombies",
    category: ["Marvel","Animated"],
    rating: 7.4,
    poster: "https://i.pinimg.com/736x/72/57/bb/7257bbee93e9b6f529950d1017cdb723.jpg",
    ott: "Disney+ Hotstar",
    ottUrl: "https://www.hotstar.com/in/shows/marvel-zombies/1271435440?search_query=Marvel+Zombies",
    desc: "Exploring pivotal moments from the Marvel Cinematic Universe and turning them on their head, leading the audience into uncharted territory"
  },
  {
    id: 128,
    title: "Attack On Titan",
    category: ["Action","Suspense","Animated"],
    rating: 9.8,
    poster: "https://i.pinimg.com/736x/1a/f2/e4/1af2e4086982c7ee9cf3bbd11d4924c9.jpg",
    ott: "HiAnime",
    ottUrl: "https://hianimes.se/watch/attack-on-titan-episode-1-episode-1-9c0ftw",
    desc: "Exploring pivotal moments from the Marvel Cinematic Universe and turning them on their head, leading the audience into uncharted territory"
  },
  {
    id: 129,
    title: "Daredevil",
    category: ["Action","Marvel"],
    rating: 9.4,
    poster: "https://i.pinimg.com/1200x/09/3e/17/093e1733d5cb25d0a03b35a0dd357a1d.jpg",
    ott: "Disney+ Hotstar",
    ottUrl: "https://www.hotstar.com/in/shows/marvels-daredevil/1260091261?search_query=daredevil%27",
    desc: "A blind lawyer by day, vigilante by night. Matt Murdock fights the crime of New York as Daredevil."
  },
  {
    id: 130,
    title: "Single Papa",
    category: ["Comedy"],
    rating: 8.5,
    poster: "https://i.pinimg.com/1200x/db/a3/57/dba3575fba5b2efafc9aa4f13f8c5850.jpg",
    ott: "Netflix",
    ottUrl: "https://www.netflix.com/in/title/81728970?source=imdb&fromWatch=true",
    desc: "A newly-divorced 'man-child' shocks his family by adopting a baby. As chaos unfolds, the immature Gaurav Gehlot must navigate single parenthood while his bewildered relatives adjust to the situation."
  },
  {
    id: 131,
    title: "Panchayat",
    category: ["Comedy"],
    rating: 9.0,
    poster: "https://i.pinimg.com/736x/a9/43/e2/a943e2a7d1b6ff3106b4bef4ab7d35bd.jpg",
    ott: "Amazon Prime",
    ottUrl: "https://www.primevideo.com/detail/Panchayat/0KAFPP1MAADAFUOA6I2WR5D4TM",
    desc: "A comedy-drama, which captures the journey of an engineering graduate Abhishek, who for lack of a better job option joins as secretary of a Panchayat office in a remote village of Uttar Pradesh."
  },
  {
    id: 132,
    title: "Gullak",
    category: ["Comedy"],
    rating: 8.8,
    poster: "https://i.pinimg.com/736x/02/34/cb/0234cbea4cb6e807401d8141c1586774.jpg",
    ott: "Sony Liv",
    ottUrl: "https://www.sonyliv.com/shows/gullak-1700000659",
    desc: "Set in quaint by-lanes in the heart of India, Gullak is a collection of disarming and relatable tales of the Mishra family."
  },
  {
    id: 133,
    title: "Yeh Meri Family",
    category: ["Comedy"],
    rating: 8.8,
    poster: "https://i.pinimg.com/736x/99/99/85/9999855405ade69e83168dc1bd04bf37.jpg",
    ott: "Amazon Prime",
    ottUrl: "https://www.primevideo.com/detail/Yeh-Meri-Family/0M2EI736ATLXD4XBKCULXKQNMV",
    desc: "Through the lens of a 90s kid, we witness a family navigate through the ups and downs of life during this magical and nostalgic era."
  },
  {
    id: 134,
    title: "The Family Man",
    category: ["Action", "Thriller","Suspense"],
    rating: 8.3,
    poster: "https://i.pinimg.com/1200x/09/63/4c/09634ca4986f5af20a1a28942dfd8c58.jpg",
    ott: "Amazon Prime",
    ottUrl: "https://www.primevideo.com/detail/0RV81WUUHUNK1H2SSUO4FFF6T5/ref=atv_dp_amz_c_TS8274d9_2_7?jic=16%7CCgNhbGwSA2FsbA%3D%3D",
    desc: "A working man from the National Investigation Agency tries to protect the nation from terrorism, but he also needs to keep his family safe from his secret job."
  },
  {
    id: 135,
    title: "Mirzapur",
    category: ["Action", "Thriller"],
    rating: 8.9,
    poster: "https://i.pinimg.com/1200x/d1/1d/fe/d11dfe810f7cf31cb24e0637f39c0f3d.jpg",
    ott: "Amazon Prime",
    ottUrl: "https://www.primevideo.com/detail/0PDOKMV9CRLOMO5EUKNCUJLG4Q/ref=atv_dp_amz_c_TS8274d9_2_10?jic=16%7CCgNhbGwSA2FsbA%3D%3D",
    desc: "A shocking incident at a wedding procession ignites a series of events entangling the lives of two families in the lawless city of Mirzapur."
  },
  {
    id: 136,
    title: "Bhay:The Gaurav Tiwari Mystery",
    category: ["Horror"],
    rating: 9,
    poster: "https://i.pinimg.com/736x/a8/6d/e3/a86de3ecc5422dd5d08b6dcac4478c5e.jpg",
    ott: "MX Player",
    ottUrl: "https://www.mxplayer.in/show/watch-bhay-the-gaurav-tiwari-mystery/season-1/ek-gehra-raaz-online-c4dcd7765e8f17c57ed76c34d800afa8?watch=true",
    desc: "Irene investigates Gaurav's mysterious 2016 death, exploring his paranormal legacy while discovering truths about herself and the supernatural realm."
  },
  {
    id: 137,
    title: "It: Welcome to Derry",
    category: ["Horror"],
    rating: 8.1,
    poster: "https://i.pinimg.com/736x/30/20/e7/3020e7b6a5b45c951db2d652d049e91d.jpg",
    ott: "Disney+Hotstar",
    ottUrl: "https://www.hotstar.com/in/shows/it-welcome-to-derry/1271419298?search_query=IT+welcome+to+derry",
    desc: "In 1962, a couple with their son move to Derry, Maine just as a young boy disappears. With their arrival, very bad things begin to happen in the town."
  },
  {
    id: 138,
    title: "The Fragrant Flower Blooms with Dignity",
    category: ["Rom-Com", "Animated"],
    rating: 8.1,
    poster: "https://i.pinimg.com/736x/22/bb/b8/22bbb81596283db1e9e66380768bf805.jpg",
    ott: "Netflix",
    ottUrl: "https://www.netflix.com/in/title/82024665?source=imdb&fromWatch=true",
    desc: "An elite girls' school resides next to a boys' school for delinquents. One day, two students from each school, Kaoruko and Rintaro, meet and develop a connection."
  },
  {
    id: 139,
    title: "Lucifer",
    category: ["Fantasy", "Comedy", "Crime"],
    rating: 8.1,
    poster: "https://i.pinimg.com/736x/07/12/52/071252ac4197a572ebbfab8a28b7886d.jpg",
    ott: "Netflix",
    ottUrl: "https://www.netflix.com/in/title/80057918?source=imdb&fromWatch=true",
    desc: "Lucifer Morningstar has decided he's had enough of being the dutiful servant in Hell and decides to spend some time on Earth to better understand humanity. He settles in Los Angeles - the City of Angels."
  },
  {
    id: 140,
    title: "Criminal Justice",
    category: ["Crime", "Thriller"],
    rating: 8.1,
    poster: "https://i.pinimg.com/736x/58/50/e7/5850e78dae228f45d2bae3b051f27d36.jpg",
    ott: "Disney+Hotstar",
    ottUrl: "https://www.hotstar.com/in/shows/criminal-justice/1271316088",
    desc: "Sex, drugs and a gruesome murder. An edgy one night stand turns into a nightmare for Aditya, when he wakes up with blood on his hands. The evidence is stacked against him, but he doesn't remember the grisly crime. Is he guilty or not ?"
  },
  {
    id: 141,
    title: "Manifest",
    category: ["Suspense","Mystery"],
    rating: 8.1,
    poster: "https://i.pinimg.com/1200x/35/96/f5/3596f56213bfffb57e5163a0bf807058.jpg",
    ott: "Netflix",
    ottUrl: "https://www.netflix.com/in/title/80241318",
    desc: "When a commercial airliner suddenly reappears after being missing for five years, those aboard must reintegrate into society."
  },
  {
    id: 142,
    title: "Taskaree: The Smuggler's Web",
    category: ["Crime", "Thriller"],
    rating: 8.1,
    poster: "https://i.pinimg.com/736x/31/dc/59/31dc599f31dd0a7dd0445753a30aa20b.jpg",
    ott: "Netflix",
    ottUrl: "https://www.netflix.com/in/title/81406373?source=imdb&fromWatch=true",
    desc: "At customs, Superintendent Meena's elite team faces a crucial mission: stop rising contraband trafficking and take down global crime boss Bada Choudhary's syndicate."
  },
];

// ════════════════════════════════════════════
// MY PICKS — Manually curated by you!
//
// Put the IDs of exactly 10 movies and 10 series
// in the order you want them to appear.
// The first ID shows up first in the row.
// ════════════════════════════════════════════
const MY_MOVIE_PICKS = [3, 2, 4, 6, 20, 13, 31, 27, 29, 30, 41, 42, 36];
const MY_SERIES_PICKS = [105, 101, 103, 128, 107, 109, 113, 102, 134, 135, 131 ,125, 136];


// ════════════════════════════════════════════
// STATE
// ════════════════════════════════════════════
let currentPage  = 'home';
let movieFilter  = 'All';
let seriesFilter = 'All';
let searchQuery  = '';

// ════════════════════════════════════════════
// RENDER HELPERS
// ════════════════════════════════════════════

/** Build the HTML for a single movie/series card */
function cardHTML(item) {
  const imgFallback = `https://via.placeholder.com/300x450/16161f/e50914?text=${encodeURIComponent(item.title)}`;
  return `
    <div class="card" onclick="window.open('${item.ottUrl}','_blank')">
      <img class="card-poster"
           src="${item.poster}"
           alt="${item.title}"
           onerror="this.src='${imgFallback}'"/>

      <!-- Always-visible strip -->
      <div class="card-base">
        <div class="card-title-static">${item.title}</div>
        <div class="card-rating-static">★ ${item.rating}</div>
      </div>

      <!-- Hover overlay -->
      <div class="card-info">
        <div class="card-hover-title">${item.title}</div>
        <div class="card-hover-desc">${item.desc}</div>
        <div class="card-meta">
          ${item.category.map(c => `<span class="card-badge">${c}</span>`).join('')}
          <span class="card-rating-hover">★ ${item.rating}/10</span>
        </div>
        <a class="watch-btn"
           href="${item.ottUrl}"
           target="_blank"
           onclick="event.stopPropagation()">
          ▶ Watch on ${item.ott}
        </a>
      </div>
    </div>`;
}

/** Render a list of items into a grid container */
function renderGrid(containerId, items, noResultsId, countId) {
  const container = document.getElementById(containerId);
  const noRes     = document.getElementById(noResultsId);
  const countEl   = document.getElementById(countId);

  if (!items.length) {
    container.innerHTML = '';
    if (noRes)   noRes.classList.add('show');
    if (countEl) countEl.textContent = '0 titles';
  } else {
    container.innerHTML = items.map(cardHTML).join('');
    if (noRes)   noRes.classList.remove('show');
    if (countEl) countEl.textContent = `${items.length} titles`;
  }
}

/** Build category pill buttons */
function buildCategoryPills(containerId, activeFilter, onclickFn) {
  const el = document.getElementById(containerId);
  el.innerHTML = CATEGORIES.map(c => `
    <button class="cat-btn${c === activeFilter ? ' active' : ''}"
            onclick="${onclickFn}('${c}')">
      ${CAT_EMOJI[c]} ${c}
    </button>`
  ).join('');
}

// ════════════════════════════════════════════
// FILTERING
// ════════════════════════════════════════════
function filtered(arr, cat, q) {
  return arr.filter(item => {
    const catMatch = cat === 'All' || item.category.includes(cat);
    const qMatch   = !q || item.title.toLowerCase().includes(q.toLowerCase());
    return catMatch && qMatch;
  });
}

// ════════════════════════════════════════════
// MY PICKS RENDERER
// ════════════════════════════════════════════
function renderMyPicks() {
  const myMovies = MY_MOVIE_PICKS
    .map(id => MOVIES.find(m => m.id === id))
    .filter(Boolean);

  const mySeries = MY_SERIES_PICKS
    .map(id => SERIES.find(s => s.id === id))
    .filter(Boolean);

  const movieRow  = document.getElementById('picks-movies-row');
  const seriesRow = document.getElementById('picks-series-row');

  if (movieRow)  movieRow.innerHTML  = myMovies.map(cardHTML).join('');
  if (seriesRow) seriesRow.innerHTML = mySeries.map(cardHTML).join('');
}

// ════════════════════════════════════════════
// PAGE RENDERERS
// ════════════════════════════════════════════
function renderHome() {
  // Build mood category tiles
  const tileGrid = document.getElementById('home-cat-grid');
  tileGrid.innerHTML = CATEGORIES.map(c => `
    <div class="home-cat-tile" onclick="showPage('movies'); setMovieCat('${c}')">
      <div class="emoji">${CAT_EMOJI[c]}</div>
      <div class="cat-name">${c}</div>
    </div>`
  ).join('');

  // Render My Picks
  renderMyPicks();

  // Show up to 14 featured picks (movies + series combined)
  const all  = [...MOVIES, ...SERIES];
  const feat = filtered(all, 'All', searchQuery).slice(0, 14);
  renderGrid('home-grid', feat, null, 'home-count');
}

function renderMovies() {
  buildCategoryPills('movies-cats', movieFilter, 'setMovieCat');
  const items = filtered(MOVIES, movieFilter, searchQuery);
  renderGrid('movies-grid', items, 'movies-no', 'movies-count');
}

function renderSeries() {
  buildCategoryPills('series-cats', seriesFilter, 'setSeriesCat');
  const items = filtered(SERIES, seriesFilter, searchQuery);
  renderGrid('series-grid', items, 'series-no', 'series-count');
}

// ════════════════════════════════════════════
// CATEGORY SETTERS (called from inline HTML)
// ════════════════════════════════════════════
function setMovieCat(cat) {
  movieFilter = cat;
  renderMovies();
}

function setSeriesCat(cat) {
  seriesFilter = cat;
  renderSeries();
}

// ════════════════════════════════════════════
// SEARCH
// ════════════════════════════════════════════
function onSearch(val) {
  searchQuery = val;
  if      (currentPage === 'home')   renderHome();
  else if (currentPage === 'movies') renderMovies();
  else if (currentPage === 'series') renderSeries();
}

// ════════════════════════════════════════════
// NAVIGATION
// ════════════════════════════════════════════
function showPage(page) {
  currentPage = page;

  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.querySelectorAll('.nav-links a').forEach(a => a.classList.remove('active'));

  document.getElementById('page-' + page).classList.add('active');
  document.getElementById('nav-'  + page).classList.add('active');

  document.getElementById('searchInput').value = '';
  searchQuery = '';

  window.scrollTo({ top: 0, behavior: 'smooth' });

  if      (page === 'home')   renderHome();
  else if (page === 'movies') renderMovies();
  else if (page === 'series') renderSeries();
  else if (page === 'quiz')   initQuiz();
}

// ════════════════════════════════════════════
// NAVBAR SCROLL EFFECT
// ════════════════════════════════════════════
window.addEventListener('scroll', () => {
  document.getElementById('navbar')
    .classList.toggle('scrolled', window.scrollY > 20);
});

// ════════════════════════════════════════════
// INIT
// ════════════════════════════════════════════
renderHome();


// ════════════════════════════════════════════════════════════════
//  QUIZ FEATURE  — ID-based precision matching
//
//  How it works:
//  Each answer votes directly for specific movie/series IDs.
//  After 7 questions the IDs with the most votes win.
//  Result shows only the TOP 1-2 titles — laser precise.
// ════════════════════════════════════════════════════════════════

// ── QUESTIONS ──────────────────────────────────────────────────
// ids: array of movie/series IDs that this answer votes for.
// Each vote adds 1 point to that ID's total score.
// ───────────────────────────────────────────────────────────────
const QUIZ_QUESTIONS = [

  // Q1 — Vibe check
  {
    question: "What's the vibe tonight?",
    options: [
      { emoji: "💥", label: "Action & adrenaline",      ids: [1, 3, 5, 7, 19,21,23, 109, 112, 121,135,134,128,125] },
      { emoji: "🧠", label: "Twist my brain",           ids: [2, 15, 6, 13, 29, 17, 128, 124, 136,137] },
      { emoji: "😂", label: "Just laughs & chill",      ids: [7, 16, 25,26,30,31, 114, 115, 116, 117, 120] },
      { emoji: "💕", label: "Warm & feel-good",         ids: [8, 18, 20,41,35,31,30, 118, 119] },
    ]
  },

  // Q2 — Genre sweet spot
  {
    question: "What pulls you in the most?",
    options: [
      { emoji: "🕵️", label: "Mystery & dark secrets",  ids: [6, 9, 13, 15, 17, 24, 106, 110,136] },
      { emoji: "⚡", label: "Superheroes & fantasy",    ids: [1, 5, 7, 11, 12, 103,102,106,112,113, 105, 108, 113] },
      { emoji: "😱", label: "Horror & suspense",        ids: [27, 28, 102, 107, 122, 123,136,124,137] },
      { emoji: "🎭", label: "Real people, real drama",  ids: [8, 14, 18, 20, 22, 109, 114, 119,125,130,132,131,134,135,136] },
    ]
  },

  // Q3 — Format
  {
    question: "Movie or series?",
    options: [
      { emoji: "🎬", label: "Movie — one and done",          ids: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42] },
      { emoji: "📺", label: "Series — I want more episodes", ids: [101,102,103,104,105,106,107,108,109,110,111,112,113,114,115,116,117,118,119,120,121,122,123,124,125,126,127,127,128,129,130,131,132,133,134,135,136,137,138,139,140,141,142]},
    ]
  },

  // Q4 — Ending feeling
  {
    question: "How should it leave you feeling?",
    options: [
      { emoji: "🤯", label: "Mind blown",          ids: [2, 15, 23, 6, 13, 29, 17, 128, 136] },
      { emoji: "😤", label: "Pumped & hyped",      ids: [1, 3, 5, 7, 11, 109, 112, 121] },
      { emoji: "🥹", label: "Happy & warm",        ids: [8,138,133,132,130,121, 18, 20,41,35,31, 114, 115, 116, 117, 120] },
      { emoji: "😰", label: "Unsettled & haunted", ids: [15, 17,23, 24, 27, 28,29, 107, 122, 123,136,137] },
    ]
  },

];

// ── QUIZ STATE ──────────────────────────────────────────────────
let quizStep    = 0;
let quizAnswers = [];

// ── INIT QUIZ ───────────────────────────────────────────────────
function initQuiz() {
  quizStep    = 0;
  quizAnswers = new Array(QUIZ_QUESTIONS.length).fill(null);

  document.getElementById('quiz-screen').style.display  = 'flex';
  document.getElementById('quiz-results').style.display = 'none';

  renderQuizStep();
}

// ── RENDER CURRENT QUESTION ──────────────────────────────────────
function renderQuizStep() {
  const q        = QUIZ_QUESTIONS[quizStep];
  const total    = QUIZ_QUESTIONS.length;
  const progress = ((quizStep + 1) / total) * 100;

  document.getElementById('quiz-progress-bar').style.width = progress + '%';
  document.getElementById('quiz-step-label').textContent   =
    `Question ${quizStep + 1} of ${total}`;

  document.getElementById('quiz-question').textContent = q.question;

  const optContainer = document.getElementById('quiz-options');
  optContainer.innerHTML = q.options.map((opt, i) => `
    <button
      class="quiz-option ${quizAnswers[quizStep] === i ? 'selected' : ''}"
      onclick="selectOption(${i})">
      <span class="opt-emoji">${opt.emoji}</span>
      <span>${opt.label}</span>
    </button>`
  ).join('');

  const backBtn = document.getElementById('quiz-back');
  backBtn.style.visibility = quizStep === 0 ? 'hidden' : 'visible';

  const nextBtn = document.getElementById('quiz-next');
  nextBtn.textContent = quizStep === total - 1 ? 'See My Match ✨' : 'Next →';
  nextBtn.disabled    = quizAnswers[quizStep] === null;
}

// ── SELECT AN OPTION ────────────────────────────────────────────
function selectOption(index) {
  quizAnswers[quizStep] = index;
  renderQuizStep();
}

// ── NEXT BUTTON ─────────────────────────────────────────────────
function quizNext() {
  if (quizAnswers[quizStep] === null) return;

  if (quizStep < QUIZ_QUESTIONS.length - 1) {
    quizStep++;
    renderQuizStep();
  } else {
    showQuizResults();
  }
}

// ── BACK BUTTON ─────────────────────────────────────────────────
function quizBack() {
  if (quizStep > 0) {
    quizStep--;
    renderQuizStep();
  }
}

// ── CALCULATE & SHOW RESULTS ────────────────────────────────────
function showQuizResults() {

  // Tally votes per ID
  const scores = {};

  quizAnswers.forEach((answerIndex, qIndex) => {
    if (answerIndex === null) return;
    const votedIds = QUIZ_QUESTIONS[qIndex].options[answerIndex].ids;
    votedIds.forEach(id => {
      scores[id] = (scores[id] || 0) + 1;
    });
  });

  // Find the highest score achieved
  const maxScore = Math.max(...Object.values(scores), 0);

  // Collect all IDs that tied for the top score
  const topIds = Object.keys(scores)
    .filter(id => scores[id] === maxScore)
    .map(Number);

  // Look up those items from MOVIES + SERIES pool
  const allContent = [...MOVIES, ...SERIES];
  let results = topIds
    .map(id => allContent.find(item => item.id === id))
    .filter(Boolean);

  // Safety: if somehow more than 5 slipped through, keep only 5
  if (results.length > 5) {
    results = results.slice(0, 5);
  }

  // Build result message based on what type came out on top
  const hasMovie  = results.some(r => MOVIES.find(m => m.id === r.id));
  const hasSeries = results.some(r => SERIES.find(s => s.id === r.id));
  const typeLabel = hasMovie && hasSeries ? 'a movie & a series' :
                    hasMovie  ? 'a movie' : 'a series';

  const resultMessages = [
    "Your answers pointed to exactly this. Trust the algorithm. 🎯",
    "Out of everything on this site — this is the one for you tonight.",
    "Your vibe, your personality, your pick. No debate needed. 🔥",
    "The quiz doesn't lie. This one was made for you.",
  ];
  const msg = resultMessages[Math.floor(Math.random() * resultMessages.length)];

  // Switch screens
  document.getElementById('quiz-screen').style.display  = 'none';
  document.getElementById('quiz-results').style.display = 'block';

  document.getElementById('results-emoji').textContent = results.length === 1 ? '🎯' : '🎬';
  document.getElementById('results-sub').textContent   =
    `We found ${typeLabel} that perfectly matches your answers. ${msg}`;

  // Render result cards (1 or 2 max)
  const grid = document.getElementById('quiz-results-grid');
  const noEl = document.getElementById('quiz-no');

  if (results.length === 0) {
    grid.innerHTML = '';
    noEl.classList.add('show');
  } else {
    grid.innerHTML = results.map(cardHTML).join('');
    noEl.classList.remove('show');

    // Center the cards if only 1 or 2 results
    grid.style.maxWidth       = results.length === 1 ? '240px' : '520px';
    grid.style.margin         = '0 auto';
    grid.style.paddingBottom  = '4rem';
  }

  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// ── RETAKE QUIZ ─────────────────────────────────────────────────
function retakeQuiz() {
  // Reset grid styles before retaking
  const grid = document.getElementById('quiz-results-grid');
  grid.style.maxWidth  = '';
  grid.style.margin    = '';
  initQuiz();
}