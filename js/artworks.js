// ALLWORKS 

/*
--------------------------------------------------------
Dream Agent Master Artwork Archive

Single source of truth for all Dream Agent works.

Collection pages filter from this dataset.

Used by:
- Collection pages
- Related Works
- Search
- Archive
- Future React components
--------------------------------------------------------
*/

console.log("artworks.js loaded");

window.allWorks = [
    /////////////////////////////////////////////////////////////////
    /////////////////////////////////////////////////////////////////
    // SYMBOLS IN MOTION
    /////////////////////////////////////////////////////////////////
    /////////////////////////////////////////////////////////////////

    // TEMPLE OF OPENINGS
    { 
      id: "temple_of_openings",
      collection: "symbols",
      title:"Temple of Openings", 
      year:"2021", 
      style:"Oil-style",
      featured: true,
      dateCreated: "2021-09-15",
      related:["binary_tree", "polar_bear", "the_great_divide"],
      motifs: ["strategy wood", "chessboard", "temple", "ocean"],
      themes: ["beginnings", "civilization", "colonialism", "faith", "doubt"],
      img:"../img/collection_works/symbols_in_motion/temple_of_openings.png",
      desc:[
          "Two chessboards face the Pacific at sunset — one arranged for faith, the other for doubt. The white pieces align in formation before the ancient temple, where water pours from marble columns like divine cognition.",
          "The black side stands fractured, its pawns hybridized — red, yellow, brown, white — hinting at civilization’s mixed motives. Above them rises **Strategy Wood**, a parody of “Hollywood,” where the myths of empire meet the algorithms of game theory.",
          "This is a painting about 'beginnings' — the first move, the spiritual economy of intention, and the theater of all creation.",
          "Every opening is both an offering and a deception."
      ],
      links:{ xrp:"https://xrp.cafe/nft/00081388B57E780C6A5EF299540E01B0E8C6DB1B83CFC916BA8EA1DA05CBFA3E", 
      os:"#", 
      sr:"#"}
    },
    // BINARY TREE
    { 
      id: "binary_tree",
      collection: "symbols",
      title:"Binary Tree", 
      year:"2026", 
      style:"Oil-style",
      featured: true,
      dateCreated: "2026-10-15",
      related:["temple_of_openings", "polar_bear", "the_great_divide"],
      motifs: ["tree", "choices", "consequences", "paths"],
      themes: ["ambiguity", "authority", "decision-making", "indecision"],
      img:"../img/collection_works/symbols_in_motion/binary_tree.png",
      desc:[
          "'Binary Tree' unfolds inside a surreal Palm-Royale-style club where elegance and ambiguity mingle.",
          "A poised woman in a split green-and-white dress stands between two faceless servers—one masked in green, one masked in white—each offering a symbolic choice: a bonsai and martini on one side, a bronze breastplate and white wine on the other.",
          "Behind them, a great window shaped like a branching tree echoes the theme of decision, divergence, and the illusions of control. Portraits stare from the walls like silent judges, while directional arrows quietly insist that every path is deliberate—even when the chooser isn’t sure.",
          "This is a study of 'ambiguous authority', 'binary thinking', and the elegance of indecision.",
          "It’s about the moments when power is an attitude, not an answer."
      ],
      links:{ xrp:"https://xrp.cafe/nft/00080BB8B57E780C6A5EF299540E01B0E8C6DB1B83CFC9164A57450F05CBFA71", 
      os:"https://opensea.io/item/ethereum/0x870520570ea3cd36ec19a8494c2a08b131727a83/2", 
      sr:"#"}
    },
    // THE TECH ERA
    { 
      id: "the_tech_era",
      collection: "symbols",
      title:"The Tech Era", 
      year:"2025", 
      style:"Oil-style",
      featured: true,
      dateCreated: "2025-08-25",
      related: ["cursor_of_fate", "internet_of_the_modern_world"],
      motifs: ["technology", "urban life", "prosperity"],
      themes: ["progress", "isolation", "synchronization"],
      img:"../img/collection_works/symbols_in_motion/the_tech_era.png",
      desc:[
          "In 'The Tech Era,' Dream Agent conjures a surreal crossroads of technological elegance and ancient mystery. A cadre of faceless urbanites—Yuppies, Buppies, and Cypherpunks—glide through a snow-laced city on electric scooters, disconnected yet synchronized.", 
          "They pass a glowing crystal ball ceremony, a hypnotic marble garage spewing water from the mountains, and a mystical Zoltar figure beside a woman carefully sewing a half-finished turban.",
          "Above, a giant floating tooth—a relic or prophecy?—hovers between two epochs: analog ruin and digital rebirth. Symbols abound: the neon globe of globalism, the ever-watching mountain temple, and a store sign encoded in planetary language.",
          "This is not just a painting—it’s a portal.", 
      ],
      links:{ xrp:"https://xrp.cafe/nft/00080BB8B57E780C6A5EF299540E01B0E8C6DB1B83CFC9161205E0EB05CBFA4D", 
      os:"https://opensea.io/item/ethereum/0x870520570ea3cd36ec19a8494c2a08b131727a83/1", 
      sr:"#"}
    },
    // THE RUSHER THE INCREMENTER AND THE PROTESTER
    { 
      id: "the_rusher_the_incrementer_and_the_protester",
      collection: "symbols",
      title:"The Rusher, The Incrementer and the Protester", 
      year:"2025", 
      style:"Oil-style",
      featured: true,
      dateCreated: "2025-09-15",
      related:[],
      motifs: ["bar", "archetypes"],
      themes: ["conflict", "identity", "agency"],
      img:"../img/collection_works/symbols_in_motion/the_rusher_the_incrementer_and_the_protester.png",
      desc:[
          "Three men sit at a dimly lit bar — a timeless tribunal of modern archetypes: The Rusher, clenched in frustration, his glass half-empty and fists tighter still; The Incrementer, precise and calculating, a monocled figure clad in pinstripes, sipping with a measured grace; and The Protester, puffed-cheeked and clad in a tracksuit, caught mid-reaction, somewhere between rebellion and retreat.",
          "Each man drinks from a different vessel — a whiskey tumbler, a wine glass, and a crushed beer can — reflecting their strategy in the silent war of agency. Crushed sugar cubes and spent lighters scatter the bar, symbols of fuel and burnout.",
          "This oil-style portrait isn’t just a study in temperament — it’s a tension-filled séance of capitalism, identity, and pacing in the digital age.",
          "Which one are you?",
      ],
      links:{ xrp:"https://xrp.cafe/nft/00081388B57E780C6A5EF299540E01B0E8C6DB1B83CFC916D17472D905CBFA3F", os:"#", sr:"#"}
    },
    // POLAR BEAR
    { 
      id: "polar_bear",
      collection: "symbols",
      title:"Polar Bear", 
      year:"2026", 
      style:"Oil-style",
      featured: true,
      dateCreated: "2026-01-15",
      related:["temple_of_openings", "binary_tree", "the_great_divide"],
      motifs: ["temperature", "dualities"],
      themes: ["climate", "balance", "fragility"],
      img:"../img/collection_works/symbols_in_motion/polar_bear.png",
      desc:[
         "A checkerboard plain stages two masked figures labeled *let* and *const*, paused in mutual orientation as a thermometer rises between them. Behind, an alabaster basilica and a wounded crystal sphere establish a frozen system where variables face limits, and permanence bears marks of force.",
         "The work fixes logic, architecture, and ritual into a single climatic moment. Change is measured, not felt, while stability carries visible damage."
      ],
      links:{ xrp:"https://xrp.cafe/nft/000807D0B57E780C6A5EF299540E01B0E8C6DB1B83CFC9163FD182E905CBFA4F", 
      os:"#", 
      sr:"#"}
    },
    // DREAM AGENT MAKING BIRDS
    { 
      id: "dream_agent_making_birds",
      collection: "symbols",
      title:"Dream Agent Making Birds", 
      year:"2025", 
      style:"Oil-style",
      featured: true,
      dateCreated: "2025-07-15",
      related:["turquoise_plate","wizard_of_agent_dreams"],
      motifs: ["spy", "machine", "birds"],
      themes: ["mystery", "devotion", "transformation"],
      img:"../img/collection_works/symbols_in_motion/dream_agent_making_birds.png",
      desc:[
         "'Dream Agent Making Birds' captures the faceless spy in a sacred moment of release. Standing before a red cage that holds a glowing machine, the spy extends his gloved hands—not to release a bird, but to reveal wings of light. Above, a chain of birds arcs through the morning sky, echoing the engraving 'Soli Deo Gloria' on the window sill. It is both prayer and ritual: an act of making, not owning—where flight itself becomes the art.",
         "This piece bridges mystery and devotion, weaving together technology, faith, and surreal transformation. A meditation on creation, release, and the unseen hands that move history.",
      ],
      links:{ xrp:"https://xrp.cafe/nft/00080FA0B57E780C6A5EF299540E01B0E8C6DB1B83CFC91656B753E805CBFA50", 
      os:"#", 
      sr:"#"}
    },
    // HORMONES 95
    { 
      id: "hormones_95",
      collection: "symbols",
      title: "Hormones '95", 
      year: "2026", 
      style: "Oil-style",
      featured: true,
      dateCreated: "2026-02-15",
      related: [],
      motifs: ["bat", "evening"],
      themes: ["transience", "intimacy", "contemplation"],
      img: "../img/collection_works/symbols_in_motion/hormones_95.png",
      desc:[
           "'Hormones ’95' captures a private interior moment framed against an exterior disturbance. A young woman stands within the warm geometry of a lit window, her posture composed and downward facing, while the night outside carries an approaching shape.",
           "The painting contrasts two forms of emergence: the quiet architecture of self-presentation and the sudden arrival of instinct. Pearls, evening fabric, and controlled posture form the interior language of social structure, while the winged presence in the night sky introduces a separate rhythm.",
           "The composition situates the viewer between these systems. The window frame functions as a threshold device, dividing cultivated identity from the unpredictable mechanics of the outside world.",
           "Within the Dream Agent archive, 'Hormones ’95' belongs to the category of transitional works: paintings that document the moment when internal order meets external signal."
      ],
      links:{ xrp:"https://xrp.cafe/nft/000807D0B57E780C6A5EF299540E01B0E8C6DB1B83CFC9166D9D24EF05CBFA51", 
      os:"#", 
      sr:"#"}
    },

    /////////////////////////////////////////////////////////////////
    /////////////////////////////////////////////////////////////////
    // THE DIGITAL UNCONSCIOUS
    /////////////////////////////////////////////////////////////////
    /////////////////////////////////////////////////////////////////
    //  INTERNET OF THE MIDDLE WORLD
    { 
      id: "internet_of_the_middle_world",
      collection: "digital",
      title:"Internet of the Middle World", 
      year:"2022", 
      style:"Oil-style",
      featured: true,
      dateCreated: "2022-10-06",
      related:["internet_of_the_old_world", "internet_of_the_new_world"],
      motifs: ["mall", "crystal ball"],
      themes: ["digital culture", "nostalgia", "ritual"],
      img:"../img/collection_works/digital_unconscious/internet_of_the_middle_world.png",
      desc:[
         "'Internet of the Middle World' captures a surreal 1980s-style mall scene where the digital age seeps into analog life. Neon signs divide the corridor into 'INTER' and 'NET', while glowing orbs—crystal-ball-like internet terminals—float atop fountains and pedestals. Shoppers gaze into them with reverence, as if accessing forgotten futures.", 
         "The color palette leans into nostalgic earth tones, contrasted with electric blues, subtly evoking early digital aesthetics. The arcade machines flicker like proto-portals, while every character appears paused between eras—caught between the physical and the virtual, the mundane and the mythic.", 
         "This piece reimagines the birth of the internet not as a tech boom, but as a spiritual-commercial ritual in the temple of capitalism.",
        ],
      links:{ xrp:"https://xrp.cafe/nft/00080BB8B57E780C6A5EF299540E01B0E8C6DB1B83CFC9169748C1F205CBFA5E", 
      os:"#", 
      sr:"#"}
    },
    // LACTATION OF THE LEDGER
    { 
      id: "lactation_of_the_ledger",
      collection: "digital",
      title:"Lactation of the Ledger", 
      year:"2025", 
      style:"Oil-style",
      featured: true,
      dateCreated: "2025-11-15",
      related:["the_great_divide"],
      motifs: ["mother", "ledger"],
      themes: ["decentralization", "motherhood", "finance"],
      img:"../img/collection_works/digital_unconscious/lactation_of_the_ledger.png",
      desc:[
         "In 'Lactation of the Ledger', Bitcoin becomes the green Madonna — the mother of digital value — nursing her black-and-white child, XRP. Around them stand veiled nations, watching as the milk of liquidity flows across rivers and bridges — the arteries of a new global economy. “Healthy Bacteria” packets line the earth below: symbols of the unseen agents that keep systems alive — the microbes of trust and decay.",
         "This piece visualizes the paradox of decentralization: motherhood and machinery, faith and finance, blockchain and body. It is both nurturing and unsettling, inviting viewers to question who feeds the future and who digests it.",
        ],
      links:{ xrp:"https://xrp.cafe/nft/00080FA0B57E780C6A5EF299540E01B0E8C6DB1B83CFC916DBFA34F705CBFA61", 
      os:"#", 
      sr:"#"}
    },
    // PRINCE CARL LAYING 
    { 
      id: "prince_carl_laying",
      collection: "digital",
      title:"Prince Carl laying in front of the Telly, denying himself to watch it", 
      year:"2025", 
      style:"Oil-style",
      featured: true,
      dateCreated: "2025-03-12",
      related:["prince_carl_after_the_salt_conquering_speaking_an_ancient_language"],
      motifs: ["hotel", "cane"],
      themes: ["isolation", "power", "contemplation"],
      img:"../img/collection_works/digital_unconscious/prince_carl_laying.png",
      desc:[
          "In a hotel room of neutral tones and soft lighting, a solitary figure in regal military dress — Prince Carl — lies across a bed, locked in contemplation before a blank television screen. His ornate baton rests beside him, unused. The TV, cold and dark, reflects nothing but the silence of his choice.",
          "Before it, a curious console: a humanoid figure with a monitor for a head and a crystal ball in its hands. A green mountain labeled “Strategywood” rises like a false oracle, flanked by miniature flags — fragments of world powers reduced to decoration.", 
          "Behind a slightly ajar door, a shower curtain bears a cryptic insignia: intelligence behind the veil.",
          "The cursor on the screen invites, yet Prince Carl resists — denying himself the seduction of spectacle, prophecy, or command. This is the portrait of power in a moment of withdrawal.",
          "Surveillance, strategy, and prophecy lie at arm's reach… but he waits.",
          "What happens when a sovereign refuses the screen? A meditation on control, voyeurism, and the quiet rebellion of inaction.", 
      ],
      links:{ xrp:"https://xrp.cafe/nft/00080BB8B57E780C6A5EF299540E01B0E8C6DB1B83CFC91628EBB1EA05CBFA4E", 
      os:"#", 
      sr:"#"}
    },
    //  INTERNET OF THE OLD WORLD
    { 
      id: "internet_of_the_old_world",
      collection: "digital",
      title:"Internet of the Old World", 
      year:"2022", 
      style:"Oil-style",
      featured: true,
      dateCreated: "2022-10-06",
      related:["internet_of_the_middle_world", "internet_of_the_new_world", "internet_of_the_3rd_kingdom"],
      motifs: ["kingdom", "crystal ball"],
      themes: ["digital culture", "ritual", "medievalism"],
      img:"../img/collection_works/digital_unconscious/internet_of_the_old_world.png",
      desc:[
         "Step into a mythic past where the digital future is foretold. 'Internet of the Old World' by Dream Agent reimagines our virtual age through the lens of medieval mysticism. Gathered before a crystal orb, cloaked figures kneel in reverence—priests, nobles, and peasants alike—before a mysterious apparition inside the orb. Looming behind them, a castle gate boldly inscribed “INTERNET” evokes a new kind of kingdom.",
         "This painting explores how ancient rituals mirror the collective awe and submission we now show digital networks. It invites viewers to reflect on our shared data as modern prophecy and the internet as a sacred architecture of the new world order.",
        ],
      links:{ xrp:"https://xrp.cafe/nft/000807D0B57E780C6A5EF299540E01B0E8C6DB1B83CFC916F2E005F605CBFA62", 
      os:"#", 
      sr:"#"}
    },
    //  RINSE OF TRUST
    { 
      id: "rinse_of_trust",
      collection: "digital",
      title:"Rinse of Trust", 
      year:"2021", 
      style:"Oil-style",
      featured: true,
      dateCreated: "2021-11-15",
      related:["lactation_of_the_ledger", "dream_agent_distilleries"],
      motifs: ["shower", "dollar sheets"],
      themes: ["faith", "economy", "ritual"],
      img:"../img/collection_works/digital_unconscious/rinse_of_trust.png",
      desc:[
         "In this chamber of blue and gold, faith is scrubbed clean. The faucet drips with the insignia of digital empires — XRP tears drip from one of two shower heads.  The second shower head, drips nothing hinting at a mysterious system shrouded in secrecy.",
         "A hand extends from the glow, offering the bar of belief back to the system.",
         "Below, soaked currency hangs like towels of devotion, dripping into the floor — the cost of staying pure in an economy of confession.",
         "'The Rinse of Trust' examines the fragility of confidence — the way markets, religions, and algorithms depend on a constant cleansing of faith. Every rinse resets the narrative, but the residue of doubt remains.",
        ],
      links:{ xrp:"https://xrp.cafe/nft/00080BB8B57E780C6A5EF299540E01B0E8C6DB1B83CFC91609C5D6F505CBFA63", 
      os:"#", 
      sr:"#"}
    },
    // INTERNET OF THE MODERN WORLD
    { 
      id: "internet_of_the_modern_world",
      collection: "digital",
      title:"Internet of the Modern World", 
      year:"2022", 
      style:"Oil-style",
      featured: true,
      dateCreated: "2022-10-06",
      related:["the_tech_era"],
      motifs: ["orbs", "glowing"],
      themes: ["digital culture", "seclusion", "contemplation"],
      img:"../img/collection_works/digital_unconscious/internet_of_the_modern_world.png",
      desc:[
         "In Internet of the Modern World, Dream Agent visualizes the internet not as cables and code, but as orbs of knowledge, communion, and mystery — floating quietly within domestic space. Rendered in a palette of calm teals and soft golds, four vignettes capture anonymous digital citizens, each engaging with luminous spheres that defy gravity. These orbs represent the fragments of the modern internet: ideas passed hand-to-hand, data preserved in cold storage, and interfaces that glow with silent intelligence.",
         "The posters behind each figure subtly spell out 'internet,' while their shirts display concentric symbols — perhaps a new language of connection. Though the setting is minimal, the symbolism runs deep: the kitchen becomes a data hub, the bedroom a meditation zone, the living room a portal.",
         "This painting reflects a modern condition: being always online, always alone — yet tethered to something larger, shared, and glowing just beyond reach.",
        ],
      links:{ xrp:"https://xrp.cafe/nft/00080BB8B57E780C6A5EF299540E01B0E8C6DB1B83CFC91620ABA7F405CBFA64", 
      os:"#", 
      sr:"#"}
    },
    // THE ARTIFICIAL MONTY
    {
      id: "the_artificial_monty",
      collection: "digital",
      title:"The Artificial Monty",
      year:"2026",
      style:"Oil-style",
      featured: true,
      dateCreated: "2026-05-15",
      related:["the_artificial_deligate"],
      motifs: ["robot", "ceremony", "ritual"],
      themes: ["technology", "artificial intelligence", "data centers"],
      img:"../img/collection_works/digital_unconscious/the_artificial_monty.png",
      desc:[
        "A surreal landscape exploring the hidden ecology of artificial intelligence.",
        "The Artificial Monty portrays AI as an act of excavation rather than invention. Anonymous workers sift through the accumulated internet while a living river carries symbols of memory, mortality, and biological existence toward a monumental temple dedicated to language itself.",
        "The painting suggests that artificial intelligence is not born from empty machines, but from humanity's collective archive of stories, knowledge, and experience.",
        "Every answer has an ancestry.",
      ],
      links:{ xrp:"#", 
      os:"#",
      sr:"#"}
    },
    // HUMANS
    {
      id: "humans",
      collection: "digital",
      title:"Humans",
      year:"2026",
      style:"Oil-style",
      featured: true,
      dateCreated: "2026-06-15",
      related:[],
      motifs: ["prison", "freedom", "similarity"],
      themes: ["confinement", "liberty", "existentialism"],
      img:"../img/collection_works/digital_unconscious/humans.png",
      desc:[
        "A surreal meditation on visible and invisible confinement.",
        "Humans juxtaposes two lives that appear fundamentally different. A prisoner sits behind bars while a prosperous professional relaxes in comfort, yet both occupy nearly identical poses beneath the same moon and sky.",
        "The work suggests that material success and physical liberty do not necessarily resolve the deeper questions of fulfillment, purpose, or inner freedom.",
        "Sometimes the strongest prisons cannot be seen.",
      ],
      links:{ xrp:"#",
      os:"#",
      sr:"#"}
    },
    // INTERNET OF THE NEW WORLD
    { 
      id: "internet_of_the_new_world",
      collection: "digital",
      title:"Internet of the New World", 
      year:"2023", 
      style:"Oil-style",
      featured: true,
      dateCreated: "2023-06-13",
      related:["internet_of_the_old_world", "internet_of_the_middle_world", "internet_of_the_modern_world"],
      motifs:["artist","coins","crystal ball"],
      img:"../img/collection_works/digital_unconscious/internet_of_the_new_world.png",
      desc:[
        "'Internet of the New World' captures the moment where creativity, currency, and coded prophecy converge.",
        "A lone figure, lit by the glow of his digital canvas, draws concentric worlds that ripple into reality. Outside, golden and silver coins drift through a scorched horizon, as if migrating from one age into another. On the wall, a portrait of an old-world general gazes forward, a crystal orb clasped like a new scepter of power. Beside the artist, encrypted text floats — part address, part invocation — signaling that in this world, identity and value are written in code.",
        "This painting is an allegory of how the digital frontier replaces empires of stone with networks of trustless exchange, and how the new architects are not kings, but coders.",

        ],
      links:{ xrp:"https://xrp.cafe/nft/00080BB8B57E780C6A5EF299540E01B0E8C6DB1B83CFC916E43A3EE405CBFA4B", 
      os:"#", 
      sr:"#"}
    },
    /////////////////////////////////////////////////////////////////
    /////////////////////////////////////////////////////////////////
    // THE DOMINION ARCHIVE
    /////////////////////////////////////////////////////////////////
    /////////////////////////////////////////////////////////////////
    // CENSUS RITUAL
    { 
      id: "the_census_ritual",
      collection: "dominion",
      title:"The Census Ritual", 
      year:"2020", 
      style:"Oil-style",
      featured: true,
      dateCreated: "2020-10-03",
      related:["discovery_of_the_indigenous", "the_refactoring_ritual", "saltwater_electronics"],
      motifs: ["procession", "stone gate", "desert"],
      img:"../img/collection_works/dominion_archives/the_census_ritual.png",
      desc:[
          "A solemn procession of robed figures winds across a cracked desert floor, funneled through a monolithic stone frame etched with the year 1868—a date loaded with political memory and post-war reshuffling. Towering over the crowd, a bald sentinel holds open the gate, as if officiating a rite of passage or a reckoning of identities. The twin red horns atop the stone portal echo silent warning.",
          "'The Census Ritual' explores themes of enumeration, erasure, and conformity within the historical machinery of power. Here, the ritual of “counting” becomes symbolic of control—of being seen not as individuals, but as entries in a ledger of empire.",

      ],
      links:{ xrp:"https://xrp.cafe/nft/000807D0B57E780C6A5EF299540E01B0E8C6DB1B83CFC9168482F5E705CBFA52", 
      os:"#", 
      sr:"#"}
    },
    // DISCOVERY OF THE INDIGENOUS
    { 
      id: "discovery_of_the_indigenous",
      collection: "dominion",
      title:"Discovery of the Indigenous", 
      year:"2024", 
      style:"Oil-style",
      featured: true,
      dateCreated: "2024-01-01",
      related:["the_census_ritual", "the_refactoring_ritual", "saltwater_electronics"],
      motifs: ["kitchen", "myth", "memory"],
      img:"../img/collection_works/dominion_archives/discovery_of_the_indigenous.png",
      desc:[
          "In 'Discovery of the Indigenous', Dream Agent constructs a searing, symbolic kitchen scene where myth, media, and memory simmer in a glowing amber palette. At its center, a radiant coin illuminates a countertop tableau—a surreal altar of distorted Americana. A headless torso pours forth a nested maternal figure into a green bottle labeled 'The Agriculture was already KNOWN', confronting narratives of invention with truths of ancestral cultivation. Beside it, a reddish bottle declares, 'THEY AIN'T AFRICAN', challenging imposed identities and colonial mislabeling.",
          "Above, a melting stick of butter stamped 'WIKIPEDIA Googled BUTTER SPREAD' slowly drips, its American flag suggesting the spoon-fed digital rewriting of history. Below, a skillet of golden liquid overflows, blending nourishment and loss, as a crumpled flag sinks beside it—symbol of a buried or burned truth. On the stove’s surface, a woman’s portrait gazes forward from a round frame, echoed in the form emerging from the man's chest—an emblem of lineage and remembrance,",
          "With uncanny warmth and spiritual satire, this painting deconstructs the narrative of “discovery” and reclaims it through layered indigenous presence, agricultural memory, and the falsity of erasure. The kitchen, both domestic and historical, becomes a site of alchemical resistance.",
    ],
    links:{ xrp:"https://xrp.cafe/nft/00080BB8B57E780C6A5EF299540E01B0E8C6DB1B83CFC9169B68C6E405CBFA53", 
    os:"#", 
    sr:"#"}
    },
    // PRINCE CARL AFTER THE SALT CONQUERING SPEAKING AN ANCIENT LANGUAGE
    { 
      id: "prince_carl_after_the_salt_conquering_speaking_an_ancient_language",
      collection: "dominion",
      title:"Prince Carl after the Salt Conquering Speaking an Ancient Language", 
      year:"2026",
      style:"Oil-style",
      featured: true,
      dateCreated: "2026-06-15",
      related:["prince_carl_laying"],
      motifs:["salt","language","conquest"],
      img:"../img/collection_works/dominion_archives/prince_carl_after_the_salt_conquering.png",
      desc:[
          "After the Salt Conquering, Prince Carl sits upon the edge of the Atlantic, wrapped in furs, speaking in a language older than kingdoms and newer than algorithms.",
          "A glowing orb rests before him like a captured star while two silent witnesses listen from the margins. Around his neck hangs a pendant reading *Social Media*, transforming a modern phrase into a royal relic.",
          "In this surreal vision, Dream Agent collapses centuries into a single moment: ancient ritual, digital communication, and the eternal human desire to be heard.",
          "Is Prince Carl a conqueror, a prophet, an influencer, or merely another storyteller speaking into the void?",
          "As waves crash against dark stone and the sky fractures with celestial light, the distinction becomes irrelevant."
      ],
      links:{ xrp:"https://xrp.cafe/nft/00080BB8B57E780C6A5EF299540E01B0E8C6DB1B83CFC916F7000AF805CBFA57", 
      os:"#", 
      sr:"#"}
    },
    // SALTWATER ELECTRONICS
    { 
      id: "saltwater_electronics",
      collection: "dominion",
      title:"Saltwater Electronics", 
      year:"2021", 
      style:"Oil-style",
      featured: true,
      dateCreated: "2021-10-11",
      related:["the_census_ritual", "the_refactoring_ritual", "discovery_of_the_indigenous"],
      motifs: ["ocean", "gods"],
      img:"../img/collection_works/dominion_archives/saltwater_electronics.png",
      desc:[
          "Three ancient bronze gods of logic, sea, and war stand on the edge of civilization’s ocean, lifting an 'Etch A Sketch' like a new divine tablet. The crude map it displays—arrows of commerce, migration, and data—etches a nervous system over the American continent. Beneath, the sand cracks with 'electrical salt', where old myth meets circuitry. A salt shaker, a bottle, and a date (1846) whisper of invention, revolution, and dissolution.",
          "In 'Saltwater Electronics', Dream Agent fuses mythological statuary with post-industrial nostalgia, asking: 'What happens when the gods inherit our technology and redraw the world from the beach of history'",
      ],
      links:{ xrp:"https://xrp.cafe/nft/00080000B57E780C6A5EF299540E01B0E8C6DB1B83CFC916B24E97E505CBFA54", 
      os:"#", 
      sr:"#"}
    },
    // BIG FOREST TAHHEED
    { 
      id: "big_forest_taheed",
      collection: "dominion",
      title:"Big Forest Taheed", 
      year:"2025", 
      style:"Oil-style",
      featured: true,
      dateCreated: "2025-09-18",
      related:[ "the_biblicals", "imperious_kingdom"],
      motifs: ["forest", "stewardship"],
      img:"../img/collection_works/dominion_archives/big_forest_taheed.png",
      desc:[
          "'Big Forest Taheed' presents a monumental figure standing between the myth of the frontier and the modern paradox of restraint. Dressed in a sailor’s uniform, carrying an axe over his shoulder, the figure is not a conqueror but a steward—his presence bound by the sign at his feet: 'Just enough for shelter, nothing more.'",
          "The painting confronts the legacy of industry, expansion, and survival, reframing them through an ethic of balance. The bottles at the base serve as mute totems—red and green, warning and permission—while the vast field of corn and evergreen trees remind us of the eternal tension between cultivation and wilderness.",
          "A meditation on sufficiency, stewardship, and the human scale within endless landscapes.",
          ],
      links:{ xrp:"https://xrp.cafe/nft/00080BB8B57E780C6A5EF299540E01B0E8C6DB1B83CFC916C93468FA05CBFA55", 
      os:"#", 
      sr:"#"}
    },
    // IMPERIOUS KINGDOM
    { 
      id: "imperious_kingdom",
      collection: "dominion",
      title:"Imperious Kingdom", 
      year:"2026", 
      style:"Oil-style",
      featured: true,
      dateCreated: "2026-03-16",
      related:["some_things_sound_like_the_morning", "the_biblicals"],
      motifs: ["city", "power", "ceremony", "order"],
      img:"../img/collection_works/dominion_archives/imperious_kingdom.png",
      desc:[
          "A monumental profile occupies the foreground, seated before a ceremonial landscape where ritualized figures assemble beneath the pediment marked 'Northland'. The woman’s posture is still, composed, and detached from the activity unfolding behind her. Gold adornment and architectural symmetry elevate the scene into a formal tableau of order and hierarchy.",
          "The figures gathered across the lawn exchange gestures of recognition and alignment while the central subject remains outside their exchange. Authority is not performed in motion but established through position, scale, and separation. The composition records the architecture of power: the individual who embodies it, and the system that assembles around it."
      ],
      links:{ xrp:"https://xrp.cafe/nft/00081388B57E780C6A5EF299540E01B0E8C6DB1B83CFC916E01A39FB05CBFA56", 
      os:"#", 
      sr:"#"}
    },
    // SOME THINGS WERE MEANT TO LAST FOREVER
    { 
      id: "some_things_were_meant_to_last_forever",
      collection: "dominion",
      title: "Some things were meant to last forever",
      year: "2025",
      style: "Oil-style",
      featured: true,
      dateCreated: "2025-11-15",
      related: [],
      motifs: ["spy", "birds"],
      themes: ["espionage", "freedom"],
      img: "../img/collection_works/dominion_archives/some_things_were_meant_to_last_forever.png",
      desc:[
        "This surreal composition by Dream Agent presents an oven labeled Prosperity as an altar of permanence, where iconic cathedrals and basilicas from around the world rise like delicacies atop silver cake stands.",
        "Each structure — intricate, fragile, historic — floats in a domestic kitchen space, blurring the line between the sacred and the mundane. In this world, spiritual and cultural grandeur is both preserved and 'baked in,' as if civilization itself is something to be curated and cared for at home.",
        "The scene asks: What are we preserving? What do we consume? And what—if anything—transcends time? An homage to heritage, architecture, and memory, this painting is a quiet meditation on legacy in an age of impermanence."
        ],
      links:{ xrp:"https://xrp.cafe/nft/00080BB8B57E780C6A5EF299540E01B0E8C6DB1B83CFC916697D1FF605CBFA5C", 
      os:"#", 
      sr:"#"}
    },
    // INTERNET OF THE 9TH EMPIRE
    { 
      id: "internet_of_the_9th_empire",
      collection: "dominion",
      title:"Internet of the 9th Empire", 
      year:"2025",
      style:"Oil-style",
      featured: true,
      dateCreated: "2025-10-15",
      related:[],
      motifs:["empire","internet","ritual"],
      img:"../img/collection_works/dominion_archives/internet_of_the_9th_empire.png",
      desc:[
          "A vision of civilization after knowledge becomes its highest currency.",
          "Internet of the 9th Empire depicts rulers who govern through illumination rather than force. Before them stretches a society where every individual holds a glowing sphere, symbolizing universal access to collective memory and shared understanding.",
          "The work transforms the internet from a technological network into a cultural inheritance spanning generations and civilizations.",
          "Its greatest monument is not stone.",
          "It is connection.",
      ],
      links:{ xrp:"#", 
      os:"#", 
      sr:"#"}
    },
    // THE REFACTORING RITUAL
    { 
      id: "the_refactoring_ritual",
      collection: "dominion",
      title:"The Refactoring Ritual", 
      year:"2025", 
      style:"Oil-style",
      featured: true,
      dateCreated: "2025-10-15",
      related:["the_census_ritual", "bottling_the_republic", "saltwater_electronics"],
      tags:["spy","birds"],
      img:"../img/collection_works/dominion_archives/the_refactoring_ritual.png",
      desc:[
          "'The Refactoring Ritual' by Dream Agent is a surreal procession through the archway of time, marked '1940'. At its helm looms a faceless figure in a black tuxedo and top hat, holding the stone portal adorned with twin horns. On one side, the crowd emerges in muted earth tones—on the other, they dissolve into stark silhouettes of black and white, as if stripped to archetypes. The skyline towers like watchful sentinels, the air thick with unspoken agreements.", 
          "This work speaks to the reprogramming of societies—where identity, morality, and memory are refactored into a binary code of belonging and erasure.",
          ],
      links:{ xrp:"https://xrp.cafe/nft/00080BB8B57E780C6A5EF299540E01B0E8C6DB1B83CFC916F7000AF805CBFA57", 
      os:"#", 
      sr:"#"}
    },
    // SOME THINGS SOUND LIKE THE MORNING
    { 
      id: "some_things_sound_like_the_morning",
      collection: "dominion",
      title:"Some Things Sound Like the Morning", 
      year:"2026",
      style:"Oil-style",
      featured: true,
      dateCreated: "2026-06-15",
      related:["imperious_kingdom", "the_biblicals"],
      motifs:["shower","light","bonsai waterfall"],
      img:"../img/collection_works/dominion_archives/some_things_sound_like_the_morning.png",
      desc:[
          "Every civilization begins with a language it cannot fully explain., 'Some Things Sound Like the Morning' transforms an ordinary shower into a sanctuary of transmission. Morning sunlight pours through the fixture, replacing flowing water, casting golden frequencies across a chamber where a microphone waits beneath the light. On one wall, 'M = Mineral' suggests that voice originates in the deep architecture of the earth. On another, the Hebrew word חיים (Life) quietly anchors the composition, introducing breath, spirit, and living memory into the ritual.",
          "Between them stands the figure, suspended between stone and speech, matter and meaning. The bonsai waterfall reinforces the painting's central current: life is not manufactured but cultivated, flowing patiently through generations before emerging as language. This work asks whether the first sounds of civilization were less an invention than a reception, as though every morning still carries echoes of the world's original voice.",
      ],
      links:{ xrp:"https://xrp.cafe/nft/00080BB8B57E780C6A5EF299540E01B0E8C6DB1B83CFC916F7000AF805CBFA57", 
      os:"#", 
      sr:"#"}
    },
    /////////////////////////////////////////////////////////////////
    /////////////////////////////////////////////////////////////////
    // INDUSTRIAL MYTHS
    /////////////////////////////////////////////////////////////////
    /////////////////////////////////////////////////////////////////
    //  CURSOR OF FATE
    { 
      id: "cursor_of_fate",
      collection: "industrial",
      title:"Cursor of Fate", 
      year:"2025", 
      style:"Oil-style",
      featured: true,
      dateCreated: "2025-11-15",
      related:["the_tech_era", "the_future_of_industry", "god_comma"],
      motifs: ["fortune teller", "cursor"],
      themes: ["agency", "automation", "illusion of choice"],
      img:"../img/collection_works/industrial_myths/cursor_of_fate.png",
      desc:[
        "A modern oracle for the algorithmic age. 'Cursor of Fate' transforms the iconic fortune teller into an artificial intelligence whose face has become a luminous screen marked by a single cursor. Surrounded by symbols of labor, ambition, craftsmanship, and contemplation, the figure presides over a table of possibilities rather than certainties.",
        "The work explores humanity's growing tendency to consult machines for answers once reserved for mystics. Every object becomes a prompt, every prediction another branch in an expanding decision tree.",
        "Rather than forecasting the future, the oracle reflects our own questions back to us.",
      ],
      links:{ xrp:"https://xrp.cafe/nft/00080BB8B57E780C6A5EF299540E01B0E8C6DB1B83CFC916C51463F005CBFA60", 
      os:"#", 
      sr:"#"}
    },
    //  THE GREAT DIVIDE
    { 
      id: "the_great_divide",
      collection: "industrial",
      title:"The Great Divide", 
      year:"2018", 
      style:"Oil-style",
      featured: true,
      dateCreated: "2018-6-15",
      related:["lactation_of_the_ledger","temple_of_openings", "binary_tree"],
      motifs: ["bitcoin", "baby", "protest"],
      themes: ["generational conflict", "digital value", "rebirth"],
      img:"../img/collection_works/industrial_myths/the_great_divide.png",
      desc:[
        "The Great Divide is a meditation on the birth of digital value amidst generational and ideological conflict. A solemn green matriarch cradles a golden baby marked with the Bitcoin symbol — a digital messiah wrapped in swaddling wealth. Around her, the youth sit silently with laptops, bearing the weight of a new world, while protesters and skeptics stand on the opposing cliff, holding blank signs and accusations.",
        "Set against a cosmic desert canyon under constellations of coded systems, this painting questions what is inherited, what is mined, and what is rejected. The gold rock at the feet of the critic speaks to the relics of the past; the baby to a future still being written.",
        "🪐 Blockchain as womb. Protest as ritual. Code as constellation.",
        "This is not just a divide — it is a rebirth.",
      ],
      links:{ xrp:"https://xrp.cafe/nft/00081388B57E780C6A5EF299540E01B0E8C6DB1B83CFC916AE2E92F105CBFA5F", 
      os:"#", 
      sr:"#"}
    },
      //  THE FUTURE OF INDUSTRY
    { 
      id: "the_future_of_industry",
      collection: "industrial",
      title:"The Future of Industry", 
      year:"2025", 
      style:"Oil-style",
      featured: true,
      dateCreated: "2025-11-15",
      related:["cursor_of_fate", "internet_of_the_new_world"],
      motifs:["oracle","machine","ritual"],
      img:"../img/collection_works/industrial_myths/the_future_of_industry.png",
      desc:[
        "'The Future of Industry' envisions a new epoch where human thought, machine learning, and ritual converge.",
        "In a dimly lit hall, a faceless oracle—its features replaced by cascading code—presides over a circle of silent thinkers. Before them rest luminous brains and crystal spheres: emblems of creativity, computation, and prophecy.", 
        "The chamber holds two thresholds—one descending into shadow and uncertainty, the other opening toward a radiant expanse of possibility. This spatial duality mirrors the conflict between the foreseen and the unforeseen, the designed and the emergent, that defines our technological ascent.",
        "The work poses a question: when machines divine and humans compute, who truly shapes the future of labor?"
        ],
      links:{ xrp:"https://xrp.cafe/nft/00081388B57E780C6A5EF299540E01B0E8C6DB1B83CFC91675DD2ED405CBFA3B", 
      os:"#", 
      sr:"#"}
    },
    // THE FEAR ROOM
    { 
      id: "the_fear_room",
      collection: "industrial",
      title:"The Fear Room", 
      year:"2023", 
      style:"Oil-style",
      featured: true,
      dateCreated: "2023-06-20",
      related:["bottling_the_republic", "daniels_vision_from_another_angle"],
      motifs:["priest","war"],
      img:"../img/collection_works/industrial_myths/the_fear_room.png",
      desc:[
        "'In The Fear Room', Dream Agent dissects the systemic machinery of submission and indoctrination. A lineup of children—bent, broken, and bowed—passes through gateways of authority and assimilation, watched over by figures of religion, capital, and control. Behind them, a portrait of soldiers against fire echoes the violence of inherited obedience.",
        "A suited man holds out cash while guiding heads into future-making devices, beneath the glow of a microchip idol labeled 'FUTURE'—a cynical altar to technological determinism. The atmosphere is thick with unease, yet calculated and quiet. This is not chaos—it’s organized despair.",
        "This NFT immortalizes a moment of ideological conditioning, where hope flickers in the cracks of institutionally imposed fear. One child, far right, sits upright—an ambiguous figure of peace or resignation.", 
        "The painting invites collectors to reckon with the infrastructures of fear and the quiet violence of societal programming.",
        ],
      links:{ xrp:"https://xrp.cafe/nft/00081388B57E780C6A5EF299540E01B0E8C6DB1B83CFC916A3A8D0DA05CBFA3D", 
      os:"#", 
      sr:"#"}
    },
    // BOTTLING THE REPUBLIC
    { 
      id: "bottling_the_republic",
      collection: "industrial",
      title:"Bottling the Republic", 
      year:"2025", 
      style:"Oil-style",
      featured: true,
      dateCreated: "2025-01-01",
      related:["the_fear_room", "daniels_vision_from_another_angle"],
      motifs:["map","bottles"],
      img:"../img/collection_works/industrial_myths/bottling_the_republic.png",
      desc:[
        "In 'Bottling the Republic', Dream Agent invites the viewer into a sterile, modern factory where the symbols of national identity are distilled, packaged, and prepared for consumption. On the left, dark and amber soda bottles emerge from a map of the United States—oxidized green against a burnt orange backdrop—suggesting a geographic origin stripped of borders yet full of weight. On the right, lighter bottles exit a white brick structure, their neutrality implying refinement, curation, or even erasure.",
        "A factory worker affixes a red-crayon label to the box: 'A Case of Sovereignties'. His motion—half-routine, half-ritual—becomes a metaphor for the bureaucratic manufacturing of governance and identity. At the center, twin drinking fountains spill water onto the production line, invoking historical inequities, industrial spillage, or uncontainable truth.",
        "Hovering above, a 1950s antenna pulses radio waves outward—a relic of a broadcast age, echoing the reach of old narratives into modern machinery.",
        "Dream Agent fuses surrealism, political allegory, and post-industrial aesthetics into a layered visual inquiry. What does it mean to bottle a republic? And who decides the recipe?",
        ],
      links:{ xrp:"https://xrp.cafe/nft/00080BB8B57E780C6A5EF299540E01B0E8C6DB1B83CFC916B66E9CE605CBFA49", 
      os:"#", 
      sr:"#"}
    },
    // DANIEL'S VISION FROM ANOTHER ANGLE
    { 
      id: "daniels_vision_from_another_angle",
      collection: "industrial",
      title:"Daniel's vision from another angle", 
      year:"2023", 
      style:"Oil-style",
      featured: true,
      dateCreated: "2023-06-13",
      related:["the_fear_room", "bottling_the_republic"],
      motifs:["cargo","doves"],
      img:"../img/collection_works/industrial_myths/daniels_vision_from_another_angle.png",
      desc:[
        "A black-sea freighter noses through fog, its deck stacked not with cargo but with institutions: a courthouse façade, a broadcast tower, glass offices, and a proud marquee that mis-spells 'EXCELLENCE'—a glitch that betrays intent. Cable-chains spill from the ship like tentacles, dragging unseen systems through the tide. Above, a faint halo of radio rings ripples the sky.",
        "On the shore, four birds stand as witnesses—three obsidian, one pale—an echo of Daniel’s layered visions and their empires. The birds face the vessel, a dissenting conscience against industrial pageantry. What arrives is not a navy, but a narrative: empire as architecture, morality as advertising, dominion as logistics.",
        "Dream Agent tilts the prophecy 'from another angle,' asking: Who sails whom?", 
        "When institutions are freight, is the ocean carrying them—or are we?",

        ],
      links:{ xrp:"https://xrp.cafe/nft/000807D0B57E780C6A5EF299540E01B0E8C6DB1B83CFC916CD546DE705CBFA4A", 
      os:"#", 
      sr:"#"}
    },
    /////////////////////////////////////////////////////////////////
    /////////////////////////////////////////////////////////////////
    // SIGNALS AND ASCENSIONS 
    /////////////////////////////////////////////////////////////////
    /////////////////////////////////////////////////////////////////
    //HIP HOP 1978
    { 
      id: "hip_hop_1978",
      collection: "signals",
      title:"Hip Hop 1978", 
      year:"2021", 
      style:"Oil-style",
      featured: true,
      dateCreated: "2021-11-15",
      related:["hip_hop_1987","the_tech_era"],
      motifs: ["train", "glowing"],
      themes: ["music", "discovery", "ascension"],
      img:"../img/collection_works/signals_and_ascensions/hip_hop_1978.png",
      desc:[
          "Step into the soul of the South Bronx as the birth cry of Hip Hop reverberates from subway tunnels to celestial realms. 'Hip Hop 1978' captures a young dreamer pointing to a psychedelic subway car emblazoned with the word “LOVE” and the year '1978' — a nod to the cultural ignition point of Hip Hop as a movement of rhythm, rebellion, and radiance.", 
          "Celestial figures and floating books swirl above, invoking knowledge, expression, and divinity, while the child's wide-eyed joy reminds us that Hip Hop was — and still is — a spiritual vessel for transformation. A visual tribute to the beat that birthed a global renaissance.",
      ],
      links:{ xrp:"https://xrp.cafe/nft/00081388B57E780C6A5EF299540E01B0E8C6DB1B83CFC9163791790F05CBFA65", 
      os:"#", 
      sr:"#"}
    },
    // LORI'S HOUSE
      { 
        id: "loris_house",
        collection: "signals",
        title:"Lori's House", 
        year:"2025", 
        style:"Oil-style",
        featured: true,
        dateCreated: "2025-01-01",
        related:["conrads_house", "shannons_house"],
        motifs: ["stairs", "neon"],
        themes: ["family", "identity", "excitement"],
        tags:["stairs","neon"],
        img:"../img/collection_works/signals_and_ascensions/loris_house.png",
        desc:[
            "A suburban dream refracted through surrealist lenses: a Queen of Poland descends 1980s stairs, passing a glowing fish tank where Bitcoin, Ethereum, and Dollar signs drift like exotic creatures. On the carpet, a fiery-haired pop star dances with three women—Black, Asian, and Hispanic—celebrating joy, diversity, and rebellion. In the background, a red-haired mother stirs something unseen, a quiet anchor to the domestic world.",
            "This work balances the absurd with the regal: the weight of crowns and currencies meets the exuberance of neon-lit youth. Both history and myth converge under one roof, questioning the hierarchies of power, gender, money, and memory.",
        ],
        links:{ xrp:"https://xrp.cafe/nft/00080FA0B57E780C6A5EF299540E01B0E8C6DB1B83CFC916655D1B0D05CBFA67", 
        os:"#", 
        sr:"#"}
      },
      // THE BIBLICALS 
        { 
          id: "the_biblicals",
          collection: "signals",
          title:"The Biblicals", 
          year:"2025", 
          style:"Oil-style",
          featured: true,
          dateCreated: "2025-01-01",
          related:["some_things_sound_like_the_morning", "imperious_kingdom"],
          motifs: ["family", "heritage", "dance"],
          themes: ["faith", "tradition", "identity"],
          img:"../img/collection_works/signals_and_ascensions/the_biblicals.png",
          desc:[
            "'The Biblicals' is a visual hymn—a layered scene where heritage, reverence, and resilience meet in a sunlit room. In the foreground, a man in an ermine fur coat and navy cap lowers his brim, guarding his gaze while embodying quiet strength. Behind him, a woman in a Choctaw dress moves in sacred rhythm, hands lifted in dance, as two children in red coats rejoice in mirrored movement. Between them all, Hebrew letters are inscribed on a clay wall, hinting at an ancient river—spiritual currents running beneath the moment. Ferns frame the scene, while bottles at the base serve as silent relics of rituals past. A piano in the corner, stacked with books, suggests memory, learning, and song.",
            "This work invites reflection on how ancestral traditions, faith, and modern identity weave into one shared continuum.",
          ],
          links:{ xrp:"https://xrp.cafe/nft/00081388B57E780C6A5EF299540E01B0E8C6DB1B83CFC916AA0E8E0A05CBFA6A", 
          os:"#", 
          sr:"#"}
        },
        // REVOLUTIONARY BALLOON 
        { 
          id: "revolutionary_balloon",
          collection: "signals",
          title:"Revolutionary Balloon", 
          year:"2023", 
          style:"Oil-style",
          featured: true,
          dateCreated: "2023-06-13",
          related:[],
          motifs: ["balloon","ascension","knowledge"],
          themes: ["information flow","legacy","culture"],
          img:"../img/collection_works/signals_and_ascensions/revolutionary_balloon.png",
          desc:[
            "A Renaissance-era figure ascends in a striped hot air balloon, scattering ancient knowledge—cryptic sheets of coded text—into the air. Below, four hands of diverse origins hold smartphones. One displays hieroglyph-like text, while the others burst with cascading streams of water, as if their screens were ancient fountains.",
            "In the distance rise the Sphinx, Notre-Dame, and the Empire State Building—monuments of civilization, framed between electrical towers sparking with energy from the floating basket above.",
            "'Revolutionary Balloon' is a surreal allegory of information flow—where legacy meets signal, and culture is transmitted not only through paper, but through code and conductivity. This is Gutenberg’s ghost sailing the skies of digital modernity.",
          ],
          links:{ xrp:"https://xrp.cafe/nft/000807D0B57E780C6A5EF299540E01B0E8C6DB1B83CFC9169328BD0B05CBFA69", 
          os:"#", 
          sr:"#"}
        },
          // CONRAD'S HOUSE
        { 
          id: "conrads_house",
          collection: "signals",
          title:"Conrad's House",
          year:"2025", 
          style:"Oil-style",
          featured: true,
          dateCreated: "2025-01-01",
          related:["loris_house", "shannons_house"],
          motifs: ["stairs", "star"],
          themes: ["family", "identity", "esteem"],
          img:"../img/collection_works/signals_and_ascensions/conrads_house.png",
          desc:[
              "'Conrad’s House' captures the collision of tradition and transformation within a suburban interior. A young man descends the stairs, books in hand, carrying knowledge into a future defined by shifting symbols.", 
              "At the center stands a figure in a copper-toned Dapper Dan tracksuit, adorned with a glowing star and gold rope—an emblem of street royalty and cosmic authority. A poised woman points toward him, anchoring pride and legacy, while a CRT television hums with a crystal ball, broadcasting visions of destiny. In the kitchen, domestic ritual continues, grounding the surreal in the everyday.", 
              "This piece is both prophecy and memory: a portrait of family, ambition, and myth woven into one domestic scene.",
          ],
          links:{ xrp:"https://xrp.cafe/nft/00080FA0B57E780C6A5EF299540E01B0E8C6DB1B83CFC9167C42EC0C05CBFA68", 
          os:"#", 
          sr:"#"}
        },
        //   // TATARIAN STANDARD DELUXE
        { 
          id: "tartarian_standard_deluxe",
          collection: "signals",
          title:"Tartarian Standard Deluxe", 
          year:"2025", 
          style:"Oil-style",
          featured: true,
          dateCreated: "2025-01-01",
          related:["magic_of_86", "sephardic_tango"],
          motifs: ["guitarist", "tartaria","lightening"],
          themes: ["myth","history","value"],
          img:"../img/collection_works/signals_and_ascensions/tartarian_standard_deluxe.png",
          desc:[
            "A faceless guitarist sits beneath the domes of a lost empire — the 'Tartarian skyline' glowing under a crescent moon. His hat bears the ironic brand “Standard Deluxe,” a paradox of value in a world of imitation.",
            "Beside him, a crowned observer points in revelation toward the inscription, as if decoding a sacred frequency. Behind them, a billboard of the Black Madonna hums like an ancient server — faith meets circuitry, royalty meets circuitry, art meets commodity.",
            "This painting examines how style becomes relic, how performance becomes devotion, and how luxury rebrands the divine.", 
          ],
          links:{ xrp:"https://xrp.cafe/nft/00080BB8B57E780C6A5EF299540E01B0E8C6DB1B83CFC9164E774A0E05CBFA66", 
          os:"#", 
          sr:"#"}
        },
        // THE MAGIC OF '86
          { 
            id: "magic_of_86",
            collection: "signals",
            title:"Magic of '86", 
            year:"2023", 
            style:"Oil-style",
            featured: true,
            dateCreated: "2023-06-13",
            related:["tartarian_standard_deluxe"],
            motifs: ["stadium","hip-hop","punk"],
            themes: ["rebellion","expression","culture"],
            img:"../img/collection_works/signals_and_ascensions/the_magic_of_86.png",
            desc:[
              "In 'Magic of '86', three cultural avatars—hip-hop, punk, and suburban youth—collide in a stadium of roaring multitudes. A figure in a Bubble goose down holds an electrified film reel from one side of the stage, while an Indie Rock-like vocalist in mid-cry fuses it in the middle with cinematic force. On the opposite end, a figure in a Dapper Dan-style tracksuit and gold jewelry of that era grips the other reel, completing the circuit. Each wears surrealist visors in the styles of Picasso, Klee, and Matisse. The electricity between them is symbolic, a spark of cross-genre unity, a visual remix of race, culture, and rhythm from an era that echoed rebellion and expression.",
              "This piece merges theater, iconography, and myth into a kinetic dream sequence. A rare portal into the subconscious of the 1980s cultural evolution.",
            ],
            links:{ xrp:"https://xrp.cafe/nft/00080BB8B57E780C6A5EF299540E01B0E8C6DB1B83CFC916C0F45F0905CBFA6B", 
            os:"#", 
            sr:"#"}
          },
          //   // SEPHARDIC TANGO
          { 
            id: "sephardic_tango",
            collection: "signals",
            title:"Sephardic Tango", 
            year:"2024", 
            style:"Oil-style",
            featured: true,
            dateCreated: "2024-06-15",
            related:["tartarian_standard_deluxe"],
            motifs: ["dance","sephardic"],
            themes: ["history","memory","diaspora"],
            img:"../img/collection_works/signals_and_ascensions/sephardic_tango.png",
            desc:[
              "A flamenco dancer and a conquistador lock eyes and arms in a hypnotic embrace. The tension of history, love, and legacy pulses through their movement. Behind them, silent onlookers in armor sit in colonial stillness.",
              "One soldier bears a face replaced by the Bitcoin symbol, holding a scroll inscribed in Hebrew with the words: “Remember the Expulsion.” The rose on the floor, fallen but uncrushed, whispers the enduring story of Sephardic diaspora, cultural memory, and shifting empires.",
              "With its blend of Spanish colonial aesthetics, Jewish historical reference, and blockchain symbolism, Sephardic Tango invites the viewer to ask: Who leads, and who remembers?"
            ],
            links:{ xrp:"https://xrp.cafe/nft/00080BB8B57E780C6A5EF299540E01B0E8C6DB1B83CFC916D7DA300805CBFA6C", 
            os:"#", 
            sr:"#"}
          },
            /////////////////////////////////////////////////////////////////
            /////////////////////////////////////////////////////////////////
            // WAR AND FEAST 
            /////////////////////////////////////////////////////////////////
            /////////////////////////////////////////////////////////////////
            // THE WINE WARS
          { 
            id: "the_wine_wars",
            collection: "war_and_feast",
            title:"The Wine Wars", 
            year:"2023", 
            style:"Oil-style",
            featured: true,
            dateCreated: "2023-06-13",
            related:["the_soap_wars", "coeur_of_the_grapes", "the_dirt_wars"],
            motifs:["cave","bacteria","wine"],
            themes:["conflict","culture","value"],
            img:"../img/collection_works/war_and_feast/the_wine_wars.png",
            desc:[
              "'The Wine Wars' is a surreal meditation on conflict, culture, and value. A winding river carves through a cavernous landscape, separating two opposing forces: primal microscopic organisms locked in an endless struggle, and a garden where golden coins bloom like living flora. A solitary glass sits empty, a silent witness to the chaos and creation unfolding. Above, a speaker looms—echoing voices of past and future battles.",
              "This piece fuses mythology, economics, and microbiology into one scene, exploring how consumption, nature, and technology intertwine in humanity's pursuit of meaning and wealth.",
            ],
            links:{ xrp:"https://xrp.cafe/nft/00080FA0B57E780C6A5EF299540E01B0E8C6DB1B83CFC9160DE5DBF205CBFA58", 
            os:"#", 
            sr:"#"}
          },

          // THE STARVING MILLIONARE
          { 
            id: "the_starving_millionare",
            collection: "war_and_feast",
            title: "The Starving Millionare", 
            year: 2026, 
            style:"Oil-style",
            featured: true,
            dateCreated: "2026-03-16",
            related:["the_generous_vagrant"],
            motifs:["hunger","gold"],
            themes:["greed","consumption","spectatorship"],
            img:"../img/collection_works/war_and_feast/the_starving_millionare.png",
            desc:[
              "'The Starving Millionaire' captures a paradox at the heart of modern ambition: abundance without nourishment.",
              "A faceless figure devours a sandwich inside a luxury vehicle, parked beneath the sign of a 'Tartarian Sandwich Shoppe'. Outside the windshield, students look on, laughing and learning, while inside the vehicle a GPS glows with a single directive: 'Monetize'.",
              "A book titled 'Intro to Principles' rests untouched on the console. Wealth, knowledge, hunger, and spectatorship collapse into a single frame.",
              "The painting examines how success can consume itself. The pursuit of value becomes an appetite that never resolves. The mask hides identity, but not the ritual. This is not a portrait of poverty or excess. It is a portrait of extraction."
            ],
            links:{ xrp:"https://xrp.cafe/nft/00081388B57E780C6A5EF299540E01B0E8C6DB1B83CFC91648118CD505CBFA39",
            os:"https://opensea.io/item/ethereum/0x870520570ea3cd36ec19a8494c2a08b131727a83/3", 
            sr:"#"}
          },

          // COEUR OF THE GRAPES
          { 
            id: "coeur_of_the_grapes",
            collection: "war_and_feast",
            title:"Coeur of the Grapes", 
            year:"2025", 
            style:"Oil-style",
            featured: true,
            dateCreated: "2025-11-15",
            related:["the_wine_wars"],
            motifs:["heart","river"],
            themes:["romance","indulgence","desire"],
            img:"../img/collection_works/war_and_feast/coeur_of_the_grapes.png",
            desc:[
              "'Coeur of the Grapes' is a surreal celebration of romance, indulgence, and the fragile infrastructure of desire. In this evocative composition, a monumental human heart towers over a vineyard town, pumping rich, cerulean rivers through a sun-scorched landscape. At the forefront, a woman dressed in red smiles with closed eyes, glass of sparkling wine in hand, as a disembodied hand rests on her shoulder — a gesture at once intimate and ambiguous.",
              "This piece plays on the French word 'coeur' (heart) and the ancient symbolism of wine as both communion and seduction. The arteries feeding the land suggest a circulatory system of love and control, while the woman’s radiant joy hints at either blissful ignorance or deep satisfaction.",
              "A hypnotic blend of anatomical realism and classic oil-style glamour, 'Coeur of the Grapes' is a study in beauty, power, and what we choose to celebrate — even as we’re consumed by it."
            ],
            links:{ xrp:"https://xrp.cafe/nft/00081388B57E780C6A5EF299540E01B0E8C6DB1B83CFC91652974EF705CBFA5B", 
            os:"#", 
            sr:"#"}
          },

          // THE SOAP WARS 
          { 
            id: "the_soap_wars",
            collection: "war_and_feast",
            title: "The Soap Wars", 
            year: "2026", 
            style: "Oil-style",
            featured: true,
            dateCreated: "2026-06-15",
            related: ["the_wine_wars", "the_dirt_wars"],
            motifs: ["bubbles", "zamboni"],
            themes: ["sanitation", "conflict"],
            img: "../img/collection_works/war_and_feast/the_soap_wars.png",
            desc: [
              "'The Soap Wars' documents a conflict staged as sanitation.",
              "A sterile tunnel becomes a theater where purity, avoidance, absorption, and respect are enforced through signage, machinery, and posture. Soap floods the floor. Surveillance smiles. Direction replaces dialogue.",
              "The conflict does not ask who is clean. It decides who is allowed to remain.",
            ],
            links: { xrp: "https://xrp.cafe/nft/00081388B57E780C6A5EF299540E01B0E8C6DB1B83CFC9161625E5DC05CBFA42", 
            os: "#", 
            sr: "#" }
          },

            // INTERNET OF THE 3RD KINGDOM
          { 
            id: "internet_of_the_3rd_kingdom",
            collection: "war_and_feast",
            title: "Internet of the 3rd Kingdom",
            year: "2025",
            style: "Oil-style",
            featured: true,
            dateCreated: "2025-11-15",
            related: ["internet_of_the_new_world"],
            motifs: ["printing_press", "panic"],
            themes: ["paranoia", "ritual"],
            img:"../img/collection_works/war_and_feast/internet_of_the_3rd_kingdom.png",
            desc:[
              "In 'Internet of the 3rd Kingdom', a secret stone corridor becomes a theater of paranoia and ritual. Figures in medieval tunics scatter with scrolls of information, as though caught in the chaos of a leaking archive. At the forefront, a faceless man holds a bleeding sphere, accompanied by a powdered judge holding a glowing Ace of Spades —symbols of chance, judgment, and hidden authority.",
              "Above them, a blood-red banner bears a compass-like sigil, while a massive crystal orb in the distance swallows flying swords and documents, as if consuming history itself. This is the Kingdom of Networks—half-feudal, half-digital—where law, secrecy, and data collide.",
              "Dream Agent paints a world where the 'architecture of power' is ancient, yet the 'currency of control' is information.",
              ],
            links:{ xrp:"https://xrp.cafe/nft/000807D0B57E780C6A5EF299540E01B0E8C6DB1B83CFC9163BB17DF405CBFA5A", 
            os:"#", 
            sr:"#"}
          },

          // THE ASYMETRICAL JACE
          { 
            id: "the_asymmetrical_jace",
            collection: "war_and_feast",
            title: "The Asymmetrical Jace",
            year: "2025",
            style: "Oil-style",
            featured: true,
            dateCreated: "2025-11-15",
            related: [],
            motifs: ["desert", "spaghetti"],
            themes: ["consumption", "hierarchy"],
            img: "../img/collection_works/war_and_feast/the_asymmetrical_jayse.png",
            desc: [
              "'The Asymmetrical Jace' bends the domestic into the mythic. Two figures consume spaghetti not as a meal, but as an allegory—one upright, disciplined, with galactic eyes veiled in the night sky, the other crouched, primal, with geometric lenses of surveillance. Between them rises the green pyramid of 'Strategy Wood', a mountain of calculation standing in stark contrast to the desert plain. This piece plays on hierarchy, asymmetry, and the rituals of consumption—both of food and of systems.",
              "It asks: who eats with a fork, and who eats from the ground? Who climbs Strategy Wood, and who becomes part of its base?",
              ],
            links:{ xrp:"https://xrp.cafe/nft/00080BB8B57E780C6A5EF299540E01B0E8C6DB1B83CFC91624CBACF505CBFA59", os:"#", sr:"#"}
          },
          // MAMMON STADIUM
          { 
            id: "mammon_stadium",
            collection: "war_and_feast",
            title: "Mammon Stadium",
            year: "2025",
            style: "Oil-style",
            featured: true,
            dateCreated: "2025-11-15",
            related: [],
            motifs: ["bugs", "gold"],
            themes: ["greed", "consumption", "spectatorship"],
            img: "../img/collection_works/war_and_feast/mammon_stadium.png",
            desc: [
              "In 'Mammon Stadium', Dream Agent transforms the ancient coliseum into a financial amphitheater. The golden statue of Mammon towers above the fray, bathed in divine light, as gladiatorial bugs scuttle across a hockey-lined battlefield littered with pills. The crowd is not flesh but wealth itself—coins, bills, and symbols of capital—stacked into seats of power.", 
              "The arena becomes a surreal merger of sport, empire, addiction, and currency, where spectatorship is measured in monetary presence rather than human eyes.", 
              "This painting interrogates the rituals of modern finance and consumption, presenting the spectacle of wealth as both entertainment and domination.",
            ],
            links:{ xrp:"https://xrp.cafe/nft/00080BB8B57E780C6A5EF299540E01B0E8C6DB1B83CFC9167822E70E05CBFA73", 
            os:"#", 
            sr:"#"}
          },
          ];
