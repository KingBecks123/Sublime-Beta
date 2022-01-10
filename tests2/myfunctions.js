function importGame() {
	var savegame = JSON.parse(atob(prompt("Import Code: ")))
	if (savegame !== null) {
		loadStuff(savegame)
		saveGame()
		location.reload();
	}
}

function loadStuff(savegame) {
	Object.assign(gameData, gameDataBase)
	if (savegame !== null) {
		Object.assign(gameData, savegame)
		gameData.serf = JSON.parse(JSON.stringify(gameDataBase.serf))
		Object.assign(gameData.serf, savegame.serf)

		backwardsCompatibility(gameData.versionNumber)
		gameData.versionNumber = 184
	} else
		update("newInfo", "Save File Empty.")
}

function saveGame() {
	if (ableToSave)
		localStorage.setItem('mathAdventureSave', JSON.stringify(gameData))
}

function resetGame() {
	if (window.prompt("Are you sure? Type 'yes' if you are") == "yes") {
		ableToSave = false
		Object.assign(gameData, gameDataBase)
		localStorage.setItem('mathAdventureSave', JSON.stringify(gameData))
		location.reload()
	}
}

function setRotation(id, number) {
	document.getElementById(id).style.transform = 'rotate(' + number + 'deg)'
}

function hide(x) {
	document.getElementById(x).style.display = 'none'
}

function show(x, id) {
	if (id == 'inline')
		document.getElementById(x).style.display = 'inline-block'
	else
		document.getElementById(x).style.display = 'block'
}

function pin(x) {
	if (gameData.pin == x && gameData.pin !== "none")
		gameData.pin = "none"
	else
		gameData.pin = x
	normalizeButtons()
}

function normalizeButtons() {
	var x = document.getElementById("deliveryButton")
	$(".juiceMarket").prepend(x)
	x.style.width = "120px"
	x.style.margin = "5px"

	x = document.getElementById("autoCollectingButton")
	$(".autoCollectingDiv").prepend(x)
	x.style.width = "150px"
	x.style.margin = "5px"
	
	if (gameData.pin !== "none") {
		var x = document.getElementById(gameData.pin)
		$(".navigateButtons").append(x)

		x.style.width = "120px"
		x.style.margin = "0px"
		x.style.padding = "0px"
	}
}

function pickCurrentTask(x) {
	taskOne = gameData.currentTask
	taskTwo = gameData.currentTask2

	if (!event.shiftKey && gameData.toggleActions) {
		if (gameData.ambidextrousSkillLevel == gameData.ambidextrousSkillLevelMax) {
			
			if (taskOne == x)
				gameData.currentTask = "none"
			else if (taskTwo == x)
				gameData.currentTask2 = "none"
			
			else if (taskOne == "none" && taskTwo !== x) {
				if (!((taskTwo == 'makeJuice' && x == 'makeMaxJuice') || (taskTwo == 'makeMaxJuice' && x == 'makeJuice') || (taskTwo == 'usePeelers' && x == 'useMaxPeelers') || (taskTwo == 'useMaxPeelers' && x == 'usePeelers')))
					gameData.currentTask = x
			} 
			
			else if (taskTwo == "none") {
				if (!((taskOne == 'makeJuice' && x == 'makeMaxJuice') || (taskOne == 'makeMaxJuice' && x == 'makeJuice') || (taskOne == 'usePeelers' && x == 'useMaxPeelers') || (taskOne == 'useMaxPeelers' && x == 'usePeelers')))
					gameData.currentTask2 = x
			}
		} 
		else {
			if (taskOne == x)
				gameData.currentTask = "none"
			else
				gameData.currentTask = x
		}
	} else
		startCurrentTask(x)
}

function startCurrentTask(x) {
	if (x !== 'none') {
		if (x == 'eat')
			barsobj[0].start()
		else if (x == 'peelerPeel')
			barsobj[9].start('one')
		else if (x == 'peelerPeelMax')
			barsobj[9].start('all')
		else if (x == 'makeJuice')
			barsobj[10].start('one')
		else if (x == 'makeMaxJuice')
			barsobj[10].start('all')
		else if (x == 'delivery')
			barsobj[11].start()
		else if (x == 'coinsToAlphaClick')
			barsobj[13].start()
		else if (x == 'alphaToBetaClick')
			barsobj[14].start()
		else if (x == 'findPieCustomers')
			barsobj[15].start()
		else if (x == 'scavenge')
			barsobj[18].start()
		else
			eval(x + '()')
	}
}

function toggle(x) {
	if (gameData[x])
		gameData[x] = 0
	else
		gameData[x] = 1
}

function universalBuy(id, price, currency) {
	if (currency == undefined)
		currency = 'coins'

	if (gameData[currency] >= price) {
		gameData[currency] -= price
		gameData[id] += 1
	}
}

function bulkableBuyMax(x, price) {
	max = gameData[x + 'Max']
	if (gameData[x + 'BulkToggle'] == 0) {
		amount = 1
	} else {
		if (gameData.bulkBuyUnlock2)
			amount = 100
		else
			amount = 10
	}
	if (gameData.coins >= price * amount) {
		if (gameData[x] <= max - amount) {
			gameData.coins -= price * amount
			gameData[x] += amount
		} else {
			gameData.coins -= price * (max - gameData[x])
			gameData[x] = max
		}
	}
}

