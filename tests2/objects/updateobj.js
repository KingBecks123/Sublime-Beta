function resetUpdateObj () {
	updateObjMain = [
		{
			id: 'pieMerchantPieCoinPrice',
			content: 'Pie Coin Wages: ' + gameData.pieMerchantPieCoinPrice.toLocaleString() + '.'
		}, {
			id: 'pieMerchantBetaCoinPrice',
			content: 'Beta Coin Wages: '   + gameData.pieMerchantBetaCoinPrice.toLocaleString() + '.'
		}, {
			id: 'pieMerchantMaxPay',
			content: 'Max Wage Advances: ' + gameData.pieMerchantMaxPay.toLocaleString() + '.'
		}, {
			id: 'pieMerchantCharm',
			content: 'Charm: ' + gameData.pieMerchantCharm.toLocaleString() + '.'
		}, {
			id: 'speedEmployee',
			content: 'Speed: ' + gameData.employeeSpeed.toLocaleString() + '% of what I&#39m taught.'
		}, {
			id: 'wageEmployee',
			content: 'Wages: ' + gameData.employeeWage.toLocaleString() + ' Coins per minute.'
		}, {
			id: 'hungerEmployee',
			content: 'Hunger: ' + gameData.employeeHunger.toLocaleString() + ' Limes per second.'
		}, {
			id: 'maxAlphaCoinsTooltip',
			content: ' / 100,000'
		}, {
			id: 'maxCoinsTooltip',
			content: ' / ' + gameData.coinsMax.toLocaleString()
		}, {
			id: 'endStats',
			content: 'Total Time Played: ' + gameData.timePlayed.toLocaleString() + ' Seconds'
		}, {
			id: 'benevolenceRespectIncrease',
			content: 'Respect increase: ' + (Math.pow(2, gameData.limeDiseaseLakes - 10) * gameData.benevolence * (gameData.limeDiseaseLakes > 10)).toLocaleString()
		}, {
			id: 'textForMegaCoinsInBank',
			content: gameData.megaCoinsInBank.toLocaleString() + ' / ' + gameData.megaCoinsInBankMax.toLocaleString() + ' Mega Coins In Bank'
		}, {
			id: 'textForRespect',
			content: gameData.respect.toLocaleString() + ' Respect'
		}, {
			id: 'textForTimePlayed',
			content: 'Total Time Played: ' + gameData.timePlayed.toLocaleString() + ' Seconds'
		}, {
			id: 'textForLakes',
			content: gameData.limeDiseaseLakes.toLocaleString() + ' Lakes'
		}, {
			id: 'currentSpeedEmployee',
			content: 'Current speed: ' + gameData.employeeCurrentSpeed.toLocaleString() + ' limes per minute.'
		}, {
			id: 'textForJuicePricePrice',
			content: 'Price: ' + juicePricePrice.toLocaleString() + ' Coins'
		}, {
			id: 'textForNourishmentPrice',
			content: 'You Need: ' + gameData.nourishmentPrice.toLocaleString() + ' Limes'
		}, {
			id: 'juicersAmount',
			content: gameData.juicers.toLocaleString() + ' / ' + gameData.juicersMax.toLocaleString() + ' Juicers'
		}, {
			id: 'peelersAmount',
			content: gameData.peelers.toLocaleString() + ' / ' + gameData.peelersMax.toLocaleString() + ' Peelers'
		}, {
			id: 'basketsAmount',
			content: gameData.baskets.toLocaleString() + ' / ' + gameData.basketsMax.toLocaleString() + ' Baskets'
		}, {
			id: 'maxBaskets',
			content: gameData.basketsMax.toLocaleString() + ' baskets fit under the current tree.'
		}, {
			id: 'eat',
			content: gameData.eat + ' / 100'
		}, {
			id: 'buyMegaCoinsTimes',
			content: 'Transfer times: ' + gameData.buyMegaCoinsTimes + ' / ' + gameData.buyMegaCoinsTimesMax
		}, {
			id: 'textForAutomaticallyCollectsLimes',
			content: 'Automatically gather at ' + (gameData.shoes + 1) + ' / second'
		}, {
			id: 'betterTrainingTravelUpgradeText',
			content: 'Current maximum: ' + (gameData.betterTraining + 10).toLocaleString() + '00%'
		}, {
			id: 'coinsMaxTravelUpgradeText',
			content: 'Current maximum: ' + gameData.coinsMax.toLocaleString() + ' Coins'
		}, {
			id: 'coinsMaxTravelUpgradeText',
			content: 'Current maximum: ' + gameData.coinsMax.toLocaleString() + ' Coins'
		}, {
			id: 'numberOfCivilians',
			content: 'Number Of Civilians: ' + gameData.civiliansTotal.toLocaleString()
		}, {
			id: 'betterTrainingPrice',
			content: 'Price: ' + gameData.betterTraining.toLocaleString() + ' Mega Coins'
		}, {
			id: 'sellYourJuiceAmount',
			content: 'You Will Deliver ' + gameData.juiceBulkAmountToggle.toLocaleString() + ' / ' + gameData.juiceBulkAmountMax.toLocaleString() + ' Juice'
		}, {
			id: 'sellYourJuiceReward',
			content: 'You Will Get ' + ((gameData.nationalJuiceMarketing + 1) * Math.floor(gameData.juiceBulkAmountToggle * (1 + (gameData.juicePriceCents / 100)))).toLocaleString() + ' Coins'
		}, {
			id: 'sellYourJuicePrice',
			content: 'You Need ' + gameData.deliveryPrice.toLocaleString() + ' Coins For Delivery'
		}, {
			id: 'upgradeMoreStoragePrice',
			content: 'Price: ' + upgradeMoreStoragePrice.toLocaleString() + ' Mega Coins'
		}, {
			id: 'betaCoinExhangeRate',
			content: 'Exchange Rate: ' + gameData.betaCoinsExchangeRate.toLocaleString() + ' Alpha Coins -> 1 Beta Coin'
		}, {
			id: 'betaCoinTotalPrice',
			content: 'Total Price: ' + (gameData.betaCoinsExchangeRate * (gameData.textForA2BBrokerAmountToggle * (gameData.basicA2BBrokerAmount - 1) + 1)).toLocaleString() + ' Alpha Coins'
		}, {
			id: 'piePrice',
			content: 'Current Price: ' + gameData.piePrice.toLocaleString() + ' Pie Coins'
		}, {
			id: 'textForAdvertisingBrokerRule',
			content: 'Auto advertise if speed is over ' + gameData.autoAdvertiseSpeedValue.toLocaleString() + ' seconds'
		}, {
			id: 'textForSmarterAdvertisingBrokerRule',
			content: 'And if transfer amount is under ' + gameData.autoAdvertiseAmountValue.toLocaleString()
		}, {
			id: 'textForA2BBrokerRule',
			content: 'Converts Alpha Coins to Beta Coins if the conversion rate is below ' + gameData.basicA2BBrokerRule.toLocaleString()
		}, {
			id: 'textForA2BBrokerAmountToggleButton',
			content: 'Bulk convert amount: ' + gameData.basicA2BBrokerAmount.toLocaleString()
		}, {
			id: 'textForA2BBrokerPrice',
			content: 'Increase for ' + gameData.increaseBasicA2BBrokerAmountPrice.toLocaleString() + ' Pie Coins'
		}, {
			id: 'alphaCoinTransactionFee',
			content: 'Transfer Fee: ' + gameData.currencyBrokerFee.toLocaleString() + ' Coins Per Alpha Coin'
		}, {
			id: 'alphaCoinExhangeRate',
			content: 'Exchange Rate: ' + (gameData.alphaCoinsExchangeRate * bulk).toLocaleString() + ' Coins -> 10 Alpha Coins'
		}, {
			id: 'alphaCoinTotalPrice',
			content: 'Total Price: ' + (alphaCoinTotalPrice * bulk).toLocaleString() + ' Coins'
		}, {
			id: 'coinsToAlphaClickButton',
			content: 'Convert Coins to ' + (gameData.currencyBrokerAmount * bulk).toLocaleString() + ' Alpha Coins'
		}, {
			id: 'wheatNumber',
			content: 'Wheat: ' + gameData.wheat.toLocaleString() + ' / 30'
		}, {
			id: 'wheatSeedsNumber',
			content: 'Seeds: ' + gameData.wheatSeeds.toLocaleString() + ' / 30'
		}, {
			id: 'flourNumber',
			content: 'Flour: ' + gameData.flour.toLocaleString() + ' / 30'
		}, {
			id: 'wheatHarvesterNumber',
			content: 'Available Wheat Harvesters: ' + gameData.wheatHarvesters.toLocaleString()
		}, {
			id: 'seedDrillNumber',
			content: 'Available Seed Drills: ' + gameData.seedDrills.toLocaleString()
		}, {
			id: 'currentPieIngredients',
			content:  'Current Ingredients: ' + gameData.juiceAsPieIngredient.toLocaleString() + ' Juice + ' + gameData.flourAsPieIngredient.toLocaleString() + ' Flour'
		}, {
			id: 'pieEmployeeSalesLeft',
			content: 'Employee Sales Left: ' + gameData.pieEmployeeSalesLeft.toLocaleString() + ' / ' + gameData.pieMerchantMaxPay.toLocaleString()
		}, {
			id: 'payPieEmployee',
			content: 'Pay Employee ' + gameData.pieMerchantPieCoinPrice.toLocaleString() + ' Pie Coins & ' + gameData.pieMerchantBetaCoinPrice.toLocaleString() + ' Beta Coins'
		}, {
			id: 'buyWisdomPieCoins',
			content: 'Buy 1 Wisdom For ' + gameData.buyWisdomPieCoinsPrice.toLocaleString() + ' Pie Coins'
		}, {
			id: 'buyWisdomBetaCoins',
			content: 'Buy 1 Wisdom For ' + gameData.buyWisdomBetaCoinsPrice.toLocaleString() + ' Beta Coins'
		}, {
			id: 'buyWisdomRespect',
			content: 'Buy 1 Wisdom For ' + gameData.buyWisdomRespectPrice.toLocaleString() + ' Respect'
		}, {
			id: 'wisdomToEarnAmount',
			content: 'You will earn ' + wisdomToEarnAmount + ' Wisdom'
		}, {
			id: 'advertisePrice',
			content: "Price: " + gameData.advertisePrice.toLocaleString() + advertisePriceType
		}, {
			id: 'textForResearchers',
			content: "Price: " + (gameData.bucketThinSteelPlating * 5 + 20).toLocaleString() + " Pie Coins"
		}, {
			id: 'bucketHeight',
			content: "Current heights: " + (gameData.bucketThinSteelPlating * 5 + 20).toLocaleString() + " Units"
		}
	]
}