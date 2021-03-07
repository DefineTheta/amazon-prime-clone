export interface MediaData {
	id: number;
	type: 'movie' | 'tv';
	name: string;
	year: number;
	description: string;
	rating: '7+' | 'G' | 'PG' | 'M' | 'MA15' | '16+' | 'R18+' | '18+';
	img_url: string;
}

const mediaDataArr = [
	{
		id: 1,
		type: 'tv',
		name: 'The X-Files Season - 1',
		year: 1994,
		description:
			'Two agents from vastly different backgrounds join forces to solve cases the FBI has labeled X-Files. Both are determined to uncover hidden truths – one searching for otherworldly answers, the other for more earthbound scientific explanations. Together they will make discoveries neither could have ever imagined.',
		rating: 'M',
		img_url:
			'https://images-fe.ssl-images-amazon.com/images/S/pv-target-images/c606b7167797203fa04e17b9186e9ecf6be026eff404bb883a6854b1b2d956ff.jpg',
	},
	{
		id: 2,
		type: 'tv',
		name: 'The Office - Season 5',
		year: 2009,
		description:
			"Last season left Office fans gasping and worked up for more - and so, the most anticipated season of the Emmy-winning comedy starring Golden Globe winner Steve Carell is finally on the clock. New and poignant foolishness continues to plague the world of the unwary Dunder Mifflin 9-to-5'ers.",
		rating: 'M',
		img_url:
			'https://images-fe.ssl-images-amazon.com/images/S/pv-target-images/b1e54a74471606880881a7ebc7f566e725bfda6665ee3f59e97ea2fe0ffa5b8a.jpg',
	},
	{
		id: 3,
		type: 'movie',
		name: 'I Care A Lot',
		year: 2021,
		description:
			'Rosamund Pike plays a con artist who steals from the elderly by deceiving judges into appointing her as their "legal guardian". She lands into hot water when her latest victim turns out to have ties to a powerful gangster (Peter Dinklage).',
		rating: 'MA15',
		img_url:
			'https://images-fe.ssl-images-amazon.com/images/S/pv-target-images/d008eabe3eba54ee0967a0627669e55a3f2b42de5bffb7db8c5fcb0baec7fb20.jpg',
	},
	{
		id: 4,
		type: 'tv',
		name: 'Tell Me Your Secrets',
		year: 2021,
		description:
			'Tell Me Your Secrets is a complex thriller revolving around three characters, each with troubling pasts clouding their intersecting motives: Emma (Lily Rabe) is a young woman who once loved a dangerous killer, John (Hamish Linklater) is a former serial predator desperate for redemption, and a grieving mother Mary (Amy Brenneman) who is obsessed with finding her missing daughter.',
		rating: 'MA15',
		img_url:
			'https://images-fe.ssl-images-amazon.com/images/S/pv-target-images/23be87d7b0c20929b74b7094ccf893decc9051d4bcc4ec564f4f6ffe4ec8f615.png',
	},
	{
		id: 5,
		type: 'movie',
		name: 'Sister of Mine',
		year: 2017,
		description:
			'Oliver, a film director, discovers on an erotic website that the protagonist of one of the videos is his younger half-sister Aurora. In the process of finding out what she was doing there, Oliver will become fascinated by Aurora.',
		rating: 'R18+',
		img_url:
			'https://images-fe.ssl-images-amazon.com/images/S/pv-target-images/2f9e59e40be4d4e71878f7262ea516898d1fb7d06da7f528e6919b125fe0807f.jpg',
	},
	{
		id: 6,
		type: 'movie',
		name: 'Scouts Guide to the Zombie Apocalypse',
		year: 2015,
		description:
			'Three scouts and lifelong friends join forces with one badass cocktail waitress to become the world’s most unlikely team of heroes. When their peaceful town is ravaged by a zombie invasion, they’ll fight for the badge of a lifetime and put their scouting skills to the test to save mankind from the undead.',
		rating: 'MA15',
		img_url:
			'https://images-fe.ssl-images-amazon.com/images/S/pv-target-images/6446cac0084df245cac4cff5dc2a073430634a403b23cfc817fedf4c1a6aa794.jpg',
	},
	{
		id: 7,
		type: 'tv',
		name: 'Battlestar Galactica - The Mini Series',
		year: 2003,
		description:
			'Human colonies in a distant solar system are nearly wiped out by a nuclear assault launched by aggressive artificial intelligence. The survivors of the nuclear attack evade the Cylons in a rag tag Battlestar fleet while they begin the search for a new home--a planet called Earth.',
		rating: 'MA15',
		img_url:
			'https://images-fe.ssl-images-amazon.com/images/S/pv-target-images/eb72efd184c6018a609d00c8164b3bcfb965f7e7f8f5d1fd29130430c77d2119.jpg',
	},
	{
		id: 8,
		type: 'tv',
		name: 'Superstore - Season 2',
		year: 2017,
		description:
			'"Superstore" centers around Amy, the store’s most stalwart employee as well as the glue holding the place together, and newly hired Jonah, a dreamer determined to prove work doesn’t have to be boring.',
		rating: 'M',
		img_url:
			'https://images-fe.ssl-images-amazon.com/images/S/pv-target-images/82315b4061f939e81379b4b08d2f0c12bac27a5eadd9895e78d45adfbfe9d9b6.jpg',
	},
	{
		id: 9,
		type: 'movie',
		name: "I'm Your Woman",
		year: 2020,
		description:
			'In this 1970s set crime drama, a woman is forced to go on the run after her husband betrays his partners, sending her and her baby on a dangerous journey.',
		rating: 'MA15',
		img_url:
			'https://images-fe.ssl-images-amazon.com/images/S/pv-target-images/1882a4e6a841df0a46f6305a2ebfcbcdb455417dca12d1c95319fd70cc2292b5.jpg',
	},
	{
		id: 10,
		type: 'movie',
		name: 'The Rental',
		year: '2020',
		description:
			"Two couples embark on a weekend getaway to the seemingly perfect house they've booked online. But what begins as a celebratory weekend turns into something far more sinister.",
		rating: 'MA15',
		img_url:
			'https://images-fe.ssl-images-amazon.com/images/S/pv-target-images/5be7caca52e7957941e791b9bda109cd1b5841263f55f97c7221f178e5afa2b5.jpg',
	},
	{
		id: 11,
		type: 'movie',
		name: 'Sound of Metal',
		year: 2020,
		description:
			'Metal drummer Ruben begins to lose his hearing. When a doctor tells him his condition will worsen, he thinks his career and life is over. His girlfriend Lou checks the former addict into a rehab for the deaf hoping it will prevent a relapse and help him adapt to his new life. After being welcomed and accepted just as he is, Ruben must choose between his new normal and the life he once knew.',
		rating: 'MA15',
		img_url:
			'https://images-fe.ssl-images-amazon.com/images/S/pv-target-images/9c8ed6a24109698cea04490c929fac9247c75f8bd769bbd2d9e9b84602efb393.jpg',
	},
	{
		id: 12,
		type: 'tv',
		name: 'Haunted State - Season 1',
		year: 2020,
		description:
			'An eight-part documentary series follows four filmmakers that investigate historic locations that are reported to be haunted. The science of paranormal investigation is put to the test as the filmmakers explore the big question: Can we really communicate with our lost loved ones?',
		rating: 'MA15',
		img_url:
			'https://images-fe.ssl-images-amazon.com/images/S/pv-target-images/a6dde258ad4c221ead469cddae31586f70f661ab7b96ff60f0d8ae2ab5f2990d.png',
	},
	{
		id: 13,
		type: 'tv',
		name: 'South Park - Season 22',
		year: 2018,
		description:
			"Join Stan, Kyle, Cartman, Kenny, and Randy as they explore the wonders of the human biome, tackle the consequences of immigration, and get banned in China. For them, it's all part of growing up in South Park!",
		rating: 'MA15',
		img_url:
			'https://images-fe.ssl-images-amazon.com/images/S/pv-target-images/aa6fd4edb9d4c72a804f20ab24bc75c80b899b2e24d037a80add265dbace1fae.jpg',
	},
	{
		id: 14,
		type: 'tv',
		name: 'Sneaky Pete - Season 1',
		year: 2017,
		description:
			"A con man (Giovanni Ribisi) on the run from a vicious gangster (Bryan Cranston) takes cover from his past by assuming the identity of his prison cellmate, Pete, \"reuniting\" with Pete's estranged family, a colorful, dysfunctional group that threatens to drag him into a world just as dangerous as the one he's trying to escape - and, just maybe, give him a taste of the loving family he's never had.",
		rating: 'MA15',
		img_url:
			'https://images-fe.ssl-images-amazon.com/images/S/pv-target-images/635e6d57626206e87e59a2ac7132acb1cb75f473efd33a5cedfd1a1413667263.png',
	},
	{
		id: 15,
		type: 'movie',
		name: 'Clue',
		year: 1985,
		description:
			"Meet all the notorious suspects and discover all their foul play things. You'll love their dastardly doings as the bodies and the laughs pile up before your eyes.",
		rating: '7+',
		img_url:
			'https://images-fe.ssl-images-amazon.com/images/S/pv-target-images/5639ef2f414a30ec18230f0ed3c0e29a660a9445f640666b45ee28805928d983.jpg',
	},
	{
		id: 16,
		type: 'tv',
		name: 'Counterpart - Season 1',
		year: 2017,
		description:
			'Howard Silk (J.K. Simmons) is a lowly cog in the bureaucratic machinery of a Berlin-based United Nations spy agency. When Howard discovers that his organization safeguards the secret of a crossing into a parallel dimension, he is thrust into a shadow world of intrigue, danger, and double cross… where the only man he can trust is his near-identical counterpart from this parallel world. The show...',
		rating: 'MA15',
		img_url:
			'https://images-fe.ssl-images-amazon.com/images/S/pv-target-images/fd2e02c6812604c446577dd53a19284857c1dcaceccca74a39380f78268ef8de.jpg',
	},
	{
		id: 17,
		type: 'tv',
		name: 'The Walking Dead: World Beyond - Season 1',
		year: 2020,
		description:
			'Teens in the first generation to grow up in the apocalypse go on a cross-country journey.',
		rating: 'MA15',
		img_url:
			'https://images-fe.ssl-images-amazon.com/images/S/pv-target-images/70d4c598d459bed0044c3f4feaf98157a96b887e56270ca97a5f911790703b2a.jpg',
	},
	{
		id: 18,
		type: 'movie',
		name: 'Containment',
		year: 2015,
		description:
			'Neighbors in an apartment complex wake up to find they have been sealed inside by strangers in hazmat suits. Unable to identify the infected, the quarantined start turning against each other in an adrenaline-fuelled fight for survival.',
		rating: 'M',
		img_url:
			'https://images-fe.ssl-images-amazon.com/images/S/pv-target-images/a68a0027c630811504d6b4e1b70e3a883ced3a04694cce13f5cd58a54fe7933f.jpg',
	},
	{
		id: 19,
		type: 'movie',
		name: 'The Invisible Man (2020)',
		year: 2020,
		description:
			'Cecilia (Elisabeth Moss) tries to rebuild her life after the death of her abusive partner. But before long, she begins to question whether or not he is truly gone.',
		rating: 'MA15',
		img_url:
			'https://images-fe.ssl-images-amazon.com/images/S/pv-target-images/687673ab6a31ab043a213c8ca81d8bf59060a389c92073b94ad82270a7164710.jpg',
	},
	{
		id: 20,
		type: 'tv',
		name: 'The Boys - Season 1',
		year: 2019,
		description:
			'In a world where superheroes embrace the darker side of their massive celebrity and fame, THE BOYS centers on a group of vigilantes known informally as “The Boys,” who set out to take down corrupt superheroes with no more than their blue collar grit and a willingness to fight dirty',
		rating: 'R18+',
		img_url:
			'https://images-fe.ssl-images-amazon.com/images/S/pv-target-images/3645af6707cd9483525d51f9134d7261efa7e1a8525a1ef72227771a0c52f671.png',
	},
	{
		id: 21,
		type: 'movie',
		name: 'Escape Room',
		year: 2018,
		description:
			"To celebrate his 30th birthday, Tyler's girlfriend Kristen, takes him and two other couples to play the latest craze - Escape Room. In an escape room, you are locked in a room and given one hour to figure out cryptic clues in order to escape. The group quickly sense something is wrong as the puzzles become increasingly difficult and they realize they are not playing a game but for their lives.",
		rating: '18+',
		img_url:
			'https://images-fe.ssl-images-amazon.com/images/S/pv-target-images/f5dd7e88912ea87b10dec26181d59336ee287b5f3aed7f03b290f97c138eb261.jpg',
	},
	{
		id: 22,
		type: 'movie',
		name: 'The Hunger Games',
		year: 2012,
		description:
			'Every year in the ruins of what was once North America, the nation of Panem forces each of its twelve districts to send a teenage boy and girl to compete in the Hunger Games. Part twisted entertainment, part government intimidation tactic, the Hunger Games are a nationally televised event in which “Tributes” must fight with one another until one survivor remains.',
		rating: 'M',
		img_url:
			'https://images-fe.ssl-images-amazon.com/images/S/pv-target-images/5c8a1508455beb64f82812501bed233fe12fc1a6e102c0f2cc42d74a4164f5b0.jpg',
	},
	{
		id: 23,
		type: 'movie',
		name: 'Midsommar',
		year: 2019,
		description:
			'Dani and Christian are a young American couple with a relationship on the brink of falling apart. But after a family tragedy keeps them together, a grieving Dani invites herself to join Christian and his friends on a trip. What begins as a carefree summer holiday in a remote Swedish village, takes a sinister turn when the insular villagers invite their guests to partake in local festivities.',
		rating: 'R18+',
		img_url:
			'https://images-fe.ssl-images-amazon.com/images/S/pv-target-images/781eef50007e0520b8a4bf4dbe57442c8f2e13eda5b23407efa9f2f50c6ff4a5.jpg',
	},
	{
		id: 24,
		type: 'movie',
		name: 'Arrival',
		year: 2016,
		description:
			'ARRIVAL is centered on the landing of alien crafts around the world, and the expert linguist (Adams), who is recruited by the military to determine whether they come in peace or are a threat.',
		rating: 'M',
		img_url:
			'https://images-fe.ssl-images-amazon.com/images/S/pv-target-images/e00c0942a584368c35894b3e0ed6c8ce3060e6c25c9be470097bd8dc98001a71.jpg',
	},
	{
		id: 25,
		type: 'movie',
		name: 'The Endless',
		year: 2018,
		description:
			'As kids, they escaped a UFO death cult. Now, two adult brothers seek answers after an old videotape surfaces and bring them back to where they began.',
		rating: 'MA15',
		img_url:
			'https://images-fe.ssl-images-amazon.com/images/S/pv-target-images/0b2c1d2b910f7b97fd54111fb51873d572e2331df79261854822e847a96fe06d.jpg',
	},
	{
		id: 26,
		type: 'movie',
		name: 'Gone Girl',
		year: 2014,
		description:
			"Directed by David Fincher and based on Gillian Flynn’s bestseller, this engaging thriller reveals secrets of a modern marriage. On his fifth wedding anniversary, Nick Dunne (Ben Affleck) reports his beautiful wife Amy (Rosamund Pike) missing. Amidst a media frenzy and pressure from the law, Nick's portrait of a blissful union fades. Soon, his behavior prompts the question: Did he kill his wife?",
		rating: 'MA15',
		img_url:
			'https://images-fe.ssl-images-amazon.com/images/S/pv-target-images/0eb6ce817f3c6f6c0572d0e8ab0985027eef762da6d13fe72bc021d6595f4334.jpg',
	},
	{
		id: 27,
		type: 'movie',
		name: 'Knives Out',
		year: 2019,
		description:
			'Acclaimed writer and director Rian Johnson pays tribute to mystery mastermind Agatha Christie in KNIVES OUT, a witty and stylish whodunnit guaranteed to keep audiences guessing until the very end. With an all-star ensemble including Chris Evans, Ana de Armas, Jamie Lee Curtis, Michael Shannon, Don Johnson, Toni Collette, LaKeith Stanfield, Katherine Langford and Jaeden Martell.',
		rating: 'M',
		img_url:
			'https://images-fe.ssl-images-amazon.com/images/S/pv-target-images/ba775f4a12045c13e692cdf2699e76bbf573db45af177ea845316b6e2a0cd9f0.png',
	},
	{
		id: 28,
		type: 'tv',
		name: 'The Boys - Season 1',
		year: 2019,
		description:
			'In a world where superheroes embrace the darker side of their massive celebrity and fame, THE BOYS centers on a group of vigilantes known informally as “The Boys,” who set out to take down corrupt superheroes with no more than their blue collar grit and a willingness to fight dirty',
		rating: 'R18+',
		img_url:
			'https://images-fe.ssl-images-amazon.com/images/S/pv-target-images/3645af6707cd9483525d51f9134d7261efa7e1a8525a1ef72227771a0c52f671.png',
	},
	{
		id: 29,
		type: 'movie',
		name: 'Joker',
		year: 2019,
		description:
			'Failed comedian Arthur Fleck encounters violent thugs while wandering the streets of Gotham City dressed as a clown. Disregarded by society, Fleck begins a slow descent into madness as he transforms into the criminal mastermind known as Joker.',
		rating: 'MA15',
		img_url:
			'https://images-fe.ssl-images-amazon.com/images/S/pv-target-images/3f0f12f77042566ad2d5c652a06fb19332420e601fa6da9dd41e69e59ab2bee8.jpg',
	},
	{
		id: 30,
		type: 'tv',
		name: 'The Boys - Season 1',
		year: 2019,
		description:
			'In a world where superheroes embrace the darker side of their massive celebrity and fame, THE BOYS centers on a group of vigilantes known informally as “The Boys,” who set out to take down corrupt superheroes with no more than their blue collar grit and a willingness to fight dirty',
		rating: 'R18+',
		img_url:
			'https://images-fe.ssl-images-amazon.com/images/S/pv-target-images/3645af6707cd9483525d51f9134d7261efa7e1a8525a1ef72227771a0c52f671.png',
	},
	{
		id: 31,
		type: 'movie',
		name: 'Teenage Mutant Ninja Turtles 1 - The Original Motion Picture',
		year: '1990',
		description:
			'Four teenage mutant ninja turtles emerge from the shadows to protect New York City from a gang of criminal ninjas.',
		rating: 'PG',
		img_url:
			'https://images-fe.ssl-images-amazon.com/images/S/pv-target-images/c65bf4430e1b2b7999660a24f6ef005b68cec43cf85d1fcb15dbb669477c55a4.jpg',
	},
	{
		id: 32,
		type: 'movie',
		name: 'The House That Jack Built',
		year: 2018,
		description:
			'The story follows Jack, a highly intelligent serial killer, over the course of twelve years, and depicts the murders that really develop his inner madman.',
		rating: 'R18+',
		img_url:
			'https://images-fe.ssl-images-amazon.com/images/S/pv-target-images/02e76c7f9a90ee3feed27f9483001eb90ef3548ab5a13db0f01da9c5841c46af.jpg',
	},
	{
		id: 33,
		type: 'movie',
		name: 'The Quiet Earth',
		year: 1986,
		description:
			'Scientist Zac Hobson awakens to discover that he may be the last man on earth. Homes highways and entire cities are deserted, every living thing has disappeared. Frustrated and plagued by megalomaniacal visions, Zac stands on a balcony and grandly addresses an audience of cardboard standups, declaring himself President of this quiet earth. But Hobson soon finds he may not be alone.',
		rating: 'MA15',
		img_url:
			'https://images-fe.ssl-images-amazon.com/images/S/pv-target-images/20790cfd694055228a98748b44a172e9199f4bafbb5aae02f3ce1c668bb41907.jpg',
	},
	{
		id: 34,
		type: 'movie',
		name: "Sniper: Assassin's End",
		year: 2020,
		description:
			'When Sniper Brandon Beckett (Chad Michael Collins) is accused of assassinating a foreign dignitary, he turns to his father, legendary Sniper Sgt. Thomas Beckett (Tom Berenger) for help.',
		rating: 'MA15',
		img_url:
			'https://images-fe.ssl-images-amazon.com/images/S/pv-target-images/7a0a99209a3576a6ff0ab4fcce6a90416efd9a72fbfea1de6019902767d09583.jpg',
	},
	{
		id: 35,
		type: 'tv',
		name: 'Parks And Recreation - Season 1',
		year: 2009,
		description:
			'From Emmy Award winning executive producers/writers Greg Daniels (The Office, King of the Hill) and Michael Schur (The Office, Saturday Night Live) comes a new comedy about a place where nothing always gets done... small town government.',
		rating: 'M',
		img_url:
			'https://images-fe.ssl-images-amazon.com/images/S/pv-target-images/ac870edb4eacefcc5e4848ee5f922d5d2b45ea32a5920b15ad6851da11750aba.jpg',
	},
	{
		id: 36,
		type: 'tv',
		name: 'Hanna',
		year: 2019,
		description:
			'In equal parts high-concept thriller and coming-of-age drama, HANNA follows the journey of an extraordinary young girl raised in the forest, as she evades the relentless pursuit of an off-book CIA agent and tries to unearth the truth behind who she is.',
		rating: 'MA15',
		img_url:
			'https://images-fe.ssl-images-amazon.com/images/S/atv-aps-images/encoded/HANNAH_S2/*/*_*/COVER_ART/FRACTAL.jpg',
	},
	{
		id: 37,
		type: 'tv',
		name: 'Homecoming - Season 2',
		year: 2020,
		description:
			'START WITH SEASON TWO and experience a new mystery when Jackie (Janelle Monáe) finds herself floating in a boat in the middle of a lake, with no memory of how she got there — or even who she is. Her search for identity will lead her into the heart of the Geist Group, an unconventional wellness company behind the controversial Homecoming Initiative.',
		rating: 'MA15',
		img_url:
			'https://images-fe.ssl-images-amazon.com/images/S/pv-target-images/8b8db8af3fbb3df0446596bc7778062de2df2ff244a00f4765969218597b5b9f.jpg',
	},
	{
		id: 38,
		type: 'tv',
		name: 'Weeds - Season 8',
		year: 2012,
		description:
			'Since surviving a gunshot from a hit man, Nancy Botwin makes a fresh start in New York doing what she does best - selling pot and making enemies.',
		rating: 'MA15',
		img_url:
			'https://images-fe.ssl-images-amazon.com/images/S/pv-target-images/4986ea3414dba756123db64ba22b3bb1de442623392f7a5dc6c7b1032ea867f2.jpg',
	},
	{
		id: 39,
		type: 'movie',
		name: 'Widows',
		year: 2018,
		description:
			'From acclaimed director Steve McQueen (12 Years a Slave) and co-writer Gillian Flynn (Gone Girl) comes a blistering, contemporary crime thriller with a powerful ensemble cast!',
		rating: 'MA15',
		img_url:
			'https://images-fe.ssl-images-amazon.com/images/S/pv-target-images/c90a7f25527e1d225c564df8d1cb65f517609eb14e7b164b452b6b06b35f517a.jpg',
	},
	{
		id: 40,
		type: 'movie',
		name: 'Cruel Intentions',
		year: 1999,
		description:
			"Based on the novel Dangerous Liaisons, this dark nostalgic cult classic, starring Sarah Michelle Gellar, Ryan Phillippe and Reese Witherspoon. Elitist, manipulative siblings Sebastian and Kathryn are out to get what they truly desire. Enter Annette - the Headmaster's daughter, innocent and virtuous - a perfect new conquest for the boldly unapologetic pair who are ready for a new provocation.",
		rating: 'MA15',
		img_url:
			'https://images-fe.ssl-images-amazon.com/images/S/pv-target-images/ae1b8084da30e7e870e64b4b9de2e29277f708851e736225997136f36c409a81.jpg',
	},
	{
		id: 41,
		type: 'tv',
		name: 'Blackadder - Season 1',
		year: 1983,
		description:
			'The Blackadder saga begins with a medieval tale of disaster and drollery. In season one of this classic comedy starring Rowan Atkinson and Tony Robinson, Edmund, Duke of Edinburgh, is the slimy and much-despised younger son of King Richard IV. Haunted by his uncle Richard III whom he killed by mistake, he lurks in the castle corridors of power, scheming to get the better of his elder brother.',
		rating: 'G',
		img_url:
			'https://images-fe.ssl-images-amazon.com/images/S/pv-target-images/1e3a7d5e1bc9f8ed2426e4fd6786bbffa5f6e6aa88d0503a9240ad0e9d52578b.jpg',
	},
	{
		id: 42,
		type: 'tv',
		name: 'The Stand - Season 1',
		year: 2021,
		description:
			'The Stand is Stephen King’s apocalyptic vision of a world decimated by plague and embroiled in an elemental struggle between good and evil. The fate of mankind rests on the frail shoulders of the 108-year-old Mother Abagail and a handful of survivors. Their worst nightmares are embodied in a man with a lethal smile and unspeakable powers: Randall Flagg, the Dark Man.',
		rating: 'MA15',
		img_url:
			'https://images-fe.ssl-images-amazon.com/images/S/pv-target-images/17fbd04edba0b1907cb5686ca025edb89d5b9e859955ae9fd32860226eaba670.jpg',
	},
	{
		id: 43,
		type: 'tv',
		name: 'Blade of the Immortal - Season 1',
		year: 2020,
		description:
			"Edo, an era of warriors. There lived an immortal man, the Slayer of Hundreds, 'Manji.' He meets Rin, who has sworn vengeance for her parents. Rin's grudge is against a group of swordmasters – Ittou-ryu. She asks Manji to be her bodyguard on her journey. He refuses, but then sees his late sister in Rin. So began the violent struggle that would bring even the immortal Manji to his knees.",
		rating: 'R18+',
		img_url:
			'https://images-fe.ssl-images-amazon.com/images/S/pv-target-images/d52d82000584b049d5b119bd2dd74237c152ee3f731c341e0e5f10e0df657e03.jpg',
	},
	{
		id: 44,
		type: 'tv',
		name: 'The Boarding School: Las Cumbres',
		year: 2021,
		description:
			'After a failed escape attempt, Manuel disappears in the woods at the hands of a mysterious man in a crow mask. Despite being subjected to strict discipline, Paul, Amaia and his other friends never stop looking for him. Their adventures lead to discovering that the old cult that inhabited the woods, the Crow’s Nest, is still committing crimes and Las Cumbres is more than just a school.',
		rating: '16+',
		img_url:
			'https://images-fe.ssl-images-amazon.com/images/S/pv-target-images/2c47a5b82d321598466e5befc63a182b321ffa1529e432f68b036c1402f06d40.jpg',
	},
	{
		id: 45,
		type: 'tv',
		name: 'Andromeda - Season 1',
		year: 2001,
		description:
			'Rescued from a black hole by a salvage ship, Captain Dylan Hunt (Kevin Sorbo) finds himself 300 years in the future: The universe in chaos and the Commonwealth fallen. He recruits the eclectic crew of the salvage ship to aid him in restoring the Commonwealth, but finds their motives often at odds with his own.',
		rating: 'MA15',
		img_url:
			'https://images-fe.ssl-images-amazon.com/images/S/pv-target-images/cce60e690e741203f944049f0a2a6e6f27e02e1e3fae7f8426c642c126cee6ee.jpg',
	},
	{
		id: 46,
		type: 'tv',
		name: 'The Purge - Season 1',
		year: 2018,
		description:
			'Once a year, any and all crime – including murder – is legal in America for a period of 12 hours..',
		rating: 'MA15',
		img_url:
			'https://images-fe.ssl-images-amazon.com/images/S/pv-target-images/fc0cf31cb4ddbebab6965d40f701694af280f53a11a95445b214451b117bc36d.jpg',
	},
	{
		id: 47,
		type: 'tv',
		name: 'Jonathan Strange & Mr Norrell - Season 1',
		year: 2015,
		description:
			'Set in England during the Napoleonic Wars at the beginning of the 19th century, the series presents an alternative history where magic is widely acknowledged but rarely practiced. Two men of destiny, the gifted recluse Mr. Norrell and daring spellcasting novice Jonathan Strange, use their magic power to help England. So begins a dangerous battle between two great minds.',
		rating: 'MA15',
		img_url:
			'https://images-fe.ssl-images-amazon.com/images/S/pv-target-images/963b03db95f0456c091a677eaf4cde2224162b63789c447f0d7bfadde9139fb1.jpg',
	},
	{
		id: 48,
		type: 'tv',
		name: 'Spongebob Squarepants - Season 2',
		year: 2001,
		description:
			'Who lives in a pineapple under the sea? SpongeBob SquarePants! Follow the adventures of this enthusiastic, optimistic sponge whose good intentions inevitably lead him and his friends into trouble.',
		rating: 'G',
		img_url:
			'https://images-fe.ssl-images-amazon.com/images/S/pv-target-images/cf046be67f970b2fd0091e2b57e5c70d05efe42ebfd163cd99e55f94e789960e.jpg',
	},
	{
		id: 49,
		type: 'tv',
		name: 'NOS4A2 - Season 1',
		year: 2019,
		description:
			"Based on Joe Hill's novel of the same name, NOS4A2 follows Vic McQueen, a gifted young woman who discovers she has a supernatural ability to find lost things. This ability puts her on a collision course with the evil and immortal Charlie Manx.",
		rating: 'R18+',
		img_url:
			'https://images-fe.ssl-images-amazon.com/images/S/pv-target-images/9ae20b4b5d04f8f86b08f3a57b38c8bcc3786c2b8def3efaa3f1b76a901fbbdb.jpg',
	},
	{
		id: 50,
		type: 'tv',
		name: 'The Exorcist - Season 2',
		year: 2017,
		description:
			'Opening an entirely new chapter in the iconic franchise, Season Two of THE EXORCIST finds FATHER TOMAS ORTEGA (Alfonso Herrera) and a newly collarless MARCUS KEANE (Ben Daniels) out of Chicago and heading west, on a collision course with Hell.',
		rating: 'MA15',
		img_url:
			'https://images-fe.ssl-images-amazon.com/images/S/pv-target-images/9b6b79e6e99fc8d44706f593661cbccf2a36fd92a85e45073a3cd6dba1cced9f.jpg',
	},
];

export const getMediaData = (amount: number): MediaData[] => {
	const indexes = [];

	while (indexes.length < amount) {
		const r = Math.floor(Math.random() * mediaDataArr.length);
		if (indexes.indexOf(r) === -1) indexes.push(r);
	}

	const data = [];
	indexes.forEach((index) => {
		data.push(mediaDataArr[index]);
	});

	return data;
};
