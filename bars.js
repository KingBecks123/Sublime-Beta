function working() {
    gameData.employeeIsWorking = 1
    barStart("working")
}

function workingBar() {
    if (gameData.workingBar < 100 && gameData.employeeIsWorking) {
        gameData.workingBar += 1
        setTimeout(workingBar, 600 / gameData.tickspeed)
    } 
	else
		workingBarEnd()
}

function workingBarEnd() {
	if (gameData.employeeIsWorking) {
		gameData.limes += gameData.employeeCurrentSpeed
		gameData.employeeWorking -= 1
	}
	if (gameData.employeeWorking)
		working()
}

function basket() {
    gameData.basketBar = 0
    gameData.limes += gameData.limesInBaskets
	gameData.goldenLimes += gameData.goldenLimesInBaskets
    gameData.limesInBaskets = 0
    gameData.goldenLimesInBaskets = 0
}

function teach() {
    gameData.employeeCurrentSpeed = -(gameData.employeeHunger * 60)
	setTimeout('barStart("teach")', 1000)
}

function teachBar() {
	barMoverAdvanced('teach', 20, 1)
}

function teachBarEnd() {}

function eat() {
    if (canStartBar('eat') && gameData.eat < 100) {
		startEatBar('limes', 5, 0)
		startEatBar('rottenLimes', 1, 1)
    }
}

function startEatBar(id, nutrition, type) {
    if (gameData.foodTypeToggle == type && gameData[id] > 0)
	{
		gameData[id] -= 1
		gameData.foodType = nutrition
		gameData.eatBar = 0
		eatBar()
	}
}

function eatBar() {
	barMoverAdvanced('eat', 10, 0.5 * (gameData.fork + 1))
}

function eatBarEnd() {
    gameData.eat += gameData.foodType * (gameData.nutritionists + 1)
}

function autoCollecting() {
    if (gameData.autoCollectingBar == (gameData.nourishment + 1) * 100 || gameData.autoCollectingBar == 0) {
        gameData.autoCollectingBar = 0
		gameData.isAutoCollecting = 1
        autoCollectingBar()
    }
}

function autoCollectingBar() {
    if (gameData.autoCollectingBar <= (((gameData.nourishment + 1) * 100) - 0.5))
        gameData.autoCollectingBar += 0.5;
		moveAutoCollecting()
        setTimeout(autoCollectingBar, 50)
    if (gameData.autoCollectingBar % (10 / (gameData.shoes + 1)) == 0 && gameData.autoCollectingBar < (((gameData.nourishment + 1) * 100) - 0.5)) {
        getLimes()
    }
}

function moveAutoCollecting() {
    var elem = document.getElementById("autoCollectingBar");
	var x = gameData.autoCollectingBar / (gameData.nourishment + 1)
    elem.style.width = x + "%"
    elem.innerHTML =  Math.floor(x) + "%"
}

function convertCoinsNow() {
    if (canStartBar('convertCoinsNow') && gameData.coins >= 1e5) {
        gameData.coins -= 1e5
		gameData.convertedCoinsSinceTravel += 1
		gameData.convertCoinsNowBar = 0
        convertCoinsNowBar()
    }
}

function convertCoinsNowBar() {
	barMoverAdvanced('convertCoinsNow', 50 * Math.pow(2, (gameData.convertedCoinsSinceTravel + 1)))
}

function convertCoinsNowBarEnd() {
    gameData.megaCoins += 1
}


function learnANewSkill() {
    if (gameData.learnANewSkill - gameData.tomes <= 2) {
        barStart("learnANewSkill")
    }
}


function currencyBrokerHireBar() {
	barMoverAdvanced('currencyBrokerHire', 20)
}

function currencyBrokerHireBarEnd() {
	gameData.currencyApplicationReady = 1
	randomizeApplicationCurrencyBroker()
}

