define(['pipAPI', 'https://cdn.jsdelivr.net/gh/baranan/minno-tasks@0.*/ep/quep5.js'], function(APIConstructor, epExtension){
	var API = new APIConstructor();
	var global = API.getGlobal();
	return epExtension(
	{
			//The prime categories.
			primeCats :  [
				{
					name : 'Ugly', //Will appear in the data.
					//An array of all media objects for this category.
					mediaArray : [
    				    {word : 'horrible'}, 
    					{word : 'shocking'}, 
    					{word : 'disgusting'}, 
    					{word : 'disagreeable'}, 
    					{word : 'nasty'}, 
    					{word : 'dangerous'}, 
    					{word : 'awful'}, 
    					{word : 'displeasing'}, 
    					{word : 'threatening'}, 
    					{word : 'repellent'}, 
    					{word : 'unpleasant'}, 
    					{word : 'ominous'}
				    ]
				}, 
				{
					name : 'Beautiful', //Will appear in the data.
					//An array of all media objects for this category.
					mediaArray : [
    					{word : 'magnificent'}, 
    					{word : 'appealing'}, 
    					{word : 'charming'}, 
    					{word : 'pleasing'}, 
    					{word : 'engaging'}, 
    					{word : 'pretty'}, 
    					{word : 'enjoyable'}, 
    					{word : 'delightful'}, 
    					{word : 'lovely'}, 
    					{word : 'cheerful'}, 
    					{word : 'welcoming'}, 
    					{word : 'agreeable'}
    				]
				}
			],	

			nTrialsPerPrimeTargetPair:15, //How many trials in a block, per prime-target combination (always three blocks).
			fixationDuration : 500, 
			errorFBDuration : 1500, 
			ITIDuration : 500,

			//Set the image folder here.

			}
	});
});
