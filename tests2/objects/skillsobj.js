skills = [
	{
		id: 'keenEye',
		name: 'Keen Eye',
		speed: 1,
		textDescription: 'Increase the chance of finding something rather than nothing when collecting limes',
		description: function () {
			return gameData.keenEyeSkillLevel * 5 + '% Chance'
		}
	}, 
	{
		id: 'rottenWisdom',
		name: 'Rotten Wisdom',
		speed: 1,
		textDescription: 'Increase the chance of finding limes rather than rotten limes',
		description: function () {
			return 100 * gameData.rottenWisdomSkillLevel / gameData.rottenWisdomSkillLevelMax + '% Chance'
		}
	}, 
	{
		id: 'limebidextrous',
		name: 'Limebidextrous',
		textDescription: 'Increase the chance of picking up double limes',
		speed: 1,
		description: function () {
			return gameData.limebidextrous + '% Chance'
		}
	}, 
	{
		id: 'intelligence',
		name: 'Intelligence',
		textDescription: 'Increase skilling speed',
		speed: 1,
		description: function () {
			return Math.floor(((gameData.intelligenceSkillLevel * 2) / gameData.intelligenceSkillLevelMax) * 100) + '% Faster'
		}
	}, 
	{
		id: 'knifebidextrous',
		name: 'Knifebidextrous',
		speed: 1,
		textDescription: 'Chance to peel 2 limes rather than 1: +5% & Unlock something special for completing this',
		description: function () {
			return gameData.knifebidextrous * 2.5 + '% Chance'
		}
	}, 
	{
		id: 'motivation',
		name: 'Motivation',
		speed: 1,
		textDescription: 'Increases the amount that motivation affects employees',
		description: function () {
			return ''
		}
	}, 
	{
		id: 'ambidextrous',
		name: 'Ambidextrous',
		speed: 0.1,
		textDescription: 'Yes, i made a skill without a lime pun >:) Reach level 20 to be able to toggle two actions at once',
		description: function () {
			return ''
		}
	}, 
	{
		id: 'bitterSpeed',
		name: 'Bitter Speed',
		speed: 1,
		textDescription: 'The bitterness of the golden limes increases your abilities! Specifically lime peeling and juicing. Every level increases that effect&#39s length.',
		description: function () {
			return ''
		}
	},
]