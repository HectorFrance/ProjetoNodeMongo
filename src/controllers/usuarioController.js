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
		let response = {
			message: "usuario cadastrado com sucesso",
			data: req.body
		}
		res.send(response)
	}