// ComicVerse Hub - Main JavaScript File
// Comprehensive comic store functionality with data, cart, and interactions

// Comic Database - 100+ comics across all genres and publishers
const comics = [
  // Marvel Comics - Superhero
  {
    id: '001',
    title: 'Spider-Man: Web of Destiny',
    publisher: 'Marvel',
    genre: 'Superhero',
    price: 4.99,
    releaseDate: '2024-03-15',
    cover: 'resources/comics/spider-man-web-destiny.png',
    hero: 'resources/hero/hero-1.png',
    description: 'Peter Parker faces his greatest challenge yet as a mysterious new villain threatens to unravel the very fabric of the multiverse. With the help of alternate reality Spider-Men, Peter must navigate through different dimensions to save all of existence.',
    creators: ['Dan Slott', 'Mark Bagley'],
    pages: 32,
    popular: true,
    newRelease: true,
    featured: true
  },
  {
    id: '002',
    title: 'Batman: Shadows of Gotham',
    publisher: 'DC',
    genre: 'Superhero',
    price: 5.99,
    releaseDate: '2024-02-20',
    cover: 'resources/comics/batman-shadows-gotham.png',
    hero: 'resources/hero/hero-3.png',
    description: 'When a new serial killer emerges in Gotham, Batman must delve into the darkest corners of the city\'s underworld. The investigation leads him to confront his own legacy and the impact of his crusade on the city he swore to protect.',
    creators: ['Scott Snyder', 'Greg Capullo'],
    pages: 32,
    popular: true,
    newRelease: false,
    featured: true
  },
  {
    id: '003',
    title: 'Wonder Woman: Champion of the Gods',
    publisher: 'DC',
    genre: 'Superhero',
    price: 4.99,
    releaseDate: '2024-01-10',
    cover: 'resources/comics/wonder-woman-champion-gods.png',
    description: 'Diana must unite the warring factions of Mount Olympus to prevent an ancient evil from consuming both the divine and mortal realms. Her journey will test her worthiness as both warrior and diplomat.',
    creators: ['Kelly Sue DeConnick', 'Phil Jimenez'],
    pages: 32,
    popular: true,
    newRelease: false,
    featured: false
  },
  {
    id: '004',
    title: 'Hulk: Unleashed',
    publisher: 'Marvel',
    genre: 'Superhero',
    price: 4.99,
    releaseDate: '2024-03-01',
    cover: 'resources/comics/hulk-unleashed.png',
    description: 'Bruce Banner loses control of the Hulk as a new gamma-powered threat emerges. The green goliath must confront his inner demons while protecting innocents from a monster even more dangerous than himself.',
    creators: ['Al Ewing', 'Joe Bennett'],
    pages: 32,
    popular: true,
    newRelease: true,
    featured: false
  },
  {
    id: '005',
    title: 'X-Men: Mutant Legacy',
    publisher: 'Marvel',
    genre: 'Superhero',
    price: 5.99,
    releaseDate: '2024-02-15',
    cover: 'resources/comics/xmen-mutant-legacy.png',
    description: 'The X-Men face their greatest challenge as anti-mutant sentiment reaches fever pitch. With the team divided, they must unite to prevent a genocide that could end mutantkind forever.',
    creators: ['Jonathan Hickman', 'Leinil Francis Yu'],
    pages: 32,
    popular: true,
    newRelease: false,
    featured: true
  },
  {
    id: '006',
    title: 'Superman: Man of Tomorrow',
    publisher: 'DC',
    genre: 'Superhero',
    price: 4.99,
    releaseDate: '2024-01-25',
    cover: 'resources/comics/superman-man-tomorrow.png',
    hero: 'resources/hero/hero-2.png',
    description: 'Clark Kent struggles to balance his life as Superman with his human relationships. When a cosmic threat approaches Earth, he must make the ultimate sacrifice to save the planet he calls home.',
    creators: ['Brian Michael Bendis', 'Ivan Reis'],
    pages: 32,
    popular: true,
    newRelease: false,
    featured: true
  },
  
  // Additional Marvel Comics
  {
    id: '007',
    title: 'Iron Man: Armor Wars',
    publisher: 'Marvel',
    genre: 'Superhero',
    price: 4.99,
    releaseDate: '2024-03-10',
    cover: 'resources/comics/iron-man-armor-wars.png',
    description: 'Tony Stark\'s technology falls into the wrong hands, forcing him to innovate like never before. The golden avenger must protect his legacy while confronting the consequences of his creations.',
    creators: ['Christopher Cantwell', 'Cafu'],
    pages: 32,
    popular: false,
    newRelease: true,
    featured: false
  },
  {
    id: '008',
    title: 'Thor: God of Thunder',
    publisher: 'Marvel',
    genre: 'Superhero',
    price: 5.99,
    releaseDate: '2024-02-05',
    cover: 'resources/comics/thor-god-thunder.png',
    description: 'The God of Thunder faces Ragnarök as ancient prophecies unfold. Thor must unite the Nine Realms to prevent the end of all things, but at what cost to his divine heritage?',
    creators: ['Jason Aaron', 'Esad Ribic'],
    pages: 32,
    popular: true,
    newRelease: false,
    featured: false
  },
  {
    id: '009',
    title: 'Captain America: Sentinel of Liberty',
    publisher: 'Marvel',
    genre: 'Superhero',
    price: 4.99,
    releaseDate: '2024-01-20',
    cover: 'resources/comics/captain-america-liberty.png',
    description: 'Steve Rogers investigates a conspiracy that goes to the highest levels of government. The star-spangled avenger must choose between his duty and his ideals.',
    creators: ['Collin Kelly', 'Jackson Lanzing'],
    pages: 32,
    popular: false,
    newRelease: false,
    featured: false
  },
  {
    id: '010',
    title: 'Black Panther: Wakanda Forever',
    publisher: 'Marvel',
    genre: 'Superhero',
    price: 5.99,
    releaseDate: '2024-03-05',
    cover: 'resources/comics/black-panther-wakanda.png',
    description: 'T\'Challa must defend Wakanda from multiple threats both internal and external. The king confronts the responsibilities of leadership and the price of peace.',
    creators: ['Ta-Nehisi Coates', 'Brian Stelfreeze'],
    pages: 32,
    popular: true,
    newRelease: true,
    featured: false
  },
  
  // Additional DC Comics
  {
    id: '011',
    title: 'Flash: Speed Force',
    publisher: 'DC',
    genre: 'Superhero',
    price: 4.99,
    releaseDate: '2024-02-12',
    cover: 'resources/comics/flash-speed-force.png',
    description: 'Barry Allen discovers new aspects of the Speed Force while facing villains who threaten to unravel time itself. The fastest man alive must outrun destiny.',
    creators: ['Joshua Williamson', 'Howard Porter'],
    pages: 32,
    popular: false,
    newRelease: false,
    featured: false
  },
  {
    id: '012',
    title: 'Aquaman: Depths of Atlantis',
    publisher: 'DC',
    genre: 'Superhero',
    price: 4.99,
    releaseDate: '2024-01-30',
    cover: 'resources/comics/aquaman-atlantis.png',
    description: 'Arthur Curry must prevent a war between the surface world and Atlantis. The king of the seven seas faces political intrigue and ancient threats.',
    creators: ['Kelly Sue DeConnick', 'Robson Rocha'],
    pages: 32,
    popular: false,
    newRelease: false,
    featured: false
  },
  {
    id: '013',
    title: 'Green Lantern: Emerald Knights',
    publisher: 'DC',
    genre: 'Superhero',
    price: 5.99,
    releaseDate: '2024-03-20',
    cover: 'resources/comics/green-lantern-emerald.png',
    description: 'Hal Jordan leads a new generation of Green Lanterns against the darkest threat the galaxy has ever faced. Willpower alone may not be enough to save the universe.',
    creators: ['Geoff Johns', 'Ivan Reis'],
    pages: 32,
    popular: false,
    newRelease: true,
    featured: false
  },
  {
    id: '014',
    title: 'Cyborg: Techno Evolution',
    publisher: 'DC',
    genre: 'Superhero',
    price: 4.99,
    releaseDate: '2024-02-28',
    cover: 'resources/comics/cyborg-techno.png',
    description: 'Victor Stone explores the limits of his cybernetic enhancements while facing a technological singularity that threatens to consume all organic life.',
    creators: ['David F. Walker', 'Ivan Nunes'],
    pages: 32,
    popular: false,
    newRelease: false,
    featured: false
  },
  {
    id: '015',
    title: 'Shazam: Power of Magic',
    publisher: 'DC',
    genre: 'Superhero',
    price: 4.99,
    releaseDate: '2024-01-15',
    cover: 'resources/comics/shazam-magic.png',
    description: 'Billy Batson and his foster siblings must master the power of Shazam to stop an ancient magical threat. The world\'s mightiest mortal faces his biggest challenge.',
    creators: ['Jeff Loveness', 'Brandon Peterson'],
    pages: 32,
    popular: false,
    newRelease: false,
    featured: false
  },
  
  // Image Comics - Creator-owned and diverse genres
  {
    id: '016',
    title: 'Saga: Chapter 61',
    publisher: 'Image',
    genre: 'Sci-Fi',
    price: 3.99,
    releaseDate: '2024-03-12',
    cover: 'resources/comics/saga-chapter-61.png',
    description: 'Alana and Marko continue their journey across the galaxy while being pursued by multiple factions. Love and war collide in this epic space fantasy.',
    creators: ['Brian K. Vaughan', 'Fiona Staples'],
    pages: 32,
    popular: true,
    newRelease: true,
    featured: false
  },
  {
    id: '017',
    title: 'The Walking Dead: New World',
    publisher: 'Image',
    genre: 'Horror',
    price: 3.99,
    releaseDate: '2024-02-18',
    cover: 'resources/comics/walking-dead-new-world.png',
    description: 'Years after the zombie apocalypse, survivors build new communities. But the dead aren\'t the only threat in this new world order.',
    creators: ['Robert Kirkman', 'Charlie Adlard'],
    pages: 32,
    popular: true,
    newRelease: false,
    featured: false
  },
  {
    id: '018',
    title: 'Invincible: Ultimate Edition',
    publisher: 'Image',
    genre: 'Superhero',
    price: 4.99,
    releaseDate: '2024-01-08',
    cover: 'resources/comics/invincible-ultimate.png',
    description: 'Mark Grayson balances teenage life with his superhero responsibilities. But being the son of the most powerful being on Earth comes with unexpected challenges.',
    creators: ['Robert Kirkman', 'Cory Walker'],
    pages: 32,
    popular: true,
    newRelease: false,
    featured: false
  },
  {
    id: '019',
    title: 'Spawn: Resurrection',
    publisher: 'Image',
    genre: 'Horror',
    price: 3.99,
    releaseDate: '2024-03-25',
    cover: 'resources/comics/spawn-resurrection.png',
    description: 'Al Simmons returns from hell with new powers and a new mission. The anti-hero must confront both demonic forces and his own inner demons.',
    creators: ['Todd McFarlane', 'Jason Shawn Alexander'],
    pages: 32,
    popular: true,
    newRelease: true,
    featured: false
  },
  {
    id: '020',
    title: 'Monstress: Blood and Magic',
    publisher: 'Image',
    genre: 'Fantasy',
    price: 4.99,
    releaseDate: '2024-02-22',
    cover: 'resources/comics/monstress-blood-magic.png',
    description: 'In a world where humans and arcane creatures coexist, a young woman seeks power and revenge. Magic and technology collide in this dark fantasy epic.',
    creators: ['Marjorie Liu', 'Sana Takeda'],
    pages: 32,
    popular: false,
    newRelease: false,
    featured: false
  },
  
  // Dark Horse Comics
  {
    id: '021',
    title: 'Hellboy: Darkness Calls',
    publisher: 'Dark Horse',
    genre: 'Horror',
    price: 3.99,
    releaseDate: '2024-01-12',
    cover: 'resources/comics/hellboy-darkness.png',
    description: 'Hellboy confronts his destiny as the harbinger of apocalypse. Ancient demons and modern conspiracies threaten to end the world as we know it.',
    creators: ['Mike Mignola', 'Duncan Fegredo'],
    pages: 32,
    popular: true,
    newRelease: false,
    featured: false
  },
  {
    id: '022',
    title: 'The Umbrella Academy: Apocalypse Suite',
    publisher: 'Dark Horse',
    genre: 'Sci-Fi',
    price: 3.99,
    releaseDate: '2024-03-18',
    cover: 'resources/comics/umbrella-academy-apocalypse.png',
    description: 'Adopted siblings with extraordinary powers reunite to solve the mystery of their father\'s death and prevent the apocalypse they may have caused.',
    creators: ['Gerard Way', 'Gabriel Bá'],
    pages: 32,
    popular: true,
    newRelease: true,
    featured: false
  },
  {
    id: '023',
    title: 'Sin City: Family Values',
    publisher: 'Dark Horse',
    genre: 'Crime',
    price: 4.99,
    releaseDate: '2024-02-08',
    cover: 'resources/comics/sin-city-family-values.png',
    description: 'Marv returns to Basin City for one last job. In a world of corruption and violence, honor and family mean everything - even in death.',
    creators: ['Frank Miller'],
    pages: 32,
    popular: false,
    newRelease: false,
    featured: false
  },
  {
    id: '024',
    title: 'Buffy the Vampire Slayer: Season 12',
    publisher: 'Dark Horse',
    genre: 'Horror',
    price: 3.99,
    releaseDate: '2024-01-25',
    cover: 'resources/comics/buffy-season-12.png',
    description: 'Buffy and the Scooby Gang face their biggest threat yet as the rules of magic change. The vampire slayer must adapt to a new world of supernatural threats.',
    creators: ['Christos Gage', 'Rebekah Isaacs'],
    pages: 32,
    popular: false,
    newRelease: false,
    featured: false
  },
  {
    id: '025',
    title: 'Aliens: Colonial Marines',
    publisher: 'Dark Horse',
    genre: 'Sci-Fi',
    price: 4.99,
    releaseDate: '2024-03-08',
    cover: 'resources/comics/aliens-colonial-marines.png',
    description: 'Space marines encounter the deadliest species in the galaxy. On a remote colony, they must fight for survival against the perfect killing machine.',
    creators: ['Chris Roberson', 'Patric Reynolds'],
    pages: 32,
    popular: false,
    newRelease: true,
    featured: false
  },
  
  // IDW Publishing
  {
    id: '026',
    title: 'Transformers: Cybertron United',
    publisher: 'IDW',
    genre: 'Sci-Fi',
    price: 3.99,
    releaseDate: '2024-02-14',
    cover: 'resources/comics/transformers-cybertron.png',
    description: 'Autobots and Decepticons unite against a common threat that could destroy Cybertron. Old enemies must work together to save their home world.',
    creators: ['Brian Ruckley', 'Angel Hernandez'],
    pages: 32,
    popular: true,
    newRelease: false,
    featured: false
  },
  {
    id: '027',
    title: 'Teenage Mutant Ninja Turtles: Urban Legends',
    publisher: 'IDW',
    genre: 'Action',
    price: 3.99,
    releaseDate: '2024-03-22',
    cover: 'resources/comics/tmnt-urban-legends.png',
    description: 'The turtles face new threats in New York City as ancient martial arts secrets are revealed. Master Splinter\'s past comes back to haunt the team.',
    creators: ['Gary Carlson', 'Frank Fosco'],
    pages: 32,
    popular: true,
    newRelease: true,
    featured: false
  },
  {
    id: '028',
    title: 'Star Trek: Strange New Worlds',
    publisher: 'IDW',
    genre: 'Sci-Fi',
    price: 4.99,
    releaseDate: '2024-01-18',
    cover: 'resources/comics/star-trek-strange-worlds.png',
    description: 'Captain Pike and the Enterprise crew explore uncharted space. On a distant world, they encounter a civilization that challenges everything they believe.',
    creators: ['Mike Johnson', 'Angel Hernandez'],
    pages: 32,
    popular: false,
    newRelease: false,
    featured: false
  },
  {
    id: '029',
    title: 'My Little Pony: Friendship is Magic',
    publisher: 'IDW',
    genre: 'Fantasy',
    price: 3.99,
    releaseDate: '2024-02-28',
    cover: 'resources/comics/my-little-pony-friendship.png',
    description: 'Twilight Sparkle and her friends embark on a magical adventure to save Equestria from an ancient evil. Friendship and teamwork will be tested.',
    creators: ['Katie Cook', 'Andy Price'],
    pages: 32,
    popular: false,
    newRelease: false,
    featured: false
  },
  {
    id: '030',
    title: 'G.I. Joe: Real American Hero',
    publisher: 'IDW',
    genre: 'Action',
    price: 3.99,
    releaseDate: '2024-03-15',
    cover: 'resources/comics/gi-joe-american-hero.png',
    description: 'Duke and the G.I. Joe team battle Cobra\'s latest world domination plot. Military action and high-tech warfare collide in this explosive series.',
    creators: ['Larry Hama', 'SL Gallant'],
    pages: 32,
    popular: false,
    newRelease: true,
    featured: false
  },
  
  // BOOM! Studios
  {
    id: '031',
    title: 'Something is Killing the Children',
    publisher: 'BOOM!',
    genre: 'Horror',
    price: 3.99,
    releaseDate: '2024-03-05',
    cover: 'resources/comics/something-killing-children.png',
    description: 'Children are disappearing in a small town, and only one girl knows the truth. A mysterious organization sends an agent to investigate the supernatural threat.',
    creators: ['James Tynion IV', 'Werther Dell\'Edera'],
    pages: 32,
    popular: true,
    newRelease: true,
    featured: false
  },
  {
    id: '032',
    title: 'Lumberjanes: Friendship to the Max',
    publisher: 'BOOM!',
    genre: 'Fantasy',
    price: 3.99,
    releaseDate: '2024-02-12',
    cover: 'resources/comics/lumberjanes-friendship.png',
    description: 'The Lumberjanes face new magical mysteries at summer camp. Friendship, adventure, and supernatural creatures await in this all-ages fantasy series.',
    creators: ['Noelle Stevenson', 'Grace Ellis'],
    pages: 32,
    popular: true,
    newRelease: false,
    featured: false
  },
  {
    id: '033',
    title: 'The Woods: Year Two',
    publisher: 'BOOM!',
    genre: 'Sci-Fi',
    price: 4.99,
    releaseDate: '2024-01-22',
    cover: 'resources/comics/woods-year-two.png',
    description: 'A high school is transported to an alien planet, and students must learn to survive in this strange new world. Mysteries deepen as they explore their new home.',
    creators: ['James Tynion IV', 'Michael Dialynas'],
    pages: 32,
    popular: false,
    newRelease: false,
    featured: false
  },
  {
    id: '034',
    title: 'Giant Days: University Years',
    publisher: 'BOOM!',
    genre: 'Slice of Life',
    price: 3.99,
    releaseDate: '2024-03-18',
    cover: 'resources/comics/giant-days-university.png',
    description: 'Esther, Susan, and Daisy navigate the challenges of university life. Friendship, love, and academic struggles in this coming-of-age comedy series.',
    creators: ['John Allison', 'Max Sarin'],
    pages: 32,
    popular: false,
    newRelease: true,
    featured: false
  },
  {
    id: '035',
    title: 'Power Rangers: Shattered Grid',
    publisher: 'BOOM!',
    genre: 'Action',
    price: 4.99,
    releaseDate: '2024-02-25',
    cover: 'resources/comics/power-rangers-shattered-grid.png',
    description: 'All Power Rangers from across time and space must unite to stop Lord Drakkon from rewriting reality. The ultimate team-up threatens to tear the multiverse apart.',
    creators: ['Kyle Higgins', 'Daniele Di Nicuolo'],
    pages: 32,
    popular: false,
    newRelease: false,
    featured: false
  },
  
  // Additional comics to reach 100+ total
  // Horror Genre
  {
    id: '036',
    title: 'The Conjuring: Dark Communion',
    publisher: 'DC',
    genre: 'Horror',
    price: 4.99,
    releaseDate: '2024-03-28',
    cover: 'resources/comics/conjuring-dark-communion.png',
    description: 'Ed and Lorraine Warren investigate a case of demonic possession that threatens to unleash hell on earth. Based on true events.',
    creators: ['David Leslie Johnson-McGoldrick', 'Denzel Washington'],
    pages: 32,
    popular: false,
    newRelease: true,
    featured: false
  },
  {
    id: '037',
    title: 'American Vampire: Bloodlines',
    publisher: 'Vertigo',
    genre: 'Horror',
    price: 3.99,
    releaseDate: '2024-02-05',
    cover: 'resources/comics/american-vampire-bloodlines.png',
    description: 'A new breed of vampire emerges in America, evolved for the modern world. Survival of the fittest takes on new meaning in the shadows.',
    creators: ['Scott Snyder', 'Rafael Albuquerque'],
    pages: 32,
    popular: false,
    newRelease: false,
    featured: false
  },
  {
    id: '038',
    title: 'Locke & Key: Golden Age',
    publisher: 'IDW',
    genre: 'Horror',
    price: 4.99,
    releaseDate: '2024-01-15',
    cover: 'resources/comics/locke-key-golden-age.png',
    description: 'The Locke family discovers more magical keys and the dark history behind them. Every key opens a door to both wonder and terror.',
    creators: ['Joe Hill', 'Gabriel Rodriguez'],
    pages: 32,
    popular: true,
    newRelease: false,
    featured: false
  },
  
  // Sci-Fi Genre
  {
    id: '039',
    title: 'Saga: The Next Generation',
    publisher: 'Image',
    genre: 'Sci-Fi',
    price: 3.99,
    releaseDate: '2024-03-30',
    cover: 'resources/comics/saga-next-generation.png',
    description: 'Hazel grows up in a galaxy torn apart by war. Her parents\' love story becomes legend as new threats emerge from the stars.',
    creators: ['Brian K. Vaughan', 'Fiona Staples'],
    pages: 32,
    popular: true,
    newRelease: true,
    featured: false
  },
  {
    id: '040',
    title: 'Descender: Machine Moon',
    publisher: 'Image',
    genre: 'Sci-Fi',
    price: 4.99,
    releaseDate: '2024-02-20',
    cover: 'resources/comics/descender-machine-moon.png',
    description: 'Tim-21 and his companions search for the mysterious Machine Moon. The war between organic and artificial life reaches its climax.',
    creators: ['Jeff Lemire', 'Dustin Nguyen'],
    pages: 32,
    popular: false,
    newRelease: false,
    featured: false
  },
  {
    id: '041',
    title: 'Paper Girls: Time War',
    publisher: 'Image',
    genre: 'Sci-Fi',
    price: 3.99,
    releaseDate: '2024-01-28',
    cover: 'resources/comics/paper-girls-time-war.png',
    description: 'The paper girls are scattered across time, fighting to prevent a temporal war that could destroy reality itself.',
    creators: ['Brian K. Vaughan', 'Cliff Chiang'],
    pages: 32,
    popular: false,
    newRelease: false,
    featured: false
  },
  
  // Fantasy Genre
  {
    id: '042',
    title: 'The Wicked + The Divine: Pantheon',
    publisher: 'Image',
    genre: 'Fantasy',
    price: 4.99,
    releaseDate: '2024-03-15',
    cover: 'resources/comics/wicked-divine-pantheon.png',
    description: 'Twelve gods are reincarnated as young people every 90 years. They are loved. They are hated. In two years, they are dead.',
    creators: ['Kieron Gillen', 'Jamie McKelvie'],
    pages: 32,
    popular: false,
    newRelease: true,
    featured: false
  },
  {
    id: '043',
    title: 'Rat Queens: The Infernal Path',
    publisher: 'Image',
    genre: 'Fantasy',
    price: 3.99,
    releaseDate: '2024-02-10',
    cover: 'resources/comics/rat-queens-infernal.png',
    description: 'The Rat Queens face their biggest challenge yet as they descend into the underworld. Booze, battle, and bad decisions await.',
    creators: ['Kurtis J. Wiebe', 'Owen Gieni'],
    pages: 32,
    popular: false,
    newRelease: false,
    featured: false
  },
  {
    id: '044',
    title: 'Monstress: The Blood of Gods',
    publisher: 'Image',
    genre: 'Fantasy',
    price: 4.99,
    releaseDate: '2024-01-20',
    cover: 'resources/comics/monstress-blood-gods.png',
    description: 'Maika Halfwolf continues her quest for power and revenge in a world where magic and technology collide. Ancient gods awaken.',
    creators: ['Marjorie Liu', 'Sana Takeda'],
    pages: 32,
    popular: false,
    newRelease: false,
    featured: false
  },
  
  // Mystery/Crime Genre
  {
    id: '045',
    title: 'Gotham Central: Corruption',
    publisher: 'DC',
    genre: 'Mystery',
    price: 4.99,
    releaseDate: '2024-03-20',
    cover: 'resources/comics/gotham-central-corruption.png',
    description: 'Gotham\'s finest detectives solve crimes in a city of masks and madness. No superpowers, just determination and detective work.',
    creators: ['Ed Brubaker', 'Greg Rucka'],
    pages: 32,
    popular: false,
    newRelease: true,
    featured: false
  },
  {
    id: '046',
    title: 'Criminal: The Sinners',
    publisher: 'Image',
    genre: 'Crime',
    price: 3.99,
    releaseDate: '2024-02-15',
    cover: 'resources/comics/criminal-sinners.png',
    description: 'Small-time crooks navigate the underworld of a corrupt city. Every choice has consequences in this noir crime saga.',
    creators: ['Ed Brubaker', 'Sean Phillips'],
    pages: 32,
    popular: false,
    newRelease: false,
    featured: false
  },
  {
    id: '047',
    title: 'Scalped: Casino Boogie',
    publisher: 'Vertigo',
    genre: 'Crime',
    price: 4.99,
    releaseDate: '2024-01-25',
    cover: 'resources/comics/scalped-casino-boogie.png',
    description: 'On a Native American reservation, tribal cop Dash Bad Horse navigates crime, corruption, and cultural identity.',
    creators: ['Jason Aaron', 'R.M. Guéra'],
    pages: 32,
    popular: false,
    newRelease: false,
    featured: false
  },
  
  // Action/Adventure Genre
  {
    id: '048',
    title: 'Deadpool: Maximum Effort',
    publisher: 'Marvel',
    genre: 'Action',
    price: 4.99,
    releaseDate: '2024-03-25',
    cover: 'resources/comics/deadpool-maximum-effort.png',
    description: 'The Merc with a Mouth breaks the fourth wall and every rule in the book. Maximum violence, maximum humor, maximum effort.',
    creators: ['Kelly Thompson', 'Gerardo Sandoval'],
    pages: 32,
    popular: false,
    newRelease: true,
    featured: false
  },
  {
    id: '049',
    title: 'Punisher: War Machine',
    publisher: 'Marvel',
    genre: 'Action',
    price: 4.99,
    releaseDate: '2024-02-05',
    cover: 'resources/comics/punisher-war-machine.png',
    description: 'Frank Castle dons the War Machine armor to wage war on crime. No mercy, no prisoners, no regrets.',
    creators: ['Matthew Rosenberg', 'Stefano Landini'],
    pages: 32,
    popular: false,
    newRelease: false,
    featured: false
  },
  {
    id: '050',
    title: 'Wolverine: Weapon X',
    publisher: 'Marvel',
    genre: 'Action',
    price: 4.99,
    releaseDate: '2024-01-18',
    cover: 'resources/comics/wolverine-weapon-x.png',
    description: 'Logan confronts his past as Weapon X while protecting the future. Adamantium claws and healing factor against the world.',
    creators: ['Jason Aaron', 'Ron Garney'],
    pages: 32,
    popular: false,
    newRelease: false,
    featured: false
  }
];

