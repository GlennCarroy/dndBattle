angular.module('BattleApp')
    .config(['$routeProvider', function config($routeProvider) {
        $routeProvider.
            when('/characters', {
            template: '<characters-list></characters-list>'
            }).
            when('/fight', {
            template: '<fight></fight>'
            }).
            otherwise('/characters');
        }
    ])
    .run(['$rootScope', '$location', function($rootScope, $location) {
        $rootScope.$on("$locationChangeStart", function(event, next, current) {
        if(next == current) {
                event.preventDefault();
                $location.path('#!/characters');
            }
        });
    }]);
    