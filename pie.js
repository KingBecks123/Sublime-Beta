function lookForCustomer(){

	gameData.couldFindCustomer = 1
	gameData.isThereACustomer = 1
	gameData.customerWaitTime = 0
	update("couldFindCustomer", "Found a customer!")
	update("customerButton", ":)")


}

function decreasePiePrice() {
	decreaseValue('piePrice')
	changePiePrice()
}

function increasePiePrice() {
	increaseValue('piePrice')
	changePiePrice()
}

function changePiePrice(){
	if(gameData.currentTask = 'findPieCustomers')
		gameData.currentTask = 'none'
	if(gameData.currentTask2 = 'findPieCustomers')
		gameData.currentTask2 = 'none'
	gameData.isFindingPieCustomers = 0
	gameData.findPieCustomersBar = 0
	gameData.isThereACustomer = 0

	moveBar("findPieCustomers")
}

function sellPieToCustomer(){
	if(gameData.isThereACustomer && gameData.pies > 0)
	{
		gameData.isThereACustomer = 0
		gameData.pies -= 1
		gameData.megaCoins += gameData.piePrice
		gameData.hasSoldPie = 1
		update("customerButton", "")
		update("couldFindCustomer", "Sold!")

	}
}

function fieldTile(x, y) {
	if(gameData.wheatFieldArray[x, y] === undefined)
		gameData.wheatFieldArray[x, y] = 0
	
	
	var tile = "fieldTile" + x + "-" + y
	
	if(gameData.wheatFieldArray[x, y] == 0 && gameData.wheatSeeds > 0)
	{
		gameData.wheatFieldArray[x, y] = 1
		gameData.wheatSeeds -= 1
		update(tile, ".")
	}
	if(gameData.wheatFieldArray[x, y] == 10)
	{
		gameData.wheatFieldArray[x, y] = 0
		gameData.wheat += 1
		update(tile, "")
	}
}

function winnowWheat(){
	if(gameData.wheat)
	{
		gameData.wheat -= 1
		gameData.wheatSeeds += 2
	}
}

function grindFlour(){
	if(gameData.wheatSeeds)
	{
		gameData.wheatSeeds -= 1
		gameData.flour += 1
	}
}

function addPieIngredient(ingredient){
	
	if(gameData[ingredient] > 0)
	{
		gameData[ingredient + 'AsPieIngredient'] += 1
		gameData[ingredient] -= 1
	}
}

function updateWheatField(){
	for (var x = 0; x < 1; x++) {
		for (var y = 0; y < 1; y++) {
			
			var tile = "fieldTile" + x + "-" + y

			if(gameData.wheatFieldArray[x, y] >= 1 && gameData.wheatFieldArray[x, y] < 10)
			{
				gameData.wheatFieldArray[x, y] += 1
				update(tile, ".")

			}
			
			if(gameData.wheatFieldArray[x, y] == 10)
				update(tile, "Y")
				
			
		}
	}
}