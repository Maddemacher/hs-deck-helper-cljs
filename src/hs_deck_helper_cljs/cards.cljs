(ns hs-deck-helper-cljs.cards)

(def cards [
	{:id "KARA_13_23" :name "Romulo"}
	{:id "LOE_115b" :name "Raven Idol"}
	{:id "BRM_033" :name "Blackwing Technician"}
	{:id "OG_281" :name "Beckoner of Evil"}
	{:id "OG_048" :name "Mark of Y'Shaarj"}
	{:id "OG_314b" :name "Slime"}
	{:id "BRMA10_1" :name "Razorgore the Untamed"}
	{:id "LOEA05_02h" :name "Trogg Hate Minions!"}
	{:id "CRED_32" :name "Jerry Mascho"}
	{:id "LOEA01_01h" :name "Sun Raider Phaerix"}
	{:id "TB_BlingBrawl_Hero1p" :name "Sharpen"}
	{:id "TU4c_001" :name "King Mukla"}
	{:id "NEW1_026" :name "Violet Teacher"}
	{:id "KAR_010a" :name "Whelp"}
	{:id "XXX_105" :name "Add 8 to Health."}
	{:id "BRM_001" :name "Solemn Vigil"}
	{:id "KAR_A10_04" :name "White Rook"}
	{:id "AT_032" :name "Shady Dealer"}
	{:id "EX1_565" :name "Flametongue Totem"}
	{:id "XXX_056" :name "Silence and Destroy All Minions"}
	{:id "TB_PickYourFate_2_Ench" :name "Pick Your Fate 2 Ench"}
	{:id "TB_PickYourFate" :name "Pick Your Fate Build Around"}
	{:id "OG_318" :name "Hogger Doom of Elwynn"}
	{:id "OG_249a" :name "Slime"}
	{:id "BRMA17_6H" :name "Bone Construct"}
	{:id "LOEA16_11" :name "Crown of Kael'thas"}
	{:id "BRMC_84" :name "Dragonkin Spellcaster"}
	{:id "BRMA09_5H" :name "Dismount"}
	{:id "CS2_017o" :name "Claws"}
	{:id "AT_032e" :name "Shady Deals"}
	{:id "EX1_400" :name "Whirlwind"}
	{:id "EX1_534" :name "Savannah Highmane"}
	{:id "EX1_371" :name "Hand of Protection"}
	{:id "BRMA16_5e" :name "I hear you..."}
	{:id "OG_061t" :name "Mastiff"}
	{:id "NEW1_008" :name "Ancient of Lore"}
	{:id "TB_GreatCurves_01" :name "TB_ClockworkCardDealer"}
	{:id "AT_057" :name "Stablemaster"}
	{:id "EX1_366e" :name "Justice Served"}
	{:id "AT_061e" :name "Lock and Load"}
	{:id "EX1_161" :name "Naturalize"}
	{:id "BRM_034" :name "Blackwing Corruptor"}
	{:id "EX1_392" :name "Battle Rage"}
	{:id "OG_138e" :name "Will of the Vizier"}
	{:id "TB_PickYourFate_5_Ench" :name "Pick Your Fate 5 Ench"}
	{:id "BRMA09_3H" :name "Old Horde"}
	{:id "KAR_A02_12H" :name "Silverware Golem"}
	{:id "CRED_27" :name "Henry Ho"}
	{:id "EX1_334e" :name "Shadow Madness"}
	{:id "LOEA04_25h" :name "Seething Statue"}
	{:id "CS2_034_H2_AT_132" :name "Fireblast Rank 2"}
	{:id "EX1_295" :name "Ice Block"}
	{:id "AT_005" :name "Polymorph: Boar"}
	{:id "AT_075" :name "Warhorse Trainer"}
	{:id "TB_KaraPortals_003" :name "Party Elemental"}
	{:id "EX1_382e" :name "Stand Down!"}
	{:id "CS2_124" :name "Wolfrider"}
	{:id "EX1_409e" :name "Upgraded"}
	{:id "CS2_084" :name "Hunter's Mark"}
	{:id "NAX15_04" :name "Chains"}
	{:id "CS1h_001_H1_AT_132" :name "Heal"}
	{:id "KARA_13_15" :name "Wanda Wonderhooves"}
	{:id "TB_EndlessMinions01" :name "Endless Enchantment"}
	{:id "LOEA10_1" :name "Giantfin"}
	{:id "GVG_019e" :name "Demonheart"}
	{:id "AT_132_WARLOCK" :name "Soul Tap"}
	{:id "AT_071" :name "Alexstrasza's Champion"}
	{:id "OG_241" :name "Possessed Villager"}
	{:id "NAX12_01" :name "Gluth"}
	{:id "LOEA06_02h" :name "Stonesculpting"}
	{:id "KARA_00_01" :name "Prince Malchezaar"}
	{:id "AT_036" :name "Anub'arak"}
	{:id "AT_122" :name "Gormok the Impaler"}
	{:id "CS2_049" :name "Totemic Call"}
	{:id "OG_202ae" :name "Y'Shaarj's Strength"}
	{:id "KARA_13_12H" :name "Demonic Presence"}
	{:id "LOE_027" :name "Sacred Trial"}
	{:id "OG_188e" :name "Amber Carapace"}
	{:id "EX1_596e" :name "Demonfire"}
	{:id "LOEA02_02h" :name "DjinnΓÇÖs Intuition"}
	{:id "OG_327" :name "Squirming Tentacle"}
	{:id "BRMA13_3H" :name "Nefarian"}
	{:id "KARA_09_05heroic" :name "Summon Kil'rek"}
	{:id "OG_006" :name "Vilefin Inquisitor"}
	{:id "BRMC_100" :name "Living Bomb"}
	{:id "CS2_152" :name "Squire"}
	{:id "BRMA13_2" :name "True Form"}
	{:id "AT_042a" :name "Lion Form"}
	{:id "TB_KTRAF_6" :name "Grobbulus"}
	{:id "BRMA12_1" :name "Chromaggus"}
	{:id "OG_141" :name "Faceless Behemoth"}
	{:id "KAR_a10_Boss1H" :name "White King"}
	{:id "BRMA12_1H" :name "Chromaggus"}
	{:id "EX1_303" :name "Shadowflame"}
	{:id "NEW1_037" :name "Master Swordsmith"}
	{:id "EX1_611e" :name "Trapped"}
	{:id "EX1_033" :name "Windfury Harpy"}
	{:id "LOEA07_20" :name "Boom!"}
	{:id "AT_059" :name "Brave Archer"}
	{:id "TB_Coopv3_105" :name "Raid Healer"}
	{:id "CS2_087" :name "Blessing of Might"}
	{:id "TB_PickYourFate_8_Ench" :name "Fate 8 Get Armor"}
	{:id "OG_280" :name "C'Thun"}
	{:id "BRMA04_1" :name "Garr"}
	{:id "CRED_33" :name "Jomaro Kindred"}
	{:id "XXX_009e" :name "Empty Enchant"}
	{:id "EX1_573a" :name "Demigod's Favor"}
	{:id "BRM_010b" :name "Fire Hawk Form"}
	{:id "BRMA12_3" :name "Brood Affliction: Red"}
	{:id "CS2_092e" :name "Blessing of Kings"}
	{:id "NEW1_007b" :name "Starfall"}
	{:id "OG_284" :name "Twilight Geomancer"}
	{:id "LOE_017" :name "Keeper of Uldaman"}
	{:id "GVG_012" :name "Light of the Naaru"}
	{:id "LOEA09_9" :name "Naga Repellent"}
	{:id "OG_044b" :name "Druid of the Flame"}
	{:id "OG_301" :name "Ancient Shieldbearer"}
	{:id "LOEA05_02a" :name "Trogg Hate Minions!"}
	{:id "GVG_017" :name "Call Pet"}
	{:id "OG_087" :name "Servant of Yogg-Saron"}
	{:id "OG_241a" :name "Shadowbeast"}
	{:id "LOEA06_04" :name "Shattering Spree"}
	{:id "TB_KTRAF_10e" :name "Dark Power"}
	{:id "NAX15_05" :name "Mr. Bigglesworth"}
	{:id "TB_KTRAF_HP_KT_3" :name "Necromancy"}
	{:id "TB_ClassRandom_Warrior" :name "Second Class: Warrior"}
	{:id "EX1_158" :name "Soul of the Forest"}
	{:id "FP1_031" :name "Baron Rivendare"}
	{:id "EX1_158t" :name "Treant"}
	{:id "TB_KTRAF_2" :name "Lady Blaumeux"}
	{:id "AT_097" :name "Tournament Attendee"}
	{:id "FP1_001" :name "Zombie Chow"}
	{:id "GVG_094" :name "Jeeves"}
	{:id "AT_068e" :name "Bolstered"}
	{:id "CS2_200" :name "Boulderfist Ogre"}
	{:id "TB_Coopv3_101" :name "Freewheeling Skulker"}
	{:id "BRMA12_8te" :name "Draconic Lineage"}
	{:id "AT_121e" :name "Huge Ego"}
	{:id "TB_015" :name "Pirate"}
	{:id "OG_179" :name "Fiery Bat"}
	{:id "TB_KaraPortal_002" :name "Call Mediva"}
	{:id "NAX11_01" :name "Grobbulus"}
	{:id "EX1_298" :name "Ragnaros the Firelord"}
	{:id "TB_ClassRandom_Paladin" :name "Second Class: Paladin"}
	{:id "XXX_110" :name "Yogg-Saron Test (Auto)"}
	{:id "CS2_101" :name "Reinforce"}
	{:id "BRM_024e" :name "Large Talons"}
	{:id "NAX4_01H" :name "Noth the Plaguebringer"}
	{:id "NAX12_04e" :name "Enrage"}
	{:id "TB_GP_01e_copy1" :name "Shadow Tower Give My minions Stealth"}
	{:id "TB_DecreasingCardCostDebug" :name "TBDecreasingCardCostDebug"}
	{:id "BRMA15_4" :name "Aberration"}
	{:id "NAX2_05" :name "Worshipper"}
	{:id "KAR_096" :name "Prince Malchezaar"}
	{:id "BRMA12_7H" :name "Brood Affliction: Bronze"}
	{:id "EX1_363e2" :name "Blessing of Wisdom"}
	{:id "LOEA15_1H" :name "Rafaam"}
	{:id "EX1_023" :name "Silvermoon Guardian"}
	{:id "AT_063t" :name "Dreadscale"}
	{:id "CS2_034_H2" :name "Fireblast"}
	{:id "OG_027" :name "Evolve"}
	{:id "EX1_302" :name "Mortal Coil"}
	{:id "EX1_164a" :name "Nourish"}
	{:id "NAX1h_04" :name "Skitter"}
	{:id "PlaceholderCard" :name "Placeholder Card"}
	{:id "EX1_241" :name "Lava Burst"}
	{:id "NAX11_01H" :name "Grobbulus"}
	{:id "XXX_109" :name "Illidan Stormrage Cheat"}
	{:id "TU4c_007" :name "Mukla's Big Brother"}
	{:id "EX1_238" :name "Lightning Bolt"}
	{:id "CS2_101t" :name "Silver Hand Recruit"}
	{:id "EX1_301" :name "Felguard"}
	{:id "BRMA04_4" :name "Rock Out"}
	{:id "CS2_032" :name "Flamestrike"}
	{:id "XXX_013" :name "Discard"}
	{:id "NAX4_04H" :name "Raise Dead"}
	{:id "AT_008" :name "Coldarra Drake"}
	{:id "LOE_010" :name "Pit Snake"}
	{:id "NAX15_01H" :name "Kel'Thuzad"}
	{:id "NAX4_05" :name "Plague"}
	{:id "EX1_534t" :name "Hyena"}
	{:id "BRMA02_2H" :name "Jeering Crowd"}
	{:id "OG_149" :name "Ravaging Ghoul"}
	{:id "TB_CoOpv3_Boss" :name "Nefarian"}
	{:id "BRMA12_3H" :name "Brood Affliction: Red"}
	{:id "EX1_165b" :name "Bear Form"}
	{:id "GAME_005e" :name "The Coin"}
	{:id "GVG_076a" :name "Pistons"}
	{:id "FP1_014" :name "Stalagg"}
	{:id "LOEA09_3" :name "Getting Hungry"}
	{:id "BRMA04_4H" :name "Rock Out"}
	{:id "AT_132_SHAMANd" :name "Wrath of Air Totem"}
	{:id "LOEA01_12h" :name "Tol'vir Hoplite"}
	{:id "TB_PickYourFate_6_2nd" :name "Dire Fate: Unstable Portals"}
	{:id "DS1_188e" :name "Gladiator's Longbow enchantment"}
	{:id "EX1_393e" :name "Enraged"}
	{:id "CS2_022e" :name "Polymorph"}
	{:id "BRMA02_2_2c_TB" :name "Jeering Crowd"}
	{:id "EX1_559" :name "Archmage Antonidas"}
	{:id "KAR_011" :name "Pompous Thespian"}
	{:id "LOEA10_3" :name "Murloc Tinyfin"}
	{:id "BRMA14_10H_TB" :name "Activate!"}
	{:id "BRMA03_1H" :name "Emperor Thaurissan"}
	{:id "KAR_A02_09" :name "Set the Table"}
	{:id "TB_CoOpv3_009e" :name "Going Nova"}
	{:id "EX1_tk31" :name "Mind Controlling"}
	{:id "GVG_112" :name "Mogor the Ogre"}
	{:id "TB_PickYourFate_10_Ench" :name "Fate"}
	{:id "CS2_197" :name "Ogre Magi"}
	{:id "FP1_022" :name "Voidcaller"}
	{:id "LOEA13_2" :name "Ancient Power"}
	{:id "CS2_118" :name "Magma Rager"}
	{:id "LOEA15_2" :name "Unstable Portal"}
	{:id "AT_045e" :name "Empowering Mist"}
	{:id "NAX7_04" :name "Massive Runeblade"}
	{:id "EX1_354" :name "Lay on Hands"}
	{:id "CS2_121" :name "Frostwolf Grunt"}
	{:id "TU4e_001" :name "Illidan Stormrage"}
	{:id "EX1_582" :name "Dalaran Mage"}
	{:id "AT_131" :name "Eydis Darkbane"}
	{:id "LOEA16_20e" :name "Blessed"}
	{:id "CS2_033" :name "Water Elemental"}
	{:id "EX1_279" :name "Pyroblast"}
	{:id "NAX8_02H_TB" :name "Harvest"}
	{:id "KARA_06_02heroic" :name "Julianne"}
	{:id "EX1_411e" :name "Bloodrage"}
	{:id "AT_015" :name "Convert"}
	{:id "KARA_04_01" :name "Dorothee"}
	{:id "NAX12_01H" :name "Gluth"}
	{:id "KAR_A10_06" :name "Black Bishop"}
	{:id "NEW1_021" :name "Doomsayer"}
	{:id "XXX_115e" :name "Destroy Played Card Enchantment"}
	{:id "OG_207" :name "Faceless Summoner"}
	{:id "GVG_034" :name "Mech-Bear-Cat"}
	{:id "OG_323" :name "Polluted Hoarder"}
	{:id "XXX_006" :name "Break Weapon"}
	{:id "LOEA07_03h" :name "Flee the Mine!"}
	{:id "TB_SPT_Minion2e" :name "Emboldened"}
	{:id "KARA_13_03H" :name "Orc Warrior"}
	{:id "GVG_053" :name "Shieldmaiden"}
	{:id "XXX_051" :name "Make Immune"}
	{:id "tt_010a" :name "Spellbender"}
	{:id "LOE_007" :name "Curse of Rafaam"}
	{:id "AT_119e" :name "Inspired"}
	{:id "LOEA09_4H" :name "Rare Spear"}
	{:id "KAR_A10_01" :name "Black Pawn"}
	{:id "CS2_038" :name "Ancestral Spirit"}
	{:id "NAX8_01" :name "Gothik the Harvester"}
	{:id "FP1_020e" :name "Vengeance"}
	{:id "GAME_003" :name "Coin's Vengeance"}
	{:id "BRM_014e" :name "Power Rager"}
	{:id "TB_CoOpv3_012" :name "Immolate"}
	{:id "EX1_595" :name "Cult Master"}
	{:id "KAR_006" :name "Cloaked Huntress"}
	{:id "BRM_031" :name "Chromaggus"}
	{:id "DREAM_01" :name "Laughing Sister"}
	{:id "EX1_155" :name "Mark of Nature"}
	{:id "LOEA15_2H" :name "Unstable Portal"}
	{:id "FP1_020" :name "Avenge"}
	{:id "KAR_A10_33" :name "Cheat"}
	{:id "XXX_015" :name "Crash"}
	{:id "BRMA17_5H" :name "Bone Minions"}
	{:id "TB_PickYourFate_2nd" :name "Pick Your Fate Randon 2nd"}
	{:id "XXX_095" :name "AI Buddy - All Charge!"}
	{:id "BRM_027" :name "Majordomo Executus"}
	{:id "TB_Coopv3_104" :name "Main Tank"}
	{:id "BRMA09_3Ht" :name "Old Horde Orc"}
	{:id "AT_054" :name "The Mistcaller"}
	{:id "NAX1h_03" :name "Nerubian"}
	{:id "NAX14_01H" :name "Sapphiron"}
	{:id "OG_291" :name "Shadowcaster"}
	{:id "NEW1_018e" :name "Treasure Crazed"}
	{:id "FP1_012" :name "Sludge Belcher"}
	{:id "OG_031" :name "Hammer of Twilight"}
	{:id "GVG_079" :name "Force-Tank MAX"}
	{:id "LOE_119" :name "Animated Armor"}
	{:id "OG_153" :name "Bog Creeper"}
	{:id "GVG_014" :name "Vol'jin"}
	{:id "TB_Murgstone_001" :name "Quest Coin"}
	{:id "EX1_561e" :name "Alexstrasza's Fire"}
	{:id "GVG_104a" :name "HERE TAKE BUFF."}
	{:id "LOE_089" :name "Wobbling Runts"}
	{:id "NAX15_01" :name "Kel'Thuzad"}
	{:id "AT_017e" :name "Twilight's Embrace"}
	{:id "LOEA04_30" :name "The Darkness"}
	{:id "BRMA01_4" :name "Get 'em!"}
	{:id "OG_080ae" :name "Bloodthistle"}
	{:id "CS2_059o" :name "Blood Pact"}
	{:id "BRMA05_1H" :name "Baron Geddon"}
	{:id "NAX12_02H_2c_TB" :name "Decimate"}
	{:id "AT_064" :name "Bash"}
	{:id "KARA_13_26" :name "Atiesh"}
	{:id "BRMA12_10" :name "Mutation"}
	{:id "XXX_064" :name "The Song That Ends the World"}
	{:id "NAX10_01H" :name "Patchwerk"}
	{:id "NEW1_036e" :name "Commanding Shout"}
	{:id "TU4e_005" :name "Flame Burst"}
	{:id "FP1_007" :name "Nerubian Egg"}
	{:id "Mekka4" :name "Poultryizer"}
	{:id "AT_042t2" :name "Sabertooth Panther"}
	{:id "EX1_405" :name "Shieldbearer"}
	{:id "TB_SPT_BossWeapon" :name "Armory"}
	{:id "AT_115e" :name "Fencing Practice"}
	{:id "BRMA14_2H" :name "Activate Arcanotron"}
	{:id "LOEA07_25" :name "Mechanical Parrot"}
	{:id "OG_024" :name "Flamewreathed Faceless"}
	{:id "OG_216" :name "Infested Wolf"}
	{:id "EX1_508" :name "Grimscale Oracle"}
	{:id "NAX10_03H" :name "Hateful Strike"}
	{:id "AT_082" :name "Lowly Squire"}
	{:id "EX1_116t" :name "Whelp"}
	{:id "EX1_306" :name "Succubus"}
	{:id "LOEA06_02t" :name "Earthen Statue"}
	{:id "GVG_004" :name "Goblin Blastmage"}
	{:id "BRMA08_1H" :name "General Drakkisath"}
	{:id "AT_009" :name "Rhonin"}
	{:id "NAX11_04" :name "Mutating Injection"}
	{:id "BRMA17_3" :name "Onyxia"}
	{:id "EX1_573t" :name "Treant"}
	{:id "OG_303e" :name "Sorcerous Devotion"}
	{:id "TU4c_005" :name "Hidden Gnome"}
	{:id "OG_147" :name "Corrupted Healbot"}
	{:id "TB_CoOpv3_005" :name "Cleave"}
	{:id "BRMA17_9" :name "Onyxiclaw"}
	{:id "LOE_110" :name "Ancient Shade"}
	{:id "AT_076" :name "Murloc Knight"}
	{:id "OG_195" :name "Wisps of the Old Gods"}
	{:id "KAR_013" :name "Purify"}
	{:id "NAX7_05" :name "Mind Control Crystal"}
	{:id "AT_041" :name "Knight of the Wild"}
	{:id "KARA_04_02hp" :name "Twister"}
	{:id "EX1_164" :name "Nourish"}
	{:id "BRMA15_2He" :name "Potion of Might"}
	{:id "OG_051" :name "Forbidden Ancient"}
	{:id "NAXM_001" :name "Necroknight"}
	{:id "TB_GP_01e_v2" :name "Shadow Tower Stealth"}
	{:id "TB_MechWar_Boss1_HeroPower" :name "Hello! Hello! Hello!"}
	{:id "EX1_607" :name "Inner Rage"}
	{:id "CS2_073" :name "Cold Blood"}
	{:id "EX1_611" :name "Freezing Trap"}
	{:id "HERO_02a" :name "Morgl the Oracle"}
	{:id "GVG_071" :name "Lost Tallstrider"}
	{:id "AT_081" :name "Eadric the Pure"}
	{:id "GVG_063" :name "Bolvar Fordragon"}
	{:id "OG_006b" :name "The Tidal Hand"}
	{:id "KARA_07_05heroic" :name "Stampeding Beast!"}
	{:id "NEW1_003" :name "Sacrificial Pact"}
	{:id "NEW1_014e" :name "Disguised"}
	{:id "EX1_178be" :name "Uprooted"}
	{:id "PRO_001" :name "Elite Tauren Chieftain"}
	{:id "GVG_100" :name "Floating Watcher"}
	{:id "EX1_128e" :name "Concealed"}
	{:id "AT_132_PRIEST" :name "Heal"}
	{:id "LOE_018e" :name "Trogg No Stupid"}
	{:id "LOEA16_20H" :name "Blessing of the Sun"}
	{:id "OG_044a" :name "Druid of the Claw"}
	{:id "BRMA05_3H" :name "Living Bomb"}
	{:id "XXX_052" :name "Grant Mega-Windfury"}
	{:id "CS2_031" :name "Ice Lance"}
	{:id "AT_013" :name "Power Word: Glory"}
	{:id "BRMA13_5" :name "Son of the Flame"}
	{:id "AT_050" :name "Charged Hammer"}
	{:id "NEW1_007a" :name "Starfall"}
	{:id "LOEA01_11he" :name "Heroic Mode"}
	{:id "BRMA15_3" :name "Release the Aberrations!"}
	{:id "BRMA10_4" :name "Corrupted Egg"}
	{:id "BRMC_94" :name "Sulfuras"}
	{:id "TB_KTRAF_4m" :name "Spectral Gothik"}
	{:id "AT_099t" :name "War Kodo"}
	{:id "AT_084e" :name "Equipped"}
	{:id "EX1_001e" :name "Warded"}
	{:id "BRMA14_10" :name "Activate!"}
	{:id "LOEA01_02h" :name "Blessings of the Sun"}
	{:id "OG_102e" :name "Power Transfer"}
	{:id "PRO_001b" :name "Rogues Do It..."}
	{:id "OG_337e" :name "Eve of Destruction"}
	{:id "EX1_623" :name "Temple Enforcer"}
	{:id "KARA_13_06H" :name "Prince Malchezaar"}
	{:id "EX1_363e" :name "Blessing of Wisdom"}
	{:id "BRMA17_5" :name "Bone Minions"}
	{:id "LOEA01_01" :name "Sun Raider Phaerix"}
	{:id "EX1_002" :name "The Black Knight"}
	{:id "BRMA04_2" :name "Magma Pulse"}
	{:id "OG_113e" :name "Power of the People"}
	{:id "KAR_702" :name "Menagerie Magician"}
	{:id "OG_133" :name "N'Zoth the Corruptor"}
	{:id "NEW1_033" :name "Leokk"}
	{:id "EX1_248" :name "Feral Spirit"}
	{:id "FP1_029" :name "Dancing Swords"}
	{:id "BRM_004e" :name "Twilight Endurance"}
	{:id "GVG_083" :name "Upgraded Repair Bot"}
	{:id "BRM_004t" :name "Whelp"}
	{:id "NAX1_01" :name "Anub'Rekhan"}
	{:id "LOEA04_30a" :name "Take the Shortcut"}
	{:id "GVG_037" :name "Whirling Zap-o-matic"}
	{:id "LOEA15_3H" :name "Boneraptor"}
	{:id "GVG_123" :name "Soot Spewer"}
	{:id "KAR_A10_05" :name "White Bishop"}
	{:id "FP1_025" :name "Reincarnate"}
	{:id "LOEA16_4" :name "Timepiece of Horror"}
	{:id "AT_110" :name "Coliseum Manager"}
	{:id "GVG_013" :name "Cogmaster"}
	{:id "BRMA04_1H" :name "Garr"}
	{:id "NAX6_03" :name "Deathbloom"}
	{:id "LOE_050" :name "Mounted Raptor"}
	{:id "EX1_160a" :name "Summon a Panther"}
	{:id "OG_150e" :name "Enraged"}
	{:id "KARA_09_06" :name "Shadow Volley"}
	{:id "LOEA13_1h" :name "Skelesaurus Hex"}
	{:id "AT_045" :name "Aviana"}
	{:id "OG_116" :name "Spreading Madness"}
	{:id "NEW1_012o" :name "Mana Gorged"}
	{:id "KAR_004" :name "Cat Trick"}
	{:id "XXX_003" :name "Restore 1"}
	{:id "BRM_022t" :name "Black Whelp"}
	{:id "NAX4_01" :name "Noth the Plaguebringer"}
	{:id "XXX_049" :name "Destroy all Mana"}
	{:id "AT_006" :name "Dalaran Aspirant"}
	{:id "OG_090" :name "Cabalist's Tome"}
	{:id "Mekka1" :name "Homing Chicken"}
	{:id "XXX_025" :name "Do Nothing"}
	{:id "PART_004e" :name "Cloaked"}
	{:id "BRMA09_2_TB" :name "Open the Gates"}
	{:id "BRMC_93" :name "Omnotron Defense System"}
	{:id "BRMA09_4H" :name "Blackwing"}
	{:id "LOE_073e" :name "Fossilized"}
	{:id "NAX3_01H" :name "Maexxna"}
	{:id "EX1_506a" :name "Murloc Scout"}
	{:id "LOEA02_04" :name "Wish for Valor"}
	{:id "BRMA01_2" :name "Pile On!"}
	{:id "BRMA03_3" :name "Moira Bronzebeard"}
	{:id "LOEA07_24" :name "Spiked Decoy"}
	{:id "BRMA01_2H_2_TB" :name "Pile On!!!"}
	{:id "TB_KTRAF_08w" :name "Massive Runeblade"}
	{:id "LOE_018" :name "Tunnel Trogg"}
	{:id "TB_FactionWar_Herald" :name "Herold"}
	{:id "TB_013_PickOnCurve" :name "Player Choice Enchant On Curve"}
	{:id "KAR_A02_02H" :name "Spoon"}
	{:id "EX1_543" :name "King Krush"}
	{:id "AT_065e" :name "King's Defender"}
	{:id "KAR_A01_02e" :name "Reflection"}
	{:id "NAX12_02H" :name "Decimate"}
	{:id "LOEA04_29a" :name "Touch It"}
	{:id "CRED_42" :name "Tim Erskine"}
	{:id "CS2_117" :name "Earthen Ring Farseer"}
	{:id "EX1_160b" :name "Leader of the Pack"}
	{:id "LOEA09_2eH" :name "Enraged"}
	{:id "CRED_43" :name "Jon Bankard"}
	{:id "GVG_059" :name "Coghammer"}
	{:id "CS2_151" :name "Silver Hand Knight"}
	{:id "CS2_004" :name "Power Word: Shield"}
	{:id "LOEA16_5" :name "Mirror of Doom"}
	{:id "TB_PickYourFate7Ench" :name "Fate 7 Ench Get a Coin"}
	{:id "CS2_141" :name "Ironforge Rifleman"}
	{:id "OG_173a" :name "The Ancient One"}
	{:id "OG_293" :name "Dark Arakkoa"}
	{:id "NAX14_04" :name "Pure Cold"}
	{:id "BRM_018e" :name "Unchained!"}
	{:id "KARA_04_05" :name "Flying Monkey"}
	{:id "EX1_360e" :name "Humility"}
	{:id "GVG_056" :name "Iron Juggernaut"}
	{:id "EX1_275" :name "Cone of Cold"}
	{:id "LOE_017e" :name "Watched"}
	{:id "BRMC_86e" :name "I Hear You..."}
	{:id "BRMA12_7" :name "Brood Affliction: Bronze"}
	{:id "AT_023" :name "Void Crusher"}
	{:id "CS2_102" :name "Armor Up!"}
	{:id "NAX3_02H" :name "Web Wrap"}
	{:id "TB_Coopv3_103" :name "Intrepid Dragonstalker"}
	{:id "LOEA16_2" :name "Staff of Origination"}
	{:id "LOEA16_19" :name "Sun Raider Phaerix"}
	{:id "CRED_46" :name "Keith Landes"}
	{:id "NAX12_04" :name "Enrage"}
	{:id "LOEA02_10c" :name "Misha"}
	{:id "BRMA05_3" :name "Living Bomb"}
	{:id "DS1h_292_H1" :name "Steady Shot"}
	{:id "NEW1_031" :name "Animal Companion"}
	{:id "FP1_018" :name "Duplicate"}
	{:id "LOEA04_29" :name "The Eye"}
	{:id "FP1_002t" :name "Spectral Spider"}
	{:id "NEW1_036e2" :name "Commanding Shout"}
	{:id "XXX_057" :name "Destroy Target Secrets"}
	{:id "NAX12_02e" :name "Decimate"}
	{:id "GVG_032a" :name "Gift of Mana"}
	{:id "CS2_077" :name "Sprint"}
	{:id "NAX13_02" :name "Polarity Shift"}
	{:id "EX1_011" :name "Voodoo Doctor"}
	{:id "CRED_07" :name "Zwick"}
	{:id "NAX8_05t" :name "Spectral Rider"}
	{:id "LOE_030e" :name "Hollow"}
	{:id "LOEA04_01h" :name "Temple Escape"}
	{:id "NEW1_029t" :name "Kill Millhouse!"}
	{:id "GVG_021" :name "Mal'Ganis"}
	{:id "EX1_407" :name "Brawl"}
	{:id "KAR_037t" :name "Secrets of Karazhan"}
	{:id "NEW1_020" :name "Wild Pyromancer"}
	{:id "BRMA07_3" :name "TIME FOR SMASH"}
	{:id "GVG_110t" :name "Boom Bot"}
	{:id "KARA_08_02e" :name "Nether Rage"}
	{:id "KAR_026t" :name "Pawn"}
	{:id "EX1_059e" :name "Experiments!"}
	{:id "TB_011" :name "Tarnished Coin"}
	{:id "GVG_116" :name "Mekgineer Thermaplugg"}
	{:id "LOEA12_2H" :name "Pearl of the Tides"}
	{:id "GVG_020" :name "Fel Cannon"}
	{:id "LOEA04_01e" :name "Temple Escape Enchant"}
	{:id "BRMA07_2_2_TB" :name "ME SMASH"}
	{:id "LOEA_01H" :name "Looming Presence"}
	{:id "CS1_129" :name "Inner Fire"}
	{:id "XXX_053" :name "Armor 100"}
	{:id "OG_138" :name "Nerubian Prophet"}
	{:id "AT_030" :name "Undercity Valiant"}
	{:id "BRMA06_1H" :name "Majordomo Executus"}
	{:id "LOE_019e" :name "Unearthed Raptor"}
	{:id "XXX_060" :name "Damage All"}
	{:id "LOEA09_5H" :name "Hungry Naga"}
	{:id "LOEA16_18H" :name "Zinaar"}
	{:id "NEW1_022" :name "Dread Corsair"}
	{:id "OG_202b" :name "Yogg-Saron's Magic"}
	{:id "AT_028e" :name "Chi Lance"}
	{:id "AT_044" :name "Mulch"}
	{:id "LOEA09_2e" :name "Enraged"}
	{:id "GVG_078" :name "Mechanical Yeti"}
	{:id "KARA_07_06heroic" :name "Demons Loose!"}
	{:id "CS2_092" :name "Blessing of Kings"}
	{:id "TB_SPT_Minion1e" :name "Will of Stormwind"}
	{:id "CS2_103" :name "Charge"}
	{:id "AT_038" :name "Darnassus Aspirant"}
	{:id "TBA01_1" :name "Ragnaros the Firelord"}
	{:id "LOE_023" :name "Dark Peddler"}
	{:id "LOEA04_23h" :name "Giant Insect"}
	{:id "TB_RMC_001" :name "TB_EnchRandomManaCost"}
	{:id "CRED_30" :name "JC Park"}
	{:id "EX1_162o" :name "Strength of the Pack"}
	{:id "OG_303" :name "Cult Sorcerer"}
	{:id "LOEA09_3c" :name "Getting Hungry"}
	{:id "GVG_009" :name "Shadowbomber"}
	{:id "LOEA16_18" :name "Zinaar"}
	{:id "AT_049e" :name "Power of the Bluff"}
	{:id "AT_011e" :name "Light's Blessing"}
	{:id "KARA_06_03hp" :name "True Love"}
	{:id "BRMA07_2H" :name "ME SMASH"}
	{:id "KARA_08_06" :name "Blue Portal"}
	{:id "EX1_289" :name "Ice Barrier"}
	{:id "XXX_018" :name "Destroy All Minions"}
	{:id "CRED_09" :name "Ben Thompson"}
	{:id "CS2_mirror" :name "Mirror Image"}
	{:id "LOE_115" :name "Raven Idol"}
	{:id "KARA_11_01heroic" :name "Nightbane"}
	{:id "CRED_16" :name "Hamilton Chu"}
	{:id "NAX13_01H" :name "Thaddius"}
	{:id "OG_283" :name "C'Thun's Chosen"}
	{:id "AT_051" :name "Elemental Destruction"}
	{:id "TU4e_004" :name "Warglaive of Azzinoth"}
	{:id "NAX8_01H" :name "Gothik the Harvester"}
	{:id "BRMA06_2" :name "The Majordomo"}
	{:id "OG_114a" :name "Icky Tentacle"}
	{:id "BRMA16_2" :name "Echolocate"}
	{:id "AT_066e" :name "Forges of Orgrimmar"}
	{:id "CS1_129e" :name "Inner Fire"}
	{:id "GVG_041" :name "Dark Wispers"}
	{:id "BRMC_100e" :name "Living Bomb"}
	{:id "TB_CoOpv3_BOSS4e" :name "Cowed"}
	{:id "EX1_563" :name "Malygos"}
	{:id "NEW1_019" :name "Knife Juggler"}
	{:id "GVG_025" :name "One-eyed Cheat"}
	{:id "LOEA04_24" :name "Anubisath Temple Guard"}
	{:id "GVG_084" :name "Flying Machine"}
	{:id "TB_PickYourFate_2_EnchMinion" :name "Fate"}
	{:id "LOEA02_05" :name "Wish for Glory"}
	{:id "OG_249" :name "Infested Tauren"}
	{:id "LOEA04_13bth" :name "Orsis Guard"}
	{:id "OG_158e" :name "Secrets of the Cult"}
	{:id "AT_065" :name "King's Defender"}
	{:id "GVG_086e" :name "Armor Plated"}
	{:id "EX1_166" :name "Keeper of the Grove"}
	{:id "LOE_104" :name "Entomb"}
	{:id "EX1_567" :name "Doomhammer"}
	{:id "PART_003" :name "Rusty Horn"}
	{:id "TU4f_001" :name "Lorewalker Cho"}
	{:id "GVG_085" :name "Annoy-o-Tron"}
	{:id "TB_CoOpv3_BOSSe" :name "WHY WON'T YOU DIE!?"}
	{:id "EX1_335" :name "Lightspawn"}
	{:id "AT_066" :name "Orgrimmar Aspirant"}
	{:id "BRMC_95h" :name "Core Hound Puppies"}
	{:id "CS2_028" :name "Blizzard"}
	{:id "AT_004" :name "Arcane Blast"}
	{:id "GVG_043e" :name "Glaivezooka"}
	{:id "AT_128" :name "The Skeleton Knight"}
	{:id "CS2_027" :name "Mirror Image"}
	{:id "OG_051e" :name "Forbidden Power"}
	{:id "EX1_055" :name "Mana Addict"}
	{:id "CS2_186" :name "War Golem"}
	{:id "KARA_00_02" :name "Legion"}
	{:id "TB_BlingBrawl_Hero1" :name "Valeera Sanguinar"}
	{:id "EX1_029" :name "Leper Gnome"}
	{:id "CS2_104" :name "Rampage"}
	{:id "TB_KTRAF_HP_RAF3" :name "Staff First Piece"}
	{:id "CS2_tk1" :name "Sheep"}
	{:id "EX1_131t" :name "Defias Bandit"}
	{:id "OG_322" :name "Blackwater Pirate"}
	{:id "GVG_103" :name "Micro Machine"}
	{:id "LOEA16_16" :name "Rummage"}
	{:id "KAR_A10_07" :name "Black Knight"}
	{:id "NAX11_02H_2_TB" :name "Poison Cloud"}
	{:id "TB_KTRAF_HP_RAF5" :name "Staff of Origination"}
	{:id "OG_320" :name "Midnight Drake"}
	{:id "AT_130" :name "Sea Reaver"}
	{:id "BRMA06_4" :name "Flamewaker Acolyte"}
	{:id "EX1_128" :name "Conceal"}
	{:id "CS2_051" :name "Stoneclaw Totem"}
	{:id "EX1_393" :name "Amani Berserker"}
	{:id "EX1_549" :name "Bestial Wrath"}
	{:id "BRM_016" :name "Axe Flinger"}
	{:id "LOE_113" :name "Everyfin is Awesome"}
	{:id "GVG_010b" :name "Velen's Chosen"}
	{:id "NEW1_033o" :name "Eye In The Sky"}
	{:id "OG_271e" :name "Terrifying Visage"}
	{:id "NEW1_009" :name "Healing Totem"}
	{:id "GVG_056t" :name "Burrowing Mine"}
	{:id "XXX_039" :name "Become Hogger"}
	{:id "TB_SPT_Minion3" :name "Swordsman"}
	{:id "LOEA01_11" :name "Rod of the Sun"}
	{:id "AT_086" :name "Saboteur"}
	{:id "NAX7_03" :name "Unbalancing Strike"}
	{:id "LOE_107" :name "Eerie Statue"}
	{:id "KARA_13_11" :name "Shadow Bolt Volley"}
	{:id "CS2_045" :name "Rockbiter Weapon"}
	{:id "BRMA13_2H" :name "True Form"}
	{:id "AT_075e" :name "Might of the Hostler"}
	{:id "NAX1_05" :name "Locust Swarm"}
	{:id "NAX9_07" :name "Mark of the Horsemen"}
	{:id "BRMC_98e" :name "Dragonlust"}
	{:id "NAX15_02H" :name "Frost Blast"}
	{:id "OG_309" :name "Princess Huhuran"}
	{:id "KAR_003b" :name "Coalesce the Moonlight"}
	{:id "DREAM_02" :name "Ysera Awakens"}
	{:id "EX1_145o" :name "Preparation"}
	{:id "NAX2_01" :name "Grand Widow Faerlina"}
	{:id "OG_218" :name "Bloodhoof Brave"}
	{:id "EX1_625t2" :name "Mind Shatter"}
	{:id "OG_114" :name "Forbidden Ritual"}
	{:id "FP1_011" :name "Webspinner"}
	{:id "CS2_181" :name "Injured Blademaster"}
	{:id "KARA_04_05h" :name "Flying Monkey"}
	{:id "tt_010" :name "Spellbender"}
	{:id "Mekka4t" :name "Chicken"}
	{:id "OG_279" :name "C'Thun"}
	{:id "EX1_508o" :name "Mlarggragllabl!"}
	{:id "AT_024e" :name "Dark Fusion"}
	{:id "KAR_075" :name "Moonglade Portal"}
	{:id "AT_109e" :name "Inspired"}
	{:id "TU4f_006" :name "Transcendence"}
	{:id "GVG_104" :name "Hobgoblin"}
	{:id "LOEA06_03eh" :name "Animated"}
	{:id "NAX8_02H" :name "Harvest"}
	{:id "CS2_171" :name "Stonetusk Boar"}
	{:id "XXX_048" :name "-1 Durability"}
	{:id "AT_042" :name "Druid of the Saber"}
	{:id "BRM_028e" :name "Imperial Favor"}
	{:id "LOEA09_2" :name "Enraged!"}
	{:id "NAX2_05H" :name "Worshipper"}
	{:id "TU4c_008e" :name "Might of Mukla"}
	{:id "AT_073" :name "Competitive Spirit"}
	{:id "BRM_012" :name "Fireguard Destroyer"}
	{:id "OG_058" :name "Rusty Hook"}
	{:id "GVG_118" :name "Troggzor the Earthinator"}
	{:id "AT_124" :name "Bolf Ramshield"}
	{:id "OG_276" :name "Blood Warriors"}
	{:id "GVG_113" :name "Foe Reaper 4000"}
	{:id "TU4f_006o" :name "Transcendence"}
	{:id "XXX_009" :name "Enchant"}
	{:id "DS1_070" :name "Houndmaster"}
	{:id "TB_PickYourFate_10" :name "Battlecry Bonus"}
	{:id "CS2_222" :name "Stormwind Champion"}
	{:id "OG_080b" :name "Kingsblood Toxin"}
	{:id "BRMA10_5" :name "Chromatic Drake"}
	{:id "AT_070" :name "Skycap'n Kragg"}
	{:id "GVG_046e" :name "The King"}
	{:id "LOEA09_3a" :name "Famished"}
	{:id "EX1_246e" :name "Hexxed"}
	{:id "GVG_109" :name "Mini-Mage"}
	{:id "AT_114" :name "Evil Heckler"}
	{:id "TB_MechWar_Minion1" :name "Mech Fan"}
	{:id "OG_272" :name "Twilight Summoner"}
	{:id "AT_031" :name "Cutpurse"}
	{:id "TB_ClassRandom_Hunter" :name "Second Class: Hunter"}
	{:id "CS2_182" :name "Chillwind Yeti"}
	{:id "LOE_019t" :name "Map to the Golden Monkey"}
	{:id "GVG_064" :name "Puddlestomper"}
	{:id "GVG_054" :name "Ogre Warmaul"}
	{:id "AT_067" :name "Magnataur Alpha"}
	{:id "LOEA16_24H" :name "Giantfin"}
	{:id "BRMC_99" :name "Garr"}
	{:id "AT_029" :name "Buccaneer"}
	{:id "EX1_610" :name "Explosive Trap"}
	{:id "EX1_317t" :name "Worthless Imp"}
	{:id "DS1_175" :name "Timber Wolf"}
	{:id "CS2_024" :name "Frostbolt"}
	{:id "EX1_004e" :name "Elune's Grace"}
	{:id "OG_292" :name "Forlorn Stalker"}
	{:id "BRM_002" :name "Flamewaker"}
	{:id "NAX5_03" :name "Mindpocalypse"}
	{:id "EX1_014te" :name "Bananas"}
	{:id "EX1_411e2" :name "Needs Sharpening"}
	{:id "LOEA16_1H" :name "Rafaam"}
	{:id "CRED_12" :name "Rachelle Davis"}
	{:id "OG_211" :name "Call of the Wild"}
	{:id "OG_216a" :name "Spider"}
	{:id "TBST_005" :name "OLDPvP Rogue"}
	{:id "CS2_189" :name "Elven Archer"}
	{:id "CS2_boar" :name "Boar"}
	{:id "OG_072" :name "Journey Below"}
	{:id "NAX11_02" :name "Poison Cloud"}
	{:id "FP1_028" :name "Undertaker"}
	{:id "CS2_104e" :name "Rampage"}
	{:id "EX1_584e" :name "Teachings of the Kirin Tor"}
	{:id "NAX8_04" :name "Unrelenting Warrior"}
	{:id "GVG_092t" :name "Chicken"}
	{:id "PART_006" :name "Reversing Switch"}
	{:id "EX1_178" :name "Ancient of War"}
	{:id "LOE_092" :name "Arch-Thief Rafaam"}
	{:id "BRM_008" :name "Dark Iron Skulker"}
	{:id "OG_120" :name "Anomalus"}
	{:id "CS2_080" :name "Assassin's Blade"}
	{:id "TB_PickYourFate_8_EnchRand" :name "Fate 8 Rand 2 armor each turn"}
	{:id "KAR_025a" :name "Candle"}
	{:id "LOEA02_06" :name "Wish for More Wishes"}
	{:id "LOE_076" :name "Sir Finley Mrrgglton"}
	{:id "AT_127" :name "Nexus-Champion Saraad"}
	{:id "NAX7_03H" :name "Unbalancing Strike"}
	{:id "HERO_09a" :name "Tyrande Whisperwind"}
	{:id "OG_229" :name "Ragnaros Lightlord"}
	{:id "BRMA14_9" :name "Magmatron"}
	{:id "LOE_012" :name "Tomb Pillager"}
	{:id "BRMA11_1H" :name "Vaelastrasz the Corrupt"}
	{:id "NEW1_027" :name "Southsea Captain"}
	{:id "TB_CoOpv3_011" :name "Don't Push Me!"}
	{:id "HERO_04a" :name "Lady Liadrin"}
	{:id "EX1_320" :name "Bane of Doom"}
	{:id "TB_DeckRecipe_MyDeckID" :name "My Deck ID"}
	{:id "AT_019" :name "Dreadsteed"}
	{:id "TB_Coopv3_100" :name "Dragonscale Warrior"}
	{:id "LOEA10_2H" :name "Mrglmrgl MRGL!"}
	{:id "EX1_021" :name "Thrallmar Farseer"}
	{:id "OG_300" :name "The Boogeymonster"}
	{:id "EX1_126" :name "Betrayal"}
	{:id "GVG_073" :name "Cobra Shot"}
	{:id "OG_042" :name "Y'Shaarj Rage Unbound"}
	{:id "TB_ClassRandom_Priest" :name "Second Class: Priest"}
	{:id "KAR_021" :name "Wicked Witchdoctor"}
	{:id "KARA_13_16" :name "Susie Sizzlesong"}
	{:id "XXX_030" :name "Opponent Disconnect"}
	{:id "BRMA01_1" :name "Coren Direbrew"}
	{:id "EX1_089" :name "Arcane Golem"}
	{:id "AT_071e" :name "Alexstrasza's Boon"}
	{:id "GVG_072" :name "Shadowboxer"}
	{:id "EX1_533" :name "Misdirection"}
	{:id "LOEA10_5" :name "Mrgl Mrgl Nyah Nyah"}
	{:id "TB_KTRAF_HP_RAF4" :name "Staff Two Pieces"}
	{:id "KARA_08_03H" :name "Nether Breath"}
	{:id "GVG_090" :name "Madder Bomber"}
	{:id "XXX_102" :name "Add 1 to Health."}
	{:id "NEW1_004" :name "Vanish"}
	{:id "GVG_051" :name "Warbot"}
	{:id "TB_PickYourFate_8rand" :name "Fate: Armor"}
	{:id "TB_PickYourFate_7_Ench_2nd" :name "Fate 7 Ench 2nd"}
	{:id "EX1_103e" :name "Mrghlglhal"}
	{:id "HERO_07" :name "Gul'dan"}
	{:id "EX1_414" :name "Grommash Hellscream"}
	{:id "CS2_108" :name "Execute"}
	{:id "OG_200" :name "Validated Doomsayer"}
	{:id "BRM_011" :name "Lava Shock"}
	{:id "TB_PickYourFate_11rand" :name "Dire Fate: Murlocs"}
	{:id "TB_KTRAF_6m" :name "Fallout Slime"}
	{:id "LOEA04_06b" :name "Walk Across Gingerly"}
	{:id "BRM_024" :name "Drakonid Crusher"}
	{:id "OG_293f" :name "Dark Guardian"}
	{:id "GVG_014a" :name "Shadowed"}
	{:id "BRM_020e" :name "Draconic Power"}
	{:id "OG_315e" :name "Reforged"}
	{:id "TB_KTRAF_101" :name "Darkness Calls"}
	{:id "EX1_304e" :name "Consume"}
	{:id "NAX6_02H" :name "Necrotic Aura"}
	{:id "KARA_05_02heroic" :name "Big Bad Claws"}
	{:id "BRMA09_2H" :name "Open the Gates"}
	{:id "CRED_24" :name "Dean Ayala"}
	{:id "AT_047" :name "Draenei Totemcarver"}
	{:id "DS1_070o" :name "Master's Presence"}
	{:id "DS1_055" :name "Darkscale Healer"}
	{:id "DREAM_03" :name "Emerald Drake"}
	{:id "NAX1_03" :name "Nerubian"}
	{:id "EX1_578" :name "Savagery"}
	{:id "GVG_030ae" :name "Attack Mode"}
	{:id "KARA_07_07heroic" :name "Haywire Mech!"}
	{:id "TB_FactionWar_AnnoySpell1" :name "Annoy-o-Tron Fanclub"}
	{:id "GVG_002" :name "Snowchugger"}
	{:id "TB_CoOpBossSpell_5" :name "Double Zap"}
	{:id "GVG_022b" :name "Tinker's Sharpsword Oil"}
	{:id "KARA_09_03heroic" :name "Many Imps!"}
	{:id "TB_Mini_1e" :name "Miniature"}
	{:id "XXX_040" :name "Hogger"}
	{:id "OG_339" :name "Skeram Cultist"}
	{:id "EX1_284" :name "Azure Drake"}
	{:id "TB_CoOpv3_002" :name "Twisted Light"}
	{:id "CRED_23" :name "Christopher Yim"}
	{:id "XXX_059" :name "Destroy Hero's Stuff"}
	{:id "BRMA02_2t" :name "Dark Iron Spectator"}
	{:id "BRMA16_3" :name "Sonic Breath"}
	{:id "AT_020" :name "Fearsome Doomguard"}
	{:id "AT_007" :name "Spellslinger"}
	{:id "LOE_009t" :name "Scarab"}
	{:id "BRMA05_3e" :name "Living Bomb"}
	{:id "TU4c_008" :name "Will of Mukla"}
	{:id "CS2_181e" :name "Full Strength"}
	{:id "OG_118f" :name "New Calling"}
	{:id "HERO_06" :name "Malfurion Stormrage"}
	{:id "EX1_531e" :name "Well Fed"}
	{:id "EX1_154a" :name "Wrath"}
	{:id "OG_218e" :name "Enraged"}
	{:id "NAX15_02" :name "Frost Blast"}
	{:id "EX1_509" :name "Murloc Tidecaller"}
	{:id "FP1_023e" :name "Power of the Ziggurat"}
	{:id "EX1_259" :name "Lightning Storm"}
	{:id "AT_105" :name "Injured Kvaldir"}
	{:id "ds1_whelptoken" :name "Whelp"}
	{:id "OG_102" :name "Darkspeaker"}
	{:id "KAR_712" :name "Violet Illusionist"}
	{:id "KAR_300" :name "Enchanted Raven"}
	{:id "GVG_030a" :name "Attack Mode"}
	{:id "BRMA09_2Ht" :name "Whelp"}
	{:id "HERO_02" :name "Thrall"}
	{:id "TB_PickYourFate_7" :name "Fate: Coin"}
	{:id "LOE_011" :name "Reno Jackson"}
	{:id "LOE_019" :name "Unearthed Raptor"}
	{:id "GVG_005" :name "Echo of Medivh"}
	{:id "XXX_043" :name "Mill 30"}
	{:id "AT_074" :name "Seal of Champions"}
	{:id "KARA_00_01H" :name "Prince Malchezaar"}
	{:id "BRMA16_1" :name "Atramedes"}
	{:id "BRMA14_1" :name "Omnotron Defense System"}
	{:id "EX1_025t" :name "Mechanical Dragonling"}
	{:id "TB_CoOpv3_BOSS3e" :name "Enough!"}
	{:id "BRM_020" :name "Dragonkin Sorcerer"}
	{:id "CS2_226" :name "Frostwolf Warlord"}
	{:id "AT_037a" :name "Living Roots"}
	{:id "LOEA16_24" :name "Giantfin"}
	{:id "EX1_312" :name "Twisting Nether"}
	{:id "CS2_125" :name "Ironfur Grizzly"}
	{:id "KAR_095e" :name "Well Fed"}
	{:id "XXX_027" :name "Server Crash"}
	{:id "EX1_591" :name "Auchenai Soulpriest"}
	{:id "KARA_08_05H" :name "Terrifying Roar"}
	{:id "TB_Coopv3_102" :name "Shadow or Light?"}
	{:id "EX1_008" :name "Argent Squire"}
	{:id "XXX_112" :name "Fill Deck"}
	{:id "KAR_A10_22H" :name "Castle"}
	{:id "OG_202" :name "Mire Keeper"}
	{:id "GVG_102" :name "Tinkertown Technician"}
	{:id "OG_321e" :name "Power of Faith"}
	{:id "BRMA12_4H" :name "Brood Affliction: Green"}
	{:id "LOEA09_10" :name "Hungry Naga"}
	{:id "AT_061" :name "Lock and Load"}
	{:id "EX1_016" :name "Sylvanas Windrunner"}
	{:id "BRMC_89" :name "Whirling Ash"}
	{:id "GVG_058" :name "Shielded Minibot"}
	{:id "KAR_a10_Boss2H_TB" :name "Black King"}
	{:id "EX1_409" :name "Upgrade!"}
	{:id "LOEA14_2H" :name "Platemail Armor"}
	{:id "LOEA07_18" :name "Dynamite"}
	{:id "KARA_06_03hpheroic" :name "True Love"}
	{:id "CS2_034_H1" :name "Fireblast"}
	{:id "NEW1_032" :name "Misha"}
	{:id "BRM_009" :name "Volcanic Lumberer"}
	{:id "LOEA13_1" :name "Skelesaurus Hex"}
	{:id "BRMA14_7H" :name "Electron"}
	{:id "OG_094" :name "Power Word: Tentacles"}
	{:id "EX1_283" :name "Frost Elemental"}
	{:id "skele11" :name "Skeleton"}
	{:id "BRMA12_2" :name "Brood Affliction"}
	{:id "AT_035" :name "Beneath the Grounds"}
	{:id "CS1_113" :name "Mind Control"}
	{:id "OG_033" :name "Tentacles for Arms"}
	{:id "LOEA16_25" :name "Lady Naz'jar"}
	{:id "EX1_173" :name "Starfire"}
	{:id "LOEA09_1H" :name "Lord Slitherspear"}
	{:id "EX1_158e" :name "Soul of the Forest"}
	{:id "CS2_063e" :name "Corruption"}
	{:id "XXX_023" :name "Destroy All Heroes"}
	{:id "CS2_041" :name "Ancestral Healing"}
	{:id "TB_PickYourFate_1_Ench" :name "Pick Your Fate 1 Ench"}
	{:id "EX1_009" :name "Angry Chicken"}
	{:id "CS2_201" :name "Core Hound"}
	{:id "LOEA16_7" :name "Benediction Splinter"}
	{:id "KAR_A10_02" :name "White Pawn"}
	{:id "NAX9_06" :name "Unholy Shadow"}
	{:id "NAX13_03" :name "Supercharge"}
	{:id "LOE_118" :name "Cursed Blade"}
	{:id "BRMA13_4" :name "Wild Magic"}
	{:id "LOE_053" :name "Djinni of Zephyrs"}
	{:id "EX1_083" :name "Tinkmaster Overspark"}
	{:id "EX1_132" :name "Eye for an Eye"}
	{:id "GVG_040" :name "Siltfin Spiritwalker"}
	{:id "KAR_702e" :name "A Simple Trick"}
	{:id "AT_042t" :name "Sabertooth Lion"}
	{:id "GVG_070" :name "Salty Dog"}
	{:id "BRMA05_2H" :name "Ignite Mana"}
	{:id "TB_CoOpBossSpell_6" :name "Kill the Lorewalker"}
	{:id "GVG_061" :name "Muster for Battle"}
	{:id "BRMA14_10H" :name "Activate!"}
	{:id "CS2_089" :name "Holy Light"}
	{:id "EX1_613" :name "Edwin VanCleef"}
	{:id "CRED_25" :name "Elizabeth Cho"}
	{:id "KARA_08_02H" :name "Nether Rage"}
	{:id "BRMA08_3" :name "Drakkisath's Command"}
	{:id "LOEA16_27H" :name "The Steel Sentinel"}
	{:id "KAR_114" :name "Barnes"}
	{:id "KARA_12_01H" :name "Shade of Aran"}
	{:id "KARA_00_06e" :name "Arcanely Powerful"}
	{:id "LOE_007t" :name "Cursed!"}
	{:id "AT_132_MAGE" :name "Fireblast Rank 2"}
	{:id "OG_223e" :name "Optimism"}
	{:id "EX1_046e" :name "Tempered"}
	{:id "GVG_060e" :name "Well Equipped"}
	{:id "EX1_080o" :name "Keeping Secrets"}
	{:id "GVG_106e" :name "Junked Up"}
	{:id "EX1_603" :name "Cruel Taskmaster"}
	{:id "AT_132_WARRIOR" :name "Tank Up!"}
	{:id "AT_089" :name "Boneguard Lieutenant"}
	{:id "BRMA12_8t" :name "Chromatic Dragonkin"}
	{:id "XXX_016" :name "Snake Ball"}
	{:id "KARA_07_01" :name "Curator"}
	{:id "GVG_006" :name "Mechwarper"}
	{:id "GVG_048e" :name "Metal Teeth"}
	{:id "BRMA14_6H" :name "Activate Electron"}
	{:id "KAR_A02_04H" :name "Knife"}
	{:id "LOEA02_02" :name "DjinnΓÇÖs Intuition"}
	{:id "BRMA16_4" :name "Reverberating Gong"}
	{:id "KARA_00_03H" :name "Medivh"}
	{:id "GVG_111t" :name "V-07-TR-0N"}
	{:id "EX1_570" :name "Bite"}
	{:id "KARA_13_06" :name "Prince Malchezaar"}
	{:id "OG_271" :name "Scaled Nightmare"}
	{:id "TB_KaraPortal_003" :name "Saddened Hero Enchant"}
	{:id "BRMA10_3" :name "The Rookery"}
	{:id "XXX_058" :name "Weapon Nerf"}
	{:id "TU4e_003" :name "Naga Myrmidon"}
	{:id "TB_MechWar_Boss2_HeroPower" :name "Boom Bot Jr."}
	{:id "OG_337" :name "Cyclopian Horror"}
	{:id "EX1_544" :name "Flare"}
	{:id "OG_295" :name "Cult Apothecary"}
	{:id "KARA_12_01" :name "Shade of Aran"}
	{:id "XXX_026" :name "Enable Emotes"}
	{:id "BRMA05_3He" :name "Living Bomb"}
	{:id "FP1_006" :name "Deathcharger"}
	{:id "KAR_070" :name "Ethereal Peddler"}
	{:id "CS2_097" :name "Truesilver Champion"}
	{:id "GVG_018" :name "Mistress of Pain"}
	{:id "TB_Dorothee_001" :name "Dorothee"}
	{:id "OG_174e" :name "Faceless"}
	{:id "BRMA17_5_TB" :name "Bone Minions"}
	{:id "EX1_572" :name "Ysera"}
	{:id "OG_202c" :name "Slime"}
	{:id "EX1_130" :name "Noble Sacrifice"}
	{:id "AT_113" :name "Recruiter"}
	{:id "EX1_057" :name "Ancient Brewmaster"}
	{:id "BRMC_90" :name "Living Lava"}
	{:id "EX1_043e" :name "Hour of Twilight"}
	{:id "NAX1h_01" :name "Anub'Rekhan"}
	{:id "OG_317" :name "Deathwing Dragonlord"}
	{:id "KARA_07_03heroic" :name "Murlocs Escaping!"}
	{:id "BRMC_97e" :name "Burning Adrenaline"}
	{:id "tt_004o" :name "Cannibalize"}
	{:id "NEW1_029" :name "Millhouse Manastorm"}
	{:id "TB_SPT_Minion1" :name "Shieldsman"}
	{:id "GVG_092" :name "Gnomish Experimenter"}
	{:id "EX1_tk28" :name "Squirrel"}
	{:id "EX1_137" :name "Headcrack"}
	{:id "PRO_001at" :name "Murloc"}
	{:id "BRM_011t" :name "Lava Shock"}
	{:id "TBUD_1" :name "TBUD Summon Early Minion"}
	{:id "OG_198" :name "Forbidden Healing"}
	{:id "KARA_09_01heroic" :name "Terestian Illhoof"}
	{:id "LOEA10_2" :name "Mrglmrgl MRGL!"}
	{:id "LOEA04_27" :name "Animated Statue"}
	{:id "EX1_345t" :name "Shadow of Nothing"}
	{:id "XXX_029" :name "Opponent Concede"}
	{:id "OG_314" :name "Blood To Ichor"}
	{:id "EX1_379" :name "Repentance"}
	{:id "GVG_111" :name "Mimiron's Head"}
	{:id "CS2_049_H1_AT_132" :name "Totemic Slam"}
	{:id "NAX8_03t" :name "Spectral Trainee"}
	{:id "LOEA09_3d" :name "Getting Hungry"}
	{:id "KAR_004a" :name "Cat in a Hat"}
	{:id "GVG_075" :name "Ship's Cannon"}
	{:id "BRMA12_2H" :name "Brood Affliction"}
	{:id "KAR_A02_03" :name "Fork"}
	{:id "LOEA13_2H" :name "Ancient Power"}
	{:id "XXX_111e" :name "All Charge All Windfury All The Time"}
	{:id "EX1_549o" :name "Bestial Wrath"}
	{:id "KAR_A02_04" :name "Knife"}
	{:id "TB_Superfriends001" :name "Offensive Play"}
	{:id "LOEA01_02" :name "Blessings of the Sun"}
	{:id "TB_Face_Ench1" :name "Safe"}
	{:id "TB_013" :name "Player Choice Enchant"}
	{:id "AT_043" :name "Astral Communion"}
	{:id "KAR_033" :name "Book Wyrm"}
	{:id "EX1_178ae" :name "Rooted"}
	{:id "OG_328" :name "Master of Evolution"}
	{:id "LOEA02_10" :name "Wish for Companionship"}
	{:id "GVG_060" :name "Quartermaster"}
	{:id "EX1_396" :name "Mogu'shan Warden"}
	{:id "HERO_04" :name "Uther Lightbringer"}
	{:id "TB_PickYourFate_9_Ench" :name "Fate 9 Ench. Deathrattle bonus"}
	{:id "GVG_081" :name "Gilblin Stalker"}
	{:id "NAX7_01" :name "Instructor Razuvious"}
	{:id "KAR_a10_Boss1H_TB" :name "White King"}
	{:id "OG_044c" :name "Sabertooth Tiger"}
	{:id "GVG_030b" :name "Tank Mode"}
	{:id "AT_084" :name "Lance Carrier"}
	{:id "EX1_169" :name "Innervate"}
	{:id "LOE_089t3" :name "Grumbly Runt"}
	{:id "GVG_068" :name "Burly Rockjaw Trogg"}
	{:id "LOE_038" :name "Naga Sea Witch"}
	{:id "LOEA05_01" :name "Chieftain Scarvash"}
	{:id "KARA_08_06e2" :name "Blue Beam"}
	{:id "XXX_012" :name "Bounce"}
	{:id "KARA_00_08" :name "Archmage's Apprentice"}
	{:id "CS2_046" :name "Bloodlust"}
	{:id "LOEA16_1" :name "Rafaam"}
	{:id "EX1_536e" :name "Upgraded"}
	{:id "GVG_011" :name "Shrinkmeister"}
	{:id "KARA_07_07" :name "Haywire Mech!"}
	{:id "FP1_008" :name "Spectral Knight"}
	{:id "CS2_034_H1_AT_132" :name "Fireblast Rank 2"}
	{:id "CS2_146" :name "Southsea Deckhand"}
	{:id "AT_033" :name "Burgle"}
	{:id "AT_132_SHAMAN" :name "Totemic Slam"}
	{:id "KARA_13_17" :name "Mark Moonwalker"}
	{:id "GAME_002" :name "Avatar of the Coin"}
	{:id "GVG_074" :name "Kezan Mystic"}
	{:id "EX1_009e" :name "Enraged"}
	{:id "CS2_161" :name "Ravenholdt Assassin"}
	{:id "GAME_001" :name "Luck of the Coin"}
	{:id "LOE_020" :name "Desert Camel"}
	{:id "OG_291e" :name "Flickering Darkness"}
	{:id "BRMC_99e" :name "Rock Elemental"}
	{:id "TB_PickYourFate_7_EnchMiniom2nd" :name "Fate"}
	{:id "LOEA12_1" :name "Lady Naz'jar"}
	{:id "CS2_052" :name "Wrath of Air Totem"}
	{:id "EX1_010" :name "Worgen Infiltrator"}
	{:id "BRMA03_2" :name "Power of the Firelord"}
	{:id "OG_080ee" :name "Briarthorn"}
	{:id "LOE_111" :name "Excavated Evil"}
	{:id "HERO_01" :name "Garrosh Hellscream"}
	{:id "EX1_005" :name "Big Game Hunter"}
	{:id "GVG_091" :name "Arcane Nullifier X-21"}
	{:id "FP1_009" :name "Deathlord"}
	{:id "CS2_231" :name "Wisp"}
	{:id "KAR_205" :name "Silverware Golem"}
	{:id "NAX2_03" :name "Rain of Fire"}
	{:id "EX1_020" :name "Scarlet Crusader"}
	{:id "GVG_049" :name "Gahz'rilla"}
	{:id "GVG_051e" :name "Enraged"}
	{:id "EX1_066" :name "Acidic Swamp Ooze"}
	{:id "EX1_043" :name "Twilight Drake"}
	{:id "NAX15_01e" :name "Interloper!"}
	{:id "TB_KTRAF_H_2" :name "Rafaam"}
	{:id "AT_090" :name "Mukla's Champion"}
	{:id "AT_096e" :name "Wound Up"}
	{:id "LOEA07_02" :name "Mine Shaft"}
	{:id "NAX12_03H" :name "Jaws"}
	{:id "NEW1_024o" :name "Greenskin's Command"}
	{:id "AT_132_SHAMANc" :name "Stoneclaw Totem"}
	{:id "NEW1_030" :name "Deathwing"}
	{:id "CS1_069" :name "Fen Creeper"}
	{:id "AT_095" :name "Silent Knight"}
	{:id "FP1_014t" :name "Thaddius"}
	{:id "OG_302" :name "Usher of Souls"}
	{:id "EX1_554t" :name "Snake"}
	{:id "LOE_073" :name "Fossilized Devilsaur"}
	{:id "LOEA07_09" :name "Chasing Trogg"}
	{:id "TB_SPT_Minion2" :name "Battle Standard"}
	{:id "KARA_13_02H" :name "The Horde"}
	{:id "LOE_046" :name "Huge Toad"}
	{:id "BRMA09_2t" :name "Whelp"}
	{:id "AT_058" :name "King's Elekk"}
	{:id "KARA_00_11" :name "Evocation"}
	{:id "BRMA14_9H" :name "Magmatron"}
	{:id "KARA_09_06heroic" :name "Shadow Volley"}
	{:id "EX1_398" :name "Arathi Weaponsmith"}
	{:id "LOEA16_23" :name "Lord Slitherspear"}
	{:id "AT_011" :name "Holy Champion"}
	{:id "NEW1_036" :name "Commanding Shout"}
	{:id "LOEA14_2" :name "Platemail Armor"}
	{:id "BRMA10_4H" :name "Corrupted Egg"}
	{:id "FP1_005e" :name "Consume"}
	{:id "TB_MP_01e" :name "Charge!"}
	{:id "LOEA12_2" :name "Pearl of the Tides"}
	{:id "KAR_037" :name "Avian Watcher"}
	{:id "OG_319" :name "Twin Emperor Vek'nilash"}
	{:id "XXX_062" :name "Armor 5"}
	{:id "GVG_023" :name "Goblin Auto-Barber"}
	{:id "LOEA06_03" :name "Animate Earthen"}
	{:id "EX1_604o" :name "Berserk"}
	{:id "CRED_39" :name "Ryan Chew"}
	{:id "NAX9_03H" :name "Thane Korth'azz"}
	{:id "LOEA16_22H" :name "Archaedas"}
	{:id "CRED_29" :name "Jason MacAllister"}
	{:id "TU4a_002" :name "Riverpaw Gnoll"}
	{:id "CRED_44" :name "Walter Kong"}
	{:id "EX1_604" :name "Frothing Berserker"}
	{:id "AT_088" :name "Mogor's Champion"}
	{:id "TB_008" :name "Rotten Banana"}
	{:id "CS2_155" :name "Archmage"}
	{:id "BRM_010" :name "Druid of the Flame"}
	{:id "KARA_09_04" :name "Dark Pact"}
	{:id "AT_111" :name "Refreshment Vendor"}
	{:id "TB_010" :name "Deckbuilding Enchant"}
	{:id "TB_CoOpv3_001" :name "Glorious Finale"}
	{:id "BRM_005" :name "Demonwrath"}
	{:id "OG_047e" :name "Spines"}
	{:id "CRED_05" :name "Kyle Harrison"}
	{:id "OG_325" :name "Carrion Grub"}
	{:id "KAR_A10_09" :name "White Queen"}
	{:id "OG_267" :name "Southsea Squidface"}
	{:id "HRW02_1" :name "Gearmaster Mechazod"}
	{:id "LOEA04_24h" :name "Anubisath Temple Guard"}
	{:id "EX1_355" :name "Blessed Champion"}
	{:id "AT_080" :name "Garrison Commander"}
	{:id "CS2_101_H1" :name "Reinforce"}
	{:id "NAX13_04H" :name "Feugen"}
	{:id "KAR_A02_01" :name "Plate"}
	{:id "EX1_554" :name "Snake Trap"}
	{:id "GVG_050" :name "Bouncing Blade"}
	{:id "OG_173" :name "Blood of The Ancient One"}
	{:id "DREAM_05e" :name "Nightmare"}
	{:id "OG_131" :name "Twin Emperor Vek'lor"}
	{:id "XXX_050" :name "Destroy a Mana Crystal"}
	{:id "TB_RandHero2_001" :name "TB_EnchWhosTheBossNow"}
	{:id "LOE_115a" :name "Raven Idol"}
	{:id "GVG_047" :name "Sabotage"}
	{:id "LOEA09_12" :name "Hungry Naga"}
	{:id "CRED_34" :name "Max Ma"}
	{:id "EX1_007" :name "Acolyte of Pain"}
	{:id "CRED_10" :name "Michael Schweitzer"}
	{:id "KARA_00_03" :name "Medivh"}
	{:id "CRED_45" :name "Jonas Laster"}
	{:id "KAR_030" :name "Cellar Spider"}
	{:id "NEW1_014" :name "Master of Disguise"}
	{:id "LOEA15_3" :name "Boneraptor"}
	{:id "EX1_tk29" :name "Devilsaur"}
	{:id "XXX_044" :name "Hand Swapper Minion"}
	{:id "TU4a_006" :name "Jaina Proudmoore"}
	{:id "AT_086e" :name "Villainy"}
	{:id "EX1_621" :name "Circle of Healing"}
	{:id "CS2_003" :name "Mind Vision"}
	{:id "EX1_597" :name "Imp Master"}
	{:id "LOEA02_01h" :name "Zinaar"}
	{:id "TU4a_005" :name "Massive Gnoll"}
	{:id "AT_132_HUNTER" :name "Ballista Shot"}
	{:id "EX1_412e" :name "Enraged"}
	{:id "XXX_097" :name "AI Buddy - Destroy Minions"}
	{:id "AT_005t" :name "Boar"}
	{:id "GVG_093" :name "Target Dummy"}
	{:id "GVG_019" :name "Demonheart"}
	{:id "EX1_019e" :name "Cleric's Blessing"}
	{:id "GVG_052" :name "Crush"}
	{:id "OG_188" :name "Klaxxi Amber-Weaver"}
	{:id "OG_086" :name "Forbidden Flame"}
	{:id "EX1_017" :name "Jungle Panther"}
	{:id "EX1_032" :name "Sunwalker"}
	{:id "EX1_165t2" :name "Druid of the Claw"}
	{:id "KARA_05_01hp" :name "Trembling"}
	{:id "KAR_044a" :name "Steward"}
	{:id "TU4b_001" :name "Millhouse Manastorm"}
	{:id "TB_PickYourFate_4" :name "Dire Fate: Card"}
	{:id "NAX5_02H" :name "Eruption"}
	{:id "XXX_054e" :name "Weapon Buff Enchant"}
	{:id "CS2_029" :name "Fireball"}
	{:id "BRMA15_2" :name "The Alchemist"}
	{:id "OG_158" :name "Zealous Initiate"}
	{:id "TB_PickYourFate_8" :name "Spell Bonus"}
	{:id "EX1_622" :name "Shadow Word: Death"}
	{:id "AT_085" :name "Maiden of the Lake"}
	{:id "EX1_382" :name "Aldor Peacekeeper"}
	{:id "AT_132_SHAMANb" :name "Searing Totem"}
	{:id "AT_027" :name "Wilfred Fizzlebang"}
	{:id "TU4c_004" :name "Stomp"}
	{:id "CS2_203" :name "Ironbeak Owl"}
	{:id "LOE_009e" :name "Sinister Power"}
	{:id "EX1_332" :name "Silence"}
	{:id "BRMA12_8" :name "Chromatic Mutation"}
	{:id "TB_KTRAF_4" :name "Gothik the Harvester"}
	{:id "KAR_092" :name "Medivh's Valet"}
	{:id "OG_254" :name "Eater of Secrets"}
	{:id "OG_195c" :name "Wisp"}
	{:id "EX1_624" :name "Holy Fire"}
	{:id "TB_BlingBrawl_Blade2e" :name "Blingtron's Blade HERO"}
	{:id "NAX12_03e" :name "Extra Teeth"}
	{:id "DS1_184" :name "Tracking"}
	{:id "NEW1_038o" :name "Growth"}
	{:id "PART_007" :name "Whirling Blades"}
	{:id "CRED_11" :name "Jay Baxter"}
	{:id "OG_206" :name "Stormcrack"}
	{:id "NAX4_04" :name "Raise Dead"}
	{:id "KARA_00_02H" :name "Legion"}
	{:id "AT_013e" :name "Power Word: Glory"}
	{:id "OG_195e" :name "Enormous"}
	{:id "GVG_122" :name "Wee Spellstopper"}
	{:id "CS2_005" :name "Claw"}
	{:id "TBA01_4" :name "Nefarian"}
	{:id "AT_106" :name "Light's Champion"}
	{:id "EX1_304" :name "Void Terror"}
	{:id "EX1_058" :name "Sunfury Protector"}
	{:id "AT_096" :name "Clockwork Knight"}
	{:id "KARA_05_02" :name "Big Bad Claws"}
	{:id "TB_CoOpBossSpell_1" :name "Prioritize"}
	{:id "KAR_711" :name "Arcane Giant"}
	{:id "TU4d_003" :name "Shotgun Blast"}
	{:id "BRMA11_3" :name "Burning Adrenaline"}
	{:id "CS2_012" :name "Swipe"}
	{:id "OG_254e" :name "Secretly Sated"}
	{:id "TB_KTRAF_11" :name "Sapphiron"}
	{:id "OG_300e" :name "Tasty!"}
	{:id "OG_330" :name "Undercity Huckster"}
	{:id "CRED_28" :name "He-Rim Woo"}
	{:id "KAR_A01_01H" :name "Magic Mirror"}
	{:id "OG_293e" :name "Arrakoa Devotion"}
	{:id "EX1_538t" :name "Hound"}
	{:id "KAR_003a" :name "Drink the Moonlight"}
	{:id "CS2_005o" :name "Claw"}
	{:id "CS2_017" :name "Shapeshift"}
	{:id "LOEA16_25H" :name "Lady Naz'jar"}
	{:id "EX1_084e" :name "Charge"}
	{:id "KARA_04_01h" :name "The Crone"}
	{:id "OG_151" :name "Tentacle of N'Zoth"}
	{:id "AT_027e" :name "Master Summoner"}
	{:id "TU4f_004" :name "Legacy of the Emperor"}
	{:id "TB_KTRAF_8" :name "Instructor Razuvious"}
	{:id "TU4c_002" :name "Barrel Toss"}
	{:id "EX1_412" :name "Raging Worgen"}
	{:id "BRM_006t" :name "Imp"}
	{:id "GAME_005" :name "The Coin"}
	{:id "BRMA14_8H" :name "Activate Magmatron"}
	{:id "OG_096" :name "Twilight Darkmender"}
	{:id "BRMA05_2" :name "Ignite Mana"}
	{:id "TB_PickYourFate_10_EnchMinion" :name "Bonus"}
	{:id "KARA_12_02" :name "Ley Lines"}
	{:id "GVG_065" :name "Ogre Brute"}
	{:id "KARA_13_22" :name "Mime"}
	{:id "KAR_A02_09eH" :name "Table Set"}
	{:id "NAX9_02" :name "Lady Blaumeux"}
	{:id "KARA_07_02e" :name "Protecting the Gallery"}
	{:id "CRED_15" :name "Andy Brock"}
	{:id "CS2_013" :name "Wild Growth"}
	{:id "AT_057o" :name "Groomed"}
	{:id "BRMC_95" :name "Golemagg"}
	{:id "AT_042b" :name "Panther Form"}
	{:id "NEW1_018" :name "Bloodsail Raider"}
	{:id "XXX_024" :name "Damage Reflector"}
	{:id "TB_LadyNazjar_PlayerEnch" :name "Transmute your minions"}
	{:id "GVG_033" :name "Tree of Life"}
	{:id "LOEA09_4" :name "Rare Spear"}
	{:id "AT_117e" :name "Ceremony"}
	{:id "AT_039" :name "Savage Combatant"}
	{:id "AT_073e" :name "Competitive Spirit"}
	{:id "AT_120" :name "Frost Giant"}
	{:id "KARA_13_11e" :name "Enfeeble"}
	{:id "TB_KTRAF_10" :name "Noth the Plaguebringer"}
	{:id "BRMA02_2" :name "Jeering Crowd"}
	{:id "GVG_080t" :name "Druid of the Fang"}
	{:id "BRMA16_1H" :name "Atramedes"}
	{:id "OG_028" :name "Thing from Below"}
	{:id "LOE_039" :name "Gorillabot A-3"}
	{:id "KARA_07_08heroic" :name "Dragons Free!"}
	{:id "FP1_013" :name "Kel'Thuzad"}
	{:id "KAR_A02_13H" :name "Be Our Guest"}
	{:id "GVG_028t" :name "Gallywix's Coin"}
	{:id "EX1_586" :name "Sea Giant"}
	{:id "LOEA07_26" :name "Consult Brann"}
	{:id "CS2_050" :name "Searing Totem"}
	{:id "AT_021" :name "Tiny Knight of Evil"}
	{:id "GVG_048" :name "Metaltooth Leaper"}
	{:id "LOEA05_01h" :name "Chieftain Scarvash"}
	{:id "GVG_046" :name "King of Beasts"}
	{:id "NAX3_03" :name "Necrotic Poison"}
	{:id "LOEA06_02" :name "Stonesculpting"}
	{:id "GVG_057a" :name "Seal of Light"}
	{:id "OG_122" :name "Mukla Tyrant of the Vale"}
	{:id "TB_CoOpv3_009" :name "Explosive Rune"}
	{:id "tt_004" :name "Flesheating Ghoul"}
	{:id "AT_133e" :name "Victory!"}
	{:id "TB_YoggServant_Enchant" :name "Yogg Servant Hero Enchant"}
	{:id "EX1_287" :name "Counterspell"}
	{:id "AT_047e" :name "Experienced"}
	{:id "TB_KTRAF_104" :name "Uncover Staff Piece"}
	{:id "BRMA17_6" :name "Bone Construct"}
	{:id "OG_234" :name "Darkshire Alchemist"}
	{:id "LOEA12_1H" :name "Lady Naz'jar"}
	{:id "AT_083e" :name "Dragonhawkery"}
	{:id "EX1_536" :name "Eaglehorn Bow"}
	{:id "EX1_136" :name "Redemption"}
	{:id "BRMA14_6" :name "Activate Electron"}
	{:id "DS1_175o" :name "Furious Howl"}
	{:id "CS2_150" :name "Stormpike Commando"}
	{:id "LOE_009" :name "Obsidian Destroyer"}
	{:id "XXX_047" :name "Destroy Deck"}
	{:id "OG_080e" :name "Fadeleaf Toxin"}
	{:id "AT_040" :name "Wildwalker"}
	{:id "GVG_108" :name "Recombobulator"}
	{:id "EX1_619" :name "Equality"}
	{:id "NAX4_03H" :name "Skeleton"}
	{:id "KAR_A10_10" :name "Black Queen"}
	{:id "KARA_06_01e" :name "Death-Marked Love"}
	{:id "AT_062" :name "Ball of Spiders"}
	{:id "LOEA_01" :name "Looming Presence"}
	{:id "LOEA09_3H" :name "Endless Hunger"}
	{:id "BRMA07_2" :name "ME SMASH"}
	{:id "EX1_399e" :name "Berserking"}
	{:id "GVG_031" :name "Recycle"}
	{:id "BRMA06_2H_TB" :name "The Majordomo"}
	{:id "BRMA09_4" :name "Blackwing"}
	{:id "LOEA04_23" :name "Giant Insect"}
	{:id "TB_CoOp_Mechazod2" :name "Overloaded Mechazod"}
	{:id "EX1_391" :name "Slam"}
	{:id "TU4f_002" :name "Pandaren Scout"}
	{:id "KARA_07_08" :name "Dragons Free!"}
	{:id "OG_094e" :name "Tentacles"}
	{:id "BRMA09_1" :name "Rend Blackhand"}
	{:id "BRMA13_4_2_TB" :name "Wild Magic"}
	{:id "BRMA11_1" :name "Vaelastrasz the Corrupt"}
	{:id "EX1_531" :name "Scavenging Hyena"}
	{:id "TB_Superfriends001e" :name "Facilitated"}
	{:id "DS1_188" :name "Gladiator's Longbow"}
	{:id "AT_037t" :name "Sapling"}
	{:id "EX1_399" :name "Gurubashi Berserker"}
	{:id "CS2_082" :name "Wicked Knife"}
	{:id "CS2_102_H1_AT_132" :name "Tank Up!"}
	{:id "GVG_089" :name "Illuminator"}
	{:id "NAX12_02" :name "Decimate"}
	{:id "EX1_317" :name "Sense Demons"}
	{:id "LOEA10_5H" :name "Mrgl Mrgl Nyah Nyah"}
	{:id "EX1_093" :name "Defender of Argus"}
	{:id "CRED_03" :name "Bob Fitch"}
	{:id "OG_222" :name "Rallying Blade"}
	{:id "XXX_100" :name "Yogg-Saron Test (Manual)"}
	{:id "EX1_145" :name "Preparation"}
	{:id "DS1_178" :name "Tundra Rhino"}
	{:id "TB_BlingBrawl_Weapon" :name "Foam Sword"}
	{:id "GVG_068a" :name "Metabolized Magic"}
	{:id "OG_047a" :name "Evolve Spines"}
	{:id "NAX6_04" :name "Sporeburst"}
	{:id "AT_091" :name "Tournament Medic"}
	{:id "CRED_08" :name "Ben Brode"}
	{:id "GVG_043" :name "Glaivezooka"}
	{:id "NEW1_027e" :name "Yarrr!"}
	{:id "EX1_116" :name "Leeroy Jenkins"}
	{:id "BRMA06_2H" :name "The Majordomo"}
	{:id "BRM_003e" :name "Dragon's Might"}
	{:id "NAX9_04H" :name "Sir Zeliek"}
	{:id "KARA_13_19e" :name "Saddened"}
	{:id "OG_312" :name "N'Zoth's First Mate"}
	{:id "EX1_294" :name "Mirror Entity"}
	{:id "EX1_608" :name "Sorcerer's Apprentice"}
	{:id "EX1_316e" :name "Power Overwhelming"}
	{:id "GVG_121" :name "Clockwork Giant"}
	{:id "LOE_047" :name "Tomb Spider"}
	{:id "LOEA16_26H" :name "Skelesaurus Hex"}
	{:id "KAR_029" :name "Runic Egg"}
	{:id "EX1_124" :name "Eviscerate"}
	{:id "OG_109" :name "Darkshire Librarian"}
	{:id "TB_KaraPortal_001" :name "Party Portal!"}
	{:id "TB_PickYourFate_7_2nd" :name "Dire Fate: Manaburst"}
	{:id "TBST_002" :name "OLDN3wb Mage"}
	{:id "NEW1_008b" :name "Ancient Secrets"}
	{:id "GVG_041a" :name "Dark Wispers"}
	{:id "EX1_365" :name "Holy Wrath"}
	{:id "KAR_A02_09e" :name "Table Set"}
	{:id "BRMA17_2" :name "Nefarian"}
	{:id "TB_MechWar_Boss2" :name "Boom Bot"}
	{:id "EX1_082" :name "Mad Bomber"}
	{:id "NAX8_04t" :name "Spectral Warrior"}
	{:id "AT_016e" :name "Confused"}
	{:id "KAR_062" :name "Netherspite Historian"}
	{:id "LOEA01_11h" :name "Rod of the Sun"}
	{:id "BRMA01_2H" :name "Pile On!"}
	{:id "LOEA09_3b" :name "Getting Hungry"}
	{:id "GVG_055" :name "Screwjank Clunker"}
	{:id "XXX_099" :name "AI Helper Buddy"}
	{:id "GVG_087" :name "Steamwheedle Sniper"}
	{:id "TB_Pilot1" :name "Mystery Pilot"}
	{:id "CS2_046e" :name "Bloodlust"}
	{:id "OG_248" :name "Am'gam Rager"}
	{:id "NEW1_008a" :name "Ancient Teachings"}
	{:id "LOE_061" :name "Anubisath Sentinel"}
	{:id "OG_267e" :name "Squid Oil Sheen"}
	{:id "CS2_042" :name "Fire Elemental"}
	{:id "CS2_009e" :name "Mark of the Wild"}
	{:id "EX1_590e" :name "Shadows of M'uru"}
	{:id "CS2_169" :name "Young Dragonhawk"}
	{:id "KAR_A02_09H" :name "Set the Table"}
	{:id "TB_GiftExchange_Enchantment" :name "Cheap Gift"}
	{:id "LOEA15_1" :name "Rafaam"}
	{:id "GVG_062" :name "Cobalt Guardian"}
	{:id "CRED_41" :name "Seyil Yoon"}
	{:id "TB_CoOpv3_104e" :name "Unity"}
	{:id "OG_308" :name "Giant Sand Worm"}
	{:id "AT_040e" :name "Kindred Spirit"}
	{:id "BRMA14_2" :name "Activate Arcanotron"}
	{:id "GVG_022" :name "Tinker's Sharpsword Oil"}
	{:id "OG_100" :name "Shadow Word: Horror"}
	{:id "AT_077" :name "Argent Lance"}
	{:id "LOEA02_03" :name "Wish for Power"}
	{:id "BRM_027p" :name "DIE INSECT!"}
	{:id "EX1_366" :name "Sword of Justice"}
	{:id "GVG_088" :name "Ogre Ninja"}
	{:id "KAR_A10_22" :name "Castle"}
	{:id "NAX6_01" :name "Loatheb"}
	{:id "AT_129" :name "Fjola Lightbane"}
	{:id "NAX12_02H_2_TB" :name "Decimate"}
	{:id "KAR_A02_11" :name "Tossing Plates"}
	{:id "EX1_004" :name "Young Priestess"}
	{:id "TU4f_003" :name "Shado-Pan Monk"}
	{:id "CS2_227" :name "Venture Co. Mercenary"}
	{:id "EX1_573ae" :name "Demigod's Favor"}
	{:id "XXX_028" :name "Reveal Hand"}
	{:id "LOE_019t2" :name "Golden Monkey"}
	{:id "KARA_13_13H" :name "Legion"}
	{:id "AT_132_ROGUE" :name "Poisoned Daggers"}
	{:id "FP1_002" :name "Haunted Creeper"}
	{:id "OG_339e" :name "Vassal's Subservience"}
	{:id "GVG_022a" :name "Tinker's Sharpsword Oil"}
	{:id "OG_080d" :name "Briarthorn Toxin"}
	{:id "LOEA04_01eh" :name "Temple Escape Enchant"}
	{:id "EX1_044" :name "Questing Adventurer"}
	{:id "KAR_009" :name "Babbling Book"}
	{:id "AT_132" :name "Justicar Trueheart"}
	{:id "XXX_045" :name "Steal Card"}
	{:id "KAR_A02_10" :name "Pour a Round"}
	{:id "AT_052" :name "Totem Golem"}
	{:id "OG_082" :name "Evolved Kobold"}
	{:id "XXX_115" :name "Destroy Played Cards"}
	{:id "CRED_19" :name "Beomki Hong"}
	{:id "LOEA16_16H" :name "Rummage"}
	{:id "FP1_019t" :name "Treant"}
	{:id "OG_034" :name "Silithid Swarmer"}
	{:id "NAX6_03te" :name "Fungal Growth"}
	{:id "BRMA14_1H" :name "Omnotron Defense System"}
	{:id "NEW1_038" :name "Gruul"}
	{:id "TB_FactionWar_BoomBot" :name "TBFactionWarBoomBot"}
	{:id "skele21" :name "Damaged Golem"}
	{:id "EX1_596" :name "Demonfire"}
	{:id "KAR_057" :name "Ivory Knight"}
	{:id "OG_142" :name "Eldritch Horror"}
	{:id "FP1_021" :name "Death's Bite"}
	{:id "NAX14_02" :name "Frost Breath"}
	{:id "GVG_027e" :name "Ironed Out"}
	{:id "EX1_506" :name "Murloc Tidehunter"}
	{:id "KAR_a10_Boss1" :name "White King"}
	{:id "FP1_010" :name "Maexxna"}
	{:id "AT_132_SHAMANa" :name "Healing Totem"}
	{:id "GVG_044" :name "Spider Tank"}
	{:id "AT_002" :name "Effigy"}
	{:id "EX1_323w" :name "Blood Fury"}
	{:id "KARA_09_08" :name "Kil'rek"}
	{:id "LOEA16_8" :name "Putress' Vial"}
	{:id "BRM_019" :name "Grim Patron"}
	{:id "HERO_05" :name "Rexxar"}
	{:id "EX1_590" :name "Blood Knight"}
	{:id "GVG_008" :name "Lightbomb"}
	{:id "LOEA09_1" :name "Lord Slitherspear"}
	{:id "NEW1_026t" :name "Violet Apprentice"}
	{:id "EX1_160" :name "Power of the Wild"}
	{:id "XXX_063" :name "Destroy ALL Secrets"}
	{:id "EX1_103" :name "Coldlight Seer"}
	{:id "KARA_06_01" :name "Romulo"}
	{:id "LOE_110t" :name "Ancient Curse"}
	{:id "BRMA09_1H" :name "Rend Blackhand"}
	{:id "LOEA02_01" :name "Zinaar"}
	{:id "LOEA16_15" :name "Ysera's Tear"}
	{:id "GVG_049e" :name "Might of Zul'Farrak"}
	{:id "LOE_061e" :name "Power of the Titans"}
	{:id "OG_195b" :name "Big Wisps"}
	{:id "LOE_022" :name "Fierce Monkey"}
	{:id "NAX10_02" :name "Hook"}
	{:id "CS2_056" :name "Life Tap"}
	{:id "KAR_A02_06" :name "Pitcher"}
	{:id "HERO_08" :name "Jaina Proudmoore"}
	{:id "EX1_363" :name "Blessing of Wisdom"}
	{:id "KARA_00_05" :name "Archmage's Insight"}
	{:id "EX1_398t" :name "Battle Axe"}
	{:id "LOE_113e" :name "Mrglllraawrrrglrur!"}
	{:id "OG_315" :name "Bloodsail Cultist"}
	{:id "KAR_026" :name "Protect the King!"}
	{:id "BRM_033e" :name "Dragon Blood"}
	{:id "EX1_409t" :name "Heavy Axe"}
	{:id "CS2_105" :name "Heroic Strike"}
	{:id "OG_123" :name "Shifter Zerus"}
	{:id "EX1_560" :name "Nozdormu"}
	{:id "EX1_310" :name "Doomguard"}
	{:id "KAR_005a" :name "Big Bad Wolf"}
	{:id "EX1_160t" :name "Panther"}
	{:id "EX1_258" :name "Unbound Elemental"}
	{:id "EX1_170" :name "Emperor Cobra"}
	{:id "GVG_066" :name "Dunemaul Shaman"}
	{:id "EX1_144" :name "Shadowstep"}
	{:id "EX1_162" :name "Dire Wolf Alpha"}
	{:id "AT_102" :name "Captured Jormungar"}
	{:id "BRM_003" :name "Dragon's Breath"}
	{:id "OG_239" :name "DOOM!"}
	{:id "TB_FactionWar_Boss_RagFirst" :name "The Majordomo"}
	{:id "OG_080" :name "Xaril Poisoned Mind"}
	{:id "EX1_012" :name "Bloodmage Thalnos"}
	{:id "LOE_003" :name "Ethereal Conjurer"}
	{:id "BRMA03_3H" :name "Moira Bronzebeard"}
	{:id "LOEA07_21" :name "Barrel Forward"}
	{:id "OG_080f" :name "Firebloom Toxin"}
	{:id "GVG_101e" :name "Pure"}
	{:id "CS2_004e" :name "Power Word: Shield"}
	{:id "NAX13_02e" :name "Polarity"}
	{:id "LOEA16_3" :name "Lantern of Power"}
	{:id "CS2_037" :name "Frost Shock"}
	{:id "LOE_008" :name "Eye of Hakkar"}
	{:id "OG_118" :name "Renounce Darkness"}
	{:id "OG_061" :name "On the Hunt"}
	{:id "TB_ClassRandom_Mage" :name "Second Class: Mage"}
	{:id "TB_013_PickOnCurve2" :name "Player Choice Enchant On Curve2"}
	{:id "BRMA14_3" :name "Arcanotron"}
	{:id "XXX_001" :name "Damage 1"}
	{:id "KAR_114e" :name "Incredible Impression"}
	{:id "KAR_a10_Boss2H" :name "Black King"}
	{:id "BRMA16_5" :name "Dragonteeth"}
	{:id "CS1_042" :name "Goldshire Footman"}
	{:id "EX1_408" :name "Mortal Strike"}
	{:id "LOE_021" :name "Dart Trap"}
	{:id "EX1_573" :name "Cenarius"}
	{:id "NAX13_01" :name "Thaddius"}
	{:id "EX1_154b" :name "Wrath"}
	{:id "GVG_063a" :name "Retribution"}
	{:id "KAR_a10_Boss2" :name "Black King"}
	{:id "GVG_039" :name "Vitality Totem"}
	{:id "OG_292e" :name "Night's Devotion"}
	{:id "LOE_105" :name "Explorer's Hat"}
	{:id "KAR_076" :name "Firelands Portal"}
	{:id "KARA_09_07" :name "Steal Life"}
	{:id "LOEA04_28b" :name "Wade Through"}
	{:id "TB_006e" :name "Big Banana"}
	{:id "OG_340" :name "Soggoth the Slitherer"}
	{:id "KAR_030a" :name "Pantry Spider"}
	{:id "LOEA07_02h" :name "Mine Shaft"}
	{:id "TB_ClassRandom_PickSecondClass" :name "Pick your second class"}
	{:id "CS2_025" :name "Arcane Explosion"}
	{:id "OG_080de" :name "Fadeleaf"}
	{:id "KARA_07_02" :name "Gallery Protection"}
	{:id "OG_162" :name "Disciple of C'Thun"}
	{:id "OG_270a" :name "Nerubian Soldier"}
	{:id "BRMA14_4H" :name "Activate Toxitron"}
	{:id "KAR_073" :name "Maelstrom Portal"}
	{:id "AT_021e" :name "Felrage"}
	{:id "KARA_13_01H" :name "Nazra Wildaxe"}
	{:id "KAR_A02_06e2" :name "Filled Up"}
	{:id "KARA_07_01heroic" :name "Curator"}
	{:id "FP1_030" :name "Loatheb"}
	{:id "CS2_222o" :name "Might of Stormwind"}
	{:id "LOEA09_5" :name "Hungry Naga"}
	{:id "TU4f_004o" :name "Legacy of the Emperor"}
	{:id "EX1_625t" :name "Mind Spike"}
	{:id "KAR_A02_12" :name "Silverware Golem"}
	{:id "BRMC_96" :name "High Justice Grimstone"}
	{:id "KARA_07_03" :name "Murloc Escaping!"}
	{:id "CRED_26" :name "Eric Del Priore"}
	{:id "DS1_178e" :name "Charge"}
	{:id "XXX_007" :name "Enable for Attack"}
	{:id "KARA_08_01" :name "Netherspite"}
	{:id "OG_080c" :name "Bloodthistle Toxin"}
	{:id "LOEA16_19H" :name "Sun Raider Phaerix"}
	{:id "EX1_620" :name "Molten Giant"}
	{:id "PART_002" :name "Time Rewinder"}
	{:id "LOE_026" :name "Anyfin Can Happen"}
	{:id "EX1_507e" :name "Mrgglaargl!"}
	{:id "NEW1_040" :name "Hogger"}
	{:id "OG_256" :name "Spawn of N'Zoth"}
	{:id "GVG_069" :name "Antique Healbot"}
	{:id "EX1_067" :name "Argent Commander"}
	{:id "TB_CoOpv3_101e" :name "Team Player Enchantment"}
	{:id "GVG_011a" :name "Shrink Ray"}
	{:id "AT_036t" :name "Nerubian"}
	{:id "AT_017" :name "Twilight Guardian"}
	{:id "KAR_094a" :name "Sharp Fork"}
	{:id "BRMA15_2H" :name "The Alchemist"}
	{:id "TB_SPT_Minion3e" :name "Strength of Stormwind"}
	{:id "NEW1_010" :name "Al'Akir the Windlord"}
	{:id "EX1_046" :name "Dark Iron Dwarf"}
	{:id "KAR_063" :name "Spirit Claws"}
	{:id "AT_099" :name "Kodorider"}
	{:id "FP1_024" :name "Unstable Ghoul"}
	{:id "EX1_097" :name "Abomination"}
	{:id "AT_069" :name "Sparring Partner"}
	{:id "TB_PickYourFate_9" :name "Deathrattle Bonus"}
	{:id "CS2_127" :name "Silverback Patriarch"}
	{:id "EX1_564" :name "Faceless Manipulator"}
	{:id "GVG_077" :name "Anima Golem"}
	{:id "TB_PickYourFateRandom" :name "Pick Your Fate Random"}
	{:id "AT_026" :name "Wrathguard"}
	{:id "KARA_12_03H" :name "Flame Wreath"}
	{:id "OG_023" :name "Primal Fusion"}
	{:id "CRED_14" :name "Yong Woo"}
	{:id "KAR_025" :name "Kara Kazham!"}
	{:id "GVG_086" :name "Siege Engine"}
	{:id "EX1_155b" :name "Mark of Nature"}
	{:id "GVG_024" :name "Cogmaster's Wrench"}
	{:id "EX1_048" :name "Spellbreaker"}
	{:id "EX1_250" :name "Earth Elemental"}
	{:id "OG_290e" :name "Caller Devotion"}
	{:id "CS2_063" :name "Corruption"}
	{:id "XXX_101" :name "Set health to full"}
	{:id "AT_025" :name "Dark Bargain"}
	{:id "LOEA04_25" :name "Seething Statue"}
	{:id "KAR_041" :name "Moat Lurker"}
	{:id "EX1_313" :name "Pit Lord"}
	{:id "BRMA11_2" :name "Essence of the Red"}
	{:id "LOEA07_03" :name "Flee the Mine!"}
	{:id "EX1_616" :name "Mana Wraith"}
	{:id "EX1_129" :name "Fan of Knives"}
	{:id "BRM_012e" :name "On Fire!"}
	{:id "BRMA13_4H" :name "Wild Magic"}
	{:id "EX1_277" :name "Arcane Missiles"}
	{:id "TB_KTRAF_3" :name "Gluth"}
	{:id "EX1_603e" :name "Whipped Into Shape"}
	{:id "TB_010e" :name "Choose One of Three"}
	{:id "AT_014e" :name "Shadowfiended"}
	{:id "KAR_A10_03" :name "Black Rook"}
	{:id "BRMC_91" :name "Son of the Flame"}
	{:id "CS2_075" :name "Sinister Strike"}
	{:id "BRMC_83" :name "Open the Gates"}
	{:id "EX1_379e" :name "Repentance"}
	{:id "LOEA16_23H" :name "Lord Slitherspear"}
	{:id "OG_282e" :name "Devotion of the Blade"}
	{:id "OG_047b" :name "Evolve Scales"}
	{:id "AT_117" :name "Master of Ceremonies"}
	{:id "CS2_034" :name "Fireblast"}
	{:id "KARA_09_07heroic" :name "Steal Life"}
	{:id "TB_009" :name "Create 15 Secrets"}
	{:id "TB_CoOp_Mechazod" :name "Gearmaster Mechazod"}
	{:id "EX1_334" :name "Shadow Madness"}
	{:id "FP1_027" :name "Stoneskin Gargoyle"}
	{:id "GVG_015" :name "Darkbomb"}
	{:id "GAME_006" :name "NOOOOOOOOOOOO"}
	{:id "KAR_710m" :name "Animated Shield"}
	{:id "CRED_17" :name "Rob Pardo"}
	{:id "OG_121e" :name "Dark Power"}
	{:id "TB_RandCardCost" :name "TBRandomCardCost"}
	{:id "BRMA03_1" :name "Emperor Thaurissan"}
	{:id "TB_MechWar_CommonCards" :name "TBMechWarCommonCards"}
	{:id "OG_045" :name "Infest"}
	{:id "CS2_065" :name "Voidwalker"}
	{:id "BRM_026" :name "Hungry Dragon"}
	{:id "KAR_097" :name "Medivh the Guardian"}
	{:id "OG_073" :name "Thistle Tea"}
	{:id "BRM_010a" :name "Firecat Form"}
	{:id "CS2_131" :name "Stormwind Knight"}
	{:id "BRMA15_1H" :name "Maloriak"}
	{:id "KARA_08_08" :name "Red Portal"}
	{:id "BRM_015" :name "Revenge"}
	{:id "AT_041e" :name "Call of the Wild"}
	{:id "CRED_37" :name "Ricardo Robaina"}
	{:id "TB_GiftExchange_Treasure_Spell" :name "Stolen Winter's Veil Gift"}
	{:id "EX1_finkle" :name "Finkle Einhorn"}
	{:id "XXX_010" :name "Silence - debug"}
	{:id "KAR_A02_13" :name "Be Our Guest"}
	{:id "CRED_22" :name "Cameron Chrisman"}
	{:id "AT_063" :name "Acidmaw"}
	{:id "EX1_102" :name "Demolisher"}
	{:id "AT_087" :name "Argent Horserider"}
	{:id "NEW1_023" :name "Faerie Dragon"}
	{:id "LOEA04_01" :name "Temple Escape"}
	{:id "AT_132_DRUIDe" :name "Dire Claws"}
	{:id "KARA_08_03" :name "Nether Breath"}
	{:id "EX1_598" :name "Imp"}
	{:id "TB_KTRAF_12" :name "Patchwerk"}
	{:id "DS1_233" :name "Mind Blast"}
	{:id "LOEA07_28" :name "Repairs"}
	{:id "EX1_316" :name "Power Overwhelming"}
	{:id "GVG_001" :name "Flamecannon"}
	{:id "EX1_583" :name "Priestess of Elune"}
	{:id "LOEA05_02ha" :name "Trogg Hate Minions!"}
	{:id "OG_220" :name "Malkorok"}
	{:id "EX1_044e" :name "Level Up!"}
	{:id "CS2_074" :name "Deadly Poison"}
	{:id "KARA_05_01h" :name "Big Bad Wolf"}
	{:id "GVG_035" :name "Malorne"}
	{:id "GVG_114" :name "Sneed's Old Shredder"}
	{:id "OG_070e" :name "Thirsty Blades"}
	{:id "EX1_390" :name "Tauren Warrior"}
	{:id "XXX_061" :name "Armor 1"}
	{:id "KARA_05_01hpheroic" :name "Trembling"}
	{:id "LOE_105e" :name "Explorer's Hat"}
	{:id "FP1_026" :name "Anub'ar Ambusher"}
	{:id "EX1_028" :name "Stranglethorn Tiger"}
	{:id "XXX_999_Crash" :name "Crash the server"}
	{:id "Mekka3" :name "Emboldener 3000"}
	{:id "KARA_00_06" :name "Arcane Power"}
	{:id "BRMA12_9" :name "Chromatic Dragonkin"}
	{:id "TB_ClassRandom_Druid" :name "Second Class: Druid"}
	{:id "BRMA17_4" :name "LAVA!"}
	{:id "BRMA07_1H" :name "Highlord Omokk"}
	{:id "BRM_030" :name "Nefarian"}
	{:id "EX1_587" :name "Windspeaker"}
	{:id "AT_012" :name "Spawn of Shadows"}
	{:id "GVG_041b" :name "Dark Wispers"}
	{:id "EX1_341" :name "Lightwell"}
	{:id "TB_PickYourFate_4_Ench" :name "Pick Your Fate 4 Ench"}
	{:id "OG_104e" :name "Embracing the Shadow"}
	{:id "PART_004" :name "Finicky Cloakfield"}
	{:id "XXX_041" :name "Destroy Hero Power"}
	{:id "LOEA04_28a" :name "Drink Deeply"}
	{:id "NEW1_034" :name "Huffer"}
	{:id "CS2_172" :name "Bloodfen Raptor"}
	{:id "BRMA13_3" :name "Nefarian"}
	{:id "AT_049" :name "Thunder Bluff Valiant"}
	{:id "NAX3_02" :name "Web Wrap"}
	{:id "FP1_003" :name "Echoing Ooze"}
	{:id "GVG_107" :name "Enhance-o Mechano"}
	{:id "EX1_131" :name "Defias Ringleader"}
	{:id "GVG_105" :name "Piloted Sky Golem"}
	{:id "LOEA16_6" :name "Shard of Sulfuras"}
	{:id "BRMA12_5H" :name "Brood Affliction: Blue"}
	{:id "CS2_119" :name "Oasis Snapjaw"}
	{:id "TB_PickYourFate_5" :name "Fate: Spells"}
	{:id "AT_116" :name "Wyrmrest Agent"}
	{:id "GVG_069a" :name "Repairs!"}
	{:id "OG_281e" :name "Fanatic Devotion"}
	{:id "CS2_147" :name "Gnomish Inventor"}
	{:id "LOEA06_02th" :name "Earthen Statue"}
	{:id "XXX_019" :name "Molasses"}
	{:id "GVG_029" :name "Ancestor's Call"}
	{:id "GVG_076" :name "Explosive Sheep"}
	{:id "BRMC_87" :name "Moira Bronzebeard"}
	{:id "XXX_096" :name "AI Buddy - Damage Own Hero 5"}
	{:id "KARA_09_02" :name "Curator"}
	{:id "KARA_05_01b" :name "Kindly Grandmother"}
	{:id "BRMA14_7" :name "Electron"}
	{:id "KAR_A02_03H" :name "Fork"}
	{:id "OG_335" :name "Shifting Shade"}
	{:id "BRMA10_3H" :name "The Rookery"}
	{:id "NEW1_037e" :name "Equipped"}
	{:id "EX1_410" :name "Shield Slam"}
	{:id "AT_098" :name "Sideshow Spelleater"}
	{:id "TB_SPT_BossHeroPower" :name "Barracks"}
	{:id "LOEA09_7H" :name "Cauldron"}
	{:id "KARA_09_08_heroic" :name "Kil'rek"}
	{:id "FP1_016" :name "Wailing Soul"}
	{:id "EX1_384" :name "Avenging Wrath"}
	{:id "BRMA16_3e" :name "Sonic Breath"}
	{:id "OG_334" :name "Hooded Acolyte"}
	{:id "KAR_710" :name "Arcanosmith"}
	{:id "GVG_030" :name "Anodized Robo Cub"}
	{:id "OG_047" :name "Feral Rage"}
	{:id "AT_037" :name "Living Roots"}
	{:id "OG_318t" :name "Gnoll"}
	{:id "GVG_003" :name "Unstable Portal"}
	{:id "TB_CoOpBossSpell_3" :name "Release Coolant"}
	{:id "KARA_08_05" :name "Terrifying Roar"}
	{:id "KARA_00_10" :name "Mysterious Rune"}
	{:id "Mekka4e" :name "Transformed"}
	{:id "AT_104" :name "Tuskarr Jouster"}
	{:id "EX1_562" :name "Onyxia"}
	{:id "CS2_074e" :name "Deadly Poison"}
	{:id "BRMA10_6" :name "Razorgore's Claws"}
	{:id "CS2_235" :name "Northshire Cleric"}
	{:id "EX1_319" :name "Flame Imp"}
	{:id "LOEA06_03e" :name "Animated"}
	{:id "XXX_104" :name "Add 4 to Health."}
	{:id "FP1_028e" :name "Darkness Calls"}
	{:id "PART_005" :name "Emergency Coolant"}
	{:id "AT_022" :name "Fist of Jaraxxus"}
	{:id "BRMA17_2H" :name "Nefarian"}
	{:id "EX1_249" :name "Baron Geddon"}
	{:id "EX1_594" :name "Vaporize"}
	{:id "AT_029e" :name "Extra Stabby"}
	{:id "TB_FactionWar_Hero_Annoy" :name "Annoy-o-Tron Prime"}
	{:id "XXX_054" :name "Weapon Buff"}
	{:id "EX1_tk9" :name "Treant"}
	{:id "GVG_036" :name "Powermace"}
	{:id "CS2_187" :name "Booty Bay Bodyguard"}
	{:id "CS2_088" :name "Guardian of Kings"}
	{:id "KAR_A02_06He" :name "Filled Up"}
	{:id "KAR_010" :name "Nightbane Templar"}
	{:id "CRED_38" :name "Robin Fredericksen"}
	{:id "EX1_349" :name "Divine Favor"}
	{:id "GVG_115" :name "Toshley"}
	{:id "AT_072" :name "Varian Wrynn"}
	{:id "TB_PickYourFate_12_Ench" :name "Fate 12 Ench Confuse"}
	{:id "EX1_095" :name "Gadgetzan Auctioneer"}
	{:id "EX1_019" :name "Shattered Sun Cleric"}
	{:id "EX1_565o" :name "Flametongue"}
	{:id "CRED_02" :name "Eric Dodds"}
	{:id "LOEA09_7" :name "Cauldron"}
	{:id "EX1_tk34" :name "Infernal"}
	{:id "CS2_022" :name "Polymorph"}
	{:id "CS2_009" :name "Mark of the Wild"}
	{:id "CS2_168" :name "Murloc Raider"}
	{:id "TB_PickYourFate_2" :name "Fate: Bananas"}
	{:id "CS2_236e" :name "Divine Spirit"}
	{:id "LOEA09_8" :name "Slithering Guard"}
	{:id "LOEA16_21H" :name "Chieftain Scarvash"}
	{:id "BRMA07_1" :name "Highlord Omokk"}
	{:id "TB_PickYourFate_11_Ench" :name "Fate 11 Ench. Murloc"}
	{:id "EX1_130a" :name "Defender"}
	{:id "LOEA02_10a" :name "Leokk"}
	{:id "CS2_073e" :name "Cold Blood"}
	{:id "LOE_051" :name "Jungle Moonkin"}
	{:id "BRMA12_5" :name "Brood Affliction: Blue"}
	{:id "CS2_023" :name "Arcane Intellect"}
	{:id "CS2_122e" :name "Enhanced"}
	{:id "OG_026" :name "Eternal Sentinel"}
	{:id "NAX6_01H" :name "Loatheb"}
	{:id "EX1_623e" :name "Infusion"}
	{:id "CRED_36" :name "Mike Donais"}
	{:id "AT_074e2" :name "Seal of Champions"}
	{:id "OG_290" :name "Ancient Harbinger"}
	{:id "CS2_188" :name "Abusive Sergeant"}
	{:id "BRMA02_1" :name "High Justice Grimstone"}
	{:id "TP_Bling_HP2" :name "Cash In"}
	{:id "KARA_11_01" :name "Nightbane"}
	{:id "GVG_102e" :name "Might of Tinkertown"}
	{:id "NAX15_01He" :name "Interloper!"}
	{:id "FP1_004" :name "Mad Scientist"}
	{:id "AT_034" :name "Poisoned Blade"}
	{:id "TU4e_007" :name "Dual Warglaives"}
	{:id "BRMA01_3" :name "Dark Iron Bouncer"}
	{:id "XXX_005" :name "Destroy"}
	{:id "CS2_236" :name "Divine Spirit"}
	{:id "OG_316" :name "Herald Volazj"}
	{:id "EX1_360" :name "Humility"}
	{:id "TBST_004" :name "OLDLegit Healer"}
	{:id "CS2_114" :name "Cleave"}
	{:id "EX1_160be" :name "Leader of the Pack"}
	{:id "BRMA17_8H" :name "Nefarian Strikes!"}
	{:id "TU4f_007" :name "Crazy Monkey"}
	{:id "EX1_100" :name "Lorewalker Cho"}
	{:id "TB_CoOpv3_006" :name "Elemental Eruption"}
	{:id "TB_Coopv3_009t" :name "Explosive Rune"}
	{:id "EX1_110" :name "Cairne Bloodhoof"}
	{:id "TB_KTRAF_5" :name "Grand Widow Faerlina"}
	{:id "BRMA12_6H" :name "Brood Affliction: Black"}
	{:id "OG_083" :name "Twilight Flamecaller"}
	{:id "HERO_03" :name "Valeera Sanguinar"}
	{:id "AT_003" :name "Fallen Hero"}
	{:id "LOEA09_7e" :name "Cauldron"}
	{:id "OG_247" :name "Twisted Worgen"}
	{:id "NAXM_002" :name "Skeletal Smith"}
	{:id "KAR_A01_02" :name "Reflections"}
	{:id "OG_313e" :name "Addled"}
	{:id "NAX6_02" :name "Necrotic Aura"}
	{:id "LOEA09_3aH" :name "Famished"}
	{:id "GVG_097" :name "Lil' Exorcist"}
	{:id "TU4d_001" :name "Hemet Nesingwary"}
	{:id "LOE_116" :name "Reliquary Seeker"}
	{:id "TB_Coopv3_102a" :name "Secrets of Shadow"}
	{:id "OG_313" :name "Addled Grizzly"}
	{:id "AT_123" :name "Chillmaw"}
	{:id "CS2_073e2" :name "Cold Blood"}
	{:id "NAX9_05H" :name "Runeblade"}
	{:id "NAX9_02H" :name "Lady Blaumeux"}
	{:id "TB_007" :name "Deviate Banana"}
	{:id "XXX_020" :name "Damage all but 1"}
	{:id "OG_320e" :name "Hour of Corruption"}
	{:id "LOEA16_10" :name "Hakkari Blood Goblet"}
	{:id "EX1_165" :name "Druid of the Claw"}
	{:id "EX1_247" :name "Stormforged Axe"}
	{:id "PRO_001c" :name "Power of the Horde"}
	{:id "EX1_538" :name "Unleash the Hounds"}
	{:id "EX1_350" :name "Prophet Velen"}
	{:id "KARA_00_09" :name "Mage Armor"}
	{:id "TB_GiftExchange_Snowball" :name "Hardpacked Snowballs"}
	{:id "BRM_022" :name "Dragon Egg"}
	{:id "NAX10_02H" :name "Hook"}
	{:id "LOE_002" :name "Forgotten Torch"}
	{:id "GVG_027" :name "Iron Sensei"}
	{:id "BRM_027pH" :name "DIE INSECTS!"}
	{:id "HERO_08b" :name "Khadgar"}
	{:id "AT_125" :name "Icehowl"}
	{:id "EX1_105" :name "Mountain Giant"}
	{:id "CS2_226e" :name "Frostwolf Banner"}
	{:id "PART_007e" :name "Whirling Blades"}
	{:id "PART_006a" :name "Switched"}
	{:id "GVG_023a" :name "Extra Sharp"}
	{:id "BRM_025" :name "Volcanic Drake"}
	{:id "EX1_556" :name "Harvest Golem"}
	{:id "LOEA09_8H" :name "Slithering Guard"}
	{:id "FP1_012t" :name "Slime"}
	{:id "GVG_110" :name "Dr. Boom"}
	{:id "BRMC_88" :name "Drakonid Slayer"}
	{:id "EX1_155ae" :name "Mark of Nature"}
	{:id "LOEA16_9" :name "Lothar's Left Greave"}
	{:id "LOEA04_31b" :name "No Way!"}
	{:id "NAX5_01" :name "Heigan the Unclean"}
	{:id "CS2_232" :name "Ironbark Protector"}
	{:id "NAX9_01" :name "Baron Rivendare"}
	{:id "EX1_561" :name "Alexstrasza"}
	{:id "EX1_619e" :name "Equality"}
	{:id "TB_CoOpBossSpell_4" :name "Overclock"}
	{:id "OG_123e" :name "Shifting"}
	{:id "KAR_005" :name "Kindly Grandmother"}
	{:id "AT_094" :name "Flame Juggler"}
	{:id "OG_284e" :name "Geomancy"}
	{:id "TB_KTRAF_1" :name "Anub'Rekhan"}
	{:id "OG_195a" :name "Many Wisps"}
	{:id "TB_CoOpv3_013" :name "Immolate"}
	{:id "CS2_007" :name "Healing Touch"}
	{:id "GVG_082" :name "Clockwork Gnome"}
	{:id "BRMA09_6" :name "The True Warchief"}
	{:id "OG_255" :name "Doomcaller"}
	{:id "TB_KTRAF_2s" :name "Sir Zeliek"}
	{:id "GVG_080" :name "Druid of the Fang"}
	{:id "AT_118" :name "Grand Crusader"}
	{:id "EX1_570e" :name "Bite"}
	{:id "TB_SPT_Boss" :name "City of Stormwind"}
	{:id "TBA01_6" :name "Molten Rage"}
	{:id "OG_202a" :name "Y'Shaarj's Strength"}
	{:id "NAX8_05" :name "Unrelenting Rider"}
	{:id "KARA_08_04" :name "Empowerment"}
	{:id "BRMC_97" :name "Vaelastrasz"}
	{:id "TB_AllMinionsTauntCharge" :name "Give Taunt and Charge"}
	{:id "XXX_103" :name "Add 2 to Health"}
	{:id "FP1_023" :name "Dark Cultist"}
	{:id "EX1_537" :name "Explosive Shot"}
	{:id "AT_077e" :name "Extra Poke"}
	{:id "CS2_237" :name "Starving Buzzard"}
	{:id "AT_045ee" :name "Mistcaller Deck Ench"}
	{:id "TB_OG_027" :name "Evolve"}
	{:id "CS2_196" :name "Razorfen Hunter"}
	{:id "OG_256e" :name "Slimed"}
	{:id "CS2_173" :name "Bluegill Warrior"}
	{:id "EX1_134" :name "SI:7 Agent"}
	{:id "TB_FactionWar_Boss_Rag_0" :name "Swat Fly"}
	{:id "GVG_100e" :name "Brow Furrow"}
	{:id "TB_KTRAF_H_1" :name "Kel'Thuzad"}
	{:id "KAR_077e" :name "Silver Might"}
	{:id "AT_109" :name "Argent Watchman"}
	{:id "BRM_010t2" :name "Druid of the Flame"}
	{:id "TB_CoOpv3_004" :name "Cleave"}
	{:id "OG_101" :name "Forbidden Shaping"}
	{:id "CS2_061" :name "Drain Life"}
	{:id "BRMA10_3e" :name "Incubation"}
	{:id "AT_132_PALADIN" :name "The Silver Hand"}
	{:id "NEW1_025e" :name "Bolstered"}
	{:id "BRM_030t" :name "Tail Swipe"}
	{:id "TB_ClassRandom_Rogue" :name "Second Class: Rogue"}
	{:id "EX1_614t" :name "Flame of Azzinoth"}
	{:id "KAR_A01_02H" :name "Reflections"}
	{:id "BRMA14_5H" :name "Toxitron"}
	{:id "CRED_18" :name "Becca Abel"}
	{:id "FP1_017" :name "Nerub'ar Weblord"}
	{:id "BRMA14_12" :name "Magmaw"}
	{:id "TU4a_003" :name "Gnoll"}
	{:id "TB_ClassRandom_Warlock" :name "Second Class: Warlock"}
	{:id "LOE_002t" :name "Roaring Torch"}
	{:id "CS2_083e" :name "Sharpened"}
	{:id "BRMC_98" :name "Razorgore"}
	{:id "BRMA06_3H" :name "Ragnaros the Firelord"}
	{:id "NEW1_016" :name "Captain's Parrot"}
	{:id "NAX7_02" :name "Understudy"}
	{:id "LOE_079" :name "Elise Starseeker"}
	{:id "BRMA13_8" :name "DIE INSECT!"}
	{:id "LOEA04_28" :name "A Glowing Pool"}
	{:id "EX1_606" :name "Shield Block"}
	{:id "BRM_014" :name "Core Rager"}
	{:id "CRED_31" :name "Jeremy Cranford"}
	{:id "CRED_04" :name "Steven Gabriel"}
	{:id "GVG_045t" :name "Imp"}
	{:id "NAX11_03" :name "Fallout Slime"}
	{:id "TB_006" :name "Big Banana"}
	{:id "TB_PickYourFate_3_Ench" :name "Pick Your Fate 3 Ench"}
	{:id "NAX6_03t" :name "Spore"}
	{:id "KARA_06_02" :name "Julianne"}
	{:id "NAX14_01" :name "Sapphiron"}
	{:id "CS2_093" :name "Consecration"}
	{:id "LOEA05_03h" :name "Trogg Hate Spells!"}
	{:id "NAX9_04" :name "Sir Zeliek"}
	{:id "AT_116e" :name "Bring it on!"}
	{:id "GVG_067a" :name "Metabolized Magic"}
	{:id "OG_031a" :name "Twilight Elemental"}
	{:id "OG_286" :name "Twilight Elder"}
	{:id "KAR_025b" :name "Broom"}
	{:id "CS2_076" :name "Assassinate"}
	{:id "OG_104" :name "Embrace the Shadow"}
	{:id "EX1_059" :name "Crazed Alchemist"}
	{:id "OG_048e" :name "Mark of Y'Shaarj"}
	{:id "BRMA09_3" :name "Old Horde"}
	{:id "AT_046" :name "Tuskarr Totemic"}
	{:id "GVG_120" :name "Hemet Nesingwary"}
	{:id "OG_150" :name "Aberrant Berserker"}
	{:id "AT_090e" :name "Might of the Monkey"}
	{:id "CS2_072" :name "Backstab"}
	{:id "TB_PickYourFate_3" :name "Dire Fate: Windfury"}
	{:id "CS2_059" :name "Blood Imp"}
	{:id "GVG_030be" :name "Tank Mode"}
	{:id "LOEA14_1" :name "The Steel Sentinel"}
	{:id "KAR_089" :name "Malchezaar's Imp"}
	{:id "XXX_014" :name "Mill 10"}
	{:id "BRMA10_5H" :name "Chromatic Drake"}
	{:id "GVG_007" :name "Flame Leviathan"}
	{:id "NAX9_01H" :name "Baron Rivendare"}
	{:id "AT_069e" :name "Training Complete"}
	{:id "BRMA12_6" :name "Brood Affliction: Black"}
	{:id "HERO_05a" :name "Alleria Windrunner"}
	{:id "AT_001" :name "Flame Lance"}
	{:id "LOE_089t2" :name "Wily Runt"}
	{:id "NEW1_025" :name "Bloodsail Corsair"}
	{:id "CS2_091" :name "Light's Justice"}
	{:id "AT_132_ROGUEt" :name "Poisoned Dagger"}
	{:id "LOEA01_12" :name "Tol'vir Hoplite"}
	{:id "TB_CoOpv3_007" :name "Flame Missiles"}
	{:id "KAR_095" :name "Zoobot"}
	{:id "BRMA07_2_2c_TB" :name "ME SMASH"}
	{:id "KAR_091" :name "Ironforge Portal"}
	{:id "OG_085" :name "Demented Frostcaller"}
	{:id "LOE_016t" :name "Rock"}
	{:id "EX1_155a" :name "Mark of Nature"}
	{:id "BRM_010t" :name "Druid of the Flame"}
	{:id "EX1_614" :name "Illidan Stormrage"}
	{:id "NAX3_01" :name "Maexxna"}
	{:id "EX1_274e" :name "Raw Power!"}
	{:id "LOEA07_12" :name "Earthen Pursuer"}
	{:id "EX1_558" :name "Harrison Jones"}
	{:id "GVG_026" :name "Feign Death"}
	{:id "TBST_001" :name "OLDN3wb Tank"}
	{:id "EX1_tk33" :name "INFERNO!"}
	{:id "CRED_20" :name "Brian Birmingham"}
	{:id "LOE_118e" :name "Cursed Blade"}
	{:id "EX1_509e" :name "Blarghghl"}
	{:id "NAX11_04e" :name "Mutating Injection"}
	{:id "TB_FactionWar_Rag1" :name "DIE INSECT!"}
	{:id "EX1_308" :name "Soulfire"}
	{:id "CS2_179" :name "Sen'jin Shieldmasta"}
	{:id "BRMA06_3" :name "Ragnaros the Firelord"}
	{:id "EX1_581" :name "Sap"}
	{:id "KARA_09_05" :name "Summon Kil'rek"}
	{:id "OG_113" :name "Darkshire Councilman"}
	{:id "XXX_002" :name "Damage 5"}
	{:id "CRED_01" :name "Jason Chayes"}
	{:id "CS2_011o" :name "Savage Roar"}
	{:id "TB_PickYourFate_12" :name "Fate: Confusion"}
	{:id "AT_050t" :name "Lightning Jolt"}
	{:id "DREAM_04" :name "Dream"}
	{:id "LOE_006" :name "Museum Curator"}
	{:id "KAR_065" :name "Menagerie Warden"}
	{:id "CRED_06" :name "Derek Sakamoto"}
	{:id "TB_Coopv3_102b" :name "Alms of Light"}
	{:id "KAR_A02_06H" :name "Pitcher"}
	{:id "TB_FactionWar_Hero_Nef" :name "Nefarian"}
	{:id "EX1_001" :name "Lightwarden"}
	{:id "BRMA09_3t" :name "Old Horde Orc"}
	{:id "KAR_077" :name "Silvermoon Portal"}
	{:id "GVG_119" :name "Blingtron 3000"}
	{:id "CS2_234" :name "Shadow Word: Pain"}
	{:id "OG_311" :name "A Light in the Darkness"}
	{:id "HERO_01a" :name "Magni Bronzebeard"}
	{:id "CS2_038e" :name "Ancestral Spirit"}
	{:id "EX1_362" :name "Argent Protector"}
	{:id "BRMA17_7" :name "Chromatic Prototype"}
	{:id "KARA_12_02H" :name "Ley Lines"}
	{:id "LOEA10_1H" :name "Giantfin"}
	{:id "CRED_13" :name "Brian Schwab"}
	{:id "CS2_188o" :name "'Inspired'"}
	{:id "OG_321" :name "Crazed Worshipper"}
	{:id "BRMA13_6" :name "Living Lava"}
	{:id "GVG_117" :name "Gazlowe"}
	{:id "NAX8_02" :name "Harvest"}
	{:id "LOE_089t" :name "Rascally Runt"}
	{:id "NAX7_01H" :name "Instructor Razuvious"}
	{:id "LOEA09_9H" :name "Naga Repellent"}
	{:id "AT_053" :name "Ancestral Knowledge"}
	{:id "XXX_058e" :name "Weapon Nerf Enchant"}
	{:id "AT_115" :name "Fencing Coach"}
	{:id "TBST_006" :name "OLDTBST Push Common Card"}
	{:id "XXX_022" :name "Free Cards"}
	{:id "LOEA05_03" :name "Trogg Hate Spells!"}
	{:id "KARA_05_01e" :name "Trembling Before the Wolf"}
	{:id "CS2_142" :name "Kobold Geomancer"}
	{:id "EX1_093e" :name "Hand of Argus"}
	{:id "EX1_383t" :name "Ashbringer"}
	{:id "NEW1_041" :name "Stampeding Kodo"}
	{:id "GVG_032b" :name "Gift of Cards"}
	{:id "LOEA08_01" :name "Archaedas"}
	{:id "CS2_008" :name "Moonfire"}
	{:id "CS2_087e" :name "Blessing of Might"}
	{:id "TU4e_002t" :name "Flame of Azzinoth"}
	{:id "LOEA16_20" :name "Blessing of the Sun"}
	{:id "EX1_607e" :name "Inner Rage"}
	{:id "BRMA06_1" :name "Majordomo Executus"}
	{:id "LOEA04_06a" :name "Swing Across"}
	{:id "BRMC_95he" :name "Core Hound Pup"}
	{:id "KARA_13_12" :name "Demonic Presence"}
	{:id "EX1_096" :name "Loot Hoarder"}
	{:id "GVG_106" :name "Junkbot"}
	{:id "DS1h_292" :name "Steady Shot"}
	{:id "OG_338" :name "Nat the Darkfisher"}
	{:id "KARA_08_02" :name "Nether Rage"}
	{:id "TBA01_5" :name "Wild Magic"}
	{:id "BRMA08_1" :name "General Drakkisath"}
	{:id "TB_LevelUp_001" :name "Level Up!"}
	{:id "BRM_007" :name "Gang Up"}
	{:id "TB_BlingBrawl_Blade1e" :name "Blingtron's Blade"}
	{:id "OG_176" :name "Shadow Strike"}
	{:id "KARA_09_03a_heroic" :name "Icky Imp"}
	{:id "AT_103" :name "North Sea Kraken"}
	{:id "AT_133" :name "Gadgetzan Jouster"}
	{:id "EX1_045" :name "Ancient Watcher"}
	{:id "AT_119" :name "Kvaldir Raider"}
	{:id "BRM_004" :name "Twilight Whelp"}
	{:id "LOEA16_14" :name "Khadgar's Pipe"}
	{:id "EX1_025" :name "Dragonling Mechanic"}
	{:id "TB_FactionWar_BoomBot_Spell" :name "TBFactionWarBoomBotSpell"}
	{:id "CS2_233" :name "Blade Flurry"}
	{:id "EX1_245" :name "Earth Shock"}
	{:id "AT_079" :name "Mysterious Challenger"}
	{:id "LOEA16_13" :name "Eye of Orsis"}
	{:id "TB_PickYourFate_Windfury" :name "Fate"}
	{:id "TB_CoOpBossSpell_2" :name "Bomb Salvo"}
	{:id "OG_145" :name "Psych-o-Tron"}
	{:id "AT_060" :name "Bear Trap"}
	{:id "XXX_055e" :name "1000 Stats Enchant"}
	{:id "KARA_09_01" :name "Terestian Illhoof"}
	{:id "NEW1_040t" :name "Gnoll"}
	{:id "BRMA04_3" :name "Firesworn"}
	{:id "CS2_221e" :name "Sharp!"}
	{:id "OG_310" :name "Steward of Darkshire"}
	{:id "EX1_178a" :name "Rooted"}
	{:id "TB_PickYourFate_Confused" :name "Fate"}
	{:id "KARA_13_19" :name "Red Riding Hood"}
	{:id "DREAM_05" :name "Nightmare"}
	{:id "EX1_165t1" :name "Druid of the Claw"}
	{:id "NAX1_04" :name "Skitter"}
	{:id "BRMA01_4t" :name "Guzzler"}
	{:id "TB_CoOpv3_008" :name "Flame Missiles"}
	{:id "EX1_tk11" :name "Spirit Wolf"}
	{:id "LOEA04_29b" :name "Investigate the Runes"}
	{:id "TB_KTRAF_7" :name "Heigan the Unclean"}
	{:id "EX1_522" :name "Patient Assassin"}
	{:id "EX1_244e" :name "Totemic Might"}
	{:id "TB_ClassRandom_Shaman" :name "Second Class: Shaman"}
	{:id "EX1_251" :name "Forked Lightning"}
	{:id "KARA_08_01H" :name "Netherspite"}
	{:id "GVG_042" :name "Neptulon"}
	{:id "TB_007e" :name "Deviate Switch"}
	{:id "EX1_258e" :name "Overloading"}
	{:id "LOE_086" :name "Summoning Stone"}
	{:id "KAR_A02_05" :name "Cup"}
	{:id "GVG_016" :name "Fel Reaver"}
	{:id "XXX_004" :name "Restore 5"}
	{:id "CS2_039" :name "Windfury"}
	{:id "EX1_584" :name "Ancient Mage"}
	{:id "KAR_097t" :name "Atiesh"}
	{:id "XXX_011" :name "Summon a random Secret"}
	{:id "TB_CoOpv3_003" :name "Bamboozle"}
	{:id "TB_012" :name "Choose a New Card!"}
	{:id "EX1_243" :name "Dust Devil"}
	{:id "TBST_003" :name "OLDN3wb Healer"}
	{:id "CS2_221" :name "Spiteful Smith"}
	{:id "XXX_046" :name "Force AI to Use Hero Power"}
	{:id "LOEA16_21" :name "Chieftain Scarvash"}
	{:id "KAR_094" :name "Deadly Fork"}
	{:id "TB_GiftExchange_Treasure" :name "Winter's Veil Gift"}
	{:id "AT_055" :name "Flash Heal"}
	{:id "CS2_083b" :name "Dagger Mastery"}
	{:id "KAR_028" :name "Fool's Bane"}
	{:id "KARA_08_04e" :name "Empowered"}
	{:id "LOEA16_2H" :name "Staff of Origination"}
	{:id "TB_PickYourFate_1" :name "Dire Fate: Taunt and Charge"}
	{:id "DS1_185" :name "Arcane Shot"}
	{:id "BRMA13_7" :name "Whirling Ash"}
	{:id "LOEA09_6H" :name "Slithering Archer"}
	{:id "TB_DecreasingCardCost" :name "TB_DecreasingCardCost"}
	{:id "GVG_010" :name "Velen's Chosen"}
	{:id "BRMA09_5t" :name "Gyth"}
	{:id "CS2_084e" :name "Hunter's Mark"}
	{:id "OG_023t" :name "Primally Infused"}
	{:id "DS1h_292_H1_AT_132" :name "Ballista Shot"}
	{:id "OG_316k" :name "Shadowy"}
	{:id "TB_CoOpv3_BOSS2e" :name "Getting Angry...."}
	{:id "EX1_076" :name "Pint-Sized Summoner"}
	{:id "XXX_113" :name "Again"}
	{:id "XXX_042" :name "Hand to Deck"}
	{:id "EX1_112" :name "Gelbin Mekkatorque"}
	{:id "AT_039e" :name "Savage"}
	{:id "EX1_110t" :name "Baine Bloodhoof"}
	{:id "KAR_204" :name "Onyx Bishop"}
	{:id "XXX_017" :name "Draw 3 Cards"}
	{:id "NEW1_017e" :name "Full Belly"}
	{:id "BRMA09_5" :name "Dismount"}
	{:id "LOEA09_11" :name "Hungry Naga"}
	{:id "LOEA06_03h" :name "Animate Earthen"}
	{:id "TB_FactionWar_Boss_Rag" :name "DIE INSECT!"}
	{:id "OG_081" :name "Shatter"}
	{:id "LOEA07_11" :name "Debris"}
	{:id "GVG_096" :name "Piloted Shredder"}
	{:id "EX1_085" :name "Mind Control Tech"}
	{:id "LOEA07_29" :name "Throw Rocks"}
	{:id "BRMA14_8" :name "Activate Magmatron"}
	{:id "TB_PickYourFate_6" :name "Fate: Portals"}
	{:id "KARA_09_03" :name "Many Imps!"}
	{:id "CS2_053e" :name "Far Sight"}
	{:id "XXX_055" :name "1000 Stats"}
	{:id "LOE_016" :name "Rumbling Elemental"}
	{:id "KAR_069" :name "Swashburglar"}
	{:id "LOEA16_3e" :name "Lantern of Power"}
	{:id "GVG_095" :name "Goblin Sapper"}
	{:id "CS2_064" :name "Dread Infernal"}
	{:id "BRMA02_2_2_TB" :name "Jeering Crowd"}
	{:id "EX1_383" :name "Tirion Fordring"}
	{:id "AT_006e" :name "Power of Dalaran"}
	{:id "KARA_04_01heroic" :name "The Crone"}
	{:id "NAX15_04a" :name "Slave of Kel'Thuzad"}
	{:id "EX1_323h" :name "Lord Jaraxxus"}
	{:id "EX1_133" :name "Perdition's Blade"}
	{:id "AT_037b" :name "Living Roots"}
	{:id "OG_174" :name "Faceless Shambler"}
	{:id "GVG_099" :name "Bomb Lobber"}
	{:id "EX1_178b" :name "Uproot"}
	{:id "OG_152" :name "Grotesque Dragonhawk"}
	{:id "EX1_507" :name "Murloc Warleader"}
	{:id "CRED_21" :name "Bryan Chang"}
	{:id "NAX9_03" :name "Thane Korth'azz"}
	{:id "NAX4_03" :name "Skeleton"}
	{:id "BRM_017" :name "Resurrect"}
	{:id "TU4a_004" :name "Hogger SMASH!"}
	{:id "KARA_08_03e" :name "Nether Breath"}
	{:id "CS2_045e" :name "Rockbiter Weapon"}
	{:id "LOE_077" :name "Brann Bronzebeard"}
	{:id "CRED_35" :name "Max McCall"}
	{:id "NAX2_01H" :name "Grand Widow Faerlina"}
	{:id "CS2_213" :name "Reckless Rocketeer"}
	{:id "BRMA16_2H" :name "Echolocate"}
	{:id "KARA_13_02" :name "The Horde"}
	{:id "EX1_166a" :name "Moonfire"}
	{:id "EX1_402" :name "Armorsmith"}
	{:id "OG_221" :name "Selfless Hero"}
	{:id "LOEA05_02" :name "Trogg Hate Minions!"}
	{:id "EX1_244" :name "Totemic Might"}
	{:id "EX1_355e" :name "Blessed Champion"}
	{:id "DS1_183" :name "Multi-Shot"}
	{:id "AT_089e" :name "Boneguarded"}
	{:id "OG_070" :name "Bladed Cultist"}
	{:id "HERO_08a" :name "Medivh"}
	{:id "BRMA14_4" :name "Activate Toxitron"}
	{:id "TB_PickYourFate_7_EnchMinion" :name "Fate"}
	{:id "AT_093" :name "Frigid Snobold"}
	{:id "BRMA08_2" :name "Intense Gaze"}
	{:id "AT_035t" :name "Ambush!"}
	{:id "BRMA17_3H" :name "Onyxia"}
	{:id "TB_001" :name "Boss HP Swapper"}
	{:id "PRO_001a" :name "I Am Murloc"}
	{:id "NAX2_03H" :name "Rain of Fire"}
	{:id "NEW1_017" :name "Hungry Crab"}
	{:id "TB_PickYourFate_4_EnchMinion" :name "Fate"}
	{:id "LOEA04_02" :name "Escape!"}
	{:id "KARA_07_06" :name "Demons Loose!"}
	{:id "AT_081e" :name "Purified"}
	{:id "AT_018" :name "Confessor Paletress"}
	{:id "KARA_07_05" :name "Stampeding Beast!"}
	{:id "AT_112" :name "Master Jouster"}
	{:id "OG_273" :name "Stand Against Darkness"}
	{:id "CS2_011" :name "Savage Roar"}
	{:id "EX1_014t" :name "Bananas"}
	{:id "OG_156a" :name "Ooze"}
	{:id "TU4c_006" :name "Bananas"}
	{:id "LOEA16_22" :name "Archaedas"}
	{:id "KAR_A01_01" :name "Magic Mirror"}
	{:id "EX1_612o" :name "Power of the Kirin Tor"}
	{:id "AT_010" :name "Ram Wrangler"}
	{:id "EX1_278" :name "Shiv"}
	{:id "NEW1_007" :name "Starfall"}
	{:id "KAR_061" :name "The Curator"}
	{:id "CS2_057" :name "Shadow Bolt"}
	{:id "GVG_067" :name "Stonesplinter Trogg"}
	{:id "LOEA09_13" :name "Hungry Naga"}
	{:id "KARA_13_13" :name "Legion"}
	{:id "NAX15_03n" :name "Guardian of Icecrown"}
	{:id "OG_121" :name "Cho'gall"}
	{:id "AT_028" :name "Shado-Pan Rider"}
	{:id "BRMA15_1" :name "Maloriak"}
	{:id "KARA_00_04" :name "Brilliance"}
	{:id "EX1_154" :name "Wrath"}
	{:id "LOEA09_2H" :name "Enraged!"}
	{:id "BRMA14_11" :name "Recharge"}
	{:id "LOEA07_01" :name "Mine Cart"}
	{:id "NAX5_01H" :name "Heigan the Unclean"}
	{:id "LOE_024t" :name "Rolling Boulder"}
	{:id "NEW1_012" :name "Mana Wyrm"}
	{:id "EX1_050" :name "Coldlight Oracle"}
	{:id "BRMC_86" :name "Atramedes"}
	{:id "TU4c_006e" :name "Bananas"}
	{:id "PART_001" :name "Armor Plating"}
	{:id "TB_PickYourFate_9_EnchMinion" :name "Bonus"}
	{:id "CS2_105e" :name "Heroic Strike"}
	{:id "CS2_041e" :name "Ancestral Infusion"}
	{:id "PART_001e" :name "Armor Plating"}
	{:id "BRM_013" :name "Quick Shot"}
	{:id "EX1_080" :name "Secretkeeper"}
	{:id "BRM_018" :name "Dragon Consort"}
	{:id "GVG_101" :name "Scarlet Purifier"}
	{:id "TU4e_002" :name "Flames of Azzinoth"}
	{:id "KAR_A02_01H" :name "Plate"}
	{:id "EX1_166b" :name "Dispel"}
	{:id "CS1h_001" :name "Lesser Heal"}
	{:id "KARA_09_03a" :name "Icky Imp"}
	{:id "KAR_036e" :name "Eating"}
	{:id "BRMC_92" :name "Coren Direbrew"}
	{:id "AT_056" :name "Powershot"}
	{:id "BRM_001e" :name "Melt"}
	{:id "BRMA04_3H" :name "Firesworn"}
	{:id "XXX_111" :name "AI Buddy - All Charge All Windfury!"}
	{:id "AT_101" :name "Pit Fighter"}
	{:id "AT_034e" :name "Laced"}
	{:id "AT_082e" :name "Training"}
	{:id "XXX_098" :name "AI Buddy - No Deck/Hand"}
	{:id "GVG_055e" :name "Screwy Jank"}
	{:id "Mekka3e" :name "Emboldened!"}
	{:id "LOEA04_02h" :name "Escape!"}
	{:id "BRMA10_6e" :name "Blind With Rage"}
	{:id "KAR_035" :name "Priest of the Feast"}
	{:id "EX1_609" :name "Snipe"}
	{:id "OG_312e" :name "Upgraded"}
	{:id "EX1_575" :name "Mana Tide Totem"}
	{:id "XXX_022e" :name "Free Cards"}
	{:id "NAX5_02" :name "Eruption"}
	{:id "OG_134" :name "Yogg-Saron Hope's End"}
	{:id "EX1_246" :name "Hex"}
	{:id "XXX_094" :name "AI Buddy - Blank Slate"}
	{:id "OG_044" :name "Fandral Staghelm"}
	{:id "FP1_007t" :name "Nerubian"}
	{:id "AT_068" :name "Bolster"}
	{:id "GAME_003e" :name "Coin's Vengence"}
	{:id "EX1_414e" :name "Enraged"}
	{:id "CS2_162" :name "Lord of the Arena"}
	{:id "GAME_004" :name "AFK"}
	{:id "AT_121" :name "Crowd Favorite"}
	{:id "TB_CoOpv3_010" :name "Explosive Runes"}
	{:id "CS2_112" :name "Arcanite Reaper"}
	{:id "GVG_098" :name "Gnomeregan Infantry"}
	{:id "BRM_006" :name "Imp Gang Boss"}
	{:id "CS2_106" :name "Fiery War Axe"}
	{:id "TU4a_001" :name "Hogger"}
	{:id "OG_282" :name "Blade of C'Thun"}
	{:id "CS2_013t" :name "Excess Mana"}
	{:id "EX1_593" :name "Nightblade"}
	{:id "BRMC_85" :name "Lucifron"}
	{:id "KARA_05_01hheroic" :name "Big Bad Wolf"}
	{:id "KAR_044" :name "Moroes"}
	{:id "KARA_11_02" :name "Manastorm"}
	{:id "LOEA08_01h" :name "Archaedas"}
	{:id "EX1_309" :name "Siphon Soul"}
	{:id "EX1_164b" :name "Nourish"}
	{:id "LOEA16_5t" :name "Mummy Zombie"}
	{:id "EX1_390e" :name "Enraged"}
	{:id "BRMA09_4t" :name "Dragonkin"}
	{:id "CS2_102_H1" :name "Armor Up!"}
	{:id "LOEA16_8a" :name "Putressed"}
	{:id "BRMA02_1H" :name "High Justice Grimstone"}
	{:id "KARA_00_04H" :name "Brilliance"}
	{:id "NAX13_05H" :name "Stalagg"}
	{:id "EX1_612" :name "Kirin Tor Mage"}
	{:id "BRMA08_2H" :name "Intense Gaze"}
	{:id "OG_272t" :name "Faceless Destroyer"}
	{:id "NAX13_03e" :name "Supercharged"}
	{:id "BRMA11_2H" :name "Essence of the Red"}
	{:id "BRMA09_4Ht" :name "Dragonkin"}
	{:id "BRM_027h" :name "Ragnaros the Firelord"}
	{:id "TB_014" :name "Choose a New Card!"}
	{:id "XXX_021" :name "Restore All Health"}
	{:id "LOE_008H" :name "Eye of Hakkar"}
	{:id "EX1_617" :name "Deadly Shot"}
	{:id "CS1h_001_H1" :name "Lesser Heal"}
	{:id "LOEA04_13bt" :name "Orsis Guard"}
	{:id "NAX11_02H" :name "Poison Cloud"}
	{:id "OG_326" :name "Duskboar"}
	{:id "TB_PickYourFate_11b" :name "Murloc Bonus"}
	{:id "KARA_13_01" :name "Nazra Wildaxe"}
	{:id "KAR_036" :name "Arcane Anomaly"}
	{:id "LOEA07_14" :name "Lumbering Golem"}
	{:id "BRM_028" :name "Emperor Thaurissan"}
	{:id "NAX12_03" :name "Jaws"}
	{:id "KARA_13_03" :name "Orc Warrior"}
	{:id "LOEA16_12" :name "Medivh's Locket"}
	{:id "OG_302e" :name "Soul Power"}
	{:id "EX1_295o" :name "Ice Block"}
	{:id "EX1_165a" :name "Cat Form"}
	{:id "KARA_00_05e" :name "Insightful"}
	{:id "KAR_A02_02" :name "Spoon"}
	{:id "EX1_613e" :name "VanCleef's Vengeance"}
	{:id "BRMA17_8" :name "Nefarian Strikes!"}
	{:id "EX1_577" :name "The Beast"}
	{:id "AT_078" :name "Enter the Coliseum"}
	{:id "CS1_130" :name "Holy Smite"}
	{:id "NAX9_07e" :name "Mark of the Horsemen"}
	{:id "EX1_345" :name "Mindgames"}
	{:id "NAX7_04H" :name "Massive Runeblade"}
	{:id "LOEA16_26" :name "Skelesaurus Hex"}
	{:id "EX1_055o" :name "Empowered"}
	{:id "EX1_339" :name "Thoughtsteal"}
	{:id "AT_014" :name "Shadowfiend"}
	{:id "CS1_112" :name "Holy Nova"}
	{:id "EX1_049" :name "Youthful Brewmaster"}
	{:id "EX1_014" :name "King Mukla"}
	{:id "FP1_015" :name "Feugen"}
	{:id "KARA_00_07" :name "Astral Portal"}
	{:id "EX1_571" :name "Force of Nature"}
	{:id "NEW1_011" :name "Kor'kron Elite"}
	{:id "KARA_00_02a" :name "Abyssal"}
	{:id "BRMA09_2" :name "Open the Gates"}
	{:id "OG_045a" :name "Nerubian Spores"}
	{:id "FP1_019" :name "Poison Seeds"}
	{:id "OG_118e" :name "Renounce Darkness Deck Ench"}
	{:id "BRMA12_4" :name "Brood Affliction: Green"}
	{:id "TU4d_002" :name "Crazed Hunter"}
	{:id "NEW1_005" :name "Kidnapper"}
	{:id "OG_006a" :name "Silver Hand Murloc"}
	{:id "GVG_036e" :name "Powered"}
	{:id "EX1_062" :name "Old Murk-Eye"}
	{:id "FP1_005" :name "Shade of Naxxramas"}
	{:id "CS2_094" :name "Hammer of Wrath"}
	{:id "BRMA13_1H" :name "Lord Victor Nefarius"}
	{:id "TB_MP_02e" :name "Repurposed"}
	{:id "OG_222e" :name "Rally"}
	{:id "CS2_122" :name "Raid Leader"}
	{:id "EX1_315" :name "Summoning Portal"}
	{:id "GVG_123e" :name "Overclocked"}
	{:id "KAR_A02_05H" :name "Cup"}
	{:id "KARA_12_03" :name "Flame Wreath"}
	{:id "CS2_120" :name "River Crocolisk"}
	{:id "TB_Superfriends002e" :name "Draw Offensive Play"}
	{:id "AT_092" :name "Ice Rager"}
	{:id "XXX_065" :name "Remove All Immune"}
	{:id "AT_024" :name "Demonfuse"}
	{:id "XXX_107" :name "Set Health to 1"}
	{:id "GVG_032" :name "Grove Tender"}
	{:id "KARA_08_08e2" :name "Red Beam"}
	{:id "LOEA16_27" :name "The Steel Sentinel"}
	{:id "BRM_029" :name "Rend Blackhand"}
	{:id "TB_MechWar_Boss1" :name "Annoy-o-Tron"}
	{:id "EX1_626" :name "Mass Dispel"}
	{:id "AT_083" :name "Dragonhawk Rider"}
	{:id "TB_BlingBrawl_Hero1e" :name "Sharpened"}
	{:id "NAX15_04H" :name "Chains"}
	{:id "NAX10_03" :name "Hateful Strike"}
	{:id "OG_161" :name "Corrupted Seer"}
	{:id "NEW1_024" :name "Captain Greenskin"}
	{:id "OG_156" :name "Bilefin Tidehunter"}
	{:id "EX1_091" :name "Cabal Shadow Priest"}
	{:id "BRMA13_1" :name "Lord Victor Nefarius"}
	{:id "CS2_101_H1_AT_132" :name "The Silver Hand"}
	{:id "TU4f_005" :name "Brewmaster"}
	{:id "NAX8_03" :name "Unrelenting Trainee"}
	{:id "CS2_103e2" :name "Charge"}
	{:id "AT_048" :name "Healing Wave"}
	{:id "LOEA06_04h" :name "Shattering Spree"}
	{:id "EX1_155be" :name "Mark of Nature"}
	{:id "KAR_A10_08" :name "White Knight"}
	{:id "XXX_008" :name "Freeze"}
	{:id "NAX14_03" :name "Frozen Champion"}
	{:id "HERO_09" :name "Anduin Wrynn"}
	{:id "BRMA06_4H" :name "Flamewaker Acolyte"}
	{:id "KARA_08_02eH" :name "Nether Rage"}
	{:id "EX1_539" :name "Kill Command"}
	{:id "EX1_323" :name "Lord Jaraxxus"}
	{:id "AT_100" :name "Silver Hand Regent"}
	{:id "LOEA04_06" :name "Pit of Spikes"}
	{:id "CS2_062" :name "Hellfire"}
	{:id "LOE_029" :name "Jeweled Scarab"}
	{:id "KARA_06_01heroic" :name "Romulo"}
	{:id "BRMA10_1H" :name "Razorgore the Untamed"}
	{:id "BRMA01_1H" :name "Coren Direbrew"}
	{:id "KARA_13_20" :name "Party Elemental"}
	{:id "CS2_053" :name "Far Sight"}
	{:id "GVG_057" :name "Seal of Light"}
	{:id "FP1_030e" :name "Necrotic Aura"}
	{:id "NAX10_01" :name "Patchwerk"}
	{:id "CS2_026" :name "Frost Nova"}
	{:id "hexfrog" :name "Frog"}
	{:id "KARA_00_03c" :name "Medivh"}
	{:id "BRMA_01" :name "Flameheart"}
	{:id "AT_108" :name "Armored Warhorse"}
	{:id "NAX3_02_TB" :name "Web Wrap"}
	{:id "EX1_274" :name "Ethereal Arcanist"}
	{:id "OG_311e" :name "Beacon of Hope"}
	{:id "LOEA09_6" :name "Slithering Archer"}
	{:id "HRW02_1e" :name "Overclock"}
	{:id "EX1_015" :name "Novice Engineer"}
	{:id "OG_209" :name "Hallazeal the Ascended"}
	{:id "EX1_006" :name "Alarm-o-Bot"}
	{:id "BRMA14_5" :name "Toxitron"}
	{:id "XXX_108" :name "Set all minions to 1 health"}
	{:id "TU4c_003" :name "Barrel"}
	{:id "Mekka2" :name "Repair Bot"}
	{:id "EX1_573b" :name "Shan'do's Lesson"}
	{:id "AT_016" :name "Confuse"}
	{:id "CRED_40" :name "Ryan Masterson"}
	{:id "EX1_411" :name "Gorehowl"}
	{:id "NAX9_05" :name "Runeblade"}
	{:id "CS2_049_H1" :name "Totemic Call"}
	{:id "GVG_045" :name "Imp-losion"}
	{:id "LOEA14_1H" :name "The Steel Sentinel"}
	{:id "EX1_625" :name "Shadowform"}
	{:id "GVG_021e" :name "Grasp of Mal'Ganis"}
	{:id "BRMA05_1" :name "Baron Geddon"}
	{:id "NAX15_03t" :name "Guardian of Icecrown"}
	{:id "OG_200e" :name "Doom Free"}
	{:id "BRMA09_5Ht" :name "Gyth"}
	{:id "GVG_038" :name "Crackle"}
	{:id "OG_223" :name "Divine Strength"}
	{:id "AT_132_DRUID" :name "Dire Shapeshift"}
	{:id "GVG_028" :name "Trade Prince Gallywix"}
	{:id "EX1_557" :name "Nat Pagle"}
	{:id "KAR_025c" :name "Teapot"}
	{:id "GVG_041c" :name "Dark Wispers"}
	{:id "EX1_084" :name "Warsong Commander"}
	{:id "LOEA16_17" :name "Animated Statue"}])
