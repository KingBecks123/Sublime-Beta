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

		if (gameData.scavengeLoot[i].name == 'empty') {
			update('scavengeLoot' + i, '‎‎‎‏‏‎ ‎')
			colorChanger('scavengeLoot' + i, '#66361F')
		}
		
		for (let j = 0; j < scavengeobj.length; j++) {
			if (scavengeobj[j].name == gameData.scavengeLoot[i].name) {
				update('scavengeLoot' + i, scavengeobj[j].symbol)
				colorChanger('scavengeLoot' + i, scavengeobj[j].backgroundColor)
				
				if (gameData.scavengeLootSelected == i) {
					show('scavengeName')
					update('scavengeName', scavengeobj[j].name)
					if (scavengeobj[j].description == '')
						hide('scavengeDescription')
					else {
						show('scavengeDescription')
						if (scavengeobj[j].type == 'resource')
							update('scavengeDescription', scavengeobj[j].description)
						else
							ringDescription(j, i)
					}
					couldUpdateDescription = true
				}
			}
		}
	}
	
	if (!couldUpdateDescription) {
		hide('scavengeName')
		hide('scavengeDescription')
	}
	
	if (gameData.scavengeLootSelected >= 0)
		border ('scavengeLoot' + gameData.scavengeLootSelected)
	
	if (gameData.scavengeLootSelected == 'ring') {
		border ('scavengeRingSlot')
		update('scavengeDescription', gameData.scavengeRing + gameData.scavengeRingPowerLevel)
		show('scavengeDescription')

		for (let j = 0; j < scavengeobj.length; j++) {
			if (scavengeobj[j].name == gameData.scavengeRing)
				ringDescription(j)
		}
	}
	else
		border ('scavengeRingSlot', '')
	
	if (gameData.scavengeRing == 'empty') {
		ringSlotBackground = '#BBBBBB'
		ringSlotText = '#898989'
	}
	else {
		ringSlotBackground = '#884DFF'
		ringSlotText = '#000000'
	}
	
		document.getElementById('scavengeRingSlot').style.backgroundColor = ringSlotBackground
		document.getElementById('scavengeRingSlot').style.color = ringSlotText


	function ringDescription(j, i) {
		description = scavengeobj[j].description
		
		if (i == undefined) {
			if (typeof gameData.scavengeRingPowerLevel == Number)
				description += gameData.scavengeRingPowerLevel
		}
		else if (scavengeobj[j].powerLevel !== undefined)
			description += gameData.scavengeLoot[i].powerLevel
		
		if (scavengeobj[j].description2 !== undefined)
			description += scavengeobj[j].description2
			
		update('scavengeDescription', description)
	}
}

function scavengeThrowAway() {
	gameData.scavengeLoot[gameData.scavengeLootSelected] = {name:'empty'}
	updateScavengeTileAesthetic()
}

function scavengeAddToInventory() {
	for (let i = 0; i < scavengeobj.length; i++) {
		if (gameData.scavengeLoot[gameData.scavengeLootSelected].name == scavengeobj[i].name) {
			if (scavengeobj[i].type == 'ring') {
				gameData.scavengeRing = scavengeobj[i].name
				gameData.scavengeRingPowerLevel = gameData.scavengeLoot[gameData.scavengeLootSelected].powerLevel
			}
			else
				eval(scavengeobj[i].onCollection)
			gameData.scavengeLoot[gameData.scavengeLootSelected].name = 'empty'
		}
	}
	updateScavengeTileAesthetic()
}