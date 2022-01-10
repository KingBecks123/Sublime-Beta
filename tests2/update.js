function updateValues() {
	startCurrentTask(gameData.currentTask)	
	startCurrentTask(gameData.currentTask2)	
	
	if(gameData.currentSkill !== 'none')
		startSkill(gameData.currentSkill, false)
	
	twoToggleButtons('foodToggleRottenLimesButton', 'foodToggleLimesButton', gameData.foodTypeToggle)
	twoToggleButtons('juicePeeledLimesToggleButton', 'juiceLimesToggleButton', gameData.limeTypeToJuice)

	function twoToggleButtons(button1, button2, value) {
		if (value == 1) {
			colorChanger(button1, accent3)
			colorChanger(button2, accent2)
		} else {
			colorChanger(button1, accent2)
			colorChanger(button2, accent3)
		}
	}

	var x = document.getElementsByClassName('unlockDiseaseAreaSwamp')
	for (i = 0; i < x.length; i++) {
		if (gameData.unlockDiseaseAreaSwamp)
			x[i].style.display = "block"
		else
			x[i].style.display = "none"
	}

	basicToggle("skill", "Info")
	basicToggle("limeDisease", "Info")
	basicToggle("limeDiseaseControl", "Info")
	basicToggle("teach", "Info")
	basicToggle("employeeStats", "Info")
	basicToggle("basket", "Info")
	basicToggle("sellingPie", "Info")
	basicToggle("pieMerchant", "Info")
	basicToggle("juicers", "Bulk")
	basicToggle("peelers", "Bulk")
	basicToggle("baskets", "Bulk")
	basicToggle("alphaCoinConvert", "Bulk")
	
	function basicToggle(input, type) {
		info = input + type
		button = info + "Button"
		x = document.getElementsByClassName(info);

		if (gameData[info + 'Toggle']) {
			colorChanger(button, accent3)
			for (i = 0; i < x.length; i++) {
				x[i].style.display = "block"
			}
		} else {
			colorChanger(button, accent2)
			for (i = 0; i < x.length; i++) {
				x[i].style.display = "none"
			}
		}
	}

	toggleAesthetic("autoStartTask")
	toggleAesthetic("autoStartSimulation")
	toggleAesthetic("autoCheckSimulation")
	toggleAesthetic("autoPlaceACivilian")
	toggleAesthetic("benevolenceToggle")
	toggleAesthetic("autoAdvertiseBroker")
	toggleAesthetic("increaseJuicePricex10")
	toggleAesthetic("pieConveyorBeltOn")
	toggleAesthetic("toggleActions")
	toggleAesthetic("textForA2BBrokerAmountToggle")
	toggleAesthetic("hideCompletedSkills")
	toggleAesthetic("hideMaxedPurchases")
	toggleAesthetic("showBarPercent")

	function toggleAesthetic(input) {
		button = input + "Button"
		if (gameData[input] == 1)
			document.getElementById(button).style.backgroundColor = accent3
		else
			document.getElementById(button).style.backgroundColor = accent2
	}

	currentTaskAesthetic('peelerPeel')
	currentTaskAesthetic('peelerPeelMax')
	currentTaskAesthetic('makeJuice')
	currentTaskAesthetic('makeMaxJuice')
	currentTaskAesthetic('eat')
	currentTaskAesthetic('delivery')
	currentTaskAesthetic('findPieCustomers')
	currentTaskAesthetic('scavenge')

	ifMaxDarkGray("basket", '#DEAD85')
	ifMaxDarkGray("juicer", '#99FF99')
	ifMaxDarkGray("peeler", accent4)
	
	function ifMaxDarkGray(x, color) {
		button = "buyA" + jsUcfirst(x) + "Button"
		if (gameData[x + 's'] == gameData[x + 'sMax'])
			colorChanger(button, grayAccent)
		else
			colorChanger(button, color)
	}

	if (gameData.typeToHireToggle == 0) {
		colorChanger('hireEmployeeToggleButton', accent3)
		colorChanger('hireBrokerToggleButton', accent2)
		colorChanger('hirePieMerchantToggleButton', accent2)
	} else if (gameData.typeToHireToggle == 1) {
		colorChanger('hireEmployeeToggleButton', accent2)
		colorChanger('hireBrokerToggleButton', accent3)
		colorChanger('hirePieMerchantToggleButton', accent2)
	} else if (gameData.typeToHireToggle == 2) {
		colorChanger('hireEmployeeToggleButton', accent2)
		colorChanger('hireBrokerToggleButton', accent2)
		colorChanger('hirePieMerchantToggleButton', accent3)
	}
	
	button1 = 'deliveryToggleStandardButton'
	button2 = 'deliveryToggleExpressButton'
	button3 = 'deliveryToggleTrainButton'

	if (gameData.deliveryTypeToggle == 0 || gameData.deliveryTypeToggle == 2) {
		colorChanger(button1, accent3)
		colorChanger(button2, accent2)
		colorChanger(button3, accent2)
	} else if (gameData.deliveryTypeToggle == 1) {
		colorChanger(button1, accent2)
		colorChanger(button2, accent3)
		colorChanger(button3, accent2)
	} else {
		colorChanger(button1, accent2)
		colorChanger(button2, accent2)
		colorChanger(button3, accent3)
	}

	if (gameData.wheat)
		colorChanger('winnowWheat', accent4)
	else
		colorChanger('winnowWheat', grayAccentLight)

	if (gameData.wheatSeeds)
		colorChanger('grindFlour', accent4)
	else
		colorChanger('grindFlour', grayAccentLight)

	if (gameData.forestTreeType == 1) {
		colorChanger('forestTree1', accent3)
		colorChanger('forestTree2', accent2)
	} else {
		colorChanger('forestTree2', accent3)
		colorChanger('forestTree1', accent2)
	}

	var x = document.getElementsByClassName("changeResearchersBy10")
	for (i = 0; i < x.length; i++) {
		if (gameData.changeResearchersBy10Unlock)
			x[i].style.display = 'inline-block'
		else
			x[i].style.display = 'none'
	}

	var x = document.getElementsByClassName("achievement")
	for (i = 0; i < x.length; i++) {
		if (gameData['achievement' + (i + 1)])
			x[i].style.backgroundColor = limesRelatedAccent
		else
			x[i].style.backgroundColor = grayAccent
		x[i].style.padding = "5px"
		x[i].style['margin'] = "5px"
	}

	var x = document.getElementsByClassName("specialAchievement")
	for (i = 0; i < x.length; i++) {
		if (gameData['specialAchievement' + (i + 1)])
			x[i].style.backgroundColor = limesRelatedAccent
		else
			x[i].style.backgroundColor = grayAccent
		x[i].style.padding = "5px"
		x[i].style['margin'] = "5px"
	}

	if (gameData.simulationTime)
		colorChanger('checkResultsButton', accent4)
	else
		colorChanger('checkResultsButton', grayAccent)

	if (gameData.isAutoCollecting)
		colorChanger('autoCollectingButton', grayAccent)
	else
		colorChanger('autoCollectingButton', accent4)

	if (gameData.currentTask == 'coinsToAlphaClick' || gameData.currentTask2 == 'coinsToAlphaClick')
		colorChanger('coinsToAlphaClickButton', '#F8FF01')
	else
		colorChanger('coinsToAlphaClickButton', '#FDFF9A')

	if (gameData.currentTask == 'alphaToBetaClick' || gameData.currentTask2 == 'alphaToBetaClick')
		colorChanger('alphaToBetaClickButton', '#F8FF01')
	else
		colorChanger('alphaToBetaClickButton', '#FDFF9A')

	function currentTaskAesthetic(x) {
		button = x + "Button"
		if (gameData.currentTask == x || gameData.currentTask2 == x)
			colorChanger(button, accent4Dark)
		else
			colorChanger(button, accent4)
	}

	if (gameData.juiceBulkAmountToggle == 100 && gameData.deliveryTypeToggle < 2)
		colorChanger('increaseJuiceSoldButton', grayAccent)
	else
		colorChanger('increaseJuiceSoldButton', grayAccentLight)

	if (gameData.juiceBulkAmountToggle == 0)
		colorChanger('decreaseJuiceSoldButton', grayAccent)
	else
		colorChanger('decreaseJuiceSoldButton', grayAccentLight)

	var x = document.getElementsByClassName("skillButton")
	if (gameData.multitasking) {
		for (i = 0; i < x.length; i++) {
			x[i].style['padding'] = "1px 10px 1px 10px"
			x[i].style['border-radius'] = "12px"
		}
		for (let i = 0; i < skills.length; i++) {
			button = skills[i].id + "Button"
			if (gameData.currentSkill == skills[i].id)
				colorChanger(button, accent4Dark)
			else
				colorChanger(button, accent4)
		}
	} else {
		for (i = 0; i < x.length; i++) {
			x[i].style.backgroundColor = accent4
		}
	}

	var x = document.getElementsByClassName("currencyButton")
	if (gameData.autoCurrencyConversionBuy) {
		for (i = 0; i < x.length; i++) {
			x[i].style['padding'] = "1px 10px 1px 10px"
			x[i].style['border-radius'] = "12px"
		}
	} else {
		for (i = 0; i < x.length; i++) {
			x[i].style.backgroundColor = '#FDFF9A'
		}
	}
	for (i = 0; i < x.length; i++) {
		x[i].style['margin'] = "5px";
	}

    if (gameData.juiceBulkAmountToggle > 100 && gameData.deliveryTypeToggle < 2)
        gameData.juiceBulkAmountToggle = 100

    if (gameData.juiceBulkAmountToggle > gameData.juiceBulkAmountMax)
        gameData.juiceBulkAmountToggle = gameData.juiceBulkAmountMax

    if (gameData.coins > gameData.coinsMax)
        gameData.coins = gameData.coinsMax
	
    if (gameData.alphaCoins > 1e5)
        gameData.alphaCoins = 1e5
	
    if (gameData.eat > 100)
        gameData.eat = 100
	
    if (gameData.limes < 0)
        gameData.limes = 0
	
    if (gameData.respect < 0)
        gameData.respect = 0

    if (gameData.megaCoinsInBank > gameData.megaCoinsInBankMax)
        gameData.megaCoinsInBank = gameData.megaCoinsInBankMax

    if (gameData.employeeWorking > gameData.employeeWorkingMax)
        gameData.employeeWorking = gameData.employeeWorkingMax

    overMaximum("baskets")
    overMaximum("juicers")
    overMaximum("peelers")
    overMaximum("intelligenceSkillLevel")
	
	function overMaximum(x) {
		if (gameData[x] > gameData[x + 'Max'])
			gameData[x] = gameData[x + 'Max']
	}
	
	preventNegative('coins')
	preventNegative('limes')
	preventNegative('respect')
	
	function preventNegative(id) {
		if (gameData[id] < 0)
			gameData[id]
	}

	gameData.nourishmentPrice = Math.pow(10, gameData.nourishment);

	percentBarTypes = ['skillBar', 'verticalBar', 'skillBarColored', 'smallContainerBar']

	if (!gameData.showBarPercent) {
		for (j = 0; j < percentBarTypes.length; j++) {
			var x = document.getElementsByClassName(percentBarTypes[j]);
			for (i = 0; i < x.length; i++) {
				x[i].style.color = "rgba(0, 0, 0, 0)";
			}
		}
	} else {
		for (j = 0; j < percentBarTypes.length; j++) {
			var x = document.getElementsByClassName(percentBarTypes[j]);
			for (i = 0; i < x.length; i++) {
				x[i].style.color = accent0;
			}
		}
	}

	if (gameData.coins > 0)
		gameData.showAchievements = 1

	for (let i = 0; i < mainVariables.length; i++) {
		id = mainVariables[i].id
		elem = "textFor" + jsUcfirst(id)
		valRaw = gameData[id]

		if (valRaw > 1e9)
			val = valRaw.toExponential(3)
		else
			val = valRaw.toLocaleString()

		if ((gameData[id + 'UnlockedVariable'] && gameData[id + 'ShowVariable']) || id == 'limes') {
			show(elem + 'Div')
			show(elem + 'Br')
			show(elem + 'P')
			show(elem)
		} else {
			hide(elem + 'Div')
			hide(elem + 'Br')
			hide(elem + 'P')
			hide(elem)
		}
		
		if (id == 'coins')
			update(elem, val + '<span class="tooltiptext" id="maxCoinsTooltip"></span>')
		else if (id == 'alphaCoins')
			update(elem, val + '<span class="tooltiptext" id="maxAlphaCoinsTooltip"></span>')
		else
			update(elem, val)
		
		if (gameData.currentEnlightenmentHinderance == 'decimation' && gameData[mainVariables[i]] % 10 == 0)
			gameData[mainVariables[i].id] = 0
	}

	for (let i = 1; i < mainVariables.length; i++) {
		
		if (gameData[mainVariables[i].id] > 0)
			gameData[mainVariables[i].id + 'UnlockedVariable'] = true

		if (gameData[mainVariables[i].id + 'UnlockedVariable'])
			show('currencyDisplay(' + i + ')', 'inline')
		else
			hide('currencyDisplay(' + i + ')')
	}
	
	juicePricePrice = (gameData.juicePriceCents + 1) + gameData.increaseJuicePricex10 * ((gameData.juicePriceCents + 1) * 9 + 45)

	upgradeMoreStoragePrice = Math.pow(2, gameData.upgradeMoreStorage) * 50


	if (gameData.forestTreeType == 1)
		update("limesInBaskets", (Math.floor(gameData.baskets * (gameData.basketBar / 4))).toLocaleString() + " Limes")
	else
		update("limesInBaskets", (Math.floor(gameData.baskets * (gameData.basketBar / 4))).toLocaleString() + " Limes + " + gameData.goldenLimesInBaskets.toLocaleString() + " Golden Limes")


	if (gameData.employeeWorking > 0)
		update("workingEmployee", "Working time left: " + gameData.employeeWorking.toLocaleString() + " / 10 minutes.")
	else
		update("workingEmployee", "Employee is idle.")
	
	
	if (!gameData.applicationReady)
		update("application", "Pin applications here")

	moveBasket()

	for (let i = 0; i < skills.length; i++) {
		update(skills[i].id + "SkillLevel", gameData[skills[i].id + "SkillLevel"] + " / " + gameData[skills[i].id + "SkillLevelMax"])
		if (skills[i].description != undefined)
			update(skills[i].id, skills[i].description())
	}

	if (gameData.lookAround >= 1)
		divVisibility("navigateButtons", "visible")

	if (gameData.limeTypeToJuice)
		update("juicerInfo", gameData.peeledLimesPerJuice + " Peeled Limes -> 1 Juice")
	else
		update("juicerInfo", gameData.limesPerJuice + " Limes -> 1 Juice")


	if (gameData.advertisePriceType == 'coins')
		advertisePriceType = " Coins"
	else if (gameData.advertisePriceType == 'betaCoins')
		advertisePriceType = " Beta Coins"

	if (gameData.deliveryTypeToggle == 2 && gameData.fasterTransport > 0)
		gameData.juiceBulkAmountMax = 500
	else if (gameData.deliveryTypeToggle == 3)
		gameData.juiceBulkAmountMax = 2000
	else
		gameData.juiceBulkAmountMax = 100

	if (gameData.pinUnlock) {
		var x = document.getElementsByClassName("pinButton")
		for (i = 0; i < x.length; i++) {
			x[i].style.display = "inline-block"
		}
	}
	
	for (let i = 0; i < basicBrokerStats.length; i++) {
		id = jsUcfirst(basicBrokerStats[i].id)
		type = ' ' + basicBrokerStats[i].type
		update("textForBrokerApplicant" + id, "Currently " + gameData['minBrokerApplicant' + id].toLocaleString() + " - " + gameData['maxBrokerApplicant' + id].toLocaleString() + type)
		update("brokerApplicant" + id + 'Price', "Price: " + gameData['brokerApplicant' + id + 'Price'].toLocaleString() + " Alpha Coins")
		update("currencyBroker" + id, basicBrokerStats[i].description + ": " + gameData['currencyBroker' + id].toLocaleString() + type + ".")
	}
	
	
	if (gameData.enlightenmentTaskShown)
		update('allEnlightenmentTaskVis', 'Show Enlightenment Task')
	else
		update('allEnlightenmentTaskVis', 'Hide Enlightenment Task')
	
	showOrHide(!gameData.endScreen && gameData.soulArea == 'start', 'sublimeMain')
	showOrHide(gameData.endScreen, 'endScreen')
	showOrHide(gameData.respectMilestone10000, 'buyABiggerWallet')
	showOrHide(gameData.creditScore2 && !gameData.creditScore3, 'increaseCreditScore3')
	showOrHide(gameData.respectMilestone10000 && !gameData.creditScore2, 'increaseCreditScore2')
	showOrHide(gameData.respectMilestone10000, 'upgradeMoreStorage')
	showOrHide(gameData.megaCoinsInBankMax <= 20, 'increaseCreditScore')
	showOrHide(gameData.storageUnlock && !gameData.storageJuicersUnlock, 'storageJuicersDiv')
	showOrHide(gameData.storageUnlock && !gameData.storagePeelersUnlock, 'storagePeelersDiv')
	showOrHide(!gameData.fork && gameData.learnANewSkill > -2, 'buyAForkDiv')
	showOrHide(!gameData.silkRobe && gameData.respectMilestone50, 'buyARobe')
	showOrHide(gameData.pieBucket == 1 && gameData.pieFlourBucket == 1, 'bucketThinSteelPlating')
	showOrHide(gameData.currentEnlightenment != 'none', 'quitEnlightenment', 'inline')
	showOrHide(gameData.currentEnlightenment != 'none', 'newInfoEnlightenment', 'inline')
	showOrHide(gameData.currentEnlightenment == 'none', 'newInfo', 'inline')
	showOrHide(!gameData.enlightenmentTaskShown && gameData.enlightenmentUnlocked, 'allEnlightenmentTask')
	showOrHide(gameData.enlightenmentUnlocked, 'allEnlightenmentTaskVis')
	showOrHide(gameData.bachelorsDegreeFinance, 'alphaCoinToMegaCoinDiv')
	showOrHide(gameData.bachelorsDegreeFinance, 'tradeButton', 'inline')
	showOrHide(gameData.transferAlphaCoinsBulkUnlock, 'transferAlphaCoinsBulk')
	showOrHide(!gameData.transferAlphaCoinBags, 'transferAlphaCoinBagsUnlock')
	showOrHide(!gameData.transferAlphaCoinsBulkUnlock, 'transferAlphaCoinsBulkUnlock')
	showOrHide(!gameData.saveAlphaCoinsUnlock, 'saveAlphaCoinsUnlock')
	showOrHide(gameData.lookAround < 3, 'lookAroundButton', 'inline')
	showOrHide(gameData.bitterSpeedSkillLevel, 'eatGoldenLime')
	showOrHide(gameData.bitterSpeedSkillLevel, 'eatGoldenLimeProgress')
	showOrHide(gameData.hasGottenJuice, 'juiceMarket')
	showOrHide(gameData.employees, 'companyButton')
	showOrHide(gameData.juicers, 'inventoryButton')
	showOrHide(gameData.showAchievements, 'achievementsButton', 'inline')
	showOrHide(gameData.villageNumber > 1 || gameData.betterTraining > 0 || gameData.increaseJuicePricePermanance, 'megaCoinUpgradesButton')
	showOrHide(gameData.forestWell, 'forestWellDiv', 'inline')
	showOrHide(gameData.ambidextrousSkillLevel == gameData.ambidextrousSkillLevelMax, 'stopActionsButton', 'inline')
	showOrHide(!gameData.manuscripts, 'buyManuscriptsDiv')
	showOrHide(!gameData.multitasking && gameData.learnANewSkill > 0, 'buySkillToggler')
	showOrHide(gameData.diseaseControlFinished, 'startDiseaseTask')
	showOrHide(!gameData.diseaseControlFinished, 'diseaseControlStart')
	showOrHide(gameData.learnANewSkill > -2, 'toggleActionsButton', 'inline')
	showOrHide(gameData.deliveryManager, 'sellMaxJuiceButton', 'inline')
	showOrHide(!gameData.deliveryManager, 'decreaseJuiceSoldButton', 'inline')
	showOrHide(!gameData.deliveryManager, 'increaseJuiceSoldButton', 'inline')
	showOrHide(gameData.maps > 0, 'marketMainButtonsDiv', 'inline')
	showOrHide(gameData.maps > 1, 'hiringAreaButton', 'inline')
	showOrHide(gameData.maps > 3, 'tasksButton')
	showOrHide(gameData.maps > 2 || gameData.villageNumber > 1, 'travelButton', 'inline')
	showOrHide(gameData.maps > 3 && !gameData.autoCurrencyConversionBuy, 'autoCurrencyConversion')
	showOrHide(gameData.maps > 2, 'increaseJuicePrice')
	showOrHide(gameData.basicAlphaToBetaBroker, 'basicAlphaToBetaBrokerRule')
	showOrHide(!gameData.basicAlphaToBetaBroker, 'basicAlphaToBetaBroker')
	showOrHide(gameData.maps > 4, 'earnBetaCoins')
	showOrHide(gameData.hasAdvertised && !gameData.surveillanceCamera, 'offlineEmployee')
	showOrHide(gameData.bulkBuyUnlock, 'peelersBulkButton', 'inline')
	showOrHide(gameData.bulkBuyUnlock, 'basketsBulkButton', 'inline')
	showOrHide(gameData.bulkBuyUnlock, 'juicersBulkButton', 'inline')
	showOrHide(gameData.seedDrills || gameData.wheatHarvesters, 'wheatMachines')
	showOrHide(gameData.mortarAndPestle, 'grindFlour')
	showOrHide(gameData.wheatField, 'fieldButton')
	showOrHide(!gameData.changeResearchersBy10Unlock, 'changeResearchersBy10Unlock')
	showOrHide(gameData.forestTree2, 'treeTypeDiv')
	showOrHide(gameData.scavengeLootSelected >= 0, 'scavengeAbilities')
	showOrHide(gameData.hasGottenPies, 'bakeryButton')
	showOrHide(gameData.pieBucket, 'pieBuckets')
	showOrHide(gameData.pieFlourBucket, 'flourBucketProgress', 'visible')
	showOrHide(gameData.pieFlourBucket, 'addToPieFlourBucket', 'visible')
	showOrHide(gameData.pieFlourBucketNozzle, 'flourMinusNozzle', 'visible')
	showOrHide(gameData.pieFlourBucketNozzle, 'flourPlusNozzle', 'visible')
	showOrHide(gameData.pieBucketNozzle, 'bucketHoleChanger')
	showOrHide(gameData.bellows, 'bellowsDiv')
	showOrHide(gameData.pieOven, 'pieOvenDiv', 'inline')
	showOrHide(gameData.pieConveyorBelt, 'pieConveyorBeltOnButton', 'inline')
	showOrHide(gameData.pieEmployee, 'payPieEmployeeDiv')
	showOrHide(gameData.hasGottenFieldTools, 'fieldPlacementOptions')
	showOrHide(gameData.doesHavePieMerchant, 'pieMerchant')
	showOrHide(gameData.lookAround >= 2, 'sellYourLimesDiv')
	showOrHide(gameData.lookAround >= 3 && !gameData.scavengeUnlocked, 'scavengingUnlock')
	showOrHide(gameData.tomes > 3, 'goldenBarDiv')
	showOrHide(gameData.villageNumber, 'marketMainButtonsDiv', 'inline')
	showOrHide(gameData.peeledLimes, 'juiceLimesToggleButton', 'inline')
	showOrHide(gameData.peeledLimes, 'juicePeeledLimesToggleButton', 'inline')
	showOrHide(gameData.knife, 'knifeDiv')
	showOrHide(gameData.benevolence, 'benevolence')
	showOrHide(gameData.pieCoinsInWell == 200, 'enterTheWell', 'inline')
	showOrHide(gameData.baskets, 'forestTreesDiv', 'inline')
	showOrHide(gameData.scavengeUnlocked, 'forestScavengeDiv', 'inline')
	showOrHide(gameData.learnANewSkill >= 0, 'autoCollectingDiv')
	showOrHide(gameData.learnANewSkill >= 0, 'nourishment')
	showOrHide(gameData.learnANewSkill >= 0, 'skillInfoButton', 'inline')
	showOrHide(gameData.learnANewSkill >= 5, 'motivateEmployeeButton')
	showOrHide(gameData.forestTreeType == 2, 'goldenLimesInfo')
	showOrHide(gameData.learnANewSkill >= -1, 'eatFoodDiv')
	showOrHide(gameData.peelers >= 2, 'peelerPeelMaxButton', 'inline')
	showOrHide(gameData.peelers, 'peelerDiv')
	showOrHide(gameData.skillTrainer, 'skillTrainer')
	showOrHide(gameData.advertisingLevel1, 'advertisingMethods')
	showOrHide(gameData.hasAdvertised && !gameData.advertisingLevel1, 'researchBetterAdvertising')
	showOrHide(!gameData.advertisingLevel2, 'advertisingLeaflets')
	showOrHide(!gameData.advertisingLevel3, 'advertisingBillboard')
	showOrHide(gameData.doesHaveCurrencyBroker, 'currencyBroker')
	showOrHide(gameData.smarterAdvertisingManagerBroker, 'smarterAdvertisingBrokerRule')
	showOrHide(!gameData.unlockCurrencyBrokers, 'unlockCurrencyBrokers')
	showOrHide(gameData.unlockCurrencyBrokers, 'hireToggleButtons')
	showOrHide(gameData.unlockCurrencyBrokers, 'brokerApplicantUpgrades')
	showOrHide(!gameData.advertisingManagerBroker, 'autoBrokerAdvertiser')
	showOrHide(gameData.advertisingManagerBroker && gameData.typeToHireToggle == 1, 'autoAdvertiseBrokerDiv', 'inline')
	showOrHide(gameData.advertisingManagerBroker && !gameData.smarterAdvertisingManagerBroker, 'smarterAutoBrokerAdvertiser')
	showOrHide(gameData.transferAlphaCoinBags, 'alphaCoinConvertBulkButton', 'inline')


	checkRespectMilestone(10, 'lime', 'Automatically start tasks', 'autoStartTaskButton')
	checkRespectMilestone(25, 'lime', 'Automatically start simulation', 'autoStartSimulationButton')
	checkRespectMilestone(50, 'lime', 'Allow entrance to the Special Shopping District')
	checkRespectMilestone(100, 'lime', 'Automatically check simulation', 'autoCheckSimulationButton')
	checkRespectMilestone(500, 'lime', 'Automatically situate a civilian', 'autoPlaceACivilianDiv')
	checkRespectMilestone(1000, 'lime', 'Unlock scientific research', 'scienceButton')
	checkRespectMilestone(10000, 'red', 'Unlock more mega coin upgrades')

	function checkRespectMilestone(number, color, text, id) {
		milestone = number + 'RespectMilestone'
		
		if (gameData.respect >= number)
			gameData['respectMilestone' + number] = 1
		if (gameData['respectMilestone' + number]) {
			if (id !== undefined) {
				if (number == 500)
					show(id)
				else
					show(id, "inline")
			}
			
			elem = ''
			if(number == 10000)
				elem = '<span class="tooltiptext">Yes, you have this unlocked. The red means that it is permanent.</span>'
			update(number + 'RespectMilestone', number.toLocaleString() + ' Respect: ' + text + elem)
			
			if (color == 'lime')
				colorChanger(milestone, limesRelatedAccent)
			if (color == 'red')
				colorChanger(milestone, '#FF999A')
		} else {
			if (id !== undefined)
				hide(id)
			colorChanger(milestone, grayAccentLight)
		}
	}


	if (gameData.fasterTransport)
		update("deliveryToggleStandardButton", "Hyper Delivery")
	else
		update("deliveryToggleStandardButton", "Standard Delivery")

	if (gameData.maps > 0)
		document.getElementById("marketMainButtonsDiv").style.width = "360px"

	if (gameData.maps > 3)
		update("specialAchievement2", "Buy a Giant Map after only sending one delivery in that town")

	if (gameData.respectMilestone10000)
		update("specialAchievement1", "Get a 5x multplier with Buy More Land purchased")

	if (gameData.bulkBuyUnlock2) {
		update("peelersBulkButton", "x100")
		update("basketsBulkButton", "x100")
		update("juicersBulkButton", "x100")
	}


	for (i = 1; i <= 3; i++) {
		if (gameData.tomes == i)
			show("tomeDiv" + (i + 1))
		else
			hide("tomeDiv" + (i + 1))
	}



	if (gameData.juicers >= 2)
		divVisibility("makeMaxJuiceButton", "visible")

	for (i = 1; i <= numberOfBasicAchievements; i++) {
		if (gameData.limes >= Math.pow(10, i))
			gameData['achievement' + i] = 1
	}

	for (i = 1; i <= numberOfSpecialAchievements; i++) {
		if (gameData['specialAchievement' + 1])
			show('specialAchievement' + 1)
	}

	if (gameData.learnANewSkill - 3 == gameData.tomes) {
		document.getElementById('learnANewSkillButton').style.backgroundColor = 'darkgray';
		gameData.learnANewSkillBar = 100;
	} else
		document.getElementById('learnANewSkillButton').style.backgroundColor = '#DEAD85';

	if (gameData.learnANewSkill >= -1)
		showOrHideSkill("keenEye")
	
	for (let i = 0; i < skills.length; i++) {
		if (gameData.learnANewSkill >= i)
			showOrHideSkill(skills[i].id)
		else
			hide(skills[i].id + 'Div')
	}
	
	function showOrHideSkill(x) {
		if (gameData.hideCompletedSkills && gameData[x + 'SkillLevel'] == gameData[x + 'SkillLevelMax'])
			hide(x + "Div")
		else
			show(x + "Div")
	}

	if(gameData.trainTransport)
		show('deliveryToggleTrainButton', 'inline')

	if(gameData.forestWell)
		update("textForLimesDiv", "'Limes'")
	
	if(gameData.baskets || gameData.scavengeUnlocked)
		show('forestButton')
	else
		hide('forestButton')
	
	updateEnlightenmentStuff()
	
	if (gameData.diseaseControlTaskShown) {
		hide('allDiseaseControlTask')
		update('allDiseaseControlTaskVis', 'Show Disease Control Task')
	}
	else {
		show('allDiseaseControlTask')
		update('allDiseaseControlTaskVis', 'Hide Disease Control Task')
	}
	
	if (gameData.rottenActualWisdom)
		gameData.rottenWisdomSkillLevelMax = 25
		
	for (let i = 0; i < divs.length; i++) {
		for (let k = 0; k < divs[i].elements.length; k++) {
			elem = divs[i].elements[k]
			if (elem.format == 'basicUnlock') {
				if (elem.show() && gameData[elem.buy] == 0)
					show(elem.buy + 'UnlockDiv')
				else
					hide(elem.buy + 'UnlockDiv')
			}
			else if (elem.format == 'travelUpgrade') {
				if (gameData[elem.variable])
					show(elem.variable + 'TravelUpgradeDiv')
				else
					hide(elem.variable + 'TravelUpgradeDiv')
			}
			else {
				if (elem.update != undefined)
					elem.update()
				if (elem.show != undefined) {
					if (elem.show())
						show(elem.id)
					else
						hide(elem.id)
				}
			}
		}
	}
	
	alphaCoinTotalPrice = (gameData.alphaCoinsExchangeRate + gameData.currencyBrokerFee) * gameData.currencyBrokerAmount

	if (gameData.alphaCoinConvertBulkToggle)
		bulk = 10
	else
		bulk = 1
	
	resetUpdateObj()
	for (let i = 0; i < updateObjMain.length; i++) {
		update(updateObjMain[i].id, updateObjMain[i].content)
	}
	
	
	if (gameData.basicAlphaToBetaBroker && gameData.betaCoinsExchangeRate < gameData.basicA2BBrokerRule)
		barsobj[14].start()
	if (gameData.autoAdvertiseBroker && (gameData.currencyApplicantSpeed > gameData.autoAdvertiseSpeedValue || (gameData.smarterAdvertisingManagerBroker && gameData.currencyApplicantTransferAmount < gameData.autoAdvertiseAmountValue)))
		barsobj[12].start()
	
	researchersAvailable = gameData.researchers
	for (let i = 0; i < science.length; i++) {
		name = science[i].id
		
		if(science[i].requirement != 'none') {
			if (eval(science[i].requirement) >= 1)
				show(name + "Div")
			else
				hide(name + "Div")
		}
		
		update(name + 'Text', science[i].text())
		update("textFor" + jsUcfirst(name) + "Researchers", gameData[name + "Researchers"] + " Researchers")
		window[name + 'ResearchTime'] = Math.floor(200 * eval(science[i].equation) / gameData[science[i].id + 'Researchers'])
		timeToShowScience(name)
		researchersAvailable -= gameData[name + "Researchers"]
	}
	
	setApplicationData ()
	if (gameData.applicationReady) {
		applicationTextTotal = ''
		for (let i = 0; i < applicationType[gameData.applicationType].text.length; i++) {
			id = applicationType[gameData.applicationType]
			applicationTextTotal += id.text[i][0] + ': ' + gameData[id.variables[i].name + 'OnApplication'].toLocaleString()
			if (id.text[i][1] != undefined)
				applicationTextTotal += ' ' + id.text[i][1]
			applicationTextTotal += '<br>'
		}
		update("application", "<br>" + applicationTextTotal + "<br>")
	}
	gameData.advertisePrice = applicationType[gameData.typeToHireToggle].price
	gameData.advertisePriceType = applicationType[gameData.typeToHireToggle].priceType
	
	
	
	height = gameData.bucketThinSteelPlating * 5 + 20
	
	var elem = document.getElementById("juiceBucketBar")
    elem.style.height = Math.floor((gameData.juiceInPieBucket * 100) / height)  + "%"
    elem.innerHTML = Math.floor((gameData.juiceInPieBucket * 100) / height) + "%"
	
	var elem = document.getElementById("flourBucketBar")
    elem.style.height = Math.floor((gameData.flourInPieBucket * 100) / height)  + "%"
    elem.innerHTML = Math.floor((gameData.flourInPieBucket * 100) / height) + "%"
	
	var elem = document.getElementById("juiceHoleBar")
    elem.style.width = gameData.juiceBucketHoleSize * 5 + "%"
	elem.style.right = 50 - (gameData.juiceBucketHoleSize * 2.5) + "%"	

	var elem = document.getElementById("flourHoleBar")
    elem.style.width = gameData.flourBucketHoleSize * 5 + "%"
	elem.style.right = 50 - (gameData.flourBucketHoleSize * 2.5) + "%"	

	if(gameData.pies > 0)
		gameData.hasGottenPies = 1
		
	leakage ('juice', 100)
	leakage ('flour', 400)
	
	function leakage (id, speed) {
		if (eval(id + 'InPieBucketLeak') > speed / gameData[id + 'BucketHoleSize']) {
			if (gameData[id + 'InPieBucket'] > 0) {
				gameData[id + 'InPieBucket'] -= 1
				gameData[id + 'AsPieIngredient'] += 1
			}
			eval(id + 'InPieBucketLeak = 0')
		}
		eval(id + 'InPieBucketLeak += 1')
	}
	
	if (gameData.bakePieBar !== 100) {
		if (beckyRandom(2) == 1)
			pieOvenColor += 10
		else
			pieOvenColor -= 10
		
		if(pieOvenColor > 200)
			pieOvenColor = 200
	
		if(pieOvenColor < 0)
			pieOvenColor = 0
	}
	
	if(gameData.wheatHarvesters || gameData.seedDrills)
		gameData.hasGottenFieldTools = 1
	
	document.getElementById('bakePieBar').style.backgroundColor = 'rgba(345, ' + pieOvenColor + ', 66)'
	document.getElementById('bellowsBar').style.backgroundColor = '#99DEFF'
	
	if (!gameData.isThereACustomer)
		update("customerButton", "  ")
	else if (gameData.customerWaitTime < 5)
		update("customerButton", ":)")
	else if (gameData.customerWaitTime >= 5 && gameData.customerWaitTime < 10)
		update("customerButton", ":l")
	else if (gameData.customerWaitTime >= 10 && gameData.customerWaitTime < 15)
		update("customerButton", ":(")
	
	
	if (gameData.increaseJuicePricePermanance)
		colorChanger('increaseJuicePriceButton', '#FF999A')
	else
		colorChanger('increaseJuicePriceButton', accent4)
}