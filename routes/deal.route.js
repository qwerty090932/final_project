const Router = require('express');
const router = new Router();
const dealController = require('../controllers/deal.controller');

router.post('/deal',dealController.createDeal);
router.get('/deal', dealController.getDeals);
router.get('/deal/:id', dealController.getOneDeal);
router.delete('/deal/:id', dealController.deleteDeal);



// router.get('/deal/:id',dealController.getDealsWithOneVacancy);
module.exports = router;