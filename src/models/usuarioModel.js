const mongoose = require("mongoose")
const Schema = mongoose.Schema
const listaSchema = new Schema({
		titulo: {
			type:String,
			required: "Favor insformar o titulo"
		},
		created_at: {
			type: Date,
			default: Date.now
		},
		usuarioCriacao: mongoose. ObjectId
	})
const UsuarioSchema = new Schema({
	nome: {
		type: String,
		required: "Favor informa o nome do usuario"
	},
	email: {
		type: String,
		required: "Favor informa o email do usruario"
	},
	sexo:{
		type:[{
			type:String,
			enum: ["M","F","não informado"]
		}],
		default: ["não informado"]
	},
	created_at: {
		type: Date,
		default: Date.now
	},
	listas: [listaSchema]
})

module.exports = mongoose.model("Usuarios", UsuarioSchema)