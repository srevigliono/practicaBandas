const bandas = require("../db/index.js");

const controller = {
    index: function (req, res) {
      return res.render("listaBandas", { title: "Lista de bandas", bandas: bandas });
    }
  };

module.exports = controller;