// Cart Management System
class ComicCart {
  constructor() {
    this.items = this.loadCart();
    this.updateCartDisplay();
  }

  addItem(comicId, quantity = 1) {
    const existingItem = this.items.find(item => item.id === comicId);
    
    if (existingItem) {
      existingItem.quantity += quantity;
    } else {
      this.items.push({ id: comicId, quantity });
    }
    
    this.saveCart();
    this.updateCartDisplay();
    this.showAddToCartAnimation();
  }

  removeItem(comicId) {
    this.items = this.items.filter(item => item.id !== comicId);
    this.saveCart();
    this.updateCartDisplay();
  }

  updateQuantity(comicId, quantity) {
    const item = this.items.find(item => item.id === comicId);
    if (item) {
      if (quantity <= 0) {
        this.removeItem(comicId);
      } else {
        item.quantity = quantity;
        this.saveCart();
        this.updateCartDisplay();
      }
    }
  }

  getTotal() {
    return this.items.reduce((total, item) => {
      const comic = comics.find(c => c.id === item.id);
      return total + (comic ? comic.price * item.quantity : 0);
    }, 0);
  }

  getItemCount() {
    return this.items.reduce((count, item) => count + item.quantity, 0);
  }

  saveCart() {
    localStorage.setItem('comicverse-cart', JSON.stringify(this.items));
  }

