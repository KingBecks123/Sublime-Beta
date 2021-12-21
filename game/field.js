function winnowWheat(){
	if (gameData.wheat) {
		gameData.wheat -= 1
		gameData.wheatSeeds += 2
	}
}

function grindFlour() {
	if (gameData.wheatSeeds) {
		gameData.wheatSeeds -= 1
		gameData.flour += 1
	}
}

function managePlot() {
	if (gameData.wheatFieldArray[gameData.selectedPlotX][gameData.selectedPlotY] == 59) {
		if (gameData.pieCoins >= gameData.nextPlotPrice) {
			gameData.pieCoins -= gameData.nextPlotPrice
			gameData.nextPlotPrice *= 2
			gameData.wheatFieldArray[gameData.selectedPlotX][gameData.selectedPlotY] = 0
			finish ()
		}
	}
	else {
		gameData.wheatFieldArray[gameData.selectedPlotX][gameData.selectedPlotY] = 59
		gameData.nextPlotPrice /= 2
		gameData.pieCoins += gameData.nextPlotPrice
		finish ()
	}
	
	function finish () {
		updateFieldTileAesthetic()
		hide('plotManagementDiv')
	}
}

function fieldTile(x, y) {
	
	var tileType = gameData.wheatFieldArray[x][y]
	var tile = "fieldTile" + x + "-" + y

	if (gameData.selectedWheatItem == 'plot') {
		gameData.selectedPlotX = x
		gameData.selectedPlotY = y
		
		showBasicDiv('plotManagementDiv')
		if(gameData.wheatFieldArray[x][y] == 59) {
			update("plotDetails", "Price: " + gameData.nextPlotPrice.toLocaleString() + " Pie Coins")
			update("managePlot", "Purchase")
		}
		else {
			update("plotDetails", "Sell Price: " + (gameData.nextPlotPrice / 2).toLocaleString() + " Pie Coins")
			update("managePlot", "Sell")
		}
	}
	
	else if(gameData.wheatFieldArray[x][y] == 50) {
		gameData.wheat += 1
		emptyWheatTile(x, y)
	}
	
	else if(tileType >= 51 && tileType <= 54)
		rotate ('seedDrills', 51)
	
	else if(tileType >= 55 && tileType <= 58)
		rotate ('wheatHarvesters', 55)
	
	else if(gameData.selectedWheatItem == 'seed')
		setTileType(1, 'wheatSeeds')
	else if (gameData.selectedWheatItem == 'seedDrill')
		setTileType(51, 'seedDrills')
	else if (gameData.selectedWheatItem == 'harvester')
		setTileType(55, 'wheatHarvesters')
	
	function rotate (id, x2) {
		if(gameData.selectedWheatItem == 'rotate') {
			if(tileType == x2 + 3)
				gameData.wheatFieldArray[x][y] = x2
			else
				gameData.wheatFieldArray[x][y] += 1	
		}
		else {
			gameData[id] += 1
			emptyWheatTile(x, y)
		}
	}
	function emptyWheatTile(x, y){
		gameData.wheatFieldArray[x][y] = 0
		document.getElementById(tile + 'img').src = "images/emptyField.png"
	}
	function setTileType(number, cost){
		if(gameData.wheatFieldArray[x][y] == 0 && gameData[cost] > 0) {
			gameData.wheatFieldArray[x][y] = number
			gameData[cost] -= 1
		}
	}
	updateFieldTileAesthetic()
}

function updateFieldTileAesthetic(){
	for (var x = 0; x < 5; x++) {
		for (var y = 0; y < 5; y++) {
			var tile = "fieldTile" + x + "-" + y
			var image = tile + 'img'
			var tileType = gameData.wheatFieldArray[x][y]
			
			if (tileType == 0)
				tileImage ('emptyField')

			else if (tileType >= 1 && tileType < 50)
				tileImage ('wheatSeed1')
			
			else if (tileType == 50)
				tileImage ('wheatSeed6')
			
			else if (tileType > 50 && tileType <= 54)
				tileImage ('seedDrill')

			else if (tileType > 54 && tileType <= 58)
				tileImage ('wheatHarvester')
				
			else if (tileType == 59)
				tileImage ('unpurchasedField')
			
			
			if(tileType == 59)
				colorChanger (tile, '#66361F')
			else
				colorChanger (tile, '#DEAD85')	
				
				
			rotationValue = 0
			
			if(tileType == 51 || tileType == 55)
				rotationValue = 90
			else if(tileType == 52 || tileType == 56)
				rotationValue = 180
			else if(tileType == 53 || tileType == 57)
				rotationValue = 270
			
			setRotation (image, rotationValue)

			function tileImage (id) {
				setImage (image, id)
			}
		}
	}
}

