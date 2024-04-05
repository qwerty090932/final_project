const db = require('../database');
class CompanyController {
    async createCompany(req, res) {
        const {company_name, type_activity, number_repsesentative} = req.body;
        const newCompany = await db.query('INSERT INTO company (company_name, type_activity, number_repsesentative) VALUES ($1, $2, $3) RETURNING *', [company_name, type_activity, number_repsesentative]);
        res.json(newCompany.rows[0]);
    }
    async getCompanies(req, res) {
        const company = await db.query('SELECT * FROM company');
        res.json(company);
    }
    async getOneCompany(req, res) {
        const id = req.params.id;
        const company = await db.query('SELECT * FROM company WHERE company_id = $1', [id]);
        res.json(company.rows[0]);
    }
    async deleteCompany(req, res) {
        const id = req.params.id;
        const company = await db.query('DELETE FROM company WHERE company_id = $1', [id]);
        res.json(company.rows[0]);
    }
}
module.exports = new CompanyController();