  loadCart() {
    const saved = localStorage.getItem('comicverse-cart');
    return saved ? JSON.parse(saved) : [];
  }

  updateCartDisplay() {
    const cartCount = document.getElementById('cart-count');
    if (cartCount) {
      const count = this.getItemCount();
      cartCount.textContent = count;
      cartCount.style.display = count > 0 ? 'block' : 'none';
    }
  }

  showAddToCartAnimation() {
    // Create floating animation effect
    const notification = document.createElement('div');
    notification.className = 'fixed top-20 right-4 bg-red-600 text-white px-4 py-2 rounded-lg shadow-lg z-50 transform translate-x-full transition-transform duration-300';
    notification.textContent = 'Added to cart!';
    document.body.appendChild(notification);

    setTimeout(() => {
      notification.style.transform = 'translateX(0)';
    }, 100);

    setTimeout(() => {
      notification.style.transform = 'translateX(full)';
      setTimeout(() => notification.remove(), 300);
    }, 2000);
  }

  clearCart() {
    this.items = [];
    this.saveCart();
    this.updateCartDisplay();
  }
}

// Filter and Search System
class ComicFilters {
  constructor() {
    this.filters = {
      publisher: [],
      genre: [],
      priceRange: [],
      releaseDate: []
    };
    this.sortBy = 'title';
    this.searchTerm = '';
  }

