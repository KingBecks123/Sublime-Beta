function gameStart() {
	
    loadStuff(JSON.parse(localStorage.getItem("mathAdventureSave")))
	addTo ($ ("<br />", {
	}), 'backgroundForValues')
	for (let i = 0; i < mainVariables.length; i++) {
		if (i != 0) {
			addHTML (
				[
					{
						where: 'backpackDiv',
						type: 'button',
						style: {
							class: "specialButton",
							id: "currencyDisplay(" + i + ")",
							onclick: "currencyDisplay(" + i + ")",
							style: "width:167px;",
							html: "Show " + mainVariables[i].name
						}
					}
				]
			)
		}
		var id = jsUcfirst(mainVariables[i].id)
		addHTML ( 
			[
				{
					where: 'backgroundForValues',
					type: 'div',
					style: {
						class: 'stat',
						id: 'textFor' + id + 'Div',
						html: mainVariables[i].name
					}
				},
				{
					where: 'backgroundForValues',
					type: 'div',
					style: {
						class: 'stat ar',
						id: 'textFor' + id,
						style: 'display:none'
					}
				},
				{
					where: 'backgroundForValues',
					type: 'p',
					style: {
						id: 'textFor' + id + 'P',
						style: 'display:none'
					}
				},
				{
					where: 'backgroundForValues',
					type: 'br',
					style: {
						id: 'textFor' + id + 'Br',
						style: 'display:none'
					}
				},
			]
		)
	}
	document.getElementById('textForCoins').classList.add("tooltip")
	document.getElementById('textForAlphaCoins').classList.add("tooltip")
	document.getElementById('textForBetaCoinsDiv').style.textDecoration = 'underline'
	document.getElementById('textForPieCoinsDiv').style.textDecoration = 'underline'
	
	addTo ($ ("<br />", {
	}), 'mapTilesDisease')
	for (let x = 0; x < 5; x++) {	
		for (let y = 0; y < 5; y++) {
			styleType = 'margin:0px;'

			if (x == 4 || y == 4)
				styleType += 'display:none'

			addHTML (
				[
					{
						where: 'mapTilesDisease',
						type: 'button',
						style: {
							class: "mapTile",
							id: 'mapTile-' + y + '-' + x,
							style: styleType,
							onClick: 'mapTile(' + y + ',' + x + ')'
						}
					}
				]
			)
		}
		addTo ($ ("<br />", {
		}), 'mapTilesDisease')
	}
	
	for (let y = 0; y < 5; y++) {	
		for (let x = 0; x < 5; x++) {	
			addHTML ( 
				[
					{
						where: 'fullField',
						type: 'button',
						style: {
							ondragstart: 'return false',
							class: 'fieldTile',
							id: 'fieldTile' + x + '-' + y,
							onClick: 'fieldTile(' + x + ', ' + y + ')'
						}
					},
					{
						where: 'fieldTile' + x + '-' + y,
						type: 'img',
						style: {
							style: 'width:70px;height:70px',
							id: 'fieldTile' + x + '-' + y + 'img',
							src: 'images/emptyField.png'
						}
					}
				]
			)
		}
	}
	
	for (let i = 0; i < 4; i++) {
		addHTML ( 
			[
				{
					where: 'forestScavengeInventory',
					type: 'button',
					style: {
						style: 'width:80px;height:80px;margin:5px;background-color:black;',
						onclick: 'selectScavengedLoot(' + i + ')',
						id: 'scavengeLoot' + i
					}
				}
			]
		)
	}
	
	for (let i = 0; i < enlightenments.length; i++) {
		id = 'enlightenmentTask' + enlightenments[i].id

		addHTML (
			[
				{
					where: 'allEnlightenmentTasks',
					type: 'div',
					style: {
						class: "basicDiv",
						id: id,
						style: 'width:360px;'
					}
				},
				{
					where: id,
					type: 'button',
					style: {
						class: "enlightenmentButton",
						html: enlightenments[i].name,
						onclick: "select('enlightenment', '" + enlightenments[i].id + "')",
						id: 'enlightenmentButton' + enlightenments[i].id
					}
				},
				{
					where: id,
					type: 'p',
					style: {
						class: "basicText",
						id: id + 'Goal'
					}
				},
				{
					where: id,
					type: 'p',
					style: {
						class: "basicText",
						id: id + 'Text'
					}
				}
			]
		)
	}
	for (let i = 0; i < enlightenmentHinderances.length; i++) {
		id = 'enlightenmentHinderance' + enlightenmentHinderances[i].id
		
		addHTML (
			[
				{
					where: 'allEnlightenmentHinderances',
					type: 'div',
					style: {
						class: "basicDiv",
						id: id,
						style: 'width:360px;'
					}
				},
				{
					where: id,
					type: 'button',
					style: {
						class: "specialButton",
						style: "background-color:#FE99BB;",
						id: id + 'Button',
						html: enlightenmentHinderances[i].name,
						onclick: "select('enlightenmentHinderance', '" + enlightenmentHinderances[i].id + "')",
					}
				},
				{
					where: id,
					type: 'p',
					style: {
						class: "basicText",
						html: enlightenmentHinderances[i].affect
					}
				},
				{
					where: id,
					type: 'p',
					style: {
						class: "basicText",
						html: 'Multiplier: ' + enlightenmentHinderances[i].multiplier + 'x'
					}
				},
			]
		)
	}
	for (let i = 0; i < wisdomUpgrades.length; i++) {
		id = 'wisdomUpgrade' + wisdomUpgrades[i].id

		addHTML (
			[
				{
					where: 'allWidsomUpgrades',
					type: 'div',
					style: {
						class: "basicDiv",
						id: id + 'Div',
						style: 'width:360px;'
					}
				},
				{
					where: id + 'Div',
					type: 'button',
					style: {
						class: "specialButton",
						style: "background-color:#99DEFF;",
						id: id + 'Button',
						onClick: "buyWisdomUpgrade('" + i + "')",
						html: wisdomUpgrades[i].name
					}
				},
				{
					where: id + 'Div',
					type: 'p',
					style: {
						class: "basicText",
						id: id + 'Description',
						html: wisdomUpgrades[i].description
					}
				},
				{
					where: id + 'Div',
					type: 'p',
					style: {
						class: "basicText",
						id: id + 'Price'
					}
				},
				{
					where: id + 'Div',
					type: 'p',
					style: {
						class: "basicText",
						id: id + 'Level'
					}
				},
			]
		)
	}

	for (let i = 0; i < science.length; i++) {
		name = science[i].id

		addHTML ( 
			[
				{
					where: 'research',
					type: 'div',
					style: {
						class: "basicDiv",
						id: name + 'Div'
					}
				}, 
				{
					where: name + 'Div',
					type: 'button',
					style: {
						class: "specialButton",
						onclick: 'barsobj[' + (i + 19) + '].start()',
						html: jsUcfirst(name)
					}
				}, 
				{
					where: name + 'Div',
					type: 'p',
					style: {
						class: "basicTextSize",
						style: 'color:#00AAFF;background-color:#000000',
						id: "textFor" + jsUcfirst(name) + "Researchers",
					}
				}, 
				{
					where: name + 'Div',
					type: 'button',
					style: {
						class: "changeResearchersBy10",
						style: 'width:30px;',
						onclick: "addResearchers('" + name + "', -1)",
						html: '-'
					}
				}, 
				{
					where: name + 'Div',
					type: 'button',
					style: {
						class: "changeResearchersBy10",
						style: 'width:50px;',
						onclick: "addResearchers('" + name + "', -10)",
						html: '-10'
					}
				}, 
				{
					where: name + 'Div',
					type: 'button',
					style: {
						class: "changeResearchersBy10",
						style: 'width:30px;',
						onclick: "addResearchers('" + name + "', 1)",
						html: '+'
					}
				}, 
				{
					where: name + 'Div',
					type: 'button',
					style: {
						class: "changeResearchersBy10",
						style: 'width:50px;',
						onclick: "addResearchers('" + name + "', 10)",
						html: '+10'
					}
				}, 
				{
					where: name + 'Div',
					type: 'div',
					style: {
						class: "scienceInfo",
						html: '<p class="basicText">' + science[i].description + '</p>'
					}
				}, 
				{
					where: name + 'Div',
					type: 'div',
					style: {
						id: name + "BarDiv",
					}
				}, 
				{
					where: name + 'Div',
					type: 'p',
					style: {
						class: "basicText",
						id: name + "Text",
					}
				}, 
				{
					where: name + 'Div',
					type: 'p',
					style: {
						class: "basicText",
						id: name + "Time",
					}
				}
			]
		)
		
		barsobj[barsobj.length] = science[i].bar
	}

	for (let i = 0; i < skills.length; i++) {
		var name = skills[i].id

		addHTML ( 
			[
				{
					where: 'skillsSection2',
					type: 'div',
					style: {
						class: "basicDiv",
						id: name + 'Div'
					}
				},
				{
					where: name + 'Div',
					type: 'div',
					style: {
						class: "skillInfo",
						id: name + 'skillInfo'
					}
				},
				{
					where: name + 'Div',
					type: 'div',
					style: {
						class: "skillProgress",
						id: name + 'Progress'
					}
				},
				{
					where: name + 'Progress',
					type: 'div',
					style: {
						class: "skillBar",
						id: name + 'Bar'
					}
				},
				{
					where: name + 'skillInfo',
					type: 'p',
					style: {
						class: "basicText",
						html: skills[i].textDescription
					}
				},
				{
					where: name + 'Div',
					type: 'p',
					style: {
						class: "basicText",
						id: name
					}
				},
				{
					where: name + 'Div',
					type: 'p',
					style: {
						class: "basicText",
						id: name + "SkillLevel"
					}
				},
				{
					where: name + 'Div',
					type: 'button',
					style: {
						class: "skillButton",
						id: name + 'Button',
						onclick: 'pickCurrentSkill("' + name + '")',
						html: skills[i].name
					}
				}
			]
		)
		
		if (gameData[name + "Bar"] < 100 && gameData[name + "Bar"] != 0)
			startSkillBar(name)
		else
			gameData[name + 'BarRunning'] = false
	}
	
	for (let i = 0; i < barsobj.length; i++) {
		thisBar = barsobj[i]
		if (thisBar.style == 'vertical')
			classType = 'vertical'
		else
			classType = 'skill'

		addHTML (
			[
				{
					where: thisBar.where,
					type: 'div',
					style: {
						class: classType + 'Progress',
						id: thisBar.id + 'Progress',
					}
				},
				{
					where: thisBar.id + 'Progress',
					type: 'div',
					style: {
						class: classType + 'Bar',
						id: thisBar.id + 'Bar',
					}
				}
			]
		)
		
		if (thisBar.tryToRestart) {
			if (gameData[thisBar.id + "Bar"] < 100 && gameData[thisBar.id + "Bar"] != 0) {
				for (let j = 0; j < barsobj.length; j++) {
					if (barsobj[j].id == thisBar.id)
						x = j
				}
				barsobj[x].bar()
			}
			else
				gameData[thisBar.id + 'BarRunning'] = false
		}
	}
	
	function addHTML (id) {
		for (let i = 0; i < id.length; i++) {
			addTo ($ ("<" + id[i].type + " />", id[i].style), id[i].where)
		}
	}
	
	for (let i = 0; i < divs.length; i++) {
		for (let k = 0; k < divs[i].elements.length; k++) {
			thing = divs[i].elements[k]
			
			function addDiv() {
				if (thing.format == 'basicUnlock')
					whatId = thing.buy + 'UnlockDiv'
				else if (thing.format == 'travelUpgrade')
					whatId = thing.variable + 'TravelUpgradeDiv'
				else
					whatId = thing.id
				
				addTo ($ ("<div />", {
					class: "basicDiv",
					id: whatId,
				}), divs[i].div)
			}
			
			function addText1 (where) {
				addTo ($ ("<p />", {
					class: "basicText",
					html: thing.text1
				}), where)
			}
			
			function addPrice (where, type) {
				if (type == undefined)
					whatType = thing.priceType
				else
					whatType = type

				
				thingToBuy = 'Unknown Currency'
				for (let j = 0; j < mainVariables.length; j++) {
					if (mainVariables[j].id == whatType)
						thingToBuy = mainVariables[j].name
				}

				addTo ($ ("<p />", {
					class: "basicText",
					html: 'Price: ' + thing.priceNum + ' ' + thingToBuy
				}), where)
			}
			
			function addButton (where) {
				addTo ($ ("<button />", {
					class: "specialButton",
					onclick: 'universalBuy("' + thing.buy + '",' + thing.priceNum + ',"' + thing.priceType + '")',
					html: thing.buttonText
				}), where)
			}
			
			if (thing.format == 'basicBuy') {
				addDiv()
				addButton(thing.id)
				addText1(thing.id)
				addPrice(thing.id)
			}
			else if (thing.format == 'basicUnlock') {
				addDiv()
				if (thing.buttonStyle == undefined)
					addButton(thing.buy + 'UnlockDiv')
				else {
					addTo ($ ("<button />", {
						class: "specialButton",
						onclick: 'universalBuy("' + thing.buy + '",' + thing.priceNum + ',"' + thing.priceType + '")',
						html: thing.buttonText,
						style: thing.buttonStyle
					}), thing.buy + 'UnlockDiv')
				}
				
				addText1(thing.buy + 'UnlockDiv')
				addPrice(thing.buy + 'UnlockDiv')
			}
			else if (thing.format == 'travelUpgrade') {
				addDiv()
				
				addTo ($ ("<p />", {
					class: "basicText",
					style: 'background-color:#FF999A;',
					html: thing.name
				}), thing.variable + 'TravelUpgradeDiv')
				
				addTo ($ ("<p />", {
					class: "basicText",
					html: thing.text
				}), thing.variable + 'TravelUpgradeDiv')
				
				if (thing.text2Id) {
					addTo ($ ("<p />", {
						class: "basicText",
						id: thing.variable + 'TravelUpgradeText'
					}), thing.variable + 'TravelUpgradeDiv')
				}
			}
			else if (thing.format == 'bulkBuy') {
				addDiv()
				if (thing.onClick == undefined) {
					addTo ($ ("<button />", {
						class: "specialButton",
						onclick: 'bulkableBuyMax("' + thing.buy + '",' + thing.priceNum + ')',
						html: thing.buttonText,
						id: thing.buttonId
					}), thing.id)
				}
				else {
					addTo ($ ("<button />", {
						class: "specialButton",
						onclick: 'divs[' + i + '].elements[' + k + '].onClick()',
						html: thing.buttonText,
						id: thing.buttonId
					}), thing.id)
				}
					
				
				addTo ($ ("<button />", {
					class: "specialButton",
					onclick: 'toggle("' + thing.bulkToggle + '")',
					style: 'width:80px',
					id: thing.bulkId
				}), thing.id)
				
				addText1(thing.id)
				addPrice(thing.id, 'coins')
			}
		}
	}

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

	secondsOffline = Math.floor((Date.now() - gameData.lastSaveTime) / 1000)
	secondsOfflineThree = Math.floor(secondsOffline / 3)
	if (gameData.basketScarecrow) {
		if(gameData.basketBar + secondsOfflineThree < 100)
			gameData.basketBar += secondsOfflineThree
		else
			gameData.basketBar = 100
	}
	
	if (secondsOffline > 60) {
		if (gameData.surveillanceCamera && gameData.employeeWorking > 0) {
			for (i = 0; i < Math.floor(secondsOffline / 60) && gameData.employeeWorking > 0; i++) {
				finishWorking()
			}
			gameData.workingBar = 0
		}
		if (gameData.surveillanceCamera2) {
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
				}
			}
		}
	}
	
	if (gameData.bellowsBar < 100)
		barsobj[17].bar()

	moveWell()
	
	
	if (gameData.workingBar <= 100 && (gameData.workingBar != 0 || gameData.employeeWorking > 0))
		barsobj[2].bar()

	if (gameData.autoCollectingBar !== 0)
		barsobj[1].bar()
	
	barsobj[3].bar()

    mainGameLoopSlow()
    mainGameLoopFast()
	
	selectedWheatItemAesthetic(gameData.selectedWheatItem)
	changeVariablesColorAesthetic()
	updateFieldTileAesthetic()
	updateScavengeTileAesthetic()
	normalizeButtons()
	

	tab(gameData.mainTab)
    tabMarket(gameData.marketTab)
    tabTasks("earn")
    tabScience("research")
	tabOptions("gameOptions")

}


