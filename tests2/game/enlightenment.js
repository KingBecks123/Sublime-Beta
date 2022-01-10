wisdomUpgradesSaved = {}

function beginEnlightenment () {
	i = indexing ('enlightenments', 'enlightenmentSelected')
	k = indexing ('enlightenmentHinderances', 'enlightenmentHinderanceSelected')
	for (let j = 0; j < wisdomUpgrades.length; j++) {
		wisdomUpgradesSaved[wisdomUpgrades[j].id] = gameData['wisdomUpgrade' + wisdomUpgrades[j].id + 'Level']
		gameData['wisdomUpgrade' + wisdomUpgrades[j].id + 'Level'] = wisdomUpgradesSaved[wisdomUpgrades[j].id]
	}
	
	localStorage.setItem('baseSublimeGameData', JSON.stringify(gameData))
	ableToSave = false
	Object.assign(gameData, gameDataBase)
	
	gameData.currentEnlightenment = enlightenments[i].id
	gameData.currentEnlightenmentHinderance = enlightenmentHinderances[k].id			
	gameData.coins += gameData.wisdomUpgradecoinSafeLevel
	
	localStorage.setItem('mathAdventureSave', JSON.stringify(gameData))
	location.reload()
}

function quitEnlightenment (id) {
	didWin = false
	whatTask = ''
	
	i = indexing ('enlightenments', 'currentEnlightenment')
	j = indexing ('enlightenmentHinderances', 'currentEnlightenmentHinderance')

	if (enlightenments[i].goal()) {
		didWin = true
		whatTask = 'enlightenmentCompletions' + enlightenments[i].id + enlightenmentHinderances[j].id
	}
	
    loadStuff(JSON.parse(localStorage.getItem('baseSublimeGameData')))
	
	if (didWin) {
		gameData.wisdom += 1
		gameData.allWisdom += 1
		if (gameData[whatTask] == undefined)
			gameData[whatTask] = 1
		else
			gameData[whatTask] += 1
	}
}

function buyWisdomUpgrade (i) {
	name = 'wisdomUpgrade' + wisdomUpgrades[i].id
	if (gameData.wisdom >= gameData[name + 'Price'] && (gameData[name + 'Level'] < wisdomUpgrades[i].maxLevel || wisdomUpgrades[i].maxLevel == 'none')) {
		gameData.wisdom -= gameData[name + 'Price']
		gameData[name + 'Level'] += 1
		eval("gameData['wisdomUpgrade' + wisdomUpgrades[i].id + 'Price']" + wisdomUpgrades[i].priceIncrease)
	}
}

function respecWisdom (i) {
	gameData.wisdom = gameData.allWisdom
	for (let i = 0; i < wisdomUpgrades.length; i++) {
		gameData['wisdomUpgrade' + wisdomUpgrades[i].id + 'Level'] = 0
		gameData['wisdomUpgrade' + wisdomUpgrades[i].id + 'Price'] = wisdomUpgrades[i].initialPrice
	}
}

function buyWisdom (id) {
	price = 'buyWisdom' + jsUcfirst(id) + 'Price'
	if (gameData[id] > gameData[price]) {
		gameData[id] -= gameData[price]
		gameData[price] *= 2
		gameData.wisdom += 1
		gameData.allWisdom += 1
	}
}

function updateEnlightenmentStuff() {
	if (gameData.currentEnlightenment == 'none') {
		for (let i = 0; i < enlightenments.length; i ++) {
			level = gameData['enlightenmentCompletions' + enlightenments[i].id + gameData.enlightenmentHinderanceSelected]
			if (level == undefined)
				level = 0

			update ('enlightenmentTask' + enlightenments[i].id + 'Text', 'Completions: ' + level)
			update ('enlightenmentTask' + enlightenments[i].id + 'Goal', goalName(i, level))
		}
		colorChanger('newInfoBox', '#bfbfbf')
	}
	else {
		i = indexing ('enlightenments', 'currentEnlightenment')
		
		level = gameData['enlightenmentCompletions' + gameData.currentEnlightenment + gameData.enlightenmentHinderanceSelected]
		if (level == undefined)
			level = 0
		
		updateText = 'You are in the ' + enlightenments[i].name + ' task. Goal: ' + goalName(i, level) + '.'
		colorChanger('newInfoBox', '#FF99FF')
		goalAmount = goalAmountCalc(i)
		
		if (enlightenments[i].goal) {
			update ('newInfoEnlightenment', updateText + ' Completed!')
			colorChanger ('quitEnlightenment', '#4DFE89')
		}
		else {
			update ('newInfoEnlightenment', updateText)
			colorChanger ('quitEnlightenment', '#FF999A')
		}
	}
	
	for (let i = 0; i < enlightenments.length; i++) {
		x = 'enlightenmentTask' + enlightenments[i].id
		if (gameData.enlightenmentSelected == enlightenments[i].id)
			borderShadow (x)
		else
			borderShadow (x, '')
	}
	
	for (let i = 0; i < wisdomUpgrades.length; i++) {
		id = wisdomUpgrades[i].id
		priceText = 'Price: ' + gameData['wisdomUpgrade' + id + 'Price'] + ' Wisdom'
		levelText = ' / ' + wisdomUpgrades[i].maxLevel
		
		if (gameData['wisdomUpgrade' + id + 'Level'] == wisdomUpgrades[i].maxLevel)
			priceText = 'Maxed!'
		
		if (wisdomUpgrades[i].maxLevel == 'none')
			levelText = ''
		
		update ('wisdomUpgrade' + id + 'Price', priceText)
		update ('wisdomUpgrade' + id + 'Level', 'Current Level: ' + gameData['wisdomUpgrade' + id + 'Level'] + levelText)
	}
	
	for (let i = 0; i < enlightenmentHinderances.length; i++) {
		hinderance = 'enlightenmentHinderance' + enlightenmentHinderances[i].id
		if (gameData.enlightenmentHinderanceSelected == enlightenmentHinderances[i].id) {
			wisdomToEarnAmount = enlightenmentHinderances[i].multiplier
			borderShadow (hinderance)
		}
		else
			borderShadow (hinderance, '')
	}
	
	if (gameData.enlightenmentHinderanceSelected == 'none')
		wisdomToEarnAmount = 1
	
	if (gameData.enlightenmentSelected == 'none') {
		colorChanger('beginEnlightenmentButton', '#898989')
		hide('wisdomToEarnAmount')
	}
	else {
		colorChanger('beginEnlightenmentButton', '#4DFE89')
		show('wisdomToEarnAmount')
	}

	if (gameData.wisdomUpgradebuyAWellLevel)
		gameData.forestWell = 1
	
	function goalAmountCalc(i, level) {
		return Math.pow(enlightenments[i].perCompletionDifficulty, level + 1)
	}
	
	function goalName(i, level) {
		return enlightenments[i].goalName + goalAmountCalc(i, level).toLocaleString() + enlightenments[i].goalName2
	}
}