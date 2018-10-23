angular.module('nfl-App', [])
  .controller('nflAppController', function() {

    this.scores = {
      osi: 0,
      jason: 0,
    };
   
    this.updateScore = function (pundit, score) {
      if (!isNaN(score)) {
        this.scores[pundit] += score
        let inputName = pundit + 'Score';
        this.inputs[inputName] = 0;
      }
    }

    this.resetScores = function () {
      this.scores.osi = 0;
      this.scores.jason = 0;
    }
  });