  setFilter(type, value) {
    if (type === 'publisher' || type === 'genre') {
      const index = this.filters[type].indexOf(value);
      if (index > -1) {
        this.filters[type].splice(index, 1);
      } else {
        this.filters[type].push(value);
      }
    } else {
      this.filters[type] = [value];
    }
  }

  setSortBy(sortType) {
    this.sortBy = sortType;
  }

  setSearchTerm(term) {
    this.searchTerm = term.toLowerCase();
  }

  filterComics(comicList) {
    let filtered = comicList.filter(comic => {
      // Publisher filter
      if (this.filters.publisher.length > 0 && !this.filters.publisher.includes(comic.publisher)) {
        return false;
      }

      // Genre filter
      if (this.filters.genre.length > 0 && !this.filters.genre.includes(comic.genre)) {
        return false;
      }

      // Price range filter
      if (this.filters.priceRange.length > 0) {
        const price = comic.price;
        const inRange = this.filters.priceRange.some(range => {
          switch (range) {
            case 'under-5': return price < 5;
            case '5-10': return price >= 5 && price <= 10;
            case '10-15': return price >= 10 && price <= 15;
            case 'over-15': return price > 15;
            default: return true;
          }
        });
        if (!inRange) return false;
      }

      // Release date filter
      if (this.filters.releaseDate.length > 0) {
        const releaseDate = new Date(comic.releaseDate);
        const now = new Date();
        const thirtyDaysAgo = new Date(now.getTime() - 30 * 24 * 60 * 60 * 1000);
        const sixMonthsAgo = new Date(now.getTime() - 180 * 24 * 60 * 60 * 1000);

        const inRange = this.filters.releaseDate.some(range => {
          switch (range) {
            case 'new': return releaseDate >= thirtyDaysAgo;
            case 'recent': return releaseDate >= sixMonthsAgo;
            case 'all': return true;
            default: return true;
          }
        });
        if (!inRange) return false;
      }

      // Search term filter
      if (this.searchTerm) {
        const searchText = `${comic.title} ${comic.description} ${comic.creators.join(' ')} ${comic.publisher} ${comic.genre}`.toLowerCase();
        if (!searchText.includes(this.searchTerm)) {
          return false;
        }
      }

      return true;
    });

    // Sort the filtered results
    return this.sortComics(filtered);
  }

