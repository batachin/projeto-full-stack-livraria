const express = require('express');
const router = express.Router();

//carrega o book model
const Book = require('../../models/Book');

//GET api/books/test
//rota para testar livros
router.get('/test', (req, res) => res.send('Testando rota book'));

//GET api/books
// pegar todos os livros
router.get('/', (req, res) => {
    Book.find()
        .then(books => res.json(books))
        .catch(err => res.status(404).json({ nobooksfound: 'Nenhum livro encontrado' }));
});

//GET api/books/:id
// pegar livro por id
router.get('/:id', (req, res) => {
    Book.findById(req.params.id)
        .then(books => res.json(books))
        .catch(err => res.status(404).json({ nobooksfound: 'Nenhum livro encontrado' }));
});

//POST api/books
// criar livro
router.post('/', (req, res) => {
    Book.create(req.body)
        .then(books => res.json({ msg: 'Livro adicionado com sucesso' }))
        .catch(err => res.status(404).json({ error: 'não foi possível adicionar este livro' }));
});

//put api/books:id
// atualizar livro
router.put('/:id', (req, res) => {
    Book.findByIdAndUpdate(req.params.id, req.body)
        .then(books => res.json({ msg: 'atualizado com sucesso'}))
        .catch(err => res.status(400).json({ error: 'não foi possivel atualizar a base de dados' }));
});

//delete api/books/:id
// deletar livro por id

router.delete('/:id', (req, res) => {
    Book.findByIdAndDelete(req.params.id, req.body)
        .then(books => res.json({ msg: 'livro deletado com sucesso' }))
        .catch(err => res.status(400).json({ error: 'não existe este livro' }));
});

module.exports = router;