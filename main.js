var loopNumberBasket = 0;
var loopNumberGoldenLimes = 0;
var loopNumberTimePlayed = 0;
var loopNumberLimeRot = 0
var loopNumbercurrentTask = 0;
var numberOfBasicAchievements = 7;
var numberOfSpecialAchievements = 2;
var autoCollectingVariable = '(gameData.nourishment + 1) * 100 + autoCollectingRingAmount()'

mainVariables       = ['limes'  , 'rottenLimes' , 'peeledLimes' , 'juice'  , 'coins'  , 'megaCoins' , 'alphaCoins' , 'betaCoins' , 'pies'   , 'pieCoins' , 'goldenLimes', 'realLimes', 'wisdom'];
mainVariablesNames  = ['Limes'  , 'Rotten Limes', 'Peeled Limes', 'Juice'  , 'Coins'  , 'Mega Coins', 'Alpha Coins', 'Beta Coins', 'Pies'   , 'Pie Coins', 'Golden Limes', 'Real Limes', 'Wisdom'];

mainVariablesColor  = ['#00B300', '#00B300'     , '#72B301'     , '#00B33D', '#AEB301', '#B40001'   , '#B37700'    , '#AEB301'   , '#964D1A', '#964D1A'  , '#AEB301', '#00B300'   , '#99DEFF'];
mainVariablesColor2 = ['#00FF01', '#00FF01'     , '#A0FF01'     , '#00FF55', '#F8FF01', '#FE0000'   , '#FFAA01'    , '#F8FF01'   , '#C67848', '#C67848'  , '#F8FF01', '#00FF01'   , '#4DC3FF'];

mainSkills =      ['keenEye' , 'rottenWisdom' , 'limebidextrous', 'intelligence', 'knifebidextrous', 'motivation', 'ambidextrous', 'bitterSpeed' ];
mainSkillsNames = ['Keen Eye', 'Rotten Wisdom', 'Limebidextrous', 'Intelligence', 'Knifebidextrous', 'Motivation', 'Ambidextrous', 'Bitter Speed'];

//Area Variables
avs       = [ 
	{
		area: 'serf',
		name: 'Serf',
		backgroundColor: '#DEAD85',
		//variables
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

enlightenments = [
	{
		name: 'Genuine Rotten Wisdom',
		id : 'genuineRottenWisdom',
		goalName: 'Get ',
		goalName2: ' rotten limes',
		goal: 'gameData.rottenLimes >= goalAmount',
		firstCompletionName: 'none',
		perCompletionName: 'none',
		perCompletionDifficulty: '10',
	},
	{
		name: 'Limes Are Life',
		id : 'limesAreLife',
		goalName: 'Get ',
		goalName2: ' limes',
		goal: 'gameData.limes >= goalAmount',
		firstCompletionName: 'none',
		perCompletionName: 'none',
		perCompletionDifficulty: '10',
	},
	{
		name: 'Entrepreneurial',
		id : 'entrepreneurial',
		goalName: 'Get ',
		goalName2: ' coins',
		goal: 'gameData.coins >= goalAmount',
		firstCompletionName: 'none',
		perCompletionName: 'none',
		perCompletionDifficulty: '10',
	},
	{
		name: 'Advanced Entrepreneurial',
		id : 'entrepreneurialAdvanced',
		goalName: 'Get ',
		goalName2: ' mega coins',
		goal: 'gameData.megaCoins >= goalAmount',
		firstCompletionName: 'none',
		perCompletionName: 'none',
		perCompletionDifficulty: '10',
	},
	{
		name: 'The Key Lime',
		id : 'theKeyLime',
		goalName: 'Get ',
		goalName2: ' pies',
		goal: 'gameData.pies >= goalAmount',
		firstCompletionName: 'none',
		perCompletionName: 'none',
		perCompletionDifficulty: '10',
	},
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
	},
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
	},
]