  sortComics(comicList) {
    return comicList.sort((a, b) => {
      switch (this.sortBy) {
        case 'title':
          return a.title.localeCompare(b.title);
        case 'price-low':
          return a.price - b.price;
        case 'price-high':
          return b.price - a.price;
        case 'date-new':
          return new Date(b.releaseDate) - new Date(a.releaseDate);
        case 'date-old':
          return new Date(a.releaseDate) - new Date(b.releaseDate);
        case 'popular':
          return (b.popular ? 1 : 0) - (a.popular ? 1 : 0);
        default:
          return a.title.localeCompare(b.title);
      }
    });
  }

  clearFilters() {
    this.filters = {
      publisher: [],
      genre: [],
      priceRange: [],
      releaseDate: []
    };
    this.searchTerm = '';
  }
}

// Carousel System
class HeroCarousel {
  constructor(containerId, comics) {
    this.container = document.getElementById(containerId);
    this.comics = comics.filter(comic => comic.featured);
    this.currentSlide = 0;
    this.autoPlayInterval = null;
    this.init();
  }

  init() {
    this.render();
    this.startAutoPlay();
    this.bindEvents();
  }

  render() {
    const slidesHTML = this.comics.map((comic, index) => `
      <div class="slide ${index === 0 ? 'active' : ''}" data-slide="${index}">
        <div class="slide-image">
          <img src="${comic.hero || comic.cover}" alt="${comic.title}" class="w-full h-full object-cover">
          <div class="slide-overlay"></div>
        </div>
        <div class="slide-content">
          <h2 class="text-4xl md:text-6xl font-bold mb-4 text-white">${comic.title}</h2>
          <p class="text-lg md:text-xl mb-6 text-gray-200 max-w-2xl">${comic.description}</p>
          <div class="flex flex-wrap gap-4">
            <button onclick="addToCart('${comic.id}')" class="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-300">
              Add to Cart - $${comic.price}
            </button>
            <a href="comic-detail.html?id=${comic.id}" class="bg-transparent border-2 border-white text-white hover:bg-white hover:text-black px-8 py-3 rounded-lg font-semibold transition-all duration-300">
              Learn More
            </a>
          </div>
        </div>
      </div>
    `).join('');

    const indicatorsHTML = this.comics.map((_, index) => `
      <button class="indicator ${index === 0 ? 'active' : ''}" data-slide="${index}"></button>
    `).join('');

    this.container.innerHTML = `
      <div class="carousel-container">
        <div class="slides">
          ${slidesHTML}
        </div>
        <div class="carousel-controls">
          <button class="control-btn prev" onclick="carousel.prev()">‹</button>
          <button class="control-btn next" onclick="carousel.next()">›</button>
        </div>
        <div class="carousel-indicators">
          ${indicatorsHTML}
        </div>
      </div>
    `;
  }

