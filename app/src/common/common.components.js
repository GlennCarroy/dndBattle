angular.module("CommonComponents", [])
    .component("history", {
        templateUrl: 'src/common/history.template.html',
        bindings: {
            title: '@',
            data: '<'
        },
        controller: function() {
            this.getColor = function(remaingingLife, element) {
                if(remaingingLife > 6) return `${element}-success`
                else if( remaingingLife > 3) return `${element}-warning`
                else return `${element}-danger`
            }
        }
    })
    .component("card", {
        templateUrl: 'src/common/card.template.html',
        bindings: {
            player: '<'
        },
        controller: function() {
            this.getClasses = function(remaingingLife) {
                if(remaingingLife > 6) return `progress-bar bg-success`
                else if( remaingingLife > 3) return `progress-bar bg-warning`
                else return `progress-bar  bg-danger`
            }
        }
    })
