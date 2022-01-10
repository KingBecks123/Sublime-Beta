var gameDataBase = {
    limes: 1,
    coins: 0,
	coinsMax: 1e6,
    juicers: 0,
    juice: 0,
    juiceBulkAmount: 1,
    deliveryBar: 0,
    juicerBar: 0,
    howMuchJuice: 0,
    exploreLevel: 0,
	achievementBar: 0,
    specialAchievement1: 0,
    specialAchievement2: 0,

    thisTownDeliveries: 0,
    limesPerClick: 1,
    knife: 0,
    peeledLimes: 0,
    limeTypeToJuice: 0,
    limeTypeToJuiceToggle: 0,
    lookAround: 0,
    rottenLimes: 0,
	
    learnANewSkillBar: 0,
    learnANewSkill: -2,

    teachBar: 0,
    workingBar: 0,
    lookAroundNumber: 0,
    advertiseBar: 0,
    advertise: 0,
    maps: 0,
	
    employeeSpeedOnApplication: 20,
    employeeHungerOnApplication: 10,
    employeePriceOnApplication: 10,
    employeeWageOnApplication: 5,
	
    employeeSpeed: 20,
    employeeHunger: 5,
    employeePrice: 10,
    employeeWage: 10,
	
    employeeCurrentSpeed: 0,
    employees: 0,
    employeeWorking: 0,
    employeeWorkingMax: 10,
    deliveryType: 0,
    deliveryTypeToggle: 0,
    deliveryPrice: 2,
    juiceBulkAmountToggle: 1,
    tomes: 0,

    applicationReady: 0,
    aesthetic: 0,
    foodTypeToggle: 1,

    eat: 0,
    eatBar: 0,
    eatBarRunning: false,
    juicerBarRunning: false,
    peelerBarRunning: false,
    autoCollectingBarRunning: false,
    advertiseBarRunning: false,


    autoCollectingBar: 0,

    skillInfoToggle: 1,
    hasGottenJuice: 0,
    foodType: 0,
    showBarPercent: 0,

    basketBar: 0,
    baskets: 0,
    limesPerJuice: 10,
    peeledLimesPerJuice: 5,
    peelers: 0,
    peelerBar: 0,
    howManyPeeledLimes: 0,
    basketInfoToggle: 1,

    basketsMax: 50,
    juicersMax: 100,
    peelersMax: 500,

    firstApplicant: 1,
    teachInfoToggle: 0,
    sellingPieInfoToggle: 1,
    employeeStatsInfoToggle: 0,

    bulkBuyUnlock: 0,
    bulkBuyUnlock2: 0,


    storageUnlock: 0,
    storageJuicersUnlock: 0,
    storagePeelersUnlock: 0,

    peelersBulkToggle: 0,
    juicersBulkToggle: 0,
    basketsBulkToggle: 0,

    advertisingLevel1: 0,
    advertisingLevel2: 0,
    advertisingLevel3: 0,
	
	nationalJuiceMarketing: 0,
	multitasking: 0,
	currentSkill: 'none',
	increaseJuicePricex10: 0,


    versionNumber: 0,

    hideCompletedSkills: 0,
    hideMaxedPurchases: 0,
    fasterTransport: 0,

    sharperPeelers: 0,
    bigGloves: 0,
    villageNumber: 1,
    nutritionists: 0,
    showAchievements: 0,


    megaCoins: 0,
    megaCoinsInBank: 0,
    megaCoinsInBankMax: 20,

    diseaseControlFinished: 1,
    respect: 0,
    simulationTime: 0,
    unlockDiseaseAreaSwamp: 0,
    limeDiseaseInfoToggle: 1,
    limeDiseaseControlInfoToggle: 1,
    limeDiseaseLakes: 0,
    limeDiseaseLakesCurrent: 0,
    limeDiseaseLakesSet: 0,


    hasAdvertised: 0,

    betterTraining: 0,
	
	respectBillboard: 0,

    civiliansPlaced: 0,
    civiliansTotal: 2,
	
    autoStartTask: 0,
    autoCheckSimulation: 0,
    autoStartSimulation: 0,
	upgradeMoreStorage: 0,
	
    bachelorsDegreeFinance: 0,
    benevolence: 0,
    benevolenceBar: 0,
    benevolenceResearchers: 0,
    unlockBenevolence: 0,
	benevolenceToggle: 1,



    diseaseTileSize: 1,
	
	autoPlaceACivilian: 0,

	increaseJuicePricePermanance: 0,
	changeResearchersBy10Unlock: 0,

    silkRobe: 0,

    diseaseArray: [
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0]
    ],
    numberOfTiles: 16,


    juiceBulkAmountMax: 100,

    entrepreneurialCertificates: 0,

    juicePriceCents: 0,

    deliveryManager: 0,

    nourishment: 0,
	
    fork: 0,
    shoes: 0,

    pin: "none",
    pinUnlock: 0,
	
	hideKnife: 0,
	manuscripts: 0,

	collectLimesAtBeginning: 0,



    currentTask: "none",
    currentTask2: "none",


	keenEyeSkillLevelMax:         20,
	intelligenceSkillLevelMax:    20,
	limebidextrousSkillLevelMax:  50,
	knifebidextrousSkillLevelMax: 20,
	rottenWisdomSkillLevelMax:    50,
	motivationSkillLevelMax:     100,
	ambidextrousSkillLevelMax:   20,
	bitterSpeedSkillLevelMax:   200,

		
	knifebidextrous: 0,
    limebidextrous: 0,
	
	shiftClickOption: 0,
	toggleActions: 0,
	
	isAutoCollecting: 0,
	
	watertightBar: 0,
	watertightResearchers: 0,
	surveyingBar: 0,
	surveyingResearchers: 0,
	researchers: 0,

	respectMilestone10: 0,
	respectMilestone25: 0,
	respectMilestone50: 0,
	respectMilestone100: 0,
	respectMilestone500: 0,
	respectMilestone1000: 0,
	respectMilestone10000: 0,

	alphaCoins: 0,
	alphaCoinsExchangeRate: 100,
	creditScore2: 0,
	creditScore3: 0,
	coinsToAlphaBar: 0,
	isCoinsToAlphaBar: 0,
	currencyBrokerHireBar: 0,
	smarterAdvertisingManagerBroker: 0,
	convertedCoinsSinceTravel: 0,
	transferAlphaCoinBags: 0,
	alphaCoinConvertBulkToggle: 0,
	alphaCoinConvertBulkToggleSet: 0,
	
	lastSaveTime: Date.now(),

	
	buyMegaCoinsTimes: 0,
	buyMegaCoinsTimesMax: 10,
	
	changeZoomSize: 100,
	
	amountCoinsToAlpha: 0,
	amountCoinsToAlphaMax: 10,

	currencyApplicationReady: 0,
	applicationType: 0,
	unlockCurrencyBrokers: 0,
	typeToHire: 0,
	typeToHireToggle: 0,
	doesHaveCurrencyBroker: 0,
	convertCoinsNowBar: 0,
	
	currencyBrokerFeeOnApplication: 0,
	currencyBrokerSpeedOnApplication: 0,
	currencyBrokerPriceOnApplication: 0,
	currencyBrokerAmountOnApplication: 0,
	
	currencyBrokerFee: 200000,
	currencyBrokerSpeed: 20,
	currencyBrokerPrice: 0,
	currencyBrokerAmount: 1,
	
	minBrokerApplicantSpeed: 20,
	maxBrokerApplicantSpeed: 60,
	brokerApplicantSpeedPrice: 0,

	minBrokerApplicantFee: 5000,
	maxBrokerApplicantFee: 10000,
	brokerApplicantFeePrice: 0,
	autoCurrencyConversionBuy: 0,
	
	minBrokerApplicantAmount: 1,
	maxBrokerApplicantAmount: 10,
	brokerApplicantAmountPrice: 0,
	
	advertisingManagerBroker: 0,
	autoAdvertiseBroker: 0,
	autoAdvertiseSpeedValue: 30,
	autoAdvertiseSpeedValueMax: 60,
	autoAdvertiseAmountValue: 5, 
	advertisePrice: 10,
	advertisePriceType: 'coins',
	basketScarecrow: 0,
	moreVisibleVariables: 0,
	invertText: 0,
	surveillanceCamera: 0,
	surveillanceCamera2: 0,
	skillTrainer: 0,

	timePlayed: 0,

	saveAlphaCoinsUnlock: 0,
    isOptionsOpen: 0,
	transferAlphaCoinsBulkUnlock: 0,
	lightRobe: 0,
	rottenActualWisdom: 0,
	
	forestTree2: 0,
	forestTreeType: 1,
	goldenLimes: 0,
	goldenLimesInBaskets: 0,
	eatGoldenLimeBar: 100,
	bitterSpeeding: 0,

	
	//Beta Coins
	betaCoins: 0,
	betaCoinsExchangeRate: 2500,
	betaCoinTransferAmount: 1,
	alphaToBetaBar: 0,
	basicAlphaToBetaBroker: 0,
	basicA2BBrokerRule: 1000,
	basicA2BBrokerAmount: 1,
	increaseBasicA2BBrokerAmountPrice: 2,
	textForA2BBrokerAmountToggle: 0,
	
	//Pie
	pies: 0,
	hasGottenPies: 0,
	piePrice: 1,
	findPieCustomersBar: 0,
	isThereACustomer: 0,
	findPieCustomersBarRunning: false,
	customerWaitTime: 0,
	hasSoldPie: 0,
	pieConveyorBelt : 0,
	pieConveyorBeltOn: 0,
	bakePieBarRunning: false,
	stopSellingPie: false,
	
	pieBucket: 0,
	pieFlourBucket: 0,

	juiceInPieBucket: 0,
	flourInPieBucket: 0,
	
	pieBucketNozzle: 0,	
	pieFlourBucketNozzle: 0,
	
	bucketThinSteelPlating: 0,

	juiceBucketHoleSize: 10,
	flourBucketHoleSize: 10,
	
	bellows: 0,
	bellowsBar: 0,
	
	upgradeNozzles: 0,
	
	//Pie Employee
	pieEmployee: 0,
	pieEmployeeSalesLeft: 0,

	pieMerchantPieCoinPriceOnApplication: 0,
	pieMerchantBetaCoinPriceOnApplication: 0,
	pieMerchantMaxPayOnApplication: 0,
	pieMerchantCharmOnApplication: 0,

	pieMerchantPieCoinPrice: 5,
	pieMerchantBetaCoinPrice: 0,
	pieMerchantMaxPay: 10,
	pieMerchantCharm: 0,
	
	pieApplicantPrice: 0,
	doesHavePieMerchant: 0,
	usingBetaCoinWage: 0,
	pieMerchantInfoToggle: 0,


	//Wheat
	wheatField: 0,
	wheat: 0,
	wheatSeeds: 0,
    wheatFieldArray: [
        [59, 59, 59, 59, 59],
        [59, 59, 59, 59, 59],
        [59, 59, 59, 59, 59],
        [59, 59, 59, 59, 59],
        [59, 59, 59, 59, 59]
    ],
	mortarAndPestle: 0,
	flour: 0,
	pieOven: 0,
	bakePieBar: 0,
	bakePieBarRunning: false,
	juiceAsPieIngredient: 0,
	flourAsPieIngredient: 0,
	pieCoins: 0,
	advancedPieHiring: 0,
	
	wheatHarvesters: 0,
	seedDrills: 0,
	hasGottenFieldTools: 0,
	
	selectedWheatItem: 'seed',
	nextPlotPrice: 4,
	sellPlotPrice: 0,
	selectedPlotX: 0,
	selectedPlotY: 0,

	
	//New People
	forestWell: 0,
	pieCoinsInWell: 0,
	
	trainTransport: 0,

    //default is 1 :D
    tickspeed: 1,
	
	mainTab: 'null',
	marketTab: 'marketMain',

	endScreen: 0,
	soulArea: 'start',
	trueLimes: 0,
	
	
	serf: {
		rice: 0,
		coins: 0,
		lordsRice: 1000000000,
		lordsCoins: 1000000000,
		health: 20,
		riceOwed: 5,

	},

	harvestRiceBar: 0,
	serfHealthBar: 0,
	newBakerySerf: 0,
	
    scavengeUnlocked: 0,
	scavengeBar: 0,
	scavengeBarRunning: false,
	scavengeLoot: [],
	scavengeLootSelected: -1,
	scavengeRing: 'empty',
	scavengeRingPowerLevel: 0,
	
	enlightenmentUnlocked: 0,
	diseaseControlTaskShown: false,
	enlightenmentTaskShown: false,
	currentEnlightenment: 'none',
	currentEnlightenmentHinderance: 'none',
	enlightenmentEntrepreneurialCompletions: 0,
	wisdom: 0,
	allWisdom: 0,
	buyWisdomPieCoinsPrice: 100,
	buyWisdomBetaCoinsPrice: 100,
	buyWisdomRespectPrice: 10000,
	enlightenmentSelected: 'none',
	enlightenmentHinderanceSelected: 'none',

}


