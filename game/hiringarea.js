function hireApplicant() {
	setApplicationData()
	id = applicationType[gameData.applicationType]
	if (gameData.applicationReady && gameData[id.priceType] >= id.price) {
		gameData[id.priceType] -= gameData[id.priceId + 'ApplicantPrice']
		gameData.applicationReady = 0
		id.onHire()
		for (let i = 0; i < applicationType[gameData.typeToHire].applicationVariables; i++) {
			value = applicationType[gameData.typeToHire].variables[i].name
			gameData[value] = gameData[value + 'OnApplication']
		}
	}
}

function buyAdvertisingManager() {
	if (gameData.alphaCoins >= 10) {
		gameData.alphaCoins -= 10
		gameData.advertisingManagerBroker = 1
	}
}

function advertise() {
	if (canStartBar('advertise') && gameData[gameData.advertisePriceType] >= gameData.advertisePrice) {
		gameData[gameData.advertisePriceType] -= gameData.advertisePrice
		gameData.typeToHire = gameData.typeToHireToggle
		gameData.advertiseBar = 0
		advertiseBar()
	}
}

function advertiseBar() {
	barMoverAdvanced('advertise', 0.5, 100 / (gameData.advertisingLevel2 * 2 * gameData.advertisingLevel3 + gameData.advertisingLevel2 + 2 * gameData.advertisingLevel3 + 1))
}

function advertiseBarEnd() {
	gameData.applicationReady = 1
	gameData.hasAdvertised = 1
	setApplicationData ()
	if (applicationType[gameData.typeToHire].onAdvertised != undefined)
		x = applicationType[gameData.typeToHire].onAdvertised()

	if (x != true) {
		for (let i = 0; i < applicationType[gameData.typeToHire].variables.length; i++) {
			id = applicationType[gameData.typeToHire].variables[i]
			gameData[id.name + 'OnApplication'] = Math.floor(Math.random() * id.max + id.min) * id.multiplier
		}
	}
	gameData.applicationType = gameData.typeToHire
}

function updateHiringArea() {
	setApplicationData ()
	if (gameData.applicationReady) {
		applicationTextTotal = ''
		for (let i = 0; i < applicationType[gameData.applicationType].text.length; i++) {
			id = applicationType[gameData.applicationType]
			applicationTextTotal += id.text[i][0] + ': ' + gameData[id.variables[i].name + 'OnApplication'].toLocaleString()
			if (id.text[i][1] != undefined)
				applicationTextTotal += ' ' + id.text[i][1]
			applicationTextTotal += '<br>'
		}
		update("application", "<br>" + applicationTextTotal + "<br>")
	}
	gameData.advertisePrice = applicationType[gameData.typeToHireToggle].price
	gameData.advertisePriceType = applicationType[gameData.typeToHireToggle].priceType
}

function addHiringAreaButtons () {
	setApplicationData ()
	for (let i = 0; i < applicationType.length; i++) {
		id = "hire" + applicationType[i].button.name + "ToggleButton"
		addTo ($ ("<button />", {
			onclick: "setValue('typeToHireToggle', " + i + ")",
			class: "basicButtonSize",
			id: id,
			style: 'width:170px;display:none;'
		}), 'hireToggleButtons')
		update(id, applicationType[i].button.text)
		
		if (applicationType[i].button.unlockVariable == 'none')
			show(id, 'inline')
		else if (gameData[applicationType[i].button.unlockVariable])
			show(id, 'inline')
	}
}