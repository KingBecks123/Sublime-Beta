enlightenments = [
	{
		name: 'Genuine Rotten Wisdom',
		id : 'genuineRottenWisdom',
		goalName: 'Get ',
		goalName2: ' rotten limes',
		goal: function () {
			if (gameData.rottenLimes >= goalAmount)
				return true
		},
		perCompletionDifficulty: '10',
	},
	{
		name: 'Limes Are Life',
		id : 'limesAreLife',
		goalName: 'Get ',
		goalName2: ' limes',
		goal: function () {
			if (gameData.limes >= goalAmount)
				return true
		},
		perCompletionDifficulty: '10',
	},
	{
		name: 'Entrepreneurial',
		id : 'entrepreneurial',
		goalName: 'Get ',
		goalName2: ' coins',
		goal: function () {
			if (gameData.coins >= goalAmount)
				return true
		},
		perCompletionDifficulty: '10',
	},
	{
		name: 'Advanced Entrepreneurial',
		id : 'entrepreneurialAdvanced',
		goalName: 'Get ',
		goalName2: ' mega coins',
		goal: function () {
			if (gameData.megaCoins >= goalAmount)
				return true
		},
		perCompletionDifficulty: '10',
	},
	{
		name: 'The Key Lime',
		id : 'theKeyLime',
		goalName: 'Get ',
		goalName2: ' pies',
		goal: function () {
			if (gameData.pies >= goalAmount)
				return true
		},
		perCompletionDifficulty: '10',
	}
]

enlightenmentHinderances = [
	{
		name: 'Decimation',
		id : 'decimation',
		affect: 'If any of your items can be divided by 10 you lose all of that item',
		multiplier: '3',
	},
	{
		name: 'Blight',
		id : 'blight',
		affect: 'Limes slowly rot',
		multiplier: '3',
	},
	{
		name: 'Resistance',
		id : 'resistance',
		affect: 'All delivery costs are quadrupled',
		multiplier: '8',
	},
	{
		name: 'Anticartography',
		id : 'anticartography',
		affect: 'All map costs are quadrupled',
		multiplier: '4',
	},
	{
		name: 'Famine',
		id : 'famine',
		affect: 'Collecting limes from clicking or auto collection does nothing',
		multiplier: '4',
	}
]

wisdomUpgrades = [
	{
		name: 'Minimum Rotten Limes',
		id : 'minimumRottenLimes',
		description: 'Increase base rotten limes per lime collection by 1',
		initialPrice: 1,
		priceIncrease: '+= 1',
		maxLevel: 'none',
	},
	{
		name: 'Minimum Limes',
		id : 'minimumLimes',
		description: 'Increase base limes per lime collection by 1',
		initialPrice: 1,
		priceIncrease: '+= 1',
		maxLevel: 'none',
	},
	{
		name: 'Lime Season',
		id : 'limeSeason',
		description: 'Doubles lime collection in all challenges',
		initialPrice: 1,
		priceIncrease: '+= 1',
		maxLevel: 1,
	},
	{
		name: 'Skill Savy',
		id : 'skillSavy',
		description: 'Doubles skill speed in all challenges',
		initialPrice: 1,
		priceIncrease: '+= 1',
		maxLevel: 1,
	},
	{
		name: 'Coin Safe',
		id : 'coinSafe',
		description: 'Increases starting coins by 1 in all challenges',
		initialPrice: 1,
		priceIncrease: '+= 1',
		maxLevel: 'none',
	},
	{
		name: 'Critical Acclaim',
		id : 'criticalAcclaim',
		description: 'Increase base respect per lime disease completion by 1',
		initialPrice: 1,
		priceIncrease: '+= 1',
		maxLevel: 'none',
	},
	{
		name: 'Beta Testing',
		id : 'betaTesting',
		description: 'Doubles all beta coin collection',
		initialPrice: 1,
		priceIncrease: '+= 1',
		maxLevel: 1,
	},
	{
		name: 'Pie-leasant',
		id : 'pieleasant',
		description: 'Increases pie employee potential charm by 1',
		initialPrice: 1,
		priceIncrease: '+= 1',
		maxLevel: 'none',
	},
	{
		name: 'Buy A Well',
		id : 'buyAWell',
		description: 'Continue your lime journey into the beyond',
		initialPrice: 50,
		priceIncrease: '+= 1',
		maxLevel: 1,
	}
]