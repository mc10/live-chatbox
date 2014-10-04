(function(undefined) {
	var app = angular.module("liveChatApp", ["firebase"]);

	app.controller("ChatCtrl", function($scope, $firebase) {
		var ref = new Firebase("https://blistering-heat-665.firebaseio.com/data");
		var sync = $firebase(ref);

		// Sync messages as an array
		$scope.messages = sync.$asArray();

		$scope.sendMessage = function(message) {
			$scope.messages.$add({ message: message });
		};
	});
}());
