function scienceMover(i) {
	setScienceObject()
	id = science[i].id
	if (science[i].limit == 'none' || eval(science[i].limit)) {
		if (gameData[id + 'Bar'] < 100) {
			if (gameData[id + 'Researchers'] > 0) {
				if(window[id + 'BarDoMove'])
					gameData[id + 'Bar'] += 0.5
				window[id + 'BarDoMove'] = 1
				setTimeout(scienceMover, 1e3 * eval(science[i].equation) / gameData[id + 'Researchers'], i)
			}
			moveBar(id)
		} else {
			eval(science[i].end)
			gameData[id + 'Bar'] = 0
		}
	}
}

function surveillanceCamera2() {
	setScienceObject()
	if (gameData.surveillanceCamera2 && secondsOffline > 60) {
		for (let i = 0; i < science.length; i++) {
			var barFilled   = gameData[science[i].id + "Bar"]
			var researchers = gameData[science[i].id + "Researchers"]
			if (researchers > 0 && barFilled != 0) {
				amountToAdd = Math.floor(secondsOffline * 0.5 * researchers / science[i].equation)
				if(barFilled + amountToAdd < 100)
					gameData[science[i].id + "Bar"] += amountToAdd
				else {
					gameData[science[i].id + "Bar"] = 100
					eval(science[i].end)
				}
				moveBar(science[i].id)
			}
		}
	}
}

function timeToShowScience(id) {
	setScienceObject()
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
	setScienceObject()
    tabs("research", "none")
    tabs("researchers", "none")
	colorChanger('researchButton', '#BBBBBB')
	colorChanger('researchersButton', '#BBBBBB')		
	colorChanger(tabby + "Button", "#898989")
    document.getElementById(tabby).style.display = "block"
}

function addResearchers(id, amount) {
	setScienceObject()
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

function addSciences () {
	setScienceObject()
	for (let i = 0; i < science.length; i++) {
		name = science[i].id
		
		addTo ($ ("<div />", {
				class: "basicDiv",
				id: name + 'Div'
		}), 'research')
		
		
		add($("<button />", {
			class: "specialButton",
			onclick: 'scienceMover(' + i + ')',
			html: jsUcfirst(name)
		}))
		
		add($("<p />", {
			class: "basicTextSize",
			style: 'color:#00AAFF;background-color:#000000',
			id: "textFor" + jsUcfirst(name) + "Researchers",
		}))

		add($("<button />", {
			class: "changeResearchersBy10",
			style: 'width:30px;',
			onclick: "addResearchers('" + name + "', -1)",
			html: '-'
		}))

		add($("<button />", {
			class: "changeResearchersBy10",
			style: 'width:50px;',
			onclick: "addResearchers('" + name + "', -10)",
			html: '-10'
		}))

		add($("<button />", {
			class: "changeResearchersBy10",
			style: 'width:30px;',
			onclick: "addResearchers('" + name + "', 1)",
			html: '+'
		}))

		add($("<button />", {
			class: "changeResearchersBy10",
			style: 'width:50px;',
			onclick: "addResearchers('" + name + "', 10)",
			html: '+10'
		}))
		
		add($("<div />", {
			class: "scienceInfo",
			html: '<p class="basicText">' + science[i].description + '</p>'
		}))

		
		add($("<div />", {
			class: "skillProgress",
			id: name + "Progress",
		}))
		
		addTo($("<div />", {
			class: "skillBar",
			id: name + "Bar",
		}), name + 'Progress')
		
		add($("<p />", {
			class: "basicText",
			id: name + "Text",
		}))

		add ($("<p />", {
			class: "basicText",
			id: name + "Time",
		}))

		function add(e){
			addTo(e, name + 'Div')
		}
	}
}