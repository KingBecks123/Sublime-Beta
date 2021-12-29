var loopNumberBasket = 0;
var loopNumberGoldenLimes = 0;
var loopNumberTimePlayed = 0;
var loopNumberLimeRot = 0
var loopNumbercurrentTask = 0;
var numberOfBasicAchievements = 7;
var numberOfSpecialAchievements = 2;
var autoCollectingVariable = '(gameData.nourishment + 1) * 100 + autoCollectingRingAmount()'

mainVariables = [
	   {
		id: 'limes',
		name: 'Limes',
		mainColor: '00B300',
		secondaryColor: '00FF01'
	}, {
		id: 'rottenLimes',
		name: 'Rotten Limes',
		mainColor: '00B300',
		secondaryColor: '00FF01'
	},	{
		id: 'peeledLimes',
		name: 'Peeled Limes',
		mainColor: '72B301',
		secondaryColor: 'A0FF01'
	},	{
		id: 'juice',
		name: 'Juice',
		mainColor: '00B33D',
		secondaryColor: '00FF55'
	},	{
		id: 'coins',
		name: 'Coins',
		mainColor: 'AEB301',
		secondaryColor: 'F8FF01'
	},	{
		id: 'megaCoins',
		name: 'Mega Coins',
		mainColor: 'B40001',
		secondaryColor: 'FE0000'
	},	{
		id: 'alphaCoins',
		name: 'Alpha Coins',
		mainColor: 'B37700',
		secondaryColor: 'FFAA01'
	},	{
		id: 'betaCoins',
		name: 'Beta Coins',
		mainColor: 'AEB301',
		secondaryColor: 'F8FF01'
	},	{
		id: 'pies',
		name: 'Pies',
		mainColor: '964D1A',
		secondaryColor: 'C67848'
	},	{
		id: 'pieCoins',
		name: 'Pie Coins',
		mainColor: '964D1A',
		secondaryColor: 'C67848'
	},	{
		id: 'goldenLimes',
		name: 'Golden Limes',
		mainColor: 'AEB301',
		secondaryColor: 'F8FF01'
	},	{
		id: 'realLimes',
		name: 'Real Limes',
		mainColor: '00B300',
		secondaryColor: '00FF01'
	},	{
		id: 'wisdom',
		name: 'Wisdom',
		mainColor: '99DEFF',
		secondaryColor: '4DC3FF'
	}
]

avs       = [ 
	{
		area: 'serf',
		name: 'Serf',
		backgroundColor: '#DEAD85',
		v: [
			{
				id: 'rice',
				name: 'Rice',
				mainColor: '#DEAD85',
				darkColor: '#BBBBBB',

			},
			{
				id: 'coins',
				name: 'Coins',
				mainColor: '#B37700',
				darkColor: '#B37700',

			},
		],
	},
]