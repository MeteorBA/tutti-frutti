Session.set("isGameStarted", false)

Template.Game.helpers({
  isOnGame: function(){
    return Session.get("currentView") == "Game"
  },

  isGameStarted: function(){
    return Session.get("isGameStarted")
  },

  playersCount: function(){
    let game = Games.findOne()
    console.log(game)
    return game.players.length
  },

  playerNames: function() {
    let game = Games.findOne()
    return game.players.map(player => player.name).join(", ")
  }
})
