divs = 
[
	{
	div: 'plebian',
	elements: 
		[
			{
				id: 'increaseJuicePrice',
				update: function () {
					if (!gameData.increaseJuicePricePermanance)
						colorChanger('increaseJuicePriceButton', accent4)
					else
						colorChanger('increaseJuicePriceButton', '#FF999A')
				},
				elements: [
					{
						text: 'Increase Juice Price',
						id: 'increaseJuicePriceButton',
						onClick: function () {
							increaseJuicePrice()
						},
					},
					{
						text: 'x10',
						id: 'increaseJuicePricex10Button',
						style: 'width:60px;',
						onClick: function () {
							toggle('increaseJuicePricex10')
						},
					}, 
					{
						text: '&#39Squeeze&#39 more money from your customers'
					}, 
					{
						text: 'The more you raise the price, the more it takes to convince the customer to still buy'
					},
					{
						text: '+1% Profit'
					},
					{
						text: '',
						id: 'textForJuicePricePrice'
					},
				]
			},
			{
				format: 'basicUnlock',
				show: function () {
					return true
				},
				buttonText: 'Unlock Pinning Actions',
				buy: 'pinUnlock',
				priceNum: 50,
				priceType: 'coins',
			},
			{
				format: 'basicUnlock',
				show: function () {
					return true
				},
				buttonText: 'Buy A Knife',
				buy: 'knife',
				priceNum: 10,
				priceType: 'coins',
			},
			{
				id: 'tomeDiv',
				format: 'basicBuy',
				show: function () {
					if (gameData.tomes == 0)
						return true
				},
				buttonText: 'Buy A Tome',
				buy: 'tomes',
				priceNum: 10,
				priceType: 'coins',
				text1: 'Tomes can teach you new skills!',
			},
			{
				id: 'buyAPeelerDiv',
				format: 'bulkBuy',
				show: function () {
					if (gameData.knifebidextrousSkillLevel == gameData.knifebidextrousSkillLevelMax && !(gameData.hideMaxedPurchases && gameData.peelers == gameData.peelersMax))
						return true
				},
				buttonText: 'Buy A Peeler',
				buttonId: 'buyAPeelerButton',
				bulkId: 'peelersBulkButton',
				bulkToggle: 'peelersBulkToggle',
				buy: 'peelers',
				priceNum: 2,
				text1: 'The knife isnt gonna &#39cut&#39 it',
			},
			{
				format: 'basicUnlock',
				show: function () {
					if (gameData.knifebidextrousSkillLevel == gameData.knifebidextrousSkillLevelMax)
						return true
				},
				buttonText: 'Sharper Peelers',
				buy: 'sharperPeelers',
				priceNum: 500,
				priceType: 'coins',
				text1: 'Peelers can slice faster!',
			},
			{
				id: 'buyAnotherMapDiv',
				show: function () {
					if (gameData.maps == 1)
						return true
				},
				elements: [
					{
						text: 'Buy Another Map',
						style: 'background-color:#DEAD85',
						onClick: function () {
							buyAMap()
						},
					}, 
					{
						text: 'There must be more to this town...'
					}, 
					{
						text: 'Price: 200 Coins'
					},
				]
			},
			{
				format: 'basicUnlock',
				show: function () {
					if (gameData.maps > 1)
						return true
				},
				buttonText: 'Bulk Buying',
				buy: 'bulkBuyUnlock',
				priceNum: 500,
				priceType: 'coins',
				text1: 'Pay the entry fee to become a bulk buyer',
			},
			{
				format: 'basicUnlock',
				show: function () {
					if (gameData.maps >= 2 && gameData.bulkBuyUnlock)
						return true
				},
				buttonText: 'Extreme Bulk Buying',
				buy: 'bulkBuyUnlock2',
				priceNum: 500,
				priceType: 'coins',
				text1: 'Normal bulk buying isn&#39t enough!',
			},
			{
				format: 'basicUnlock',
				show: function () {
					if (gameData.maps >= 2)
						return true
				},
				buttonText: 'Bulk Storage',
				buy: 'storageUnlock',
				priceNum: 200,
				priceType: 'coins',
				text1: 'Purchase a warehouse for your tools',
			},
			{
				id: 'storageJuicersDiv',
				show: function () {
					if (gameData.storageUnlock && !gameData.storageJuicersUnlock)
						return true
				},
				elements: [
					{
						text: 'Bulk Juicers Storage',
						onClick: function () {
							storageUnlockFunction('juicers')
						},
					}, 
					{
						text: 'Store 5x as many juicers'
					}, 
					{
						text: 'Price: 100 Coins'
					},
				]
			},
			{
				id: 'storagePeelersDiv',
				show: function () {
					if (gameData.storageUnlock && !gameData.storagePeelersUnlock)
						return true
				},
				elements: [
					{
						text: 'Bulk Peelers Storage',
						onClick: function () {
							storageUnlockFunction('peelers')
						},
					}, 
					{
						text: 'Store 5x as many peelers'
					}, 
					{
						text: 'Price: 100 Coins'
					},
				]
			},
			{
				format: 'basicUnlock',
				show: function () {
					if (gameData.maps > 2)
						return true
				},
				buttonText: 'Better Transport',
				buy: 'fasterTransport',
				priceNum: 2000,
				priceType: 'coins',
				text1: 'Adds a new delivery type',
			},
			{
				format: 'basicUnlock',
				show: function () {
					if (gameData.maps > 2)
						return true
				},
				buttonText: 'Buy A Delivery Manager',
				buy: 'deliveryManager',
				priceNum: 500,
				priceType: 'coins',
				text1: 'Creates on option to sell max juice',
			},
			{
				id: 'buyThirdMapDiv',
				show: function () {
					if (gameData.maps == 2)
						return true
				},
				elements: [
					{
						text: 'Buy A Bigger Map',
						style: 'background-color:#DEAD85',
						onClick: function () {
							buyAMap()
						},
					}, 
					{
						text: 'There must be more *than* this town...'
					}, 
					{
						text: 'Price: 2,000 Coins'
					},
				]
			},
			{
				id: 'buyFourthMapDiv',
				show: function () {
					if (gameData.maps == 3)
						return true
				},
				elements: [
					{
						text: 'Buy A Giant Map',						
						style: 'background-color:#DEAD85',
						onClick: function () {
							buyAMap()
						},
					}, 
					{
						text: 'Find places only the rich can go'
					}, 
					{
						text: 'Price: 200,000 Coins'
					},
				]
			},
			{
				format: 'basicUnlock',
				show: function () {
					if (gameData.maps > 3)
						return true
				},
				buttonText: 'Buy A Respect Billboard',
				buy: 'respectBillboard',
				priceNum: 100000,
				priceType: 'coins',
				text1: 'Put your face on a billboard so people know who helped them',
			},
			{
				id: 'buyPie',
				format: 'basicBuy',
				show: function () {
					if (gameData.maps > 4)
						return true
				},
				buttonText: 'Buy Pie',
				buy: 'pies',
				priceNum: 5,
				priceType: 'betaCoins',
				text1: 'Pie is essential for the patrician diet',
			},
			{
				format: 'basicUnlock',
				show: function () {
					if (gameData.hasSoldPie)
						return true
				},
				buttonText: 'Buy A Field',
				buy: 'wheatField',
				priceNum: 20,
				priceType: 'betaCoins',
				text1: 'A farmer noticed you reselling pie, and thought you&#39d like to purchase a field',
			},
			{
				id: 'buyWheatSeeds',
				format: 'basicBuy',
				show: function () {
					if (gameData.wheatField)
						return true
				},
				buttonText: 'Buy A Wheat Seed',
				buy: 'wheatSeeds',
				priceNum: 10,
				priceType: 'betaCoins',
				text1: 'Is wheat the new lime?',
			},
			{
				format: 'basicUnlock',
				show: function () {
					if (gameData.wheatField)
						return true
				},
				buttonText: 'Buy A Mortar And Pestle',
				buy: 'mortarAndPestle',
				priceNum: 10,
				priceType: 'pieCoins',
				text1: 'Can grinding ever be fun?',
			},
			{
				format: 'basicUnlock',
				show: function () {
					if (gameData.wheatField)
						return true
				},
				buttonText: 'Buy A Pie Oven',
				buy: 'pieOven',
				priceNum: 10,
				priceType: 'pieCoins',
				text1: 'One step closer to pie creation',
			},
			{
				format: 'basicUnlock',
				show: function () {
					if (gameData.pieOven)
						return true
				},
				buttonText: 'Buy A Pie Conveyor Belt',
				buy: 'pieConveyorBelt',
				priceNum: 20,
				priceType: 'pieCoins',
				text1: 'Automatically sends pies into the oven',
			},
			{
				format: 'basicUnlock',
				show: function () {
					if (gameData.pieOven)
						return true
				},
				buttonText: 'Buy A Bucket With A Hole',
				buy: 'pieBucket',
				priceNum: 20,
				priceType: 'pieCoins',
				text1: 'Automatically drips juice into your pie',
			},
			{
				format: 'basicUnlock',
				show: function () {
					if (gameData.pieBucket)
						return true
				},
				buttonText: 'Buy A Nozzle',
				buy: 'pieBucketNozzle',
				priceNum: 20,
				priceType: 'pieCoins',
				text1: 'Adjust the juice dripping rate for optimum performance',
			},
			{
				format: 'basicUnlock',
				show: function () {
					if (gameData.pieBucket)
						return true
				},
				buttonText: 'Buy Another Bucket With A Hole',
				buy: 'pieFlourBucket',
				priceNum: 20,
				priceType: 'pieCoins',
				text1: 'Automatically drops flour into your pie',
			},
			{
				format: 'basicUnlock',
				show: function () {
					if (gameData.pieFlourBucket)
						return true
				},
				buttonText: 'Buy Another Nozzle',
				buy: 'pieFlourBucketNozzle',
				priceNum: 20,
				priceType: 'pieCoins',
				text1: 'Adjust the flour dropping rate for optimum performance',
			},
			{
				format: 'basicUnlock',
				show: function () {
					if (gameData.pieOven)
						return true
				},
				buttonText: 'Buy Bellows',
				buy: 'bellows',
				priceNum: 20,
				priceType: 'pieCoins',
				text1: 'Increases oven speed by adding more oxygen',
			},
			{
				format: 'basicUnlock',
				show: function () {
					if (gameData.hasSoldPie)
						return true
				},
				buttonText: 'Hire An Employee',
				buy: 'pieEmployee',
				priceNum: 50,
				priceType: 'pieCoins',
				text1: 'This person will give the pie to the customer, but must be paid.',
			},
			{
				format: 'basicUnlock',
				show: function () {
					if (gameData.pieFlourBucketNozzle && gameData.pieBucketNozzle)
						return true
				},
				buttonText: 'Upgrade Nozzles',
				buy: 'upgradeNozzles',
				priceNum: 50,
				priceType: 'pieCoins',
				text1: 'These new nozzles allow for finer tuning',
			},
			{
				id: 'bucketThinSteelPlating',
				show: function () {
					if (gameData.pieBucket == 1 && gameData.pieFlourBucket == 1)
						return true
				},
				update: function () {
					update("bucketThinSteelPlatingPrice", "Price: " + (gameData.bucketThinSteelPlating * 5 + 20).toLocaleString() + " Pie Coins")
					update("bucketHeight", "Current heights: " + (gameData.bucketThinSteelPlating * 5 + 20).toLocaleString() + " Units")
				},
				elements: [
					{
						text: 'Buy Thin Steel Plating',
						onClick: function () {
							universalBuy('bucketThinSteelPlating', gameData.bucketThinSteelPlating * 5 + 20, 'pieCoins')
						},
					}, 
					{
						text: 'Perfect for extending the height of your buckets'
					}, 
					{
						id: 'bucketHeight'
					},
					{
						id: 'bucketThinSteelPlatingPrice'
					},
				]
			},
			{
				id: 'buyASeedDrill',
				format: 'basicBuy',
				show: function () {
					if (gameData.wheatField)
						return true
				},
				buttonText: 'Buy A Seed Drill',
				buy: 'seedDrills',
				priceNum: 50,
				priceType: 'pieCoins',
				text1: 'This is sow useful!',
			},
			{
				id: 'buyAWheatHarvester',
				format: 'basicBuy',
				show: function () {
					if (gameData.wheatField)
						return true
				},
				buttonText: 'Buy A Wheat Harvester',
				buy: 'wheatHarvesters',
				priceNum: 50,
				priceType: 'pieCoins',
				text1: 'Does what it says on the label',
			},
			{
				format: 'basicUnlock',
				show: function () {
					if (gameData.pieEmployee)
						return true
				},
				buttonText: 'Unlock Advanced Pie Hiring',
				buy: 'advancedPieHiring',
				priceNum: 50,
				priceType: 'pieCoins',
				text1: 'Go through pie merchant applications in the Hiring Area',
			},
			{
				format: 'basicUnlock',
				show: function () {
					if (gameData.hasSoldPie)
						return true
				},
				buttonText: 'Train Transport',
				buy: 'trainTransport',
				priceNum: 200,
				priceType: 'pieCoins',
				text1: 'Adds a new delivery type',
			},
			{
				format: 'basicUnlock',
				show: function () {
					if (gameData.maps > 4 && gameData.currentEnlightenment == 'none')
						return true
				},
				buttonText: 'Enlightenment',
				buy: 'enlightenmentUnlocked',
				priceNum: 200,
				priceType: 'betaCoins',
				text1: 'Train citizens to be as productive as you',
			}
		]
	},
	{
	div: 'patrician',
	elements: [
			{
				id: 'buyARobe',
				show: function () {
					if (!gameData.silkRobe)
						return true
				},
				elements: [
					{
						text: 'Buy A Robe',
						onClick: function () {
							if (gameData.coins >= 1e5) {
								gameData.coins -= 1e5
								gameData.silkRobe = 1
								gameData.respect += 50
							}
						},
					}, 
					{
						text: 'Guaranteed to make you look rich!'
					}, 
					{
						text: 'Respect +50'
					},
					{
						text: 'Price: 100,000 Coins'
					},
				]
			},
			{
				format: 'basicUnlock',
				show: function () {
					return true
				},
				buttonText: 'Buy A Lightweight Robe',
				buy: 'lightRobe',
				priceNum: 5000,
				priceType: 'alphaCoins',
				text1: 'Respect +50 instantly after travelling',
			},
			{
				format: 'basicUnlock',
				show: function () {
					return true
				},
				buttonText: 'Unlock Permanance',
				buttonStyle: 'background-color:#FF999A;',
				buy: 'increaseJuicePricePermanance',
				priceNum: 500000,
				priceType: 'coins',
				text1: 'Make &#39Increase juice price&#39 stay after travelling!',
			},
			{
				format: 'basicUnlock',
				show: function () {
					return true
				},
				buttonText: 'Unlock Swamp Area',
				buy: 'unlockDiseaseAreaSwamp',
				priceNum: 100000,
				priceType: 'coins',
				text1: 'The civilians in the swamp have lime disease too!',
			},
			{
				id: 'tomeDiv2',
				format: 'basicBuy',
				show: function () {
					if (gameData.tomes == 1)
						return true
				},
				buttonText: 'Buy A Tome',
				buy: 'tomes',
				priceNum: 200000,
				priceType: 'coins',
				text1: 'This tome will save you time on limes, 5 stars',
			},
			{
				format: 'basicUnlock',
				show: function () {
					if (gameData.respectMilestone1000)
						return true
				},
				buttonText: 'Buy a conscience',
				buy: 'unlockBenevolence',
				priceNum: 500000,
				priceType: 'coins',
				text1: 'Think about those less fortuanate than you - unlocks Benevolence',
			},
			{
				format: 'basicUnlock',
				show: function () {
					return true
				},
				buttonText: 'Buy A High Tech Surveillance Camera',
				buy: 'surveillanceCamera2',
				priceNum: 200000,
				priceType: 'coins',
				text1: 'Make sure researchers are working while you&#39re away (offline)',
			},
			{
				format: 'basicUnlock',
				show: function () {
					return true
				},
				buttonText: 'Buy A New Tree',
				buy: 'forestTree2',
				priceNum: 1000000,
				priceType: 'coins',
				text1: 'An orchardist recommends this new type of tree',
			},
			{
				id: 'buyMapDiv5',
				format: 'basicBuy',
				show: function () {
					if (gameData.maps == 4)
						return true
				},
				buttonText: 'Buy An Enormous Map',
				buy: 'maps',
				priceNum: 10000000,
				priceType: 'coins',
				text1: 'These map prices are getting absurd...',
			},
		]
	},
	{
	div: 'marketRightSideUnlocked',
	elements: [
			{
				id: 'buyAFork',
				show: function () {
					if (!gameData.fork && gameData.learnANewSkill > -2)
						return true
				},
				elements: [
					{
						text: 'Buy A Fork',
						onClick: function () {
							if (gameData.coins >= 1) {
								gameData.coins -= 1
								gameData.fork = 1
								gameData.eatBar = 0
							}
						},
						style: 'background-color:#BBBBBB'
					}, 
					{
						text: 'Increase eating speed'
					}, 
					{
						text: 'Price: 1 Coin'
					}
				]
			},
			{
				id: 'buyShoesDiv',
				format: 'basicBuy',
				show: function () {
					if (!gameData.shoes && gameData.learnANewSkill > -1)
						return true
				},
				buttonText: 'Buy Shoes',
				buy: 'shoes',
				priceNum: 1,
				priceType: 'coins',
				text1: 'Double auto collect rate',
			},
			{
				id: 'buyAJuicerDiv',
				format: 'bulkBuy',
				show: function () {
					if (gameData.lookAround > 2 && !(gameData.hideMaxedPurchases && gameData.juicers == gameData.juicersMax))
						return true
				},
				buttonText: 'Buy A Juicer',
				buttonId: 'buyAJuicerButton',
				bulkId: 'juicersBulkButton',
				bulkToggle: 'juicersBulkToggle',
				buy: 'juicers',
				priceNum: 1,
				text1: 'Earn liquid assets',
			},
			{
				id: 'buyABasketDiv',
				format: 'bulkBuy',
				show: function () {
					if (gameData.lookAround > 2 && !(gameData.hideMaxedPurchases == 1 && gameData.baskets == gameData.basketsMax))
						return true
				},
				onClick: function () {
					gameData.basketBar -= gameData.basketBar / (gameData.baskets + 1)
					bulkableBuyMax('baskets', 2)
				},
				buttonText: 'Buy A Basket',
				buttonId: 'buyABasketButton',
				bulkId: 'basketsBulkButton',
				bulkToggle: 'basketsBulkToggle',
				buy: 'baskets',
				priceNum: 2,
				text1: 'Collect profits without lifting a finger',
			},
			{
				format: 'basicUnlock',
				show: function () {
					if (gameData.baskets > 0)
						return true
				},
				buttonText: 'Buy A Scarecrow',
				buy: 'basketScarecrow',
				priceNum: 10,
				priceType: 'coins',
				text1: 'Allows your baskets to collect limes while you&#39re away (offline)',
			},
			{
				id: 'buyAMapDiv',
				show: function () {
					if (gameData.lookAround > 2 && gameData.maps == 0)
						return true
				},
				elements: [
					{
						text: 'Buy A Map Of The Town',
						style: 'background-color:#DEAD85',
						onClick: function () {
							buyAMap()
						},
					},
					{
						text: 'Exploration is the key to success'
					},
					{
						text: 'Price: 20 Coins'
					},
				]
			},
		]
	},
	{
	div: 'megaCoinUpgrades',
	elements: [
			{
				format: 'travelUpgrade',
				variable: 'nutritionists',
				name: 'Nutritionist',
				text: 'Doubles food points from eating'
			},
			{
				format: 'travelUpgrade',
				variable: 'increaseJuicePricePermanance',
				name: 'Juice Price Permanance',
				text: 'Juice price is saved after travelling'
			},
			{
				format: 'travelUpgrade',
				variable: 'megaCoinsInBankMax',
				amount: 21,
				name: 'Credit Score',
				text: 'Increases max Mega Coins in the bank'
			},
			{
				format: 'travelUpgrade',
				variable: 'bigGloves',
				name: 'Big Gloves',
				text: 'Helps you pick up double limes!'
			},
			{
				format: 'travelUpgrade',
				variable: 'manuscripts',
				name: 'Manuscripts',
				text: 'Keep 1,000 respect milestone after travelling'
			},
			{
				format: 'travelUpgrade',
				variable: 'betterTraining',
				name: 'Better Training',
				text: 'Increases maximum applicant speed by 100%',
				text2Id: 'textForBetterTraining'
			},
			{
				format: 'travelUpgrade',
				variable: 'nationalJuiceMarketing',
				name: 'National Juice Marketing',
				text: 'Doubles juice sale price'
			},
			{
				format: 'travelUpgrade',
				variable: 'coinsMax',
				amount: 1000001,
				name: 'Wallet',
				text: 'Increases maximum coin storage by 1,000,000',
				text2Id: 'textForCoinsMax'
			},
			{
				format: 'travelUpgrade',
				variable: 'upgradeMoreStorage',
				name: 'More Land',
				text: 'Increases maximum juicers and peelers'
			},
			{
				format: 'travelUpgrade',
				variable: 'surveillanceCamera2',
				name: 'High Tech Surveillance Camera',
				text: 'Makes sure researchers are working while you&#39re away'
			},
			{
				format: 'travelUpgrade',
				variable: 'changeResearchersBy10Unlock',
				name: 'Bulk Researcher Transfer',
				text: 'Cart researchers around rather than giving them any special attention'
			},
			{
				format: 'travelUpgrade',
				variable: 'saveAlphaCoinsUnlock',
				name: 'A Safe On Wheels',
				text: 'Keep alpha coins after travelling'
			},
			{
				format: 'travelUpgrade',
				variable: 'rottenActualWisdom',
				name: 'Rotten (Actual) Wisdom',
				text: 'Lowers the max skill level of Rotten Wisdom from 50 to 25'
			}
		]
	},
	{
	div: 'travellingArea',
	elements: [
			{
				format: 'basicUnlock',
				show: function () {
					return true
				},
				buttonText: 'Buy Big Gloves',
				buttonStyle: 'background-color:#FF999A;',
				buy: 'bigGloves',
				priceNum: 5,
				priceType: 'megaCoins',
				text1: 'Helps you pick up double limes!',
			},
			{
				format: 'basicUnlock',
				show: function () {
					return true
				},
				buttonText: 'Hire A Nutritionist',
				buttonStyle: 'background-color:#FF999A;',
				buy: 'nutritionists',
				priceNum: 5,
				priceType: 'megaCoins',
				text1: 'Get double the nutrition from eating',
			},
			{
				id: 'increaseCreditScore',
				show: function () {
					if (gameData.megaCoinsInBankMax <= 20)
						true
				},
				elements: [
					{
						text: 'Increase Credit Score',
						style: 'background-color:#FF999A',
						onClick: function () {
							if (gameData.megaCoins >= 2) {
								gameData.megaCoins -= 2
								gameData.megaCoinsInBankMax += 30
							}
						}
					}, 
					{
						text: 'Store up to 50 Mega Coins in your bank account'
					}, 
					{
						text: 'Price: 2 Mega Coins'
					},
					{
						text: 'Price: 100,000 Coins'
					}
				]
			},
			{
				format: 'basicUnlock',
				show: function () {
					return true
				},
				buttonText: 'National Juice Marketing',
				buttonStyle: 'background-color:#FF999A',
				buy: 'nationalJuiceMarketing',
				priceNum: 10,
				priceType: 'megaCoins',
				text1: 'Convince the country that juice can be added to anything! Doubles juice sale price',
			},
			{
				id: 'betterTraining',
				show: function () {
					true
				},
				elements: [
					{
						text: 'Search For Specialised Workers',
						style: 'background-color:#FF999A',
						onClick: function () {
							universalBuy('betterTraining', gameData.betterTraining, 'megaCoins')
						}
					}, 
					{
						text: 'Increases maximum applicant speed by 100%'
					}, 
					{
						text: 'The search gets more difficult the more you find'
					},
					{
						id: 'betterTrainingPrice'
					},
				]
			},
			{
				id: 'upgradeMoreStorage',
				show: function () {
					if (gameData.respectMilestone10000)
						return true
				},
				elements: [
					{
						text: 'Buy More Land',
						style: 'background-color:#FF999A',
						onClick: function () {
							if (gameData.megaCoins >= upgradeMoreStoragePrice) {
								gameData.megaCoins -= upgradeMoreStoragePrice
								gameData.juicersMax +=  500
								gameData.peelersMax +=  2500
								gameData.upgradeMoreStorage += 1
							}
						}
					}, 
					{
						text: 'Increases maximum juicers by 500'
					}, 
					{
						text: 'Increases maximum peelers by 2,500'
					},
					{
						id: 'upgradeMoreStoragePrice'
					},
				]
			},
			{
				format: 'basicUnlock',
				show: function () {
					if (gameData.respectMilestone10000)
						return true
				},
				buttonText: '&#39Earn&#39 A Bachelors Degree In Finance',
				buttonStyle: 'background-color:#FF999A',
				buy: 'bachelorsDegreeFinance',
				priceNum: 20,
				priceType: 'megaCoins',
				text1: 'Access the Currency Exchange market',
			},
			{
				id: 'increaseCreditScore2',
				show: function () {
					if (gameData.respectMilestone10000 && !gameData.creditScore2)
						return true
				},
				elements: [
					{
						text: 'Increase Credit Score',
						style: 'background-color:#FF999A',
						onClick: function () {
							if (gameData.megaCoins >= 5) {
								gameData.megaCoins -= 5
								gameData.megaCoinsInBankMax += 150
								gameData.creditScore2 = 1
							}
						}
					}, 
					{
						text: 'Store up to 200 Mega Coins in your bank account'
					}, 
					{
						text: 'Price: 5 Mega Coins'
					},
				]
			},
			{
				id: 'increaseCreditScore3',
				show: function () {
					if (gameData.creditScore2 && !gameData.creditScore3)
						return true
				},
				elements: [
					{
						text: 'Increase Credit Score',
						style: 'background-color:#FF999A',
						onClick: function () {
							if (gameData.megaCoins >= 50) {
								gameData.megaCoins -= 50
								gameData.megaCoinsInBankMax += 800
								gameData.creditScore3 = 1
							}
						}
					}, 
					{
						text: 'Store up to 1,000 Mega Coins in your bank account'
					}, 
					{
						text: 'Price: 50 Mega Coins'
					},
				]
			},
			{
				id: 'buyABiggerWallet',
				show: function () {
					if (gameData.respectMilestone10000)
						return true
				},
				elements: [
					{
						text: 'Buy A Bigger Wallet',
						style: 'background-color:#FF999A',
						onClick: function () {
							if (gameData.megaCoins >= 50) {
								gameData.megaCoins -= 50
								gameData.coinsMax += 1e6
							}
						}
					}, 
					{
						text: 'Store up to +1,000,000 coins'
					}, 
					{
						text: 'Price: 50 Mega Coins'
					},
				]
			},
			{
				format: 'basicUnlock',
				show: function () {
					if (gameData.respectMilestone10000)
						return true
				},
				buttonText: 'Rotten (Actual) Wisdom',
				buttonStyle: 'background-color:#FF999A',
				buy: 'rottenActualWisdom',
				priceNum: 50,
				priceType: 'megaCoins',
				text1: 'Lowers the max skill level of Rotten Wisdom from 50 to 25',
			}
		]
	}
]