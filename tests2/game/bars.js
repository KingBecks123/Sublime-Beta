function canStartBar(id) {
	if ((gameData[id + 'Bar'] == 100 || gameData[id + 'Bar'] == 0) && !gameData[id + 'BarRunning'])
		return true
}

function moveBar(id, amount, x, inverse){
	gameData[id + 'Bar'] += amount
	i = id + "Bar"
	var elem = document.getElementById(i)
	if (id == 'autoCollecting') {
		max = (gameData.nourishment + 1) * 100 + autoCollectingRingAmount()
		id = (gameData.autoCollectingBar * 100) / max
		elem.style.width = id + "%"
		elem.innerHTML =  Math.floor(id) + "%"
	}
	else {
		if (inverse) {
			elem.style.width = (100 - gameData[i]) + "%"
			elem.innerHTML = "" + Math.ceil(100 - gameData[i]) + "%"
			max = 100
		}
		else {
			if (gameData[i] <= 0.1)
				elem.style.width = "0%"
			else
				elem.style.width = gameData[i] + "%"
			elem.innerHTML = "" + Math.ceil(gameData[i]) + "%"
			max = 100
		}
	}
	
	if(gameData[i] > max)
		gameData[i] = max
	setTimeout(barsobj[x].bar, 15 / gameData.tickspeed)
}

function barMoverAdvanced(id, inverse){
	gameData[id + 'BarRunning'] = true
	x = findBarNum(id)
	if ((gameData[id + 'Bar'] < 100)) {
		moveBar(id, barsobj[x].granularity(), x, inverse)
	} else {
		if (gameData[id + 'Bar'] > 100)
			gameData[id + 'Bar'] = 100
		barsobj[x].end()
		if (gameData[id + 'BarRunning'])
			gameData[id + 'BarRunning'] = false
	}
}

function findBarNum (x) {
	for (let i = 0; i < barsobj.length; i++) {
		if (x == barsobj[i].id)
			return i
	}
}

function restartBar(x) {
	if (gameData[x + "Bar"] < 100 && gameData[x + "Bar"] != 0)
		eval(x + "Bar()")
	else
		gameData[x + 'BarRunning'] = false
}

function restartBarNoMovement(x) {
	if (gameData[x + 'Bar'] < 100 && gameData[x + 'Bar'] != 0)
		eval(x + "Bar(0)")
}

function barStart(variable) {
	variableBar = variable + "Bar"
	if (gameData[variableBar] == 100 || gameData[variableBar] == 0) {
		gameData[variableBar] = 0
		eval(variableBar + "()")
	}
}

function barStartObject(variable, x) {
	variableBar = variable + "Bar"
	if (gameData[variableBar] == 100 || gameData[variableBar] == 0) {
		gameData[variableBar] = 0
		barsobj[x].bar()
	}
}