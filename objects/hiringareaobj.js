function setApplicationData () {
	applicationType = 
[
{
	priceId: 'basic',
	price: 10,
	priceType: 'coins',
	text: [
		["Speed", "% Of What I'm Taught"],
		["Price", "Coins"], 
		["Wages", "Coins Per Minute"], 
		["Hunger", "Limes Per Second"]
	],
	variables: [ 
		{
			name: 'employeeSpeed',
			min: 1,
			max: 10 + gameData.betterTraining,
			multiplier: 100
		}, {
			name: 'employeeWage',
			min: 5,
			max: 16,
			multiplier: 1
		}, {
			name: 'employeeHunger',
			min: 1,
			max: 20,
			multiplier: 1
		}, {
			name: 'employeePrice', 
			min: 0,
			max: 200,
			multiplier: 1
		}
	],
	applicationVariables: 3,
	button: {
		unlockVariable: 'none',
		name: 'Employee',
		text: 'Basic Employees'
	},
	onHire: function() {
		gameData.employeeWorking = 0
		gameData.workingBar = 0
		gameData.employeeCurrentSpeed = -(gameData.employeeHunger * 60)
		gameData.employees = 1
		gameData.employeeIsWorking = 0
		gameData.workingBar = 0
	},
	onAdvertised: function() { //Overrides normal randomisation if true
		if (gameData.typeToHire == 0 && gameData.firstApplicant) {
			gameData.employeeSpeedOnApplication = 100
			gameData.employeePriceOnApplication = 0
			gameData.employeeWageOnApplication = 5
			gameData.employeeHungerOnApplication = 1
			gameData.firstApplicant = 0
			return true
		}
	}
},
{
	priceId: 'currency',
	price: 10000,
	priceType: 'coins',
	text: [
		["Speed", "Seconds"],
		["Transfer Fee", "Coins"],
		["Alpha Coins Per Transfer"],
		["Hire Price", "Coins"]
	],
	variables: [
		{
			name: 'currencyBrokerFee',
			min: gameData.minBrokerApplicantFee,
			max: gameData.maxBrokerApplicantFee,
			multiplier: 1
		}, {
			name: 'currencyBrokerSpeed',
			min: gameData.minBrokerApplicantSpeed,
			max: gameData.maxBrokerApplicantSpeed,
			multiplier: 1
		}, {
			name: 'currencyBrokerAmount',
			min: gameData.minBrokerApplicantAmount,
			max: gameData.maxBrokerApplicantAmount,
			multiplier: 1
		}, {
			name: 'currencyBrokerPrice',
			min: 1,
			max: 20,
			multiplier: 10000
		}
	],
	applicationVariables: 3,
	button: {
		unlockVariable: 'none',
		name: 'Broker',
		text: 'Currency Brokers'
	},
	onHire: function() {
		gameData.doesHaveCurrencyBroker = 1
		gameData.coinsToAlphaBar = 0
	}
},
{
	priceId: 'pie',
	price: 10,
	priceType: 'betaCoins',
	text: [
		["Pie Coin Wage"],
		["Beta Coin Wage"],
		["Charm"],
		["Max Wage Advances"],
		["Hire Price", "Beta Coins"]
	],
	variables: [
		{
			name: 'pieMerchantMaxPay',
			min: 1,
			max: 20,
			multiplier: 1
		}, {
			name: 'pieMerchantCharm',
			min: 0,
			max: 10 + gameData.wisdomUpgradepieleasantLevel,
			multiplier: 1
		}, {
			name: 'pieMerchantPieCoinPrice',
			min: 2,
			max: 20,
			multiplier: 1
		}, {
			name: 'pieApplicantPrice',
			min: 1,
			max: 20,
			multiplier: 10
		}, {
			name: 'pieMerchantBetaCoinPrice',
			min: 200 * gameData.pieApplicantBetaCoinPrice,
			max: 1000 * gameData.pieApplicantBetaCoinPrice,
			multiplier: 10
		}
	],
	applicationVariables: 3,
	button: {
		unlockVariable: 'advancedPieHiring',
		name: 'PieMerchant',
		text: 'Pie Merchants'
	},
	onHire: function() {
		gameData.doesHavePieMerchant = 1
	}
},
]
}