const express = require('express');
const router = express.Router();
const CursoController = require('../controllers/CursoController');
const InstrutorController = require('../controllers/InstrutorController');
router.get('/', (req, res) => {res.status(200).send("first route")});
router.post('/curso', CursoController.new);
router.get('/curso', CursoController.showAll);
router.get('/curso/:id', CursoController.show);
router.put('/curso/:id', CursoController.update);
router.delete('/curso/:id', CursoController.delete);

router.post('/instrutor', InstrutorController.new);
router.get('/instrutor', InstrutorController.showAll);
router.get('/instrutor/:id', InstrutorController.show);
router.put('/instrutor/:id', InstrutorController.update);
router.delete('/instrutor/:id', InstrutorController.delete);
module.exports = router