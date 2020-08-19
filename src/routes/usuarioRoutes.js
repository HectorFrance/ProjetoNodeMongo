module.exports = function (app) {
	const usuarios = require("../controllers/usuarioController.js")
	app.route("/usuarios")
	.get(usuarios.listAll)
	.post(usuarios.createOne)
}