angular.module("Fight", [])
    .component("fight", {
        templateUrl: 'src/fight/fight.template.html',
        controller: function($rootScope) {
            this.fighters = $rootScope.opponents && $rootScope.opponents.map(o => ({ ...o, life: 10 }))
            this.fightIsOver = false
            this.history= []

            this.hit = function() {
                let turn = []
                const damages = this.fighters.map(f => f.damages[(Math.floor(Math.random() * f.damages.length))])
                this.fighters.forEach((f, i) => {
                    const wounds = damages[i === 0 ? 1 : 0]
                    f.life -= wounds
                    turn.push({
                        name: f.name,
                        life: f.life,
                        wounds,
                    })

                    if(f.life <= 0) this.someoneDied(f.name)
                })
                return this.history.push(turn)
            }

            this.someoneDied = function(name) {
                this.fightIsOver = true
                this.winner =  this.fighters.find(f => f.name !== name)
                $rootScope.lastFightHistory = this.history
            }
        }
    })
    .component("winner", {
        templateUrl: 'src/fight/winner.template.html',
        transclude: true,
        require: {
            fightCtrl: "^fight"
        },
        bindings: {
            winner: '<'
        },
        controller: function($rootScope) {
            this.restart = function() {
                this.fightCtrl.fightIsOver = false
                this.fightCtrl.history= []
                this.fightCtrl.fighters = $rootScope.opponents && $rootScope.opponents.map(o => ({ ...o, life: 10 }))
            }
        }
    })