function selectedWheatItem(id) {
	gameData.selectedWheatItem = id
	selectedWheatItemAesthetic(id)
}

function selectedWheatItemAesthetic(id) {
	colorChanger ('plotSelectedWheatItem', 'gray')
	colorChanger ('seedSelectedWheatItem', 'gray')
	colorChanger ('seedDrillSelectedWheatItem', 'gray')
	colorChanger ('harvesterSelectedWheatItem', 'gray')
	colorChanger ('rotateSelectedWheatItem', 'gray')
	colorChanger (id + 'SelectedWheatItem', '#4DFE89')
}

function updateFieldStuff() {
	if (gameData.wheatField) {
		hide("buyWheatField")
		show("fieldTile0-0", "inline")
		showBasicDiv("fieldButton")
		showBasicDiv("buyWheatSeeds")
		showBasicDiv("buyAWheatHarvester")
		showBasicDiv("buyASeedDrill")
		
		if(!gameData.pieOven)
			showBasicDiv("buyPieOven")
		
		if (gameData.mortarAndPestle) {
			hide("buyMortarAndPestle")
			showBasicDiv("grindFlour")
		}
		else {
			show("buyMortarAndPestle")
			hide("grindFlour")
		}
		
		if(gameData.seedDrills || gameData.wheatHarvesters)
			showBasicDiv("wheatMachines")
	}
	else
		checkShow(gameData.hasSoldPie, "buyWheatField")
}

function updateFieldStuffSlow() {
	updateFieldTileAesthetic()
	for (var x = 0; x < 5; x++) {
		for (var y = 0; y < 5; y++) {
			
			var tileType = gameData.wheatFieldArray[x][y]

			if(tileType >= 1 && tileType < 50)
				gameData.wheatFieldArray[x][y] += 1
			
			if(gameData.wheatSeeds > 0) {
				if(tileType == 51 && gameData.wheatFieldArray[x][y + 1] == 0)
					addSeed (x, y + 1)
				else if(tileType == 52 && x > 0) {
					//Don't move this or it'll check an undefined number :(
					if(gameData.wheatFieldArray[x - 1][y] == 0)
						addSeed (x - 1, y)
				}
				else if(tileType == 53 && y > 0) {
					//Don't move this or it'll check an undefined number :(
					if(gameData.wheatFieldArray[x][y - 1] == 0)
						addSeed (x, y - 1)
				}	
				else if(tileType == 54 && gameData.wheatFieldArray[x + 1][y] == 0)
					addSeed (x + 1, y)
			}
			
			function addSeed (xpos, ypos) {
				gameData.wheatFieldArray[xpos][ypos] = 1
				gameData.wheatSeeds -= 1
			}

			if(tileType == 55 && y > 0) {
				//Don't move this or it'll check an undefined number :(
				if(gameData.wheatFieldArray[x][y - 1] == 50)
					harvest (x, y - 1)
			}	
			else if(tileType == 56 && gameData.wheatFieldArray[x + 1][y] == 50)
				harvest (x + 1, y + 1)
			else if(tileType == 57 && gameData.wheatFieldArray[x][y + 1] == 50)
				harvest (x, y + 1)
			else if(tileType == 58 && x > 0) {
				//Don't move this or it'll check an undefined number :(
				if(gameData.wheatFieldArray[x - 1][y] == 50)
					harvest (x - 1, y)
			}
			
			function harvest (xpos, ypos) {
				gameData.wheatFieldArray[xpos][ypos] = 0
				gameData.wheat += 1
			}
		}
	}
	
	if(gameData.wheatSeeds > 30)
		gameData.wheatSeeds -= 1
	if(gameData.wheat > 30)
		gameData.wheat -= 1
	if(gameData.flour > 30)
		gameData.flour -= 1
	
}