// returns a random integer from 1 to X
function beckyRandom(max) {
	return Math.floor(Math.random() * max) + 1;
}

// returns a random integer from X to Y
function beckyRandomMinMax(min, max) {
	return Math.floor(Math.random() * (max - min)) + min;
}

hasUpdatedObj = {}

function update(id, content) {
	stringy = id.replace(/[()-]/g, 'uwu')
	if (typeof hasUpdatedObj[stringy] == undefined)
		hasUpdatedObj[stringy] = 'noneOwO'
	if (hasUpdatedObj[stringy] != content) {
		document.getElementById(id).innerHTML = content
		hasUpdatedObj[stringy] = content
	}
}

function currencyDisplay(id) {
	variable = mainVariables[id].id + 'ShowVariable'
	if (gameData[variable])
		gameData[variable] = false
	else
		gameData[variable] = true
}

function jsUcfirst(string) {
	return string.charAt(0).toUpperCase() + string.slice(1);
}

function divVisibility(id, display) {
	document.getElementById(id).style.visibility = display;
}

function colorChanger(id, content) {
	document.getElementById(id).style.backgroundColor = content;
}

function increaseValue(id) {
	if (gameData[id] < gameData[id + 'Max'] || gameData[id + 'Max'] == null)
		gameData[id] += 1
}

function decreaseValue(id) {
	if (gameData[id] >= 1)
		gameData[id] -= 1
}

function showOrHide(i, txt, type) {
	if (type == 'visible') {
		if (i)
			divVisibility(txt, type)
		else
			divVisibility(txt, "hidden")
	}
	else {
		if (type == 'inline')
			type = 'inline-block'
		else
			type = 'block'
		if (i)
			document.getElementById(txt).style.display = type
		else
			hide(txt)
	}
}

function setValue(id, amount) {
	gameData[id] = amount
}

function invert (id) {
	if (eval(id))
		eval(id + '= false')
	else
		eval(id + '= true')
}

function addTo(e, where) {
	$(document.getElementById(where)).append(e)
}

function select (what, id) {
	if (gameData[what + 'Selected'] == id)
		gameData[what + 'Selected'] = 'none'
	else
		gameData[what + 'Selected'] = id
}

function border (id, x) {
	if (x == '')
		document.getElementById(id).style.border = x
	else
		document.getElementById(id).style.border = '2px solid white'
}

function borderShadow (id, x) {
	if (x == '')
		document.getElementById(id).style.boxShadow = 'inset 0px 0px 0px 0px #FFFFFF'
	else
		document.getElementById(id).style.boxShadow = 'inset 0px 0px 0px 2px #FFFFFF'
}

function setImage (id, x) {
	document.getElementById(id).src = "images/" + x + ".png"
}

function indexing (id, variable) {
	for (let i = 0; i < id.length; i ++) {
		if (eval(id + '[i].id') == gameData[variable])
			return i
	}
}

function smartChange (id, x, limit) {
	if (limit == undefined)
		limit = infinity
	
	if (x >= 0) {
		if (gameData[id] + x <= limit)
			gameData[id] += x
	}
	else if (gameData[id] - x >= 0)
		gameData[id] -= x
}

function backwardsCompatibility(versionNumber) {
	if (gameData.pin == 'sellYourJuiceButton')
		gameData.pin = 'deliveryButton'
	
	if (gameData.versionNumber < 142) {
		gameData.currentTask = 'none'
		gameData.currentTask2 = 'none'
	}
	if (gameData.versionNumber < 181) {
		gameData.forestWell = 0
		gameData.pieCoinsInWell = 0
	}
	if (gameData.versionNumber < 182)
		gameData.currencyBrokerAmount = gameData.currencyBrokerTransferAmount
	
	if (gameData.versionNumber < 183)
		gameData.basicApplicantPrice = gameData.applicantPrice
	
	if (gameData.versionNumber < 184) {
		gameData.employeeSpeedOnApplication = gameData.applicantSpeed
		gameData.employeeWageOnApplication = gameData.applicantWage
		gameData.employeeHungerOnApplication = gameData.applicantHunger
		gameData.currencyBrokerFeeOnApplication = gameData.currencyApplicantFee
		gameData.currencyBrokerSpeedOnApplication = gameData.currencyApplicantSpeed
		gameData.currencyBrokerPriceOnApplication = gameData.currencyApplicantPrice
		gameData.currencyBrokerAmountOnApplication = gameData.currencyApplicantTransferAmount
		gameData.pieMerchantPieCoinPriceOnApplication = gameData.pieApplicantPieCoinPrice
		gameData.pieMerchantBetaCoinPriceOnApplication = gameData.pieApplicantBetaCoinPrice
		gameData.pieMerchantMaxPayOnApplication = gameData.pieApplicantMaxPay
		gameData.pieMerchantCharmOnApplication = gameData.pieApplicantCharm
	}
}