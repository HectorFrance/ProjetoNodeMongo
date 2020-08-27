module.exports = function (app) {
	const usuarios = require("../controllers/usuarioController.js")
	app.route("/usuarios")
	.get(usuarios.listAll)
	.post(usuarios.createOne)

	app.route("/usuarios/:id")
	.get(usuarios.showOne)
	.put(usuarios.update)
	.delete(usuarios.delete)

	app.route("/")
	.get((req, res) => {
	console.log("Acessou via console")
	res.send("Acessou a API do ToDoList")})
	
}