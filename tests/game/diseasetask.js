function startSimulation() {
	if (gameData.civiliansPlaced == gameData.civiliansTotal) {
		for (x = 0; x < 5; x++) {
			for (y = 0; y < 5; y++) {
				if (gameData.diseaseArray[x][y] == 1 || gameData.diseaseArray[x][y] == 3) {
					for (xSpread = x - 1; xSpread < x + 2; xSpread++) {
						for (ySpread = y - 1; ySpread < y + 2; ySpread++) {
							if ((xSpread < 5 && xSpread >= 0 && ySpread < 5 && ySpread >= 0) && !(x == xSpread && y == ySpread)) {
								if (gameData.diseaseArray[xSpread][ySpread] == 0)
									gameData.diseaseArray[xSpread][ySpread] = 2
								else if (gameData.diseaseArray[xSpread][ySpread] == 1)
									gameData.diseaseArray[xSpread][ySpread] = 3
							}
						}
					}
				}
			}
		}
		gameData.simulationTime = 1
		if (gameData.autoCheckSimulation)
			checkResults()
		else
			updateMapTileAesthetic()
	}
}

function diseaseControlQuit() {
	diseaseControlFailed = 1
	countPoints(1)
}

function checkResults() {
	if (gameData.civiliansPlaced == gameData.civiliansTotal && gameData.simulationTime) {
		diseaseControlFailed = 0
		for (x = 0; x < diseaseArrayDimensions; x++) {
			for (y = 0; y < diseaseArrayDimensions; y++) {
				if (gameData.diseaseArray[x][y] == 3)
					diseaseControlFailed = 1
			}
		}
		countPoints(diseaseControlFailed)
	}
}

function countPoints(diseaseControlFailed) {
	if (gameData.limeDiseaseLakesSet < 10)
		benevolenceRespectIncrease = 0
	else
		benevolenceRespectIncrease = (Math.pow(2, gameData.limeDiseaseLakesSet - 10)) * gameData.benevolence
	
	if (gameData.benevolenceToggle)
		points = gameData.limeDiseaseLakesSet + 1 + benevolenceRespectIncrease + gameData.respectBillboard
	else
		points = gameData.limeDiseaseLakesSet + 1 + gameData.respectBillboard

	points += gameData.wisdomUpgradecriticalAcclaimLevel
	
	if (diseaseControlFailed) 
		gameData.respect -= points
	else
		gameData.respect += points

	gameData.diseaseControlFinished = 1
	
	diseaseControlReset()
	
	if (gameData.autoStartTask)
		diseaseControlTask()
	
	updateMapTileAesthetic()
}

function mapTile(x, y) {
	if (!gameData.diseaseControlFinished) {
		if (gameData.diseaseArray[x][y] == 0 && gameData.civiliansPlaced < gameData.civiliansTotal) {
			gameData.diseaseArray[x][y] = 1
			gameData.civiliansPlaced += 1
		} else if (gameData.diseaseArray[x][y] == 1) {
			gameData.diseaseArray[x][y] = 0
			gameData.civiliansPlaced -= 1
		}
	}
	
	if (gameData.autoStartSimulation)
		startSimulation()

	updateMapTileAesthetic()
}

function diseaseControlTask() {

	if (gameData.diseaseControlFinished) {
		gameData.diseaseControlFinished = 0
		gameData.civiliansTotal = beckyRandom(4)
		tiles = gameData.numberOfTiles - 16
		gameData.limeDiseaseLakesSet = gameData.limeDiseaseLakes

		for (gameData.limeDiseaseLakesCurrent = 0; gameData.limeDiseaseLakesCurrent < gameData.limeDiseaseLakes; gameData.limeDiseaseLakesCurrent) {

			x = beckyRandom(5) - 1
			y = beckyRandom(5) - 1

			if (((x < 4 && y < 4) || (x == 4 && y < tiles)) && gameData.diseaseArray[x][y] !== 4) {
				gameData.diseaseArray[x][y] = 4
				gameData.limeDiseaseLakesCurrent += 1
			}
		}

		if (gameData.autoPlaceACivilian == 1 && gameData.numberOfTiles !== gameData.limeDiseaseLakes) {

			for (i = 0; gameData.civiliansPlaced < 1; i) {

				x = beckyRandom(5) - 1
				y = beckyRandom(5) - 1

				if (((x < 4 && y < 4) || (x == 4 && y < tiles)) && gameData.diseaseArray[x][y] == 0) {
					gameData.diseaseArray[x][y] = 1
					gameData.civiliansPlaced += 1
				}
			}
		}
		updateMapTileAesthetic()
	}
}

function diseaseControlReset() {
	for (x = 0; x < 5; x++)
		for (y = 0; y < 5; y++)
			gameData.diseaseArray[x][y] = 0

	gameData.civiliansPlaced = 0
	gameData.simulationTime = 0
	updateMapTileAesthetic()
}

function changeLakeAmount(x) {
	if ((gameData.limeDiseaseLakes < gameData.numberOfTiles && x == 1) || (gameData.limeDiseaseLakes > 0 && x == -1))
		gameData.limeDiseaseLakes += x
}

function updateMapTileAesthetic() {
	for (x = 0; x < 5; x++) {
		for (y = 0; y < 5; y++) {
			tileType = (gameData.diseaseArray[x][y])

			if (tileType == 0)
				updateButton ('DEAD85', ' ???????????? ??????')
			else if (tileType == 1)
				updateButton ('4DFE89', ':)')
			else if (tileType == 2)
				updateButton ('FF999A', ' +')
			else if (tileType == 3)
				updateButton ('565656', ':(')
			else if (tileType == 4)
				updateButton ('4DFFFF', '_')
			
			function updateButton (color, symbol) {
				whichButton = "mapTile-" + x + "-" + y
				colorChanger(whichButton, '#' + color)
				update(whichButton, symbol)
			}

		}
	}
}

function updateDiseaseStuffSlow() {
	for (x = 0; x < 4; x++) {
		if(gameData.numberOfTiles >= x + 17)
			tabs('mapTile-4-' + x, 'inline-block')	
	}
	if (gameData.autoStartSimulation)
		startSimulation()
	if (gameData.autoStartTask) 
		diseaseControlTask()
	if (gameData.autoCheckSimulation)
		checkResults()
}