function tab(tabby) {
	gameData.mainTab = tabby
    update("exportCode", "")

    hide("options")
    hide("market")
    hide("inventory")
    hide("achievements")
    hide("skills")
    hide("megaCoinUpgrades")
    hide("tasks")
    hide("company")
    hide("forest")
    hide("science")
    hide("bakery")
    hide("field")

	colorChanger('scienceButton', '#BBBBBB')
	colorChanger('optionsButton', '#BBBBBB')
	colorChanger('marketButton', '#BBBBBB')
	colorChanger('inventoryButton', '#BBBBBB')
	colorChanger('achievementsButton', '#BBBBBB')
	colorChanger('skillsButton', '#BBBBBB')
	colorChanger('megaCoinUpgradesButton', "#BBBBBB")
	colorChanger('tasksButton', '#BBBBBB')
	colorChanger('companyButton', '#BBBBBB')
	colorChanger('forestButton', '#BBBBBB')
	colorChanger('bakeryButton', '#BBBBBB')
	colorChanger('fieldButton', '#BBBBBB')


	if( tabby !== "null") {
		if (tabby == "options") {
			if (!gameData.isOptionsOpen) {
				gameData.isOptionsOpen = 1
				document.getElementById(tabby).style.display = "inline-block"
				colorChanger(tabby + "Button", "#898989")
			} else
				gameData.isOptionsOpen = 0
		} else {
			gameData.isOptionsOpen = 0
			document.getElementById(tabby).style.display = "inline-block"

			colorChanger(tabby + "Button", "#898989")
		}
	}
}

function tabMarket(tabby) {
	
	gameData.marketTab = tabby

	tabManager('marketMain')	
	tabManager('hiringArea')	
	tabManager('travel')
	
	function tabManager(id) {
		hide(id)
		colorChanger(id + "Button", "#BBBBBB")
	}

	hide('trade')
	colorChanger("tradeButton", "#FDFF9A")
	
	colorChanger(tabby + "Button", "#898989")
	show(tabby)
		
	if(tabby == 'trade')
		colorChanger(tabby + "Button", "#FCFF4E")
		
}

function tabTasks(tabby) {
    hide("earn")
    hide("milestones")
	colorChanger('earnButton', '#BBBBBB')
	colorChanger('milestonesButton', '#BBBBBB')	
	colorChanger(tabby + "Button", "#898989")
	show(tabby)
}

function tabOptions(tabby) {
    hide("gameOptions")
    hide("uiOptions")
    hide("statsOptions")
	show(tabby)
}