for (let i = 1; i <= 7; i++) {
	gameDataBase['achievement' + i] = 0
}

for (let i = 0; i < skills.length; i++) {
	gameDataBase[skills[i].id + 'Bar'] = 0
	gameDataBase[skills[i].id + 'SkillLevel'] = 0
	gameDataBase[skills[i].id + 'BarRunning'] = false
}

for (let i = 0; i < mainVariables.length; i++) {
	gameDataBase[mainVariables[i].id + 'ShowVariable'] = true
	gameDataBase[mainVariables[i].id + 'UnlockedVariable'] = false
}

for (let i = 0; i < 4; i++) {
	gameDataBase.scavengeLoot[i] = {name: 'empty'}
}

for (let i = 0; i < enlightenments.length; i++) {
	gameDataBase['enlightenmentCompletions' + enlightenments[i].id] = 0
}

for (let i = 0; i < wisdomUpgrades.length; i++) {
	gameDataBase['wisdomUpgrade' + wisdomUpgrades[i].id + 'Level'] = 0
	gameDataBase['wisdomUpgrade' + wisdomUpgrades[i].id + 'Price'] = wisdomUpgrades[i].initialPrice
}

gameDataBase.enlightenmentData = []
for (let i = 0; i < enlightenments.length; i++) {
	gameDataBase.enlightenmentData[enlightenments[i].id] = {}
	for (let j = 0; j < enlightenmentHinderances.length; j++) {
		gameDataBase.enlightenmentData[enlightenments[i].id][enlightenmentHinderances[j].id] = 0
	}
}

var gameData = {}

ableToSave = true