var loopNumberBasket = 0;
var loopNumbercurrentTask = 0;

function mainGameLoopSlow() {
	
	 if (gameData.autoStartSimulation == 1) {
		startSimulation()
	}
	
	 if (gameData.autoStartTask == 1) {
		diseaseControlTask()
	}
	
	
	 if (gameData.autoCheckSimulation == 1) {
		checkResults()
	}

	startCurrentTask(gameData.currentTask)	
		
	
	if(beckyRandom(2) == 1 && gameData.alphaCoinsExchangeRate < 200)
		gameData.alphaCoinsExchangeRate += 1
	else if (gameData.alphaCoinsExchangeRate > 50)
		gameData.alphaCoinsExchangeRate -= 1


	
	setTimeout(mainGameLoopSlow, 500)
}

function mainGameLoop() {
	
	loopNumberBasket += 1	
	
	 if (gameData.basketBar < 100 && loopNumberBasket >= 24) {
        gameData.basketBar += 0.2;
		loopNumberBasket = 0
    }

	
	setTimeout(mainGameLoop, 50)
    updateValues()
}

function sellMaxJuice() {
    if (gameData.juice < gameData.juiceBulkAmountMax) {
        gameData.juiceBulkAmountToggle = gameData.juice
    } else {
        gameData.juiceBulkAmountToggle = gameData.juiceBulkAmountMax
    }

    updateValues()
}

function collectingUpgrade() {
    if (gameData.limes >= gameData.nourishmentPrice) {

        gameData.limes -= gameData.nourishmentPrice
        gameData.nourishment += 1
        gameData.autoCollectingBar = 0
		gameData.isAutoCollecting = 1


    }

    updateValues()
}

function randomizeApplication() {
	if(gameData.typeToHire == 0){
		
		if (gameData.firstApplicant == 1) {
			gameData.applicantSpeed = 100
			gameData.applicantPrice = 0
			gameData.applicantWage = 5
			gameData.applicantHunger = 1

			gameData.firstApplicant = 0
		} else {
			gameData.applicantSpeed = (Math.floor(Math.random() * (10 + gameData.betterTraining) + 1) * 100)
			gameData.applicantPrice = Math.floor(Math.random() * 200)
			gameData.applicantWage = Math.floor(Math.random() * 16) + 5
			gameData.applicantHunger = Math.floor(Math.random() * 20) + 1
		}
		
		gameData.applicationType = 0
	}
	else{
		gameData.currencyApplicantFee = beckyRandomMinMax(gameData.minBrokerApplicantFee, gameData.maxBrokerApplicantFee) * 10
		gameData.currencyApplicantSpeed = beckyRandomMinMax(gameData.minBrokerApplicantSpeed, gameData.maxBrokerApplicantSpeed)
		gameData.currencyApplicantPrice = (Math.floor(Math.random() * 20) + 1) * 10000
		gameData.currencyApplicantTransferAmount = beckyRandomMinMax(gameData.minBrokerApplicantAmount, gameData.maxBrokerApplicantAmount)
		
		gameData.applicationType = 1

	}


    updateValues()
}




function deliveryToggleStandard() {
    if (gameData.fasterTransport == 0) {
        gameData.deliveryTypeToggle = 0
        gameData.deliveryPrice = 2
    } else {
        gameData.deliveryTypeToggle = 2
        gameData.deliveryPrice = 50
    }
    updateValues()
}

function deliveryToggleExpress() {
    gameData.deliveryTypeToggle = 1
    gameData.deliveryPrice = 5
    updateValues()
}

function foodToggleLimes() {
    gameData.foodTypeToggle = 0
    updateValues()
}

function foodToggleRottenLimes() {
    gameData.foodTypeToggle = 1
    updateValues()
}


function payEmployee() {
    if (gameData.coins >= gameData.employeeWage && gameData.employeeWorking < gameData.employeeWorkingMax) {
        gameData.employeeWorking += 1
        gameData.coins -= gameData.employeeWage
        working()
    }

    updateValues()
}