function mainGameLoopSlow() {

	
	if(gameData.maps > 4)
	{
		if(beckyRandom(2) == 1 && gameData.betaCoinsExchangeRate < 5000)
			gameData.betaCoinsExchangeRate += 50
		else if (gameData.betaCoinsExchangeRate > 500)
			gameData.betaCoinsExchangeRate -= 50
	}
	
	gameData.achievementBar = 0
    for (i = 1; i <= numberOfBasicAchievements; i++) {
		if (gameData['achievement' + i])
			gameData.achievementBar += 100 / numberOfBasicAchievements
	}
	
	gameData.lastSaveTime = Date.now()
	loopNumberTimePlayed += 1
	if(loopNumberTimePlayed == 2)
	{
		gameData.timePlayed += 1 
		loopNumberTimePlayed = 0
	}
	
	if (gameData.currentEnlightenmentHinderance == 'blight') {
		loopNumberLimeRot += 1
		if(loopNumberLimeRot == 20 && gameData.limes > 0)
		{
			gameData.limes -= 1
			loopNumberLimeRot = 0
		}
	}
	
	if(gameData.isThereACustomer) {
		if(gameData.customerWaitTime < 5)
			update("customerButton", ":)")
		else if(gameData.customerWaitTime >= 5 && gameData.customerWaitTime < 10)
			update("customerButton", ":l")
		else if(gameData.customerWaitTime >= 10 && gameData.customerWaitTime < 15)
			update("customerButton", ":(")
		else if (gameData.customerWaitTime == 15) {
			gameData.isThereACustomer = 0
			gameData.customerWaitTime = 0
			update("customerButton", "  ")
			update("couldFindCustomer", "The customer left")	
		}
	}
	else
		update("customerButton", "  ")
		
	if (gameData.flourAsPieIngredient > 0 && gameData.juiceAsPieIngredient > 0 && gameData.pieConveyorBeltOn)
		bakePie()
	
	
	updateFieldStuffSlow()
	updateBrokerStuffSlow()
	updateDiseaseStuffSlow()

	
	gameData.customerWaitTime += 1
	moveBar('achievement')
	updateMapTileAesthetic()
	
	
	
	saveGame()
	setTimeout(mainGameLoopSlow, 500)
}

function mainGameLoop() {
	
	loopNumberBasket += 1	
	loopNumberGoldenLimes += 1	

	
	if (gameData.basketBar < 100 && loopNumberBasket >= 24) {
        gameData.basketBar += 0.2;
		loopNumberBasket = 0
		
		if(beckyRandom(100) == 1 && gameData.forestTreeType == 2)
			gameData.goldenLimesInBaskets += 1
    }
	
	if (loopNumberGoldenLimes >= 200) {
        if(gameData.goldenLimes > 0)
		{
			gameData.goldenLimes -= 1
		}
		
		loopNumberGoldenLimes = 0

    }
	   
	setTimeout(mainGameLoop, 50)
}

function mainGameLoopFast() {
	updateValues()
	setTimeout(mainGameLoopFast, 15)
}

function calculateOfflineProgress(){
	secondsOffline = Math.floor((Date.now() - gameData.lastSaveTime) / 1000)
	secondsOfflineThree = Math.floor(secondsOffline / 3)

	if (gameData.basketScarecrow) {
		if(gameData.basketBar + secondsOfflineThree < 100)
			gameData.basketBar += secondsOfflineThree
		else
			gameData.basketBar = 100
	}
	if (gameData.surveillanceCamera && secondsOffline > 60 && gameData.employeeWorking > 0) {
		for (i = 0; i < Math.floor(secondsOffline / 60) && gameData.employeeWorking > 0; i++) {
			finishWorking()
		}
		gameData.workingBar = 0
	}
	
	surveillanceCamera2()
	saveGame()
}

function finishWorking() {
	gameData.employeeWorking -= 1
	addLimes(gameData.employeeCurrentSpeed)
}

function sellMaxJuice() {
    if (gameData.juice < gameData.juiceBulkAmountMax)
        gameData.juiceBulkAmountToggle = gameData.juice
    else
        gameData.juiceBulkAmountToggle = gameData.juiceBulkAmountMax
}

function collectingUpgrade() {
    if (gameData.limes >= gameData.nourishmentPrice) {
        gameData.limes -= gameData.nourishmentPrice
        gameData.nourishment += 1
        gameData.autoCollectingBar = 0
	}
}

function deliveryToggleStandard() {
    if (gameData.fasterTransport == 0) {
        gameData.deliveryTypeToggle = 0
		setDeliveryPrice(2)
    } else {
        gameData.deliveryTypeToggle = 2
		setDeliveryPrice(50)
    }
}

function deliveryToggleExpress() {
    gameData.deliveryTypeToggle = 1
	setDeliveryPrice(5)
}

function deliveryToggleTrain() {
    gameData.deliveryTypeToggle = 3
	setDeliveryPrice(5000)
}

function setDeliveryPrice(i) {
	if (gameData.currentEnlightenmentHinderance == 'resistance')
		gameData.deliveryPrice = i * 4
	else
		gameData.deliveryPrice = i
}

function motivateEmployee() {
	if(gameData.employeeWorking > 0)
	    gameData.workingBar += gameData.motivationSkillLevel / 20
}

