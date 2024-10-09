angular.module('BattleApp', [])
    .controller('PickCharacterController', ["$scope", function($scope) {
        $scope.characters = [
        {name:'Emile Armand', class:"Monk", weapon: "staff", damages: [1,3,5,6], selected:false},
        {name:'Umdar', class:"Warrior", weapon: "Axe", damages: [2,4], selected:false},
        {name:'Legolas', class:"Archer", weapon: "Bow", damages: [3,0], selected:false},
        {name:'JikaStul', class:"Sorcerer", weapon: "Bow", damages: [1,3,5], selected:false},
        ]
        $scope.selectionIsReady= function() {
            return $scope.characters.filter(c => c.selected).length === 2
        }

        // Form management
        $scope.showForm= false
        $scope.setShowForm = function() {
            return $scope.showForm = true
        }
        $scope.addCharacter = function() {
            $scope.characters.push({
                name: $scope.PickCharacter.newCharacterName,
                class: "Warrior",
                weapon: "Axe",
                damages: [2,4],
                selected: true
            })
            return $scope.cancel()
        }
        $scope.cancel = function() {
            $scope.PickCharacter.newCharacterName = ""
            return $scope.showForm = false
        }

        // Opponents
            $scope.setOpponents = function() {
                $scope.opponents = $scope.characters.filter(c => c.selected)
            }
    }])