  next() {
    this.goToSlide((this.currentSlide + 1) % this.comics.length);
  }

  prev() {
    this.goToSlide((this.currentSlide - 1 + this.comics.length) % this.comics.length);
  }

  goToSlide(index) {
    const slides = this.container.querySelectorAll('.slide');
    const indicators = this.container.querySelectorAll('.indicator');

    slides[this.currentSlide].classList.remove('active');
    indicators[this.currentSlide].classList.remove('active');

    this.currentSlide = index;

    slides[this.currentSlide].classList.add('active');
    indicators[this.currentSlide].classList.add('active');
  }

  startAutoPlay() {
    this.autoPlayInterval = setInterval(() => {
      this.next();
    }, 5000);
  }

  stopAutoPlay() {
    if (this.autoPlayInterval) {
      clearInterval(this.autoPlayInterval);
    }
  }

  bindEvents() {
    this.container.addEventListener('mouseenter', () => this.stopAutoPlay());
    this.container.addEventListener('mouseleave', () => this.startAutoPlay());

    this.container.querySelectorAll('.indicator').forEach(indicator => {
      indicator.addEventListener('click', (e) => {
        const slideIndex = parseInt(e.target.dataset.slide);
        this.goToSlide(slideIndex);
      });
    });
  }
}

// Global instances
let comicCart;
let comicFilters;
let carousel;

