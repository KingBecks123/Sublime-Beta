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
	
	for (let i = 0; i < enlightenments.length; i++) {
		if (gameData.currentEnlightenment == enlightenments[i].id && eval(enlightenments[i].goal)) {
			didWin = true
			whatTask = 'enlightenmentCompletions' + enlightenments[i].id
		}
	}
    loadStuff(JSON.parse(localStorage.getItem('baseSublimeGameData')))
	
	if (didWin) {
		gameData.wisdom += 1
		gameData.allWisdom += 1
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
	if (gameData.enlightenmentUnlocked || gameData.maps < 5 || gameData.currentEnlightenment != 'none')
		hide('enlightenmentUnlockDiv')
	else
		show('enlightenmentUnlockDiv')
	
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
			update ('enlightenmentTask' + enlightenments[i].id + 'Text', 'Completions: ' + gameData['enlightenmentCompletions' + enlightenments[i].id] + ' / 25')
			update ('enlightenmentTask' + enlightenments[i].id + 'Goal', goalName(i))
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
		updateText = 'You are in the ' + enlightenments[i].name + ' task. Goal: ' + goalName(i) + '.'
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
	
	function goalAmountCalc(i) {
		return Math.pow(enlightenments[i].perCompletionDifficulty, gameData['enlightenmentCompletions' + enlightenments[i].id] + 1)
	}
	
	function goalName(i) {
		return enlightenments[i].goalName + goalAmountCalc(i).toLocaleString() + enlightenments[i].goalName2
	}
}

function addEnlightenments() {
	for (let i = 0; i < enlightenments.length; i++) {
		id = 'enlightenmentTask' + enlightenments[i].id
		
		addTo ($ ("<div />", {
			class: "basicDiv",
			id: id,
			style: 'width:360px;'
		}), 'allEnlightenmentTasks')

		add ($ ("<button />", {
			class: "enlightenmentButton",
			onclick: "select('enlightenment', '" + enlightenments[i].id + "')",
			id: 'enlightenmentButton' + enlightenments[i].id
		}))
		
		add ($ ("<p />", {
			class: "basicText",
			id: id + 'Goal'
		}))
		
		add ($ ("<p />", {
			class: "basicText",
			id: id + 'Text'
		}))
		
		add ($ ("<p />", {
			class: "basicText",
			id: id + 'FirstCompletion'
		}))
		
		add ($ ("<p />", {
			class: "basicText",
			id: id + 'PerCompletion'
		}))

		function add (x) {
			addTo (x, id)
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
		
		add ($ ("<button />", {
			class: "specialButton",
			style: "background-color:#FE99BB;",
			id: id + 'Button',
			onclick: "select('enlightenmentHinderance', '" + enlightenmentHinderances[i].id + "')",
		}))

		add ($ ("<p />", {
			class: "basicText",
			id: id + 'Text',
		}))
		
		add ($ ("<p />", {
			class: "basicText",
			id: id + 'Multiplier',
		}))
		
		function add (x) {
			addTo (x, id)
		}
		
		update (id + 'Button', enlightenmentHinderances[i].name)
		update (id + 'Text', enlightenmentHinderances[i].affect)
		update (id + 'Multiplier', 'Multiplier: ' + enlightenmentHinderances[i].multiplier + 'x')
	}
	for (let i = 0; i < wisdomUpgrades.length; i++) {
		id = wisdomUpgrades[i].id
		upgradeId = 'wisdomUpgrade' + id
		
		addTo ($ ("<Div />", {
			class: "basicDiv",
			id: 'wisdomUpgradeDiv' + id,
			style: 'width:360px;'
		}), 'allWidsomUpgrades')

		add ($ ("<button />", {
			class: "specialButton",
			style: "background-color:#99DEFF;",
			id: upgradeId + 'Button',
			onClick: "buyWisdomUpgrade('" + i + "')"
		}))
		
		add ($ ("<p />", {
			class: "basicText",
			id: upgradeId + 'Description'
		}))
		
		add ($ ("<p />", {
			class: "basicText",
			id: upgradeId + 'Price'
		}))
		
		add ($ ("<p />", {
			class: "basicText",
			id: upgradeId + 'Level'
		}))
		
		update (upgradeId + 'Button', wisdomUpgrades[i].name)
		update (upgradeId + 'Description', wisdomUpgrades[i].description)
		
		function add (x) {
			addTo (x, 'wisdomUpgradeDiv' + id)
		}
	}
}