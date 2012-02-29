var hrender;
(function() {

	var templateFuncCache = {};

	// usage hrender("#tmpl-MyComponent",data)
	hrender = function(jqueryIdSelector, data) {
		var templateFunc = templateFuncCache[jqueryIdSelector];
		if (!templateFunc) {
			var source = $(jqueryIdSelector).html();
			templateFunc = Handlebars.compile(source);
			templateFuncCache[jqueryIdSelector] = templateFunc;
		}
		return templateFunc(data)
	}

})();