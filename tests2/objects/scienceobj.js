science = [ 
	{
		id: 'watertight',
		equation: 'Math.pow(10, 6 - gameData.peeledLimesPerJuice)',
		text: function () { 
			return 'Currently: ' + gameData.peeledLimesPerJuice + ' Peeled Limes -> 1 Juice'
		},
		description: 'Decreases peeled limes needed to make juice by 1',
		requirement: 'none',
		bar: {
			where: 'watertightBarDiv',
			id: 'watertight',
			granularity: function () {
				(0.0075 * gameData.watertightResearchers) / (eval(science[0].equation))
			},
			start: function() {
				if (gameData.peeledLimesPerJuice > 1) {
					gameData.watertightBar = 0
					barsobj[19].bar()
				}
			},
			bar: function () {
				barMoverAdvanced('watertight')
			},
			end: function () {
				gameData.peeledLimesPerJuice -= 1
			}
		},
	},
	{
		id: 'surveying',
		equation: 'Math.pow(2, gameData.numberOfTiles - 15)',
		text: function () { 
			return 'Currently: ' + gameData.numberOfTiles + ' / 20 Tiles'
		},
		description: 'Increase disease tiles by 1',
		requirement: 'none',
		bar: {
			where: 'surveyingBarDiv',
			id: 'surveying',
			granularity: function () {
				(0.0075 * gameData.surveyingResearchers) / (eval(science[1].equation))
			},
			start: function() {
				if (gameData.numberOfTiles < 20) {
					gameData.surveyingBar = 0
					barsobj[20].bar()
				}
			},
			bar: function () {
				barMoverAdvanced('surveying')
			},
			end: function () {
				gameData.numberOfTiles += 1
				diseaseControlQuit()
			}
		},
	},
	{
		id: 'benevolence',
		equation: 'Math.pow(2, gameData.benevolence * 2)',
		text: function () { 
			return 'Currently: Level ' + gameData.benevolence
		},
		description: 'Increase respect change from helping civilians with more lakes',
		requirement: 'gameData.unlockBenevolence',
		bar: {
			where: 'benevolenceBarDiv',
			id: 'benevolence',
			granularity: function () {
				(0.0075 * gameData.benevolenceResearchers) / (eval(science[2].equation))
			},
			start: function() {
				gameData.benevolenceBar = 0
				barsobj[21].bar()
			},
			bar: function () {
				barMoverAdvanced('benevolence')
			},
			end: function () {
				gameData.benevolence += 1
			}
		},
	}
]
