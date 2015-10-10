Template.Layout.events({
  'submit form#join': function(e, t) {
    e.preventDefault();
    let name = $(e.target).children("[name=name]").val()
    let user = Users.insert({name: name})
    let game = Games.update({_id: "SScqmb9BANLvNWsSY"}, {$push: {players: user} })
    Session.set("currentView", "gameView")
  }
})

/**
 * {
 *   id: "",
 *   players: [
 *     {
 *       name: ""
 *     }
 *   ],
 *   rounds: [
 *     {
 *       letter: "",
 *       entries: [
 *         {
 *           player_id: "",
 *           words: ["","",""]
 *           score: 0
 *         }
 *       ]
 *     }
 *   ]
 * }
 */
