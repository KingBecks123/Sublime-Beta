barsobj = [
	{
		where: 'eatFoodDiv',
		id: 'eat',
		tryToRestart: true,
		granularity: function () {
			return  0.5 * (gameData.fork + 1)
		},
		start: function() {
			if (canStartBar('eat') && gameData.eat < 100) {
				if (gameData.foodTypeToggle == 0 && gameData.limes > 0) {
					gameData.limes -= 1
					gameData.foodType = 5	
					if (gameData.eatBar == 100 || gameData.eatBar == 0) {
						gameData.eatBar = 0
						barsobj[0].bar()
					}
				} else if (gameData.foodTypeToggle == 1 && gameData.rottenLimes > 0) {
					gameData.rottenLimes -= 1
					gameData.foodType = 1
					
					if (gameData.eatBar == 100 || gameData.eatBar == 0) {
						gameData.eatBar = 0
						barsobj[0].bar()
					}
				}
			}
		},
		bar: function () {
			barMoverAdvanced('eat')
		},
		end: function () {
			gameData.eat += gameData.foodType * (gameData.nutritionists + 1)
		}
	},
	{
		where: 'autoCollectingDiv',
		id: 'autoCollecting',
		start: function() {
			if (gameData.autoCollectingBar == (gameData.nourishment + 1) * 100 + autoCollectingRingAmount() || gameData.autoCollectingBar == 0) {
				gameData.autoCollectingBar = 0
				barsobj[1].bar()
			}
		},
		bar: function () {
			if (gameData.autoCollectingBar < (gameData.nourishment + 1) * 100 + autoCollectingRingAmount()) {
				moveBar('autoCollecting', 0.25, 1)
			}

			if (gameData.scavengeRing == 'Nutrition Rate')
				rate = gameData.scavengeRingPowerLevel
			else
				rate = 0
			
			if (gameData.autoCollectingBar % (10 / (gameData.shoes + 1 + rate)) == 0 && gameData.autoCollectingBar != (gameData.nourishment + 1) * 100 + autoCollectingRingAmount()) {
				getLimes()
			}
		},
		end: function () {
		}
	},
	{
		where: 'employeeOne',
		id: 'working',
		start: function() {
			gameData.employeeIsWorking = 1
			if (gameData.workingBar == 100 || gameData.workingBar == 0) {
				gameData.workingBar = 0
				barsobj[2].bar()
			}
		},
		bar: function () {
			if (gameData.workingBar < 100 && gameData.employeeIsWorking) {
				gameData.workingBar += 0.1
				setTimeout(barsobj[2].bar, 60)
			} 
			
			else {
				if (gameData.employeeIsWorking == 1)
					finishWorking()

				if (gameData.employeeWorking > 0)
					barsobj[2].start()
				else
					gameData.employeeIsWorking = 0
			}
		},
	},
	{
		where: 'forestBaskets',
		id: 'basket',
		style: 'vertical',
		start: function() {
			gameData.basketBar = 0;
			addLimes(Math.floor(gameData.baskets * (gameData.basketBar / 4)))
			gameData.goldenLimes += gameData.goldenLimesInBaskets
			gameData.goldenLimesInBaskets = 0
		},
		bar: function () {
			if (gameData.basketBar < 100) {
				gameData.basketBar += 0.2
				if (beckyRandom(100) == 1 && gameData.forestTreeType == 2)
					gameData.goldenLimesInBaskets += 1
			}
			setTimeout(barsobj[3].bar, 1200)
		},
	},
	{
		where: 'employeeOne',
		id: 'teach',
		tryToRestart: true,
		granularity: function () {
			1
		},
		start: function() {
			gameData.employeeCurrentSpeed = -(gameData.employeeHunger * 60)
			setTimeout('barStartObject("teach", 4)', 1000)
		},
		bar: function () {
			barMoverAdvanced('teach')
		},
		end: function () {
		}
	},
	{
		where: 'mainTravelArea',
		id: 'convertCoinsNow',
		tryToRestart: true,
		granularity: function () {
			return  0.1 / Math.pow(2, (gameData.convertedCoinsSinceTravel + 1))
		},
		start: function() {
			if (gameData.coins >= 1e5 && (gameData.convertCoinsNowBar == 0 || gameData.convertCoinsNowBar == 100)) {
				gameData.coins -= 1e5
				gameData.convertedCoinsSinceTravel += 1
				gameData.convertCoinsNowBar = 0
				barsobj[5].bar()
			}
		},
		bar: function () {
			barMoverAdvanced('convertCoinsNow')
		},
		end: function () {
			gameData.megaCoins += 1
		}
	},
	{
		where: 'learnANewSkillDiv',
		id: 'learnANewSkill',
		tryToRestart: true,
		granularity: function () {
			return 0.2
		},
		start: function() {
			if (gameData.learnANewSkill - gameData.tomes <= 2) {
				barStartObject('learnANewSkill', 6)
			}
		},
		bar: function () {
			barMoverAdvanced('learnANewSkill')
		},
		end: function () {
			switch (gameData.learnANewSkill) {
				case -2:
					gameData.learnANewSkill = -1
					update("newInfo", "You learned Keen Eye!")
					break;
				case -1:
					gameData.learnANewSkill = 0
					update("newInfo", "You unlocked auto collection!")
					break;
				case 0:
					gameData.learnANewSkill = 1
					update("newInfo", "You Learned Rotten Wisdom!")
					break;
				case 1:
					gameData.learnANewSkill = 2
					update("newInfo", "You Learned Limebidextrous!")
					break;
				case 2:
					gameData.learnANewSkill = 3
					update("newInfo", "You Learned Intelligence!")
					break;
				case 3:
					gameData.learnANewSkill = 4
					update("newInfo", "You Learned Knifebidextrous!")
					break;
				case 4:
					gameData.learnANewSkill = 5
					update("newInfo", "You Learned Motivation!")
					break;
				case 5:
					gameData.learnANewSkill = 6
					update("newInfo", "You Learned Ambidextrous!")
					break;
				case 6:
					gameData.learnANewSkill = 7
					update("newInfo", "You Learned Bitter Speed!")
			}
		}
	},
	{
		where: 'mainTravelArea',
		id: 'currencyBrokerHire',
		granularity: function () {
			return 0.5
		},
		start: function() {
		},
		bar: function () {
			barMoverAdvanced('currencyBrokerHire')
		},
		end: function () {
			gameData.currencyApplicationReady = 1
			randomizeApplicationCurrencyBroker()
		}
	},
	{
		where: 'goldenBarDiv',
		id: 'eatGoldenLime',
		tryToRestart: true,
		color: 'F8FF01',
		granularity: function () {
			return 0.5
		},
		start: function() {
			if (gameData.goldenLimes > 0) {
				gameData.goldenLimes -= 1
				gameData.eatGoldenLimeBar = 100
				gameData.bitterSpeeding = 1
				barsobj[8].bar()
			}
		},
		bar: function () {
			if (gameData.eatGoldenLimeBar > 0) {
				gameData.eatGoldenLimeBar -= 0.5
				setTimeout(barsobj[8].bar, gameData.bitterSpeedSkillLevel)
			} 
			else 
				gameData.bitterSpeeding = 0
		}
	},
	{
		where: 'peelerDiv',
		id: 'peeler',
		tryToRestart: true,
		granularity: function () {
			return 0.3 * (0.5 + gameData.bitterSpeeding * 10) * ((gameData.sharperPeelers + 1) * 2)
		},
		start: function(x) {
			if (x == 'one') {
				if ((gameData.peelerBar >= 99 || gameData.peelerBar == 0) && gameData.limes >= 1 && gameData.peelerBarRunning == false) {
					gameData.howManyPeeledLimes = 1
					gameData.limes -= 1
					gameData.peelerBar = 0
					barsobj[9].bar()
				}
			}
			else {
				if ((gameData.peelerBar >= 99 || gameData.peelerBar == 0) && gameData.peelerBarRunning == false)  {
					gameData.howManyPeeledLimes = gameData.limes
					if (gameData.howManyPeeledLimes > gameData.peelers) 
						gameData.howManyPeeledLimes = gameData.peelers
					gameData.limes -= gameData.howManyPeeledLimes
					if (gameData.howManyPeeledLimes > 0) {
						gameData.peelerBar = 0;
						barsobj[9].bar()
					}
				}
			}	
		},
		bar: function () {
			barMoverAdvanced('peeler')
		},
		end: function () {
			gameData.peeledLimes += gameData.howManyPeeledLimes
		}
	},
	{
		where: 'useJuicersDiv',
		id: 'juicer',
		tryToRestart: true,
		granularity: function () {
			return 0.3 * (0.5 + gameData.bitterSpeeding * 5) * (gameData.limeTypeToJuiceToggle * 3 + 1)
		},
		start: function(x) {
			if (gameData.limeTypeToJuice)
				id = 'peeledLimes'
			else
				id = 'limes'
			
			if (canStartBar('juicer')) {
				if (x == 'one') {
					if (gameData[id] >= gameData[id + 'PerJuice']) {
						gameData[id] -= gameData[id + 'PerJuice']
						gameData.howMuchJuice = 1
						gameData.limeTypeToJuiceToggle = gameData.limeTypeToJuice
						startJuicers()
					}
				}
				else {
					gameData.howMuchJuice = Math.floor(gameData[id] / gameData[id + 'PerJuice'])
					
					if (gameData.howMuchJuice > gameData.juicers)
						gameData.howMuchJuice = gameData.juicers
					
					gameData.limeTypeToJuiceToggle = gameData.limeTypeToJuice
					gameData[id] -= gameData.howMuchJuice * gameData[id + 'PerJuice']
					
					if (gameData.howMuchJuice > 0)
						startJuicers()
				}
			}
			
			function startJuicers () {
				gameData.juicerBar = 0
				barsobj[10].bar()
			}
		},
		bar: function () {
			barMoverAdvanced('juicer')
		},
		end: function () {
			gameData.juice += gameData.howMuchJuice
			gameData.hasGottenJuice = 1		
		}
	},
	{
		where: 'juiceMarket',
		id: 'delivery',
		tryToRestart: true,
		granularity: function () {
			return (gameData.deliveryType == 0) * 0.02 + (gameData.deliveryType == 1) * 0.5 + (gameData.deliveryType == 2)
		},
		start: function() {
			if (canStartBar('delivery') && gameData.coins >= gameData.deliveryPrice && gameData.juice >= gameData.juiceBulkAmountToggle) {
				gameData.deliveryType = gameData.deliveryTypeToggle
				gameData.juiceBulkAmount = gameData.juiceBulkAmountToggle
				gameData.coins -= gameData.deliveryPrice
				gameData.juice -= gameData.juiceBulkAmount
				gameData.deliveryBar = 0;
				gameData.thisTownDeliveries += 1
				barsobj[11].bar()
			}
		},
		bar: function () {
			barMoverAdvanced('delivery')
		},
		end: function () {
			gameData.coins += (gameData.nationalJuiceMarketing + 1) * Math.floor(gameData.juiceBulkAmount * (1 + (gameData.juicePriceCents / 100)))
			if (gameData.scavengeRing == 'Smart Seller' && gameData.coins >= gameData.coinsMax) {
				if (gameData.currentTask == 'delivery')
					gameData.currentTask = 'none'
				else if (gameData.currentTask2 == 'delivery')
					gameData.currentTask2 = 'none'
			}
		}
	},
	{
		where: 'advertiseBarDiv',
		id: 'advertise',
		tryToRestart: true,
		granularity: function () {
			return 0.1 * (gameData.advertisingLevel2 + 1) * (gameData.advertisingLevel3 * 2 + 1)
		},
		start: function() {
			if (canStartBar('advertise') && gameData[gameData.advertisePriceType] >= gameData.advertisePrice) {
				gameData[gameData.advertisePriceType] -= gameData.advertisePrice
				gameData.typeToHire = gameData.typeToHireToggle
				gameData.advertiseBar = 0
				barsobj[12].bar()
			}
		},
		bar: function () {
			barMoverAdvanced('advertise')
		},
		end: function () {
			gameData.applicationReady = 1
			gameData.hasAdvertised = 1
			setApplicationData ()
			if (applicationType[gameData.typeToHire].onAdvertised != undefined)
				x = applicationType[gameData.typeToHire].onAdvertised()

			if (x != true) {
				for (let i = 0; i < applicationType[gameData.typeToHire].variables.length; i++) {
					id = applicationType[gameData.typeToHire].variables[i]
					gameData[id.name + 'OnApplication'] = Math.floor(Math.random() * id.max + id.min) * id.multiplier
				}
			}
			gameData.applicationType = gameData.typeToHire
		}
	},
	{
		where: 'earnAlphaCoins',
		id: 'coinsToAlpha',
		tryToRestart: true,
		granularity: function () {
			return 1.5 / gameData.currencyBrokerSpeed
		},
		start: function() {
			price = (gameData.alphaCoinsExchangeRate + gameData.currencyBrokerFee) * gameData.currencyBrokerAmount
			
			if (gameData.alphaCoinConvertBulkToggle)
				price *= 10
			
			if (gameData.coins >= price && canStartBar('coinsToAlpha')) {
				gameData.alphaCoinConvertBulkToggleSet = gameData.alphaCoinConvertBulkToggle
				gameData.coins -= price
				gameData.coinsToAlphaBar = 0
				barsobj[13].bar()
			}
		},
		bar: function () {
			barMoverAdvanced('coinsToAlpha')
		},
		end: function () {
			amount = gameData.currencyBrokerAmount
			if (gameData.alphaCoinConvertBulkToggleSet == 1)
				amount *= 10
			gameData.alphaCoins += amount
		}
	},
	{
		where: 'earnBetaCoins',
		id: 'alphaToBeta',
		tryToRestart: true,
		granularity: function () {
			return 0.5
		},
		start: function() {
			price = gameData.betaCoinsExchangeRate
			
			if (gameData.textForA2BBrokerAmountToggle)
				price *= gameData.basicA2BBrokerAmount

			if (gameData.alphaCoins >= price && canStartBar('alphaToBeta')) {
				gameData.alphaCoins -= price
				gameData.alphaToBetaBar = 0
				gameData.a2BBrokerAmountSet = gameData.textForA2BBrokerAmountToggle
				barsobj[14].bar()
			}
		},
		bar: function () {
			barMoverAdvanced('alphaToBeta')
		},
		end: function () {
			amount = gameData.wisdomUpgradebetaTestingLevel + 1
			if(gameData.a2BBrokerAmountSet != 0)
				amount *= gameData.basicA2BBrokerAmount
			gameData.betaCoins += amount
		}
	},
	{
		where: 'pieSellingDiv',
		id: 'findPieCustomers',
		tryToRestart: true,
		granularity: function () {
			return 5 / (Math.pow(2 - gameData.pieMerchantCharm / 20, gameData.piePrice) + 10 + gameData.piePrice - gameData.pieMerchantCharm)
		},
		start: function() {
			if (canStartBar('findPieCustomers')) {
				gameData.findPieCustomersBar = 0
				gameData.findPieCustomersBarRunning = true	
				barsobj[15].bar()
			}
		},
		bar: function () {
			if (gameData.stopSellingPie)
				gameData.stopSellingPie = false
			else
				barMoverAdvanced('findPieCustomers')
		},
		end: function () {
			gameData.isThereACustomer = 1
			gameData.customerWaitTime = 0
			gameData.findPieCustomersBarRunning = false
			if (gameData.pieEmployeeSalesLeft > 0) {
				gameData.pieEmployeeSalesLeft -= 1
				sellPieToCustomer()
			}
		},
	},
	{
		where: 'bakePieBarDiv',
		id: 'bakePie',
		tryToRestart: true,
		granularity: function () {
			return 0.1 * (gameData.bellowsBarRunning + 1)
		},
		start: function() {
			if (canStartBar('bakePie') && gameData.juiceAsPieIngredient > 0 && gameData.flourAsPieIngredient > 0) {
				gameData.bakePieBar = 0
				gameData.isPieBaking = 1
				barsobj[16].bar()
			}
		},
		bar: function () {
			barMoverAdvanced('bakePie')
		},
		end: function () {
			gameData.pies += 1
			gameData.juiceAsPieIngredient = 0
			gameData.flourAsPieIngredient = 0
			gameData.isPieBaking = 0
		}
	},
	{
		where: 'bellowsDiv',
		id: 'bellows',
		granularity: function () {
			return 0.1
		},
		start: function() {
			startBellows = false
			if (gameData.bellowsBar == 100)
				startBellows = true
			gameData.bellowsBar = 0
			if (startBellows)
				barsobj[17].bar()
		},
		bar: function () {
			barMoverAdvanced('bellows', true)
		},
		end: function () {
		}
	},
	{
		where: 'forestScavengeBar',
		id: 'scavenge',
		tryToRestart: true,
		granularity: function () {
			return 0.05
		},
		start: function() {
			if (canStartBar('scavenge')) {
				gameData.scavengeBar = 0
				barsobj[18].bar()
			}
		},
		bar: function () {
			barMoverAdvanced('scavenge')
		},
		end: function () {
			hasAddedSomething = false
			hasFoundEmptyTile = false
			for (let i = 0; i < gameData.scavengeLoot.length && hasFoundEmptyTile == false; i++) {
				if (gameData.scavengeLoot[i].name == 'empty') {
					hasFoundEmptyTile = true
					totalWeight = 0
					
					for (let j = 0; j < scavengeobj.length; j++) {
						totalWeight += scavengeobj[j].weight
					}
					
					totalWeight = beckyRandom(totalWeight)
					
					for (let j = 0; j < scavengeobj.length && !hasAddedSomething; j++) {
						totalWeight -= scavengeobj[j].weight
						if (totalWeight < 0) { 
							gameData.scavengeLoot[i].name = scavengeobj[j].name
							if (scavengeobj[j].type == 'ring')
								gameData.scavengeLoot[i].powerLevel = beckyRandom(scavengeobj[j].powerLevelRange)
							else
								gameData.scavengeLoot[i].powerLevel = 0
							hasAddedSomething = true
						}
					}	
				}
			}
			updateScavengeTileAesthetic()
		}
	}
]