function updateAfterLoad() {
    restartBar("learnANewSkill")
    restartBar("rottenWisdom")
    restartBar("limebidextrous")
    restartBar("knifebidextrous")
    restartBar("intelligence")
    restartBar("juicer")
    restartBar("peeler")
    restartBar("advertise")
    restartBar("working")
    restartBar("eat")
    restartBar("keenEye")
    restartBar("teach")
    restartBar("watertight")
    restartBar("surveying")
    restartBar("benevolence")
    restartBar("coinsToAlpha")




	
	normalizeButtons()
	pinButton()

    if (gameData.autoCollectingBar !== 0) {
        autoCollectingBar()
    }



    if (gameData.deliveryBar <= 99 && gameData.deliveryBar != 0) {
        sellYourJuiceBar()
    }

    updateValues()
}


function updateValues() {




    addAesthetic()

    gameData.juicePricePrice = gameData.juicePriceCents + 1

    gameData.nourishmentPrice = Math.pow(10, gameData.nourishment);


    if (gameData.knifebidextrousSkillLevel > gameData.knifebidextrousSkillLevelMax) {
        gameData.knifebidextrousSkillLevel = gameData.knifebidextrousSkillLevelMax
    }




    if (gameData.juiceBulkAmountToggle > 100 && gameData.deliveryTypeToggle < 2) {
        gameData.juiceBulkAmountToggle = 100
    }

    if (gameData.juiceBulkAmountToggle > 500) {
        gameData.juiceBulkAmountToggle = 500
    }


    if (gameData.coins > 1e6) {
        gameData.coins = 1e6
    }

    if (gameData.deliveryBar > 99.9999) {
        gameData.deliveryBar = 100
    }

    if (gameData.limes < 0) {
        gameData.limes = 0
    }

    if (gameData.respect < 0) {
        gameData.respect = 0
    }

    if (gameData.learnANewSkillBar > 100) {
        gameData.learnANewSkillBar = 100
    }

    if (gameData.employeeWorking > gameData.employeeWorkingMax) {
        gameData.employeeWorking = gameData.employeeWorkingMax
    }

    overMaximum("baskets")
    overMaximum("juicers")
    overMaximum("peelers")
    overMaximum("intelligenceSkillLevel")

    switch (gameData.showBarPercent) {
        case 0:
            update("barPercentButton", "Bar Percent Hidden")

            var x = document.getElementsByClassName("skillBar");
            for (i = 0; i < x.length; i++) {
                x[i].style.backgroundColor = accent3;
                x[i].style.padding = "0px 0px 0px 0px";
                x[i].style.color = "rgba(0, 0, 0, 0)";
            }
            var x = document.getElementsByClassName("verticalBar");
            for (i = 0; i < x.length; i++) {
                x[i].style.backgroundColor = accent3;
                x[i].style.padding = "0px 0px 0px 0px";
                x[i].style.color = "rgba(0, 0, 0, 0)";
            }


            break;
        case 1:
            update("barPercentButton", "Bar Percent Shown")
            var x = document.getElementsByClassName("skillBar");
            for (i = 0; i < x.length; i++) {
                x[i].style.backgroundColor = accent3;
                x[i].style.padding = "0px 0px 0px 0px";
                x[i].style.color = accent0;
            }
            var x = document.getElementsByClassName("verticalBar");
            for (i = 0; i < x.length; i++) {
                x[i].style.backgroundColor = accent3;
                x[i].style.padding = "0px 0px 0px 0px";
                x[i].style.color = accent0;
            }


    }

    gameData.juiceSellReward = Math.floor(gameData.juiceBulkAmountToggle * (1 + (gameData.juicePriceCents / 100)))


    gameData.limesInBaskets = Math.floor(gameData.baskets * (gameData.basketBar / 4))
	
    updateNumber("limes")
    updateNumber("rottenLimes")
    updateNumber("coins")
    updateNumber("juice")
    updateNumber("megaCoins")
    updateNumber("peeledLimes")


	researchersAvailable = gameData.researchers - gameData.watertightResearchers - gameData.surveyingResearchers - gameData.benevolenceResearchers
	
    update("watertightText", "Currently: " + gameData.peeledLimesPerJuice + " Peeled Limes -> 1 Juice")
    update("surveyingText", "Currently: " + gameData.numberOfTiles + " / 20 Tiles")
    update("benevolenceText", "Currently: Level " + gameData.benevolence + " / 3")


    update("textForResearchers", researchersAvailable + " Available Researchers")
	
    update("textForWatertightResearchers", gameData.watertightResearchers + " Researchers")
    update("textForSurveyingResearchers", gameData.surveyingResearchers + " Researchers")
    update("textForBenevolenceResearchers", gameData.benevolenceResearchers + " Researchers")


	if(gameData.numberOfTiles >= 17)
	{
		tabs('mapTile-4-0', 'inline-block')
	}
	if(gameData.numberOfTiles >= 18)
	{
		tabs('mapTile-4-1', 'inline-block')
	}
	if(gameData.numberOfTiles >= 19)
	{
		tabs('mapTile-4-2', 'inline-block')
	}
	if(gameData.numberOfTiles >= 20)
	{
		tabs('mapTile-4-3', 'inline-block')
	}
	
	if (gameData.limeDiseaseLakes < 10)
		benevolenceRespectIncrease = 0
	else 
		benevolenceRespectIncrease = Math.pow(gameData.benevolence, gameData.limeDiseaseLakes - 10)
		
	watertightResearchTime = Math.floor((2000 * Math.pow(10, 5 - gameData.peeledLimesPerJuice))/ gameData.watertightResearchers)
	surveyingResearchTime = Math.floor(200 * (Math.pow(2, gameData.numberOfTiles - 15)) / gameData.surveyingResearchers)
	benevolenceResearchTime = Math.floor(200 * (Math.pow(2, gameData.benevolence * 2)) / gameData.benevolenceResearchers)
	
    update("benevolenceRespectIncrease", "Respect increase:  " + benevolenceRespectIncrease.toLocaleString())

	
	timeToShowScience('watertight')
	timeToShowScience('surveying')
	timeToShowScience('benevolence')

	if (gameData.benevolence > 0)
	{
		showBasicDiv("benevolence")
	}
	else
	{
		hide("benevolence")
	}
	
	if (gameData.hideRottenLimes == 0)
	{
		showBasicDiv("rottenLimesHide")
	}
	else
	{
		hide("rottenLimesHide")
	}
	
	if (!gameData.unlockBenevolence && gameData.respectMilestone1000)
	{
		showBasicDiv("unlockBenevolence")	
	}
	else
	{
		hide("unlockBenevolence")
	}
	
	if (gameData.unlockBenevolence)
	{
		showBasicDiv("benevolenceDiv")	
	}
	else
	{
		hide("benevolenceDiv")
	}
	
	if (gameData.rottenWisdomSkillLevel == gameData.rottenWisdomSkillLevelMax)
	{
		showBasicDiv("hideRottenLimesButton")
	}
	else
	{
		hide("hideRottenLimesButton")
	}
	
    update("textForMegaCoinsInBank", gameData.megaCoinsInBank.toLocaleString() + " / " + gameData.megaCoinsInBankMax.toLocaleString() + " Mega Coins In Bank")

    update("juicersAmount", gameData.juicers.toLocaleString() + " / " + gameData.juicersMax.toLocaleString() + " Juicers")
    update("peelersAmount", gameData.peelers.toLocaleString() + " / " + gameData.peelersMax.toLocaleString() + " Peelers")

    update("basketsAmount", gameData.baskets.toLocaleString() + " / " + gameData.basketsMax.toLocaleString() + " Baskets")
    update("maxBaskets", gameData.basketsMax.toLocaleString() + " baskets fit under the current tree.")

    update("limesInBaskets", gameData.limesInBaskets.toLocaleString() + " Limes")

    update("textForRespect", gameData.respect.toLocaleString() + " Respect")
    update("textForAlphaCoins", gameData.alphaCoins.toLocaleString() + " Alpha Coins")
    update("textForAlphaCoins2", gameData.alphaCoins.toLocaleString() + " Alpha Coins")


    update("textForLakes", gameData.limeDiseaseLakes.toLocaleString() + " Lakes")

    update("currentSpeedEmployee", "Current speed: " + gameData.employeeCurrentSpeed.toLocaleString() + " limes per minute.")

    update("textForJuicePricePrice", "Price: " + gameData.juicePricePrice.toLocaleString() + " Coins")

    update("textForNourishmentPrice", "You Need: " + gameData.nourishmentPrice.toLocaleString() + " Limes")

    update("textForBrokerApplicantSpeed", "Currently " + gameData.minBrokerApplicantSpeed.toLocaleString() + " - " + gameData.maxBrokerApplicantSpeed.toLocaleString() + " Seconds")
    update("textForBrokerApplicantAmount", "Currently " + gameData.minBrokerApplicantAmount.toLocaleString() + " - " + gameData.maxBrokerApplicantAmount.toLocaleString() + " Coins")



	var minBrokerApplicantFee = gameData.minBrokerApplicantFee * 1000
	var maxBrokerApplicantFee = gameData.maxBrokerApplicantFee * 1000

    update("textForBrokerApplicantFee", "Currently " + minBrokerApplicantFee.toLocaleString() + " - " + maxBrokerApplicantFee.toLocaleString() + " Coins")





    update("brokerApplicantSpeedPrice", "Price: " + gameData.brokerApplicantSpeedPrice.toLocaleString() + " Alpha Coins")
    update("brokerApplicantFeePrice", "Price: " + gameData.brokerApplicantFeePrice.toLocaleString() + " Alpha Coins")
    update("brokerApplicantAmountPrice", "Price: " + gameData.brokerApplicantAmountPrice.toLocaleString() + " Alpha Coins")



    if (gameData.employeeWorking > 0) {
        update("workingEmployee", "Working time left: " + gameData.employeeWorking.toLocaleString() + " / 10 minutes.")
    } else {
        update("workingEmployee", "Employee is idle.")
    }
    if (gameData.applicationReady == 1) {
        update("application",
            "<br>" +
            "Skills: Can Collect Limes." + "<br>" +
            "Speed: " + gameData.applicantSpeed.toLocaleString() + "% Of What I'm Taught." + "<br>" +
            "Price: " + gameData.applicantPrice.toLocaleString() + " Coins." + "<br>" +
            "Wages: " + gameData.applicantWage.toLocaleString() + " Coins Per Minute." + "<br>" +
            "Hunger: " + gameData.applicantHunger.toLocaleString() + " Limes Per Second." + "<br>" +
            "<br>"
        )


        showBasicDiv("applicationInfo")
    } else {
        update("application", "Pin applications here")
        hide("applicationInfo")
    }
	
	
    if (gameData.applicationReady == 1) {
		
		if(gameData.applicationType == 0)
		{
			update("application",
				"<br>" +
				"Skills: Can Collect Limes." + "<br>" +
				"Speed: " + gameData.applicantSpeed.toLocaleString() + "% Of What I'm Taught." + "<br>" +
				"Price: " + gameData.applicantPrice.toLocaleString() + " Coins." + "<br>" +
				"Wages: " + gameData.applicantWage.toLocaleString() + " Coins Per Minute." + "<br>" +
				"Hunger: " + gameData.applicantHunger.toLocaleString() + " Limes Per Second." + "<br>" +
				"<br>"
			)
			showBasicDiv("applicationInfo")
		}
		else{

			update("application",
				"<br>" +
				"Speed: " + gameData.currencyApplicantSpeed.toLocaleString() + " Seconds." + "<br>" +
				"Transfer Fee: " + gameData.currencyApplicantFee.toLocaleString() + " Coins." + "<br>" +
				"Alpha Coins Per Transfer: " + gameData.currencyApplicantTransferAmount.toLocaleString() + "." + "<br>" +
				"Hire Price: " + gameData.currencyApplicantPrice.toLocaleString() + " Coins." + "<br>" +
		



				"<br>"
			)

		}
		
		
		
		
    } else {
        update("application", "Pin applications here")
        hide("applicationInfo")
    }
	
    update("currencyBrokerTransferAmount", "Speed: " + gameData.currencyBrokerSpeed.toLocaleString() + " Seconds.")
    update("currencyBrokerFee", "Transfer Fee: " + gameData.currencyBrokerFee.toLocaleString() + ".")
    update("currencyBrokerSpeed", "Alpha Coins Per Transfer: " + gameData.currencyBrokerTransferAmount.toLocaleString() + ".")


	
	
    update("textForAutomaticallyCollectsLimes", "Automatically collects limes at " + (gameData.shoes + 1) + "/s")


    update("textForBetterTraining", "Current maximum: " + (gameData.betterTraining + 10).toLocaleString() + "00%")


    update("speedEmployee", "Speed: " + gameData.employeeSpeed.toLocaleString() + "% of what I'm taught.")
    update("wageEmployee", "Wages: " + gameData.employeeWage.toLocaleString() + " Coins per minute.")
    update("hungerEmployee", "Hunger: " + gameData.employeeHunger.toLocaleString() + " Limes per second.")


    update("textForCurrentEmployees", "Current Employees: " + gameData.employees.toLocaleString() + " / " + gameData.maxEmployees.toLocaleString())


    update("numberOfCivilians", "Number Of Civilians: " + gameData.civiliansTotal.toLocaleString())

    update("betterTrainingPrice", "Price: " + gameData.betterTraining.toLocaleString() + " Mega Coins")
	
    update("alphaCoinExhangeRate", "Exchange Rate: " + gameData.alphaCoinsExchangeRate.toLocaleString() + " Coins -> 1 Alpha Coin")




    update("sellYourJuiceAmount", "You Will Deliver " + gameData.juiceBulkAmountToggle.toLocaleString() + " / " + gameData.juiceBulkAmountMax.toLocaleString() + " Juice")


    update("sellYourJuiceReward", "You Will Get " + gameData.juiceSellReward.toLocaleString() + " Coins")
	
    update("upgradeMoreStoragePrice", "Price: " + gameData.upgradeMoreStoragePrice.toLocaleString() + " Mega Coins")
	
	if(gameData.doesHaveCurrencyBroker){
		update("currencyConvertAlphaCoinsButton", "Convert Coins to " + gameData.currencyBrokerTransferAmount.toLocaleString() + " Alpha Coins")
		update("alphaCoinTransactionFee", "Transfer Fee: " + gameData.currencyBrokerFee.toLocaleString() + " Coins")

	}
	
	else{
		update("currencyConvertAlphaCoinsButton", "Convert Coins to 1 Alpha Coin")
		update("alphaCoinTransactionFee", "Transfer Fee: 10,000 Coins")

	}




    update("sellYourJuicePrice", "You Need " + gameData.deliveryPrice.toLocaleString() + " Coins For Delivery")

    checkShowNonVariable(gameData.juicers, "inventoryButton")
    checkShowNonVariable(gameData.employees, "companyButton")
    checkShowNonVariable(gameData.baskets, "forestButton")
    checkShowNonVariable(gameData.hasGottenJuice, "juiceMarket")


    moveBar("teach")
    moveBar("working")
    moveBasket()
    moveAutoCollecting()

    moveBar("rottenWisdom")
    update("rottenWisdom", gameData.rottenWisdom + "% Chance")
    update("rottenWisdomSkillLevel", gameData.rottenWisdomSkillLevel + " / " + gameData.rottenWisdomSkillLevelMax)
	
    moveBar("keenEye")
    update("keenEye", gameData.keenEyeSkillLevel * 5 + "% Chance")
    update("keenEyeSkillLevel", gameData.keenEyeSkillLevel + " / " + gameData.keenEyeSkillLevelMax)

    moveBar("limebidextrous")
    update("limebidextrous", gameData.limebidextrous + "% Chance")
    update("limebidextrousSkillLevel", gameData.limebidextrousSkillLevel + " / " + gameData.limebidextrousSkillLevelMax)

    moveBar("intelligence")
    update("intelligence", Math.floor(((gameData.intelligenceSkillLevel * 2)/ gameData.intelligenceSkillLevelMax) * 100) + "% Faster")
    update("intelligenceSkillLevel", gameData.intelligenceSkillLevel + " / " + gameData.intelligenceSkillLevelMax)

    moveBar("knifebidextrous")
    update("knifebidextrous", gameData.knifebidextrous * 2.5 + "% Chance")
    update("knifebidextrousSkillLevel", gameData.knifebidextrousSkillLevel + " / " + gameData.knifebidextrousSkillLevelMax)

    update("eat", gameData.eat + " / 100")


    if (gameData.lookAround >= 1) {
        divVisibility("navigateButtons", "visible")
    }

    if (gameData.limeTypeToJuice == 0) {
        update("juicerInfo", gameData.limesPerJuice + " Limes -> 1 Juice")
    } else	{
        update("juicerInfo", gameData.peeledLimesPerJuice + " Peeled Limes -> 1 Juice")
    }


    if (gameData.deliveryTypeToggle == 2 && gameData.fasterTransport > 0) {
        gameData.juiceBulkAmountMax = 500
    } else {
        gameData.juiceBulkAmountMax = 100
    }
	
    if (gameData.pinUnlock == 1) {
        hide("pinUnlockDiv")
		var x = document.getElementsByClassName("pinButton");
		for (i = 0; i < x.length; i++) {
			x[i].style.display = "inline-block";
		}

    } else {
        showBasicDiv("pinUnlockDiv")
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

    if (gameData.betterTraining > 0) {
        showBasicDiv("upgradeBetterTraining")
    } else {
        hide("upgradeBetterTraining")
    }

    if (gameData.respectMilestone10) {
        tabs("autoStartTaskButton", "inline-block")
    } else {
        hide("autoStartTaskButton")
	}
	
    if (gameData.respectMilestone25) {
        tabs("autoStartSimulationButton", "inline-block")
    } else {
        hide("autoStartSimulationButton")
	}
	
    if (gameData.respectMilestone100) {
        tabs("autoCheckSimulationButton", "inline-block")
    } else {
        hide("autoCheckSimulationButton")
	}
	
    if (gameData.increaseJuicePricePermanance < 1) {
        tabs("increaseJuicePricePermanance", "inline-block")
		hide("upgradeJuicePricePermanance")

		
    } else {
        hide("increaseJuicePricePermanance")
		showBasicDiv("upgradeJuicePricePermanance")
	}
	
	
	
    if (gameData.respectMilestone500) {
        tabs("autoPlaceACivilianButton", "inline-block")
    } else {
        hide("autoPlaceACivilianButton")
	}
	
    if (gameData.manuscripts == 0) {
        showBasicDiv("buyManuscriptsDiv")
    } else {
        hide("buyManuscriptsDiv")	}
	
	
    if (gameData.respectMilestone1000) {
        tabs("scienceButton", "inline-block")

		
    } else {
        hide("scienceButton")

		
	}
	
    if (gameData.doesHaveCurrencyBroker) {
        showBasicDiv("currencyBroker")
    } else {
        hide("currencyBroker")	
	}
	
	
	if (gameData.creditScore2) {
        hide("increaseCreditScore2")
    } else {
        tabs("increaseCreditScore2", "inline-block")
	}

	if (gameData.unlockCurrencyBrokers) {
        hide("unlockCurrencyBrokers")
        showBasicDiv("hireToggleButtons")
        showBasicDiv("brokerApplicantUpgrades")

		
    } else {
		
        showBasicDiv("unlockCurrencyBrokers")
        hide("hireToggleButtons")
        hide("brokerApplicantUpgrades")

	}


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



    if (gameData.villageNumber > 1 || gameData.betterTraining > 0 || gameData.increaseJuicePricePermanance == 1) {
        tabs("megaCoinUpgradesButton", "block")
    } else {
        hide("megaCoinUpgradesButton")
    }



    if (gameData.fasterTransport == 0) {
        update("deliveryToggleStandardButton", "Standard Delivery")
    } else {
        update("deliveryToggleStandardButton", "Hyper Delivery")
    }
	
	if (gameData.diseaseTileSize == 0) {
        update("diseaseTileSizeButton", "Disease Tiles: Small")
    } else {
        update("diseaseTileSizeButton", "Disease Tiles: Large")
    }
	
	if (gameData.diseaseTileSymbols == 0) {
        update("diseaseTileSymbolsButton", "Disease Tiles: Blank")
    } else {
        update("diseaseTileSymbolsButton", "Disease Tiles: Symbols")
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



    if (gameData.deliveryManager == 0 && gameData.maps >= 2) {
        showBasicDiv("buyADeliveryManager")
    } else {
        hide("buyADeliveryManager")
    }


    if (gameData.maps >= 3) {
        tabs("travellingArea", "block")
        showBasicDiv("increaseJuicePrice")




        if (gameData.fasterTransport == 0) {
            tabs("fasterTransportDiv", "block")
        } else {
            hide("fasterTransportDiv")
        }
        if (gameData.maps < 4) {
            tabs("buyFourthMapDiv", "block")
        } else {
            hide("buyFourthMapDiv")
            tabs("tasksButton", "block")
        }
    } else {
        hide("buyFourthMapDiv")
        hide("travellingArea")
        hide("fasterTransportDiv")
    }
	
    if (gameData.maps >= 5) {
		
		hide('buyFifthMapDiv')
		
		
		if(!gameData.nationalTradeCert)
			showBasicDiv('buyANTC')
		else
			hide('buyANTC')


    } else {
        showBasicDiv('buyFifthMapDiv')
		
		hide('buyANTC')

    }	
	
    if (gameData.nationalTradeCert) {
		
        showBasicDiv('upgradeMoreStorage')
		
		if (!gameData.bachelorsDegreeFinance)
			showBasicDiv('earnBachelorFinance')
		else
			hide('earnBachelorFinance')

		
		if (!gameData.creditScore2)
			showBasicDiv('increaseCreditScore2')

    } else {
		
		hide('upgradeMoreStorage')
        hide('earnBachelorFinance')
        hide('increaseCreditScore2')

    }	
	
	
	if (gameData.bachelorsDegreeFinance) {
	
		tabs('tradeButton', 'inline-block')
		showBasicDiv('alphaCoinToMegaCoinDiv')
		showBasicDiv('textForAlphaCoinsDiv')
		showBasicDiv('textForAlphaCoinsDiv2')



    } else {
		
		hide('tradeButton')
		hide('alphaCoinToMegaCoinDiv')
		hide('textForAlphaCoinsDiv')
		hide('textForAlphaCoinsDiv2')


    }	
	
	

    if (gameData.fork == 0 && gameData.learnANewSkill > -1) {
        showBasicDiv('buyAForkDiv')
    } else {
        hide('buyAForkDiv')
    }
	
    if (gameData.shoes == 0 && gameData.learnANewSkill > -2) {
        showBasicDiv('buyShoesDiv')
    } else {
        hide('buyShoesDiv')
    }


    if (gameData.hideCompletedSkills == 0) {
        update("hideCompletedSkillsButton", "Completed Skills Shown")
    } else {
        update("hideCompletedSkillsButton", "Completed Skills Hidden")
    }

	tabs('skillsSection1', 'inline-block')
	tabs('skillsSection2', 'inline-block')


    if (gameData.desktopMode == 0) {
		
		document.getElementById('skills').style.width = '380px'
		document.getElementById('skillsSection1').style.position = 'relative'
		document.getElementById('skillsSection2').style.position = 'relative'

		
        update("desktopModeButton", "In Mobile Mode")
		
		
    } else {
		
		document.getElementById('skillsSection1').style.top = '0'
		document.getElementById('skillsSection1').style.position = 'absolute'
		document.getElementById('skillsSection2').style.position = 'absolute'
		document.getElementById('skillsSection2').style.right = '0'
		document.getElementById('skills').style.width = '760px'
        update("desktopModeButton", "In Desktop Mode")
		
    }



    if (gameData.hideMaxedPurchases == 0) {
        update("hideMaxedPurchasesButton", "Maxed Purchases Shown")
    } else {
        update("hideMaxedPurchasesButton", "Maxed Purchases Hidden")
    }



    if (gameData.maps >= 2 && gameData.bulkBuyUnlock == 0) {
        tabs("bulkBuyUnlockDiv", "block")
    } else if (gameData.maps < 2 && gameData.bulkBuyUnlock == 1) {
        hide("bulkBuyUnlockDiv")
    } else if (gameData.maps >= 2 && gameData.bulkBuyUnlock == 1) {
        hide("bulkBuyUnlockDiv")
		
		if (gameData.bulkBuyUnlock2)
		{
			hide("bulkBuyUnlock2Div")
		}
		else
		{
			showBasicDiv("bulkBuyUnlock2Div")
		}


    } else if (gameData.bulkBuyUnlock == 0 && gameData.maps < 2) {
        hide("bulkBuyUnlockDiv")
    }




    if (gameData.maps >= 2 && gameData.storageUnlock == 0) {
        tabs("storageUnlockDiv", "block")
        hide("storageDiv")
    } else if (gameData.maps < 2) {
        hide("storageUnlockDiv")
        hide("storageDiv")
    } else if (gameData.maps >= 2 && gameData.storageUnlock == 1) {
        tabs("storageDiv", "block")
        hide("storageUnlockDiv")

        if (gameData.storageJuicersUnlock == 1 && gameData.storagePeelersUnlock == 1) {
            hide("storageDiv")

        }
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

    if (gameData.advertisingLevel2 == 0) {
        tabs("advertisingLeaflets", "block")
    } else {
        hide("advertisingLeaflets")
    }

    if (gameData.advertisingLevel3 == 0) {
        tabs("advertisingBillboard", "block")
    } else {
        hide("advertisingBillboard")
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



    if (gameData.storagePeelersUnlock == 1) {
        hide("storagePeelersDiv")
    }

    if (gameData.storageJuicersUnlock == 1) {
        hide("storageJuicersDiv")
    }




    if (gameData.lookAround >= 2) {
        tabs("sellYourLimesDiv", "block")
    }

    if (gameData.lookAround >= 3) {
        if (gameData.hideMaxedPurchases == 1 && gameData.juicers == gameData.juicersMax) {
            hide("buyAJuicerDiv")
        } else {
            showBasicDiv("buyAJuicerDiv")
        }

        if (gameData.hideMaxedPurchases == 1 && gameData.baskets == gameData.basketsMax) {
            hide("buyABasketDiv")
        } else {
            showBasicDiv("buyABasketDiv")
        }

        showBasicDiv("buyAMapDiv")

    }



    if (gameData.learnANewSkill >= -1) {	
		showBasicDiv("autoCollectingDiv")
		showBasicDiv("nourishment")
		tabs("skillInfoButton", "inline-block")
    }

    if (gameData.learnANewSkill >= 0) {	
		showBasicDiv("eatFoodDiv")
		showOrHideSkill("keenEye")
    }


	
    if (gameData.learnANewSkill >= 1) {
        showOrHideSkill("rottenWisdom")
    }

    if (gameData.learnANewSkill >= 2) {
        showOrHideSkill("limebidextrous")
    }

    if (gameData.tomes >= 1) {
        hide("tomeDiv")
    }
	
    if (gameData.autoCollectingBar == (gameData.nourishment + 1) * 100 || gameData.autoCollectingBar == 0) {
		gameData.isAutoCollecting = 0
    }
	

    if (gameData.learnANewSkill >= 3) {
        showOrHideSkill("intelligence")

        if (gameData.tomes == 0) {
            document.getElementById('learnANewSkillButton').style.backgroundColor = 'darkgray';
            gameData.learnANewSkillBar = 100;
        } else if (gameData.tomes == 1) {
            document.getElementById('learnANewSkillButton').style.backgroundColor = '#FFBB9A';
        }
    }

    if (gameData.learnANewSkill >= 4) {
        showOrHideSkill("knifebidextrous")

        gameData.learnANewSkillBar = 100;
        document.getElementById('learnANewSkillButton').style.backgroundColor = 'darkgray';
    }

    if (gameData.villageNumber > 0) {
        tabs("marketMainButtonsDiv", "block")
    }

    if (gameData.maps >= 1) {
        tabs("marketMainButtonsDiv", "block")
        tabs("marketStoreButton", "inline-block")
        hide("buyAMapDiv")
    }

    if (gameData.maps >= 2) {
        tabs("hiringAreaButton", "inline-block")
        tabs("marketStoreButton", "inline-block")
        hide("buyAnotherMapDiv")
    }

    if (gameData.maps >= 3 || gameData.villageNumber > 1) {
        tabs("travelButton", "inline-block")
    }

    if (gameData.peeledLimes >= 1) {
        divVisibility("textForPeeledLimes", "inline-block")
        tabs("juiceLimesToggleButton", "inline-block")
        tabs("juicePeeledLimesToggleButton", "inline-block")
    }

    if (gameData.maps == 2) {
        showBasicDiv("buyThirdMapDiv")
    } else {
        hide("buyThirdMapDiv")
    }

    if (gameData.knife >= 1) {
        showBasicDiv("knifeDiv")

        if (gameData.hideMaxedPurchases == 1 && gameData.peelers == gameData.peelersMax) {
            hide("buyAPeelerDiv")
        } else if (gameData.knifebidextrousSkillLevel == gameData.knifebidextrousSkillLevelMax) {
            showBasicDiv("buyAPeelerDiv")
        }

        if (gameData.knifebidextrousSkillLevel == gameData.knifebidextrousSkillLevelMax && gameData.maps > 1) {
            showBasicDiv("sharperPeelerDiv")
        } else {
            hide("sharperPeelerDiv")
        }


        hide("buyKnifeDiv")
    } else {
        hide("buyAPeelerDiv")
        hide("sharperPeelerDiv")
    }

    if (gameData.sharperPeelers >= 1) {
        hide("sharperPeelerDiv")
    }


    if (gameData.silkRobe >= 1) {
        hide("buyARobe")
    }

    if (gameData.unlockDiseaseAreaSwamp >= 1) {
        hide("unlockDiseaseAreaSwamp")
    }

    if (gameData.juicers >= 2) {
        divVisibility("makeMaxJuiceButton", "visible")
    }




    if (gameData.peelers >= 2) {
        tabs("useMaxPeelersButton", "inline-block")
    }



    if (gameData.peelers >= 1) {
        showBasicDiv("peelerDiv")
    }




    if (gameData.advertisingLevel2 && gameData.advertisingLevel3) {
        hide("researchBetterAdvertising")
        hide("advertisingBillboard")
        hide("advertisingLeaflets")
    }

    if (gameData.coins >= 10) {
        gameData.achievement1 = 1
    }
    if (gameData.coins >= 100) {
        gameData.achievement2 = 1
    }
    if (gameData.coins >= 1000) {
        gameData.achievement3 = 1
    }
    if (gameData.coins >= 10000) {
        gameData.achievement4 = 1
    }

    moveBar("learnANewSkill")

}