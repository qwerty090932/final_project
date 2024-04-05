const db = require('../database');
class VacancyController {
    async createVacancy(req, res) {
        const {company_id, post_id, education, salary} = req.body;
        const newVacancy = await db.query('INSERT INTO vacancy (company_id, post_id, education, salary) VALUES ($1, $2, $3, $4) RETURNING *', [company_id, post_id, education, salary]);
        res.json(newVacancy.rows[0]);
    }
    async getCVacancies(req, res) {
        const {companyId, postId} = req.query.companyId.postId;
        if (!companyId && !postId) {
            const vacancy = await db.query('SELECT * FROM vacancy');
            res.json(vacancy);
        }
        if (companyId && !postId) {
            const vacancy = await db.query('SELECT * FROM vacancy WHERE company_id = $1', [companyId]);
            res.json(vacancy);
        }
        if (!companyId && postId) {
            const vacancy = await db.query('SELECT * FROM vacancy WHERE post_id = $1', [postId]);
            res.json(vacancy);
        }
    }
    async getOneVacancy(req, res) {
        const id = req.params.id;
        const vacancy = await db.query('SELECT * FROM vacancy WHERE vacancy_id = $1', [id]);
        res.json(vacancy.rows[0]);

    }
    async deleteVacancy(req, res) {
        const id = req.params.id;
        const vacancy = await db.query('DELETE FROM vacancy WHERE vacancy_id = $1', [id]);
        res.json(vacancy.rows[0]);
    }


    // async getVacanciesWithOneCompany(req, res) {

    // }
    // async getVacanciesWithOnePost(req, res) {

    // }
    // async getVacanciesWithOneSalary(req, res) {

    // }
}
module.exports = new VacancyController();