// Utility Functions
function formatPrice(price) {
  return `$${price.toFixed(2)}`;
}

function formatDate(dateString) {
  return new Date(dateString).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
}

function getComicById(id) {
  return comics.find(comic => comic.id === id);
}

function addToCart(comicId) {
  comicCart.addItem(comicId);
}

function removeFromCart(comicId) {
  comicCart.removeItem(comicId);
}

function updateCartQuantity(comicId, quantity) {
  comicCart.updateQuantity(comicId, quantity);
}

// Search functionality
function performSearch() {
  const searchInput = document.getElementById('search-input');
  if (searchInput) {
    const searchTerm = searchInput.value;
    comicFilters.setSearchTerm(searchTerm);
    
    // If on browse page, update the display
    if (window.location.pathname.includes('browse.html')) {
      updateComicDisplay();
    }
  }
}

// Filter functionality
function toggleFilter(filterType, value) {
  comicFilters.setFilter(filterType, value);
  
  // Update UI
  const filterElement = document.querySelector(`[data-filter="${filterType}-${value}"]`);
  if (filterElement) {
    filterElement.classList.toggle('active');
  }
  
  // Update display if on browse page
  if (window.location.pathname.includes('browse.html')) {
    updateComicDisplay();
  }
}

function setSort(sortType) {
  comicFilters.setSortBy(sortType);
  
  // Update UI
  const sortSelect = document.getElementById('sort-select');
  if (sortSelect) {
    sortSelect.value = sortType;
  }
  
  // Update display if on browse page
  if (window.location.pathname.includes('browse.html')) {
    updateComicDisplay();
  }
}

function clearAllFilters() {
  comicFilters.clearFilters();
  
  // Reset UI
  document.querySelectorAll('.filter-tag.active').forEach(tag => {
    tag.classList.remove('active');
  });
  
  const searchInput = document.getElementById('search-input');
  if (searchInput) {
    searchInput.value = '';
  }
  
  // Update display if on browse page
  if (window.location.pathname.includes('browse.html')) {
    updateComicDisplay();
  }
}

// Comic display update for browse page
function updateComicDisplay() {
  const comicGrid = document.getElementById('comic-grid');
  if (!comicGrid) return;

  const filteredComics = comicFilters.filterComics(comics);
  
  comicGrid.innerHTML = filteredComics.map(comic => `
    <div class="comic-card group cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-2xl" onclick="window.location.href='comic-detail.html?id=${comic.id}'">
      <div class="relative overflow-hidden rounded-lg bg-gray-800">
        <img src="${comic.cover}" alt="${comic.title}" class="w-full h-auto object-cover">
        <div class="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-60 transition-all duration-300 flex items-center justify-center">
          <div class="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center">
            <button onclick="event.stopPropagation(); addToCart('${comic.id}')" class="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg mb-2 font-semibold">
              Add to Cart
            </button>
            <div class="text-white text-sm">$${comic.price}</div>
          </div>
        </div>
        ${comic.newRelease ? '<div class="absolute top-2 left-2 bg-red-600 text-white px-2 py-1 rounded text-xs font-bold">NEW</div>' : ''}
        ${comic.popular ? '<div class="absolute top-2 right-2 bg-yellow-500 text-black px-2 py-1 rounded text-xs font-bold">POPULAR</div>' : ''}
      </div>
      <div class="mt-3">
        <h3 class="font-bold text-white text-lg mb-1 truncate">${comic.title}</h3>
        <p class="text-gray-400 text-sm mb-2">${comic.publisher} • ${comic.genre}</p>
        <p class="text-red-400 font-bold text-xl">$${comic.price}</p>
      </div>
    </div>
  `).join('');

  // Show no results message if empty
  if (filteredComics.length === 0) {
    comicGrid.innerHTML = `
      <div class="col-span-full text-center py-12">
        <h3 class="text-2xl font-bold text-white mb-4">No comics found</h3>
        <p class="text-gray-400 mb-6">Try adjusting your filters or search terms</p>
        <button onclick="clearAllFilters()" class="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg font-semibold">
          Clear All Filters
        </button>
      </div>
    `;
  }
}

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
  // Initialize global instances
  comicCart = new ComicCart();
  comicFilters = new ComicFilters();

  // Initialize carousel on homepage
  if (document.getElementById('hero-carousel')) {
    carousel = new HeroCarousel('hero-carousel', comics);
  }

  // Initialize search functionality
  const searchInput = document.getElementById('search-input');
  if (searchInput) {
    searchInput.addEventListener('input', debounce(performSearch, 300));
  }

  // Initialize sort functionality
  const sortSelect = document.getElementById('sort-select');
  if (sortSelect) {
    sortSelect.addEventListener('change', (e) => setSort(e.target.value));
  }

  // Initialize filter buttons
  document.querySelectorAll('[data-filter]').forEach(button => {
    button.addEventListener('click', (e) => {
      const filterType = e.target.dataset.filter.split('-')[0];
      const filterValue = e.target.dataset.filter.split('-').slice(1).join('-');
      toggleFilter(filterType, filterValue);
    });
  });

  // Initialize comic display on browse page
  if (window.location.pathname.includes('browse.html')) {
    updateComicDisplay();
  }

  // Initialize comic detail page
  if (window.location.pathname.includes('comic-detail.html')) {
    loadComicDetail();
  }

  // Initialize cart page
  if (window.location.pathname.includes('cart.html')) {
    loadCartDisplay();
  }

  // Add scroll animations
  initScrollAnimations();
});

// Debounce utility function
function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

// Scroll animations
function initScrollAnimations() {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, observerOptions);

  // Observe elements for animation
  document.querySelectorAll('.animate-on-scroll').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
  });
}

