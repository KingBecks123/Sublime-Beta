science = [ 
	{
		id: 'watertight',
		equation: 'Math.pow(10, 6 - gameData.peeledLimesPerJuice)',
		end: 'gameData.peeledLimesPerJuice -= 1',
		text: '"Currently: " + gameData.peeledLimesPerJuice + " Peeled Limes -> 1 Juice"',
		description: 'Decreases peeled limes needed to make juice by 1',
		requirement: 'none',
		limit: 'gameData.peeledLimes > 1',
	},
	{
		id: 'surveying',
		equation: 'Math.pow(2, gameData.numberOfTiles - 15)',
		end: 'gameData.numberOfTiles += 1;diseaseControlQuit()',
		text: '"Currently: " + gameData.numberOfTiles + " / 20 Tiles"',
		description: 'Increase disease tiles by 1',
		requirement: 'none',
		limit: 'gameData.numberOfTiles < 20',
	},
	{
		id: 'benevolence',
		equation: 'Math.pow(2, gameData.benevolence * 2)',
		end: 'gameData.benevolence += 1',
		text: '"Currently: Level " + gameData.benevolence',
		description: 'Increase respect change from helping civilians with more lakes',
		requirement: 'gameData.unlockBenevolence',
		limit: 'none',
	},
]

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

function updateScience() {	
	update("textForResearchers", researchersAvailable + " Available Researchers")
	
	researchersAvailable = gameData.researchers
	
	for (let i = 0; i < science.length; i++) {
		name = science[i].id
		
		if(science[i].requirement != 'none')
			checkShowOrHide(eval(science[i].requirement), name + "Div")
		
		update(name + 'Text', eval(science[i].text))
		update("textFor" + jsUcfirst(name) + "Researchers", gameData[name + "Researchers"] + " Researchers")
		window[name + 'ResearchTime'] = Math.floor(200 * eval(science[i].equation) / gameData[science[i].id + 'Researchers'])
		timeToShowScience(name)
		researchersAvailable -= gameData[name + "Researchers"]
	}
	
	checkHide(gameData.surveillanceCamera2, "offlineScience")
	checkShow(gameData.surveillanceCamera2, "upgradeHighTechSurveillance")
}

function scienceMover(i) {
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

function surveillanceCamera2(){
	if(gameData.surveillanceCamera2 && secondsOffline > 60) {
		for (let i = 0; i < science.length; i++) {
			
			var barFilled   = gameData[science[i].id + "Bar"]
			var researchers = gameData[science[i].id + "Researchers"]
			
			if (researchers > 0 && barFilled != 0)
			{
				amountToAdd = Math.floor(secondsOffline * 0.5 * researchers / eval(science[i].id + 'Equation'))
				
				if(barFilled + amountToAdd < 100)
					gameData[science[i].id + "Bar"] += amountToAdd
				else
				{
					gameData[science[i].id + "Bar"] = 100
					eval(science[i].end)
				}
				moveBar(science[i].id)
			}
		}
	}
}

function timeToShowScience(id) {
	var researchTime = eval(id + 'ResearchTime')
	var time = id + 'Time'
	if (gameData[id + 'Researchers'] == 0) {
		update(time, "Estimated Time: Infinite Seconds")
	} else if (researchTime <= 200) {
		update(time, "Estimated Time: " + researchTime.toLocaleString() + " Seconds")
	} else {
		update(time, "Estimated Time: " + Math.floor(researchTime / 60).toLocaleString() + " Minutes")
	}
}

function tabScience(tabby) {
    hide("research")
    hide("researchers")
	
	colorChanger('researchButton', '#BBBBBB')
	colorChanger('researchersButton', '#BBBBBB')
	
	colorChanger(tabby + "Button", "#898989")
	
    document.getElementById(tabby).style.display = "block"
}