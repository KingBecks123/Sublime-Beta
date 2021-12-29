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
				id: 'pinUnlockDiv',
				format: 'basicBuy',
				show: function () {
					if (!gameData.pinUnlock)
						return true
				},
				buttonText: 'Unlock Pinning Actions',
				buy: 'pinUnlock',
				priceNum: 50,
				priceType: 'coins',
			},
			{
				id: 'buyKnifeDiv',
				format: 'basicBuy',
				show: function () {
					if (!gameData.knife)
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
				bulkAmount: 10,
				bulkToggle: 'peelersBulkToggle',
				buy: 'peelers',
				priceNum: 2,
				priceType: 'coins',
				text1: 'The knife isnt gonna &#39cut&#39 it',
			},
			{
				id: 'sharperPeelerDiv',
				format: 'basicBuy',
				show: function () {
					if (gameData.knifebidextrousSkillLevel == gameData.knifebidextrousSkillLevelMax && !gameData.sharperPeelers)
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
				id: 'bulkBuyUnlockDiv',
				format: 'basicBuy',
				show: function () {
					if (gameData.maps > 1 && !gameData.bulkBuyUnlock)
						return true
				},
				buttonText: 'Bulk Buying',
				buy: 'bulkBuyUnlock',
				priceNum: 500,
				priceType: 'coins',
				text1: 'Pay the entry fee to become a bulk buyer',
			},
			{
				id: 'bulkBuyUnlock2Div',
				format: 'basicBuy',
				show: function () {
					if (gameData.maps >= 2 && gameData.bulkBuyUnlock && !gameData.bulkBuyUnlock2)
						return true
				},
				buttonText: 'Extreme Bulk Buying',
				buy: 'bulkBuyUnlock2',
				priceNum: 500,
				priceType: 'coins',
				text1: 'Normal bulk buying isn&#39t enough!',
			},
			{
				id: 'storageUnlockDiv',
				format: 'basicBuy',
				show: function () {
					if (gameData.maps >= 2 && !gameData.storageUnlock)
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
				id: 'fasterTransportDiv',
				format: 'basicBuy',
				show: function () {
					if (gameData.maps > 2 && !gameData.fasterTransport)
						return true
				},
				buttonText: 'Better Transport',
				buy: 'fasterTransport',
				priceNum: 2000,
				priceType: 'coins',
				text1: 'Adds a new delivery type',
			},
			{
				id: 'buyADeliveryManager',
				format: 'basicBuy',
				show: function () {
					if (!gameData.deliveryManager && gameData.maps > 2)
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
	}
]