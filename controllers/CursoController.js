const { Curso } = require('../models')

module.exports = class CursoController {
    static async new(req, res) {
        try {
            await Curso.create({
                nome_curso: req.body.nome_curso,
                descricao: req.body.descricao,
                instrutorId: req.body.instrutorId
            });
            res.status(200).json({msg: "curso criado com sucesso!"});
        }catch(erro) {
            res.status(500).json({erro: erro.message})
        }
    }

    static async showAll(req, res) {
        try {
            const cursos = await Curso.findAll({include:'instrutor'});
            res.status(200).json({cursos});
        }catch(erro) {
            res.status(500).json({erro: erro.message})
        }
    }

    static async show(req, res) {
        try {
            const curso = await Curso.findByPk(req.params.id, {
                include: 'instrutor'
            });
            res.status(200).json({curso});
        }catch(erro) {
            res.status(500).json({erro: erro.message})
        }
    }

    static async update(req, res) {
        try {
            const curso = await Curso.findByPk(req.params.id);
            await Curso.update({
                nome_curso: req.body.nome_curso,
                descricao: req.body.descricao,
                instrutorId: req.body.instrutorID
            });
            res.status(200).json({msg: "curso atualizado com sucesso!"});
        }catch(erro) {
            res.status(500).json({erro: erro.message})
        }
    }

    static async delete(req, res) {
        try {
            const curso = await Curso.findByPk(req.params.id);
            curso.destroy();
            res.status(200).json({msg: "curso excluúdo com sucesso!"});
        }catch(erro) {
            res.status(500).json({erro: erro.message})
        }
    }
}