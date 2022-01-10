function timeToShowScience(id) {
	var researchTime = eval(id + 'ResearchTime')
	if (gameData[id + 'Researchers'] == 0)
		time = 'Infinite Seconds'
	else if (researchTime <= 200)
		time = researchTime.toLocaleString() + " Seconds"
	else
		time = Math.floor(researchTime / 60).toLocaleString() + " Minutes"
	
	update(id + 'Time', "Estimated Time: " + time)
}

function tabScience(tabby) {
    hide("research")
    hide("researchers")
	colorChanger('researchButton', '#BBBBBB')
	colorChanger('researchersButton', '#BBBBBB')		
	colorChanger(tabby + "Button", "#898989")
    document.getElementById(tabby).style.display = "block"
}

function addResearchers(id, amount) {
	x = id + "Researchers"
	if (amount > 0) {
		if (researchersAvailable - amount >= 0)
			gameData[x] += amount
		else
			gameData[x] += researchersAvailable
	} else if (gameData[x] > 0) {
		if (gameData[x] >= amount * -1)
			gameData[x] += amount
		else
			gameData[x] = 0
	}
}

function hireResearcher() {
	if (gameData.megaCoins >= 1) {
		gameData.megaCoins -= 1
		gameData.researchers += 1
	}
}