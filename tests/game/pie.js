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
		if(beckyRandom(2) == 1)
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