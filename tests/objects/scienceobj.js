function setScienceObject () {
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
}