function payEmployee() {
    if (gameData.coins >= gameData.employeeWage && gameData.employeeWorking < gameData.employeeWorkingMax) {
        gameData.employeeWorking += 1
        gameData.coins -= gameData.employeeWage
        working()
    }
}

function getLimesButton() {

	if (gameData.lookAround < 1)
		gameData.collectLimesAtBeginning += 1
	
	switch (gameData.collectLimesAtBeginning) {
	  case 10:
        update("newInfo", "Maybe you should try looking around!")
		break;
	  case 20:
        update("newInfo", "Seriously you aren't going to find anything.")
		break;
	  case 30:
        update("newInfo", "Do you see the Look Around button?")
		break;
	  case 40:
        update("newInfo", "There doesn't seem to be any limes here.")
		break;
	  case 50:
        update("newInfo", "Is that a lime?")
		break;
	  case 60:
        update("newInfo", "Nope, it's dirt.")
		break;
	  case 70:
        update("newInfo", "I would suggest looking around more.")
		break;
	  case 80:
        update("newInfo", "You aren't getting a secret achievement.")
		break;
	  case 90:
        update("newInfo", "This is literally just a waste of time.")
		break;
	  case 100:
        update("newInfo", "Can you please play the game correctly?")
		break;
	  case 110:
        update("newInfo", "Is that something priceless in the distance?")
		break;
	  case 120:
        update("newInfo", "Nope, it's dirt.")
		break;
	  case 130:
        update("newInfo", "I'm leaving.")
	}
    getLimes()
}

function getLimes() {
	if (beckyRandom(gameData.keenEyeSkillLevelMax) <= gameData.keenEyeSkillLevel) {
		if (gameData.keenEyeSkillLevel != gameData.keenEyeSkillLevelMax)
			update("newInfo", "You found something!")
		
		if (Math.random() <= (gameData.rottenWisdomSkillLevel / gameData.rottenWisdomSkillLevelMax)) {
			if (Math.random() <= (gameData.limebidextrous / 100)) {
				addLimes(gameData.limesPerClick)
				if (gameData.teachBar > 0 && gameData.teachBar < 100)
					gameData.employeeCurrentSpeed += (gameData.limesPerClick * gameData.employeeSpeed) / 10
			}
			addLimes(gameData.limesPerClick)
			if (gameData.teachBar > 0 && gameData.teachBar < 100)
				gameData.employeeCurrentSpeed += (gameData.limesPerClick * gameData.employeeSpeed) / 10
		} else
			gameData.rottenLimes += gameData.limesPerClick
		
		for (let i = 0; i < gameData.wisdomUpgrademinimumLimesLevel; i++)
			addLimes(1)
		
		for (let i = 0; i < gameData.wisdomUpgrademinimumRottenLimesLevel; i++)
			gameData.rottenLimes += 1
	} 
	else if ((gameData.lookAround < 1 && gameData.collectLimesAtBeginning < 10) || gameData.lookAround >= 1)
		update("newInfo", "Couldn't find any limes...")
}

function addLimes(x) {
	amount = eval(x)
	gameData.limes += amount
	if (gameData.currentEnlightenment != 'none')
		gameData.limes += amount * gameData.wisdomUpgradelimeSeasonLevel
}

function peelLime() {
    if (gameData.limes >= 1) {
        gameData.limes -= 1
        if (Math.floor((Math.random() * 40) / gameData.knifebidextrous) == 0) {
            gameData.peeledLimes += 1
            gameData.limes -= 1
        }
        gameData.peeledLimes += 1
    }
}

function buyAFork() {
    if (gameData.coins >= 1) {
        gameData.coins -= 1
        gameData.fork = 1
        gameData.eatBar = 0
    }
}

function buyARobe() {
    if (gameData.coins >= 1e5) {
        gameData.coins -= 1e5
        gameData.silkRobe = 1
        gameData.respect += 50
    }
}

function increaseCreditScore() {
    if (gameData.megaCoins >= 2) {
        gameData.megaCoins -= 2
        gameData.megaCoinsInBankMax += 30
    }
}

function increaseCreditScore2() {
    if (gameData.megaCoins >= 5) {
        gameData.megaCoins -= 5
        gameData.megaCoinsInBankMax += 150
        gameData.creditScore2 = 1
    }
}

function increaseCreditScore3() {
    if (gameData.megaCoins >= 50) {
        gameData.megaCoins -= 50
        gameData.megaCoinsInBankMax += 800
        gameData.creditScore3 = 1
    }
}

function buyABiggerWallet() {
    if (gameData.megaCoins >= 50) {
        gameData.megaCoins -= 50
        gameData.coinsMax += 1e6
    }
}

