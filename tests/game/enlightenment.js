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

	if (eval(enlightenments[i].goal)) {
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
	

	
	if (gameData.enlightenmentTaskShown) {
		hide('allEnlightenmentTask')
		update('allEnlightenmentTaskVis', 'Show Enlightenment Task')
	}
	else {
		if (gameData.enlightenmentUnlocked)
			show('allEnlightenmentTask')
		else
			hide('allEnlightenmentTask')
		
		update('allEnlightenmentTaskVis', 'Hide Enlightenment Task')
	}
	
	if (gameData.enlightenmentUnlocked)
		show('allEnlightenmentTaskVis')
	else
		hide('allEnlightenmentTaskVis')
	
	if (gameData.currentEnlightenment == 'none') {
		for (let i = 0; i < enlightenments.length; i ++) {
			level = gameData['enlightenmentCompletions' + enlightenments[i].id + gameData.enlightenmentHinderanceSelected]
			if (level == undefined)
				level = 0

			update ('enlightenmentTask' + enlightenments[i].id + 'Text', 'Completions: ' + level)
			update ('enlightenmentTask' + enlightenments[i].id + 'Goal', goalName(i, level))
		}
		hide ('quitEnlightenment')
		hide ('newInfoEnlightenment')
		show ('newInfo', 'inline')
		colorChanger('newInfoBox', '#bfbfbf')
	}
	else {
		i = indexing ('enlightenments', 'currentEnlightenment')
		show ('quitEnlightenment', 'inline')
		show ('newInfoEnlightenment', 'inline')
		hide ('newInfo')
		
		level = gameData['enlightenmentCompletions' + gameData.currentEnlightenment + gameData.enlightenmentHinderanceSelected]
		if (level == undefined)
			level = 0
		
		updateText = 'You are in the ' + enlightenments[i].name + ' task. Goal: ' + goalName(i, level) + '.'
		colorChanger('newInfoBox', '#FF99FF')
		goalAmount = goalAmountCalc(i)
		
		if (eval(enlightenments[i].goal)) {
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
	
	update('buyWisdomPieCoins', 'Buy 1 Wisdom For ' + gameData.buyWisdomPieCoinsPrice.toLocaleString() + ' Pie Coins')	
	update('buyWisdomBetaCoins', 'Buy 1 Wisdom For ' + gameData.buyWisdomBetaCoinsPrice.toLocaleString() + ' Beta Coins')
	update('buyWisdomRespect', 'Buy 1 Wisdom For ' + gameData.buyWisdomRespectPrice.toLocaleString() + ' Respect')
	update('wisdomToEarnAmount', 'You will earn ' + wisdomToEarnAmount + ' Wisdom')

	if (gameData.wisdomUpgradebuyAWellLevel)
		gameData.forestWell = 1
	
	function goalAmountCalc(i, level) {
		return Math.pow(enlightenments[i].perCompletionDifficulty, level + 1)
	}
	
	function goalName(i, level) {
		return enlightenments[i].goalName + goalAmountCalc(i, level).toLocaleString() + enlightenments[i].goalName2
	}
}

enlightenmentColumns = {
	enlightenmentTexts: [
		'Goal', 'Text', 'FirstCompletion', 'PerCompletion'
	],
	hinderanceTexts: [
		'Text', 'Multiplier'
	],
	wisdomTexts: [
		'Description', 'Price', 'Level'
	],
}

function addEnlightenments() {
	for (let i = 0; i < enlightenments.length; i++) {
		id = 'enlightenmentTask' + enlightenments[i].id
		
		addTo ($ ("<div />", {
			class: "basicDiv",
			id: id,
			style: 'width:360px;'
		}), 'allEnlightenmentTasks')

		addTo ($ ("<button />", {
			class: "enlightenmentButton",
			onclick: "select('enlightenment', '" + enlightenments[i].id + "')",
			id: 'enlightenmentButton' + enlightenments[i].id
		}), id)

		
		for (let j = 0; j < enlightenmentColumns.enlightenmentTexts.length; j++) {
			addText (id + enlightenmentColumns.enlightenmentTexts[j], id)
		}
		
		update ('enlightenmentButton' + enlightenments[i].id, enlightenments[i].name)
		
		thisTask = 'enlightenmentTask' + enlightenments[i].id
		
		if (enlightenments[i].firstCompletionName == 'none')
			hide (thisTask + 'FirstCompletion')
		else
			update (thisTask + 'FirstCompletion', 'First completion reward: ' + enlightenments[i].firstCompletionName)
		
		if (enlightenments[i].perCompletionName == 'none')
			hide (thisTask + 'PerCompletion')
		else
			update (thisTask + 'PerCompletion', 'Per completion reward: ' + enlightenments[i].perCompletionName)
	}
	for (let i = 0; i < enlightenmentHinderances.length; i++) {
		id = 'enlightenmentHinderance' + enlightenmentHinderances[i].id
		
		addTo ($ ("<div />", {
			class: "basicDiv",
			id: id,
			style: 'width:360px;'
		}), 'allEnlightenmentHinderances')
		
		addTo ($ ("<button />", {
			class: "specialButton",
			style: "background-color:#FE99BB;",
			id: id + 'Button',
			onclick: "select('enlightenmentHinderance', '" + enlightenmentHinderances[i].id + "')",
		}), id)
	
		for (let j = 0; j < enlightenmentColumns.hinderanceTexts.length; j++) {
			addText (id + enlightenmentColumns.hinderanceTexts[j], id)
		}
		
		update (id + 'Button', enlightenmentHinderances[i].name)
		update (id + 'Text', enlightenmentHinderances[i].affect)
		update (id + 'Multiplier', 'Multiplier: ' + enlightenmentHinderances[i].multiplier + 'x')
	}
	for (let i = 0; i < wisdomUpgrades.length; i++) {
		id = 'wisdomUpgrade' + wisdomUpgrades[i].id
		
		addTo ($ ("<Div />", {
			class: "basicDiv",
			id: id + 'Div',
			style: 'width:360px;'
		}), 'allWidsomUpgrades')

		addTo ($ ("<button />", {
			class: "specialButton",
			style: "background-color:#99DEFF;",
			id: id + 'Button',
			onClick: "buyWisdomUpgrade('" + i + "')"
		}), id + 'Div')
	
		
		for (let j = 0; j < enlightenmentColumns.wisdomTexts.length; j++) {
			addText (id + enlightenmentColumns.wisdomTexts[j], id + 'Div')
		}
		
		update (id + 'Button', wisdomUpgrades[i].name)
		update (id + 'Description', wisdomUpgrades[i].description)

	}
	
	function addText (id, where) {
		addTo ($ ("<p />", {
			class: "basicText",
			id: id
		}), where)
	}
}