function basicBarSkill(variable, speed) {

	variableBar = variable + "Bar"
	gameData[variable + 'BarRunning'] = true
	
	if (gameData[variableBar] < 100) {

		gameData[variableBar] += 0.5

		var value = 100

		if (speed == 'slow')
			value = 1000

		setTimeout(basicBarSkill, (value / (gameData.intelligenceSkillLevel * 2 / 20 + 1)) / gameData.tickspeed, variable, speed)

	} else {
		gameData[variable + 'BarRunning'] = false
		gameData[variable + "SkillLevel"] += 1
		gameData[variable] += 2

	}
	moveBar(variable)
}




function learnANewSkillBar() {
	barMoverAdvanced('learnANewSkill', 15, 0.2)
}

function learnANewSkillBarEnd() {
	switch (gameData.learnANewSkill) {
		case -2:
			update("newInfo", "You learned Keen Eye!")
			break;
		case -1:
			update("newInfo", "You unlocked auto collection!")
			break;
		case 0:
			update("newInfo", "You Learned Rotten Wisdom!")
			break;
		case 1:
			update("newInfo", "You Learned Limebidextrous!")
			break;
		case 2:
			update("newInfo", "You Learned Intelligence!")
			break;
		case 3:
			update("newInfo", "You Learned Knifebidextrous!")
			break;
		case 4:
			update("newInfo", "You Learned Motivation!")
			break;
		case 5:
			update("newInfo", "You Learned Ambidextrous!")
			break;
		case 6:
			update("newInfo", "You Learned Bitter Speed!")
			break;
    }
	gameData.learnANewSkill += 1
}

function delivery() {
    if (canStartBar('delivery') && gameData.coins >= gameData.deliveryPrice && gameData.juice >= gameData.juiceBulkAmountToggle) {
        gameData.deliveryType = gameData.deliveryTypeToggle
        gameData.juiceBulkAmount = gameData.juiceBulkAmountToggle
        gameData.coins -= gameData.deliveryPrice
        gameData.juice -= gameData.juiceBulkAmount
        gameData.deliveryBar = 0;
		gameData.thisTownDeliveries += 1
		console.log(canStartBar('delivery'))
        deliveryBar()
    }

}

function deliveryBar() {	
	if (gameData.deliveryType == 0) 
		barMoverAdvanced('delivery', 100, 0.1)
	else if (gameData.deliveryType == 1)
		barMoverAdvanced('delivery', 15)
	else
		barMoverAdvanced('delivery', 15, 1)

}

function deliveryBarEnd() {
	gameData.coins += (gameData.nationalJuiceMarketing + 1) * Math.floor(gameData.juiceBulkAmount * (1 + (gameData.juicePriceCents / 100)))
}


function peelerPeel() {
    if (canStartBar('peeler') && gameData.limes > 0) {
		gameData.howManyPeeledLimes = 1
		peelerStart()
    }
}

function peelerPeelMax() {
    if (canStartBar('peeler'))
	{
        gameData.howManyPeeledLimes = gameData.limes

        if (gameData.howManyPeeledLimes > gameData.peelers) 
            gameData.howManyPeeledLimes = gameData.peelers

        if (gameData.howManyPeeledLimes > 0)
			peelerStart()
    }
}

function peelerStart(){
	gameData.limes -= gameData.howManyPeeledLimes
	gameData.peelerBar = 0;
	peelerBar()
}

function makeJuice() {

    if (canStartBar('juicer')) 
	{
        if (gameData.limeTypeToJuice == 0 && gameData.limes >= gameData.limesPerJuice) 
		{
            gameData.limes -= gameData.limesPerJuice
            gameData.howMuchJuice = 1
            gameData.limeTypeToJuiceToggle = 0
            juicerStart()
        } 
		else if (gameData.limeTypeToJuice == 1 && gameData.peeledLimes >= gameData.peeledLimesPerJuice) 
		{
            gameData.peeledLimes -= gameData.peeledLimesPerJuice
            gameData.howMuchJuice = 1
            gameData.limeTypeToJuiceToggle = 1
            juicerStart()
        }
    }

}

function juicerStart(){
	gameData.juicerBar = 0
	juicerBar()
}