function buyMegaCoins() {
    if (gameData.coins >= 10000 && gameData.megaCoinsInBank < gameData.megaCoinsInBankMax && gameData.buyMegaCoinsTimes < gameData.buyMegaCoinsTimesMax) {
        gameData.coins -= 10000
        gameData.megaCoinsInBank += 5
		gameData.buyMegaCoinsTimes += 1
    }
}

function buyMegaCoinsWithAlphaCoins(x) {
	if (gameData.alphaCoins >= x * 10 && gameData.megaCoinsInBank + x <= gameData.megaCoinsInBankMax) {
		gameData.alphaCoins -= x * 10
		gameData.megaCoinsInBank += x
	}
}

function upgradeMoreStorage() {
    if (gameData.megaCoins >= upgradeMoreStoragePrice) {
        gameData.megaCoins -= upgradeMoreStoragePrice
		gameData.juicersMax +=  500
		gameData.peelersMax +=  2500
		gameData.upgradeMoreStorage += 1
    }
}

function travelToNextVillage() {
    if (window.prompt("Are you sure? Type 'yes' if you are") == "yes") {
		
		if (gameData.increaseJuicePricePermanance == 1) {
			saveBeforeWipe('juicePricePrice')
		    saveBeforeWipe('juicePriceCents')
		} 
		
		if (gameData.manuscripts > 0)
			saveBeforeWipe('respectMilestone1000')
		
		if (gameData.saveAlphaCoinsUnlock)
			saveBeforeWipe('alphaCoins')
		
		saveBeforeWipe('saveAlphaCoinsUnlock')
        saveBeforeWipe('manuscripts')
        saveBeforeWipe('lightRobe')
        saveBeforeWipe('increaseJuicePricePermanance')

		
        megaCoinsNow = gameData.megaCoinsInBank
		
		
		for (i = 1; i <= numberOfBasicAchievements; i++)
			saveBeforeWipe('achievement' + i)
		
		for (i = 1; i <= numberOfSpecialAchievements; i++)
			saveBeforeWipe('specialAchievement' + i)
		
		saveWipeValues = ['surveillanceCamera2', 'versionNumber', 'nationalJuiceMarketing', 'creditScore2', 'creditScore3', 'coinsMax', 'respectMilestone10000', 'unlockBenevolence', 'nationalTradeCert', 'bigGloves', 'desktopMode', 'nutritionists', 'megaCoinsInBankMax', 'betterTraining', 'showBarPercent', 'hideCompletedSkills', 'hideMaxedPurchases', 'researchers', 'upgradeMoreStorage', 'changeResearchersBy10Unlock', 'rottenActualWisdom', 'tickspeed', 'timePlayed'];

		for (let i = 0; i < saveWipeValues.length; i++) {
			saveBeforeWipe(saveWipeValues[i])		
		}


		//Before Travel
			Object.assign(gameData, gameDataBase)
        //After Travel


		saveAfterWipe('saveAlphaCoinsUnlock')
		saveAfterWipe('megaCoins')	

		if (gameData.saveAlphaCoinsUnlock)
			saveAfterWipe('alphaCoins')

		if (increaseJuicePricePermananceNow) {
			saveAfterWipe('juicePricePrice')
			saveAfterWipe('juicePriceCents')
			saveAfterWipe('increaseJuicePricePermanance')
		} 
		
        saveAfterWipe('manuscripts')
		
		if (gameData.manuscripts > 0)
			saveAfterWipe('respectMilestone1000')
		
		for (i = 1; i <= numberOfBasicAchievements; i++)
			saveAfterWipe('achievement' + i)
		for (i = 1; i <= numberOfSpecialAchievements; i++)
			saveAfterWipe('specialAchievement' + i)	
		for (let i = 0; i < saveWipeValues.length; i++)
			saveAfterWipe(saveWipeValues[i])

		gameData.juicersMax = 100 + gameData.upgradeMoreStorage * 500
		gameData.peelersMax = 500 + gameData.upgradeMoreStorage * 2500
		
		if (lightRobeNow)
			gameData.respect += 50
		
		if(rottenActualWisdomNow)
			gameData.rottenWisdomSkillLevelMax = 25

        gameData.villageNumber = 2
        saveGame()
        location.reload();
    }
}

function stopActions() {
	gameData.currentTask = 'none'
	gameData.currentTask2 = 'none'
}

function rottenActualWisdom() {
    if (gameData.megaCoins >= 50) {
        gameData.megaCoins -= 50
        gameData.rottenActualWisdom += 1
		gameData.rottenWisdomSkillLevelMax = 25
    }
}

