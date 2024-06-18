const { Instrutor } = require('../models')

module.exports = class InstrutorController {
    static async new(req, res) {
        try {
            await Instrutor.create({
                nome: req.body.nome,
                cpf: req.body.cpf,
                nasc: new Date(req.body.nasc)
            });
            res.status(200).json({msg: "instrutor criado com sucesso!"});
        }catch(erro) {
            res.status(500).json({erro: erro.message})
        }
    }

    static async showAll(req, res) {
        try {
            const instrutor = await Instrutor.findAll();
            res.status(200).json({instrutor});
        }catch(erro) {
            res.status(500).json({erro: erro.message})
        }
    }

    static async show(req, res) {
        try {
            const instrutor = await Instrutor.findByPk(req.params.id);
            res.status(200).json({instrutor});
        }catch(erro) {
            res.status(500).json({erro: erro.message})
        }
    }

    static async update(req, res) {
        try {
            const instrutor = await Instrutor.findByPk(req.params.id);
            await instrutor.update({
                nome: req.body.nome,
                cpf: req.body.cpf,
                nasc: new Date(req.body.nasc)
            });
            res.status(200).json({msg: "instrutor atualizado com sucesso!"});
        }catch(erro) {
            res.status(500).json({erro: erro.message})
        }
    }

    static async delete(req, res) {
        try {
            const instrutor = await Instrutor.findByPk(req.params.id);
            instrutor.destroy();
            res.status(200).json({msg: "instrutor excluúdo com sucesso!"});
        }catch(erro) {
            res.status(500).json({erro: erro.message})
        }
    }
}