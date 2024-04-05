const Router = require('express');
const router = new Router();
const vacancyController = require('../controllers/vacancy.controller');

router.post('/vacancy',vacancyController.createVacancy);
router.get('/vacancy', vacancyController.getCVacancies);
router.get('/vacancy/:id', vacancyController.getOneVacancy);
router.delete('/vacancy/:id', vacancyController.deleteVacancy);




// router.get('/vacancy/:id', vacancyController.getVacanciesWithOneCompany);
// router.get('/vacancy/:id', vacancyController.getVacanciesWithOnePost);
// router.get('/vacancy/:id', vacancyController.getVacanciesWithOneSalary);
module.exports = router;