function lookAround() {
    gameData.lookAroundNumber += 1
    if (gameData.lookAround < 1)
        update("newInfo", "Maybe I should keep looking around...")

    if (gameData.lookAround == 0) {
        if (gameData.lookAroundNumber >= 5) {
            update("newInfo", "You see a nearby market.")
            gameData.lookAround = 1
        }
    } 
	else if (gameData.lookAround == 1) {
        if (gameData.lookAroundNumber >= 10) {
            update("newInfo", "You find a merchant willing to buy limes.")
            gameData.lookAround = 2
        }
    } 
	else if (gameData.lookAround == 2) {
        if (gameData.lookAroundNumber >= 15) {
            update("newInfo", "You find a merchant selling various items.")
            gameData.lookAround = 3
        }
    }
}

function buyAMap() {
	multiplier = 1
	if (gameData.currentEnlightenmentHinderance == 'anticartography')
		multiplier = 4
	buy (200000, 3)
	buy (2000, 2)
	buy (200, 1)
	buy (20, 0)
	function buy (i, id) {
		if (gameData.coins >= i * multiplier && gameData.maps == id) {
			gameData.coins -= i * multiplier 
			gameData.maps = id + 1
		}
	}
}

function storageUnlockFunction (x) {
	if (gameData.coins >= 100) {
		gameData.coins -= 100
		gameData['storage' + jsUcfirst(x) + 'Unlock'] = 1
		gameData[x + 'Max'] *= 5
		if (gameData.upgradeMoreStorage > 0)
			gameData.specialAchievement1 = 1
	}
}

function changeZoomSize() {
	if (gameData.changeZoomSize == 150) {
		gameData.changeZoomSize = 100
		document.body.style.zoom=1.0;
	}
	else {
		gameData.changeZoomSize += 10
		document.body.style.zoom= gameData.changeZoomSize / 100;
	}
}

function benevolenceToggle() {
	if (gameData.diseaseControlFinished)
		toggle('benevolenceToggle')
}

function increaseJuicePrice() {
	if(gameData.increaseJuicePricex10) {
		for (i = 0; i < 10; i++) {
			if (gameData.coins >= gameData.juicePricePrice) {
				gameData.coins -= gameData.juicePricePrice
				gameData.juicePriceCents += 1
				gameData.juicePricePrice = gameData.juicePriceCents + 1
			}
		}
	}
	else {
		if (gameData.coins >= gameData.juicePricePrice) {
			gameData.coins -= gameData.juicePricePrice
			gameData.juicePriceCents += 1
		}
	}
}


function decreaseJuiceSold() {
    if (gameData.juiceBulkAmountToggle >= 1) {
        if (gameData.juiceBulkAmountToggle > 100) {
            gameData.juiceBulkAmountToggle -= 10
        } else {
            gameData.juiceBulkAmountToggle -= 1
        }
    }
}

function increaseJuiceSold() {
    if (gameData.juiceBulkAmountToggle < 100) {
        gameData.juiceBulkAmountToggle += 1
    } else if (gameData.juiceBulkAmountToggle < 500 && gameData.deliveryTypeToggle == 2 && gameData.fasterTransport > 0) {
        gameData.juiceBulkAmountToggle += 10
    } else if (gameData.juiceBulkAmountToggle < 2000 && gameData.deliveryTypeToggle == 3) {
        gameData.juiceBulkAmountToggle += 10
    }
}

function moveBasket() {
    var elem = document.getElementById("basketBar");
    elem.style.height = gameData.basketBar + "%";
    elem.innerHTML = Math.floor(gameData.basketBar) + "%";
}


function buyABasket() {
    gameData.basketBar -= gameData.basketBar / (gameData.baskets + 1)
    bulkableBuyMax('baskets', 2)
}

function throwPieCoinsWell(){
	if(gameData.pieCoinsInWell + gameData.pieCoins <= 200) {
		gameData.pieCoinsInWell += gameData.pieCoins
		gameData.pieCoins = 0
	}
	else {
		gameData.pieCoinsInWell = 200
		gameData.pieCoins -= (200 - gameData.pieCoinsInWell)
	}
	moveWell()
}

function moveWell() {
    var elem = document.getElementById("wellBar");
    elem.style.height = (gameData.pieCoinsInWell / 2) + "%";
    elem.innerHTML = Math.floor(gameData.pieCoinsInWell / 2) + "%";
}

function soulArea(uwu) {
	if (typeof uwu == 'number')
		gameData.soulArea = avs[uwu].name
	else
		gameData.soulArea = uwu
	gameData.endScreen = 0
}