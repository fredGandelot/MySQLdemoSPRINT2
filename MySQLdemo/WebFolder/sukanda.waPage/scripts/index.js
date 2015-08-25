
WAF.onAfterInit = function onAfterInit() {// @lock

// @region namespaceDeclaration// @startlock
	var textInput1 = {};	// @TextInput
	var findEvent = {};	// @dataSource
	var imageButton16 = {};	// @buttonImage
	var imageButton8 = {};	// @buttonImage
	var icon6 = {};	// @icon
	var imageButton4 = {};	// @buttonImage
// @endregion// @endlock

// eventHandlers// @lock

	textInput1.keyup = function textInput1_keyup (event)// @startlock
	{// @endlock
		sources.leads.query('fullName == :1', find)
			
	};// @lock

	findEvent.onAttributeChange = function findEvent_onAttributeChange (event)// @startlock
	{// @endlock
		// Add your code here
	};// @lock

	imageButton16.click = function imageButton16_click (event)// @startlock
	{// @endlock
		$$('textSupp').show();
		setTimeout(function (){$$('textSupp').hide()},2000)
	};// @lock

	imageButton8.click = function imageButton8_click (event)// @startlock
	{// @endlock
		$$('textAdd').hide();
		$$('text2').show();
		setTimeout(function (){$$('text2').hide()},2000);
		//$$('text2').hide();
	};// @lock

	icon6.click = function icon6_click (event)// @startlock
	{// @endlock
	
	};// @lock

	imageButton4.click = function imageButton4_click (event)// @startlock
	{// @endlock
		$$('textAdd').show();
		document.getElementById("textInput12").focus(); 
	};// @lock

// @region eventManager// @startlock
	WAF.addListener("textInput1", "keyup", textInput1.keyup, "WAF");
	WAF.addListener("find", "onAttributeChange", findEvent.onAttributeChange, "WAF");
	WAF.addListener("imageButton16", "click", imageButton16.click, "WAF");
	WAF.addListener("imageButton8", "click", imageButton8.click, "WAF");
	WAF.addListener("icon6", "click", icon6.click, "WAF");
	WAF.addListener("imageButton4", "click", imageButton4.click, "WAF");
// @endregion
};// @endlock