function makeMaxJuice() {
    if (canStartBar('juicer')) {

        if (gameData.limeTypeToJuice)
			calculateHowMuchJuice('peeledLimes', 1)
		else 
			calculateHowMuchJuice('limes', 0)
		
        if (gameData.howMuchJuice > 0) {
            juicerStart()
        }
    }
}

function calculateHowMuchJuice(id, x){
	gameData.howMuchJuice = Math.floor(gameData[id] / gameData[id + 'PerJuice'])
	if (gameData.howMuchJuice > gameData.juicers)
		gameData.howMuchJuice = gameData.juicers
	gameData[id] -= gameData.howMuchJuice * gameData[id + 'PerJuice']
	gameData.limeTypeToJuiceToggle = x
}

function peelerBar() {
	barMoverAdvanced('peeler', 50 / ((gameData.sharperPeelers + 1) * 2), 0.5 + gameData.bitterSpeeding * 10,)
}

function peelerBarEnd() {
	gameData.peeledLimes += gameData.howManyPeeledLimes
}

function juicerBar() {
	barMoverAdvanced('juicer', 50 / (gameData.limeTypeToJuiceToggle * 3 + 1), 0.5 + gameData.bitterSpeeding * 10,)
}

function juicerBarEnd() {
	gameData.juice += gameData.howMuchJuice
	gameData.hasGottenJuice = 1
}

function eatGoldenLime(){
	if(gameData.goldenLimes > 0)
	{
		gameData.goldenLimes -= 1
		gameData.eatGoldenLimeBar = 100
		if (!gameData.bitterSpeeding)
		{
			gameData.bitterSpeeding = 1
			eatGoldenLimeBar()
		}
	}
}

function eatGoldenLimeBar(){
	barMoverAdvanced('eatGoldenLime', gameData.bitterSpeedSkillLevel, 0.5, 'inverse')
}

function eatGoldenLimeBarEnd() {
	gameData.bitterSpeeding = 0
}

function barMoverAdvanced(id, time, amount, inverse){
	bar = id + 'Bar'
	gameData[id + 'BarRunning'] = true
	
	if (amount == 'undefined')
		amount = 0.5
	if (time == 'undefined')
		time = 15
	if (inverse == 'inverse')
		amount *= -1
	
	if (gameData[bar] > 100)
		gameData[bar] = 100
	
	if (inverse == 'inverse' && gameData[bar] > 0 || gameData[bar] < 100 && inverse != 'inverse') {
		gameData[id + 'Bar'] += amount
		moveBar(id)
		setTimeout(eval(id + 'Bar'), time / gameData.tickspeed)
	}
	else
		end()
	
	function end() {
		window[id + 'BarEnd']()
		gameData[id + 'BarRunning'] = false
	}
}


function barStart(variable) {
	if (gameData[variable + "Bar"] == 100 || gameData[variable + "Bar"] == 0) {
		gameData[variable + "Bar"] = 0
		gameData[variable + "BarRunning"] = true
		window[variable + "Bar"]()
	}
}

function barStartGranularSkillBasic(x, useSkillTrainer) {
	id = x + "Bar"
	skillLevel = gameData[x + "SkillLevel"]
	if (canStartBar(x) && skillLevel < gameData[x + "SkillLevelMax"] && gameData.eat >= skillLevel) {
		
		gameData.eat -= skillLevel
		
		if (gameData.skillTrainer && useSkillTrainer)
			gameData[id] = 100
		else
			gameData[id] = 0

		basicBarSkill(x)
	}
}

function canStartBar(id){
    if ((gameData[id + 'Bar'] == 100 || gameData[id + 'Bar'] == 0) && gameData[id + 'BarRunning'] == false)
		return true
}

function moveBar(x) {
    i = x + "Bar"
	if(gameData[i] > 100)
		gameData[i] = 100

    document.getElementById(i).style.width = gameData[i] + "%"
    document.getElementById(i).innerHTML = "  " + Math.ceil(gameData[i]) + "%"
}