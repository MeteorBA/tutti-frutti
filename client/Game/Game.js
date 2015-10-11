Session.set("isGameStarted", false)

// let clock = 10;

// let timeLeft = function() {
//   if (clock > 0) {
//     clock++;
//     return console.log(clock);
//   } else {
//     console.log("That's All Folks");
//     return Meteor.clearInterval(interval);
//   }
// };

// let interval = Meteor.setInterval(timeLeft, 1000);

Template.Game.events({
  'click button#startGame': (e) => {
    let game = Games.findOne()
    Games.update({_id: game._id},
                 {$set: {
                    started: true,
                    started_at: Date.now(),
                    letter: Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0, 1)}
                })
   },
   'click button#endGame': (e) => {
     let game = Games.findOne()
     Games.update({_id: game._id}, {$set: {started: false} })
   },
})

Template.Game.helpers({
  isOnGame: function(){
    return Session.get("currentView") == "Game"
  },

  isGameStarted: function(){
    return Session.get("isGameStarted")
  },

  playersCount: function(){
    let game = Games.findOne()
    return game.players.length
  },

  playerNames: function() {
    let game = Games.findOne()
    let players = Users.find({_id: {$in: game.players}})
    return players.fetch().map(player => player.name).join(", ")
  },

  players: function() {
    let game = Games.findOne()
    let players = Users.find({_id: {$in: game.players}})

    return players.fetch().map(player => player.name)
  },

  isGameStarted: function() {
    let game = Games.findOne()
    return game.started
  },

  columns: function () {
    return Games.findOne().columns
  },

  game: function () {
    let game = Games.findOne()
    console.log(game)
    return game
  },

  time: function () {
    let game = Games.findOne()
    let then = moment(game.started_at).format('DD/MM/YYYY HH:mm:ss')
    let now  = moment(Date.now()).format('DD/MM/YYYY HH:mm:ss')
    let diff = moment.utc(moment(now,"DD/MM/YYYY HH:mm:ss").diff(moment(then,"DD/MM/YYYY HH:mm:ss"))).format("HH:mm:ss")
    return diff;
  }

})
