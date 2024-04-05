const db = require('../database');
class DealController {
    async createDeal(req, res) {
        const {vacancy_id, candidate_id, deal_date} = req.body;
        const newDeal = await db.query('INSERT INTO deal (vacancy_id, candidate_id, deal_date) VALUES ($1, $2, $3) RETURNING *', [vacancy_id, candidate_id, deal_date]);
        res.json(newDeal.rows[0]);

    }
    async getDeals(req, res) {
        const {vacancyId} = req.query;
        if (vacancyId){
            res.json(await db.query('SELECT * FROM deal JOIN vacancy USING(vacancy_id) WHERE vacancy_id = $1', [vacancyId]));
        }
        else {
            res.json(await db.query('SELECT deal_id, deal_date, vacancy_id, candidate_name FROM deal JOIN candidate USING(candidate_id)'));
        }
    }
    async getOneDeal(req, res) {
        const id = req.params.id;
        const deal = await db.query('SELECT deal_id, deal_date, vacancy_id, candidate_name FROM deal JOIN candidate USING(candidate_id) WHERE deal_id = $1', [id]);
        res.json(deal.rows[0]);
    }
    async deleteDeal(req, res) {
        const id = req.params.id;
        const deal = await db.query('DELETE FROM deal WHERE deal_id = $1', [id]);
        res.json(deal.rows[0]);
    }
    // async getDealsWithOneVacancy(req, res) {
    //     const id = req.query.id;
    //     const deal = await db.query('SELECT * FROM deal JOIN vacancy USING(vacancy_id) WHERE vacancy_id = $1', [id]);
    //     res.json(deal);
    // }
}
module.exports = new DealController();