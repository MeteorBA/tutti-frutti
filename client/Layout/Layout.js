Session.set("currentView", "Join")

Template.Join.events({
  'submit form#join': function(e, t) {
    e.preventDefault();
    let name = $(e.target).children("[name=name]").val()
    let user = Users.insert({name: name})
    let game = Games.findOne();
    Games.update({_id: game._id}, {$push: {players: user} })
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
      columns: [
        {
          name: Sinomimos de pija
        }
      ]
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
