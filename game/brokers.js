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

function updateBrokers() {
	if (gameData.bachelorsDegreeFinance) {
		
		if (gameData.basicAlphaToBetaBroker && gameData.betaCoinsExchangeRate < gameData.basicA2BBrokerRule)
			alphaToBetaClick()
		
		if (gameData.autoAdvertiseBroker && (gameData.currencyApplicantSpeed > gameData.autoAdvertiseSpeedValue || (gameData.smarterAdvertisingManagerBroker && gameData.currencyApplicantTransferAmount < gameData.autoAdvertiseAmountValue)))
			advertise()
	
		tabs('tradeButton', 'inline-block')
		showBasicDiv('alphaCoinToMegaCoinDiv')
		
		for (let i = 0; i < basicBrokerStats.length; i++) {
			id = jsUcfirst(basicBrokerStats[i].id)
			type = ' ' + basicBrokerStats[i].type
			
			update("textForBrokerApplicant" + id, "Currently " + gameData['minBrokerApplicant' + id].toLocaleString() + " - " + gameData['maxBrokerApplicant' + id].toLocaleString() + type)
			update("brokerApplicant" + id + 'Price', "Price: " + gameData['brokerApplicant' + id + 'Price'].toLocaleString() + " Alpha Coins")
			update("currencyBroker" + id, basicBrokerStats[i].description + ": " + gameData['currencyBroker' + id].toLocaleString() + type + ".")
		}
		
		
		update("textForAdvertisingBrokerRule", "Auto advertise if speed is over " + gameData.autoAdvertiseSpeedValue.toLocaleString() + " seconds")
		update("textForSmarterAdvertisingBrokerRule", "And if transfer amount is under " + gameData.autoAdvertiseAmountValue.toLocaleString())

		update("textForA2BBrokerRule", "Converts Alpha Coins to Beta Coins if the conversion rate is below " + gameData.basicA2BBrokerRule.toLocaleString())
		update("textForA2BBrokerAmountToggleButton", "Bulk convert amount: " + gameData.basicA2BBrokerAmount.toLocaleString())
		update("textForA2BBrokerPrice", "Increase for " + gameData.increaseBasicA2BBrokerAmountPrice.toLocaleString() + " Pie Coins")
		update("alphaCoinTransactionFee", "Transfer Fee: " + gameData.currencyBrokerFee.toLocaleString() + " Coins Per Alpha Coin")

		alphaCoinTotalPrice = (gameData.alphaCoinsExchangeRate + gameData.currencyBrokerFee) * gameData.currencyBrokerAmount

		if (gameData.alphaCoinConvertBulkToggle)
			bulk = 10
		else
			bulk = 1
		
		update("alphaCoinExhangeRate", "Exchange Rate: " + (gameData.alphaCoinsExchangeRate * bulk).toLocaleString() + " Coins -> 10 Alpha Coins")
		update("alphaCoinTotalPrice", "Total Price: " + (alphaCoinTotalPrice * bulk).toLocaleString() + " Coins")
		update("coinsToAlphaClickButton", "Convert Coins to " + (gameData.currencyBrokerAmount * bulk).toLocaleString() + " Alpha Coins")

	} else {

		hide('tradeButton')
		hide('alphaCoinToMegaCoinDiv')
	}
	
	checkShowOrHide(gameData.doesHaveCurrencyBroker, "currencyBroker")
	checkShowOrHide(gameData.smarterAdvertisingManagerBroker, 'smarterAdvertisingBrokerRule')
	
	if (gameData.unlockCurrencyBrokers) {
		hide("unlockCurrencyBrokers")
		showBasicDiv("hireToggleButtons")
		showBasicDiv("brokerApplicantUpgrades")
		if (gameData.advertisingManagerBroker)
			hide("autoBrokerAdvertiser")
		else
			showBasicDiv("autoBrokerAdvertiser")
	} else {

		showBasicDiv("unlockCurrencyBrokers")
		hide("hireToggleButtons")
		hide("brokerApplicantUpgrades")
		hide("autoBrokerAdvertiser")
	}
	
	
	if (gameData.advertisingManagerBroker && gameData.typeToHireToggle == 1)
		tabs("autoAdvertiseBrokerDiv", "inline-block")
	else
		hide("autoAdvertiseBrokerDiv")
	
	if (gameData.advertisingManagerBroker && !gameData.smarterAdvertisingManagerBroker)
		showBasicDiv("smarterAutoBrokerAdvertiser")
	else
		hide("smarterAutoBrokerAdvertiser")	
	
	if (gameData.transferAlphaCoinBags)
		tabs("alphaCoinConvertBulkButton", "inline-block")

	checkHide(gameData.transferAlphaCoinBags, "transferAlphaCoinBagsUnlock")
	checkShow(gameData.transferAlphaCoinsBulkUnlock, "transferAlphaCoinsBulk")
	checkHide(gameData.transferAlphaCoinsBulkUnlock, "transferAlphaCoinsBulkUnlock")	
	checkHide(gameData.saveAlphaCoinsUnlock, "saveAlphaCoinsUnlock")
	checkShow(gameData.saveAlphaCoinsUnlock, "upgradeSaveAlphaCoinsUnlock")	
	
	
	if (gameData.advertisePriceType == 'coins')
		advertisePriceType = " Coins"
	else if (gameData.advertisePriceType == 'betaCoins')
		advertisePriceType = " Beta Coins"
	
	update("advertisePrice", "Price: " + gameData.advertisePrice.toLocaleString() + advertisePriceType)
}

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
        barStart("currencyBrokerHire")
    }
}

function coinsToAlphaStart() {
	if (gameData.autoCurrencyConversionBuy)
		pickCurrentTask('coinsToAlphaClick')
	else
		coinsToAlphaClick()
}

function coinsToAlphaClick() {
	price = (gameData.alphaCoinsExchangeRate + gameData.currencyBrokerFee) * gameData.currencyBrokerAmount
	
	if (gameData.alphaCoinConvertBulkToggle)
		price *= 10
	
	if (gameData.coins >= price && canStartBar('coinsToAlpha')) {
		gameData.alphaCoinConvertBulkToggleSet = gameData.alphaCoinConvertBulkToggle
		gameData.coins -= price
		gameData.coinsToAlphaBar = 0
		coinsToAlphaBar()
	}
}

function coinsToAlphaBar() {
	barMoverAdvanced('coinsToAlpha', 1.5 / gameData.currencyBrokerSpeed, 15)
}

function coinsToAlphaBarEnd() {
	amount = gameData.currencyBrokerAmount
	
	if (gameData.alphaCoinConvertBulkToggleSet == 1)
		amount *= 10
	
	gameData.alphaCoins += amount
}

function alphaToBetaClick() {
	price = gameData.betaCoinsExchangeRate
	
	if (gameData.textForA2BBrokerAmountToggle == 1)
		price *= gameData.basicA2BBrokerAmount

	if (gameData.alphaCoins >= price && canStartBar('alphaToBeta')) {
		gameData.alphaCoins -= price
		gameData.alphaToBetaBar = 0
		gameData.a2BBrokerAmountSet = gameData.textForA2BBrokerAmountToggle
		alphaToBetaBar()
	}
}

function alphaToBetaBar() {
	barMoverAdvanced('alphaToBeta', 0.5, 15)
}

function alphaToBetaBarEnd() {
	amount = gameData.wisdomUpgradebetaTestingLevel + 1
	
	if(gameData.a2BBrokerAmountSet != 0)
		amount *= gameData.basicA2BBrokerAmount
	
	gameData.betaCoins += amount
}