function hireApplicant() {
	if(gameData.applicationType == 0){
		if (gameData.coins >= gameData.applicantPrice && gameData.applicationReady == 1) {
			gameData.applicationReady = 0
			gameData.employeeWorking = 0
			gameData.workingBar = 0

			gameData.coins -= gameData.applicantPrice

			gameData.employeeHunger = gameData.applicantHunger
			gameData.employeeSpeed = gameData.applicantSpeed
			gameData.employeePrice = gameData.applicantPrice
			gameData.employeeWage = gameData.applicantWage

			gameData.employeeCurrentSpeed = -(gameData.employeeHunger * 60)

			gameData.employees = 1

			gameData.employeeIsWorking = 0
			gameData.workingBar = 0
		}
	}
	else{
		if (gameData.coins >= gameData.currencyApplicantPrice && gameData.applicationReady == 1) {
			gameData.applicationReady = 0
			gameData.doesHaveCurrencyBroker = 1

			gameData.coins -= gameData.currencyApplicantPrice

			gameData.currencyBrokerFee = gameData.currencyApplicantFee
			gameData.currencyBrokerSpeed = gameData.currencyApplicantSpeed
			gameData.currencyBrokerPrice = gameData.currencyApplicantPrice
			gameData.currencyBrokerTransferAmount = gameData.currencyApplicantTransferAmount
		}
	}
    updateValues()
}

function getLimesButton() {

    if (gameData.autoCollectingBar == 0 || gameData.autoCollectingBar == (gameData.nourishment + 1) * 100) {
        getLimes()
    }

}

function getLimes() {
	if( beckyRandom(gameData.keenEyeSkillLevelMax) <= gameData.keenEyeSkillLevel)
	{
		if (gameData.keenEyeSkillLevel != gameData.keenEyeSkillLevelMax)
		{
			update("newInfo", "You found something!")
		}
		
		
		if (Math.random() <= (gameData.rottenWisdom / 100)) {
			if (Math.random() <= (gameData.limebidextrous / 100)) {
				gameData.limes += gameData.limesPerClick
				if (gameData.teachBar > 0 && gameData.teachBar < 100) {
					gameData.employeeCurrentSpeed += (gameData.limesPerClick * gameData.employeeSpeed) / 10
				}
			}
			gameData.limes += gameData.limesPerClick
			if (gameData.teachBar > 0 && gameData.teachBar < 100) {
				gameData.employeeCurrentSpeed += (gameData.limesPerClick * gameData.employeeSpeed) / 10
			}
		} else {
			gameData.rottenLimes += gameData.limesPerClick
		}
		
	}
	else
	{
		update("newInfo", "Couldn't find any limes...")
	}
		
    updateValues()
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
    updateValues()
}

function buyTome() {
    if (gameData.coins >= 10) {
        gameData.coins -= 10
        gameData.tomes = 1
    }
    updateValues()
}

function typeToHire(id) {
	gameData.typeToHireToggle = id
	updateValues()
}

function unlockCurrencyBrokers() {
    if (gameData.alphaCoins >= 5) {
        gameData.alphaCoins -= 5
        gameData.unlockCurrencyBrokers = 1
    }
    updateValues()
}

function buyARobe() {
    if (gameData.coins >= 1000) {
        gameData.coins -= 1000
        gameData.silkRobe = 1
        gameData.respect += 50
    }
    updateValues()
}

function unlockDiseaseAreaSwamp() {
    if (gameData.coins >= 10000) {
        gameData.coins -= 10000
        gameData.unlockDiseaseAreaSwamp = 1
    }
    updateValues()
}

function brokerApplicant(id, type) {

	if(gameData.alphaCoins >= gameData['brokerApplicant'+ id + 'Price'])
	{
		if(type == 'max')
		{
			if (gameData['maxBrokerApplicant' + id] > gameData['minBrokerApplicant' + id]) {
				
				brokerApplicantPrice(id)


				gameData['maxBrokerApplicant' + id] -= 1
			}
		}
		else if(type == 'maxup')
		{
			brokerApplicantPrice(id)
			gameData['maxBrokerApplicant' + id] += 1
		}
		else if(type == 'minup')
		{
			if (gameData['maxBrokerApplicant' + id] > gameData['minBrokerApplicant' + id]) {
				
				brokerApplicantPrice(id)

				gameData['minBrokerApplicant' + id] += 1
			}
		}
		else
		{
			if (gameData['minBrokerApplicant' + id] > 1) {
				
				brokerApplicantPrice(id)
				
				gameData['minBrokerApplicant' + id] -= 1
			}
		}
	}
    updateValues()
}

function brokerApplicantPrice(id){
	gameData.alphaCoins -= gameData['brokerApplicant'+ id + 'Price']
	gameData['brokerApplicant'+ id + 'Price'] += 5
}

