const mongoose = require("mongoose")

const Schema = mongoose.Schema

const UsuarioSchema = new Schema({
	nome: {
		type: String,
		required: "Favor informa o nome do usuario"
	},
	email: {
		type: String,
		required: "Favor informa o email do usruario"
	},
	created_at: {
		type: Date,
		default: Date.now
	}
})

module.exports = mongoose.model("usuarios", UsuarioSchema)