const bandas = require("../db/index.js");

const controller = {
    index: function (req, res) {
      return res.render("listaBandas", { title: "Lista de bandas", bandas: bandas });
    },
    banda: function (req, res) {
        const idBanda = req.params.idBanda;
        const result = [];
    
        for (let i = 0; i < bandas.length; i++) {
          if (bandas[i].nombre.toLowerCase() === idBanda.toLowerCase()) {
            result.push(bandas[i]);
          }
        }
        if (result.length == 0) {
          return res.send("No se encontraron bandas con ese nombre");
        }
        return res.send(result);
      },
    generos: function (req, res) {

        const genero = req.params.genero;
        const result = [];

        for (let i = 0; i < bandas.length; i++) {
        if (bandas[i].genero.toLowerCase() === genero.toLowerCase()) {
            result.push(bandas[i]);
        }
        }
        if (result.length == 0) {
        return res.send("no hay bandas encontrados");
        }
        return res.send(result);
    },

}



module.exports = controller;






