var loopNumberBasket = 0
var loopNumberGoldenLimes = 0
var loopNumberTimePlayed = 0
var loopNumberLimeRot = 0
var loopNumbercurrentTask = 0
var loopNumberAutoCollection = 0
var numberOfBasicAchievements = 7
var numberOfSpecialAchievements = 2
var pieOvenColor = 0
var juiceInPieBucketLeak = 0
var flourInPieBucketLeak = 0
var cheatNum = 0
var researchersAvailable
background = "#3C3C3C"; //Background Color
accent0 = "#222222"; //Main Color
accent1 = "#4DFE89"; //Accent Color
accent2 = "#898989"; //When buttons are toggled off
accent3 = "#4DFE89"; //When buttons are toggled on
accent4 = "#DEAD85"; //Special Buttons
accent4Dark = "#C67848"; //Special Buttons Dark
grayAccent = "#50514F";
grayAccentLight = "#BBBBBB";
limesRelatedAccent = "#4DFE89";
yellowAccent = "#FCFF4E";

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
		id: 'wisdom',
		name: 'Wisdom',
		mainColor: '99DEFF',
		secondaryColor: '4DC3FF'
	}
]