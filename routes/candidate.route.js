const Router = require('express');
const router = new Router();
const candidateController = require('../controllers/candidate.controller');

router.post('/candidate', candidateController.createCandidate);
router.get('/candidate', candidateController.getCandidates);
router.get('/candidate/:id', candidateController.getOneCandidate);
router.delete('/candidate/:id', candidateController.deleteCandidate);


module.exports = router;