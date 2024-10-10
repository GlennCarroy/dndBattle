const basicCharacters = [
    {name:'Emile Armand', class:"Monk", weapon: "Staff", damages: [1,2,5,0], selected:false},
    {name:'Umdar', class:"Warrior", weapon: "Axe", damages: [2,4,0], selected:false},
    {name:'Legolas', class:"Archer", weapon: "Bow", damages: [3,0], selected:false},
    {name:'JikaStul', class:"Sorcerer", weapon: "Magic", damages: [2,3,4,0], selected:false},
    ]

angular.module("CharactersList", [])
    .component("charactersList", {
        templateUrl: 'src/characters/characters-list.template.html',
        controller: function($location, $rootScope) {
            this.characters = basicCharacters

            // Form management
            this.showForm= false
            this.setShowForm = function() {
                return this.showForm = true
            }
            this.addCharacter = function() {
                const data= {
                    name: this.newCharacterName,
                    class: "Warrior",
                    weapon: "Axe",
                    damages: [2,4],
                    selected: true
                }
                this.characters.push(data)
                return this.cancel()
            }
            this.cancel = function() {
                this.newCharacterName = ""
                return this.showForm = false
            }

            // Fight management
            this.selectionIsReady= function() {
                return this.characters.filter(c => c.selected).length === 2
            }
            this.startFight = function() {
                $rootScope.opponents = this.characters.filter(c => c.selected)
                $location.path('/fight')
            }

            // Reveal History
            this.rootHasHistory = function() {
                return $rootScope.lastFightHistory && $rootScope.lastFightHistory.length > 0
            }
        }
    })
