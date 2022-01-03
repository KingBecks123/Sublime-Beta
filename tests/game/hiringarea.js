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