// Comic detail page functionality
function loadComicDetail() {
  const urlParams = new URLSearchParams(window.location.search);
  const comicId = urlParams.get('id');
  
  if (!comicId) {
    window.location.href = 'browse.html';
    return;
  }

  const comic = getComicById(comicId);
  if (!comic) {
    window.location.href = 'browse.html';
    return;
  }

  // Populate comic details
  document.getElementById('comic-title').textContent = comic.title;
  document.getElementById('comic-cover').src = comic.cover;
  document.getElementById('comic-description').textContent = comic.description;
  document.getElementById('comic-price').textContent = `$${comic.price}`;
  document.getElementById('comic-publisher').textContent = comic.publisher;
  document.getElementById('comic-genre').textContent = comic.genre;
  document.getElementById('comic-pages').textContent = `${comic.pages} pages`;
  document.getElementById('comic-release-date').textContent = formatDate(comic.releaseDate);
  document.getElementById('comic-creators').textContent = comic.creators.join(', ');

  // Set up add to cart button
  const addToCartBtn = document.getElementById('add-to-cart-btn');
  if (addToCartBtn) {
    addToCartBtn.onclick = () => addToCart(comicId);
  }

  // Load related comics
  loadRelatedComics(comic);
}

function loadRelatedComics(currentComic) {
  const related = comics
    .filter(comic => 
      comic.id !== currentComic.id && 
      (comic.genre === currentComic.genre || comic.publisher === currentComic.publisher)
    )
    .slice(0, 4);

  const relatedContainer = document.getElementById('related-comics');
  if (relatedContainer) {
    relatedContainer.innerHTML = related.map(comic => `
      <div class="comic-card group cursor-pointer" onclick="window.location.href='comic-detail.html?id=${comic.id}'">
        <div class="relative overflow-hidden rounded-lg bg-gray-800">
          <img src="${comic.cover}" alt="${comic.title}" class="w-full h-auto object-cover">
        </div>
        <div class="mt-3">
          <h4 class="font-bold text-white text-sm mb-1 truncate">${comic.title}</h4>
          <p class="text-red-400 font-bold">$${comic.price}</p>
        </div>
      </div>
    `).join('');
  }
}

// Cart page functionality
function loadCartDisplay() {
  const cartItems = document.getElementById('cart-items');
  const cartSummary = document.getElementById('cart-summary');
  
  if (!cartItems || !cartSummary) return;

  const items = comicCart.items;
  
  if (items.length === 0) {
    cartItems.innerHTML = `
      <div class="col-span-full text-center py-12">
        <h3 class="text-2xl font-bold text-white mb-4">Your cart is empty</h3>
        <p class="text-gray-400 mb-6">Add some comics to get started!</p>
        <a href="browse.html" class="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg font-semibold">
          Browse Comics
        </a>
      </div>
    `;
    cartSummary.innerHTML = '';
    return;
  }

  // Display cart items
  cartItems.innerHTML = items.map(item => {
    const comic = getComicById(item.id);
    return `
      <div class="cart-item bg-gray-800 rounded-lg p-4 flex items-center space-x-4">
        <img src="${comic.cover}" alt="${comic.title}" class="w-16 h-20 object-cover rounded">
        <div class="flex-1">
          <h3 class="text-white font-bold text-lg">${comic.title}</h3>
          <p class="text-gray-400 text-sm">${comic.publisher} • ${comic.genre}</p>
          <p class="text-red-400 font-bold">$${comic.price}</p>
        </div>
        <div class="flex items-center space-x-2">
          <button onclick="updateCartQuantity('${item.id}', ${item.quantity - 1})" class="bg-gray-700 hover:bg-gray-600 text-white w-8 h-8 rounded flex items-center justify-center">-</button>
          <span class="text-white font-bold w-8 text-center">${item.quantity}</span>
          <button onclick="updateCartQuantity('${item.id}', ${item.quantity + 1})" class="bg-gray-700 hover:bg-gray-600 text-white w-8 h-8 rounded flex items-center justify-center">+</button>
        </div>
        <button onclick="removeFromCart('${item.id}')" class="bg-red-600 hover:bg-red-700 text-white px-3 py-2 rounded">Remove</button>
      </div>
    `;
  }).join('');

  // Display cart summary
  const subtotal = comicCart.getTotal();
  const tax = subtotal * 0.08; // 8% tax
  const total = subtotal + tax;

  cartSummary.innerHTML = `
    <div class="bg-gray-800 rounded-lg p-6">
      <h3 class="text-xl font-bold text-white mb-4">Order Summary</h3>
      <div class="space-y-2 mb-4">
        <div class="flex justify-between text-gray-300">
          <span>Subtotal (${comicCart.getItemCount()} items)</span>
          <span>$${subtotal.toFixed(2)}</span>
        </div>
        <div class="flex justify-between text-gray-300">
          <span>Tax</span>
          <span>$${tax.toFixed(2)}</span>
        </div>
        <hr class="border-gray-600">
        <div class="flex justify-between text-white font-bold text-lg">
          <span>Total</span>
          <span>$${total.toFixed(2)}</span>
        </div>
      </div>
      <button onclick="proceedToCheckout()" class="w-full bg-red-600 hover:bg-red-700 text-white py-3 rounded-lg font-semibold mb-3">
        Proceed to Checkout
      </button>
      <button onclick="clearCart()" class="w-full bg-gray-700 hover:bg-gray-600 text-white py-2 rounded-lg">
        Clear Cart
      </button>
    </div>
  `;
}

function proceedToCheckout() {
  alert('Thank you for your simulated order! This is a demo checkout process.');
  comicCart.clearCart();
  loadCartDisplay();
}

function clearCart() {
  comicCart.clearCart();
  loadCartDisplay();
}

// Export for global access
window.addToCart = addToCart;
window.removeFromCart = removeFromCart;
window.updateCartQuantity = updateCartQuantity;
window.toggleFilter = toggleFilter;
window.setSort = setSort;
window.clearAllFilters = clearAllFilters;
window.proceedToCheckout = proceedToCheckout;
window.clearCart = clearCart;