new Vue ({
    el: '#app',
    data: {
        gameIsRunning: false,
        playerHealth: 100,
        monsterHealth: 100,
        actionsLog: []
    },
    methods: {
        startNewGame: function() {
            this.gameIsRunning = true;
            this.playerHealth = 100;
            this.monsterHealth = 100;
            actionsLog = [];
        },
        attack: function() {
            var damage = this.calculateDamage(3, 10);
            this.monsterHealth -= damage;
            this.actionsLog.unshift({
                isPlayer: true,
                text: 'Player HITS Monster for ' + damage
            })
            if(this.checkWin()) {
                return;
            }
            this.monsterAttacks();
        },
        specialAttack: function() {
            var damage = this.calculateDamage(10, 20);
            this.monsterHealth -= damage;
            this.actionsLog.unshift({
                isPlayer: true,
                text: 'Player HITS Monster HARD for ' + damage
            })
            if(this.checkWin()) {
                return;
            }
            this.monsterAttacks();
        },
        heal: function() {
            if(this.playerHealth <= 90) {
                this.playerHealth += 10;
            }
            else {
                this.playerHealth = 100;
            }
            this.actionsLog.unshift({
                isPlayer: true,
                text: 'Player HEALS for 10'
            })
            this.monsterAttacks();
        },
        giveUp: function() {
            this.gameIsRunning = false;
        },
        calculateDamage: function(min, max) {
            return Math.max(Math.floor(Math.random() * max) + 1, min);
        },
        monsterAttacks: function() {
            var damage = this.calculateDamage(5,12);
            this.playerHealth -= damage;
            this.checkWin();
            this.actionsLog.unshift({
                isPlayer: false,
                text: 'Monster HITS Player for ' + damage
            })
        },
        checkWin: function() {
            if (this.monsterHealth <= 0) {
                if(confirm('You won! Do you want to play again?')) {
                    this.startNewGame();
                }
                else {
                    this.gameIsRunning = false;
                }
                return true;
            }
            else if (this.playerHealth <= 0) {
                if(confirm('You lost! Do you want to play again?')) {
                    this.startNewGame();
                }
                else {
                    this.gameIsRunning = false;
                }
                return true;
            }
            return false;
        }
        
    }
});