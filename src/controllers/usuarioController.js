
const mongoose = require("mongoose")
const usuario = mongoose.model("Usuarios")

exports.listAll =(req,res) => {
	usuario.find({}, (error, usuarios) => {
		if (error){
			res.send(error)
		}
		let response = {
			message: "Listagem efetuada com sucesso",
			data: usuarios
		}
		res.send(response)
	})
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

exports.showOne = (req, res) => {
	usuario.findById(req.params.id, (error, usuario) =>{
		if (error){
			res.send(error)
		}
		let response = {
		message: "usuario Encontrado com sucesso",
		data: usuario
	}
	res.send(response)
	})
}

exports.update = (req,res) => {
	usuario.findOneAndUpdate(
		{_id: req.params.id},
		req.body,
		{new: true},
		(error, usuario) => {
			if (error) {
				res.send(error)
			}
			res.send(usuario)
		}
	)
}

exports.delete = (req,res) => {
	usuario.remove(
		{_id: req.params.id},
		(error, usuario) => {
			if (error) {
				res.send(error)
			}
			let response = {
				message: "usuario Deletado com sucesso",
				data: usuario
			}
			res.send(response)
		})
}