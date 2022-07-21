import autores from "../models/Autor.js";

class AutoresController {
    static listarAutores = (req, res) => {
        autores.find((err, autores) => {
            res.status(200).json(autores);
        });
    }

    static listarAutoresPorId = (req, res) => {
        const id = req.params.id;
        autores.findById(id, (err, autores) => {
            if (err){
                res.status(400).send({message: `${err.message} - Id do autor não localizado`});
            } else {
                res.status(200).send(autores);
            }
        });
    }

    static cadastrarAutores = (req, res) => {
        let Autor = new autores(req.body);
        Autor.save((err) => {
            if (err) {
                res.status(500).send({message: `${err.message} - falha ao cadastrar o Autor`});
            } else {
                res.status(201).send(Autor.toJSON());
            }
        });
    }

    static atualizarAutor = (req, res) => {
        const id = req.params.id;
        autores.findByIdAndUpdate(id, {$set: req.body}, (err) => {
            if (!err){
                res.status(200).send({message: `O Autor ${id} atualizado com sucesso`});
            } else {
                res.status(500).send({message: err.message});
            }
        });
    }

    static excluirAutor = (req, res) => {
        const id = req.params.id;
        autores.findByIdAndDelete(id, (err) => {
            if (!err){
                res.status(200).send({message: `O Autor ${id} excluído com sucesso`});
            } else {
                res.status(500).send({message: err.message});
            }
        });
    }
}

export default AutoresController;