let game = Games.findOne({})

if (!game) {
  Games.insert({
    columns: [
      "nombres", "paises", "colores", "sinonimos de japi"
    ]
  })
}