function buyEntrepreneurialCertificate() {
    if (gameData.megaCoins >= 10) {
        gameData.megaCoins -= 10
        gameData.entrepreneurialCertificates = 1
    }
    updateValues()
}

function increaseCreditScore() {
    if (gameData.megaCoins >= 2) {
        gameData.megaCoins -= 2
        gameData.megaCoinsInBankMax += 30
    }
    updateValues()
}

function increaseCreditScore2() {
    if (gameData.megaCoins >= 50) {
        gameData.megaCoins -= 50
        gameData.megaCoinsInBankMax += 450
        gameData.creditScore2 = 1

    }
    updateValues()
}

function buyMegaCoins() {
    if (gameData.coins >= 1000 && gameData.megaCoinsInBank < gameData.megaCoinsInBankMax) {
        gameData.coins -= 1000
        gameData.megaCoinsInBank += 1
    }
    updateValues()
}

function buyMegaCoinsWithAlphaCoins() {
    if (gameData.alphaCoins >= 10 && gameData.megaCoinsInBank < gameData.megaCoinsInBankMax) {
        gameData.alphaCoins -= 10
        gameData.megaCoinsInBank += 1
    }
    updateValues()
}

function buyBigGloves() {
    if (gameData.megaCoins >= 5) {
        gameData.megaCoins -= 5
        gameData.bigGloves = 1
    }
    updateValues()
}

function buyBetterTraining() {
    if (gameData.megaCoins >= gameData.betterTraining) {
        gameData.megaCoins -= gameData.betterTraining
        gameData.betterTraining += 1
    }
    updateValues()
}

function upgradeMoreStorage() {
    if (gameData.megaCoins >= gameData.upgradeMoreStoragePrice) {
        gameData.megaCoins -= gameData.upgradeMoreStoragePrice
        gameData.juicersMax += 1000
        gameData.peelersMax += 1000
        gameData.upgradeMoreStoragePrice += 5


    }
    updateValues()
}

function hireANutritionist() {
    if (gameData.megaCoins >= 5) {
        gameData.megaCoins -= 5
        gameData.nutritionists = 1
    }
    updateValues()
}

function travelToNextVillage() {
    if (window.prompt("Are you sure? Type 'yes' if you are") == "yes") {
		
		if (gameData.increaseJuicePricePermanance == 1) {
			saveBeforeWipe('juicePricePrice')
		    saveBeforeWipe('juicePriceCents')
		} 
		
		if (gameData.manuscripts > 0) {
			saveBeforeWipe('respectMilestone1000')
		} 
        saveBeforeWipe('manuscripts')

		
        saveBeforeWipe('increaseJuicePricePermanance')

		
        megaCoinsNow = gameData.megaCoinsInBank

		saveBeforeWipe('respectMilestone10000')
        saveBeforeWipe('unlockBenevolence')
        saveBeforeWipe('nationalTradeCert')
        saveBeforeWipe('bigGloves')
        saveBeforeWipe('desktopMode')
        saveBeforeWipe('nutritionists')
        saveBeforeWipe('megaCoinsInBankMax')
        saveBeforeWipe('betterTraining')
        saveBeforeWipe('autosave')
        saveBeforeWipe('showBarPercent')
        saveBeforeWipe('hideCompletedSkills')
        saveBeforeWipe('hideMaxedPurchases')
        saveBeforeWipe('researchers')



        Object.assign(gameData, gameDataBase)



		if (increaseJuicePricePermananceNow == 1) {
			saveAfterWipe('juicePricePrice')
			saveAfterWipe('juicePriceCents')
			saveAfterWipe('increaseJuicePricePermanance')
		} 
		
        saveAfterWipe('manuscripts')
		if (gameData.manuscripts > 0) {
			saveAfterWipe('respectMilestone1000')
		} 
		
		saveAfterWipe('respectMilestone10000')
        saveAfterWipe('unlockBenevolence')
        saveAfterWipe('nationalTradeCert')
        saveAfterWipe('researchers')
        saveAfterWipe('megaCoins')
        saveAfterWipe('bigGloves')
        saveAfterWipe('desktopMode')
        saveAfterWipe('nutritionists')
        saveAfterWipe('megaCoinsInBankMax')
        saveAfterWipe('betterTraining')
        saveAfterWipe('autosave')
        saveAfterWipe('showBarPercent')
        saveAfterWipe('hideCompletedSkills')
        saveAfterWipe('hideMaxedPurchases')

        gameData.villageNumber = 2
        saveGame()
        location.reload();
    }
}

