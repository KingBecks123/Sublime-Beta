function updateAfterLoad() {

	calculateOfflineProgress()

	for (let i = 0; i < skills.length; i++) {
		restartBar(skills[i].id)
	}
	
	barsToRestart = ["learnANewSkill", "juicer", "peeler", "advertise", "eat", "teach", "coinsToAlpha", "convertCoinsNow", "alphaToBeta", "findPieCustomers", "bakePie", "harvestRice", "delivery", "scavenge"]
	for (let i = 0; i < barsToRestart.length; i++)
		restartBar(barsToRestart[i])
	
	for (i = 0; i < science.length; i++)
		restartScience(science[i].id, i)
	
	function restartScience(id, i) {
		if (canStartBar(id))
			gameData[id + 'BarRunning'] = false
		else
			scienceMover(i)
	}
	
	if (gameData.bellowsBar > 0) {
		bellowsBar()
	}

	moveBar('delivery')
	moveBar('bakePie')
	moveBar('findPieCustomers')
	moveWell()

	if (gameData.workingBar <= 100 && (gameData.workingBar != 0 || gameData.employeeWorking > 0)) {
		workingBar()
	}

	if (gameData.autoCollectingBar !== 0) {
		autoCollectingBar()
	}
	
	updateValues()
}


function updateValues() {
	
	startCurrentTask(gameData.currentTask)	
	startCurrentTask(gameData.currentTask2)	
	
	if(gameData.currentSkill !== 'none')
		barStartGranularSkillBasic(gameData.currentSkill, false)
	
	addAesthetic()
	fixOverMaxedVariables()

	gameData.juicePricePrice = gameData.juicePriceCents + 1
	gameData.nourishmentPrice = Math.pow(10, gameData.nourishment);

	if (!gameData.showBarPercent) {
		update("barPercentButton", "Bar Percent Hidden")

		var x = document.getElementsByClassName("skillBar");
		for (i = 0; i < x.length; i++) {
			x[i].style.color = "rgba(0, 0, 0, 0)";
		}
		var x = document.getElementsByClassName("verticalBar");
		for (i = 0; i < x.length; i++) {
			x[i].style.color = "rgba(0, 0, 0, 0)";
		}
		var x = document.getElementsByClassName("skillBarColored");
		for (i = 0; i < x.length; i++) {
			x[i].style.color = "rgba(0, 0, 0, 0)";
		}
		var x = document.getElementsByClassName("smallContainerBar");
		for (i = 0; i < x.length; i++) {
			x[i].style.color = "rgba(0, 0, 0, 0)";
		}
	} else {
		update("barPercentButton", "Bar Percent Shown")
		var x = document.getElementsByClassName("skillBar");
		for (i = 0; i < x.length; i++) {
			x[i].style.color = accent0;
		}
		var x = document.getElementsByClassName("verticalBar");
		for (i = 0; i < x.length; i++) {
			x[i].style.color = accent0;
		}
		var x = document.getElementsByClassName("skillBarColored");
		for (i = 0; i < x.length; i++) {
			x[i].style.color = accent0;
		}
		var x = document.getElementsByClassName("smallContainerBar");
		for (i = 0; i < x.length; i++) {
			x[i].style.color = accent0;
		}
	}

	gameData.juiceSellReward = (gameData.nationalJuiceMarketing + 1) * Math.floor(gameData.juiceBulkAmountToggle * (1 + (gameData.juicePriceCents / 100)))
	gameData.limesInBaskets = Math.floor(gameData.baskets * (gameData.basketBar / 4))
	
	updateAreaNumbers()

	if (gameData.coins > 0) {
		gameData.showAchievements = 1
	}

	if (gameData.showAchievements) {
		tabs('achievementsButton', 'inline-block')
	}
	
	for (let i = 0; i < mainVariables.length; i++) {
		updateNumber(mainVariables[i].id)
		
		if (gameData.currentEnlightenmentHinderance == 'decimation' && gameData[mainVariables[i]] % 10 == 0)
			gameData[mainVariables[i].id] = 0
	}

	for (let i = 1; i < mainVariables.length; i++) {
		
		if (gameData[mainVariables[i].id] > 0)
			gameData[mainVariables[i].id + 'UnlockedVariable'] = true

		if (gameData[mainVariables[i].id + 'UnlockedVariable'])
			tabs('currencyDisplay(' + i + ')', 'inline-block')
		else
			hide('currencyDisplay(' + i + ')')
	}
	
	for (let i = 0; i < avs.length; i++) {
		for (let j = 0; j < avs[i].v.length; j++) {
			if(gameData[avs[i].area][avs[i].v[j].id])
				gameData[avs[i].area][avs[i].v[j].id + 'UnlockedVariable'] = true
		}
	}

	updateScience()

	if (gameData.nationalJuiceMarketing) {
		hide('juiceMarketing')
		showBasicDiv('upgradeJuiceMarketing')
	} else {
		hide('upgradeJuiceMarketing')
		showBasicDiv('juiceMarketing')
	}
	
	juicePricePrice = gameData.juicePricePrice + gameData.increaseJuicePricex10 * (gameData.juicePricePrice * 9 + 45)
	
	updateObj = [
		 "textForMegaCoinsInBank"            , gameData.megaCoinsInBank.toLocaleString() + " / " + gameData.megaCoinsInBankMax.toLocaleString() + " Mega Coins In Bank"
		,"textForRespect"                    , gameData.respect.toLocaleString() + " Respect"
		,"textForTimePlayed"                 , "Total Time Played: " + gameData.timePlayed.toLocaleString() + " Seconds"
		,"textForLakes"                      , gameData.limeDiseaseLakes.toLocaleString() + " Lakes"
		,"currentSpeedEmployee"              , "Current speed: " + gameData.employeeCurrentSpeed.toLocaleString() + " limes per minute."
		,"textForJuicePricePrice"            , "Price: " + juicePricePrice.toLocaleString() + " Coins"
		,"textForNourishmentPrice"           , "You Need: " + gameData.nourishmentPrice.toLocaleString() + " Limes"
		,"juicersAmount"                     , gameData.juicers.toLocaleString() + " / " + gameData.juicersMax.toLocaleString() + " Juicers"
		,"peelersAmount"                     , gameData.peelers.toLocaleString() + " / " + gameData.peelersMax.toLocaleString() + " Peelers"
		,"basketsAmount"                     , gameData.baskets.toLocaleString() + " / " + gameData.basketsMax.toLocaleString() + " Baskets"
		,"maxBaskets"                        , gameData.basketsMax.toLocaleString() + " baskets fit under the current tree."
		,"buyMegaCoinsTimes"                 , "Transfer times: " + gameData.buyMegaCoinsTimes + " / " + gameData.buyMegaCoinsTimesMax
		,"textForAutomaticallyCollectsLimes" , "Automatically gather at " + (gameData.shoes + 1) + " / second"
		,"textForBetterTraining"             , "Current maximum: " + (gameData.betterTraining + 10).toLocaleString() + "00%"
		,"textForCoinsMax"                   , "Current maximum: " + gameData.coinsMax.toLocaleString() + " Coins"
		,"numberOfCivilians"                 , "Number Of Civilians: " + gameData.civiliansTotal.toLocaleString()
		,"betterTrainingPrice"               , "Price: " + gameData.betterTraining.toLocaleString() + " Mega Coins"
		,"sellYourJuiceAmount"               , "You Will Deliver " + gameData.juiceBulkAmountToggle.toLocaleString() + " / " + gameData.juiceBulkAmountMax.toLocaleString() + " Juice"
		,"sellYourJuiceReward"               , "You Will Get " + gameData.juiceSellReward.toLocaleString() + " Coins"
		,"sellYourJuicePrice"                , "You Need " + gameData.deliveryPrice.toLocaleString() + " Coins For Delivery"
		,"upgradeMoreStoragePrice"           , "Price: " + upgradeMoreStoragePrice.toLocaleString() + " Mega Coins"
		,"betaCoinExhangeRate"               , "Exchange Rate: " + gameData.betaCoinsExchangeRate.toLocaleString() + " Alpha Coins -> 1 Beta Coin"
		,"betaCoinTotalPrice"                , "Total Price: " + (gameData.betaCoinsExchangeRate * (gameData.textForA2BBrokerAmountToggle * (gameData.basicA2BBrokerAmount - 1) + 1)).toLocaleString() + " Alpha Coins"
 		,"piePrice"                          , "Current Price: " + gameData.piePrice.toLocaleString() + " Pie Coins"
 
	]
	
	for (i = 0; i < updateObj.length / 2; i++) {
		update(updateObj[i * 2], updateObj[i * 2 + 1])
	}
	
	checkShowOrHideObj = [
	 'juicers'               , 'inventoryButton'
	,'employees'             , 'companyButton'
	,'hasGottenJuice'        , 'juiceMarket'
	,'upgradeMoreStorage'    , 'upgradeMoreLand'
	,'betterTraining'        , 'upgradeBetterTraining'
	,'bitterSpeedSkillLevel' , 'eatGoldenLimeProgress'
	,'bitterSpeedSkillLevel' , 'eatGoldenLime'
	]
	
	for (i = 0; i < checkShowOrHideObj.length / 2; i++) {
		checkShowSmart(checkShowOrHideObj[i * 2], checkShowOrHideObj[i * 2 + 1])
	}
	


	upgradeMoreStoragePrice = Math.pow(2, gameData.upgradeMoreStorage) * 50


	if (gameData.forestTreeType == 1)
		update("limesInBaskets", gameData.limesInBaskets.toLocaleString() + " Limes")
	else
		update("limesInBaskets", gameData.limesInBaskets.toLocaleString() + " Limes + " + gameData.goldenLimesInBaskets.toLocaleString() + " Golden Limes")


	updateBrokers()


	if (gameData.villageNumber > 1 || gameData.betterTraining > 0 || gameData.increaseJuicePricePermanance == 1)
		showBasicDiv("megaCoinUpgradesButton")
	else
		hide("megaCoinUpgradesButton")




	if (gameData.employeeWorking > 0) {
		update("workingEmployee", "Working time left: " + gameData.employeeWorking.toLocaleString() + " / 10 minutes.")
	} else {
		update("workingEmployee", "Employee is idle.")
	}
	if (!gameData.applicationReady)
		update("application", "Pin applications here")

	updateHiringArea()

	moveBar("teach")
	moveBar("working")
	moveBar("autoCollecting")
	moveBasket()


	for (let i = 0; i < skills.length; i++) {
		update(skills[i].id + "SkillLevel", gameData[skills[i].id + "SkillLevel"] + " / " + gameData[skills[i].id + "SkillLevelMax"])
	}

	update("rottenWisdom", 100 * gameData.rottenWisdomSkillLevel / gameData.rottenWisdomSkillLevelMax + "% Chance")
	update("keenEye", gameData.keenEyeSkillLevel * 5 + "% Chance")
	update("limebidextrous", gameData.limebidextrous + "% Chance")
	update("intelligence", Math.floor(((gameData.intelligenceSkillLevel * 2) / gameData.intelligenceSkillLevelMax) * 100) + "% Faster")
	update("knifebidextrous", gameData.knifebidextrous * 2.5 + "% Chance")



	update("eat", gameData.eat + " / 100")

	if (gameData.lookAround >= 1) {
		divVisibility("navigateButtons", "visible")
	}

	if (gameData.limeTypeToJuice == 0)
		update("juicerInfo", gameData.limesPerJuice + " Limes -> 1 Juice")
	else
		update("juicerInfo", gameData.peeledLimesPerJuice + " Peeled Limes -> 1 Juice")


	if (gameData.deliveryTypeToggle == 2 && gameData.fasterTransport > 0)
		gameData.juiceBulkAmountMax = 500
	else if (gameData.deliveryTypeToggle == 3)
		gameData.juiceBulkAmountMax = 2000
	else
		gameData.juiceBulkAmountMax = 100

	if (gameData.pinUnlock) {
		var x = document.getElementsByClassName("pinButton");
		for (i = 0; i < x.length; i++) {
			x[i].style.display = "inline-block";
		}
	}




	if (gameData.bigGloves == 0) {
		tabs("buyBigGloves", "block")
		hide("upgradeBigGloves")
		gameData.limesPerClick = 1 + gameData.difficulty * 5
	} else {
		hide("buyBigGloves")
		tabs("upgradeBigGloves", "block")
		gameData.limesPerClick = 2 + gameData.difficulty * 5
	}


	if (gameData.coinsMax > 1e6)
		showBasicDiv("upgradeWallet")
	else
		hide("upgradeWallet")

	if (gameData.forestWell)
	{
		tabs("forestWellDiv", 'inline-block')
	}
	else
	{
		hide("forestWellDiv")
	}

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
					tabs(id, "block")
				else
					tabs(id, "inline-block")
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

	if (gameData.respectMilestone50)
		showBasicDiv("patrician")
	else
		hide("patrician")

	if (gameData.increaseJuicePricePermanance < 1) {
		tabs("increaseJuicePricePermanance", "inline-block")
		hide("upgradeJuicePricePermanance")
	} else {
		hide("increaseJuicePricePermanance")
		showBasicDiv("upgradeJuicePricePermanance")
	}

	if (gameData.ambidextrousSkillLevel == gameData.ambidextrousSkillLevelMax)
		tabs("stopActionsButton", "inline-block")
	else
		hide("stopActionsButton")


	if (gameData.manuscripts) {
		hide("buyManuscriptsDiv")
		showBasicDiv("upgradeManuscripts")
	} else {
		hide("upgradeManuscripts")
		showBasicDiv("buyManuscriptsDiv")
	}

	if (gameData.baskets > 0 && !gameData.basketScarecrow)
		showBasicDiv("offlineBasket")
	else
		hide("offlineBasket")

	if (gameData.creditScore2) {
		hide("increaseCreditScore2")
		if (!gameData.creditScore3)
			showBasicDiv("increaseCreditScore3")
		else
			hide("increaseCreditScore3")
	} else {
		tabs("increaseCreditScore2", "inline-block")
		hide("increaseCreditScore3")
	}





	if (!gameData.multitasking && gameData.learnANewSkill > 0)
		showBasicDiv("buySkillToggler")
	else
		hide("buySkillToggler")

	if (gameData.diseaseControlFinished == 1) {
		hide("diseaseControlStart")
		tabs("startDiseaseTask", "block")
	} else {
		tabs("diseaseControlStart", "block")
		hide("startDiseaseTask")

	}

	if (gameData.megaCoinsInBankMax > 20) {
		hide("increaseCreditScore")
		tabs("upgradeCreditScore", "block")
	} else {
		tabs("increaseCreditScore", "block")
		hide("upgradeCreditScore")
	}

	if (gameData.nutritionists > 0) {
		hide("hireANutritionist")
		tabs("upgradeNutritionist", "block")
	} else {
		tabs("hireANutritionist", "block")
		hide("upgradeNutritionist")
	}

	if (gameData.fasterTransport == 0)
		update("deliveryToggleStandardButton", "Standard Delivery")
	else
		update("deliveryToggleStandardButton", "Hyper Delivery")

	if (gameData.shiftClickOption) {
		update("shiftClickOption", "Don't Toggle: Shift Click")
		tabs("toggleActionsButton", "none")
	} else {
		update("shiftClickOption", "Don't Toggle: Button")
		if(gameData.learnANewSkill > -2)
			tabs("toggleActionsButton", "inline-block")
	}

	if (gameData.deliveryManager == 0) {
		hide("sellMaxJuiceButton")
		tabs("decreaseJuiceSoldButton", "inline-block")
		tabs("increaseJuiceSoldButton", "inline-block")
	} else {
		tabs("sellMaxJuiceButton", "inline-block")
		hide("decreaseJuiceSoldButton")
		hide("increaseJuiceSoldButton")
	}


	if (gameData.respectMilestone10000) {
		showBasicDiv('upgradeMoreStorage')
		if (!gameData.bachelorsDegreeFinance)
			showBasicDiv('earnBachelorFinance')
		else
			hide('earnBachelorFinance')
		checkHideOrShow(gameData.rottenActualWisdom, "rottenActualWisdom")
		if (!gameData.creditScore2)
			showBasicDiv('increaseCreditScore2')
	} else {
		hide('upgradeMoreStorage')
		hide('earnBachelorFinance')
		hide('increaseCreditScore2')
		hide('buyABiggerWallet')
	}
	
	if (gameData.maps > 0) {
		tabs("marketMainButtonsDiv", "inline-block")
		tabs("marketStore", "inline-block")
		document.getElementById("marketMainButtonsDiv").style.width = "360px"
	}

	if (gameData.maps > 1) {
		tabs("hiringAreaButton", "inline-block")
		tabs("marketStore", "inline-block")
	}
	
	
	if(gameData.maps > 3)
	{showBasicDiv("tasksButton")
	}

	if (gameData.maps > 2 || gameData.villageNumber > 1) {
		tabs("travelButton", "inline-block")
	}
	
	if (gameData.autoCurrencyConversionBuy)
		hide("autoCurrencyConversion")
	else if (gameData.maps == 4)
		showBasicDiv("autoCurrencyConversion")


	if (gameData.maps !== 4)
		hide("buyMapDiv5")
	else
		showBasicDiv("buyMapDiv5")
	
	if (gameData.maps > 2) {
		tabs("travellingArea", "block")
		showBasicDiv("increaseJuicePrice")
		if (gameData.fasterTransport == 0)
			showBasicDiv("fasterTransportDiv")
		else
			hide("fasterTransportDiv")
	} else {
		hide("buyFourthMapDiv")
		hide("travellingArea")
		hide("fasterTransportDiv")
	}

	if (gameData.maps > 3) {
		update("specialAchievement2", "Buy a Giant Map after only sending one delivery in that town")

		if (gameData.respectBillboard == 0)
			tabs("respectBillboard", "inline-block")
		else
			hide("respectBillboard")
	}
	
	if (gameData.maps > 4) {
		showBasicDiv('earnBetaCoins')
		showBasicDiv('buyPie')
		if (gameData.basicAlphaToBetaBroker == 0) {
			showBasicDiv('basicAlphaToBetaBroker')
			hide('basicAlphaToBetaBrokerRule')
		} else {
			hide('basicAlphaToBetaBroker')
			showBasicDiv('basicAlphaToBetaBrokerRule')
		}
	}

	if (gameData.maps >= 2 && gameData.bulkBuyUnlock == 0) {
		tabs("bulkBuyUnlockDiv", "block")
	} else if (gameData.maps < 2 && gameData.bulkBuyUnlock) {
		hide("bulkBuyUnlockDiv")
	} else if (gameData.maps >= 2 && gameData.bulkBuyUnlock) {
		hide("bulkBuyUnlockDiv")

		if (gameData.bulkBuyUnlock2) {
			hide("bulkBuyUnlock2Div")
		} else {
			showBasicDiv("bulkBuyUnlock2Div")
		}


	} else if (gameData.bulkBuyUnlock == 0 && gameData.maps < 2) {
		hide("bulkBuyUnlockDiv")
	}




	if (gameData.maps >= 2 && !gameData.storageUnlock) {
		tabs("storageUnlockDiv", "block")
	} else if (gameData.maps < 2) {
		hide("storageUnlockDiv")
	} else if (gameData.maps >= 2 && gameData.storageUnlock) {
		hide("storageUnlockDiv")
	}
	
	if (gameData.fork == 0 && gameData.learnANewSkill > -2)
		showBasicDiv('buyAForkDiv')
	else
		hide('buyAForkDiv')


	if (gameData.shoes == 0 && gameData.learnANewSkill > -1)
		showBasicDiv('buyShoesDiv')
	else
		hide('buyShoesDiv')

	if (gameData.hasAdvertised && !gameData.surveillanceCamera)
		showBasicDiv("offlineEmployee")
	else
		hide("offlineEmployee")


	if (gameData.respectMilestone10000) {
		update("specialAchievement1", "Get a 5x multplier with Buy More Land purchased")
	}



	if (gameData.advertisingLevel1 == 0) {
		hide("advertisingMethods")

		if (gameData.hasAdvertised == 1) {
			showBasicDiv("researchBetterAdvertising")
		} else {
			hide("researchBetterAdvertising")

		}

	} else {
		tabs("advertisingMethods", "block")
		hide("researchBetterAdvertising")

	}


	if (gameData.bulkBuyUnlock == 0) {
		hide("peelersBulkButton")
		hide("basketsBulkButton")
		hide("juicersBulkButton")
	} else {
		tabs("peelersBulkButton", "inline-block")
		tabs("basketsBulkButton", "inline-block")
		tabs("juicersBulkButton", "inline-block")
	}

	if (gameData.bulkBuyUnlock2) {
		update("peelersBulkButton", "x100")
		update("basketsBulkButton", "x100")
		update("juicersBulkButton", "x100")
	}


	checkHide(gameData.advertisingLevel2, "advertisingLeaflets")
	checkHide(gameData.advertisingLevel3, "advertisingBillboard")

	checkHide(gameData.changeResearchersBy10Unlock, "changeResearchersBy10Unlock")
	checkShow(gameData.changeResearchersBy10Unlock, "upgradeChangeResearchersBy10")
	checkShow(gameData.rottenActualWisdom, "upgradeRottenActualWisdomUnlock")

	checkHide(gameData.forestTree2, "buyANewTree")
	checkShow(gameData.forestTree2, "treeTypeDiv")

	updatePieStuff()


	if (gameData.lookAround >= 2) {
		tabs("sellYourLimesDiv", "block")
	}

	if (gameData.lookAround >= 3) {
		if (gameData.hideMaxedPurchases == 1 && gameData.juicers == gameData.juicersMax)
			hide("buyAJuicerDiv")
		else
			showBasicDiv("buyAJuicerDiv")

		if (gameData.hideMaxedPurchases == 1 && gameData.baskets == gameData.basketsMax)
			hide("buyABasketDiv")
		else
			showBasicDiv("buyABasketDiv")
		
		if (gameData.maps > 0)
			hide("buyAMapDiv")
		else
			showBasicDiv("buyAMapDiv")
		
		if (gameData.scavengeUnlocked)
			hide("scavengingUnlock")
		else
			showBasicDiv("scavengingUnlock")
	}

	for (i = 1; i <= 3; i++) {
		if (gameData.tomes == i)
			showBasicDiv("tomeDiv" + (i + 1))
		else
			hide("tomeDiv" + (i + 1))
	}

	
	if (gameData.tomes > 3)
		showBasicDiv("goldenBarDiv")


	if (gameData.autoCollectingBar == (gameData.nourishment + 1) * 100 || gameData.autoCollectingBar == 0) {
		gameData.isAutoCollecting = 0
	} else {
		gameData.isAutoCollecting = 1
	}

	if (gameData.villageNumber > 1) {
		tabs("marketMainButtonsDiv", "inline-block")
	}

	if (gameData.peeledLimes >= 1) {
		divVisibility("textForPeeledLimes", "inline-block")
		tabs("juiceLimesToggleButton", "inline-block")
		tabs("juicePeeledLimesToggleButton", "inline-block")
	}


	if (gameData.knife >= 1) {
		showBasicDiv("knifeDiv")
	}

	checkHide(gameData.silkRobe, "buyARobe")
	checkHide(gameData.unlockDiseaseAreaSwamp, "unlockDiseaseAreaSwamp")



	
	

	if (gameData.juicers >= 2) {
		divVisibility("makeMaxJuiceButton", "visible")
	}




	if (gameData.peelers >= 2) {
		tabs("peelerPeelMaxButton", "inline-block")
	}


	checkShow(gameData.peelers, "peelerDiv")
	checkHide(gameData.lightRobe, "lightRobe")
	checkHide(gameData.skillTrainer, "skillTrainer")





	if (gameData.advertisingLevel2 && gameData.advertisingLevel3) {
		hide("researchBetterAdvertising")
		hide("advertisingBillboard")
		hide("advertisingLeaflets")
	}



	for (i = 1; i <= numberOfBasicAchievements; i++) {

		if (gameData.limes >= Math.pow(10, i)) {
			gameData['achievement' + i] = 1
		}
	}

	for (i = 1; i <= numberOfSpecialAchievements; i++) {
		
		/*
		if (gameData['specialAchievement' + i]) {
			showBasicDiv('specialAchievement' + i)
		}
		*/
		
		if (gameData['specialAchievement' + 1]) {
			showBasicDiv('specialAchievement' + 1)
		}

	}


	if (gameData.learnANewSkill - 3 == gameData.tomes) {
		document.getElementById('learnANewSkillButton').style.backgroundColor = 'darkgray';
		gameData.learnANewSkillBar = 100;
	} else
		document.getElementById('learnANewSkillButton').style.backgroundColor = '#DEAD85';




	if (gameData.learnANewSkill >= -1) {
		showBasicDiv("eatFoodDiv")
		showOrHideSkill("keenEye")
	}

	if (gameData.learnANewSkill >= 0) {
		showBasicDiv("autoCollectingDiv")
		showBasicDiv("nourishment")
		tabs("skillInfoButton", "inline-block")
	}

	if (gameData.learnANewSkill >= 5)
		showBasicDiv("motivateEmployeeButton")

	if (gameData.forestTreeType == 2)
		showBasicDiv("goldenLimesInfo")
	else
		hide("goldenLimesInfo")


	for (let i = 0; i < skills.length; i++) {
		if (gameData.learnANewSkill >= i) {
			showOrHideSkill(skills[i].id)
		}
	}
	
	if (gameData.endScreen == 0) {
		hide('endScreen')
		if (gameData.soulArea == 'start')
		{
			showBasicDiv('sublimeMain')
			hide('wellField')
			hide('soulAreaSerf')
		}
		else if (gameData.soulArea == 'wellField')
		{
			showBasicDiv('wellField')
			hide('sublimeMain')
			hide('soulAreaSerf')
		}
		else
		{
			hide('wellField')
			hide('sublimeMain')
			for (let i = 0; i < avs.length; i++) {
				hide('soulArea' + avs[i].name)
			}
			showBasicDiv('soulArea' + gameData.soulArea)
		}

	} else {
		hide('sublimeMain')
		showBasicDiv('endScreen')
	}

	update("endStats", "Total Time Played: " + gameData.timePlayed.toLocaleString() + " Seconds")

	if(gameData.trainTransport)
		tabs('deliveryToggleTrainButton', 'inline-block')
	
	update("trueLimes", "True Limes: " + gameData.trueLimes.toLocaleString())
	
	if(gameData.pieCoinsInWell == 200)
		tabs('enterTheWell', 'inline-block')
	else
		hide('enterTheWell')

	if(gameData.forestWell)
		update("textForLimesDiv", "'Limes'")
	
	updateSerfStuff()

	if(gameData.baskets)
		show('forestTreesDiv', 'inline')
	else
		hide('forestTreesDiv')
	
	if(gameData.scavengeUnlocked)
		show('forestScavengeDiv', 'inline')
	else
		hide('forestScavengeDiv')

	if(gameData.baskets || gameData.scavengeUnlocked)
		showBasicDiv('forestButton')
	else
		hide('forestButton')
	
	updateScavengeStuff()
	
	update('maxCoinsTooltip', ' / ' + gameData.coinsMax.toLocaleString())
	update('maxAlphaCoinsTooltip', ' / 100,000')
	
	updateEnlightenmentStuff()
	
	if (gameData.diseaseControlTaskShown) {
		hide('allDiseaseControlTask')
		update('allDiseaseControlTaskVis', 'Show Disease Control Task')
	}
	else {
		show('allDiseaseControlTask')
		update('allDiseaseControlTaskVis', 'Hide Disease Control Task')
	}

	updateFieldStuff()
	update("pieMerchantPieCoinPrice"     , "Pie Coin Wages: "    + gameData.pieMerchantPieCoinPrice.toLocaleString() + ".")
	update("pieMerchantBetaCoinPrice"    , "Beta Coin Wages: "   + gameData.pieMerchantBetaCoinPrice.toLocaleString() + ".")
	update("pieMerchantMaxPay"           , "Max Wage Advances: " + gameData.pieMerchantMaxPay.toLocaleString() + ".")
	update("pieMerchantCharm"            , "Charm: "             + gameData.pieMerchantCharm.toLocaleString() + ".")
	update("speedEmployee", "Speed: " + gameData.employeeSpeed.toLocaleString() + "% of what I'm taught.")
	update("wageEmployee", "Wages: " + gameData.employeeWage.toLocaleString() + " Coins per minute.")
	update("hungerEmployee", "Hunger: " + gameData.employeeHunger.toLocaleString() + " Limes per second.")
	
	if (gameData.limeDiseaseLakes < 10)
		benevolenceRespectIncreaseText = 0
	else
		benevolenceRespectIncreaseText = (Math.pow(2, gameData.limeDiseaseLakes - 10)) * gameData.benevolence
	
	update("benevolenceRespectIncrease", "Respect increase:  " + benevolenceRespectIncreaseText.toLocaleString())
	checkShowOrHide(gameData.benevolence, "benevolence")
	
	if (!gameData.unlockBenevolence && gameData.respectMilestone1000)
		showBasicDiv("unlockBenevolence")
	else
		hide("unlockBenevolence")
	
	for (let i = 0; i < divs.length; i++) {
		for (let k = 0; k < divs[i].elements.length; k++) {
			elem = divs[i].elements[k]
			if (elem.format == 'basicUnlock') {
				if (elem.show != undefined) {
					if (elem.show() && gameData[elem.buy] == 0)
						show(elem.buy + 'UnlockDiv')
					else
						hide(elem.buy + 'UnlockDiv')
				}
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
}