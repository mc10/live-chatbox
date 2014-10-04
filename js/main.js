requirejs.config({
	baseUrl: "js",
	paths: {
		"angular": "//ajax.googleapis.com/ajax/libs/angularjs/1.2.26/angular.min",
		"jquery": "//ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min",
		"firebase": "//cdn.firebase.com/js/client/1.0.21/firebase",
		"angularfire": "//cdn.firebase.com/libs/angularfire/0.8.2/angularfire.min"
	},
	shim: {
		"angularfire": ["angular", "firebase"]
	}
});

require(["angularfire"], function() {
	var app = angular.module("liveChatApp", ["firebase"]);

	app.controler("ChatCtrl", function($scope, $firebase) {
		var ref = new Firebase("https://blistering-heat-665.firebaseio.com/data");
		var sync = $firebase(ref);
	});
});
