scavengeItems = [
	{
		name: 'Lime',
		symbol: 'O',
		backgroundColor: '#4DFE89',
		weight: 20,
		type: 'resource',
		description: '',
		onCollection: 'gameData.limes += 1',
	},
	{
		name: 'Limes',
		symbol: 'OO',
		backgroundColor: '#4DFE89',
		weight: 10,
		type: 'resource',
		description: '',
		onCollection: 'gameData.limes += 2',
	},
	{
		name: 'Nutrition',
		symbol: 'R',
		backgroundColor: '#884DFF',
		weight: 5,
		type: 'ring',
		powerLevelRange: 20,
		description: 'Increases auto collect length by ',
		description2: ' seconds',
		onCollection: '',
	},
	{
		name: 'Nutrition Rate',
		symbol: 'R',
		backgroundColor: '#884DFF',
		weight: 5,
		type: 'ring',
		powerLevelRange: 2,
		description: 'Increases auto collect rate by ',
		description2: ' per second',
		onCollection: '',
	},
	{
		name: 'Smart Seller',
		symbol: 'R',
		backgroundColor: '#884DFF',
		weight: 5,
		type: 'ring',
		description: 'Stops delivering juice once coins have reached the maximum',
		onCollection: '',
	},
]

function scavenge() {
    if(canStartBar('scavenge'))
	{
		gameData.scavengeBar = 0
		scavengeBar()
	}
}

function scavengeBar() {
	barMoverAdvanced('scavenge', 0.1, 50)
}

function scavengeBarEnd() {
	hasAddedSomething = false
	hasFoundEmptyTile = false
	for (let i = 0; i < gameData.scavengeLoot.length && hasFoundEmptyTile == false; i++) {
		if(gameData.scavengeLoot[i].name == 'empty')
		{
			hasFoundEmptyTile = true
			totalWeight = 0
			
			for (let j = 0; j < scavengeItems.length; j++) {
				totalWeight += scavengeItems[j].weight
			}
			
			totalWeight = beckyRandom(totalWeight)
			
			for (let j = 0; j < scavengeItems.length && !hasAddedSomething; j++) {
				totalWeight -= scavengeItems[j].weight
				if (totalWeight < 0) { 
					gameData.scavengeLoot[i].name = scavengeItems[j].name
					if (scavengeItems[j].type == 'ring')
						gameData.scavengeLoot[i].powerLevel = beckyRandom(scavengeItems[j].powerLevelRange)
					else
						gameData.scavengeLoot[i].powerLevel = 0
					hasAddedSomething = true
				}
			}	
		}
	}
	updateScavengeTileAesthetic()
}

function updateScavengeStuff() {
	if (gameData.scavengeLootSelected >= 0)
		showBasicDiv('scavengeAbilities')
	else
		hide('scavengeAbilities')
}

function selectScavengedLoot(i) {
	if (gameData.scavengeLootSelected == i)
		gameData.scavengeLootSelected = -1
	else
		gameData.scavengeLootSelected = i
	
	updateScavengeTileAesthetic()
}

function updateScavengeTileAesthetic() {
	couldUpdateDescription = false
	for (let i = 0; i < gameData.scavengeLoot.length; i++) {
		document.getElementById('scavengeLoot' + i).style.border = ''

		if(gameData.scavengeLoot[i].name == 'empty')
		{
			update('scavengeLoot' + i, '‎‎‎‏‏‎ ‎')
			colorChanger('scavengeLoot' + i, '#66361F')
		}
		for (let j = 0; j < scavengeItems.length; j++) {
			if (scavengeItems[j].name == gameData.scavengeLoot[i].name)
			{
				update('scavengeLoot' + i, scavengeItems[j].symbol)
				colorChanger('scavengeLoot' + i, scavengeItems[j].backgroundColor)
				
				if(gameData.scavengeLootSelected == i)
				{
					show('scavengeName')
					update('scavengeName', scavengeItems[j].name)
					if (scavengeItems[j].description == '')
						hide('scavengeDescription')
					else
					{
						show('scavengeDescription')
						if (scavengeItems[j].type == 'resource')
							update('scavengeDescription', scavengeItems[j].description)
						else
							ringDescription(j, i)
					}
					
					couldUpdateDescription = true
				}
			}
		}
	}
	
	if (couldUpdateDescription == false) {
		hide('scavengeName')
		hide('scavengeDescription')
	}
	
	if (gameData.scavengeLootSelected >= 0)
		border ('scavengeLoot' + gameData.scavengeLootSelected)
	
	if (gameData.scavengeLootSelected == 'ring')
	{
		border ('scavengeRingSlot')
		update('scavengeDescription', gameData.scavengeRing + gameData.scavengeRingPowerLevel)
		show('scavengeDescription')

		for (let j = 0; j < scavengeItems.length; j++) {
			if (scavengeItems[j].name == gameData.scavengeRing)
				ringDescription(j)
		}
	}
	else
	{
		border ('scavengeRingSlot', '')
	}
	
	if (gameData.scavengeRing == 'empty')
	{
		document.getElementById('scavengeRingSlot').style.backgroundColor = '#BBBBBB'
		document.getElementById('scavengeRingSlot').style.color = '#898989'
	}
	else
	{
		document.getElementById('scavengeRingSlot').style.backgroundColor = '#884DFF'
		document.getElementById('scavengeRingSlot').style.color = '#000000'
	}


	function ringDescription(j, i) {
		description = scavengeItems[j].description
		
		if (i == undefined) {
			if (typeof gameData.scavengeRingPowerLevel == Number)
				description += gameData.scavengeRingPowerLevel
		}
		else if (scavengeItems[j].powerLevel !== undefined)
			description += gameData.scavengeLoot[i].powerLevel
		
		if (scavengeItems[j].description2 !== undefined)
			description += scavengeItems[j].description2
			
		update('scavengeDescription', description)
	}
}

function scavengeThrowAway() {
	gameData.scavengeLoot[gameData.scavengeLootSelected] = {name:'empty'}
	updateScavengeTileAesthetic()
}

function scavengeAddToInventory() {
	for (let i = 0; i < scavengeItems.length; i++) {
		if (gameData.scavengeLoot[gameData.scavengeLootSelected].name == scavengeItems[i].name)
		{
			if (scavengeItems[i].type == 'ring')
			{
				gameData.scavengeRing = scavengeItems[i].name
				gameData.scavengeRingPowerLevel = gameData.scavengeLoot[gameData.scavengeLootSelected].powerLevel
			}
			else
				eval(scavengeItems[i].onCollection)
			gameData.scavengeLoot[gameData.scavengeLootSelected].name = 'empty'
		}
	}
	updateScavengeTileAesthetic()
}