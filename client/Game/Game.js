Session.set("isGameStarted", false)

Template.Game.events({
  'click button#startGame': (e) => {
    let game = Games.findOne()
    Games.update({_id: game._id}, {$set: {started: true} })
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

  isGameStarted: function() {
    let game = Games.findOne()
    return game.started
  }

})
