var pieOvenColor = 0
var juiceInPieBucketLeak = 0
var flourInPieBucketLeak = 0

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
	if(gameData.pieCoins >= gameData.pieMerchantPieCoinPrice && gameData.betaCoins >= gameData.pieMerchantBetaCoinPrice && gameData.pieEmployeeSalesLeft < gameData.pieMerchantMaxPay) {
		gameData.pieCoins -= gameData.pieMerchantPieCoinPrice
		gameData.betaCoins -= gameData.pieMerchantBetaCoinPrice
		gameData.pieEmployeeSalesLeft += 1
	}
}

function updatePieStuff() {
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
	
	checkShowOrHide(gameData.hasGottenPies, "bakeryButton")
	
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
	
	checkShow(gameData.pieBucket, "pieBuckets")
	
	if (gameData.pieFlourBucket) {
		divVisibility('flourBucketProgress', 'visible')
		divVisibility('addToPieFlourBucket', 'visible')
		if (gameData.pieFlourBucketNozzle) {
			divVisibility("flourMinusNozzle", "visible")
			divVisibility("flourPlusNozzle", "visible")
		}
	}

	if (gameData.pieBucketNozzle) {
		showBasicDiv("bucketHoleChanger")
	}

	if (gameData.pieOven) {
		tabs("pieOvenDiv", "inline-block")
		
		if(gameData.bellows)
			showBasicDiv("bellowsDiv")
	}
	
	if (gameData.bakePieBar !== 100) {
		if(beckyRandom(2) == 1)
			pieOvenColor += 10
		else
			pieOvenColor -= 10
		
		if(pieOvenColor > 200)
			pieOvenColor = 200
	
		if(pieOvenColor < 0)
			pieOvenColor = 0
	}
	
	document.getElementById('bakePieBar').style.backgroundColor = 'rgba(345, ' + pieOvenColor + ', 66)'
	document.getElementById('bellowsBar').style.backgroundColor = '#99DEFF'

	
	if (gameData.pieConveyorBelt)
		tabs("pieConveyorBeltOnButton", "inline-block")

	
	if (gameData.pieEmployee)
		showBasicDiv("payPieEmployeeDiv")
	else
		hide("payPieEmployeeDiv")
	
	if(gameData.wheatHarvesters || gameData.seedDrills)
		gameData.hasGottenFieldTools = 1
	
	if(gameData.hasGottenFieldTools)
		showBasicDiv('fieldPlacementOptions')
	
	update("wheatNumber", "Wheat: " + gameData.wheat.toLocaleString() + " / 30")
	update("wheatSeedsNumber", "Seeds: " + gameData.wheatSeeds.toLocaleString() + " / 30")
	update("flourNumber", "Flour: " + gameData.flour.toLocaleString() + " / 30")
	
	update("wheatHarvesterNumber", "Available Wheat Harvesters: " + gameData.wheatHarvesters.toLocaleString())
	update("seedDrillNumber", "Available Seed Drills: " + gameData.seedDrills.toLocaleString())

	update("currentPieIngredients", "Current Ingredients: " + gameData.juiceAsPieIngredient.toLocaleString() + " Juice + " + gameData.flourAsPieIngredient.toLocaleString() + " Flour")

	update("pieEmployeeSalesLeft", "Employee Sales Left: " + gameData.pieEmployeeSalesLeft.toLocaleString() + " / " + gameData.pieMerchantMaxPay.toLocaleString())
	update("payPieEmployee", "Pay Employee " + gameData.pieMerchantPieCoinPrice.toLocaleString() + " Pie Coins & " + gameData.pieMerchantBetaCoinPrice.toLocaleString() + " Beta Coins" )
	

	if(gameData.doesHavePieMerchant)
		showBasicDiv('pieMerchant')
	else
		hide('pieMerchant')
	
	if (!gameData.isThereACustomer)
		update("customerButton", "  ")
	else if (gameData.customerWaitTime < 5)
		update("customerButton", ":)")
	else if (gameData.customerWaitTime >= 5 && gameData.customerWaitTime < 10)
		update("customerButton", ":l")
	else if (gameData.customerWaitTime >= 10 && gameData.customerWaitTime < 15)
		update("customerButton", ":(")
}

function useBellows() {
	gameData.bellowsBar = 100
	
	if (gameData.bellowsBar < 0.5)
		bellowsBar()

	gameData.bellowsCurrentlyBlowing = 1
}

function bellowsBar() {
    if (gameData.bellowsBar > 0) {
        gameData.bellowsBar -= 0.5;
		moveBar("bellows")
        setTimeout(bellowsBar, 100)
    } else
		gameData.bellowsCurrentlyBlowing = 0
}

function bakePie() {
    if (canStartBar('bakePie') && gameData.juiceAsPieIngredient > 0 && gameData.flourAsPieIngredient > 0) {
        gameData.bakePieBar = 0
		gameData.isPieBaking = 1
        bakePieBar()
    }
}

function bakePieBar() {
    if (gameData.bakePieBar < 100) {
        gameData.bakePieBar += 0.5;
		moveBar("bakePie")
        setTimeout(bakePieBar, 100 / (gameData.bellowsCurrentlyBlowing + 1))
    } else {
		gameData.pies += 1
		gameData.juiceAsPieIngredient = 0
		gameData.flourAsPieIngredient = 0
		gameData.isPieBaking = 0
    }
}

function findPieCustomers() {
    if (canStartBar('findPieCustomers')) {
        gameData.findPieCustomersBar = 0
		gameData.findPieCustomersBarRunning = true	
        findPieCustomersBar()
    }
}

function changePiePrice(x) {
	gameData.piePrice += x
	if (gameData.findPieCustomersBarRunning) {
		gameData.findPieCustomersBarRunning = false
		gameData.isThereACustomer = 0
		gameData.findPieCustomersBar = 0
		gameData.stopSellingPie = true
		moveBar("findPieCustomers")
	}
}

function findPieCustomersBar() {
	if (gameData.stopSellingPie)
		gameData.stopSellingPie = false
	else {
		if (gameData.findPieCustomersBar < 100) {
			if (findPieCustomersBarDoMove)
				gameData.findPieCustomersBar += 5 / (Math.pow(2 - gameData.pieMerchantCharm / 20, gameData.piePrice) + 10 + gameData.piePrice - gameData.pieMerchantCharm)
			
			gameData.findPieCustomersBarRunning = true
			findPieCustomersBarDoMove = 1
			moveBar("findPieCustomers")
		}
		
		if (gameData.findPieCustomersBar == 100) {
			gameData.couldFindCustomer = 1
			gameData.isThereACustomer = 1
			gameData.customerWaitTime = 0
			gameData.findPieCustomersBarRunning = false
			
			if (gameData.pieEmployeeSalesLeft > 0) {
				gameData.pieEmployeeSalesLeft -= 1
				sellPieToCustomer()
			}
		}
		else
			setTimeout(findPieCustomersBar, 15 / gameData.tickspeed)
	}

}