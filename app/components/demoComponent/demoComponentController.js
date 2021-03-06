(function(){
	'use strict';

	angular.module('healthyGulpAngularApp')

	.controller('DemoComponentController', function($http){

		var vm = this;

		var OPTS = ['Option1', 'Option2', 'Option3'];

		vm.sendMessage = sendMessage;
		vm.clearMessages = clearMessages;
		vm.sendChosenOption = sendChosenOption;

		vm.messages = [];
		vm.availableOptions = [];

		function sendMessage(text) {
			vm.messages.push(text);

			var ajaxData = {};
			ajaxData.msgdata = text;
			// if (contextdata) {
			// 	ajaxData.context = contextdata;
			// }

			$http.post('/donalbot', ajaxData).then(successCallback, errorCallback);

			function successCallback(response) {

				vm.messages.push(response.data);

				vm.availableOptions = OPTS;

			}

			function errorCallback(error) {
				console.log(error);
			}

			// $http({
			// 	method: 'POST',
			// 	url: 'https://jsonplaceholder.typicode.com/posts/1'
			// }).then(function successCallback(response) {

			// 	vm.messages.push(response.data);

			// 	vm.availableOptions = OPTS;

			// }, function errorCallback(error) {
			// 	console.log(error);
			// });

			vm.inputMessage = '';
		}

		function sendChosenOption(chosenOption) {
			vm.messages.push(chosenOption);

			vm.inputMessage = '';	
			vm.availableOptions = [];
		}

		function clearMessages() {
			vm.messages = [];
		}


		return vm;
	});

})();