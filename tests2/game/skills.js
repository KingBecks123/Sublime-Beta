function pickCurrentSkill (x) { 
	if (gameData.toggleActions && !event.shiftKey && gameData.multitasking) { 
		if (gameData.currentSkill == x && x != "none") 
			gameData.currentSkill = "none" 
		else 
			gameData.currentSkill = x 
	} 
	else startSkill(x, true) 
} 

function startSkill (whichSkill, useSkillTrainer) { 
	if (gameData[whichSkill + "SkillLevel"] < gameData[whichSkill + "SkillLevelMax"] && gameData.eat >= gameData[whichSkill + "SkillLevel"])  { 
		if (gameData.skillTrainer && useSkillTrainer && gameData.currentSkill != whichSkill) 
			startUwU(100) 
		else if (canStartBar(whichSkill)) 
			startUwU(0) 
	} 
	
	function startUwU (x) { 
		gameData.eat -= gameData[whichSkill + "SkillLevel"] 
		gameData[whichSkill + "Bar"] = x 
		startSkillBar(whichSkill) 
	} 

} 

function startSkillBar(whichSkill) {
	for (let i = 0; i < skills.length; i++) { 
		if (skills[i].id == whichSkill) 
			number = i 
	}
	gameData[whichSkill + 'BarRunning'] = true 
	if (gameData[whichSkill + 'Bar'] < 100) { 
		amountToMove = gameData.tickspeed / (10 * gameData.intelligenceSkillLevel + 1) 
		amountToMove *= skills[number].speed 
		if (gameData.currentEnlightenment != 'none') 
			amountToMove *= gameData.wisdomUpgradeskillSavyLevel + 1 
		gameData[whichSkill + 'Bar'] += amountToMove 
		setTimeout(startSkillBar, 15, whichSkill) 
	} 
	else { 
		gameData[whichSkill + 'BarRunning'] = false 
		gameData[whichSkill + "SkillLevel"] += 1 
		gameData[whichSkill] += 2 
	} 
	moveBar(whichSkill) 
}