angular.module('healthyGulpAngularApp')

.directive('demoComponent', [function() {
        return {
            restrict: 'AE',
            templateUrl: 'components/demoComponent/demoComponent.html',
        	controller: 'DemoComponentController',
			controllerAs: 'vm',
			bindToController: true
        };
    }]);