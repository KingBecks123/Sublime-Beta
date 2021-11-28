function startSimulation() {
	if (gameData.civiliansPlaced == gameData.civiliansTotal) {
		for (x = 0; x < 5; x++)
			for (y = 0; y < 5; y++)
				if (gameData.diseaseArray[x][y] == 1 || gameData.diseaseArray[x][y] == 3)
					for (xSpread = x - 1; xSpread < x + 2; xSpread++)
						for (ySpread = y - 1; ySpread < y + 2; ySpread++)
							if ((xSpread < 5 && xSpread >= 0 && ySpread < 5 && ySpread >= 0) && !(x == xSpread && y == ySpread)) {
								if (gameData.diseaseArray[xSpread][ySpread] == 0)
									gameData.diseaseArray[xSpread][ySpread] = 2
								else if (gameData.diseaseArray[xSpread][ySpread] == 1)
									gameData.diseaseArray[xSpread][ySpread] = 3
							}
		gameData.simulationTime = 1
		if (gameData.autoCheckSimulation)
			checkResults()
		updateMapTileAesthetic()
	}
}

function diseaseControlQuit() {
	diseaseControlFailed = 1
	gameData.diseaseControlFinished = 1
	diseaseControlReset()
	countPointsForDiseaseTask()
}

function checkResults() {
	if (gameData.civiliansPlaced == gameData.civiliansTotal && gameData.simulationTime) {
		diseaseControlFailed = 0
		for (x = 0; x < 5; x++)
			for (y = 0; y < 5; y++)
				if (gameData.diseaseArray[x][y] == 3)
					diseaseControlFailed = 1
		gameData.diseaseControlFinished = 1
		diseaseControlReset()
		countPointsForDiseaseTask()
	}
}

function countPointsForDiseaseTask() {
	points = 1 + gameData.limeDiseaseLakesSet + gameData.respectBillboard
	
	if (gameData.limeDiseaseLakes < 10)
		benevolenceRespectIncrease = 0
	else
		benevolenceRespectIncrease = (Math.pow(2, gameData.limeDiseaseLakes - 10)) * gameData.benevolence
	
	if (gameData.benevolenceToggle)
		points += benevolenceRespectIncrease 
	if (diseaseControlFailed)
		points *= (-1)
	gameData.respect += points
	if (gameData.autoStartTask == 1)
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
		gameData.limeDiseaseLakesSet = gameData.limeDiseaseLakes
		gameData.civiliansTotal = beckyRandom(4)

		tiles = gameData.numberOfTiles - 16


		for (gameData.limeDiseaseLakesCurrent = 0; gameData.limeDiseaseLakesCurrent < gameData.limeDiseaseLakesSet; gameData.limeDiseaseLakesCurrent) {

			x = beckyRandom(5) - 1
			y = beckyRandom(5) - 1

			if (((x < 4 && y < 4) || (x == 4 && y < tiles)) && gameData.diseaseArray[x][y] !== 4) {
				gameData.diseaseArray[x][y] = 4
				gameData.limeDiseaseLakesCurrent += 1
			}
		}

		if (gameData.autoPlaceACivilian == 1 && gameData.numberOfTiles !== gameData.limeDiseaseLakesSet) {

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

			id = "mapTile-" + x + "-" + y
			tileType = (gameData.diseaseArray[x][y])


			if (tileType == 0) { //Blank
				colorChanger(id, accent4)
				if (gameData.diseaseTileSymbols)
					update(id, "‏‏‎ ‎‏‏‎ ‎‎")
			} else if (tileType == 1) { //Civillian
				colorChanger(id, limesRelatedAccent)
				if (gameData.diseaseTileSymbols)
					update(id, ":)")

			} else if (tileType == 2) { //Disease
				colorChanger(id, "#FF999A")
				if (gameData.diseaseTileSymbols)
					update(id, " +")

			} else if (tileType == 3) { //Dead Civillian
				colorChanger(id, "#565656")
				if (gameData.diseaseTileSymbols)
					update(id, ":(")

			} else { //Lake
				colorChanger(id, "#4DFFFF")
				if (gameData.diseaseTileSymbols)
					update(id, "_")

			}

			if (!gameData.diseaseTileSymbols)
				update(id, "‎‎‎‏‏‎")

		}
	}
}

function updateDiseaseStuffSlow(){
	
	for (let i = 0; i <= 3; i++) {
		if(gameData.numberOfTiles >= 17 + i)
			show('mapTile-4-' + i, 'inline')
	}

	if (gameData.autoStartSimulation)
		startSimulation()
	
	if (gameData.autoStartTask) 
		diseaseControlTask()
	
	if (gameData.autoCheckSimulation)
		checkResults()
	
}