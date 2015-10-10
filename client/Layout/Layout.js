Session.set("currentView", "Join")

Template.Join.events({
  'submit form#join': function(e, t) {
    e.preventDefault();
    let name = $(e.target).children("[name=name]").val()
    let user = Users.insert({name: name})
    let game = Games.update({_id: "SScqmb9BANLvNWsSY"}, {$push: {players: user} })
    Session.set("currentView", "Game")
  }
})

Template.Join.helpers({
  userIsNotJoined: function(){
    return Session.get("currentView") == "Join"
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
