
WAF.onAfterInit = function onAfterInit() {// @lock

// @region namespaceDeclaration// @startlock
	var loginButton1 = {};	// @LoginButton
// @endregion// @endlock

// eventHandlers// @lock

	loginButton1.error = function loginButton1_error (event)// @startlock
	{// @endlock
		alert('mauvais credentials')
	};// @lock

// @region eventManager// @startlock
	WAF.addListener("loginButton1", "error", loginButton1.error, "WAF");
// @endregion
};// @endlock