function lookAround() {

    gameData.lookAroundNumber += 1

    if (gameData.lookAround < 1) {
        update("newInfo", "Maybe I should keep looking around...")

    }

    if (gameData.lookAround == 0) {
        if (gameData.lookAroundNumber == 10 || gameData.difficulty >= 1) {
            update("newInfo", "You see a nearby market.")
            gameData.lookAround = 1

        }
    } else if (gameData.lookAround == 1) {
        if (gameData.lookAroundNumber == 20 || gameData.difficulty >= 1) {
            update("newInfo", "You find a merchant willing to buy limes.")
            gameData.lookAround = 2

        }
    } else if (gameData.lookAround == 2) {
        if (gameData.lookAroundNumber == 30 || gameData.difficulty >= 1) {
            update("newInfo", "You find a merchant selling various items.")
            gameData.lookAround = 3
        }
    }
    updateValues()
}

function buyAMap() {
    if (gameData.coins >= 20 && gameData.maps == 0) {
        gameData.coins -= 20
        gameData.maps = 1
    } else if (gameData.coins >= 200 && gameData.maps == 1) {
        gameData.coins -= 200
        gameData.maps = 2
    } else if (gameData.coins >= 2000 && gameData.maps == 2) {
        gameData.coins -= 2000
        gameData.maps = 3
    } else if (gameData.coins >= 20000 && gameData.maps == 3) {
        gameData.coins -= 20000
        gameData.maps = 4
    } else if (gameData.coins >= 2e5 && gameData.maps == 4) {
        gameData.coins -= 2e5
        gameData.maps = 5
    }
    updateValues()
}


function storageJuicersUnlock() {
    if (gameData.coins >= 100) {
        gameData.coins -= 100
        gameData.storageJuicersUnlock = 1
        gameData.juicersMax *= 5
    }
    updateValues()
}

function storagePeelersUnlock() {
    if (gameData.coins >= 100) {
        gameData.coins -= 100
        gameData.storagePeelersUnlock = 1
        gameData.peelersMax *= 5
    }
    updateValues()
}

function juiceLimesToggle() {
    gameData.limeTypeToJuice = 0
    updateValues()
}

function benevolenceToggle(){
	if (gameData.diseaseControlFinished)
		switchValue('benevolenceToggle')
}

function juicePeeledLimesToggle() {
    gameData.limeTypeToJuice = 1
    updateValues()
}

function sellYourLimes() {
    if (gameData.limes >= 50) {
        gameData.limes -= 50
        gameData.coins += 1
    }

    updateValues()
}

function increaseJuicePrice() {
    if (gameData.coins >= gameData.juicePricePrice) {
        gameData.coins -= gameData.juicePricePrice



        gameData.juicePriceCents += 1
    }

    updateValues()
}


function decreaseJuiceSold() {
    if (gameData.juiceBulkAmountToggle >= 1) {
        if (gameData.juiceBulkAmountToggle > 100) {
            gameData.juiceBulkAmountToggle -= 10
        } else {
            gameData.juiceBulkAmountToggle -= 1
        }
    }

    updateValues()
}

function increaseJuiceSold() {
    if (gameData.juiceBulkAmountToggle < 100) {
        gameData.juiceBulkAmountToggle += 1
    } else if (gameData.juiceBulkAmountToggle < 500 && gameData.deliveryTypeToggle == 2 && gameData.fasterTransport > 0) {
        gameData.juiceBulkAmountToggle += 10
    }




    updateValues()
}

function bribeTheBanks() {
    if (gameData.alphaCoins >= 2) {
        gameData.alphaCoins -= 2
        gameData.amountCoinsToAlphaMax += 1

    } 




    updateValues()
}

function moveBasket() {
    var elem = document.getElementById("basketBar");
    elem.style.height = gameData.basketBar + "%";
    elem.innerHTML = Math.floor(gameData.basketBar) + "%";
}

function moveAutoCollecting() {

    var elem = document.getElementById("autoCollectingBar");
    var x = Math.floor(gameData.autoCollectingBar / (gameData.nourishment + 1))

    elem.style.width = x + "%";
    elem.innerHTML = x + "%";
}


function buyABasket() {

    gameData.basketBar -= gameData.basketBar / (gameData.baskets + 1)
    bulkableBuyMax('baskets', 2)
}