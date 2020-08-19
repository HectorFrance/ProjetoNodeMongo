
const mongoose = require("mongoose")
const usuario = mongoose.model("usuarios")

exports.listAll =(req,res) => {
		let usuarios = [
		{
			nome: "teste01",
			email: "teste@123.com"
		},
		{
			nome: "teste02",
			email: "teste@123.com"
		},
		{
			nome: "teste03",
			email: "teste@123.com"
		}
	]
	res.send(usuarios)
}

exports.createOne =(req, res) => {
	const {nome, email} = req.body
	let novoUsuario = new usuario({nome, email})
	novoUsuario.save((error, usuario) => {
		if (error) {
			res.send(error)
		}
		let response = {
		message: "usuario cadastrado com sucesso",
		data: usuario
	}
	res.send(response)
	})
}