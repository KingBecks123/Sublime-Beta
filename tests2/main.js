function mainGameLoopSlow() {
	if(gameData.maps > 4) {
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
	if(loopNumberTimePlayed == 2) {
		gameData.timePlayed += 1 
		loopNumberTimePlayed = 0
	}
	
	if (gameData.currentEnlightenmentHinderance == 'blight') {
		loopNumberLimeRot += 1
		if(loopNumberLimeRot == 20 && gameData.limes > 0) {
			gameData.limes -= 1
			loopNumberLimeRot = 0
		}
	}
	
	if (gameData.isThereACustomer)
		gameData.customerWaitTime += 1
	else
		gameData.customerWaitTime = 0
	
	if (gameData.customerWaitTime >= 15) {
		gameData.isThereACustomer = 0
		gameData.customerWaitTime = 0
	}
	
	if (gameData.flourAsPieIngredient > 0 && gameData.juiceAsPieIngredient > 0 && gameData.pieConveyorBeltOn)
		barsobj[16].start()
	
	if (gameData.bachelorsDegreeFinance) {
		if(beckyRandom(2) == 1 && gameData.alphaCoinsExchangeRate < 200)
			gameData.alphaCoinsExchangeRate += 1
		else if (gameData.alphaCoinsExchangeRate > 50)
			gameData.alphaCoinsExchangeRate -= 1
	}
	
	loopNumberGoldenLimes += 1
	if (loopNumberGoldenLimes >= 20) {
		loopNumberGoldenLimes = 0
        if(gameData.goldenLimes > 0)
			gameData.goldenLimes -= 1
    }
	
	updateFieldStuffSlow()
	updateDiseaseStuffSlow()
	updateMapTileAesthetic()
	
	saveGame()
	setTimeout(mainGameLoopSlow, 500)
}

function mainGameLoopFast() {
	updateValues()
	setTimeout(mainGameLoopFast, 15)
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
    if (gameData.fasterTransport) {
        gameData.deliveryTypeToggle = 2
		setDeliveryPrice(50)
    } else {
        gameData.deliveryTypeToggle = 0
		setDeliveryPrice(2)
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
        barsobj[2].start
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
				addLimes(gameData.bigGloves + 1)
				if (gameData.teachBar > 0 && gameData.teachBar < 100)
					gameData.employeeCurrentSpeed += ((gameData.bigGloves + 1) * gameData.employeeSpeed) / 10
			}
			addLimes(gameData.bigGloves + 1)
			if (gameData.teachBar > 0 && gameData.teachBar < 100)
				gameData.employeeCurrentSpeed += ((gameData.bigGloves + 1) * gameData.employeeSpeed) / 10
		} else
			gameData.rottenLimes += (gameData.bigGloves + 1)
		
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

function travelToNextVillage() {
    if (window.prompt("Are you sure? Type 'yes' if you are") == "yes") {
		
		if (gameData.increaseJuicePricePermanance == 1)
		    saveBeforeWipe('juicePriceCents')
		
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
		
		saveWipeValues = ['surveillanceCamera2', 'versionNumber', 'nationalJuiceMarketing', 'creditScore2', 'creditScore3', 'coinsMax', 'respectMilestone10000', 'unlockBenevolence', 'nationalTradeCert', 'bigGloves', 'nutritionists', 'megaCoinsInBankMax', 'betterTraining', 'showBarPercent', 'hideCompletedSkills', 'hideMaxedPurchases', 'researchers', 'upgradeMoreStorage', 'changeResearchersBy10Unlock', 'rottenActualWisdom', 'tickspeed', 'timePlayed'];

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
	
	function saveBeforeWipe(id) {
		eval(id + 'Now = gameData.' + id)
	}

	function saveAfterWipe(id) {
		eval('gameData.' + id + '=' + id + 'Now')
	}
}

function stopActions() {
	gameData.currentTask = 'none'
	gameData.currentTask2 = 'none'
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
	if (gameData.changeZoomSize == 160)
		gameData.changeZoomSize = 60
	else
		gameData.changeZoomSize += 20
	
document.body.style.zoom = gameData.changeZoomSize / 100
}

function benevolenceToggle() {
	if (gameData.diseaseControlFinished)
		toggle('benevolenceToggle')
}

function decreaseJuiceSold() {
    if (gameData.juiceBulkAmountToggle) {
        if (gameData.juiceBulkAmountToggle > 100)
            gameData.juiceBulkAmountToggle -= 10
        else
            gameData.juiceBulkAmountToggle -= 1
    }
}

function increaseJuiceSold() {
    if (gameData.juiceBulkAmountToggle < 100)
        gameData.juiceBulkAmountToggle += 1
    else if (gameData.juiceBulkAmountToggle < 500 && gameData.deliveryTypeToggle == 2 && gameData.fasterTransport > 0)
        gameData.juiceBulkAmountToggle += 10
    else if (gameData.juiceBulkAmountToggle < 2000 && gameData.deliveryTypeToggle == 3)
        gameData.juiceBulkAmountToggle += 10
}

function moveBasket() {
    var elem = document.getElementById("basketBar");
    elem.style.height = gameData.basketBar + "%";
    elem.innerHTML = Math.floor(gameData.basketBar) + "%";
}

function throwPieCoinsWell() {
	if (gameData.pieCoinsInWell + gameData.pieCoins <= 200) {
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
	gameData.endScreen = 0
}

function autoCollectingRingAmount() {
	if (gameData.scavengeRing == 'Nutrition')
		return gameData.scavengeRingPowerLevel * 20
	else
		return 0
}

function coinsToAlphaStart() {
	if (gameData.autoCurrencyConversionBuy)
		pickCurrentTask('coinsToAlphaClick')
	else
		barsobj[13].start()
}

basicBrokerStats = [
	{
		id: 'speed',
		description: 'Speed',
		type: 'Seconds'
	},
	{
		id: 'amount',
		description: 'Alpha Coins Per Transfer',
		type: 'Alpha Coins'
	},
	{
		id: 'fee',
		description: 'Transfer Fee',
		type: 'Coins'
	},
]

function brokerApplicant(id, type, amount) {
	min = 'minBrokerApplicant' + id
	max = 'maxBrokerApplicant' + id
	
	if(gameData.alphaCoins >= gameData['brokerApplicant'+ id + 'Price']) {
		if (type == 'max') {
			if (amount > 0 || (gameData[max] > gameData[min]))
				buy(max)
		}
		else if ((amount > 0 && gameData[min] < gameData[max]) || (amount < 0 && gameData[min] > 1))
			buy(min)
	}
	
	function buy(what) {
		gameData.alphaCoins -= gameData['brokerApplicant'+ id + 'Price']
		gameData['brokerApplicant'+ id + 'Price'] += 5
		gameData[what] += amount
	}
}

function increaseBasicA2BBrokerAmount() {
	if (gameData.pieCoins >= gameData.increaseBasicA2BBrokerAmountPrice) {
		gameData.pieCoins -= gameData.increaseBasicA2BBrokerAmountPrice
		gameData.basicA2BBrokerAmount += 1
		gameData.increaseBasicA2BBrokerAmountPrice *= 2
	}
}

function searchForACurrencyBroker() {
    if (gameData.alphaCoins >= 10) {
        gameData.alphaCoins -= 10
        barsobj[7].bar()
    }
}

function hireApplicant() {
	setApplicationData()
	id = applicationType[gameData.applicationType]
	if (gameData.applicationReady && gameData[id.priceType] >= id.price) {
		gameData[id.priceType] -= gameData[id.priceId + 'ApplicantPrice']
		gameData.applicationReady = 0
		id.onHire()
		for (let i = 0; i < applicationType[gameData.typeToHire].applicationVariables; i++) {
			value = applicationType[gameData.typeToHire].variables[i].name
			gameData[value] = gameData[value + 'OnApplication']
		}
	}
}

function buyAdvertisingManager() {
	if (gameData.alphaCoins >= 10) {
		gameData.alphaCoins -= 10
		gameData.advertisingManagerBroker = 1
	}
}

function addHiringAreaButtons () {
	setApplicationData ()
	for (let i = 0; i < applicationType.length; i++) {
		button = applicationType[i].button
		id = "hire" + button.name + "ToggleButton"
		addTo ($ ("<button />", {
			onclick: "setValue('typeToHireToggle', " + i + ")",
			class: "basicButtonSize",
			id: id,
			style: 'width:170px;display:none;'
		}), 'hireToggleButtons')
		update(id, button.text)
		if (button.unlockVariable == 'none' || gameData[button.unlockVariable])
			show(id, 'inline')
	}
}

function sellPieToCustomer() {
	if (gameData.isThereACustomer && gameData.pies > 0) {
		gameData.isThereACustomer = 0
		gameData.pies -= 1
		gameData.pieCoins += gameData.piePrice
		gameData.hasSoldPie = 1
	}
}

function addPieIngredient(ingredient) {
	if (gameData[ingredient] > 0) {
		gameData[ingredient + 'AsPieIngredient'] += 1
		gameData[ingredient] -= 1
	}
}

function addToPieBucket(ingredient) {
	if (gameData[ingredient] > 0 && gameData[ingredient + 'InPieBucket'] < (gameData.bucketThinSteelPlating * 5 + 20)) {
		gameData[ingredient + 'InPieBucket'] += 1
		gameData[ingredient] -= 1
	}
}

function bucketHoleSize(amount, id) {
	size = id + 'BucketHoleSize'
	change = 2 - gameData.upgradeNozzles
	smartChange(id + 'BucketHoleSize', change, 20)
}

function payPieEmployee() {
	if (gameData.pieCoins >= gameData.pieMerchantPieCoinPrice && gameData.betaCoins >= gameData.pieMerchantBetaCoinPrice && gameData.pieEmployeeSalesLeft < gameData.pieMerchantMaxPay) {
		gameData.pieCoins -= gameData.pieMerchantPieCoinPrice
		gameData.betaCoins -= gameData.pieMerchantBetaCoinPrice
		gameData.pieEmployeeSalesLeft += 1
	}
}

function changePiePrice(x) {
	gameData.piePrice += x
	if (gameData.findPieCustomersBarRunning) {
		gameData.findPieCustomersBarRunning = false
		gameData.isThereACustomer = 0
		gameData.findPieCustomersBar = 0
		gameData.stopSellingPie = true
	}
}

function increaseJuicePrice () {
	if (gameData.increaseJuicePricex10) {
		for (i = 0; i < 10; i++) {
			if (gameData.coins >= gameData.juicePriceCents + 1) {
				gameData.coins -= gameData.juicePriceCents + 1
				gameData.juicePriceCents += 1
			}
		}
	}
	else {
		if (gameData.coins >= gameData.juicePriceCents + 1) {
			gameData.coins -= gameData.juicePriceCents + 1
			gameData.juicePriceCents += 1
		}
	}
}

function buyAFork () {
	if (gameData.coins >= 1) {
		gameData.coins -= 1
		gameData.fork = 1
		gameData.eatBar = 0
	}
}

function changeVariablesColor() {
	toggle('moreVisibleVariables')
	changeVariablesColorAesthetic()
}

function changeVariablesColorAesthetic() {
	for (let i = 0; i < mainVariables.length; i++) {
		if (gameData.moreVisibleVariables) {
			color = "#99DEFF"
			colorDark = "#4DC3FF"
		}
		else {
			color = '#' + mainVariables[i].mainColor
			colorDark = '#' + mainVariables[i].secondaryColor
		}
		colorChangerText('textFor' + jsUcfirst(mainVariables[i].id) + 'Div', colorDark)
		colorChangerText('textFor' + jsUcfirst(mainVariables[i].id), color)
	}
	
	function colorChangerText(id, content) {
		document.getElementById(id).style.color = content;
	}
}

function increaseCreditScore () {
	if (gameData.megaCoins >= 2) {
		gameData.megaCoins -= 2
		gameData.megaCoinsInBankMax += 30
	}
}

function increaseCreditScore2 () {
	if (gameData.megaCoins >= 5) {
		gameData.megaCoins -= 5
		gameData.megaCoinsInBankMax += 150
		gameData.creditScore2 = 1
	}
}

function increaseCreditScore3 () {
	if (gameData.megaCoins >= 50) {
		gameData.megaCoins -= 50
		gameData.megaCoinsInBankMax += 800
		gameData.creditScore3 = 1
	}
}

function upgradeMoreStorage () {
	if (gameData.megaCoins >= upgradeMoreStoragePrice) {
		gameData.megaCoins -= upgradeMoreStoragePrice
		gameData.juicersMax +=  500
		gameData.peelersMax +=  2500
		gameData.upgradeMoreStorage += 1
	}
}

function buyABiggerWallet () {
	if (gameData.megaCoins >= 50) {
		gameData.megaCoins -= 50
		gameData.coinsMax += 1e6
	}
}

function hireApplicant() {
	setApplicationData()
	id = applicationType[gameData.applicationType]
	if (gameData.applicationReady && gameData[id.priceType] >= id.price) {
		gameData[id.priceType] -= gameData[id.priceId + 'ApplicantPrice']
		gameData.applicationReady = 0
		id.onHire()
		for (let i = 0; i < applicationType[gameData.typeToHire].applicationVariables; i++) {
			value = applicationType[gameData.typeToHire].variables[i].name
			gameData[value] = gameData[value + 'OnApplication']
		}
	}
}

function buyAdvertisingManager() {
	if (gameData.alphaCoins >= 10) {
		gameData.alphaCoins -= 10
		gameData.advertisingManagerBroker = 1
	}
}